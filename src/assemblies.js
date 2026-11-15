import { random } from "./random.js";
import { boundsOf, intersects } from "./district.js";
import {
  scenarioLayout,
  inReservedArea,
  scenarioColliders,
} from "./scenario.js";
const EPS = 1e-6;
export function buildingSurfaces(world) {
  return [
    ...world.buildings.map((b, i) => ({
      b,
      id: `core-${i}-${b.seed}`,
      core: true,
    })),
    ...world.city.buildings.map((b, i) => ({
      b,
      id: `city-${i}-${b.seed}`,
      core: false,
    })),
  ].map(({ b, id, core }) => {
    const vertical = core || b.vertical,
      side = core ? Math.sign(b.x) : b.side,
      normal = [vertical ? -side : 0, 0, vertical ? 0 : -side];
    return {
      id,
      building: b,
      core,
      normal,
      tangent: [normal[2], 0, -normal[0]],
      origin: [
        b.x + (vertical ? (normal[0] * b.w) / 2 : 0),
        0,
        b.z + (vertical ? 0 : (normal[2] * b.d) / 2),
      ],
      width: vertical ? b.d : b.w,
      height: b.h,
      yaw: Math.atan2(normal[0], normal[2]),
    };
  });
}
export function surfacePoint(surface, u, y, depth = 0) {
  return [
    surface.origin[0] + surface.tangent[0] * u + surface.normal[0] * depth,
    y,
    surface.origin[2] + surface.tangent[2] * u + surface.normal[2] * depth,
  ];
}
export function localToWorld(root, p) {
  const s = Math.sin(root.yaw),
    c = Math.cos(root.yaw);
  return [
    root.position[0] + c * p[0] + s * p[2],
    root.position[1] + p[1],
    root.position[2] - s * p[0] + c * p[2],
  ];
}
export function terrainHeightAt(world, x, z) {
  const half = world.config.streetWidth / 2,
    heights = [];
  if (Math.abs(x) <= half + 9 && z >= -75 && z <= 25) heights.push(-0.02);
  if (Math.abs(x) <= half - 1.4 && z >= -72 && z <= 22) heights.push(0.012);
  if (
    Math.abs(x) >= half - 1.3 &&
    Math.abs(x) <= half &&
    z >= -70.5 &&
    z <= 20.5
  )
    heights.push(0.1);
  for (const road of world.city.roads.slice(1))
    if (x >= road.minX && x <= road.maxX && z >= road.minZ && z <= road.maxZ)
      heights.push(-0.01);
  return heights.length ? Math.max(...heights) : null;
}
const box = (id, position, size, material = "metal") => ({
  id,
  kind: "box",
  position,
  size,
  material,
});
export const fanParts = () => [
  box("wall-flange", [0, 0, 0.012], [1.22, 1.22, 0.024], "brass"),
  box("backplate", [0, 0, 0.04], [1.12, 1.12, 0.08]),
  box("duct-back", [0, 0, 0.1], [0.95, 0.95, 0.04], "dark"),
  box("duct-left", [-0.51, 0, 0.32], [0.1, 1.04, 0.5]),
  box("duct-right", [0.51, 0, 0.32], [0.1, 1.04, 0.5]),
  box("duct-top", [0, 0.51, 0.32], [0.94, 0.1, 0.5]),
  box("duct-bottom", [0, -0.51, 0.32], [0.94, 0.1, 0.5]),
  {
    id: "front-ring",
    kind: "ring",
    position: [0, 0, 0.56],
    size: [1.04, 1.04, 0.12],
    material: "metal",
  },
  ...[-1, 1].map((s) =>
    box(`mount-${s}`, [s * 0.44, -0.67, 0.14], [0.14, 0.26, 0.28]),
  ),
  ...[-1, 1].flatMap((x) =>
    [-1, 1].map((y) =>
      box(
        `bolt-${x}-${y}`,
        [x * 0.46, y * 0.46, 0.635],
        [0.065, 0.065, 0.04],
        "brass",
      ),
    ),
  ),
  ...[-0.3, 0, 0.3].map((y) =>
    box(`guard-${y}`, [0, y, 0.65], [0.88, 0.025, 0.025]),
  ),
  {
    id: "rotor",
    kind: "rotor",
    position: [0, 0, 0.43],
    size: [0.76, 0.76, 0.04],
    sweptRadius: 0.39,
    axis: [0, 0, 1],
    material: "brass",
  },
];
export const ventParts = () => [
  box("footing", [0, 0.04, 0], [1.12, 0.08, 0.8]),
  box("opening", [0, 0.1, 0], [0.94, 0.035, 0.62], "dark"),
  ...[-1, 1].map((s) =>
    box(`rim-u-${s}`, [s * 0.52, 0.12, 0], [0.08, 0.16, 0.8]),
  ),
  ...[-1, 1].map((s) =>
    box(`rim-v-${s}`, [0, 0.12, s * 0.36], [0.96, 0.16, 0.08]),
  ),
  ...Array.from({ length: 8 }, (_, i) =>
    box(
      `grate-${i}`,
      [-0.4 + i * 0.114, 0.14, 0],
      [0.045, 0.025, 0.64],
      "brass",
    ),
  ),
];
export function assemblyBounds(assembly, plume = false) {
  let minX = Infinity,
    maxX = -Infinity,
    minY = Infinity,
    maxY = -Infinity,
    minZ = Infinity,
    maxZ = -Infinity;
  for (const p of assembly.parts) {
    for (const sx of [-1, 1])
      for (const sy of [-1, 1])
        for (const sz of [-1, 1]) {
          const q = localToWorld(assembly, [
            p.position[0] + (sx * p.size[0]) / 2,
            p.position[1] + (sy * p.size[1]) / 2,
            p.position[2] + (sz * p.size[2]) / 2,
          ]);
          minX = Math.min(minX, q[0]);
          maxX = Math.max(maxX, q[0]);
          minY = Math.min(minY, q[1]);
          maxY = Math.max(maxY, q[1]);
          minZ = Math.min(minZ, q[2]);
          maxZ = Math.max(maxZ, q[2]);
        }
  }
  if (plume && assembly.emitter) {
    const q = localToWorld(assembly, assembly.emitter.position);
    minX = Math.min(minX, q[0] - 0.55);
    maxX = Math.max(maxX, q[0] + 0.55);
    minZ = Math.min(minZ, q[2] - 0.55);
    maxZ = Math.max(maxZ, q[2] + 0.55);
    maxY = Math.max(maxY, q[1] + 2);
  }
  return { minX, maxX, minY, maxY, minZ, maxZ };
}
export function overlaps3(a, b, margin = 0) {
  return (
    intersects(a, b, margin) &&
    a.minY < b.maxY + margin &&
    a.maxY > b.minY - margin
  );
}
export function placementObstacles(world) {
  const layout = scenarioLayout(world),
    surfaces = buildingSurfaces(world),
    out = surfaces.map((s) => ({
      ...boundsOf(s.building),
      minY: 0,
      maxY: s.height,
      hostId: s.id,
    }));
  for (const p of [...world.props, ...world.city.props])
    out.push({
      minX: p.x - p.w / 2,
      maxX: p.x + p.w / 2,
      minZ: p.z - (p.d || 0.8) / 2,
      maxZ: p.z + (p.d || 0.8) / 2,
      minY: 0,
      maxY: p.h + 0.2,
    });
  for (const b of scenarioColliders(layout))
    out.push({ ...b, minY: 0, maxY: 3.4 });
  for (const o of layout.objects)
    out.push({
      minX: o.position.x - 0.7,
      maxX: o.position.x + 0.7,
      minZ: o.position.z - 0.65,
      maxZ: o.position.z + 0.65,
      minY: 0,
      maxY: 2.6,
    });
  return out;
}
export function clearanceReservations(world) {
  const half = world.config.streetWidth / 2,
    out = [];
  for (const side of [-1, 1]) {
    for (let z = 13; z > -66; z -= 7) {
      const x = side * (half - 0.65);
      out.push({
        minX: x - 1.4,
        maxX: x + 1.4,
        minZ: z - 2.65,
        maxZ: z + 1.5,
        minY: 0,
        maxY: 1.3,
      });
    }
    for (const z of [9, -20, -50]) {
      const x = side * (half - 1);
      out.push({
        minX: x - 0.08,
        maxX: x + 0.08,
        minZ: z - 0.08,
        maxZ: z + 0.08,
        minY: 0,
        maxY: 5.7,
      });
    }
  }
  for (const z of [7, -8, -27, -49])
    out.push({
      minX: -half + 0.15,
      maxX: -half + 1.7,
      minZ: z - 0.3,
      maxZ: z + 1.5,
      minY: 0,
      maxY: 0.7,
    });
  return out;
}
function corePipeObstacles(surface) {
  if (!surface.core) return [];
  const b = surface.building,
    side = Math.sign(b.x),
    face = surface.origin[0];
  return [Math.min(2, b.d / 2 - 0.25), Math.min(1, b.d / 2 - 0.25)].map(
    (z) => ({
      minX: face - side * 0.24 - 0.1,
      maxX: face - side * 0.24 + 0.1,
      minY: 0.15,
      maxY: b.h + 0.1,
      minZ: b.z + z - 0.1,
      maxZ: b.z + z + 0.1,
    }),
  );
}
export function generateAssemblies(world) {
  const surfaces = buildingSurfaces(world),
    layout = scenarioLayout(world),
    obstacles = placementObstacles(world),
    fans = [],
    vents = [],
    cables = [],
    lamps = [],
    r = random(world.config.seed + 524287);
  // Stable rank and valid local service slots; topology/other decorative streams are untouched.
  const core = surfaces.filter((s) => s.core),
    ranked = [...core].sort(
      (a, b) => (a.building.seed % 7919) - (b.building.seed % 7919),
    );
  for (const surface of ranked) {
    if (fans.length === 3) break;
    for (const u of [-surface.width / 2 + 0.72, surface.width / 2 - 0.72]) {
      if (
        Math.abs(u) + 0.62 > surface.width / 2 - 0.08 ||
        Math.abs(u) < 1.42 ||
        surface.height < 3
      )
        continue;
      const fan = {
        id: `fan-${surface.id}`,
        type: "fan",
        hostId: surface.id,
        position: surfacePoint(surface, u, 2, 0),
        yaw: surface.yaw,
        mount: { u, y: 2, depth: 0, normal: surface.normal },
        parts: fanParts(),
        phase: r() * 6.28,
        speed: 0.55 + r() * 0.3,
      };
      const bounds = assemblyBounds(fan);
      if (
        inReservedArea(layout, fan.position[0], fan.position[2], 0.9) ||
        obstacles.some(
          (o) => o.hostId !== surface.id && overlaps3(bounds, o, 0.05),
        ) ||
        corePipeObstacles(surface).some((o) => overlaps3(bounds, o, 0.04)) ||
        fans.some((f) => overlaps3(bounds, assemblyBounds(f), 0.4))
      )
        continue;
      fans.push(fan);
      break;
    }
  }
  const half = world.config.streetWidth / 2;
  for (const side of [-1, 1]) {
    for (let i = 0; i < 40; i++) {
      const z = (side < 0 ? 12 : -20) - i * 1.5,
        x = side * (half - 0.68),
        yaw = Math.atan2(-side, 0),
        height = terrainHeightAt(world, x, z);
      if (height === null || inReservedArea(layout, x, z, 1.05)) continue;
      const vent = {
        id: `steam-${side}`,
        type: "steam",
        hostId: "terrain",
        position: [x, height, z],
        yaw,
        parts: ventParts(),
        emitter: {
          parentId: `steam-${side}`,
          sourcePart: "opening",
          position: [0, 0.17, 0],
          spread: [0.34, 0.21],
          rise: 2,
        },
        seed: world.config.seed + side * 17,
      };
      const bounds = assemblyBounds(vent, true);
      if (
        !flatFooting(world, vent) ||
        clearanceReservations(world).some((o) => overlaps3(bounds, o, 0.08)) ||
        obstacles.some((o) => overlaps3(bounds, o, 0.12)) ||
        fans.some((f) => overlaps3(bounds, assemblyBounds(f), 0.12))
      )
        continue;
      vents.push(vent);
      break;
    }
  }
  for (let i = 0; i < 9; i++) {
    const targetZ = 12 - i * 9,
      pair = [-1, 1].map(
        (side) =>
          core
            .filter((s) => Math.sign(s.building.x) === side && s.height > 10.3)
            .map((s) => ({ surface: s, d: Math.abs(s.origin[2] - targetZ) }))
            .filter((s) => s.d < 5)
            .sort((a, b) => a.d - b.d)[0]?.surface,
      );
    if (pair.some((s) => !s)) continue;
    const anchors = pair.map((surface, j) => {
      const globalZ = Math.max(
          surface.building.z - surface.width / 2 + 0.4,
          Math.min(
            surface.building.z + surface.width / 2 - 0.4,
            targetZ - (j ? 2 : 0),
          ),
        ),
        u = (globalZ - surface.origin[2]) / surface.tangent[2],
        y = 8 + (i % 3);
      return {
        hostId: surface.id,
        u,
        y,
        position: surfacePoint(surface, u, y, 0.22),
        mountPosition: surfacePoint(surface, u, y, 0),
        yaw: surface.yaw,
      };
    });
    const points = [
      anchors[0].position,
      [
        (anchors[0].position[0] + anchors[1].position[0]) / 2,
        Math.min(...anchors.map((a) => a.y)) - 2.4,
        (anchors[0].position[2] + anchors[1].position[2]) / 2,
      ],
      anchors[1].position,
    ];
    const cable = { id: `cable-${i}`, anchors, points };
    if (
      Array.from({ length: 17 }, (_, j) => curvePoint(points, j / 16)).some(
        (p) =>
          obstacles.some(
            (o) =>
              !anchors.some((a) => a.hostId === o.hostId) &&
              p[0] > o.minX - 0.04 &&
              p[0] < o.maxX + 0.04 &&
              p[2] > o.minZ - 0.04 &&
              p[2] < o.maxZ + 0.04 &&
              p[1] > o.minY &&
              p[1] < o.maxY,
          ),
      )
    )
      continue;
    cables.push(cable);
  }
  for (const side of [-1, 1])
    for (const anchorZ of [9, -20, -50])
      for (const offset of [0, 1, -1, 2, -2, 3, -3]) {
        const z = anchorZ + offset,
          x = side * (half - 1),
          ground = terrainHeightAt(world, x, z);
        if (ground === null) continue;
        const height = 5.6 - ground;
        const lamp = {
          id: `lamp-${side}-${anchorZ}`,
          type: "lamp",
          hostId: "terrain",
          position: [x, ground, z],
          yaw: Math.atan2(-side, 0),
          parts: [
            box("pole", [0, height / 2, 0], [0.1, height, 0.1]),
            box("arm", [0, height - 0.08, 0.3], [0.12, 0.12, 0.6]),
            box("head", [0, height, 0.6], [0.36, 0.2, 1.45]),
            box("light", [0, height - 0.11, 0.6], [0.25, 0.045, 1.25], "light"),
          ],
          faulty: side === 1 && anchorZ === 9,
        };
        const blocked = lamp.parts.some((p) => {
          const bounds = assemblyBounds({ ...lamp, parts: [p] });
          return (
            obstacles.some((o) => overlaps3(bounds, o, 0.05)) ||
            clearanceReservations(world)
              .filter((o) => o.maxY < 2)
              .some((o) => overlaps3(bounds, o, 0.03)) ||
            [...fans, ...vents].some((o) =>
              overlaps3(bounds, assemblyBounds(o, true), 0.05),
            )
          );
        });
        if (blocked) continue;
        lamps.push(lamp);
        break;
      }
  return { fans, vents, cables, lamps };
}
export function curvePoint(points, t) {
  const a = (1 - t) ** 2,
    b = 2 * (1 - t) * t,
    c = t * t;
  return [0, 1, 2].map(
    (i) => points[0][i] * a + points[1][i] * b + points[2][i] * c,
  );
}
export function flatFooting(world, assembly) {
  const b = assemblyBounds(assembly);
  return [-1, 0, 1].every((x) =>
    [-1, 0, 1].every((z) => {
      const h = terrainHeightAt(
        world,
        (b.minX + b.maxX) / 2 + (x * (b.maxX - b.minX)) / 2,
        (b.minZ + b.maxZ) / 2 + (z * (b.maxZ - b.minZ)) / 2,
      );
      return h !== null && Math.abs(h - assembly.position[1]) < 0.005;
    }),
  );
}
export function validateAssemblies(world, assemblies = world.attachments) {
  const errors = [],
    surfaces = buildingSurfaces(world),
    obstacles = placementObstacles(world);
  const fail = (id, message) => errors.push({ id, message });
  for (const f of assemblies.fans) {
    const host = surfaces.find((s) => s.id === f.hostId);
    if (!host) {
      fail(f.id, "Missing building host");
      continue;
    }
    const expected = surfacePoint(host, f.mount.u, f.mount.y, 0);
    if (
      expected.some((v, i) => Math.abs(v - f.position[i]) > EPS) ||
      Math.abs(f.yaw - host.yaw) > EPS
    )
      fail(f.id, "Mount no longer matches host plane/orientation");
    if (
      Math.abs(f.mount.u) + 0.62 > host.width / 2 - 0.08 ||
      f.mount.y - 0.8 < 0 ||
      f.mount.y + 0.62 > host.height
    )
      fail(f.id, "Assembly outside host facade");
    for (const id of [
      "wall-flange",
      "backplate",
      "duct-left",
      "duct-right",
      "duct-top",
      "duct-bottom",
      "front-ring",
      "mount--1",
      "mount-1",
      "rotor",
    ])
      if (!f.parts.some((p) => p.id === id))
        fail(f.id, "Incomplete fan assembly: " + id);
    const rotor = f.parts.find((p) => p.id === "rotor"),
      ring = f.parts.find((p) => p.id === "front-ring");
    if (
      rotor &&
      ring &&
      (Math.hypot(
        rotor.position[0] - ring.position[0],
        rotor.position[1] - ring.position[1],
      ) +
        rotor.sweptRadius >
        (ring.size[0] / 2) * (0.44 / 0.56) - 0.005 ||
        rotor.position[2] + rotor.size[2] / 2 >
          ring.position[2] - ring.size[2] / 2 - 0.015)
    )
      fail(f.id, "Rotor intersects casing or front guard");
    if (!rotor || rotor.sweptRadius > 0.405 || rotor.axis.join() !== "0,0,1")
      fail(f.id, "Rotor sweep or axis leaves housing");
    const back = f.parts.find((p) => p.id === "backplate");
    if (!back || Math.abs(back.position[2] - back.size[2] / 2) > EPS)
      fail(f.id, "Backplate detached or buried");
    const b = assemblyBounds(f);
    if (
      obstacles.some((o) => o.hostId !== host.id && overlaps3(b, o, 0.05)) ||
      corePipeObstacles(host).some((o) => overlaps3(b, o, 0.04))
    )
      fail(f.id, "Fan collides with neighboring infrastructure");
  }
  for (const v of assemblies.vents) {
    if (!flatFooting(world, v))
      fail(v.id, "Footing unsupported or crosses terrain step");
    if (v.emitter?.parentId !== v.id || v.emitter.sourcePart !== "opening")
      fail(v.id, "Emitter missing source parent");
    const opening = v.parts.find((p) => p.id === "opening"),
      grates = v.parts.filter((p) => p.id.startsWith("grate-")),
      footing = v.parts.find((p) => p.id === "footing");
    if (!footing || Math.abs(footing.position[1] - footing.size[1] / 2) > EPS)
      fail(v.id, "Grate footing is detached from terrain");
    if (!opening || grates.length !== 8)
      fail(v.id, "Incomplete steam source geometry");
    const top = Math.max(...grates.map((p) => p.position[1] + p.size[1] / 2));
    if (
      !v.emitter ||
      !opening ||
      Math.abs(v.emitter.position[0] - opening.position[0]) +
        v.emitter.spread[0] >
        opening.size[0] / 2 - 0.01 ||
      Math.abs(v.emitter.position[2] - opening.position[2]) +
        v.emitter.spread[1] >
        opening.size[2] / 2 - 0.01 ||
      v.emitter.position[1] < top + 0.005 ||
      v.emitter.position[1] > top + 0.06
    )
      fail(v.id, "Emitter outside grate opening");
    if (
      clearanceReservations(world).some((o) =>
        overlaps3(assemblyBounds(v, true), o, 0.08),
      ) ||
      obstacles.some((o) => overlaps3(assemblyBounds(v, true), o, 0.12))
    )
      fail(v.id, "Steam source/plume intersects nearby geometry");
  }
  for (const c of assemblies.cables)
    for (let i = 0; i < 2; i++) {
      const a = c.anchors[i],
        s = surfaces.find((s) => s.id === a.hostId);
      if (
        !s ||
        Math.abs(a.u) > s.width / 2 - 0.39 ||
        a.y > s.height - 0.1 ||
        surfacePoint(s, a.u, a.y, 0.22).some(
          (v, j) => Math.abs(v - c.points[i * 2][j]) > EPS,
        )
      )
        fail(c.id, "Cable endpoint lacks a valid mounted insulator");
    }
  for (const l of assemblies.lamps) {
    if (terrainHeightAt(world, l.position[0], l.position[2]) !== l.position[1])
      fail(l.id, "Lamp footing detached");
    if (
      l.parts.some((p) =>
        obstacles.some((o) =>
          overlaps3(assemblyBounds({ ...l, parts: [p] }), o, 0.05),
        ),
      )
    )
      fail(l.id, "Lamp intersects neighboring geometry");
    const pole = l.parts.find((p) => p.id === "pole"),
      arm = l.parts.find((p) => p.id === "arm"),
      head = l.parts.find((p) => p.id === "head"),
      light = l.parts.find((p) => p.id === "light");
    const connected = (a, b) =>
      a &&
      b &&
      [0, 1, 2].every(
        (i) =>
          Math.abs(a.position[i] - b.position[i]) <=
          (a.size[i] + b.size[i]) / 2 + 0.015,
      );
    if (
      !connected(pole, arm) ||
      !connected(arm, head) ||
      !connected(head, light)
    )
      fail(l.id, "Lamp head/light detached from support chain");
    if (
      !pole ||
      Math.abs(pole.position[1] - pole.size[1] / 2) > EPS ||
      !arm ||
      arm.position[2] - arm.size[2] / 2 > EPS
    )
      fail(l.id, "Lamp support chain disconnected");
  }
  return errors;
}

export function clearsAssemblyFixtures(world, box) {
  return ![...world.attachments.fans, ...world.attachments.vents].some((a) =>
    overlaps3(box, assemblyBounds(a), 0.035),
  );
}
