import test from "node:test";
import assert from "node:assert/strict";
import * as T from "three";
import { generate, colliders, movePlayer } from "../src/world.js";
import { boundsOf, intersects, withinRoads } from "../src/district.js";
import {
  validateCityLayers,
  partBounds,
  buildingGrammar,
} from "../src/city-layers.js";
import { streetTiles, sidewalkIntervals } from "../src/street-surfaces.js";
import { terrainHeightAt } from "../src/assemblies.js";
import { buildLayers } from "../src/layer-scene.js";
import { scenarioColliders, scenarioLayout } from "../src/scenario.js";

test("layer grammar, landmark modules and skyline are deterministic and preserve independent streams", () => {
  for (const seed of [0, 42, 2049, 8128])
    for (let tier = 0; tier < 5; tier++) {
      const a = generate({ seed, tier }),
        b = generate({ seed, tier, props: 0 });
      assert.deepEqual(a.layers, b.layers);
      assert.deepEqual(validateCityLayers(a), []);
      assert.equal(a.layers.landmarks.length, tier >= 3 ? 3 : 0);
      if (tier >= 3)
        assert.deepEqual(
          new Set(a.layers.architecture.map((a) => a.family)),
          new Set(["commercial", "industrial", "residential", "abandoned"]),
        );
    }
  assert.notDeepEqual(
    generate({ seed: 2049 }).layers.landmarks,
    generate({ seed: 8128 }).layers.landmarks,
  );
});
test("sampled seeds and extreme proportions preserve structural constraints and reachable landmarks", () => {
  for (const seed of [0, 1, 42, 2049, 8128, 4294967295])
    for (const tier of [3, 4])
      for (const streetWidth of [8, 12, 20])
        for (const density of [0.4, 2])
          for (const height of [0.5, 2]) {
            const w = generate({ seed, tier, streetWidth, density, height });
            assert.deepEqual(
              validateCityLayers(w),
              [],
              `${seed}/${tier}/${streetWidth}/${density}/${height}`,
            );
            const boxes = [
              ...colliders(w),
              ...scenarioColliders(scenarioLayout(w)),
            ];
            for (const l of w.layers.landmarks) {
              const p = { x: 0, z: 13 };
              for (const [x, z] of l.route) {
                movePlayer(p, x - p.x, 0, boxes, w.bounds, w.walkable);
                movePlayer(p, 0, z - p.z, boxes, w.bounds, w.walkable);
                assert.ok(
                  Math.hypot(p.x - x, p.z - z) < 0.1,
                  JSON.stringify({
                    seed,
                    tier,
                    l: l.id,
                    p,
                    x,
                    z,
                    streetWidth,
                    density,
                    height,
                  }),
                );
              }
            }
          }
});
test("background scenery never supplies traversable collision or intersects street envelopes", () => {
  for (const tier of [0, 3, 4]) {
    const w = generate({ tier });
    for (const p of w.layers.parts.filter((p) => p.background)) {
      assert.notEqual(p.collision, "solid");
      assert.ok(!w.city.roads.some((r) => intersects(partBounds(p), r)));
    }
    for (const b of w.layers.boundaries) {
      const r = w.city.roads.find((r) => b.id.startsWith(`boundary-${r.id}-`));
      assert.ok(r);
      const p = {
        x: b.end[0] - (b.vertical ? 0 : b.dir * 1),
        z: b.end[1] - (b.vertical ? b.dir * 1 : 0),
      };
      movePlayer(
        p,
        b.vertical ? 0 : b.dir * 10,
        b.vertical ? b.dir * 10 : 0,
        colliders(w),
        w.bounds,
        w.walkable,
      );
      const distance = (b.vertical ? p.z - b.end[1] : p.x - b.end[0]) * b.dir;
      assert.ok(distance < 0, "gate did not stop crossing");
    }
  }
});
test("junction cells do not overlap and cut sidewalks match actual support heights", () => {
  const w = generate();
  const tiles = streetTiles(w);
  assert.ok(tiles.length > 0);
  for (let i = 0; i < tiles.length; i++)
    for (let j = 0; j < i; j++) assert.ok(!intersects(tiles[i], tiles[j]));
  for (const side of [-1, 1]) {
    const x = side * (w.config.streetWidth / 2 - 0.65);
    assert.equal(terrainHeightAt(w, x, -28), 0.012);
    assert.ok(!sidewalkIntervals(w, side).some(([a, b]) => -28 > a && -28 < b));
    assert.equal(terrainHeightAt(w, x, 0), 0.1);
  }
});
test("families have different structural signatures and supported local transforms", () => {
  const b = {
    x: 20,
    z: -40,
    w: 7,
    d: 8,
    h: 20,
    side: -1,
    vertical: true,
    seed: 2049,
  };
  const recipes = ["commercial", "industrial", "residential", "abandoned"].map(
    (f) => buildingGrammar(b, "host", f),
  );
  for (const [i, prefix] of [
    "awning",
    "loading",
    "balcony",
    "dead-shutter",
  ].entries())
    assert.ok(recipes[i].parts.some((p) => p.id.includes(prefix)));
  for (const a of recipes)
    for (const p of a.parts) {
      assert.equal(p.support, p.id.endsWith(":foundation") ? "ground" : "host");
      assert.ok(p.position.every(Number.isFinite));
    }
  const w = generate(),
    broken = structuredClone(w);
  broken.layers.parts[0].support = "missing";
  assert.ok(
    validateCityLayers(broken).some((e) => e.includes("missing support")),
  );
});
test("render adapter retains nonzero instance colors without requiring absent vertex colors", () => {
  const saved = globalThis.document;
  globalThis.document = {
    createElement: () => ({
      width: 0,
      height: 0,
      getContext: () => ({ fillRect() {}, strokeRect() {}, fillText() {} }),
    }),
  };
  try {
    const scene = new T.Scene(),
      w = generate();
    const view = buildLayers(scene, w);
    assert.ok(view.stats.batches < 45);
    const color = new T.Color();
    scene.traverse((o) => {
      if (o.isInstancedMesh) {
        assert.equal(o.material.vertexColors, false);
        assert.ok(o.instanceColor);
        o.getColorAt(0, color);
        assert.ok(color.r + color.g + color.b > 0);
        assert.ok(o.geometry.attributes.normal);
      }
    });
  } finally {
    globalThis.document = saved;
  }
});

test("setback service brackets touch host mass and low fronts stay below their podium", () => {
  for (const h of [4.5, 6, 9, 20])
    for (const vertical of [false, true])
      for (const side of [-1, 1]) {
        const b = { x: 20, z: -40, w: 7, d: 8, h, side, vertical, seed: 2049 };
        const industrial = buildingGrammar(b, "host", "industrial");
        const bodies = industrial.parts
          .filter((p) => p.role === "body")
          .map(partBounds);
        for (const p of industrial.parts.filter((p) =>
          p.id.includes("platform-bracket"),
        )) {
          const q = partBounds(p);
          assert.ok(
            bodies.some(
              (a) => intersects(a, q) && q.minY < a.maxY && q.maxY > a.minY,
            ),
          );
        }
        if (h < 7.2)
          assert.ok(
            !industrial.parts.some((p) => p.id.endsWith(":service-platform")),
          );
        const domestic = buildingGrammar(b, "host", "residential"),
          podium = domestic.parts.find((p) => p.id.endsWith(":podium"));
        for (const p of domestic.parts.filter((p) =>
          p.id.includes("domestic-reveal"),
        ))
          assert.ok(partBounds(p).maxY <= partBounds(podium).maxY + 0.001);
      }
});
