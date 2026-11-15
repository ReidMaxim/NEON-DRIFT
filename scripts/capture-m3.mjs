import { chromium } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
await mkdir("artifacts/mission003", { recursive: true });
const browser = await chromium.launch({ channel: "msedge", headless: true });
try {
  const page = await browser.newPage({
      viewport: { width: 1920, height: 1080 },
    }),
    errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  for (const tier of [0, 1, 2, 3, 4]) {
    await page.goto(
      `${process.env.TEST_URL || "http://127.0.0.1:5183/NEON-DRIFT/preview/"}?tier=${tier}&quality=high`,
    );
    await page.waitForFunction(() => window.neonLab);
    for (const i of tier < 3 ? [0, 1] : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
      await page.evaluate((i) => window.neonLab.pose(i), i);
      await page.waitForTimeout(350);
      await page.screenshot({
        path: `artifacts/mission003/t${tier}-v${i}.png`,
      });
    }
    console.log({ tier, errors });
  }
  await writeFile(
    "artifacts/mission003/initial-errors.json",
    JSON.stringify(errors),
  );
} finally {
  await browser.close();
}
