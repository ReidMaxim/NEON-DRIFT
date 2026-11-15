# Mission 003 correction — context-aware attachments

## Root cause

Before this correction (`bf744b153d9fffea7bb1934ee37e32515160a97c`), `living.js` placed three bare blade groups at fixed street X/Z coordinates. Seeded building setbacks and the Tier 3 intersection carve did not influence those positions. The groups had no housing or wall attachment, and rotated around world Z regardless of facade direction.

Steam positions were a second unrelated list. The shader assigned `p.y = .1 + phase * 3`, ignoring any source transform or actual pavement height. No grate, pipe outlet or parent emitter existed. The shared failure was a missing procedural relationship between the effect, its complete assembly and a valid supporting surface.

The broader audit also found cables ending at nominal street edges, unclamped pipe/louver offsets on narrow buildings, projecting sign boards without brackets, and an independent flickering rectangle near a lamp. These closely related issues were corrected within the existing generators.

## Authoritative placement model

`assemblies.js` now generates deterministic `world.attachments` alongside the existing district data. Architecture, scenario placement and independent decorative RNG streams remain unchanged. Each wall surface has a host ID, origin, outward normal, tangent, width, height and yaw. A fixture's root plus local part coordinates is the single source for rendering, clearance checks and collision proxies.

- **Fans:** valid ground-floor service slots on actual building facades; wall flange, flush backplate, lower mounting tabs, duct sides, front ring, guard bars, bolts, hub and rotating blade unit. The renderer rotates only the rotor in local Z; the root's yaw maps that axis to the wall normal. Ineligible hosts/slots are rejected rather than leaving blades in space.
- **Steam sources:** grounded framed grate, dark aperture, eight slats, and an emitter referencing that opening by ID. Source origins come from the same root transform as the grate. Every particle rises relative to that origin. One faint base wisp per source preserves visible contact with the aperture. Low retains both sources through interleaved particle ordering.
- **Ground:** `terrainHeightAt` resolves the actual existing road/sidewalk/platform planes. Nine footing samples must agree before a grate is accepted. Nearby buildings, prop proxies, scenario geometry, known dressing bands and the plume envelope constrain placement. Fixed sources can move to a valid slot, or be omitted when no valid support exists. This intentionally changes invalid old effect locations.
- **Related supports:** cable endpoints attach to actual opposing facade insulators; spans without valid hosts are omitted. Streetlights contain pole, arm, head and light in one grounded assembly, with bounded candidate searches around occupied locations. The faulty light effect belongs to that head. Original building pipes/louvres use facade-width-safe offsets and clamps/backing, and projecting storefront boards have wall brackets.
- **Other particles:** district-wide drift remains an intentional ambient system, like rain. It is now small suspended motes rather than upward-wrapping smoke-like sprites, so it does not imply an unsupported steam outlet.

Known decorative volumes are reserved before facade microdetail is emitted, preventing a meter or repair overlay from occupying the fan/grate. Fan bodies, grates and lamp poles have conservative collision proxies so players do not walk through the corrected assemblies. Critical scenario clearance stays reserved.

## Rendering and performance design

`attachment-scene.js` composes every fixed part's instance matrix from its assembly root and local transform, retaining assembly/part IDs for validation. Fixed parts share batched geometry/materials. Each fan uses one merged rotor mesh instead of four separate blade draws. Steam keeps the existing 36-point High/Medium and 12-point Low budget, shared between two sources. No new dynamic lights, texture files, npm dependencies, backend or paid service are required. Static attachment bounds are cached during city construction rather than recomputed per microdetail item or frame.

These are logical parent relationships in an immutable generated world. Batching bakes the root matrix into fixed instance transforms; a future movable/destroyable host must explicitly rebuild/update those buffers. It is not a dynamic rigid-body attachment engine.

## Automated validation

26 tests pass. Added coverage includes:

- 100 seeds × all five tiers (500 generated worlds), plus 48 sampled width/density/height extremes.
- Deterministic complete assemblies, valid host planes, facade extents and wall-normal rotation axes.
- Backplate/footing contact, complete housing/grate parts, rotor sweep clearance and source-opening alignment.
- Source/plume exclusion from nearby geometry and dressing reservations.
- Cable endpoints on host insulators and connected lamp pole/arm/head/light chains.
- Actual renderer instance matrices versus root/part transforms; rotating rotors with fixed housings; generated GPU source positions; both emitters retained on Low.
- Deliberately corrupted host IDs, yaw, backplates, housings, rotors, footings, aperture positions, emitter parents/spread and lamp/cable connections are rejected.

The existing 20 world, scenario, traversal and publication-preservation tests remain. Sampling is evidence, not proof of every possible configuration. No-world-topology fixture was changed to hide a regression; Tier 0's building/prop/terminal data still matches the original fixture.

## Browser evidence and independent review

`capture-attachments.mjs` checks seeds 2049 and 8128 at every tier, all three graphics presets, and captures each fan/grate from three angles at 1280×800. The representative configurations each contain three supported fans, two grates and six supported lamps. Cable count drops from nine to five in the expanded tiers because missing intersection hosts no longer leave free-ended spans. Additional views cover all three fans and both sources at Tier 3.

