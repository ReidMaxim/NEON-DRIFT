import { chromium, expect } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
const base =
    process.env.TEST_URL || "http://127.0.0.1:5194/NEON-DRIFT/preview/",
  out = "artifacts/mission004";
await mkdir(out, { recursive: true });
const browser = await chromium.launch({ channel: "msedge", headless: true }),
  rows = [];
try {
  for (const seed of [2049, 8128])
    for (let tier = 0; tier < 5; tier++)
      for (const quality of ["low", "medium", "high"]) {
        const page = await browser.newPage({
            viewport: { width: 1920, height: 1080 },
          }),
          errors = [];
        page.on("pageerror", (e) => errors.push(e.message));
        page.on("console", (m) => {
          if (m.type() === "error") errors.push(m.text());
        });
        const start = Date.now();
        await page.goto(`${base}?seed=${seed}&tier=${tier}&quality=${quality}`);
        await page.waitForFunction(() => window.neonLab?.layerValidation);
        expect(await page.evaluate(() => neonLab.layerValidation())).toEqual(
          [],
        );
        expect(
          await page.evaluate(() => neonLab.attachmentValidation()),
        ).toEqual([]);
        const readyMs = Date.now() - start;
        await page.evaluate(() => neonLab.start({ duration: 12 }));
        await page.waitForFunction(
          () => !neonLab.active,
          {},
          { timeout: 60000 },
        );
        const r = await page.evaluate(() => neonLab.report());
        expect(r.quality).toBe(quality);
        expect(errors).toEqual([]);
        rows.push({ seed, tier, readyMs, errors, ...r });
        console.log({
          seed,
          tier,
          quality,
          frame: r.frameIntervalsMs.mean,
          gpu: r.gpuElapsedMs?.mean,
          calls: r.drawCalls.mean,
        });
        if (tier >= 3 && quality === "high") {
          await page.evaluate(() =>
            neonLab.start({ duration: 16, route: "district" }),
          );
          await page.waitForFunction(
            () => !neonLab.active,
            {},
            { timeout: 60000 },
          );
          rows.push({
            seed,
            tier,
            errors,
            ...(await page.evaluate(() => neonLab.report())),
          });
        }
        await page.close();
      }
  await writeFile(
    out + "/matrix.json",
    JSON.stringify({ browser: browser.version(), rows }, null, 2),
  );
} finally {
  await browser.close();
}
