import { chromium } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
const label = process.env.LABEL || "before",
  base =
    process.env.TEST_URL || "https://reidmaxim.github.io/NEON-DRIFT/preview/",
  out = "artifacts/integration/" + label;
const views = [
  { name: "perimeter-connection", p: [-39, 1.72, 16], t: [-39, 2.2, 22] },
  { name: "utility-context", p: [34, 1.72, -58], t: [36.5, 1.8, -63] },
  { name: "dark-west-parcel", p: [-43.5, 1.72, -51], t: [-48, 0.4, -51] },
  { name: "residential-gap", p: [31, 1.72, -36], t: [24, 0.4, -36] },
  { name: "industrial-gate", p: [-39, 1.72, -1], t: [-39, 2, 7] },
  { name: "gate-side-context", p: [-43, 1.72, 1], t: [-38, 2, 5] },
  { name: "east-street-end", p: [40, 1.72, -28], t: [48, 2, -28] },
  { name: "yard-entrance", p: [-38, 1.72, -42], t: [-28, 2.4, -42] },
  { name: "utility-front", p: [31, 1.72, -59], t: [31, 2, -65] },
];
await mkdir(out, { recursive: true });
const browser = await chromium.launch({ channel: "msedge", headless: true }),
  cases = [];
try {
  for (const seed of [2049, 8128])
    for (const tier of [3, 4]) {
      const page = await browser.newPage({
          viewport: { width: 1440, height: 900 },
        }),
        errors = [];
      page.on("pageerror", (e) => errors.push(e.message));
      await page.goto(`${base}?seed=${seed}&tier=${tier}&quality=high`);
      await page.waitForFunction(() => window.neonLab);
      for (const v of views) {
        await page.evaluate((v) => {
          const i = neonLab.poses.length;
          neonLab.poses.push(v);
          neonLab.pose(i);
        }, v);
        await page.waitForTimeout(300);
        await page.screenshot({
          path: `${out}/${seed}-t${tier}-${v.name}.png`,
        });
      }
      cases.push({
        seed,
        tier,
        revision: await page.evaluate(() => neonLab.report().revision),
        errors,
      });
      await page.close();
    }
  await writeFile(
    out + "/captures.json",
    JSON.stringify({ views, cases }, null, 2),
  );
} finally {
  await browser.close();
}
