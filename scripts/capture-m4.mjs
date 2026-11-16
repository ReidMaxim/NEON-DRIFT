import { chromium, expect } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
import { missionViews } from "./mission004-views.mjs";
const base =
    process.env.TEST_URL || "https://reidmaxim.github.io/NEON-DRIFT/preview/",
  label = process.env.LABEL || "before",
  out = "artifacts/mission004/" + label;
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
      page.on("console", (m) => {
        if (m.type() === "error") errors.push(m.text());
      });
      await page.goto(`${base}?seed=${seed}&tier=${tier}&quality=high`);
      await page.waitForFunction(() => window.neonLab);
      for (const view of missionViews) {
        await page.evaluate((v) => {
          const i = neonLab.poses.length;
          neonLab.poses.push(v);
          neonLab.pose(i);
        }, view);
        await page.waitForTimeout(400);
        await page.screenshot({
          path: `${out}/${seed}-t${tier}-${view.name}.png`,
        });
      }
      expect(errors).toEqual([]);
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
    JSON.stringify({ views: missionViews, cases }, null, 2),
  );
} finally {
  await browser.close();
}
