import { chromium, expect } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
const base =
    process.env.TEST_URL || "http://127.0.0.1:5195/NEON-DRIFT/preview/",
  out = "artifacts/integration";
await mkdir(out, { recursive: true });
const browser = await chromium.launch({ channel: "msedge", headless: true }),
  rows = [];
try {
  for (const seed of [2049, 8128])
    for (const tier of [3, 4]) {
      const page = await browser.newPage({
          viewport: { width: 1920, height: 1080 },
        }),
        errors = [];
      page.on("pageerror", (e) => errors.push(e.message));
      page.on("console", (m) => {
        if (m.type() === "error") errors.push(m.text());
      });
      await page.goto(`${base}?seed=${seed}&tier=${tier}&quality=high`);
      await page.waitForFunction(() => window.neonLab?.siteValidation);
      expect(await page.evaluate(() => neonLab.siteValidation())).toEqual([]);
      await page.evaluate(() =>
        neonLab.start({ duration: 16, route: "district" }),
      );
      await page.waitForFunction(() => !neonLab.active, {}, { timeout: 60000 });
      const r = await page.evaluate(() => neonLab.report());
      expect(errors).toEqual([]);
      rows.push({ seed, tier, errors, ...r });
      console.log({
        seed,
        tier,
        frame: r.frameIntervalsMs.mean,
        gpu: r.gpuElapsedMs?.mean,
        calls: r.drawCalls.mean,
      });
      await page.close();
    }
  await writeFile(
    out + "/expanded-performance.json",
    JSON.stringify({ browser: browser.version(), rows }, null, 2),
  );
} finally {
  await browser.close();
}
