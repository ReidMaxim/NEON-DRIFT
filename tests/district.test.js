import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { generate, colliders, movePlayer } from "../src/world.js";
import { boundsOf, intersects, withinRoads } from "../src/district.js";
import {
  scenarioLayout,
  scenarioColliders,
  createGame,
  act,
  runCommand,
  powered,
} from "../src/scenario.js";
const fixture = JSON.parse(
  fs.readFileSync(new URL("./fixtures/mission002-2049.json", import.meta.url)),
);
test("Tier 0 preserves exact Mission 002 core geometry and scenario placement", () => {
  const w = generate({ tier: 0, seed: 2049 });
  assert.deepEqual(
    {
      buildings: w.buildings,
      props: w.props,
      bounds: w.bounds,
      terminal: w.terminal,
    },
    fixture,
  );
  assert.equal(w.city.buildings.length, 0);
});
test("all tiers reproduce and appearance/prop edits do not alter street topology", () => {
  for (let tier = 0; tier < 5; tier++) {
    const a = generate({ tier, seed: 8128 }),
      b = generate({ tier, seed: 8128 });
    assert.deepEqual(a, b);
    assert.deepEqual(
      a.city.roads,
      generate({ tier, seed: 8128, props: 0, identity: "industrial" }).city
        .roads,
    );
  }
});
test("street graphs connect and buildings avoid roads, each other and landmark", () => {
  for (const seed of [0, 1, 42, 2049, 8128, 4294967295])
    for (const tier of [3, 4]) {
      const w = generate({ seed, tier }),
        seen = new Set(["origin"]),
        queue = ["origin"];
      while (queue.length) {
        const id = queue.shift(),
          node = w.city.graph.find((n) => n.id === id);
        for (const id of node.neighbors)
          if (!seen.has(id)) {
            seen.add(id);
            queue.push(id);
          }
      }
      assert.equal(seen.size, w.city.roads.length);
      const buildings = [...w.buildings, ...w.city.buildings];
      for (let i = 0; i < buildings.length; i++) {
        for (const road of w.city.roads.slice(1))
          assert.ok(
            !intersects(boundsOf(buildings[i]), road),
            `road intersection seed ${seed}`,
          );
        for (let j = 0; j < i; j++)
          assert.ok(
            !intersects(boundsOf(buildings[i]), boundsOf(buildings[j])),
            "overlapping buildings",
          );
      }
    }
});
test("physical collision traversal visits every segment and returns to terminal", () => {
  for (const tier of [3, 4])
    for (const seed of [2049, 8128]) {
      const w = generate({ tier, seed }),
        boxes = [...colliders(w), ...scenarioColliders(scenarioLayout(w))],
        p = { x: 0, z: 13 };
      const path = [
        [0, -28],
        [-39, -28],
        [-39, -57],
        [31, -57],
        [31, -28],
        [0, -28],
        [0, 13],
      ];
      if (tier === 4)
        path.splice(
          5,
          0,
          [31, -10],
          [60, -10],
          [60, -53],
          [31, -53],
          [31, -28],
        );
      for (const [x, z] of path) {
        movePlayer(p, x - p.x, 0, boxes, w.bounds, w.walkable);
        movePlayer(p, 0, z - p.z, boxes, w.bounds, w.walkable);
        assert.ok(
          Math.hypot(p.x - x, p.z - z) < 0.2,
          `route blocked at ${x},${z} (got ${p.x},${p.z})`,
        );
      }
      movePlayer(p, 1000, 0, boxes, w.bounds, w.walkable);
      assert.ok(withinRoads(p.x, p.z, w.walkable));
    }
});
test("both solution paths and all critical approaches remain available in every tier", () => {
  for (let tier = 0; tier < 5; tier++) {
    const w = generate({ tier }),
      layout = scenarioLayout(w),
      p = { x: 0, z: 13 };
    const boxes = [...colliders(w), ...scenarioColliders(layout)];
    for (const o of layout.objects.filter((o) => o.id !== "archive")) {
      const approach = { x: o.position.x, z: o.position.z + 1 };
      movePlayer(p, -p.x, 0, boxes, w.bounds, w.walkable);
      movePlayer(p, 0, approach.z - p.z, boxes, w.bounds, w.walkable);
      movePlayer(p, approach.x - p.x, 0, boxes, w.bounds, w.walkable);
      assert.ok(
        Math.hypot(p.x - approach.x, p.z - approach.z) < 0.5,
        `blocked approach ${o.id}`,
      );
    }
    const g = createGame(w);
    for (const c of [
      "auth line7",
      "route relay power",
      "connect power",
      "power on",
    ])
      runCommand(g, c);
    assert.equal(powered(g), true);
    const physical = createGame(w);
    act(
      physical,
      "power",
      "bypass",
      layout.objects.find((o) => o.id === "power").position,
    );
    assert.equal(powered(physical), true);
  }
});
test("invalid tiers and district identifiers fail clearly", () => {
  for (const tier of [-1, 5, 1.5, NaN]) assert.throws(() => generate({ tier }));
  assert.throws(() => generate({ identity: "unknown" }));
});

test("supported width and density extremes retain the connected loop", () => {
  for (const seed of [0, 42, 2049, 8128])
    for (const tier of [3, 4])
      for (const streetWidth of [8, 12, 20])
        for (const density of [0.4, 1, 2]) {
          const w = generate({ seed, tier, streetWidth, density }),
            boxes = [...colliders(w), ...scenarioColliders(scenarioLayout(w))],
            p = { x: 0, z: 13 };
          for (const [x, z] of [
            [0, -28],
            [-39, -28],
            [-39, -57],
            [31, -57],
            [31, -28],
            [0, -28],
            [0, 13],
          ]) {
            movePlayer(p, x - p.x, 0, boxes, w.bounds, w.walkable);
            movePlayer(p, 0, z - p.z, boxes, w.bounds, w.walkable);
            assert.ok(
              Math.hypot(p.x - x, p.z - z) < 0.3,
              JSON.stringify({ seed, tier, streetWidth, density, x, z, p }),
            );
          }
        }
});
