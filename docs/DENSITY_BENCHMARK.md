# Density benchmark

## Protocol

All 48 cases ran serially in Microsoft Edge 157 on Windows, headless, using the browser-exposed NVIDIA GeForce GTX 1050 Ti through ANGLE Direct3D11. CPU identity was not exposed by the available hardware query. Candidate revision: **24c61acd0216f3968de286cdb8bbbb1f1a2d268e**. Each static-build run follows a 12-second deterministic path, discarding the first 2.4 seconds; typically ~576 frame intervals remain. Both seeds (2049 and 8128), five tiers and three graphics presets run at a 1920×1080 CSS viewport. Expanded tours add 12 cases; six High cases also run at 1280×720. Actual drawing-buffer dimensions reflect the preset's resolution multiplier and are recorded per case. Adaptive resolution is frozen during tours.

The comparison/core path has exactly the same six positions/targets in every case. The expanded path is separate and only used where streets exist. These are reproducible camera tours, not first-person collision tests. Scene initialization records CPU setup; navigation-to-ready includes load plus two frames. GPU elapsed queries are asynchronous EXT_disjoint_timer_query_webgl2 results; requestAnimationFrame intervals and CPU timings are separate. Browser CPU timer precision can quantize short work to zero.

[Raw matrix](mission003/matrix.json), [untouched baseline](mission003/baseline.json), [baseline download sizes](mission003/baseline-bundle.json), and [candidate static sizes](mission003/bundle.json).

## Core path — complete 1080p matrix

Frame/GPU/CPU times are milliseconds. Calls and triangles are tour averages, including postprocessing. Max spikes are reported as measured, not discarded.

| Seed | Tier | Quality | Frame mean | Median | p95   | p99   | Max   | >33.34 ms | GPU mean | CPU update | CPU submit | Calls | Triangles |
| ---- | ---- | ------- | ---------- | ------ | ----- | ----- | ----- | --------- | -------- | ---------- | ---------- | ----- | --------- |
| 2049 | 0    | low     | 16.67      | 16.70  | 17.00 | 17.10 | 17.10 | 0         | 4.46     | 0.075      | 1.27       | 99    | 34677     |
| 2049 | 0    | medium  | 16.67      | 16.70  | 17.00 | 17.10 | 18.00 | 0         | 6.12     | 0.074      | 1.53       | 129   | 34893     |
| 2049 | 0    | high    | 16.67      | 16.70  | 16.80 | 16.90 | 17.20 | 0         | 5.21     | 0.112      | 2.17       | 140   | 35030     |
| 2049 | 1    | low     | 16.67      | 16.70  | 17.00 | 17.10 | 17.20 | 0         | 3.81     | 0.100      | 1.90       | 149   | 42461     |
| 2049 | 1    | medium  | 16.67      | 16.70  | 17.00 | 17.10 | 19.40 | 0         | 6.77     | 0.091      | 2.08       | 184   | 43588     |
| 2049 | 1    | high    | 16.67      | 16.70  | 17.00 | 17.10 | 17.50 | 0         | 7.49     | 0.113      | 2.51       | 195   | 43729     |
| 2049 | 2    | low     | 16.67      | 16.70  | 17.00 | 17.10 | 18.40 | 0         | 4.50     | 0.104      | 1.86       | 152   | 42479     |
| 2049 | 2    | medium  | 16.67      | 16.70  | 17.00 | 17.10 | 19.70 | 0         | 6.29     | 0.103      | 2.05       | 186   | 43606     |
| 2049 | 2    | high    | 16.70      | 16.70  | 16.90 | 17.10 | 33.30 | 0         | 7.32     | 0.122      | 2.42       | 197   | 43748     |
| 2049 | 3    | low     | 16.67      | 16.70  | 17.00 | 17.10 | 17.40 | 0         | 4.21     | 0.103      | 2.63       | 237   | 57235     |
| 2049 | 3    | medium  | 16.67      | 16.70  | 17.00 | 17.10 | 17.20 | 0         | 4.93     | 0.152      | 3.49       | 276   | 65199     |
| 2049 | 3    | high    | 16.67      | 16.70  | 17.00 | 17.10 | 17.50 | 0         | 6.05     | 0.116      | 3.08       | 281   | 65880     |
| 2049 | 4    | low     | 16.67      | 16.70  | 17.00 | 17.10 | 17.40 | 0         | 5.87     | 0.117      | 2.77       | 245   | 74237     |
| 2049 | 4    | medium  | 16.67      | 16.70  | 16.80 | 17.00 | 19.10 | 0         | 4.68     | 0.132      | 4.01       | 290   | 92175     |
| 2049 | 4    | high    | 16.67      | 16.70  | 17.00 | 17.10 | 17.40 | 0         | 4.94     | 0.095      | 3.05       | 297   | 93678     |
| 8128 | 0    | low     | 16.67      | 16.70  | 17.00 | 17.10 | 18.90 | 0         | 3.42     | 0.043      | 1.31       | 101   | 36572     |
| 8128 | 0    | medium  | 16.67      | 16.70  | 17.00 | 17.10 | 17.20 | 0         | 5.84     | 0.039      | 1.27       | 131   | 36790     |
| 8128 | 0    | high    | 16.67      | 16.70  | 17.00 | 17.10 | 17.60 | 0         | 6.24     | 0.045      | 1.40       | 142   | 36924     |
| 8128 | 1    | low     | 16.67      | 16.70  | 17.00 | 17.10 | 17.20 | 0         | 4.22     | 0.048      | 1.45       | 150   | 44451     |
| 8128 | 1    | medium  | 16.67      | 16.70  | 17.00 | 17.10 | 17.50 | 0         | 5.77     | 0.048      | 1.64       | 184   | 45574     |
| 8128 | 1    | high    | 16.67      | 16.70  | 17.00 | 17.10 | 17.40 | 0         | 5.72     | 0.050      | 1.71       | 195   | 45705     |
| 8128 | 2    | low     | 16.67      | 16.70  | 17.00 | 17.10 | 17.30 | 0         | 3.85     | 0.061      | 1.57       | 152   | 44463     |
| 8128 | 2    | medium  | 16.67      | 16.70  | 17.00 | 17.10 | 17.50 | 0         | 4.87     | 0.064      | 1.68       | 186   | 45587     |
| 8128 | 2    | high    | 16.67      | 16.70  | 17.00 | 17.10 | 17.10 | 0         | 5.67     | 0.053      | 1.70       | 197   | 45718     |
| 8128 | 3    | low     | 16.67      | 16.70  | 17.00 | 17.20 | 19.60 | 0         | 5.37     | 0.042      | 1.90       | 232   | 51918     |
| 8128 | 3    | medium  | 16.67      | 16.70  | 17.00 | 17.10 | 17.50 | 0         | 4.44     | 0.048      | 2.13       | 272   | 58226     |
| 8128 | 3    | high    | 16.67      | 16.70  | 17.00 | 17.10 | 18.40 | 0         | 4.85     | 0.046      | 2.21       | 277   | 58461     |
| 8128 | 4    | low     | 16.67      | 16.70  | 17.00 | 17.10 | 17.40 | 0         | 3.98     | 0.047      | 2.03       | 245   | 63903     |
| 8128 | 4    | medium  | 16.67      | 16.70  | 17.00 | 17.10 | 17.20 | 0         | 4.98     | 0.045      | 2.23       | 289   | 77226     |
| 8128 | 4    | high    | 16.67      | 16.70  | 17.00 | 17.10 | 18.70 | 0         | 5.64     | 0.043      | 2.25       | 294   | 77830     |

