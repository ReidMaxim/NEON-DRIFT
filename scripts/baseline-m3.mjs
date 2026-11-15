import { execFileSync } from "node:child_process";
const baseline = "7fbc31cae1225d5a15131ac4021e6db502f35a12";
if (
  execFileSync("git", ["rev-parse", "HEAD"], { encoding: "utf8" }).trim() !==
  baseline
)
  throw new Error(
    "This pre-change baseline capture must run in a worktree at " +
      baseline +
      ". Use density-benchmark.mjs for Tier 0 comparisons on current code.",
  );
import { chromium } from "@playwright/test";
import { writeFile, mkdir, readdir, stat } from "node:fs/promises";
import { generate, colliders } from "../src/world.js";
const out = "artifacts/mission003";
await mkdir(out, { recursive: true });
const world = generate({ seed: 2049 }),
  boxes = colliders(world);
let area = 0;
for (let x = world.bounds.minX; x < world.bounds.maxX; x += 0.25)
  for (let z = world.bounds.minZ; z < world.bounds.maxZ; z += 0.25)
    if (
      !boxes.some(
        (b) =>
          x > b.minX - 0.28 &&
          x < b.maxX + 0.28 &&
          z > b.minZ - 0.28 &&
          z < b.maxZ + 0.28,
      )
    )
      area += 0.0625;
const browser = await chromium.launch({ channel: "msedge", headless: true });
try {
  const page = await browser.newPage({
      viewport: { width: 1920, height: 1080 },
    }),
    errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto(process.env.TEST_URL || "http://127.0.0.1:5180/NEON-DRIFT/");
  await page.waitForFunction(() => window.neonDev);
  await page.locator("summary").click();
  await page.locator("#quality").selectOption("high");
  for (let i = 0; i < 6; i++) {
    await page.evaluate((i) => window.neonDev.pose(i), i);
    await page.waitForTimeout(300);
    await page.screenshot({ path: `${out}/baseline-${i}.png` });
  }
  await page.evaluate(() => window.neonDev.start());
  await page.waitForFunction(
    () => !window.neonDev.active,
    {},
    { timeout: 90000 },
  );
  const report = await page.evaluate(() => ({
    timing: window.neonDev.report(),
    heap: performance.memory
      ? {
          used: performance.memory.usedJSHeapSize,
          total: performance.memory.totalJSHeapSize,
        }
      : null,
  }));
  await writeFile(
    `${out}/baseline.json`,
    JSON.stringify(
      {
        commit: "7fbc31cae1225d5a15131ac4021e6db502f35a12",
        bounds: world.bounds,
        walkableAreaGridEstimateM2: area,
        buildings: world.buildings.length,
        generatedProps: world.props.length,
        modules: [
          "box facade",
          "windows/trim",
          "pipe sweep",
          "vents",
          "balconies",
          "signs",
          "streetlights",
          "utility clutter",
          "CRT",
          "archive alcove",
        ],
        ...report,
        errors,
      },
      null,
      2,
    ),
  );
  console.log(report);
} finally {
  await browser.close();
}
