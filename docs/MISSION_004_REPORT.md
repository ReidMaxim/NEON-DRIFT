# Mission 004 — City of Layers

## Baseline and branch safety

Started `feat/mission-004` from the fetched Mission 003 head `859241bb83b7beb5679714da75a8ec259b100da9`. It matched the supplied verified baseline. PR #2 remained draft, open, unmerged and stacked on `feat/mission-002`. No previous mission gameplay is merged to production. Mission 004's draft PR is stacked on `feat/mission-003`.

The unchanged live Mission 003 preview was captured at ten fixed viewpoints across seeds 2049/8128 and Tiers 3/4 before implementation. Ten High-quality core tours were measured against that exact live baseline. The same camera coordinates are retained in `city-views.js` and used by captures and the World Laboratory.

## Result

- Four structural building families replace the generic expanded-city facade recipe; original entrance geometry and puzzle anchors remain.
- Three reserved landmarks with seeded frontage variations provide different places to discover, with tested pedestrian approaches.
- Distant stepped architecture, selective windows, antennas and supported transit create a city beyond the accessible map.
- Closed, collidable street-end gates and the original tower's real footprint explain finite navigation boundaries.
- Sidewalks are cut at cross-streets; road surfaces use non-overlapping tiles and consistent height. Flush grates and source-bound steam remain walkable.
- Instance colors combine compatible family materials. Coarse 48 m cells and a simpler distant layer avoid a proliferation of tiny new material batches. Three location labels share one atlas. No new dependency, downloaded asset, backend or paid hosting is introduced.

See [architectural grammar](ARCHITECTURAL_GRAMMAR.md), [continuity](WORLD_CONTINUITY.md), and [landmarks](LANDMARK_SYSTEM.md).

## Visual review

A separate review agent compared ten seed-2049/Tier-3 views and selected seed-8128/Tier-4 views with the original captures. The first pass requested more readable cooling machinery, less wall-like background massing and better peripheral bases. Generator rules were revised: tank banding/vent details, inward-facing window bands, stepped skyline masses, shaded distant faces, shallow foundations and a closer ground underlay. The follow-up eight landmark/boundary/residential stills at runtime revision `543110c` had no blocking visual issue, unsupported object, severe intersection or obvious static surface artifact. Dark recesses and sparse distant detail remain polish opportunities. Review of stills does not establish motion, performance or collision behavior.

## Verification

36 tests pass, retaining both relay solutions, save/reset behavior, graph connectivity, attachment transforms and flush-grate traversal. New coverage includes deterministic landmark/skyline generation, 144 sampled landmark-route configurations, building reservations, valid support references and envelopes, background exclusion, boundary collision, sidewalk/road continuity, and correct nonzero instance colors without a missing vertex-color attribute. Existing attachment tests cover 500 seeds/tier cases plus 48 extremes. Finite sampling is evidence, not proof of all worlds.

Browser evidence and measured performance are recorded below. Scripted mouse look uses synthetic deltas; visible-browser operation does not constitute a physical-mouse review. Audio activation is checked by the retained acceptance, not subjective listening. No video or alternate-GPU/browser-engine claim is made.

## Human playtest

Use the experimental preview and check its Mission 004 revision. At Tier 3 or 4, walk south from the entrance to the cross-street around Z=−28. Go west, turn south along the industrial road and enter the cooling yard. Continue to the lower connector, head east to the residential street, explore the closed utility apron at its south end, then return north past Lantern Court. Tier 4 adds the retained eastern loop. Try seeds 2049 and 8128 and change graphics independently from complexity.

The World Laboratory offers entrance, commercial, intersection, cooling-yard, residential, terminus, skyline, boundary, overhead and street-detail views. Diagnostic camera tours do not test collision; use ordinary keyboard movement for that. Original service fans rotate, steam starts inside flush grates, and the relay mystery/journal/save controls remain available.

## Limits

The city is finite and axis aligned. Landmark sites are fixed safe reservations with seeded modules, not arbitrary-site discovery. Most background architecture is deliberately sparse. Closed doors, gantries, balconies and roof structures are scenery; no vertical movement, full interiors or terrain elevation is added. Collision uses conservative boxes and the existing road union. Pavement uses thin overlays rather than cut-out pits. Wet reflections, fog and lighting remain inexpensive artistic approximations. Total VRAM is not measurable through this instrumentation. Performance evidence applies to the tested GTX 1050 Ti/browser and is not a universal hardware guarantee.

## Browser acceptance and evidence

Visible Edge windows completed the continuous keyboard exploration loop for both seeds at Tiers 3/4, visited all three landmarks, returned to the entrance, exercised Escape and pushed against the visible northern gate. The boundary test asserts both positive movement toward the gate and stopping before its end plane. No page/console/missing-asset errors occurred. [Exploration results](mission004/exploration.json).