## Resource and world scaling — seed 2049, High

Counts are measured snapshots unless described otherwise. Geometry/texture counts come from Three.js after the tour; not every resource is visible at once. Props count descriptor anchors, not every trash fragment or facade part. Module count is an authored taxonomy (10 baseline families, eight microdetail families, six expanded-architecture families), not an automatically inferred aesthetic measure. Street area is the 0.5 m grid estimate of the road union, not collision-free area. Baseline pre-change clearance-area estimate was 969.94 m².

| Tier | Street envelope m | Street surface m² | Buildings | Prop anchors | Segments | Module families | Added instances | Chunks | Geometries | Textures | Attribute/instance KiB | Texture RGBA8 estimate MiB | JS heap MiB | CPU init ms | Ready ms |
| ---- | ----------------- | ----------------- | --------- | ------------ | -------- | --------------- | --------------- | ------ | ---------- | -------- | ---------------------- | -------------------------- | ----------- | ----------- | -------- |
| 0    | 12 × 87.7         | 1050              | 20        | 22           | 1        | 10              | 0               | 0      | 67         | 35       | 398.48                 | 8.00                       | 9.30        | 105.10      | 425      |
| 1    | 12 × 87.7         | 1050              | 20        | 22           | 1        | 18              | 698             | 16     | 69         | 35       | 450.42                 | 8.00                       | 12.27       | 110.90      | 442      |
| 2    | 12 × 87.7         | 1050              | 20        | 22           | 1        | 18              | 698             | 16     | 70         | 35       | 451.24                 | 8.00                       | 9.94        | 125.50      | 452      |
| 3    | 95 × 87.7         | 3460              | 34        | 40           | 5        | 24              | 4671            | 39     | 55         | 37       | 577.16                 | 8.33                       | 12.11       | 150.70      | 524      |
| 4    | 114 × 87.7        | 4234              | 43        | 49           | 8        | 24              | 8304            | 47     | 55         | 37       | 805.52                 | 8.33                       | 16.85       | 142.50      | 472      |

These memory approximations exclude render targets, driver memory, program binaries and other allocations. Total VRAM is unavailable. Heap values are browser estimates with GC/cache variability, not a precise retained-memory budget.

## Expanded path

