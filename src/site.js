import { boundsOf } from "./district.js";
import { scenarioLayout } from "./scenario.js";

// A single finite paved site owns both rendered ground and permitted movement.
// Buildings/machinery remain independent solid obstacles within that site.
export function buildSite(world) {
  const footprints = [
    ...world.city.roads,
    ...world.buildings.map(boundsOf),
    ...world.city.buildings.map(boundsOf),
    ...world.city.landmarkReservations,
    scenarioLayout(world).room,
    { minX: -2.5, maxX: 6.5, minZ: -71, maxZ: -63 },
  ];
  const bounds = {
    minX: Math.floor((Math.min(...footprints.map((b) => b.minX)) - 2) * 2) / 2,
    maxX: Math.ceil((Math.max(...footprints.map((b) => b.maxX)) + 2) * 2) / 2,
    minZ: Math.floor((Math.min(...footprints.map((b) => b.minZ)) - 2) * 2) / 2,
    maxZ: Math.ceil((Math.max(...footprints.map((b) => b.maxZ)) + 2) * 2) / 2,
  };
  const parts = [],
    labels = [],
    boundaries = [],
    edges = [],
    segments = [],
    height = 0.012;
  const put = (
    id,
    position,
    size,
    family = "industrial",
    tone = 1,
    options = {},
  ) => {
    const p = {
      id,
      position,
      size,
      family,
      tone,
      kind: "box",
      support: "ground",
      ...options,
    };
    parts.push(p);
    return p;
  };
  function wall(
    id,
    x1,
    z1,
    x2,
    z2,
    owner = "site-perimeter",
    family = "industrial",
  ) {
    const vertical = x1 === x2,
      length = Math.hypot(x2 - x1, z2 - z1);
    if (length < 0.01) return;
    segments.push({ id, a: [x1, z1], b: [x2, z2], owner });
    put(
      id,
      [(x1 + x2) / 2, height + 1.35, (z1 + z2) / 2],
      [vertical ? 0.24 : length, 2.7, vertical ? length : 0.24],
      family,
      1,
      { collision: "solid", owner },
    );
    put(
      id + "-cap",
      [(x1 + x2) / 2, height + 2.75, (z1 + z2) / 2],
      [vertical ? 0.3 : length, 0.1, vertical ? length : 0.3],
      family,
      2,
      { support: id, owner },
    );
    for (
      let t = 0;
      t <= length + 0.001;
      t += Math.max(1, length / Math.ceil(length / 6))
    ) {
      const u = t / length;
      put(
        id + "-rib-" + t.toFixed(3),
        [x1 + (x2 - x1) * u, height + 1.45, z1 + (z2 - z1) * u],
        [0.32, 2.9, 0.32],
        family,
        2,
        { support: id, owner },
      );
    }
    return id;
  }
  const north = bounds.maxZ + 0.12;
  const gates = [
    {
      id: "boundary-origin-1",
      x: 0,
      width: Math.min(world.config.streetWidth, 10),
      family: "commercial",
      sourceRoad: "origin",
    },
  ];
  if (world.config.tier >= 3)
    gates.push({
      id: "boundary-works-1",
      x: -39,
      width: 8,
      family: "industrial",
      sourceRoad: "works",
    });
  gates.sort((a, b) => a.x - b.x);
  let cursor = bounds.minX - 0.12;
  for (const [i, g] of gates.entries()) {
    const a = g.x - g.width / 2,
      b = g.x + g.width / 2,
      left = "perimeter-north-" + i,
      right = "perimeter-north-" + (i + 1);
    wall(left, cursor, north, a, north);
    edges.push({ side: "north", start: cursor, end: a, part: left });
    const panel = put(
      g.id,
      [g.x, height + 1.3, north],
      [g.width, 2.6, 0.24],
      g.family,
      2,
      { collision: "solid", owner: "site-perimeter" },
    );
    for (const x of [a, b])
      put(
        g.id + "-post-" + x,
        [x, height + 1.7, north],
        [0.4, 3.4, 0.4],
        g.family,
        1,
        { collision: "solid", owner: "site-perimeter" },
      );
    put(
      g.id + "-header",
      [g.x, height + 3.12, north],
      [g.width + 0.4, 0.5, 0.4],
      g.family,
      1,
      { support: g.id, owner: "site-perimeter" },
    );
    for (let x = a + 0.5; x < b; x += 0.7)
      put(
        g.id + "-bar-" + x,
        [x, height + 1.3, north - 0.15],
        [0.06, 2.5, 0.07],
        g.family,
        1,
        { support: g.id, owner: "site-perimeter" },
      );
    boundaries.push({
      id: g.id,
      end: [g.x, bounds.maxZ],
      vertical: true,
      dir: 1,
      width: g.width,
      sourceRoad: g.sourceRoad,
      owner: "site-perimeter",
      leftWall: left,
      rightWall: right,
      barrier: {
        minX: g.x - g.width / 2,
        maxX: g.x + g.width / 2,
        minZ: bounds.maxZ,
        maxZ: bounds.maxZ + 0.24,
        minY: height,
        maxY: height + 2.6,
      },
    });
    edges.push({ side: "north", start: a, end: b, part: g.id });
    cursor = b;
    if (g.family === "industrial")
      labels.push({
        text: "SERVICE / CLOSED",
        position: [g.x, height + 3.12, north - 0.25],
        width: g.width * 0.8,
        height: 0.4,
        yaw: Math.PI,
        family: g.family,
        support: g.id + "-header",
      });
  }
  wall(
    "perimeter-north-" + gates.length,
    cursor,
    north,
    bounds.maxX + 0.12,
    north,
  );
  edges.push({
    side: "north",
    start: cursor,
    end: bounds.maxX + 0.12,
    part: "perimeter-north-" + gates.length,
  });
  wall(
    "perimeter-south",
    bounds.minX - 0.12,
    bounds.minZ - 0.12,
    bounds.maxX + 0.12,
    bounds.minZ - 0.12,
  );
  wall(
    "perimeter-west",
    bounds.minX - 0.12,
    bounds.minZ - 0.12,
    bounds.minX - 0.12,
    north,
  );
  wall(
    "perimeter-east",
    bounds.maxX + 0.12,
    bounds.minZ - 0.12,
    bounds.maxX + 0.12,
    north,
  );
  if (world.config.tier >= 3) {
    const shift = world.city.yardShiftX;
    wall("yard-north", -34 + shift, -34, -18 + shift, -34, "cooling-yard");
    wall("yard-east", -18 + shift, -34, -18 + shift, -50, "cooling-yard");
    wall("yard-south", -34 + shift, -50, -18 + shift, -50, "cooling-yard");
    wall("yard-west-south", -34 + shift, -50, -34 + shift, -45, "cooling-yard");
    wall("yard-west-north", -34 + shift, -39, -34 + shift, -34, "cooling-yard");
    for (const z of [-45, -39])
      put(
        "yard-entry-post-" + z,
        [-34 + shift, height + 1.7, z],
        [0.4, 3.4, 0.4],
        "industrial",
        1,
        { collision: "solid", owner: "cooling-yard" },
      );
    put(
      "yard-entry-header",
      [-34 + shift, height + 3.15, -42],
      [0.4, 0.2, 6.4],
      "industrial",
      1,
      { support: "yard-entry-post--45", owner: "cooling-yard" },
    );
    // Utility wing walls terminate in the substation facade, not in empty space.
    wall(
      "utility-west-return",
      25,
      -64,
      25,
      -61,
      "utility-terminus",
      "abandoned",
    );
    wall(
      "utility-east-return",
      37,
      -64,
      37,
      -61,
      "utility-terminus",
      "abandoned",
    );
  }
  return {
    bounds,
    height,
    parts,
    labels,
    boundaries,
    edges,
    segments,
    entrances:
      world.config.tier >= 3
        ? [
            {
              id: "yard-entry",
              from: [-39, -42],
              to: [-32, -42],
              width: 6,
              owners: [
                "yard-west-south",
                "yard-west-north",
                "yard-entry-header",
              ],
            },
            {
              id: "utility-entry",
              from: [31, -57],
              to: [31, -62],
              width: 12,
              owners: [
                "utility-west-return",
                "utility-east-return",
                "terminus-body",
              ],
            },
          ]
        : [],
  };
}

