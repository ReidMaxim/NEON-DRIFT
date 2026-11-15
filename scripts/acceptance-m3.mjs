import { chromium, expect } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
const base =
    process.env.TEST_URL || "http://127.0.0.1:5183/NEON-DRIFT/preview/",
  out = "artifacts/mission003";
await mkdir(out, { recursive: true });
const browser = await chromium.launch({ channel: "msedge", headless: true }),
  checks = [],
  errors = [];
try {
  async function scenario(tier, seed, route) {
    const page = await browser.newPage({
      viewport: { width: 1440, height: 900 },
    });
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("console", (m) => {
      if (m.type() === "error") errors.push(m.text());
    });
    await page.goto(`${base}?tier=${tier}&seed=${seed}`);
    await page.waitForFunction(() => window.neonLab);
    await page.locator("summary").first().click();
    await page.locator("#reset-scenario").click();
    const state = () => page.evaluate(() => window.neonLab.snapshot());
    async function resume() {
      await page.locator("#enter").click();
      await page.waitForFunction(
        () =>
          document.pointerLockElement &&
          window.neonLab.snapshot().state === "play",
      );
    }
    async function face(x, z) {
      const s = await state(),
        yaw = Math.atan2(-(x - s.player.x), -(z - s.player.z));
      await page.evaluate(
        ({ dx, dy }) =>
          document.dispatchEvent(
            new MouseEvent("mousemove", { movementX: dx, movementY: dy }),
          ),
        { dx: (s.yaw - yaw) / 0.002, dy: s.pitch / 0.002 },
      );
    }
    async function walk(x, z) {
      await face(x, z);
      const start = Date.now();
      await page.keyboard.down("KeyW");
      while (Date.now() - start < 20000) {
        const s = await state();
        if (Math.hypot(s.player.x - x, s.player.z - z) < 0.2) break;
        await page.waitForTimeout(40);
      }
      await page.keyboard.up("KeyW");
      const s = await state();
      expect(
        Math.hypot(s.player.x - x, s.player.z - z),
        `walk ${x},${z}`,
      ).toBeLessThan(0.35);
    }
    async function interact(x, z, title) {
      await face(x, z);
      await page.keyboard.press("KeyE");
      await expect(page.locator("#inspector")).toBeVisible();
      await expect(page.locator("#inspect-title")).toContainText(title);
    }
    await resume();
    await walk(0, 13);
    await walk(0, 8.2);
    await walk(-4.8, 8.2);
    await interact(-5, 7, "Maintenance");
    await expect(page.locator("#inspect-body")).toContainText("LINE7");
    await page.locator("#inspect-close").click();
    await resume();
    await walk(0, 8.2);
    if (route === "network") {
      await walk(0, 3.2);
      await walk(-4.5, 3.2);
      await face(-4.8, 2);
      await page.keyboard.press("KeyE");
      await expect(page.locator("#terminal")).toBeVisible();
      async function command(c) {
        await page.locator("#command").fill(c);
        await page.locator("#command").press("Enter");
      }
      for (const c of [
        "scan",
        "inspect relay",
        "auth line7",
        "route relay power",
        "connect power",
        "power on",
      ])
        await command(c);
      await expect(page.locator("#terminal-output")).toContainText("energized");
      await page.locator("#command").press("ArrowUp");
      await expect(page.locator("#command")).toHaveValue("power on");
      await page.screenshot({ path: `${out}/hacking.png` });
      await command("exit");
      await resume();
      await walk(0, 3.2);
    } else {
      await walk(0, 0.6);
      await walk(4.8, 0.6);
      await interact(5, -1, "transfer");
      await page.locator('[data-action="bypass"]').click();
      await expect(page.locator("#inspect-body")).toContainText("restored");
      await page.locator("#inspect-close").click();
      await resume();
      await walk(0, 0.6);
    }
    await walk(0, -4.6);
    await walk(4, -4.6);
    await interact(4, -6, "archive");
    await expect(page.locator("#inspect-body")).toContainText("open");
    await page.screenshot({ path: `${out}/archive-open.png` });
    await page.locator("#inspect-close").click();
    await resume();
    await walk(4, -8.1);
    await interact(4, -9, "recorder");
    await expect(page.locator("#inspect-body")).toContainText("cut it");
    expect((await state()).game.complete).toBe(true);
    await page.screenshot({ path: `${out}/payoff.png` });
    await page.locator("#inspect-close").click();
    await page.reload();
    await page.waitForFunction(() => window.neonLab);
    expect((await state()).game.complete).toBe(true);
    checks.push(
      `Tier ${tier}, seed ${seed}: ${route} solution, clue, reward and saved completion`,
    );
    if (tier >= 3) {
      await resume();
      await walk(0, 13);
      await walk(0, -28);
      await page.keyboard.down("ShiftLeft");
      await walk(-39, -28);
      await walk(-39, -57);
      await walk(31, -57);
      await walk(31, -28);
      await page.keyboard.up("ShiftLeft");
      await page.keyboard.press("KeyJ");
      await expect(page.locator("#journal")).toBeVisible();
      await expect(page.locator("#journal-entries")).toContainText("Recorder");
      await page.keyboard.press("Escape");
      await expect(page.locator("#menu")).toBeVisible();
      checks.push("Keyboard traversal of expanded loop and journal");
    }
    await page.locator("summary").first().click();
    await page.locator("#audio-toggle").click();
    expect((await state()).audio.enabled).toBe(true);
    await page.locator("#volume").evaluate((el) => {
      el.value = "10";
      el.dispatchEvent(new Event("input", { bubbles: true }));
    });
    await page.locator("#audio-toggle").click();
    expect((await state()).audio.enabled).toBe(false);
    for (const q of ["low", "medium", "high"])
      await page.locator("#quality").selectOption(q);
    await page.locator("#complexity").selectOption("1");
    await page.locator("#identity").selectOption("residential");
    await page.locator("#seed").fill("8128");
    await page.locator("#regenerate").click();
    await page.waitForFunction(() => window.neonLab);
    expect(new URL(page.url()).searchParams.get("tier")).toBe("1");
    expect(new URL(page.url()).searchParams.get("identity")).toBe(
      "residential",
    );
    checks.push(
      "Audio activation/mute, graphics presets, seed/tier/identity regeneration",
    );
    await page.locator("#lab-button").click();
    await expect(page.locator("#laboratory")).toBeVisible();
    await page.screenshot({ path: `${out}/world-laboratory.png` });
    await page.locator("#lab-close").click();
    await expect(page.locator("#menu")).toBeVisible();
    await page.close();
  }
  await scenario(3, 2049, "network");
  await scenario(4, 8128, "physical");
  const mobile = await browser.newPage({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
  });
  await mobile.goto(base);
  await expect(mobile.locator("#enter")).toBeDisabled();
  await expect(mobile.locator("#notice")).toContainText("keyboard and mouse");
  await mobile.screenshot({ path: `out/mobile.png`.replace("out", out) });
  await mobile.close();
  checks.push("Narrow touch-screen fallback");
  expect(errors).toEqual([]);
  await writeFile(
    out + "/acceptance.json",
    JSON.stringify({ checks, errors, browser: browser.version() }, null, 2),
  );
  console.log({ checks, errors });
} finally {
  await browser.close();
}
