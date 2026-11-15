import { chromium, expect } from "@playwright/test";
import { preview } from "vite";
import { writeFile } from "node:fs/promises";
const server = await preview({
  preview: { host: "127.0.0.1", port: 4180, strictPort: true },
});
const browser = await chromium.launch({
  channel: process.env.BROWSER_CHANNEL || "msedge",
  headless: true,
});
try {
  const page = await browser.newPage(),
    errors = [],
    external = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("response", (r) => {
    if (r.status() >= 400) errors.push(`${r.status()} ${r.url()}`);
  });
  page.on("request", (r) => {
    if (
      !r.url().startsWith("http://127.0.0.1:4180") &&
      !r.url().startsWith("data:")
    )
      external.push(r.url());
  });
  await page.goto("http://127.0.0.1:4180/NEON-DRIFT/");
  await page.waitForTimeout(1500);
  await expect(page.locator("#error")).toBeHidden();
  expect(await page.evaluate(() => typeof window.neonDev)).toBe("undefined");
  await page.reload();
  await page.waitForTimeout(500);
  await expect(page.locator("#enter")).toBeVisible();
  expect(external).toEqual([]);
  expect(errors).toEqual([]);
  await page.evaluate(() =>
    document
      .querySelector("canvas")
      .getContext("webgl2")
      .getExtension("WEBGL_lose_context")
      .loseContext(),
  );
  await expect(page.locator("#error")).toContainText(
    "Graphics connection lost",
  );
  const unsupported = await browser.newPage();
  await unsupported.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (type, ...args) {
      if (type.startsWith("webgl")) return null;
      return original.call(this, type, ...args);
    };
  });
  await unsupported.goto("http://127.0.0.1:4180/NEON-DRIFT/");
  await expect(unsupported.locator("#error")).toContainText("requires WebGL2");
  const report = {
    checks: [
      "Production repository base route and hard refresh",
      "No missing assets or external runtime requests",
      "Development hooks absent",
      "Context-loss explanation",
      "Unsupported-WebGL2 explanation",
    ],
    errors,
    external,
  };
  await writeFile("artifacts/production.json", JSON.stringify(report, null, 2));
  console.log(report);
} finally {
  await browser.close();
  await new Promise((resolve) => server.httpServer.close(resolve));
}
