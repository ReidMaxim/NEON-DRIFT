import { chromium, expect } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
const base =
    process.env.TEST_URL || "http://127.0.0.1:5190/NEON-DRIFT/preview/",
  out = "artifacts/surface-correction";
await mkdir(out, { recursive: true });
const browser = await chromium.launch({ channel: "msedge", headless: true }),
  cases = [];
try {
  for (const seed of [2049, 8128])
    for (let tier = 0; tier < 5; tier++)
      for (const quality of ["low", "medium", "high"]) {
        const page = await browser.newPage({
            viewport: { width: 1280, height: 800 },
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
        await page.waitForFunction(() => window.neonLab?.stageSurfaceCrossing);
        expect(
          await page.evaluate(() => neonLab.attachmentValidation()),
        ).toEqual([]);
        const vents = await page.evaluate(() => neonLab.attachments.vents),
          crossings = [];
        expect(vents.length).toBe(2);
        for (let index = 0; index < vents.length; index++)
          for (const direction of [-1, 1]) {
            await page.evaluate(
              ({ index, direction }) =>
                neonLab.stageSurfaceCrossing(index, direction),
              { index, direction },
            );
            await page.locator("#enter").click();
            await page.waitForFunction(
              () =>
                document.pointerLockElement &&
                neonLab.snapshot().state === "play",
            );
            const start = await page.evaluate(() => neonLab.snapshot().player);
            await page.keyboard.down("KeyW");
            await page.waitForTimeout(850);
            await page.keyboard.up("KeyW");
            const end = await page.evaluate(() => neonLab.snapshot().player);
            expect(
              (vents[index].position[2] - end.z) * direction,
            ).toBeGreaterThan(0.8);
            expect(Math.abs(start.x - end.x)).toBeLessThan(0.02);
            crossings.push({ index, direction, start, end });
          }
        for (const angle of [-1, 1]) {
          await page.evaluate(
            (a) => neonLab.poseAttachment("vents", 0, a),
            angle,
          );
          await page.waitForTimeout(250);
          await page.screenshot({
            path: `${out}/${seed}-t${tier}-${quality}-${angle}.png`,
          });
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
        console.log({
          seed,
          tier,
          quality,
          crossings: crossings.length,
          errors,
        });
        await page.close();
      }
  await writeFile(
    out + "/browser-checks.json",
    JSON.stringify({ browser: browser.version(), cases }, null, 2),
  );
} finally {
  await browser.close();
}
