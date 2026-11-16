import { intersects } from "./district.js";
export const streetHeight = 0.012;
export function sidewalkIntervals(world, side) {
  const half = world.config.streetWidth / 2,
    strip = {
      minX: side < 0 ? -half : half - 1.3,
      maxX: side < 0 ? -half + 1.3 : half,
      minZ: -70.5,
      maxZ: 20.5,
    };
  let intervals = [[-70.5, 20.5]];
  for (const road of world.city.roads.slice(1))
    if (intersects(strip, road))
      intervals = intervals.flatMap(([a, b]) => {
        if (road.maxZ <= a || road.minZ >= b) return [[a, b]];
        return [
          [a, Math.min(b, road.minZ)],
          [Math.max(a, road.maxZ), b],
        ].filter(([s, e]) => e - s > 0.01);
      });
  return intervals;
}
// Non-overlapping road union cells. Core wet shader owns its own rectangle.
export function streetTiles(world) {
  const roads = world.city.roads,
    half = world.config.streetWidth / 2;
  const xs = [
      ...new Set([
        ...roads.flatMap((r) => [r.minX, r.maxX]),
        world.site.bounds.minX,
        world.site.bounds.maxX,
        -half + 1.4,
        half - 1.4,
      ]),
    ].sort((a, b) => a - b),
    zs = [
      ...new Set([
        ...roads.flatMap((r) => [r.minZ, r.maxZ]),
        world.site.bounds.minZ,
        world.site.bounds.maxZ,
        -72,
        22,
      ]),
    ].sort((a, b) => a - b),
    tiles = [];
  for (let i = 0; i < xs.length - 1; i++)
    for (let j = 0; j < zs.length - 1; j++) {
      const x = (xs[i] + xs[i + 1]) / 2,
        z = (zs[j] + zs[j + 1]) / 2;
      if (Math.abs(x) < half - 1.4 && z > -72 && z < 22) continue;
      const b = world.site.bounds;
      if (x < b.minX || x > b.maxX || z < b.minZ || z > b.maxZ) continue;
      tiles.push({
        minX: xs[i],
        maxX: xs[i + 1],
        minZ: zs[j],
        maxZ: zs[j + 1],
        height: streetHeight,
      });
    }
  return tiles;
}
