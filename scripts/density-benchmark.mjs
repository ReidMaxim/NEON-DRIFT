import { execFileSync } from "node:child_process";
const expectedRevision = execFileSync("git", ["rev-parse", "HEAD"], {
  encoding: "utf8",
}).trim();
import { chromium } from "@playwright/test";
import { mkdir, writeFile, readFile, stat, readdir } from "node:fs/promises";
import { gzipSync } from "node:zlib";
const url = process.env.TEST_URL || "http://127.0.0.1:5183/NEON-DRIFT/preview/",
  out = "artifacts/mission003";
await mkdir(out + "/matrix", { recursive: true });
const duration = Number(process.env.BENCH_SECONDS || 12),
  cases = [];
for (const seed of [2049, 8128])
  for (let tier = 0; tier <= 4; tier++)
    for (const quality of ["low", "medium", "high"])
      cases.push({
        seed,
        tier,
        quality,
        width: 1920,
        height: 1080,
        route: "core",
      });
for (const seed of [2049, 8128])
  for (const tier of [3, 4])
    for (const quality of ["low", "medium", "high"])
      cases.push({
        seed,
        tier,
        quality,
        width: 1920,
        height: 1080,
        route: "district",
      });
for (const seed of [2049, 8128])
  for (const tier of [0, 3, 4])
    cases.push({
      seed,
      tier,
      quality: "high",
      width: 1280,
      height: 720,
      route: "core",
    });
const browser = await chromium.launch({ channel: "msedge", headless: true }),
  results = [];
try {
  for (const c of cases) {
    const key = `${c.seed}-t${c.tier}-${c.quality}-${c.width}-${c.route}`,
      file = out + "/matrix/" + key + ".json";
    if (process.env.RESUME === "true") {
      try {
        const r = JSON.parse(await readFile(file));
        if (r.revision !== expectedRevision)
          throw new Error("Old revision requires rerun");
        results.push(r);
        console.log("retained", key);
        continue;
      } catch {}
    }
    const page = await browser.newPage({
        viewport: { width: c.width, height: c.height },
      }),
      errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("console", (m) => {
      if (m.type() === "error") errors.push(m.text());
    });
    const begin = Date.now();
    await page.goto(
      `${url}?seed=${c.seed}&tier=${c.tier}&quality=${c.quality}`,
    );
    await page.waitForFunction(() => window.neonLab);
    await page.evaluate(
      () =>
        new Promise((r) =>
          requestAnimationFrame(() => requestAnimationFrame(r)),
        ),
    );
    const navigationToReadyMs = Date.now() - begin;
    if (
      c.seed === 2049 &&
      c.quality === "high" &&
      c.width === 1920 &&
      c.route === "core"
    ) {
      for (const i of c.tier >= 3 ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] : [0, 1]) {
        await page.evaluate((i) => window.neonLab.pose(i), i);
        await page.waitForTimeout(300);
        await page.screenshot({ path: `${out}/t${c.tier}-v${i}.png` });
      }
    }
    await page.evaluate(
      ({ duration, route }) => window.neonLab.start({ duration, route }),
      { duration, route: c.route },
    );
    await page.waitForFunction(
      () => !window.neonLab.active,
      {},
      { timeout: Math.max(60000, duration * 4000) },
    );
    await page.waitForTimeout(100);
    const r = {
      case: c,
      navigationToReadyMs,
      ...(await page.evaluate(() => window.neonLab.report())),
      errors,
    };
    await writeFile(file, JSON.stringify(r, null, 2));
    results.push(r);
    console.log(
      JSON.stringify({
        key,
        frames: r.frameIntervalsMs?.samples,
        mean: r.frameIntervalsMs?.mean,
        p99: r.frameIntervalsMs?.p99,
        gpu: r.gpuElapsedMs?.mean,
        calls: r.drawCalls?.mean,
        errors,
      }),
    );
    await page.close();
  }
  await writeFile(out + "/matrix.json", JSON.stringify(results, null, 2));
  let uncompressed = 0,
    gzipped = 0;
  async function size(dir) {
    for (const e of await readdir(dir, { withFileTypes: true })) {
      const p = dir + "/" + e.name;
      if (e.isDirectory()) await size(p);
      else {
        const b = await readFile(p);
        uncompressed += b.length;
        gzipped += gzipSync(b).length;
      }
    }
  }
  await size("dist");
  await writeFile(
    out + "/bundle.json",
    JSON.stringify(
      {
        uncompressed,
        gzipped,
        includes:
          "All static output files, gzip per file; HTTP transfer depends on hosting compression",
      },
      null,
      2,
    ),
  );
} finally {
  await browser.close();
}
