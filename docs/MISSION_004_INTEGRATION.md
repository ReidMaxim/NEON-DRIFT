# Mission 004 integration correction — coherence over complexity

## Baseline and root causes

Human testing of `7fdcfbdb2c26fed56e3f6c7312882659eace3914` exposed a real layout contract failure. `layer-scene.js` drew a large plane beyond the built roads (315×300 m in the default expanded layout), while `movePlayer` admitted only the union of road rectangles. The plane looked like ordinary dark pavement. A player approaching an open parcel therefore hit an invisible road-envelope edge even when no building or prop occupied the path. This was not an elevation error or a missing player collider.

The industrial gate `boundary-works-1` at X=−39/Z=5 reproduces the disconnected gate observation. It was one of six default road-end caps. The generator supplied a gate and posts at a road endpoint but no fence, wall or service compound to explain it. Other caps shared that defect. The utility terminus shutter itself belonged to its building, but its forecourt lacked enclosing returns.

Previous tests proved connectivity along road centerlines and access to landmark viewpoints. They did not prove that all ground that looked accessible could actually be walked on. Static screenshot approval was insufficient evidence for that relationship. This correction adds both visible-surface coverage checks and actual parcel-crossing tests.

## One physical paved site

`site.js` defines a finite paved compound from the existing road, building, landmark and archive footprints plus two meters of service clearance. The same bounds now drive navigation, render coverage, support-height queries and the physical perimeter. Open plots and service gaps inside the site are intentionally walkable. Buildings, cabinets, tanks, fans, scenario walls, closed gates and compound walls retain their solid collision paths.

The large background underlay and the redundant original base plane were removed. `street-surfaces.js` decomposes the site into non-overlapping cells, excluding the rectangle owned by the original wet-road shader. That original rectangle is clipped at the site edge. A single instanced pavement mesh renders the remaining cells using the existing wet pavement material. There is no additional floor extending into unbounded apparent walking space. Background-only buildings are rejected as whole assemblies if they intrude into the physical site; crowns are not left behind after partial filtering.

Roads remain useful route and neighborhood descriptors; they no longer act as invisible off-road walls. Open rear service lanes and parcels can be explored. The road/sidewalk transition heights remain .012/.1, and the same sidewalk-cut intervals feed the support resolver. Grate frames remain within 4 mm of their pavement plane, steam still originates from their attached openings, and ground fixtures still have no solid player collider. Repair patches now reject one another and solid enclosure footings rather than creating overlapping plates. Their relief remains at most 3 mm.

Tier 0's original building/prop/terminal fixture remains unchanged. Its former road-only bounds are intentionally superseded by the new physical-site contract, just like the expanded tiers. The fixture comparison still checks the original geometry and scenario data; new tests assert the visible boundary instead of retaining an invisible clamp. No global collision switch or new movement engine is used. The existing radius-expanded, substepped controller remains authoritative.

## Architecture and entrances

Isolated road caps were removed. Closed north-facing access gates now occupy actual openings in a continuous, solid perimeter. Gate posts, header, adjacent wall segments and collider coverage are generated together. The industrial service gate is labeled SERVICE / CLOSED. Its approach is paved continuously from the industrial street.

The cooling yard has three enclosing sides and an open six-meter western entrance, aligned with the industrial street and tested pedestrian approach. Its return walls, posts and slimmer lintel form one supported entrance assembly. At wider original-street settings, the yard's reservation, access road, machinery, signs and walls shift west together. The extreme-width audit found a trapped pocket when a fixed fence met the original buildings; this complete-assembly adjustment provides clearance without moving detached pieces for one seed.

Short utility wing walls join the substation frontage and meet the pavement. The residential service frontage is now reachable across its open forecourt rather than stopped by the narrow road envelope. No new decorative density, gameplay system, vertical route, paid service or external asset is introduced.

## Spatial validation

42 automated tests pass, including the retained relay/fixture suites. Added tests cover:

- Exact equality of site bounds and movement permissions, complete pavement area and no overlapping ground cells.
- Actual rendered floor/closure instance transforms versus the physical layout.
- Complete perimeter coverage, registered solid walls, gate adjacency and header/post contact, courtyard and utility return completeness.
- Rejection of deliberately moved/missing walls, detached gates, incomplete entries and ground/navigation divergence.
- Direct controller movement across the formerly blocked parcels, solid tank blocking and physical gate stops.
- Deterministic generation and supported wide-street yard placement.
- Repair patch overlap/footing rejection.

A .5 m free-space flood audit covers 20 default seed/tier worlds plus 32 width/density/height extremes: 52 cases and 1,507,709 free samples, with zero unreachable samples. It uses the actual obstacle footprints and player radius. Solid objects and the intentionally locked archive interior are excluded. [Raw spatial audit](integration/spatial-audit.json). This finite raster audit is not a mathematical proof of every possible narrow passage or seed.

The inherited 500 seeded fixture worlds, 48 fixture extremes and 144 landmark-route proportion cases remain active. Before/after keyboard evidence and final rendering measurements are recorded below. No performance or collision conclusion is inferred solely from screenshots.

## Reproduction and human playtest

`npm test` runs the spatial and compatibility checks. `node scripts/audit-site.mjs` writes the free-space audit. `scripts/test-integration.mjs` reproduces the baseline failure with LABEL=before and asserts corrected crossings/closed gates with LABEL=after. `scripts/capture-integration.mjs` captures identical eye-height views. Set TEST_URL to the desired preview and use the correct `/NEON-DRIFT/preview/` build base. Environment-variable assignment syntax depends on the shell.

