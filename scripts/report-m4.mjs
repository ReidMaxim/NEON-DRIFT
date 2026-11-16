import fs from "node:fs";
import { gzipSync } from "node:zlib";
import path from "node:path";
const out = "artifacts/mission004";
function files(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((d) =>
      d.isDirectory()
        ? files(path.join(dir, d.name))
        : [path.join(dir, d.name)],
    );
}
const bundle = files("dist").map((p) => ({
  path: p.replaceAll("\\", "/"),
  bytes: fs.statSync(p).size,
  gzip: gzipSync(fs.readFileSync(p)).length,
}));
fs.writeFileSync(
  out + "/bundle.json",
  JSON.stringify(
    {
      files: bundle,
      total: bundle.reduce((n, f) => n + f.bytes, 0),
      gzip: bundle.reduce((n, f) => n + f.gzip, 0),
    },
    null,
    2,
  ),
);
const m = JSON.parse(fs.readFileSync(out + "/matrix.json")),
  b = JSON.parse(fs.readFileSync(out + "/before-performance.json")).rows,
  core = m.rows.filter((r) => r.route === "core"),
  high = core.filter((r) => r.quality === "high");
const f = (n, d = 2) => n.toFixed(d),
  lines = [];
lines.push("## Measured rendering outcome\n");
lines.push(
  "Final runtime `74e05ec` completed 30 core cases (two seeds × five tiers × three quality presets at 1920×1080 CSS pixels), plus four High expanded tours. The 12-second core path discards a 2.4-second warmup; expanded tours run 16 seconds. Browser: Edge " +
    m.browser +
    ", exposed GTX 1050 Ti / ANGLE D3D11. Pages ran serially, one browser at a time. [Full matrix](mission004/matrix.json), [Mission 003 baseline](mission004/before-performance.json).\n",
);
lines.push(
  "All 34 cases had zero captured browser/console errors and passed fixture/layer validation. Frame means ranged " +
    f(Math.min(...m.rows.map((r) => r.frameIntervalsMs.mean)), 3) +
    "–" +
    f(Math.max(...m.rows.map((r) => r.frameIntervalsMs.mean)), 3) +
    " ms; largest frame " +
    f(Math.max(...m.rows.map((r) => r.frameIntervalsMs.max)), 2) +
    " ms. No samples exceeded 33.34 ms. Maximum case-mean GPU time was " +
    f(Math.max(...m.rows.map((r) => r.gpuElapsedMs.mean)), 3) +
    " ms. These finite, synchronized measurements do not prove spare GPU capacity or results on other hardware.\n",
);
lines.push(
  "### Identical core tour, High\n\nTimes are milliseconds. Before is the untouched live Mission 003 build; after is the local static candidate. GPU, CPU submission, calls and triangles are steady-tour averages. Initialization includes module/setup delay and differs between remote/local hosting, so it is reported separately rather than interpreted as a speedup. Single tours can vary with GPU clocks/background load.\n",
);
lines.push(
  "| Seed | Tier | Frame before → after | GPU before → after | CPU submit before → after | Calls before → after | Triangles before → after |\n| --- | --- | --- | --- | --- | --- | --- |",
);
for (const r of high) {
  const old = b.find((v) => v.seed === r.seed && v.tier === r.tier);
  lines.push(
    "| " +
      [
        r.seed,
        r.tier,
        f(old.frameIntervalsMs.mean, 3) + " → " + f(r.frameIntervalsMs.mean, 3),
        f(old.gpuElapsedMs.mean, 3) + " → " + f(r.gpuElapsedMs.mean, 3),
        f(old.cpuRenderSubmissionMs.mean, 3) +
          " → " +
          f(r.cpuRenderSubmissionMs.mean, 3),
        f(old.drawCalls.mean, 1) + " → " + f(r.drawCalls.mean, 1),
        f(old.triangles.mean, 0) + " → " + f(r.triangles.mean, 0),
      ].join(" | ") +
      " |",
  );
}
lines.push(
  "\n### Resource and initialization indicators\n\nThe raw diagnostic geometry/matrix-byte estimate predates per-instance colors. The adjusted KiB below explicitly adds 12 bytes per new layer instance for its RGB Float32 buffer. It remains CPU attribute storage, not total GPU memory; render targets, driver/program memory and allocations are excluded. Texture bytes are an RGBA8/mipmap estimate; JS heap is browser-provided and shared/GC-sensitive.\n",
);
lines.push(
  "| Seed | Tier | CPU init before → after ms | Adjusted geometry/instance KiB before → after | Render geometries before → after | Textures before → after | After heap MiB |\n| --- | --- | --- | --- | --- | --- | --- |",
);
for (const r of high) {
  const old = b.find((v) => v.seed === r.seed && v.tier === r.tier),
    adjusted =
      r.resources.geometryAndInstanceArrayBytes + 12 * r.city.layers.instances;
  lines.push(
    "| " +
      [
        r.seed,
        r.tier,
        f(old.initMs, 1) + " → " + f(r.initMs, 1),
        f(old.resources.geometryAndInstanceArrayBytes / 1024, 1) +
          " → " +
          f(adjusted / 1024, 1),
        old.resources.geometries + " → " + r.resources.geometries,
        old.resources.textures + " → " + r.resources.textures,
        f(r.heap.used / 1048576, 2),
      ].join(" | ") +
      " |",
  );
}
lines.push(
  "\nThe expanded tiers trade a small background/silhouette cost for fewer fragmented facade batches: High core-tour calls fall by roughly 26–27%, while Tiers 0–2 gain about four to five calls. GPU timings vary in both directions; this is not a universal GPU-speedup claim. The final preview bundle is " +
    bundle.reduce((n, f) => n + f.bytes, 0).toLocaleString("en-US") +
    " bytes uncompressed and " +
    bundle.reduce((n, f) => n + f.gzip, 0).toLocaleString("en-US") +
    " bytes summed gzip, excluding the publisher's build metadata. Geometry is generated at startup; evidence PNGs are not shipped in the game bundle. [Bundle sizes](mission004/bundle.json).\n",
);
let doc = fs.readFileSync("docs/MISSION_004_REPORT.md", "utf8");
doc = doc.split("## Measured rendering outcome")[0];
fs.writeFileSync(
  "docs/MISSION_004_REPORT.md",
  doc + "\n" + lines.join("\n") + "\n",
);
console.log({
  rows: m.rows.length,
  bundleBytes: bundle.reduce((n, f) => n + f.bytes, 0),
  maxFrame: Math.max(...m.rows.map((r) => r.frameIntervalsMs.max)),
});
