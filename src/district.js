import { random } from "./random.js";
export const identities = {
  commercial: {
    name: "Commercial Neon Strip",
    wall: "#273b4b",
    trim: "#465465",
    neon: "#f66bcf",
    accent: "#65eff1",
    style: "canopies",
  },
  industrial: {
    name: "Industrial Service Zone",
    wall: "#293d3f",
    trim: "#695448",
    neon: "#efa75a",
    accent: "#9fc3a6",
    style: "loading bays",
  },
  residential: {
    name: "Residential Backstreets",
    wall: "#3a3649",
    trim: "#62566b",
    neon: "#b3b6ef",
    accent: "#f3c48b",
    style: "balconies",
  },
  abandoned: {
    name: "Abandoned Infrastructure",
    wall: "#303b36",
    trim: "#505646",
    neon: "#9bb56e",
    accent: "#7e9490",
    style: "braced shutters",
  },
};
export const tiers = [
  "Baseline",
  "Microdetail",
  "Atmosphere",
  "Urban expansion",
  "High density",
];
export const intersects = (a, b, margin = 0) =>
  a.minX < b.maxX + margin &&
  a.maxX > b.minX - margin &&
  a.minZ < b.maxZ + margin &&
  a.maxZ > b.minZ - margin;
export const boundsOf = (b) => ({
  minX: b.x - b.w / 2,
  maxX: b.x + b.w / 2,
  minZ: b.z - b.d / 2,
  maxZ: b.z + b.d / 2,
});
export function withinRoads(x, z, roads, r = 0.28) {
  return [
    [-r, -r],
    [-r, r],
    [r, -r],
    [r, r],
  ].every(([dx, dz]) =>
    roads.some(
      (b) =>
        x + dx >= b.minX &&
        x + dx <= b.maxX &&
        z + dz >= b.minZ &&
        z + dz <= b.maxZ,
    ),
  );
}
export function streetGraph(roads) {
  return roads.map((road, i) => ({
    id: road.id,
    neighbors: roads.flatMap((other, j) =>
      i !== j && intersects(road, other) ? [other.id] : [],
    ),
  }));
}
export function expandDistrict(world) {
  const tier = world.config.tier,
    h = world.config.streetWidth / 2;
  const road = (id, x1, z1, x2, z2, width, identity) => ({
    id,
    x1,
    z1,
    x2,
    z2,
    width,
    identity,
    minX: Math.min(x1, x2) - (x1 === x2 ? width / 2 : 0),
    maxX: Math.max(x1, x2) + (x1 === x2 ? width / 2 : 0),
    minZ: Math.min(z1, z2) - (z1 === z2 ? width / 2 : 0),
    maxZ: Math.max(z1, z2) + (z1 === z2 ? width / 2 : 0),
  });
  const roads = [road("origin", 0, 18.35, 0, -69.35, h * 2, "commercial")];
  if (tier >= 3) {
    roads.push(
      road("cross", -49, -28, 46, -28, 12, "commercial"),
      road("works", -39, 5, -39, -61, 11, "industrial"),
      road("homes", 31, 4, 31, -60, 8, "residential"),
      road("silent", -44, -57, 36, -57, 8, "abandoned"),
    );
  }
  if (tier >= 4) {
    roads.push(
      road("overflow", 31, -10, 65, -10, 9, "industrial"),
      road("spur", 60, -7, 60, -57, 8, "abandoned"),
      road("return", 31, -53, 64, -53, 8, "residential"),
    );
  }
  // Fixed corridors with seed-selected landmark modules; no decorative RNG can reroute them.
  const yardShiftX = -Math.max(0, (world.config.streetWidth - 12) / 2);
  const landmarkReservations =
    tier >= 3
      ? [
          {
            id: "cooling",
            minX: -34 + yardShiftX,
            maxX: -18 + yardShiftX,
            minZ: -50,
            maxZ: -34,
          },
          { id: "residential", minX: 19, maxX: 26.6, minZ: -52, maxZ: -38 },
          { id: "terminus", minX: 24, maxX: 38, minZ: -71, maxZ: -61.2 },
        ]
      : [];
  if (tier >= 3)
    roads.push(
      road("yard", -39, -42, -20 + yardShiftX, -42, 12, "industrial"),
      road("terminus", 31, -57, 31, -64, 10, "abandoned"),
    );
  const other = roads.slice(1);
  world.buildings = world.buildings.filter(
    (b) => !other.some((r) => intersects(boundsOf(b), r, 0.6)),
  );
  world.props = world.props.filter(
    (p) =>
      !other.some(
        (r) =>
          p.x > r.minX - 1 &&
          p.x < r.maxX + 1 &&
          p.z > r.minZ - 1 &&
          p.z < r.maxZ + 1,
      ),
  );
  const buildings = [],
    props = [],
    occupied = [...world.buildings.map(boundsOf), ...landmarkReservations],
    r = random(world.config.seed + 17011);
  for (const seg of other) {
    const vertical = seg.x1 === seg.x2,
      start = vertical ? Math.min(seg.z1, seg.z2) : Math.min(seg.x1, seg.x2),
      end = vertical ? Math.max(seg.z1, seg.z2) : Math.max(seg.x1, seg.x2);
    for (const side of [-1, 1])
      for (let t = start + 5; t < end - 3; t += 9 / world.config.density) {
        const along = 5 + r() * 2.5,
          depth = 5 + r() * 4,
          offset = seg.width / 2 + depth / 2 + 0.6;
        const x = vertical ? seg.x1 + side * offset : t,
          z = vertical ? t : seg.z1 + side * offset;
        const b = {
          x,
          z,
          w: vertical ? depth : along,
          d: vertical ? along : depth,
          h: (9 + r() * 21) * world.config.height,
          side,
          vertical,
          identity:
            world.config.identity === "mixed"
              ? seg.id === "cross"
                ? x < -28
                  ? "industrial"
                  : x > 24
                    ? "residential"
                    : seg.identity
                : seg.identity
              : world.config.identity,
          seed: Math.floor(r() * 1e9),
          variant: Math.floor(r() * 4),
        };
        const bounds = boundsOf(b);
        if (
          roads.some((road) => intersects(bounds, road, 0.4)) ||
          occupied.some((o) => intersects(bounds, o, 0.25))
        )
          continue;
        buildings.push(b);
        occupied.push(bounds);
        const faceX = vertical ? x - (side * depth) / 2 : x,
          faceZ = vertical ? z : z - (side * depth) / 2;
        props.push({
          x: faceX - (vertical ? side * 0.7 : 0),
          z: faceZ - (vertical ? 0 : side * 0.7),
          w: 0.7,
          h: 0.8,
          d: 0.8,
          identity: b.identity,
        });
      }
  }
  world.city = {
    roads,
    landmarkReservations,
    yardShiftX,
    graph: streetGraph(roads),
    buildings,
    props,
    landmark: { x: -24 + yardShiftX, z: -42 },
    tier,
    identity: world.config.identity,
  };
  if (tier >= 3) {
    world.walkable = roads;
    world.bounds = {
      minX: Math.min(...roads.map((r) => r.minX)) + 0.3,
      maxX: Math.max(...roads.map((r) => r.maxX)) - 0.3,
      minZ: -69,
      maxZ: 18,
    };
  }
  return world;
}
export function worldMetrics(world) {
  const all = [...world.buildings, ...world.city.buildings],
    roads = world.city.roads;
  let area = 0;
  const minX = Math.min(...roads.map((r) => r.minX)),
    maxX = Math.max(...roads.map((r) => r.maxX)),
    minZ = Math.min(...roads.map((r) => r.minZ)),
    maxZ = Math.max(...roads.map((r) => r.maxZ));
  for (let x = minX; x < maxX; x += 0.5)
    for (let z = minZ; z < maxZ; z += 0.5)
      if (withinRoads(x + 0.25, z + 0.25, roads, 0)) area += 0.25;
  return {
    tier: world.config.tier,
    seed: world.config.seed,
    landmarks: world.layers?.landmarks.length || 0,
    backgroundMasses: world.layers?.skyline.length || 0,
    architecturalFamilies: [
      ...new Set((world.layers?.architecture || []).map((a) => a.family)),
    ],
    streetEnvelope: { width: maxX - minX, length: maxZ - minZ },
    streetSurfaceAreaM2: area,
    buildings: all.length,
    generatedProps: world.props.length + world.city.props.length,
    streetSegments: roads.length,
    identities: [...new Set(world.city.buildings.map((b) => b.identity))],
    modules: world.config.tier === 0 ? 10 : world.config.tier >= 3 ? 24 : 18,
  };
}