| Seed | Tier | Quality | Mean frame ms | p99 ms | Max ms | GPU mean ms | CPU submit ms | Calls |
| ---- | ---- | ------- | ------------- | ------ | ------ | ----------- | ------------- | ----- |
| 2049 | 3    | low     | 16.67         | 17.10  | 17.20  | 4.30        | 1.60          | 158   |
| 2049 | 3    | medium  | 16.67         | 17.10  | 17.20  | 5.65        | 1.77          | 178   |
| 2049 | 3    | high    | 16.67         | 17.10  | 17.30  | 7.08        | 2.19          | 180   |
| 2049 | 4    | low     | 16.67         | 17.10  | 17.20  | 4.57        | 2.20          | 173   |
| 2049 | 4    | medium  | 16.67         | 17.10  | 18.60  | 5.95        | 2.38          | 194   |
| 2049 | 4    | high    | 16.67         | 17.10  | 17.70  | 6.80        | 2.37          | 197   |
| 8128 | 3    | low     | 16.67         | 17.20  | 17.60  | 5.63        | 2.03          | 151   |
| 8128 | 3    | medium  | 16.67         | 17.10  | 19.40  | 6.10        | 2.18          | 171   |
| 8128 | 3    | high    | 16.67         | 17.10  | 17.30  | 6.22        | 2.24          | 173   |
| 8128 | 4    | low     | 16.67         | 17.10  | 17.20  | 4.30        | 2.17          | 168   |
| 8128 | 4    | medium  | 16.67         | 17.10  | 17.30  | 5.41        | 2.30          | 189   |
| 8128 | 4    | high    | 16.67         | 17.10  | 17.60  | 6.27        | 2.36          | 192   |

## Lower-resolution checks

All are High graphics at a 1280×720 CSS viewport/drawing buffer.

| Seed | Tier | Frame mean ms | p99 ms | GPU mean ms | GPU p99 ms |
| ---- | ---- | ------------- | ------ | ----------- | ---------- |
| 2049 | 0    | 16.67         | 17.20  | 4.09        | 6.29       |
| 2049 | 3    | 16.67         | 17.10  | 4.43        | 6.44       |
| 2049 | 4    | 16.67         | 17.10  | 4.38        | 6.49       |
| 8128 | 0    | 16.67         | 17.20  | 6.22        | 9.61       |
| 8128 | 3    | 16.67         | 17.10  | 6.07        | 8.57       |
| 8128 | 4    | 16.67         | 17.10  | 5.88        | 8.07       |

## Downloads

The preserved Mission 002 preview contained 559,275 bytes (147,695 bytes gzip summed per file). The measured Mission 003 static output contains 585,456 bytes (158,256 bytes gzip summed per file). Hosting compression and headers determine actual transfer size. The renderer remains the dominant bundle cost; additional generated instances are created locally, not downloaded geometry.

## Diminishing returns and recommendation

**Recommend Tier 3 / Medium as the initial experimental configuration**, while leaving quality independently selectable. The independent visual reviewer preferred Tier 3: connected neighborhoods and a memorable industrial anchor add more perceived scale than further repeated dressing. Tier 1 offers a strong street-level return. Tier 2's still-image gain is smaller; animation needs visible-browser judgment. Tier 4 remains an opt-in density stress case because extra modules expose repetition and increase submission/resource cost without proportionate variety.

The road union grows from 1,050 m² to 3,460 m² at Tier 3 and 4,234 m² at Tier 4. Geometry, instance and draw-call increases are measurable. They do not establish that maximum density is the best visual setting. Spatial partitioning trades extra draw calls for localized visibility; repeated microdetail is the most obvious candidate for further batching/atlas work. Surface shaders and shared geometry provide useful detail with small download growth.

**This finite experiment did not find a universal GPU ceiling.** Frame intervals remain close to the display cadence in this test environment, but GPU queries and CPU submission expose actual work. GPU times are not strictly monotonic across presets/runs: clock state, shader warm-up, camera visibility, query overhead and single-run noise limit fine-grained causal conclusions. There is one run per case, not a statistically repeated hardware study. No unsupported inference of unused GPU capacity is made. Longer visible-browser runs and slower hardware are needed before larger-scale commitments.

No fatal browser/console errors were captured in the matrix: 0. Performance observations apply to the recorded revision and settings, not all hardware.

The release retained matrix covers runtime revision `24c61acd0216f3968de286cdb8bbbb1f1a2d268e`. The earlier pilot is kept only in ignored development artifacts and is not pooled into the tables. The normal browser cadence is not a GPU-capacity claim. Browser executable/acceptance version was Edge 157.0.4341.60; the raw benchmark records its full user-agent. A largest frame interval of 33.30 ms is visible in the tables even though it falls just below the explicit >33.34 ms counter threshold.

## Context-aware fixture correction

The original 48-case Mission 003 matrix above is historical evidence for the pre-correction renderer. The follow-up [attachment correction](ATTACHMENT_CORRECTION.md) records a matched before/after comparison for seeds 2049/8128 at all five tiers. Fans, steam, cables and lamp supports now have validated attachment data; do not treat the older matrix's resource counts as the corrected version's counts.
