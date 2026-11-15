import { chromium } from "@playwright/test";
import { writeFile } from "node:fs/promises";
const browser = await chromium.launch({ channel: "msedge", headless: true }),
  page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
await page.goto(process.env.TEST_URL || "http://127.0.0.1:5173/NEON-DRIFT/");
await page.waitForFunction(() => window.neonDev);
await page.locator("summary").click();
await page.locator("#quality").selectOption("high");
await page.waitForTimeout(1500);
await page.evaluate(() => window.neonDev.start());
await page.waitForFunction(
  () => !window.neonDev.active,
  {},
  { timeout: 90000 },
);
const report = await page.evaluate(() => window.neonDev.report());
await writeFile(
  "artifacts/benchmark-1080-high.json",
  JSON.stringify(report, null, 2),
);
console.log(report);
await browser.close();
