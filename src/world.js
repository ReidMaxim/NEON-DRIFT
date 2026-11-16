import {
  expandDistrict,
  boundsOf,
  withinRoads,
  identities,
} from "./district.js";
import { random } from "./random.js";
import {
  generateAssemblies,
  generateSurfaceDecorations,
  assemblyBounds,
} from "./assemblies.js";
import { generateCityLayers } from "./city-layers.js";
export { random } from "./random.js";
import { scenarioLayout, inReservedArea } from "./scenario.js";
export const defaults = Object.freeze({
  seed: 2049,
  tier: 3,
  identity: "mixed",
  density: 1,
  height: 1,
  streetWidth: 12,
  neon: ["#23ecff", "#ed39c5", "#ffb55b", "#9aff86"],
  fog: 0.025,
  rain: 1,
  props: 1,
});
export function generate(config = {}) {
  const c = { ...defaults, ...config };
  if (
    !Number.isInteger(c.tier) ||
    c.tier < 0 ||
    c.tier > 4 ||
    !(c.identity === "mixed" || Object.hasOwn(identities, c.identity))
  )
    throw new Error("Invalid complexity tier or district identity");
  for (const k of [
    "seed",
    "density",
    "height",
    "streetWidth",
    "fog",
    "rain",
    "props",
  ])
    if (!Number.isFinite(c[k])) throw new Error(`Invalid ${k}`);
  if (
    c.streetWidth < 8 ||
    c.streetWidth > 20 ||
    c.density < 0.4 ||
    c.density > 2 ||
    c.height < 0.5 ||
    c.height > 2 ||
    c.props < 0 ||
    c.props > 2 ||
    c.rain < 0 ||
    c.rain > 2 ||
    c.fog < 0.005 ||
    c.fog > 0.08 ||
    !Array.isArray(c.neon) ||
    c.neon.length < 3 ||
    c.neon.some(
      (color) => typeof color !== "string" || !/^#[0-9a-fA-F]{6}$/.test(color),
    )
  )
    throw new Error("Configuration outside supported bounds");
  const r = random(c.seed),
    buildings = [],
    props = [],
    half = c.streetWidth / 2;
  for (const side of [-1, 1])
    for (let z = 16; z > -72; z -= 9 / c.density) {
      const depth = 7 / c.density,
        h = (12 + r() * 24) * c.height;
      buildings.push({
        x: side * (half + 4 + r() * 2),
        z,
        w: 8,
        d: depth,
        h,
        color: Math.floor(r() * 3),
        seed: Math.floor(r() * 1e8),
      });
    }
  const p = random(c.seed + 911);
  for (let i = 0; i < Math.floor(32 * c.props); i++) {
    const side = i % 2 ? 1 : -1;
    props.push({
      x: side * (half - 0.6),
      z: 10 - p() * 76,
      w: 0.5 + p() * 0.5,
      h: 0.4 + p() * 1.1,
    });
  }
  const world = {
    config: c,
    buildings,
    props,
    terminal: { x: -half + 1.2, z: 2 },
    bounds: { minX: -half + 0.35, maxX: half - 0.35, minZ: -69, maxZ: 18 },
  };
  const layout = scenarioLayout(world);
  world.props = world.props.filter((p) => !inReservedArea(layout, p.x, p.z));
  const expanded = expandDistrict(world);
  expanded.layers = generateCityLayers(expanded);
  expanded.attachments = generateAssemblies(expanded);
  expanded.surfaceDecorations = generateSurfaceDecorations(expanded);
  return expanded;
}
export function colliders(world) {
  return [
    ...(world.layers?.solids || []),
    ...[
      ...(world.attachments?.fans || []),
      ...(world.attachments?.vents || []),
      ...(world.attachments?.lamps || []),
    ]
      .filter((a) => a.collision === "solid")
      .map((a) =>
        a.type === "lamp"
          ? assemblyBounds({
              ...a,
              parts: a.parts.filter((p) => p.id === "pole"),
            })
          : assemblyBounds(a),
      ),
    ...(world.city?.buildings || []).map(boundsOf),
    ...(world.city?.props || []).map((p) => ({
      minX: p.x - p.w / 2,
      maxX: p.x + p.w / 2,
      minZ: p.z - p.d / 2,
      maxZ: p.z + p.d / 2,
    })),
    ...world.buildings.map((b) => ({
      minX: b.x - b.w / 2,
      maxX: b.x + b.w / 2,
      minZ: b.z - b.d / 2,
      maxZ: b.z + b.d / 2,
    })),
    ...world.props.map((p) => ({
      minX: p.x - p.w / 2,
      maxX: p.x + p.w / 2,
      minZ: p.z - 0.4,
      maxZ: p.z + 0.4,
    })),
    {
      minX: world.terminal.x - 0.65,
      maxX: world.terminal.x + 0.65,
      minZ: 1.5,
      maxZ: 2.5,
    },
  ];
}
export function movePlayer(p, dx, dz, boxes, bounds, walkable = null) {
  const steps = Math.max(1, Math.ceil(Math.hypot(dx, dz) / 0.15)),
    r = 0.28;
  for (let i = 0; i < steps; i++) {
    let x = Math.max(bounds.minX, Math.min(bounds.maxX, p.x + dx / steps));
    if (
      (!walkable || withinRoads(x, p.z, walkable)) &&
      !boxes.some(
        (b) =>
          x > b.minX - r &&
          x < b.maxX + r &&
          p.z > b.minZ - r &&
          p.z < b.maxZ + r,
      )
    )
      p.x = x;
    let z = Math.max(bounds.minZ, Math.min(bounds.maxZ, p.z + dz / steps));
    if (
      (!walkable || withinRoads(p.x, z, walkable)) &&
      !boxes.some(
        (b) =>
          p.x > b.minX - r &&
          p.x < b.maxX + r &&
          z > b.minZ - r &&
          z < b.maxZ + r,
      )
    )
      p.z = z;
  }
  return p;
}
export const presets = {
  low: { scale: 0.65, rain: 500, bloom: false, detail: 28 },
  medium: { scale: 0.85, rain: 1300, bloom: true, detail: 48 },
  high: { scale: 1, rain: 2400, bloom: true, detail: 70 },
};
export function terminalCommand(command) {
  switch (command.trim().toLowerCase()) {
    case "status":
      return "DISTRICT 07 / RELAY ONLINE\nPower grid: 38%\nWeather: persistent rain\nResidents: signal unavailable";
    case "directory":
      return "01  ARCHIVE / recovered memories\n02  TRANSIT / service suspended\n03  UPLINK / awaiting Mission 002";
    case "about":
      return "NEON-DRIFT / MISSION 001\nAn independently generated browser world.\nNo servers. No accounts. Only a signal in the rain.";
    case "exit":
      return null;
    default:
      return "Unknown command. Try status, directory, about, or exit.";
  }
}