A separate agent inspected only rendered evidence. It found no blocking floating, buried or intersecting parts. The first pass requested clearer wall contact and a continuous base wisp. The final six stills confirmed that the flange exposes a clear attachment edge and faint steam appears inside the grate aperture. The darkest oblique fan view still has subdued contact contrast, but the casing reads coherently. No motion, performance or collision claims were inferred from stills.

- [Fan front](attachment-correction/2049-t3-fans-0.png)
- [Fan left oblique](attachment-correction/2049-t3-fans--1.png)
- [Fan right oblique](attachment-correction/8128-t4-fans-1.png)
- [Grate front](attachment-correction/8128-t4-vents-0.png)
- [Grate oblique](attachment-correction/2049-t3-vents--1.png)
- [Render checks for every tier](attachment-correction/render-checks.json)

## Reproduction

Run `npm test`. Build with `VITE_PREVIEW=true`, then serve using the matching `/NEON-DRIFT/preview/` Vite base. `scripts/capture-attachments.mjs` and `scripts/benchmark-attachments.mjs` default to port 5190; override TEST_URL as needed. The benchmark's LABEL selects `before` or `after` output; do not overwrite recorded baseline evidence with a corrected build. Browser diagnostics expose `neonLab.poseAttachment('fans'|'vents', index, angle)` for exact close-up poses and `neonLab.attachmentValidation()` for generation diagnostics.

## Limits and human acceptance

The height resolver describes this project's current flat road and raised sidewalk geometry, not an arbitrary terrain mesh. Conservative proxy/known-reservation tests do not constitute triangle-exact collision checks for every legacy landmark or decorative fragment. Narrow or obstructed hosts can legitimately produce fewer fixtures rather than unsafe fallback placement. Some legacy authored scenery remains outside the new attachment registry. Dark attachment edges may be subtle under the original lighting budget.

In the published preview, walk close to fans and grates, look from both sides, and observe several seconds of rotation/emission. Check that only blades rotate, housings stay mounted, and steam continually originates inside the aperture. Compare seeds 2049 and 8128 at tiers 0–4; verify the opening composition and all graphics presets. Complete both Dead Relay solutions, then check archive/journal/save behavior. Physical mouse feel, temporal aliasing and subjective sound/visual quality remain human checks.

## Matched performance and gameplay checks

High quality, 1920×1080, Edge 157 / GTX 1050 Ti, identical 12-second core routes with 2.4-second warmup. Each cell compares the pre-correction revision `bf744b1` with runtime correction `f7b7c09`. These are single matched tours, not statistically significant speedup claims.

| Seed | Tier | Mean frame ms before → after | Mean GPU ms before → after | Mean draw calls before → after |
| ---- | ---- | ---------------------------- | -------------------------- | ------------------------------ |
| 2049 | 0    | 16.667 → 16.667              | 7.052 → 6.612              | 140.11 → 140.85                |
| 2049 | 1    | 16.666 → 16.667              | 6.843 → 6.556              | 194.60 → 194.86                |
| 2049 | 2    | 16.667 → 16.667              | 6.046 → 6.412              | 197.17 → 197.43                |
| 2049 | 3    | 16.667 → 16.667              | 5.050 → 5.534              | 281.14 → 277.24                |
| 2049 | 4    | 16.667 → 16.667              | 5.307 → 6.365              | 296.76 → 293.01                |
| 8128 | 0    | 16.667 → 16.667              | 6.012 → 5.039              | 141.72 → 142.71                |
| 8128 | 1    | 16.667 → 16.667              | 6.491 → 5.371              | 195.19 → 196.11                |
| 8128 | 2    | 16.666 → 16.667              | 6.547 → 5.689              | 197.34 → 198.26                |
| 8128 | 3    | 16.666 → 16.667              | 5.791 → 6.443              | 276.43 → 272.40                |
| 8128 | 4    | 16.667 → 16.667              | 5.206 → 5.256              | 294.38 → 290.45                |

All corrected runs averaged about 16.667 ms, with no frames over 33 ms; the largest measured frame was 19.7 ms. Draw calls changed by roughly +1 in lower tiers and −4 in higher tiers. GPU variation goes both directions. CPU generation/initialization generally costs an additional 15–38 ms after warmup; first-run initialization is noisy. No per-frame placement audit is performed.

Raw measurements: [before](attachment-correction/before-performance.json), [after](attachment-correction/after-performance.json).

[Gameplay acceptance](attachment-correction/gameplay-acceptance.json) passed both relay solutions, clue/reward and completion persistence, expanded-loop keyboard traversal, journal, audio controls, all quality presets, regeneration and narrow touch fallback. Production-mode browser checks passed base-path hard refresh, missing-asset/external-request checks, absent development hooks, context-loss messaging and unsupported-WebGL2 messaging. Browser audio controls were exercised; subjective audio quality remains a human check.
