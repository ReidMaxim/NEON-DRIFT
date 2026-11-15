import test from "node:test";
import assert from "node:assert/strict";
import * as T from "three";
import { generate, presets } from "../src/world.js";
import {
  buildingSurfaces,
  validateAssemblies,
  localToWorld,
  terrainHeightAt,
  assemblyBounds,
  overlaps3,
} from "../src/assemblies.js";
import { buildAttachments } from "../src/attachment-scene.js";
test("attached assemblies reproduce without altering world topology or scenario anchors", () => {
  for (const seed of [0, 42, 2049, 8128])
    for (let tier = 0; tier < 5; tier++) {
      const a = generate({ seed, tier }),
        b = generate({ seed, tier });
      assert.deepEqual(a.attachments, b.attachments);
      assert.equal(a.attachments.fans.length, 3);
      assert.equal(a.attachments.vents.length, 2);
      assert.deepEqual(validateAssemblies(a), []);
      assert.deepEqual(
        a.city.roads,
        generate({ seed, tier, props: 0 }).city.roads,
      );
    }
});
test("500 seeded worlds and 48 supported extreme configurations satisfy attachment constraints", () => {
  for (let seed = 0; seed < 100; seed++)
    for (let tier = 0; tier < 5; tier++)
      assert.deepEqual(
        validateAssemblies(generate({ seed, tier })),
        [],
        `${seed}/${tier}`,
      );
  for (const seed of [2049, 8128])
    for (const streetWidth of [8, 20])
      for (const density of [0.4, 2])
        for (const height of [0.5, 2])
          for (const tier of [0, 3, 4])
            assert.deepEqual(
              validateAssemblies(
                generate({ seed, streetWidth, density, height, tier }),
              ),
              [],
            );
});
test("fan planes lie on real walls and rotor axes follow the wall normal", () => {
  const w = generate(),
    surfaces = buildingSurfaces(w);
  for (const f of w.attachments.fans) {
    const s = surfaces.find((s) => s.id === f.hostId);
    const b = s.building;
    assert.ok(
      Math.abs(s.normal[0])
        ? Math.abs(Math.abs(f.position[0] - b.x) - b.w / 2) < 1e-8
        : Math.abs(Math.abs(f.position[2] - b.z) - b.d / 2) < 1e-8,
    );
    const origin = localToWorld(f, [0, 0, 0]),
      axis = localToWorld(f, [0, 0, 1]);
    for (let i = 0; i < 3; i++)
      assert.ok(Math.abs(axis[i] - origin[i] - s.normal[i]) < 1e-8);
  }
});
test("renderer batches retain each part transform and rotors rotate inside fixed housings", () => {
  for (const seed of [2049, 8128]) {
    const w = generate({ seed }),
      scene = new T.Scene(),
      view = buildAttachments(scene, w),
      matrix = new T.Matrix4(),
      expected = new T.Matrix4(),
      root = new T.Object3D(),
      part = new T.Object3D();
    scene.updateMatrixWorld(true);
    for (const a of [
      ...w.attachments.fans,
      ...w.attachments.vents,
      ...w.attachments.lamps,
    ]) {
      root.position.fromArray(a.position);
      root.rotation.set(0, a.yaw, 0);
      root.scale.set(1, 1, 1);
      root.updateMatrix();
      for (const p of a.parts.filter((p) => p.kind !== "rotor")) {
        let found = false;
        scene.traverse((o) => {
          const i =
            o.userData.instances?.findIndex(
              (m) => m.assembly === a.id && m.part === p.id,
            ) ?? -1;
          if (i >= 0) {
            found = true;
            o.getMatrixAt(i, matrix);
            part.position.fromArray(p.position);
            part.rotation.set(0, 0, 0);
            part.scale.fromArray(p.size);
            part.updateMatrix();
            expected.multiplyMatrices(root.matrix, part.matrix);
            assert.ok(
              matrix.elements.every(
                (v, k) => Math.abs(v - expected.elements[k]) < 1e-4,
              ),
            );
          }
        });
        assert.ok(found, `${a.id}/${p.id}`);
      }
    }
    for (const f of w.attachments.fans) {
      const rootObject = scene.getObjectByName(f.id),
        rotor = rootObject.getObjectByName("rotor"),
        before = rootObject.matrix.clone();
      view.update(0, presets.high);
      const rotation = rotor.rotation.z;
      view.update(2, presets.high);
      assert.notEqual(rotor.rotation.z, rotation);
      assert.deepEqual(rootObject.matrix.elements, before.elements);
      rotor.geometry.computeBoundingBox();
      const pos = rotor.geometry.attributes.position;
      for (let i = 0; i < pos.count; i++)
        assert.ok(
          Math.hypot(pos.getX(i) * rotor.scale.x, pos.getY(i) * rotor.scale.y) <
            0.405,
          "swept blade escapes ring",
        );
    }
    const steam = scene.getObjectByName("source-bound-steam"),
      origins = steam.geometry.attributes.position;
    for (let i = 0; i < origins.count; i++) {
      const vent = w.attachments.vents[i % w.attachments.vents.length],
        expected = localToWorld(vent, vent.emitter.position);
      assert.ok(
        [origins.getX(i), origins.getY(i), origins.getZ(i)].every(
          (v, j) => Math.abs(v - expected[j]) < 1e-5,
        ),
      );
      assert.ok(origins.getY(i) > terrainHeightAt(w, expected[0], expected[2]));
    }
    view.update(3, presets.low);
    assert.equal(steam.geometry.drawRange.count, 12);
  }
});
test("validation catches detached, misoriented, buried and mis-parented assemblies", () => {
  for (const mutate of [
    (a) => (a.fans[0].position[0] += 0.4),
    (a) => (a.fans[0].yaw += Math.PI / 2),
    (a) => (a.fans[0].hostId = "missing"),
    (a) => (a.fans[0].parts.find((p) => p.id === "rotor").sweptRadius = 1),
    (a) =>
      (a.fans[0].parts.find((p) => p.id === "backplate").position[2] += 0.2),
    (a) => (a.vents[0].position[1] -= 0.2),
    (a) => (a.vents[0].emitter.parentId = "missing"),
    (a) => (a.vents[0].emitter.position[0] = 2),
  ]) {
    const w = generate(),
      a = structuredClone(w.attachments);
    mutate(a);
    assert.ok(validateAssemblies(w, a).length);
  }
});

test("missing source parts and broken component connections are rejected", () => {
  for (const mutate of [
    (a) =>
      (a.fans[0].parts = a.fans[0].parts.filter((p) => p.id !== "duct-top")),
    (a) => (a.fans[0].parts.find((p) => p.id === "rotor").position[2] = 0.7),
    (a) => (a.vents[0].parts.find((p) => p.id === "opening").position[0] = 2),
    (a) => (a.vents[0].emitter.spread[0] = 2),
    (a) => (a.vents[0].parts.find((p) => p.id === "footing").position[1] = 1),
    (a) => (a.lamps[0].parts.find((p) => p.id === "head").position[2] = 5),
    (a) => (a.cables[0].points[0][0] += 1),
  ]) {
    const w = generate(),
      a = structuredClone(w.attachments);
    mutate(a);
    assert.ok(validateAssemblies(w, a).length);
  }
});
