# Mission 003 follow-up — flush, traversable surface fixtures

## Root cause

Revision `63679e3a` correctly parented steam to a grate but modeled it as an above-ground assembly: the frame reached 20 cm above the pavement. The collision builder also converted every fan, grate and lamp assembly into an X/Z player obstacle, ignoring the grate's ground-level purpose. Removing only the collider would leave a raised object that players pass through.

The follow-up separates **surface decoration** (`collision: "surface"`) from **solid obstacles** (`collision: "solid"`) in the generated fixture model. Collider creation explicitly accepts solid assemblies. Fan housings and lamp poles remain blocking; buildings, electrical cabinets and scenario objects retain their existing collision paths.

## Correction

The grate root stays on the actual supporting pavement plane. Its backing is below that plane, its dark aperture sits 1.5 mm above it, and the frame/slats top out at 4 mm above it. Separate depths avoid coplanar flicker. The visible frame, eight slats and dark opening remain; the emitter is still parented to the opening and starts 19 mm above the pavement, 15 mm above the slats. Particle count, quality scaling and source-relative shader behavior are unchanged.

Nine footprint height samples reject fixtures crossing a road/sidewalk edge or unsupported area. The resolver distinguishes the original road (Y=.012), sidewalk (Y=.1), expanded roads (Y=−.01) and base plane (Y=−.02), choosing the visible upper surface at overlap. Dimensions and yaw determine the tested world footprint.

The traversal regression test also revealed that a lamp near a grate could block its approach. Grates now reserve a three-meter strip along the sidewalk including player-radius clearance; subsequent lamp placement respects it. The deterministic slot search uses finer candidates and rejects boundary approaches. This can change grate and lamp positions without changing street topology, buildings or puzzle state. No fixture is manually relocated.

## Other flat decoration

Repair patches previously used fixed Y=.03/.045 regardless of supporting road or sidewalk. They are now generated as explicit surface descriptors with relief at most 3 mm, correct support height, no collider, step rejection and grate-overlap rejection. The thin utility plates in legacy clutter and expanded prop dressing use the same footprint/support rule, with 3 mm relief. These plates never had player collision proxies; they now also avoid appearing elevated or buried. Loose trash, curb/sidewalk geometry, cabinets, architectural trim and the authored archive platform keep their intended geometry and collision behavior.

## Validation

- 29 automated tests, including the retained 500 seeded worlds plus 48 extreme configurations.
- Flushness and deterministic surface recipes checked on four representative seeds across all five tiers; synthetic road/sidewalk fixtures and seam rejection checked separately.
- Actual `movePlayer` collision tests cross both grates forward/backward on the centerline and two offset paths: 240 crossings over 20 worlds. Fan collider retention and cabinet blocking are asserted.
- Mutation checks reject a raised rim and accidental solid grate classification. Existing source alignment and renderer-transform/quality tests remain active.
- Browser traversal and screenshot results: [raw evidence](surface-correction/browser-checks.json). The script stages only the starting position, then uses real keyboard input, pointer lock and the normal gameplay movement/collision loop. It does not teleport across the fixture.

## Visual evidence

- [Tier 0 High, left](surface-correction/2049-t0-high--1.png)
- [Tier 3 High, right](surface-correction/2049-t3-high-1.png)
- [Tier 4 Low, left](surface-correction/8128-t4-low--1.png)

## Reproduction and limitations

Run `npm test`, build with `VITE_PREVIEW=true npm run build -- --base=/NEON-DRIFT/preview/`, serve with the matching base, then run `TEST_URL=<preview URL> node scripts/test-surfaces.mjs`. Environment-variable assignment syntax depends on your shell. `neonLab.stageSurfaceCrossing` exists only in the development/experimental diagnostics and stages a start beside a grate; production has no diagnostics API.

These are thin overlays that convincingly depict an inset opening; pavement is not cut into an actual pit. The dark opening masks the surface visually and preserves the existing batching/render budget. The game remains a horizontal movement model with fixed eye height; this change adds neither step climbing nor full 3D terrain physics. Height sampling models current flat road/sidewalk planes, not future sloped terrain. Extremely obstructed configurations may omit a fixture rather than place it without support or clearance. Subjective motion and input feel remain human playtest checks.

Browser results cover 30 combinations (seeds 2049/8128 × five tiers × Low/Medium/High), with 120 successful keyboard crossings and 60 close-up screenshots. No missing assets or browser errors were recorded. Selected Tier 0 High, Tier 3 High and Tier 4 Low views were visually inspected: frames read as flush pavement insets, slats remain visible, and steam starts at the opening. There is no raised vertical plinth. Low retains the source at its reduced particle budget. This is screenshot review, not a claim about subjective input feel.

## Rendering measurements

The comparison uses the archived pre-follow-up runtime measurement (`f7b7c09`, identical game code to the documentation revision `63679e3a`) and a new measurement at `068f195`. Both use Edge 157, GTX 1050 Ti, High quality, 1920×1080 and the same ten 12-second core routes with 2.4-second warmup. The baseline was recorded earlier, not rerun simultaneously. Single tours are subject to timing noise and are not statistically significant speedup claims.

| Seed | Tier | Mean frame ms before → after | GPU ms before → after | Draw calls before → after |
| ---- | ---- | ---------------------------- | --------------------- | ------------------------- |
| 2049 | 0    | 16.667 → 16.667              | 6.612 → 7.091         | 140.85 → 140.88           |
| 2049 | 1    | 16.667 → 16.668              | 6.556 → 7.029         | 194.86 → 194.78           |
| 2049 | 2    | 16.667 → 16.666              | 6.412 → 7.090         | 197.43 → 197.19           |
| 2049 | 3    | 16.667 → 16.667              | 5.534 → 5.970         | 277.24 → 275.61           |
| 2049 | 4    | 16.667 → 16.667              | 6.365 → 8.044         | 293.01 → 291.21           |
| 8128 | 0    | 16.667 → 16.667              | 5.039 → 8.097         | 142.71 → 142.71           |
| 8128 | 1    | 16.667 → 16.667              | 5.371 → 6.943         | 196.11 → 195.31           |
| 8128 | 2    | 16.667 → 16.667              | 5.689 → 7.016         | 198.26 → 197.46           |
| 8128 | 3    | 16.667 → 16.667              | 6.443 → 5.783         | 272.40 → 270.50           |
| 8128 | 4    | 16.667 → 16.668              | 5.256 → 5.536         | 290.45 → 287.85           |

All ten new tours averaged 16.666–16.668 ms; the largest measured frame was 19.5 ms and no frames exceeded 33 ms. GPU means ranged from 5.536–8.097 ms and increased versus the archived baseline in several cases. This comparison cannot isolate thermal/background-load variation from small rendering differences. It demonstrates the tested 60 Hz frame budget, not a proven GPU speedup or a guarantee for other hardware. Draw calls were essentially unchanged in lower tiers and slightly lower in higher tiers. No new material, geometry type, dynamic light or particle budget was introduced; surface parts reuse existing batches. Raw [before](surface-correction/before-performance.json) and [after](surface-correction/after-performance.json) measurements include CPU initialization and resource counts.

Normal production-mode build and browser checks passed: repository base path/hard refresh, no missing assets or external runtime requests, development hooks absent, context-loss and unsupported-WebGL2 explanations. The preview continues to use the existing automatic Validate → Pages publication workflow. The stable game is not rebuilt or merged by this feature update.
