import { generate } from "../src/world.js";
import { auditSite } from "../tests/support/site-audit.js";
import { mkdir, writeFile } from "node:fs/promises";
const rows = [];
for (const seed of [0, 42, 2049, 8128])
  for (let tier = 0; tier < 5; tier++)
    rows.push(auditSite(generate({ seed, tier })));
for (const seed of [2049, 8128])
  for (const tier of [3, 4])
    for (const streetWidth of [8, 20])
      for (const density of [0.4, 2])
        for (const height of [0.5, 2])
          rows.push({
            ...auditSite(
              generate({ seed, tier, streetWidth, density, height }),
            ),
            streetWidth,
            density,
            height,
          });
await mkdir("artifacts/integration", { recursive: true });
await writeFile(
  "artifacts/integration/spatial-audit.json",
  JSON.stringify({ rows }, null, 2),
);
console.log({
  cases: rows.length,
  unreachable: rows.reduce((n, r) => n + r.unreachable.length, 0),
  freeSamples: rows.reduce((n, r) => n + r.free, 0),
});
