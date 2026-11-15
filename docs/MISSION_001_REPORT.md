# Mission 001 report

## Delivered scope

One original, bounded procedural cyberpunk district with seeded facades, a composed tower/bridge skyline, windows, doors, pipes, utility cables, ventilation, storefront signs, street fixtures, clutter, animated rain, wet-road approximation, and a recognizable CRT relay. First-person movement includes ground/bounds containment, substepped major-geometry collision and wall sliding. The local terminal supports buttons and typed commands. Menu, seed regeneration, restart, graphics presets, mobile explanation, and visible graphics-failure messages are implemented.

All scene assets are generated in the browser. Build output is static, with the `/NEON-DRIFT/` project base and no external runtime requests. The feature branch is prepared for review; publication is deliberately manual after merge approval.

## Validation evidence

- Node.js v24.22.1, npm 11.19.1, Windows environment.
- Seven core tests pass: identical seeds/configurations, divergent seeds, independent prop stream, invalid configuration, anti-tunneling/wall sliding, district boundaries, terminal commands.
- Vite 7.3.8 production build passes. Final measured build: HTML 3.36 kB, CSS 3.97 kB, JS approximately 526.3 kB (JS gzip approximately 134.4 kB), plus 1.1 kB license notice. Vite's >500 kB chunk advisory is accepted; this is a size warning, not a build failure.
- Dependencies are pinned and locked; npm audit reports zero vulnerabilities after updating Vite.
- Microsoft Edge 157.0.4341.46, headless, successfully renders six fixed views, opening menu, terminal UI, 1920×1080 resize, and 390×844 mobile fallback.
- Browser acceptance passes pointer-lock acquisition, actual keyboard traversal to the terminal, proximity prompt/E interaction, directory/about/unknown/exit commands, graphics changes, restart, Escape menu, and synthetic mouse-look-handler deltas. Physical mouse deltas were not reliably supplied by headless automation and remain a human check.
- A 50-second scripted camera tour completes without captured JavaScript/console errors. This tests render traversal, not collision routing. The keyboard approach separately exercises real collision movement; core tests cover tunneling and bounds.
- Production preview verifies `/NEON-DRIFT/` and hard refresh, no missing assets, zero external runtime requests, absent development hooks, context-loss explanation, and unsupported-WebGL2 explanation.

Machine-readable [browser acceptance](evidence/smoke.json), [production checks](evidence/production.json), and [Medium timing](evidence/benchmark.json) are included. Evidence is local browser capture, not a deployed Pages site.

## Actual performance observations

Browser-exposed GPU: **NVIDIA GeForce GTX 1050 Ti**, ANGLE Direct3D11. CPU identity was unavailable through the sandbox's hardware query. These are headless requestAnimationFrame intervals, not GPU timestamps or a guarantee for visible browsers/other hardware. The initial three tour seconds are excluded and adaptive resolution is frozen.

| Setting           | Viewport | Drawing buffer | Samples | Mean      | p99       | Max       |
| ----------------- | -------- | -------------- | ------- | --------- | --------- | --------- |
| Medium, seed 2049 | 1440×900 | 1224×765       | 2,821   | 16.667 ms | 17.100 ms | 17.700 ms |

A separate [1080p High measurement](evidence/benchmark-1080-high.json) recorded 2,821 samples: mean 16.667 ms, p99 17.100 ms, max 19.600 ms at a true 1920×1080 drawing buffer. The High timing run preceded the final UI readability and ripple-contrast-only polish; the Medium run and final screenshots include those changes. The Medium result is consistent with a roughly 60 Hz cadence in this environment. It does not measure spare GPU capacity. Final timing artifacts aggregate postprocessing draw counters; the Medium final-view snapshot reports 112 calls and 32,906 triangles. Those counters describe the end view, not a tour-wide maximum.

## Visual review and iteration

A separate agent reviewed rendered evidence only, never source. First review identified excessive emission, an overly pristine/repetitive alley and an indistinct CRT. Iteration reduced emission, separated CRT housing, broke curb-light segments, varied signs, added projecting fixtures/clutter/repair patches, and softened wet-surface variation. Rain wrap geometry was corrected after first-party screenshot inspection. Review is genuine independent evidence, not a claim that the reviewer tested controls or motion.

The [final independent review](VISUAL_REVIEW.md) found no remaining medium/high visual issues in the four corrected captures; only low-priority polish remains. Mobile header layout, modal background competition, and pavement banding were corrected in the final capture pass. Surface wear and subjective motion quality remain acceptance topics.

## Screenshots

- [Opening menu](evidence/menu.png)
- [Opening street](evidence/pose-1.png)
- [Upward architecture](evidence/pose-2.png)
- [Storefront](evidence/pose-3.png)
- [Fog and skyline](evidence/pose-4.png)
- [Wet street](evidence/pose-5.png)
- [CRT landmark](evidence/pose-6.png)
- [Terminal interaction](evidence/terminal-ui.png)
- [1080p view](evidence/desktop-1080.png)
- [Mobile explanation](evidence/mobile.png)

## Limitations

- Stylized reflections are analytic color streaks, not actual reflected objects. No dynamic shadows, full volumetrics, sound or touch locomotion.
- Low/Medium/High work in the tested browser, but older integrated GPUs and other browser engines are unmeasured.
- No full video was independently reviewed. Screenshots cannot establish absence of shimmer, temporal popping or motion discomfort.
- General-purpose physics is out of scope; decorative fixtures are nonblocking and the ground is fixed-height.
- Quality is session-local; crash recovery and saved preferences are deferred.
- The repository-relative production build is verified locally. GitHub Pages itself remains unpublished pending approval.
- Wall wear and some lighting/material depth remain areas for Mission 002.

## Exact human acceptance steps before merging

1. Run `npm ci`, `npm test`, `npm run build`, then `npm run preview`. Open the printed `/NEON-DRIFT/` URL in a visible desktop browser. Confirm the scene and no console errors.
2. Click Enter district. Move the physical mouse left/right/up/down; verify smooth look. Hold W/A/S/D individually and diagonally. Hold Shift to run. Release keys and change window focus; movement must stop.
3. Walk toward walls, crates, the kiosk, and both ends of the street. Confirm containment, wall sliding, and no floor falls. Repeat while running.
4. Approach the cyan RELAY / 07 terminal on the left near the start. Press E. Click each command; type `status`, `directory`, `about`, an invalid command, and `exit`. Ensure the modal owns focus and Exit returns to menu. Resume and press Escape again.
5. Change Low, Medium and High. Verify rain/bloom/resolution behavior and readability. Restart, generate seed 42 twice, and confirm repeated geometry. Try seed 2049 again.
6. Run `npm run dev`; press 1–6 to inspect every viewpoint. Press B, watch the entire tour for flicker, rain discontinuities, z-fighting, unwanted LOD popping and stutter; save `neonDev.report()`. Record actual browser, GPU, viewport and preset. Test at 1920×1080 on the intended machine.
7. Resize to a narrow mobile viewport; confirm a readable desktop-required explanation rather than a blank or broken scene. Test a real phone if mobile presentation matters.
8. Review remaining visual polish and compare evidence. Only then approve merge. For publication, choose GitHub Actions in Pages settings and manually run the deployment workflow from main. Verify the live project URL and hard refresh separately.
