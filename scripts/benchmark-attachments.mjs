import { chromium } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
const url = process.env.TEST_URL || "http://127.0.0.1:5190/NEON-DRIFT/preview/",
  out = process.env.EVIDENCE_DIR || "artifacts/attachment-correction",
  label = process.env.LABEL || "before";
await mkdir(out, { recursive: true });
const browser = await chromium.launch({ channel: "msedge", headless: true }),
  rows = [];
try {
  for (const seed of [2049, 8128])
    for (let tier = 0; tier < 5; tier++) {
      const page = await browser.newPage({
          viewport: { width: 1920, height: 1080 },
        }),
        errors = [];
      page.on("pageerror", (e) => errors.push(e.message));
      page.on("console", (m) => {
        if (m.type() === "error") errors.push(m.text());
      });
      await page.goto(`${url}?seed=${seed}&tier=${tier}&quality=high`);
      await page.waitForFunction(() => window.neonLab);
      await page.evaluate(() => window.neonLab.start({ duration: 12 }));
      await page.waitForFunction(
        () => !window.neonLab.active,
        {},
        { timeout: 60000 },
      );
      const r = {
        seed,
        tier,
        errors,
        ...(await page.evaluate(() => window.neonLab.report())),
      };
      rows.push(r);
      console.log({
        label,
        seed,
        tier,
        mean: r.frameIntervalsMs.mean,
        gpu: r.gpuElapsedMs?.mean,
        calls: r.drawCalls.mean,
        errors,
      });
      await page.close();
    }
  await writeFile(
    `${out}/${label}-performance.json`,
    JSON.stringify({ browser: browser.version(), rows }, null, 2),
  );
} finally {
  await browser.close();
}
