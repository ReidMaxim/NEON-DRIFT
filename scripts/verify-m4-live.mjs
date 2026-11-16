import { chromium, expect } from "@playwright/test";
import { writeFile, mkdir } from "node:fs/promises";
import { execFileSync } from "node:child_process";
const base = "https://reidmaxim.github.io/NEON-DRIFT/preview/",
  sha = execFileSync("git", ["rev-parse", "HEAD"], { encoding: "utf8" }).trim(),
  out = "artifacts/mission004";
await mkdir(out, { recursive: true });
const response = await fetch(base + "build.json?v=" + sha, {
  cache: "no-store",
});
expect(response.status).toBe(200);
const meta = await response.json();
expect(meta.sha).toBe(sha);
const browser = await chromium.launch({ channel: "msedge", headless: true });
try {
  const page = await browser.newPage({
      viewport: { width: 1440, height: 900 },
    }),
    errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });
  page.on("response", (r) => {
    if (r.status() >= 400) errors.push(`${r.status()} ${r.url()}`);
  });
  const navigation = await page.goto(base + "?v=" + sha, {
    waitUntil: "networkidle",
  });
  await page.waitForFunction(() => window.neonLab);
  expect(navigation.status()).toBe(200);
  await expect(page.locator("aside")).toContainText("MISSION 004");
  await expect(page.locator("aside")).toContainText(sha.slice(0, 8));
  const report = await page.evaluate(() => window.neonLab.report());
  expect(report.mission).toBe(4);
  expect(report.revision).toBe(sha);
  expect(report.world.tier).toBe(3);
  expect(await page.evaluate(() => neonLab.layerValidation())).toEqual([]);
  expect(await page.evaluate(() => neonLab.siteValidation())).toEqual([]);
  expect(await page.evaluate(() => neonLab.attachmentValidation())).toEqual([]);
  expect(await page.evaluate(() => neonLab.layers.landmarks.length)).toBe(3);
  await page.screenshot({ path: out + "/live-preview.png" });
  await page.locator("#lab-button").click();
  await expect(page.locator("#laboratory")).toBeVisible();
  await expect(page.locator("#lab-metadata")).toContainText(sha.slice(0, 8));
  await page.evaluate(() => window.neonLab.start({ duration: 12 }));
  await page.waitForFunction(
    () => !window.neonLab.active,
    {},
    { timeout: 60000 },
  );
  await expect(page.locator("#lab-report")).toContainText("frameIntervalsMs");
  await page.screenshot({ path: out + "/live-laboratory.png" });
  expect(errors).toEqual([]);
  await page.reload({ waitUntil: "networkidle" });
  await page.waitForFunction(() => window.neonLab);
  expect((await page.evaluate(() => window.neonLab.report())).revision).toBe(
    sha,
  );
  const evidence = {
    checkedAt: new Date().toISOString(),
    url: base,
    sha,
    meta,
    browser: browser.version(),
    checks: [
      "HTTP200 and no missing assets",
      "Mission 004 banner and exact revision",
      "World Lab and Tier3 default",
      "Live benchmark completes and displays metrics",
      "Hard refresh preserves current revision",
    ],
    errors,
  };
  await writeFile(
    out + "/live-verification.json",
    JSON.stringify(evidence, null, 2),
  );
  console.log(evidence);
} finally {
  await browser.close();
}
