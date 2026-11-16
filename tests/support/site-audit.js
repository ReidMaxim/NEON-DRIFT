import { colliders } from "../../src/world.js";
import { scenarioLayout, scenarioColliders } from "../../src/scenario.js";
export function auditSite(w, step = 0.5) {
  const b = w.site.bounds,
    layout = scenarioLayout(w),
    boxes = [...colliders(w), ...scenarioColliders(layout), layout.room],
    nx = Math.floor((b.maxX - b.minX) / step),
    nz = Math.floor((b.maxZ - b.minZ) / step),
    free = new Uint8Array(nx * nz),
    seen = new Uint8Array(nx * nz),
    queue = [];
  for (let j = 0; j < nz; j++)
    for (let i = 0; i < nx; i++) {
      const x = b.minX + (i + 0.5) * step,
        z = b.minZ + (j + 0.5) * step;
      free[j * nx + i] = !boxes.some(
        (a) =>
          x > a.minX - 0.28 &&
          x < a.maxX + 0.28 &&
          z > a.minZ - 0.28 &&
          z < a.maxZ + 0.28,
      );
    }
  const start =
    Math.floor((13 - b.minZ) / step) * nx + Math.floor(-b.minX / step);
  if (free[start]) {
    queue.push(start);
    seen[start] = 1;
  }
  for (let n = 0; n < queue.length; n++) {
    const k = queue[n],
      x = k % nx,
      j = Math.floor(k / nx);
    for (const v of [
      x > 0 ? k - 1 : -1,
      x < nx - 1 ? k + 1 : -1,
      j > 0 ? k - nx : -1,
      j < nz - 1 ? k + nx : -1,
    ])
      if (v >= 0 && free[v] && !seen[v]) {
        seen[v] = 1;
        queue.push(v);
      }
  }
  const unreachable = [];
  for (let k = 0; k < free.length; k++)
    if (free[k] && !seen[k])
      unreachable.push([
        b.minX + ((k % nx) + 0.5) * step,
        b.minZ + (Math.floor(k / nx) + 0.5) * step,
      ]);
  return {
    seed: w.config.seed,
    tier: w.config.tier,
    step,
    free: free.reduce((a, b) => a + b, 0),
    reached: queue.length,
    unreachable,
    excluded: "solid obstacles and locked archive interior",
  };
}