The retained browser scenario test passed network restoration at Tier 3/2049 and physical bypass at Tier 4/8128, clue/reward discovery, completion persistence after reload, the district loop, journal, audio controls, quality changes, regeneration and narrow touch fallback. [Relay acceptance](mission004/relay-acceptance.json).

Both grates were crossed forward/backward with actual keyboard input in 30 seed/tier/quality combinations: 120 crossings, no browser errors. [Surface checks](mission004/surface-checks.json). These traversal/relay runs used `543110c`. The subsequent `74e05ec` correction only adjusts elevated service-deck/window support rules; collision boxes for the four exploration worlds were explicitly compared and remained byte-identical. Final-source unit tests and the full render/validation matrix were then repeated. The final seven stills at `74e05ec` also passed independent review. [Review record](mission004/visual-review.md).

Representative identical viewpoints:

| View         | Mission 003                                          | Mission 004                                        |
| ------------ | ---------------------------------------------------- | -------------------------------------------------- |
| Entrance     | [before](mission004/before/2049-t3-entrance.png)     | [after](mission004/after/2049-t3-entrance.png)     |
| Intersection | [before](mission004/before/2049-t3-intersection.png) | [after](mission004/after/2049-t3-intersection.png) |
| Cooling yard | [before](mission004/before/2049-t3-cooling-yard.png) | [after](mission004/after/2049-t3-cooling-yard.png) |
| Residential  | [before](mission004/before/8128-t4-residential.png)  | [after](mission004/after/8128-t4-residential.png)  |
| Terminus     | [before](mission004/before/2049-t3-terminus.png)     | [after](mission004/after/2049-t3-terminus.png)     |
| Boundary     | [before](mission004/before/8128-t4-boundary.png)     | [after](mission004/after/8128-t4-boundary.png)     |
| Overhead     | [before](mission004/before/2049-t3-overhead.png)     | [after](mission004/after/2049-t3-overhead.png)     |
| Skyline      | [before](mission004/before/2049-t3-skyline.png)      | [after](mission004/after/2049-t3-skyline.png)      |

Capture manifests retain all ten camera positions and both seeds/expanded tiers; representative PNG pairs are committed. Full local capture sets include 40 before and 40 after stills. Camera tours are diagnostic and can pass through scenery; keyboard acceptance supplies the collision evidence.

## Automatic preview publication

Main infrastructure commit `76e3e72` changes only the active preview selector, publisher verification step and its generic verification script. No game source is changed or production build dispatched on main. This infrastructure is also synchronized into the Mission 004 branch. Successful latest-branch validation still gates publication, serialized deployments still preserve the durable stable site, and the new post-publication check compares deployed file hashes with the complete bundle and verifies the exact preview SHA. It retries CDN convergence and uploads verification evidence as a GitHub Actions artifact. Browser verification and a separate byte comparison with the saved original production build remain required before declaring completion.

## Measured rendering outcome

Final runtime `74e05ec` completed 30 core cases (two seeds × five tiers × three quality presets at 1920×1080 CSS pixels), plus four High expanded tours. The 12-second core path discards a 2.4-second warmup; expanded tours run 16 seconds. Browser: Edge 157.0.4341.60, exposed GTX 1050 Ti / ANGLE D3D11. Pages ran serially, one browser at a time. [Full matrix](mission004/matrix.json), [Mission 003 baseline](mission004/before-performance.json).

All 34 cases had zero captured browser/console errors and passed fixture/layer validation. Frame means ranged 16.666–16.667 ms; largest frame 19.90 ms. No samples exceeded 33.34 ms. Maximum case-mean GPU time was 7.994 ms. These finite, synchronized measurements do not prove spare GPU capacity or results on other hardware.

### Identical core tour, High

Times are milliseconds. Before is the untouched live Mission 003 build; after is the local static candidate. GPU, CPU submission, calls and triangles are steady-tour averages. Initialization includes module/setup delay and differs between remote/local hosting, so it is reported separately rather than interpreted as a speedup. Single tours can vary with GPU clocks/background load.

