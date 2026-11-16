import { fanParts } from "./assemblies.js";
import { random } from "./random.js";
import { boundsOf, intersects } from "./district.js";

export const familyPalette = {
  commercial: ["#253947", "#54707b", "#10222c", "#52d7d7", "#ed75c4"],
  industrial: ["#33413d", "#7c6d52", "#182824", "#e3ba70", "#dc8754"],
  residential: ["#423e50", "#7a7080", "#242637", "#edcf9b", "#999ce0"],
  abandoned: ["#303d3b", "#62685b", "#182526", "#5a786b", "#9da274"],
};
const part = (id, position, size, family, tone = 0, options = {}) => ({
  id,
  position,
  size,
  family,
  tone,
  kind: "box",
  ...options,
});
export function partBounds(p) {
  return {
    minX: p.position[0] - p.size[0] / 2,
    maxX: p.position[0] + p.size[0] / 2,
    minZ: p.position[2] - p.size[2] / 2,
    maxZ: p.position[2] + p.size[2] / 2,
    minY: p.position[1] - p.size[1] / 2,
    maxY: p.position[1] + p.size[1] / 2,
  };
}

// One facade frame for all structural recipes: U along wall, V out from wall, Y up.
export function facadeFrame(b, core = false) {
  const vertical = core || b.vertical,
    side = core ? Math.sign(b.x) : b.side;
  return {
    width: vertical ? b.d : b.w,
    depth: vertical ? b.w : b.d,
    point(u, y, v) {
      return [
        b.x + (vertical ? -side * (v + (vertical ? b.w : 0) / 2) : u),
        y,
        b.z + (vertical ? u : -side * (v + b.d / 2)),
      ];
    },
    size(w, h, d) {
      return vertical ? [d, h, w] : [w, h, d];
    },
    normal: vertical ? [-side, 0, 0] : [0, 0, -side],
  };
}
export function buildingGrammar(b, id, family, core = false) {
  const f = facadeFrame(b, core),
    r = random(b.seed + 41299),
    parts = [],
    w = f.width,
    d = f.depth;
  const put = (name, u, y, v, pw, ph, pd, tone = 0, options = {}) =>
    parts.push(
      part(
        `${id}:${name}`,
        f.point(u, y, v),
        f.size(pw, ph, pd),
        family,
        tone,
        { hostId: id, support: id, ...options },
      ),
    );
  const podium = Math.min(6, b.h * 0.4),
    inset =
      family === "commercial"
        ? 0.12
        : family === "residential"
          ? 0.08
          : family === "industrial"
            ? 0.025
            : 0.06;
  if (!core) {
    put("podium", 0, podium / 2, -d / 2, w, podium, d, 0, {
      role: "body",
      collision: "solid",
    });
    put(
      "upper",
      0,
      (podium + b.h) / 2,
      -d / 2,
      w * (1 - inset * 2),
      b.h - podium,
      d * (1 - inset * 2),
      0,
      { role: "body", collision: "solid" },
    );
    put("belt", 0, podium, -d / 2, w + 0.18, 0.28, d + 0.18, 1);
    put(
      "parapet",
      0,
      b.h + 0.18,
      -d / 2,
      w * (1 - inset * 2) + 0.22,
      0.36,
      d * (1 - inset * 2) + 0.22,
      1,
    );
  }
  const front = -d * inset,
    upperWidth = w * (1 - inset * 2),
    lit =
      family === "abandoned"
        ? 0.08
        : family === "industrial"
          ? 0.22
          : family === "residential"
            ? 0.48
            : 0.64;
  if (!core)
    for (
      let y = podium + 1.5;
      y < b.h - 1;
      y += family === "industrial" ? 4.2 : 3.2
    ) {
      put(`floor-${y}`, 0, y - 0.8, front + 0.04, upperWidth, 0.12, 0.15, 1);
      for (
        let u = -upperWidth / 2 + 0.7;
        u < upperWidth / 2 - 0.4;
        u += family === "commercial" ? 1.6 : 1.35
      ) {
        put(`window-reveal-${u}-${y}`, u, y, front + 0.055, 0.9, 1.5, 0.13, 2);
        put(
          `window-${u}-${y}`,
          u,
          y,
          front + 0.13,
          0.66,
          1.18,
          0.025,
          r() < lit ? 3 : 2,
          { glow: r() < lit },
        );
        if (family === "abandoned" && r() > 0.35)
          put(
            `board-${u}-${y}`,
            u,
            y + 0.15,
            front + 0.19,
            0.98,
            0.14,
            0.08,
            1,
          );
      }
    }
  if (family === "commercial") {
    const bays = Math.max(2, Math.floor(w / 2.2));
    for (let i = 0; i < bays; i++) {
      const u = ((i - (bays - 1) / 2) * w) / bays;
      put(`shop-recess-${i}`, u, 1.25, 0.025, w / bays - 0.25, 2.5, 0.08, 2);
      put(
        `shop-glass-${i}`,
        u + 0.15,
        1.45,
        0.09,
        w / bays - 0.65,
        1.6,
        0.025,
        i % 2 ? 3 : 2,
        { glow: i % 2 === 1 },
      );
      put(
        `shop-mullion-${i}`,
        u - w / bays / 2 + 0.1,
        1.4,
        0.16,
        0.12,
        2.8,
        0.3,
        1,
      );
      put(`awning-${i}`, u, 2.85, 0.55, w / bays - 0.12, 0.18, 1.2, 1);
      put(`awning-bracket-${i}`, u, 2.6, 0.28, 0.08, 0.45, 0.6, 1);
      put(
        `fascia-${i}`,
        u,
        3.25,
        0.17,
        w / bays - 0.22,
        0.45,
        0.25,
        i % 2 ? 4 : 1,
        { glow: i % 2 === 1 },
      );
    }
    put("roof-setback", 0, b.h + 1.6, -d / 2, w * 0.53, 2.8, d * 0.55, 0);
  } else if (family === "industrial") {
    for (const u of [-w * 0.43, w * 0.43])
      put(`column-${u}`, u, podium / 2 + 0.2, 0.13, 0.45, podium + 0.4, 0.5, 1);
    put("loading-shutter", 0, 1.8, 0.1, w * 0.62, 3.6, 0.2, 2);
    for (let y = 0.4; y < 3.5; y += 0.4)
      put(`shutter-slat-${y}`, 0, y, 0.23, w * 0.59, 0.06, 0.08, 1);
    put("bay-lintel", 0, 3.9, 0.3, w * 0.8, 0.5, 0.8, 1);
    for (const u of [-w * 0.32, w * 0.32]) {
      put(`roof-stack-${u}`, u, b.h + 1.3, -d * 0.52, 0.7, 2.6, 0.7, 1);
      put(`stack-collar-${u}`, u, b.h + 2.55, -d * 0.52, 1, 0.2, 1, 2);
    }
    put("service-platform", 0, 5.4, 0.5, w * 0.8, 0.22, 1.1, 1);
    for (const u of [-w * 0.3, w * 0.3])
      put(`platform-bracket-${u}`, u, 5, 0.2, 0.22, 0.7, 0.5, 1);
    put("platform-rail", 0, 6.25, 1.02, w * 0.8, 0.09, 0.08, 1);
    for (const u of [-w * 0.38, 0, w * 0.38])
      put(`rail-stanchion-${u}`, u, 5.85, 1.02, 0.08, 0.9, 0.08, 1);
  } else if (family === "residential") {
    for (const u of [0, w * 0.3])
      for (const y of [1.8, 4.2]) {
        put(`domestic-reveal-${u}-${y}`, u, y, 0.055, 1.65, 1.6, 0.13, 2);
        put(`domestic-window-${u}-${y}`, u, y, 0.135, 1.35, 1.3, 0.025, 3, {
          glow: y < 3,
        });
        put(`domestic-sill-${u}-${y}`, u, y - 0.8, 0.22, 1.8, 0.12, 0.45, 1);
      }

    put("service-door", -w * 0.25, 1.2, 0.05, 1.1, 2.4, 0.1, 2);
    put("door-light", -w * 0.25, 2.6, 0.15, 0.7, 0.1, 0.2, 3, { glow: true });
    for (let y = podium + 2; y < b.h - 1; y += 4.5) {
      put(
        `balcony-deck-${y}`,
        0,
        y,
        front + 0.62,
        upperWidth * 0.88,
        0.18,
        1.35,
        1,
      );
      put(
        `balcony-rail-${y}`,
        0,
        y + 0.8,
        front + 1.24,
        upperWidth * 0.88,
        0.08,
        0.08,
        1,
      );
      for (const u of [-upperWidth * 0.4, 0, upperWidth * 0.4]) {
        put(
          `balcony-post-${u}-${y}`,
          u,
          y + 0.4,
          front + 1.24,
          0.06,
          0.8,
          0.06,
          1,
        );
        put(
          `balcony-bracket-${u}-${y}`,
          u,
          y - 0.35,
          front + 0.28,
          0.1,
          0.65,
          0.5,
          1,
        );
      }
    }
    put("water-tank-feet", 0, b.h + 0.45, -d / 2, w * 0.32, 0.9, d * 0.3, 1);
    put("water-tank", 0, b.h + 1.9, -d / 2, w * 0.42, 2, d * 0.42, 2, {
      kind: "cylinder",
    });
    put("tank-cap", 0, b.h + 2.95, -d / 2, w * 0.46, 0.12, d * 0.46, 1, {
      kind: "cylinder",
    });
  } else {
    put("dead-shutter", 0, 1.6, 0.09, w * 0.73, 3.2, 0.18, 2);
    for (let i = 0; i < 6; i++)
      put(
        `bent-panel-${i}`,
        -w * 0.34 + i * w * 0.13,
        0.6 + (i % 3) * 0.65,
        0.22,
        w * 0.11,
        0.35,
        0.12,
        1,
      );
    for (const u of [-w * 0.43, w * 0.43])
      put(`exposed-frame-${u}`, u, b.h / 2, 0.05, 0.2, b.h, 0.3, 1);
    put("dead-sign", 0, 4, 0.18, w * 0.7, 0.7, 0.3, 1);
    put("dead-conduit", w * 0.36, 3, 0.22, 0.2, 6, 0.3, 2);
    put("roof-plant", 0, b.h + 0.8, -d * 0.5, w * 0.55, 1.6, d * 0.5, 2);
  }
  return { id, family, core, host: b, parts };
}

