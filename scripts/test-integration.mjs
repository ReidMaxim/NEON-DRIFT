import { chromium, expect } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
const label = process.env.LABEL || "after",
  base = process.env.TEST_URL || "http://127.0.0.1:5195/NEON-DRIFT/preview/",
  out = "artifacts/integration";
await mkdir(out, { recursive: true });
const browser = await chromium.launch({
    channel: "msedge",
    headless: process.env.HEADED !== "true",
  }),
  cases = [];
try {
  for (const seed of [2049, 8128])
    for (const tier of [3, 4])
      for (const quality of label === "before"
        ? ["high"]
        : ["low", "medium", "high"]) {
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
        await page.goto(`${base}?seed=${seed}&tier=${tier}&quality=${quality}`);
        await page.waitForFunction(() => window.neonLab?.stageExploration);
        const crossings = [];
        for (const p of [
          { name: "west-parcel", x: -43.5, z: -51, yaw: Math.PI / 2, ms: 900 },
          {
            name: "residential-parcel",
            x: 31,
            z: -36,
            yaw: Math.PI / 2,
            ms: 2200,
          },
        ]) {
          await page.evaluate(
            (p) => neonLab.stageExploration(p.x, p.z, p.yaw),
            p,
          );
          await page.locator("#enter").click();
          await page.waitForFunction(
            () =>
              document.pointerLockElement &&
              neonLab.snapshot().state === "play",
          );
          await page.waitForTimeout(100);
          await page.keyboard.down("KeyW");
          await page.waitForTimeout(p.ms);
          await page.keyboard.up("KeyW");
          const end = await page.evaluate(() => neonLab.snapshot().player);
          crossings.push({ ...p, end });
          if (label === "before") {
            expect(end.x).toBeGreaterThan(
              p.name === "west-parcel" ? -44.4 : 27,
            );
          } else {
            expect(end.x).toBeLessThan(p.name === "west-parcel" ? -45.5 : 26.5);
          }
        }
        if (label !== "before") {
          expect(await page.evaluate(() => neonLab.siteValidation())).toEqual(
            [],
          );
          expect(
            await page.evaluate(() => neonLab.attachmentValidation()),
          ).toEqual([]);
          const site = await page.evaluate(() => neonLab.site);
          for (const gate of site.boundaries) {
            await page.evaluate(
              (g) =>
                neonLab.stageExploration(g.end[0], g.end[1] - 1.3, Math.PI),
              gate,
            );
            await page.locator("#enter").click();
            await page.waitForFunction(
              () =>
                document.pointerLockElement &&
                neonLab.snapshot().state === "play",
            );
            await page.waitForTimeout(100);
            await page.keyboard.down("KeyW");
            await page.waitForTimeout(1200);
            await page.keyboard.up("KeyW");
            const end = await page.evaluate(() => neonLab.snapshot().player);
            expect(end.z).toBeGreaterThan(gate.end[1] - 1);
            expect(end.z).toBeLessThan(gate.end[1] - 0.2);
            crossings.push({ gate: gate.id, end });
          }
        }
        expect(errors).toEqual([]);
        cases.push({
          seed,
          tier,
          quality,
          revision: await page.evaluate(() => neonLab.report().revision),
          crossings,
          errors,
        });
        console.log({ label, seed, tier, quality, errors });
        await page.close();
      }
  await writeFile(
    `${out}/${label}-keyboard.json`,
    JSON.stringify({ browser: browser.version(), cases }, null, 2),
  );
} finally {
  await browser.close();
}