| Seed | Tier | Frame before → after | GPU before → after | CPU submit before → after | Calls before → after | Triangles before → after |
| ---- | ---- | -------------------- | ------------------ | ------------------------- | -------------------- | ------------------------ |
| 2049 | 0    | 16.667 → 16.667      | 5.339 → 7.994      | 2.118 → 1.793             | 141.0 → 145.4        | 41654 → 48449            |
| 2049 | 1    | 16.667 → 16.667      | 6.472 → 7.481      | 2.384 → 2.144             | 194.8 → 199.1        | 50106 → 56897            |
| 2049 | 2    | 16.667 → 16.667      | 7.489 → 5.722      | 2.402 → 2.170             | 197.4 → 201.9        | 50130 → 56927            |
| 2049 | 3    | 16.667 → 16.667      | 6.401 → 6.975      | 3.391 → 2.583             | 275.8 → 203.4        | 69139 → 62798            |
| 2049 | 4    | 16.667 → 16.667      | 5.593 → 5.897      | 3.444 → 2.663             | 291.2 → 211.9        | 96468 → 80732            |
| 8128 | 0    | 16.667 → 16.666      | 5.978 → 6.129      | 1.873 → 1.839             | 142.7 → 147.2        | 43933 → 50676            |
| 8128 | 1    | 16.667 → 16.667      | 7.309 → 5.802      | 2.636 → 2.279             | 195.5 → 199.9        | 52517 → 59304            |
| 8128 | 2    | 16.667 → 16.667      | 7.525 → 7.472      | 2.325 → 2.183             | 197.6 → 202.0        | 52535 → 59319            |
| 8128 | 3    | 16.667 → 16.666      | 6.543 → 7.371      | 3.256 → 2.442             | 270.5 → 200.0        | 61927 → 60565            |
| 8128 | 4    | 16.667 → 16.667      | 5.292 → 6.652      | 3.614 → 2.647             | 288.0 → 207.8        | 80737 → 74481            |

### Resource and initialization indicators

The raw diagnostic geometry/matrix-byte estimate predates per-instance colors. The adjusted KiB below explicitly adds 12 bytes per new layer instance for its RGB Float32 buffer. It remains CPU attribute storage, not total GPU memory; render targets, driver/program memory and allocations are excluded. Texture bytes are an RGBA8/mipmap estimate; JS heap is browser-provided and shared/GC-sensitive.

| Seed | Tier | CPU init before → after ms | Adjusted geometry/instance KiB before → after | Render geometries before → after | Textures before → after | After heap MiB |
| ---- | ---- | -------------------------- | --------------------------------------------- | -------------------------------- | ----------------------- | -------------- |
| 2049 | 0    | 267.8 → 135.5              | 449.3 → 506.1                                 | 70 → 72                          | 35 → 35                 | 11.41          |
| 2049 | 1    | 209.7 → 153.9              | 500.1 → 556.8                                 | 72 → 74                          | 35 → 35                 | 12.74          |
| 2049 | 2    | 211.2 → 138.5              | 500.9 → 557.7                                 | 73 → 75                          | 35 → 35                 | 12.48          |
| 2049 | 3    | 216.9 → 162.9              | 593.2 → 571.1                                 | 51 → 54                          | 36 → 31                 | 13.75          |
| 2049 | 4    | 288.7 → 203.2              | 816.6 → 699.2                                 | 51 → 54                          | 36 → 31                 | 13.40          |
| 8128 | 0    | 224.1 → 146.0              | 452.7 → 509.0                                 | 73 → 75                          | 39 → 39                 | 10.40          |
| 8128 | 1    | 228.0 → 150.7              | 503.1 → 559.7                                 | 75 → 77                          | 39 → 39                 | 13.14          |
| 8128 | 2    | 285.9 → 156.6              | 503.9 → 560.5                                 | 76 → 78                          | 39 → 39                 | 11.19          |
| 8128 | 3    | 147.7 → 154.6              | 548.2 → 545.0                                 | 51 → 54                          | 38 → 33                 | 14.27          |
| 8128 | 4    | 312.3 → 186.9              | 718.5 → 652.4                                 | 51 → 54                          | 38 → 33                 | 13.95          |

The expanded tiers trade a small background/silhouette cost for fewer fragmented facade batches: High core-tour calls fall by roughly 26–27%, while Tiers 0–2 gain about four to five calls. GPU timings vary in both directions; this is not a universal GPU-speedup claim. The final preview bundle is 624,534 bytes uncompressed and 172,207 bytes summed gzip, excluding the publisher's build metadata. Geometry is generated at startup; evidence PNGs are not shipped in the game bundle. [Bundle sizes](mission004/bundle.json).

The normal production-mode candidate also passed base-path hard refresh, missing-asset/external-request checks, absence of development hooks, context-loss messaging and unsupported-WebGL2 messaging. [Candidate checks](mission004/production-candidate.json). This validates build compatibility; it does not deploy the candidate to the stable URL.

Current live publication and draft-PR verification are recorded in the Mission 004 pull request and the delivered publication evidence after deployment. The report's measured runtime revision is retained above so subsequent evidence-only commits do not obscure what was benchmarked.
