import { chromium, expect } from "@playwright/test";
import { mkdir, writeFile, readFile, readdir } from "node:fs/promises";
import { createHash } from "node:crypto";
const base =
  process.env.DEPLOY_URL || "https://reidmaxim.github.io/NEON-DRIFT/";
const output = process.env.EVIDENCE_DIR || "artifacts/preview-deployment";
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ channel: "msedge", headless: true });
const evidence = {
  checkedAt: new Date().toISOString(),
  urls: [],
  productionFiles: [],
};
try {
  for (const suffix of ["", "preview/"]) {
    const errors = [],
      page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("response", (r) => {
      if (r.status() >= 400) errors.push(`${r.status()} ${r.url()}`);
    });
    const response = await page.goto(base + suffix, {
      waitUntil: "networkidle",
    });
    expect(response.status()).toBe(200);
    await expect(page.locator("#error")).toBeHidden();
    await expect(page.locator("#enter")).toBeVisible();
    expect(await page.title()).toContain(
      suffix ? "EXPERIMENTAL PREVIEW" : "NEON",
    );
    if (suffix)
      await expect(page.locator("aside")).toContainText("EXPERIMENTAL PREVIEW");
    else expect(await page.locator("aside").count()).toBe(0);
    await page.locator("#enter").click();
    await page.waitForFunction(() => document.pointerLockElement);
    await page.keyboard.down("KeyW");
    await page.waitForTimeout(500);
    await page.keyboard.up("KeyW");
    await page.keyboard.press("Escape");
    await expect(page.locator("#menu")).toBeVisible();
    await page.reload({ waitUntil: "networkidle" });
    await expect(page.locator("#error")).toBeHidden();
    expect(errors).toEqual([]);
    await page.screenshot({
      path: `${output}/${suffix ? "preview" : "production"}.png`,
    });
    evidence.urls.push({
      url: base + suffix,
      status: response.status(),
      title: await page.title(),
      errors,
      checks: [
        "render",
        "enter/pointer lock",
        "keyboard movement",
        "Escape menu",
        "hard refresh",
      ],
    });
    await page.close();
  }
  if (process.env.PRODUCTION_SNAPSHOT) {
    async function check(dir, prefix = "") {
      for (const entry of await readdir(dir, { withFileTypes: true })) {
        if (entry.isDirectory())
          await check(`${dir}/${entry.name}`, prefix + entry.name + "/");
        else {
          const file = prefix + entry.name;
          const a = await readFile(`${dir}/${entry.name}`),
            response = await fetch(base + file);
          expect(response.status).toBe(200);
          const b = Buffer.from(await response.arrayBuffer());
          expect(b.equals(a), `Production bytes changed: ${file}`).toBe(true);
          evidence.productionFiles.push({
            path: file,
            sha256: createHash("sha256").update(b).digest("hex"),
          });
        }
      }
    }
    await check(process.env.PRODUCTION_SNAPSHOT);
  }
  const res = await fetch(base + "preview/build.json");
  expect(res.status).toBe(200);
  evidence.preview = await res.json();
  await writeFile(
    output + "/verification.json",
    JSON.stringify(evidence, null, 2),
  );
  console.log(evidence);
} finally {
  await browser.close();
}
