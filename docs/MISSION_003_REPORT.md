# Mission 003 — density, variety and scale

## Baseline and dependency

The successor starts at **`7fbc31cae1225d5a15131ac4021e6db502f35a12`**, the latest pushed Mission 002 preview commit. Main contains Mission 001 plus preview-publishing infrastructure, not Mission 002 gameplay. No open Mission 002 PR or final Mission 002 report existed at inspection. Its final human/visual acceptance therefore remains an unresolved dependency; this mission preserves the implementation and adds compatibility checks instead of declaring Mission 002 finished or merging it.

The exact baseline was captured before environment changes: [baseline measurement](mission003/baseline.json), six camera captures, and a serialized core-world fixture. Its 1080p High 50-second tour on exposed GTX 1050 Ti/ANGLE D3D11, Edge 157, averaged 16.667 ms with p99 17.100 ms and max 18.600 ms. These are requestAnimationFrame intervals, not GPU timings. The new matrix instruments Tier 0 with GPU queries and resource accounting so comparisons within that matrix use the same renderer/instrumentation.

## Implementation

Five independent complexity settings coexist with Low/Medium/High rendering presets. Tier 0 retains exact seeded core building/prop data and original visible environment. Tier 1 adds modular facade depth, meters, conduits, AC housings, trim, service details, clustered trash and repairs. Tier 2 adds drift particles and animated warning elements. Baseline steam, fans, grime and rain remain present at all tiers. Improved wet shading is applied on the expanded streets in Tier 3; the existing core-road approximation is retained. This is an incremental atmospheric tier, not a new volumetric system.

Tier 3 adds a real cross-street, industrial service road, narrower residential route and abandoned lower connector. A cooling-array tower, maintenance gantries, setbacks, balcony systems and rooftop equipment create vertical layers. Elevated structures are scenery without accessible stairs. Tier 4 increases facade/roof/prop density and adds a second service loop. No infinite streaming, combat or new story content is introduced.

The World Laboratory is available in development and experimental preview builds. It exposes fixed viewpoints, core/expanded tours, separate timing metrics and a compact optional overlay. Controls & graphics contains seed, complexity, district identity override, quality and regeneration. URL parameters reproduce configurations. The banner and Lab identify the build revision.

## Verification

See [world generation](WORLD_GENERATION.md), [rendering](RENDERING_OPTIMIZATION.md), [benchmark results](DENSITY_BENCHMARK.md), and [visual comparison](VISUAL_COMPARISON.md). Logic tests include exact Tier 0 fixture matching, deterministic generation, graph connectivity, building overlap rejection, collision traversal of all street segments, critical-object approaches, both restoration methods, save/reset behavior and publication preservation. Browser evidence and measured results are recorded below after execution.

## Acceptance in the browser