export function validateSite(world) {
  const s = world.site,
    errors = [],
    ids = new Set(world.layers.parts.map((p) => p.id)),
    b = s.bounds;
  if (
    world.walkable.length !== 1 ||
    ["minX", "maxX", "minZ", "maxZ"].some(
      (k) => world.walkable[0][k] !== b[k] || world.bounds[k] !== b[k],
    )
  )
    errors.push("Rendered paved site and movement boundary differ");
  const north = s.edges
    .filter((e) => e.side === "north")
    .sort((a, b) => a.start - b.start);
  if (
    Math.abs(north[0].start - (b.minX - 0.12)) > 0.001 ||
    Math.abs(north.at(-1).end - (b.maxX + 0.12)) > 0.001
  )
    errors.push("Open perimeter ends");
  for (let i = 1; i < north.length; i++)
    if (Math.abs(north[i].start - north[i - 1].end) > 0.001)
      errors.push("Gap in north enclosure");
  for (const id of [
    "perimeter-west",
    "perimeter-east",
    "perimeter-south",
    ...north.map((e) => e.part),
  ])
    if (!ids.has(id)) errors.push("Missing physical enclosure " + id);
  for (const g of s.boundaries)
    if (
      !ids.has(g.leftWall) ||
      !ids.has(g.rightWall) ||
      g.owner !== "site-perimeter" ||
      g.end[1] !== b.maxZ
    )
      errors.push("Detached gate " + g.id);
  const byId = new Map(world.layers.parts.map((p) => [p.id, p]));
  const solidMatches = (p) =>
    p &&
    p.collision === "solid" &&
    world.layers.solids.some(
      (a) =>
        Math.abs(a.minX - (p.position[0] - p.size[0] / 2)) < 0.001 &&
        Math.abs(a.maxX - (p.position[0] + p.size[0] / 2)) < 0.001 &&
        Math.abs(a.minZ - (p.position[2] - p.size[2] / 2)) < 0.001 &&
        Math.abs(a.maxZ - (p.position[2] + p.size[2] / 2)) < 0.001,
    );
  for (const e of north) {
    const p = byId.get(e.part);
    if (
      !solidMatches(p) ||
      Math.abs(p.position[0] - p.size[0] / 2 - e.start) > 0.001 ||
      Math.abs(p.position[0] + p.size[0] / 2 - e.end) > 0.001 ||
      Math.abs(p.position[2] - p.size[2] / 2 - b.maxZ) > 0.001
    )
      errors.push(
        "Visible north wall does not match collision/ground " + e.part,
      );
  }
  for (const [id, axis, side, target] of [
    ["perimeter-west", 0, 1, b.minX],
    ["perimeter-east", 0, -1, b.maxX],
    ["perimeter-south", 2, 1, b.minZ],
  ]) {
    const p = byId.get(id);
    if (
      !solidMatches(p) ||
      Math.abs(p.position[axis] + (side * p.size[axis]) / 2 - target) > 0.001
    )
      errors.push("Perimeter does not meet paved edge " + id);
  }
  for (const g of s.boundaries) {
    for (const id of [
      g.id + "-header",
      g.id + "-post-" + (g.end[0] - g.width / 2),
      g.id + "-post-" + (g.end[0] + g.width / 2),
    ])
      if (!ids.has(id)) errors.push("Incomplete gate assembly " + g.id);
  }
  for (const segment of s.segments) {
    const p = byId.get(segment.id),
      vertical = segment.a[0] === segment.b[0];
    if (
      !solidMatches(p) ||
      Math.abs(p.position[0] - (segment.a[0] + segment.b[0]) / 2) > 0.001 ||
      Math.abs(p.position[2] - (segment.a[1] + segment.b[1]) / 2) > 0.001 ||
      Math.abs(
        (vertical ? p.size[2] : p.size[0]) -
          Math.hypot(segment.b[0] - segment.a[0], segment.b[1] - segment.a[1]),
      ) > 0.001
    )
      errors.push("Detached enclosure return " + segment.id);
  }
  for (const g of s.boundaries) {
    const header = byId.get(g.id + "-header"),
      posts = [g.end[0] - g.width / 2, g.end[0] + g.width / 2].map((x) =>
        byId.get(g.id + "-post-" + x),
      );
    if (
      header &&
      posts.every(Boolean) &&
      (Math.abs(header.position[0] - g.end[0]) > 0.001 ||
        Math.abs(header.position[2] - (b.maxZ + 0.12)) > 0.001 ||
        posts.some(
          (p) =>
            Math.abs(p.position[1] - p.size[1] / 2 - s.height) > 0.001 ||
            header.position[1] - header.size[1] / 2 >
              p.position[1] + p.size[1] / 2 + 0.001,
        ))
    )
      errors.push("Gate header/support alignment " + g.id);
  }
  for (const e of s.entrances)
    for (const id of e.owners)
      if (!ids.has(id)) errors.push("Incomplete entrance " + e.id);
  return errors;
}