In the preview, walk west off the industrial road near Z=−51, and cross the residential road edge near Z=−36. Follow the paved industrial approach north to the wall-connected service gate. Enter the cooling yard through its open western frame, walk around the equipment, and inspect the utility forecourt returns. Closed gates and building doors remain visibly closed. Repeat both relay solutions, walk directly over grates, and compare seeds 2049/8128 at different graphics/complexity settings.

## Limitations

The physical site is finite, flat and axis aligned. Enclosing walls are intentionally functional and can look plain; large service aprons remain opportunities for restrained visual refinement. Closed interiors and elevated structures are not playable routes. Collision remains conservative AABBs with a fixed eye height rather than general terrain physics. The raster audit samples at .5 m and excludes the locked room, so subjective movement feel and finer passage behavior still merit human testing. Sparse distant architecture remains scenery beyond a clear perimeter. Existing artistic lighting, fog and reflection approximations are retained. Performance results apply only to the tested browser/GPU, and memory indicators are estimates rather than total VRAM.

This is a Mission 004 integration correction. Mission 005 has not begun. Production is preserved through the existing success-gated preview publisher and independent live byte verification.

## Browser and visual evidence

Baseline keyboard reproduction confirmed the two apparently open parcels stopped movement at the old road envelope. Final-runtime tests cover seeds 2049/8128, tiers 3/4, and all three quality presets: 24 successful parcel crossings and 24 correctly blocked closed-gate approaches. [Before](integration/before-keyboard.json), [after](integration/after-keyboard.json).

The visible-browser exploration covers both expanded tiers and seeds. Both relay solutions, save/reload and journal/reward behavior pass. All 120 direct grate crossings across two seeds, five tiers and three quality presets pass. Those broader acceptance runs used e1fa47f; final polish 151ac9c changed patch overlap rejection and entrance lintel proportions. [Collision equivalence](integration/collision-equivalence.json) verifies identical collision models across all ten seed/tier worlds; the final parcel tests, screenshots and rendering measurements use 151ac9c. [Exploration](integration/exploration.json), [relay acceptance](integration/relay-acceptance.json), [fixtures](integration/surface-checks.json).

72 eye-height screenshots compare nine identical camera views across both seeds and expanded tiers. Selected pairs are retained here:

| Area                 | Before                                                    | After                                                   |
| -------------------- | --------------------------------------------------------- | ------------------------------------------------------- |
| Dark west parcel     | [Before](integration/before/2049-t3-dark-west-parcel.png) | [After](integration/after/2049-t3-dark-west-parcel.png) |
| Industrial gate      | [Before](integration/before/8128-t4-industrial-gate.png)  | [After](integration/after/8128-t4-industrial-gate.png)  |
| Yard entrance        | [Before](integration/before/2049-t3-yard-entrance.png)    | [After](integration/after/2049-t3-yard-entrance.png)    |
| Utility frontage     | [Before](integration/before/8128-t4-utility-front.png)    | [After](integration/after/8128-t4-utility-front.png)    |
| Residential boundary | [Before](integration/before/8128-t4-residential-gap.png)  | [After](integration/after/8128-t4-residential-gap.png)  |

The independent visual reviewer accepted the final correction with no concrete blockers: continuous pavement, attached gates, grounded yard entrance and joined utility frontage. The reviewer requested the slimmer lintel and overlapping-patch correction before final acceptance. Plain aprons remain an artistic limitation. [Review record](integration/visual-review.md). Stills are supplemented by actual keyboard movement; they do not establish traversal on their own.

## Rendering and publication

Serial Edge 157 / GTX 1050 Ti measurements at 1920×1080, High, compare the same two seeds and routes. The baseline runtime 74e05ec has the renderer/game code published as 7fdcfbdb. Ten core tours and four district tours were measured for each version.

| Measurement range across tours | Baseline         | Corrected    |
| ------------------------------ | ---------------- | ------------ |
| Core mean frame interval       | 16.666–16.667 ms | 16.667 ms    |
| Core mean draw calls           | 145.4–211.9      | 147.5–204.2  |
| Core mean GPU time             | 5.72–7.99 ms     | 5.39–6.45 ms |
| District mean frame interval   | 16.666–16.667 ms | 16.667 ms    |
| District mean draw calls       | 125.7–143.9      | 120.4–136.7  |
| District mean GPU time         | 4.62–6.10 ms     | 4.15–4.91 ms |

No measured frame interval exceeded 33 ms. Display synchronization and timing variation prevent inferring spare capacity or a general speedup. The finite floor uses one instanced batch, replacing per-road ground draws; physical perimeter geometry adds a small bounded cost. [Baseline raw](integration/baseline-performance.json), [core raw](integration/after-performance.json), [district raw](integration/expanded-performance.json).

The normal production-mode candidate also passes repository-base loading, hard refresh, missing/external asset checks, absence of development hooks, context-loss explanation and unsupported-WebGL2 handling. [Candidate checks](integration/production-candidate.json). This does not replace verification that the existing production deployment remains unchanged.

Publishing uses the existing automatic validated-branch preview workflow. No development merge into main is required. The publisher serializes deployment, checks the selected branch/latest SHA, overlays only preview files on the saved complete Pages bundle, and verifies published bytes. Final live verification and production byte preservation are recorded on [draft PR #3](https://github.com/ReidMaxim/NEON-DRIFT/pull/3). The playtesting URL remains [the experimental preview](https://reidmaxim.github.io/NEON-DRIFT/preview/).