Open [the experimental preview](https://reidmaxim.github.io/NEON-DRIFT/preview/) and verify its Mission 003 banner/revision. Production remains [the stable game](https://reidmaxim.github.io/NEON-DRIFT/).

1. Enter and walk the original street. WASD, mouse look, Shift and Escape must work. Verify physical mouse motion in a visible browser; automation uses synthetic mouse events.
2. Open World Lab. Use Controls & graphics to regenerate Tier 0, 1, 2, 3 and 4 at seed 2049; select graphics independently. Try seed 8128 and each district identity override.
3. At Tier 3 walk to the intersection around z=-28. Explore west to the industrial street, south to the abandoned connector, east to the residential street, then return to the original district. Tier 4 has an additional eastern service loop. Do not expect the overhead gantries to be walkable.
4. Run both laboratory tours and inspect reported mean/median/p95/p99/max, CPU and GPU fields. View the fixed viewpoints and watch a full traversal for flicker, LOD popping, rain discontinuities and motion discomfort.
5. Reset the mystery. Read the maintenance tag near the original terminal. Restore power via the local terminal or the physical transfer cabinet. Open Palisade archive and inspect the recorder. Repeat the other solution after reset. Test journal, save/reload and free exploration afterward.
6. Confirm the experimental revision matches the published build metadata. Hard refresh both production and preview. Production should retain the Mission 001 game.

## Known limits

Architecture is finite and mostly axis-aligned. Side facades and module rhythms still repeat; microdetail has diminishing returns at distance. Skybridges and roof routes are visual layers, not vertical gameplay. Road reflections remain economical analytic approximations. Rain has a fixed particle budget spread across larger maps, so density decreases in expanded districts. No visual or timing evidence proves absence of all temporal artifacts. Only the tested browser/GPU supports the measured conclusions. Total VRAM is not measurable through this pipeline.

## Compatibility and acceptance evidence

The final static candidate passed browser keyboard tests for both puzzle solutions: network route at Tier 3/seed 2049 and physical service bypass at Tier 4/seed 8128. Each run read the clue, powered the archive, opened the door, discovered the recorder and restored saved completion after reload. The player then walked the industrial/lower/residential loop with actual keyboard input, opened the journal, activated/muted audio, changed volume/quality, regenerated seed/tier/identity and exercised the laboratory menu. A narrow touch viewport showed the desktop-controls fallback. No fatal console/page errors were captured. Mouse look was driven with synthetic deltas, not a physical mouse, and audio enablement was checked through Web Audio state rather than subjective listening.

[Acceptance results](mission003/acceptance-final.json), [hacking interface](mission003/hacking.png), [open archive](mission003/archive-open.png), [recorder payoff](mission003/payoff.png), [World Laboratory](mission003/world-laboratory.png) and [mobile fallback](mission003/mobile.png).

Twenty automated tests pass, including 72 combinations of sampled seeds, tiers, width extremes and density extremes for connected-loop collision traversal. Finite sampling is not a mathematical proof for every possible seed/configuration; generation reservations and graph construction provide the design invariants. The original navigation and scenario tests remain present. No new npm dependency is required.

## Publication verification procedure

The preview selector is configured for `feat/mission-003`. Publishing continues to use the existing success-gated, serialized workflow and durable `pages-state` artifact tree. Only the selector is changed on main; no gameplay is merged or production build dispatched. Preview assets use `/NEON-DRIFT/preview/`, content hashes, and a visible exact build revision. `/preview/build.json` identifies the deployed SHA; verification uses a revision query and a fresh browser context to avoid stale-cache ambiguity. Live verification is recorded only after the actual deployment completes, in the draft PR and the captured verification artifact.

Reproduce checks with `scripts/verify-deployment.mjs` (including byte comparisons against the original production snapshot when available) and `scripts/verify-m3-live.mjs` (exact Mission 003 revision, Lab, benchmark and hard refresh). Do not infer publication success merely from a completed build.

## Final measured outcome

The release runtime measured at **`24c61acd0216f3968de286cdb8bbbb1f1a2d268e`** completed all 48 retained matrix cases with no captured browser/console errors. Each case has frame, CPU, GPU-query, draw/triangle, initialization and resource data. All cases reported synchronized mean frame intervals close to 16.67 ms; the largest observed frame interval was 33.30 ms. Mean GPU elapsed results ranged up to 7.49 ms. This finite test did not find a universal GPU limit. Earlier pilot results were not pooled into the release table. Later evidence/documentation commits do not change the measured renderer/world source; their published revision label may differ.

The measured static experimental output is 585,456 bytes uncompressed, 158,256 bytes gzip summed per file, before the publisher's small revision metadata file. The preserved Mission 002 preview contains 559,275 bytes including that metadata. Geometry is generated at startup rather than downloaded as models. The normal build and [local production checks](mission003/production.json) pass with correct base-path assets, zero external runtime requests, no development hook, and visible unsupported-WebGL2/context-loss handling.

**Recommended experimental default: Tier 3 / Medium**, with graphics independently adjustable. It provides a connected 3,460 m² road union and 34 descriptor buildings at seed 2049, versus the baseline 1,050 m² and 20 buildings. Tier 4 grows to 4,234 m² and 43 buildings but makes repeated modules more obvious. The independent visual review and measured submission growth support leaving Tier 4 opt-in. Full tables, caveats and raw evidence are in DENSITY_BENCHMARK.md.

No video or physical-mouse review is claimed. The environment did not provide an installed ffmpeg/Playwright video encoder; still captures, scripted tours and keyboard traversal were used. Audio activation/mute is verified, but subjective sound quality is not. Other GPUs and browser engines remain untested.

## Verified live publication

The automatic [Mission 003 publication](https://github.com/ReidMaxim/NEON-DRIFT/actions/runs/43761819560) succeeded. Live browser verification on 2026-11-15 confirmed revision `9408dc1105ee46eecea3625c69fe381bdbf796ee`: HTTP 200, correct Mission 003 banner and exact compiled/build.json revision, Tier 3 default, functioning World Laboratory, completion/display of a live benchmark, hard refresh, and no missing assets or console errors. See [live verification](mission003/live-verification.json), [live entrance](mission003/live-preview.png), and [live laboratory](mission003/live-laboratory.png).

[Production-preservation evidence](mission003/production-preservation.json) confirms that every original production file (HTML, CSS, JavaScript, license) remained byte-for-byte identical after preview publication. Both URLs also passed browser entry, keyboard movement, Escape menu and hard-refresh checks. No Mission 002 or Mission 003 gameplay was merged to main. Main's only change for this mission was selection of the new preview branch. Later evidence-only commits may advance the visible preview revision while retaining the measured renderer/world source.