export function generateCityLayers(world) {
  const tier = world.config.tier,
    r = random(world.config.seed + 104729),
    architecture = [],
    landmarks = [],
    parts = [],
    labels = [];
  const put = (id, p, s, family = "industrial", tone = 0, options = {}) => {
    const v = part(id, p, s, family, tone, options);
    parts.push(v);
    return v;
  };
  if (tier)
    for (const [i, b] of world.city.buildings.entries())
      architecture.push(buildingGrammar(b, `architecture-${i}`, b.identity));
  if (tier >= 3) {
    const variant = Math.floor(r() * 3),
      homeZ = -44 - Math.floor(r() * 3);
    landmarks.push(
      {
        id: "cooling",
        name: ["KILN / COOLING 03", "KILN / CONDENSER 07", "KILN / COOLING 12"][
          variant
        ],
        family: "industrial",
        variant,
        footprint: world.city.landmarkReservations[0],
        approach: [-32, -42],
        route: [
          [0, -28],
          [-39, -28],
          [-39, -42],
          [-32, -42],
        ],
      },
      {
        id: "residential",
        name: ["LANTERN COURT", "HABITAT / COURT 09", "LANTERN / BLOCK 12"][
          variant
        ],
        family: "residential",
        variant,
        footprint: world.city.landmarkReservations[1],
        approach: [31, homeZ],
        route: [
          [0, -28],
          [31, -28],
          [31, homeZ],
        ],
      },
      {
        id: "terminus",
        name: ["SUBSTATION / NULL", "TERMINUS / 04", "NO SIGNAL / EAST"][
          variant
        ],
        family: "abandoned",
        variant,
        footprint: world.city.landmarkReservations[2],
        approach: [31, -62],
        route: [
          [0, -28],
          [31, -28],
          [31, -62],
        ],
      },
    );
    // The yard's clear western lane connects to the existing industrial street.
    for (const [i, x, z, diameter, height] of [
      [0, -24, -43, 6, 11],
      [1, -28, -46, 3.4, 6],
    ]) {
      put(
        `cooling-tank-${i}`,
        [x, height / 2 - 0.01, z],
        [diameter, height, diameter],
        "industrial",
        0,
        { kind: "cylinder", collision: "solid", support: "ground" },
      );
      put(
        `cooling-rim-${i}`,
        [x, height - 0.1, z],
        [diameter + 0.25, 0.35, diameter + 0.25],
        "industrial",
        1,
        { kind: "cylinder", support: `cooling-tank-${i}` },
      );
      put(
        `cooling-aperture-${i}`,
        [x, height + 0.1, z],
        [diameter - 0.4, 0.12, diameter - 0.4],
        "industrial",
        2,
        { kind: "cylinder", support: `cooling-tank-${i}` },
      );
      put(
        `cooling-ring-${i}`,
        [x, height + 0.16, z],
        [diameter, 0.08, diameter],
        "industrial",
        4,
        { kind: "torus", glow: true, support: `cooling-tank-${i}` },
      );
      for (const dz of [-1, 1])
        put(
          `tank-riser-${i}-${dz}`,
          [x + diameter / 2 + 0.22, height * 0.42, z + dz * 0.6],
          [0.25, height * 0.84, 0.25],
          "industrial",
          1,
          { support: "ground" },
        );
    }
    for (const z of [-39, -47])
      put(
        `yard-column-${z}`,
        [-19.2, 5.5, z],
        [0.55, 11, 0.55],
        "industrial",
        1,
        { collision: "solid", support: "ground" },
      );
    put("yard-gantry", [-23, 11, -43], [8.2, 0.5, 8.8], "industrial", 1, {
      support: "yard-column--39",
    });
    for (const x of [-26, -20])
      put(
        `yard-hanger-${x}`,
        [x, 10.4, -39],
        [0.1, 1.1, 0.1],
        "industrial",
        1,
        { support: "yard-gantry" },
      );
    put("yard-conduit", [-23, 9.8, -39], [8, 0.3, 0.3], "industrial", 1, {
      support: "yard-gantry",
    });
    put(
      "yard-sign-backing",
      [-24, 4.3, -39.21],
      [5, 0.95, 0.2],
      "industrial",
      1,
      { support: "cooling-service-bank" },
    );
    labels.push({
      text: landmarks[0].name,
      position: [-24, 4.3, -39.08],
      width: 4.8,
      height: 0.78,
      yaw: 0,
      family: "industrial",
      support: "yard-sign-backing",
    });
    // Complete machinery bank bolted to a grounded service plinth.
    put(
      "cooling-service-bank",
      [-24, 2.7, -39.75],
      [5.6, 4.4, 0.85],
      "industrial",
      1,
      { collision: "solid", support: "cooling-bank-foot--26" },
    );
    for (const x of [-26, -22])
      put(
        `cooling-bank-foot-${x}`,
        [x, 0.25, -39.75],
        [0.5, 0.5, 0.85],
        "industrial",
        1,
        { support: "ground" },
      );
    for (const [i, x] of [-25.25, -22.75].entries()) {
      const root = [x, 2.5, -39.325];
      for (const p of fanParts().filter((p) => p.kind !== "rotor")) {
        const ring = p.kind === "torus";
        put(
          `yard-fan-${i}-${p.id}`,
          p.position.map((v, j) => v + root[j]),
          ring ? [p.size[0], p.size[2], p.size[1]] : p.size,
          "industrial",
          p.material === "dark" ? 2 : 1,
          {
            kind: ring ? "torus" : "box",
            rotation: ring ? [Math.PI / 2, 0, 0] : undefined,
            support: "cooling-service-bank",
          },
        );
      }
      for (const [j, size] of [
        [0, [0.12, 0.72, 0.04]],
        [1, [0.72, 0.12, 0.04]],
      ])
        put(
          `yard-fan-${i}-blade-${j}`,
          [x, 2.5, -38.895],
          size,
          "industrial",
          1,
          { support: "cooling-service-bank" },
        );
      put(
        `yard-fan-${i}-hub`,
        [x, 2.5, -38.85],
        [0.18, 0.18, 0.08],
        "industrial",
        2,
        { support: "cooling-service-bank" },
      );
    }
    put(
      "cooling-service-strip",
      [-24, 0.85, -39.3],
      [4.9, 0.06, 0.06],
      "industrial",
      3,
      { glow: true, support: "cooling-service-bank" },
    );
    put(
      "cooling-transfer-pipe",
      [-26, 5.2, -44.5],
      [4.4, 0.3, 0.3],
      "industrial",
      1,
      { support: "cooling-tank-0" },
    );
    put(
      "cooling-transfer-elbow",
      [-28, 5.8, -44.5],
      [0.3, 1.4, 0.3],
      "industrial",
      1,
      { support: "cooling-tank-1" },
    );
    // Domestic frontage: an explicit building host, not loose balconies in space.
    const home = {
      x: 23,
      z: homeZ,
      w: 7,
      d: 10,
      h: 19 + variant * 2,
      seed: world.config.seed + 8009,
      vertical: true,
      side: -1,
    };
    const domestic = buildingGrammar(home, "lantern-court", "residential");
    architecture.push(domestic);
    put(
      "court-entry-frame",
      [26.65, 1.7, homeZ],
      [0.3, 3.4, 2.5],
      "residential",
      1,
      { collision: "solid", support: "lantern-court" },
    );
    put(
      "court-entry-recess",
      [26.83, 1.4, homeZ],
      [0.08, 2.8, 1.7],
      "residential",
      2,
      { support: "court-entry-frame" },
    );
    put(
      "court-sign-backing",
      [26.75, 3.8, homeZ],
      [0.22, 0.85, 5],
      "residential",
      1,
      { support: "lantern-court" },
    );
    for (const dz of [-2, 2])
      put(
        `court-sign-bracket-${dz}`,
        [26.57, 3.8, homeZ + dz],
        [0.3, 0.2, 0.16],
        "residential",
        1,
        { support: "lantern-court" },
      );
    labels.push({
      text: landmarks[1].name,
      position: [26.9, 3.8, homeZ],
      width: 4.8,
      height: 0.65,
      yaw: Math.PI / 2,
      family: "residential",
      support: "court-sign-backing",
    });
    // The terminus is a visibly closed utility building with a walkable apron.
    put("terminus-body", [31, 4.5, -66.5], [12, 9, 5], "abandoned", 0, {
      collision: "solid",
      support: "ground",
    });
    put("terminus-shutter", [31, 2, -63.96], [5, 4, 0.12], "abandoned", 2, {
      support: "terminus-body",
    });
    for (let i = 0; i < 7; i++)
      put(
        `terminus-slat-${i}`,
        [31, 0.5 + i * 0.48, -63.85],
        [4.8, 0.12, 0.14],
        "abandoned",
        1,
        { support: "terminus-body" },
      );
    for (const x of [25.5, 36.5]) {
      put(
        `terminus-column-${x}`,
        [x, 4.8, -63.8],
        [0.6, 9.6, 0.7],
        "abandoned",
        1,
        { collision: "solid", support: "ground" },
      );
      put(
        `terminus-roof-post-${x}`,
        [x, 11, -66],
        [0.25, 3, 0.25],
        "abandoned",
        1,
        { support: "terminus-body" },
      );
    }
    put("terminus-lintel", [31, 9.3, -64.1], [12, 0.65, 1.4], "abandoned", 1, {
      support: "terminus-body",
    });
    put(
      "terminus-transformer",
      [28, 10.6, -66.5],
      [2.8, 3, 2.7],
      "abandoned",
      2,
      { support: "terminus-body" },
    );
    put(
      "terminus-fan-backing",
      [34, 6.3, -63.84],
      [3.1, 3.1, 0.3],
      "abandoned",
      2,
      { support: "terminus-body" },
    );
    for (const size of [
      [0.15, 1.9, 0.08],
      [1.9, 0.15, 0.08],
      [0.35, 0.35, 0.2],
    ])
      put(
        `terminus-fan-blade-${size[0]}`,
        [34, 6.3, -63.55],
        size,
        "abandoned",
        1,
        { support: "terminus-body" },
      );
    put(
      "terminus-dead-ring",
      [34, 6.3, -63.8],
      [2.5, 0.2, 2.5],
      "abandoned",
      1,
      {
        kind: "torus",
        rotation: [Math.PI / 2, 0, 0],
        support: "terminus-body",
      },
    );
    put("terminus-sign", [31, 5, -63.82], [7, 1, 0.22], "abandoned", 1, {
      support: "terminus-body",
    });
    labels.push({
      text: landmarks[2].name,
      position: [31, 5, -63.68],
      width: 6.8,
      height: 0.8,
      yaw: 0,
      family: "abandoned",
      support: "terminus-sign",
    });
  }
  if (tier >= 3)
    for (const [x, z] of [
      [0, -21],
      [-39, -21],
      [31, -21],
      [0, -51],
      [31, -51],
    ])
      for (let i = -3; i <= 3; i++)
        put(
          `crosswalk-${x}-${z}-${i}`,
          [x + i * 0.72, 0.015, z],
          [0.34, 0.001, 1.7],
          "commercial",
          1,
          { surface: true, support: "ground" },
        );
  // Visible gates close actual navigation ends. Continuation is beyond these barriers.
  const boundaries = [];
  for (const road of world.city.roads)
    for (const end of [
      [road.x1, road.z1],
      [road.x2, road.z2],
    ]) {
      if (
        world.city.roads.some(
          (o) =>
            o !== road &&
            end[0] >= o.minX &&
            end[0] <= o.maxX &&
            end[1] >= o.minZ &&
            end[1] <= o.maxZ,
        )
      )
        continue;
      const vertical = road.x1 === road.x2,
        dir = vertical
          ? Math.sign(end[1] - (road.z1 + road.z2) / 2)
          : Math.sign(end[0] - (road.x1 + road.x2) / 2),
        name = `boundary-${road.id}-${dir}`,
        family = road.identity;
      // Yard and utility building are their own unmistakable end stops.
      if (road.id === "yard" || road.id === "terminus") continue;
      const p = [end[0], 0, end[1]],
        size = (w, h, d) => (vertical ? [w, h, d] : [d, h, w]),
        at = (u, y, v) => [
          p[0] + (vertical ? u : dir * v),
          y,
          p[2] + (vertical ? dir * v : u),
        ];
      const gate = put(
        name,
        at(0, 1.5, 0.05),
        size(road.width, 3, 0.18),
        family,
        2,
        { collision: "solid", support: "ground" },
      );
      boundaries.push({
        id: name,
        end,
        vertical,
        dir,
        width: road.width,
        barrier: partBounds(gate),
      });
      for (const u of [-road.width / 2, road.width / 2])
        put(`${name}-post-${u}`, at(u, 2, 0), size(0.45, 4, 0.6), family, 1, {
          support: "ground",
        });
      put(
        `${name}-header`,
        at(0, 3.7, 0),
        size(road.width + 0.5, 0.5, 0.7),
        family,
        1,
        { support: name },
      );
      for (let u = -road.width / 2 + 0.4; u < road.width / 2; u += 0.5)
        put(
          `${name}-bar-${u}`,
          at(u, 1.5, -0.1),
          size(0.07, 2.8, 0.08),
          family,
          1,
          { support: name },
        );
      put(`${name}-warning`, at(0, 2.2, -0.13), size(2, 0.2, 0.04), family, 4, {
        glow: true,
        support: name,
      });
      put(
        `${name}-continuation`,
        at(0, -0.12, 14),
        size(road.width, 0.2, 28),
        family,
        2,
        { background: true, support: "ground" },
      );
      put(
        `${name}-end-mass`,
        at(0, 6.83, 25),
        size(road.width + 8, 14, 8),
        family,
        0,
        { background: true, support: "ground" },
      );
    }
  // Known original hero tower: give its visible footprint a real collider.
  const hero = {
    minX: -2.5,
    maxX: 6.5,
    minZ: -71,
    maxZ: -63,
    minY: 0,
    maxY: 46,
  };
  const roads = world.city.roads,
    envelope = {
      minX: Math.min(...roads.map((v) => v.minX)),
      maxX: Math.max(...roads.map((v) => v.maxX)),
      minZ: -71,
      maxZ: 21,
    },
    cx = (envelope.minX + envelope.maxX) / 2,
    cz = -25;
  const skyline = [];
  for (const layer of [0, 1])
    for (let i = 0; i < 52; i++) {
      const angle = (i / 52) * Math.PI * 2,
        rx = (envelope.maxX - envelope.minX) / 2 + 24 + layer * 28,
        rz = 67 + layer * 30,
        x = cx + Math.cos(angle) * rx,
        z = cz + Math.sin(angle) * rz,
        w = 7 + r() * 7,
        d = 7 + r() * 8,
        h = 18 + r() * 43;
      const family =
        world.config.identity !== "mixed"
          ? world.config.identity
          : x < -22
            ? "industrial"
            : x > 23
              ? "residential"
              : z < -55
                ? "abandoned"
                : "commercial";
      const b = { x, z, w, d, h };
      if (roads.some((v) => intersects(boundsOf(b), v, 10))) continue;
      const id = `sky-${layer}-${i}`;
      skyline.push({ id, ...b, family, background: true });
      put(id, [x, h / 2 - 0.17, z], [w, h, d], family, 0, {
        background: true,
        distant: true,
        support: "ground",
      });
      put(`${id}-crown`, [x, h + 0.83, z], [w * 0.65, 2, d * 0.65], family, 1, {
        background: true,
        distant: true,
        support: id,
      });
      if (i % 4 === 0)
        put(`${id}-mast`, [x, h + 4, z], [0.16, 6, 0.16], family, 1, {
          background: true,
          distant: true,
          support: `${id}-crown`,
        });
      for (let y = 8; y < h - 2; y += 8)
        if (r() > 0.55)
          put(
            `${id}-windows-${y}`,
            [x, y, z + d / 2 + 0.02],
            [w * 0.55, 0.22, 0.04],
            family,
            3,
            { background: true, distant: true, glow: true, support: id },
          );
    }
  const transitZ = envelope.minZ - 19;
  put("transit-deck", [cx, 14, transitZ], [110, 0.9, 3.6], "industrial", 1, {
    background: true,
    distant: true,
    support: `transit-pier-${cx - 50}`,
  });
  for (let x = cx - 50; x < cx + 55; x += 16)
    put(
      `transit-pier-${x}`,
      [x, 6.69, transitZ],
      [1.2, 13.72, 1.4],
      "industrial",
      0,
      { background: true, distant: true, support: "ground" },
    );
  put(
    "transit-train",
    [cx - 12, 15.4, transitZ],
    [23, 1.9, 2.7],
    "residential",
    2,
    { background: true, distant: true, support: "transit-deck" },
  );
  put(
    "transit-windows",
    [cx - 12, 15.7, transitZ + 1.37],
    [21, 0.4, 0.04],
    "residential",
    3,
    { background: true, distant: true, glow: true, support: "transit-train" },
  );
  // An endpoint continuation may face another loop. Keep unreachable scenery out of it.
  for (let i = parts.length - 1; i >= 0; i--)
    if (
      parts[i].background &&
      world.city.roads.some((road) =>
        intersects(partBounds(parts[i]), road, 0.02),
      )
    )
      parts.splice(i, 1);
  const solids = [
    hero,
    ...parts.filter((p) => p.collision === "solid").map(partBounds),
    ...architecture
      .filter((a) => a.id === "lantern-court")
      .map((a) => ({ ...boundsOf(a.host), minY: 0, maxY: a.host.h })),
  ];
  return {
    architecture,
    landmarks,
    parts,
    labels,
    boundaries,
    skyline,
    solids,
    envelope,
  };
}

