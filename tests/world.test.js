import test from "node:test";
import assert from "node:assert/strict";
import {
  generate,
  colliders,
  movePlayer,
  terminalCommand,
} from "../src/world.js";
test("same seed and configuration reproduce all world data", () =>
  assert.deepEqual(generate({ seed: 42 }), generate({ seed: 42 })));
test("different seeds change architecture", () =>
  assert.notDeepEqual(
    generate({ seed: 42 }).buildings,
    generate({ seed: 43 }).buildings,
  ));
test("prop changes leave buildings and landmark unchanged", () => {
  const a = generate({ props: 0 }),
    b = generate({ props: 2 });
  assert.deepEqual(a.buildings, b.buildings);
  assert.deepEqual(a.terminal, b.terminal);
});
test("invalid configuration rejected", () => {
  for (const c of [
    { seed: NaN },
    { streetWidth: 0 },
    { density: 0 },
    { rain: 3 },
    { neon: ["#ffffff"] },
    { neon: null },
  ])
    assert.throws(() => generate(c));
});
test("movement cannot tunnel through a wall and slides tangentially", () => {
  const p = { x: 0, z: 0 },
    b = [{ minX: 1, maxX: 2, minZ: -10, maxZ: 10 }],
    bounds = { minX: -20, maxX: 20, minZ: -20, maxZ: 20 };
  movePlayer(p, 10, 3, b, bounds);
  assert.ok(p.x < 0.73);
  assert.ok(p.z > 2.9);
});
test("district bounds contain long movement", () => {
  const w = generate(),
    p = { x: 0, z: 13 };
  movePlayer(p, 0, 500, colliders(w), w.bounds);
  assert.equal(p.z, w.bounds.maxZ);
});
test("terminal exposes working commands and exit", () => {
  assert.match(terminalCommand(" STATUS "), /ONLINE/);
  assert.match(terminalCommand("directory"), /ARCHIVE/);
  assert.match(terminalCommand("about"), /NEON-DRIFT/);
  assert.match(terminalCommand("bad"), /Unknown/);
  assert.equal(terminalCommand("exit"), null);
});
