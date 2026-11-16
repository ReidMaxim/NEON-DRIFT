import { chromium, expect } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
const base =
    process.env.TEST_URL || "http://127.0.0.1:5194/NEON-DRIFT/preview/",
  out = "artifacts/mission004";
await mkdir(out, { recursive: true });
const browser = await chromium.launch({
    channel: "msedge",
    headless: process.env.HEADED !== "true",
  }),
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
      page.on("response", (r) => {
        if (r.status() >= 400) errors.push(`${r.status()} ${r.url()}`);
      });
      await page.goto(`${base}?seed=${seed}&tier=${tier}&quality=high`);
      await page.waitForFunction(() => window.neonLab?.layerValidation);
      expect(await page.evaluate(() => neonLab.layerValidation())).toEqual([]);
      await page.evaluate(() => neonLab.stageExploration());
      await page.locator("#enter").click();
      await page.waitForFunction(
        () =>
          document.pointerLockElement && neonLab.snapshot().state === "play",
      );
      const state = () => page.evaluate(() => neonLab.snapshot());
      async function face(x, y, z) {
        const s = await state(),
          dx = x - s.player.x,
          dz = z - s.player.z,
          heading = Math.atan2(-dx, -dz),
          pitch = Math.atan2(y - 1.72, Math.hypot(dx, dz));
        await page.evaluate(
          ({ dx, dy }) =>
            document.dispatchEvent(
              new MouseEvent("mousemove", { movementX: dx, movementY: dy }),
            ),
          { dx: (s.yaw - heading) / 0.002, dy: (s.pitch - pitch) / 0.002 },
        );
      }
      async function walk(x, z) {
        await face(x, 1.72, z);
        const start = Date.now();
        await page.keyboard.down("KeyW");
        let d;
        while (Date.now() - start < 25000) {
          const s = await state();
          d = Math.hypot(s.player.x - x, s.player.z - z);
          if (d < 0.18) break;
          if (d < 1) await page.keyboard.up("ShiftLeft");
          else await page.keyboard.down("ShiftLeft");
          await page.waitForTimeout(25);
        }
        await page.keyboard.up("KeyW");
        await page.keyboard.up("ShiftLeft");
        expect(d, `walk ${seed}/${tier} to ${x},${z}`).toBeLessThan(0.3);
      }
      const landmarks = await page.evaluate(() => neonLab.layers.landmarks),
        homeZ = landmarks.find((l) => l.id === "residential").approach[1];
      for (const [x, z] of [
        [0, -28],
        [-39, -28],
        [-39, -42],
        [-32, -42],
      ])
        await walk(x, z);
      await face(-24, 5, -42);
      await page.screenshot({
        path: `${out}/${seed}-t${tier}-walk-cooling.png`,
      });
      for (const [x, z] of [
        [-39, -42],
        [-39, -57],
        [31, -57],
        [31, -62],
      ])
        await walk(x, z);
      await face(31, 5, -64);
      await page.screenshot({
        path: `${out}/${seed}-t${tier}-walk-terminus.png`,
      });
      await walk(31, homeZ);
      await face(26, 5, homeZ);
      await page.screenshot({
        path: `${out}/${seed}-t${tier}-walk-residential.png`,
      });
      for (const [x, z] of [
        [31, -28],
        [0, -28],
        [0, 13],
      ])
        await walk(x, z);
      await page.keyboard.press("Escape");
      await page.waitForFunction(() => !document.pointerLockElement);
      await expect(page.locator("#menu")).toBeVisible();
      await page.evaluate(() => neonLab.stageExploration(0, 17, Math.PI));
      await page.locator("#enter").click();
      await page.waitForFunction(
        () =>
          document.pointerLockElement && neonLab.snapshot().state === "play",
      );
      await page.waitForTimeout(150);
      await page.keyboard.down("KeyW");
      await page.waitForTimeout(1200);
      await page.keyboard.up("KeyW");
      const boundary = (await state()).player;
      expect(boundary.z).toBeLessThan(18.35);
      expect(boundary.z).toBeGreaterThan(17.2);
      expect(errors).toEqual([]);
      cases.push({
        seed,
        tier,
        revision: await page.evaluate(() => neonLab.report().revision),
        landmarks: landmarks.map((l) => l.id),
        checks: [
          "keyboard loop through all three landmarks and return",
          "visible closed northern boundary blocks movement",
          "Escape menu",
        ],
        boundary,
        errors,
      });
      console.log(cases.at(-1));
      await page.close();
    }
  await writeFile(
    out + "/exploration.json",
    JSON.stringify(
      {
        browser: browser.version(),
        headed: process.env.HEADED === "true",
        cases,
      },
      null,
      2,
    ),
  );
} finally {
  await browser.close();
}