export function validateCityLayers(world) {
  const m = world.layers,
    errors = [],
    ids = new Set(["ground", ...m.architecture.map((a) => a.id)]),
    all = [...m.parts, ...m.architecture.flatMap((a) => a.parts)];
  for (const p of all) {
    if (ids.has(p.id)) errors.push(`${p.id}: duplicate id`);
    ids.add(p.id);
  }
  for (const p of all) {
    if (
      [...p.position, ...p.size].some((v) => !Number.isFinite(v)) ||
      p.size.some((v) => v <= 0)
    )
      errors.push(`${p.id}: invalid transform`);
    if (!ids.has(p.support)) errors.push(`${p.id}: missing support`);
    if (
      p.background &&
      world.city.roads.some((r) => intersects(partBounds(p), r))
    )
      errors.push(`${p.id}: background enters walking envelope`);
  }
  for (const a of m.architecture) {
    const b = boundsOf(a.host);
    for (const p of a.parts) {
      const box = partBounds(p),
        allow = box.minY < 2.2 ? 0.5 : 1.7;
      if (
        box.minX < b.minX - allow ||
        box.maxX > b.maxX + allow ||
        box.minZ < b.minZ - allow ||
        box.maxZ > b.maxZ + allow ||
        box.minY < -0.001 ||
        box.maxY > a.host.h + 5
      )
        errors.push(`${p.id}: outside supported host envelope`);
    }
  }
  for (const l of m.landmarks) {
    for (const b of world.city.buildings)
      if (intersects(boundsOf(b), l.footprint))
        errors.push(`${l.id}: reservation occupied by ordinary building`);
    if (
      !world.city.roads.some(
        (r) =>
          l.approach[0] > r.minX + 0.28 &&
          l.approach[0] < r.maxX - 0.28 &&
          l.approach[1] > r.minZ + 0.28 &&
          l.approach[1] < r.maxZ - 0.28,
      )
    )
      errors.push(`${l.id}: approach outside navigation`);
  }
  for (const i of [0, 1]) {
    const bank = m.parts.find((p) => p.id === "cooling-service-bank"),
      back = m.parts.find((p) => p.id === `yard-fan-${i}-backplate`);
    if (
      bank &&
      (!back ||
        Math.abs(
          back.position[2] -
            back.size[2] / 2 -
            (bank.position[2] + bank.size[2] / 2),
        ) > 0.001)
    )
      errors.push(`yard-fan-${i}: backplate detached from machinery`);
  }
  for (const l of m.labels)
    if (!ids.has(l.support)) errors.push(`${l.text}: sign has no backing`);
  return errors;
}
