import { chromium, expect } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
const base =
    process.env.TEST_URL || "http://127.0.0.1:5190/NEON-DRIFT/preview/",
  out = "artifacts/attachment-correction";
await mkdir(out, { recursive: true });
const browser = await chromium.launch({ channel: "msedge", headless: true }),
  cases = [];
try {
  for (const seed of [2049, 8128])
    for (let tier = 0; tier < 5; tier++) {
      const page = await browser.newPage({
          viewport: { width: 1280, height: 800 },
        }),
        errors = [];
      page.on("pageerror", (e) => errors.push(e.message));
      page.on("console", (m) => {
        if (m.type() === "error") errors.push(m.text());
      });
      await page.goto(`${base}?seed=${seed}&tier=${tier}&quality=high`);
      await page.waitForFunction(() => window.neonLab?.attachments);
      expect(
        await page.evaluate(() => window.neonLab.attachmentValidation()),
      ).toEqual([]);
      const model = await page.evaluate(() => window.neonLab.attachments);
      for (const kind of ["fans", "vents"])
        for (const angle of [-1, 0, 1]) {
          await page.evaluate(
            ({ kind, angle }) => window.neonLab.poseAttachment(kind, 0, angle),
            { kind, angle },
          );
          await page.waitForTimeout(350);
          await page.screenshot({
            path: `${out}/${seed}-t${tier}-${kind}-${angle}.png`,
          });
        }
      if (tier === 3) {
        await page.evaluate(() => window.neonLab.pose(0));
        await page.waitForTimeout(250);
        await page.screenshot({ path: `${out}/${seed}-opening.png` });
        for (let i = 1; i < model.fans.length; i++) {
          await page.evaluate(
            (i) => window.neonLab.poseAttachment("fans", i, 0),
            i,
          );
          await page.waitForTimeout(250);
          await page.screenshot({ path: `${out}/${seed}-fan-${i}.png` });
        }
        for (let i = 1; i < model.vents.length; i++) {
          await page.evaluate(
            (i) => window.neonLab.poseAttachment("vents", i, 0),
            i,
          );
          await page.waitForTimeout(250);
          await page.screenshot({ path: `${out}/${seed}-vent-${i}.png` });
        }
      }
      for (const quality of ["low", "medium", "high"]) {
        await page.evaluate(() => window.neonLab.cancel());
        await page.locator("#menu-button").click();
        await page.locator("summary").first().click();
        await page.locator("#quality").selectOption(quality);
        await page.locator("summary").first().click();
      }
      expect(errors).toEqual([]);
      cases.push({
        seed,
        tier,
        fans: model.fans.length,
        vents: model.vents.length,
        cables: model.cables.length,
        lamps: model.lamps.length,
        errors,
      });
      console.log(cases.at(-1));
      await page.close();
    }
  await writeFile(
    out + "/render-checks.json",
    JSON.stringify({ browser: browser.version(), cases }, null, 2),
  );
} finally {
  await browser.close();
}
