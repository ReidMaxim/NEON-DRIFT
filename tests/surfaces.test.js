import test from "node:test";
import assert from "node:assert/strict";
import { generate, colliders, movePlayer } from "../src/world.js";
import {
  terrainHeightAt,
  flatFooting,
  localToWorld,
  surfacePlate,
  ventParts,
  validateAssemblies,
  assemblyBounds,
} from "../src/assemblies.js";
import { scenarioColliders, scenarioLayout } from "../src/scenario.js";

test("surface fixtures follow pavement with at most 5mm relief and source-relative steam", () => {
  for (const seed of [0, 42, 2049, 8128])
    for (let tier = 0; tier < 5; tier++) {
      const w = generate({ seed, tier });
      assert.deepEqual(
        w.surfaceDecorations,
        generate({ seed, tier }).surfaceDecorations,
      );
      for (const a of [...w.attachments.vents, ...w.surfaceDecorations]) {
        assert.equal(a.collision, "surface");
        assert.ok(flatFooting(w, a));
        for (const p of a.parts) {
          const top = localToWorld(a, p.position)[1] + p.size[1] / 2;
          assert.ok(top >= a.position[1] && top <= a.position[1] + 0.005);
        }
      }
      for (const v of w.attachments.vents) {
        const top = Math.max(
          ...v.parts
            .filter((p) => p.id.startsWith("grate-"))
            .map((p) => p.position[1] + p.size[1] / 2),
        );
        assert.ok(
          v.emitter.position[1] > top && v.emitter.position[1] < top + 0.025,
        );
        assert.deepEqual(validateAssemblies(w), []);
      }
    }
});
test("actual player collision traverses both grates forward and backward in every tier", () => {
  for (const seed of [0, 42, 2049, 8128])
    for (let tier = 0; tier < 5; tier++) {
      const w = generate({ seed, tier }),
        boxes = [...colliders(w), ...scenarioColliders(scenarioLayout(w))];
      for (const v of w.attachments.vents)
        for (const direction of [-1, 1])
          for (const offset of [-0.15, 0, 0.15]) {
            const p = {
                x: v.position[0] + offset,
                z: v.position[2] + direction * 1.15,
              },
              target = v.position[2] - direction * 1.15;
            for (let i = 0; i < 46; i++)
              movePlayer(p, 0, -direction * 0.05, boxes, w.bounds, w.walkable);
            assert.ok(
              Math.abs(p.z - target) < 1e-7,
              JSON.stringify({
                seed,
                tier,
                id: v.id,
                direction,
                offset,
                p,
                target,
              }),
            );
          }
      for (const f of w.attachments.fans)
        assert.ok(
          boxes.some(
            (b) => JSON.stringify(b) === JSON.stringify(assemblyBounds(f)),
          ),
        );
      const cabinet = w.props[0];
      if (cabinet) {
        const p = { x: cabinet.x, z: cabinet.z + 1 };
        movePlayer(p, 0, -2, boxes, w.bounds, w.walkable);
        assert.ok(p.z > cabinet.z + 0.4);
      }
    }
});
test("surface recipes support roads and sidewalks but reject steps and missing terrain", () => {
  const w = generate({ tier: 0 });
  for (const [x, z] of [
    [0, -40],
    [5.3, -40],
  ]) {
    const p = surfacePlate(w, x, z, 0.5, 0.5);
    assert.ok(p);
    assert.equal(p.position[1], terrainHeightAt(w, x, z));
    const v = { ...p, parts: ventParts() };
    assert.ok(flatFooting(w, v));
  }
  assert.equal(surfacePlate(w, 4.65, -40, 1, 1), null);
  assert.equal(surfacePlate(w, 500, -40, 1, 1), null);
  const a = structuredClone(w.attachments);
  a.vents[0].parts.find((p) => p.id === "rim-u-1").position[1] += 0.1;
  assert.ok(validateAssemblies(w, a).some((e) => /raised/.test(e.message)));
  a.vents[0].collision = "solid";
  assert.ok(validateAssemblies(w, a).some((e) => /walkable/.test(e.message)));
});
