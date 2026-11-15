import { chromium, expect } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
const browser = await chromium.launch({
  channel: process.env.BROWSER_CHANNEL || "msedge",
  headless: true,
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } }),
  errors = [],
  checks = [];
page.on("pageerror", (e) => errors.push(e.message));
page.on("console", (m) => {
  if (m.type() === "error") errors.push(m.text());
});
await mkdir("artifacts", { recursive: true });
await page.goto(process.env.TEST_URL || "http://127.0.0.1:5173/NEON-DRIFT/");
await page.waitForFunction(() => window.neonDev);
await page.waitForTimeout(1500);
await page.screenshot({ path: "artifacts/menu.png" });
await page.locator("#enter").click();
await page.waitForFunction(
  () =>
    document.pointerLockElement && window.neonDev.snapshot().state === "play",
);
checks.push("Pointer lock acquired");
await page.keyboard.down("KeyW");
await page.waitForTimeout(2800);
await page.keyboard.up("KeyW");
await page.keyboard.down("KeyA");
await page.waitForTimeout(1600);
await page.keyboard.up("KeyA");
await page.keyboard.down("KeyW");
await page.waitForTimeout(650);
await page.keyboard.up("KeyW");
console.log("Approach", await page.evaluate(() => window.neonDev.snapshot()));
await expect(page.locator("#prompt")).toBeVisible();
await page.keyboard.press("KeyE");
await expect(page.locator("#terminal")).toBeVisible();
checks.push("WASD movement and nearby E interaction");
await page.locator('[data-command="directory"]').click();
await expect(page.locator("#terminal-output")).toContainText("ARCHIVE");
await page.locator("#command").fill("about");
await page.locator("#command").press("Enter");
await expect(page.locator("#terminal-output")).toContainText("NEON-DRIFT");
await page.locator("#command").fill("nonsense");
await page.locator("#command").press("Enter");
await expect(page.locator("#terminal-output")).toContainText("Unknown");
await page.screenshot({ path: "artifacts/terminal-ui.png" });
await page.locator('[data-command="exit"]').click();
await expect(page.locator("#menu")).toBeVisible();
checks.push("Terminal directory, typed about, unknown command, exit");
await page.locator("summary").click();
await page.locator("#quality").selectOption("low");
await page.waitForTimeout(300);
await page.locator("#quality").selectOption("high");
await page.waitForTimeout(300);
await page.locator("#quality").selectOption("medium");
await page.locator("#restart").click();
expect((await page.evaluate(() => window.neonDev.snapshot())).player).toEqual({
  x: 1,
  z: 13,
});
checks.push("Quality presets and restart");
await page.locator("#enter").click();
await page.waitForFunction(
  () =>
    document.pointerLockElement && window.neonDev.snapshot().state === "play",
);
await page.evaluate(() =>
  document.dispatchEvent(
    new MouseEvent("mousemove", { movementX: 120, movementY: 20 }),
  ),
);
await page.waitForTimeout(100);
expect(
  Math.abs((await page.evaluate(() => window.neonDev.snapshot())).yaw - 0.08),
).toBeGreaterThan(0.01);
await page.keyboard.press("Escape");
await expect(page.locator("#menu")).toBeVisible();
checks.push("Synthetic mouse-look handler; Escape menu");
for (let i = 0; i < 6; i++) {
  await page.evaluate((i) => window.neonDev.pose(i), i);
  await page.waitForTimeout(400);
  await page.screenshot({ path: `artifacts/pose-${i + 1}.png` });
}
await page.evaluate(() => window.neonDev.start());
await page.waitForFunction(
  () => !window.neonDev.active,
  {},
  { timeout: 90000 },
);
const benchmark = await page.evaluate(() => window.neonDev.report());
await writeFile("artifacts/benchmark.json", JSON.stringify(benchmark, null, 2));
checks.push("50-second scripted tour");
await page.setViewportSize({ width: 1920, height: 1080 });
await page.evaluate(() => window.neonDev.pose(0));
await page.waitForTimeout(300);
await page.screenshot({ path: "artifacts/desktop-1080.png" });
checks.push("1080p resize");
const mobile = await browser.newPage({
  viewport: { width: 390, height: 844 },
  isMobile: true,
  hasTouch: true,
});
await mobile.goto(process.env.TEST_URL || "http://127.0.0.1:5173/NEON-DRIFT/");
await expect(mobile.locator("#enter")).toBeDisabled();
await expect(mobile.locator("#notice")).toContainText("keyboard and mouse");
await mobile.screenshot({ path: "artifacts/mobile.png" });
checks.push("Mobile explanatory fallback");
await writeFile(
  "artifacts/smoke.json",
  JSON.stringify(
    { errors, checks, browser: browser.version(), benchmark },
    null,
    2,
  ),
);
console.log({ errors, checks, benchmark });
await browser.close();
if (errors.length) process.exitCode = 1;
