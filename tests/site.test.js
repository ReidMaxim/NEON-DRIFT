import * as T from "three";
import { buildLayers } from "../src/layer-scene.js";
import test from "node:test";
import assert from "node:assert/strict";
import { generate, colliders, movePlayer } from "../src/world.js";
import { validateSite } from "../src/site.js";
import { streetTiles } from "../src/street-surfaces.js";
import { terrainHeightAt } from "../src/assemblies.js";
import { auditSite } from "./support/site-audit.js";

test("visible paved coverage and navigation have one bounded deterministic source across every tier", () => {
  for (const seed of [0, 42, 2049, 8128])
    for (let tier = 0; tier < 5; tier++) {
      const w = generate({ seed, tier }),
        b = w.site.bounds,
        tiles = streetTiles(w),
        half = w.config.streetWidth / 2 - 1.4;
      assert.deepEqual(validateSite(w), []);
      assert.deepEqual(w.site, generate({ seed, tier }).site);
      const owned = half * 2 * (Math.min(22, b.maxZ) - Math.max(-72, b.minZ));
      assert.ok(
        Math.abs(
          tiles.reduce(
            (sum, t) => sum + (t.maxX - t.minX) * (t.maxZ - t.minZ),
            0,
          ) +
            owned -
            (b.maxX - b.minX) * (b.maxZ - b.minZ),
        ) < 1e-6,
      );
      for (const t of tiles) {
        assert.ok(
          t.minX >= b.minX &&
            t.maxX <= b.maxX &&
            t.minZ >= b.minZ &&
            t.maxZ <= b.maxZ,
        );
        assert.ok(
          terrainHeightAt(w, (t.minX + t.maxX) / 2, (t.minZ + t.maxZ) / 2) >=
            t.height,
        );
      }
      const a = auditSite(w);
      assert.equal(
        a.unreachable.length,
        0,
        JSON.stringify({ ...a, unreachable: a.unreachable.slice(0, 4) }),
      );
    }
});
test("previous invisible parcel edges are traversable while real buildings and walls stay solid", () => {
  for (const seed of [2049, 8128])
    for (const tier of [3, 4]) {
      const w = generate({ seed, tier }),
        boxes = colliders(w);
      for (const [x, z, dx] of [
        [-43.5, -51, -2.5],
        [31, -36, -7],
        [31, -36, 8],
      ]) {
        const p = { x, z };
        movePlayer(p, dx, 0, boxes, w.bounds, w.walkable);
        assert.ok(
          Math.abs(p.x - x - dx) < 0.001,
          JSON.stringify({ seed, tier, p, x, z, dx }),
        );
      }
      for (const g of w.site.boundaries) {
        const p = { x: g.end[0], z: g.end[1] - 1.3 };
        movePlayer(p, 0, 20, boxes, w.bounds, w.walkable);
        assert.ok(p.z > g.end[1] - 1 && p.z < g.end[1] - 0.2);
      }
      const p = { x: -32, z: -42 };
      movePlayer(p, 20, 0, boxes, w.bounds, w.walkable);
      assert.ok(p.x < -27, "tank must still stop movement");
    }
});
test("missing enclosure returns, detached gates and ground/nav mutations are rejected", () => {
  for (const mutate of [
    (w) => {
      w.walkable[0].maxX -= 1;
    },
    (w) => {
      w.layers.parts = w.layers.parts.filter((p) => p.id !== "perimeter-west");
    },
    (w) => {
      w.layers.parts.find((p) => p.id === "boundary-works-1").position[2] -= 2;
    },
    (w) => {
      w.site.boundaries[0].leftWall = "missing";
    },
    (w) => {
      w.layers.parts = w.layers.parts.filter(
        (p) => p.id !== "yard-entry-header",
      );
    },
  ]) {
    const w = generate();
    mutate(w);
    assert.ok(validateSite(w).length);
  }
});
test("extreme width/density/height retains connected service ground and complete enclosures", () => {
  for (const seed of [2049, 8128])
    for (const tier of [3, 4])
      for (const streetWidth of [8, 20])
        for (const density of [0.4, 2])
          for (const height of [0.5, 2]) {
            const w = generate({ seed, tier, streetWidth, density, height });
            assert.deepEqual(validateSite(w), []);
            const audit = auditSite(w);
            assert.equal(
              audit.unreachable.length,
              0,
              JSON.stringify({
                seed,
                tier,
                streetWidth,
                density,
                height,
                missing: audit.unreachable.slice(0, 4),
              }),
            );
          }
});

test("rendered ground matrices and enclosure instances match the physical layout", () => {
  const previous = globalThis.document;
  globalThis.document = {
    createElement: () => ({
      width: 0,
      height: 0,
      getContext: () => ({ fillRect() {}, strokeRect() {}, fillText() {} }),
    }),
  };
  try {
    const w = generate(),
      scene = new T.Scene();
    buildLayers(scene, w);
    const floor = scene.getObjectByName("paved-site"),
      tiles = streetTiles(w),
      matrix = new T.Matrix4();
    assert.deepEqual(floor.userData.surfaceTiles, tiles);
    assert.equal(floor.count, tiles.length);
    tiles.forEach((t, i) => {
      floor.getMatrixAt(i, matrix);
      const top = new T.Vector3(0, 0.5, 0).applyMatrix4(matrix);
      assert.ok(Math.abs(top.y - t.height) < 1e-6);
      assert.ok(Math.abs(matrix.elements[12] - (t.minX + t.maxX) / 2) < 1e-5);
      assert.ok(Math.abs(matrix.elements[0] - (t.maxX - t.minX)) < 1e-5);
    });
    for (const p of w.site.parts) {
      let count = 0;
      scene.traverse((o) => {
        const i = o.userData.parts?.indexOf(p.id) ?? -1;
        if (i >= 0) {
          count++;
          o.getMatrixAt(i, matrix);
          assert.ok(Math.abs(matrix.elements[12] - p.position[0]) < 1e-5);
          assert.ok(Math.abs(matrix.elements[14] - p.position[2]) < 1e-5);
        }
      });
      assert.equal(count, 1, p.id);
    }
  } finally {
    globalThis.document = previous;
  }
});
