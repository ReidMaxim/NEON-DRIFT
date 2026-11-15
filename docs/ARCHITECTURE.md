# Architecture

## Decision: Three.js / WebGL2

| Criterion             | Raw WebGPU                                              | Three.js / WebGL2                                      |
| --------------------- | ------------------------------------------------------- | ------------------------------------------------------ |
| Procedural throughput | Direct compute, packed buffers, timestamp queries       | Instancing and custom GLSL cover this bounded district |
| Compatibility         | Requires WebGPU availability                            | Broader WebGL2 browser/device support                  |
| Maintenance           | Application owns pipelines, resource lifetime, recovery | Established renderer and postprocessing utilities      |
| Download              | Potentially very small custom renderer                  | Current bundle includes roughly 0.5 MB of JavaScript   |
| Visual iteration      | More infrastructure before scene iteration              | Rapid camera, material, geometry, bloom iteration      |

Choose Three.js for Mission 001 because the scope is a carefully composed walkable alley, not millions of animated organisms. Its compatibility and iteration speed outweigh bundle overhead. Raw WebGPU remains a future research option; it is not necessary to achieve this scene. Official sources: [WebGLRenderer](https://threejs.org/docs/pages/WebGLRenderer), [Vite project-site deployment](https://vite.dev/guide/static-deploy).

## Boundaries

- `world.js`: pure deterministic district data, validated configuration, independent random streams for architecture and props, collision proxies, movement, terminal commands, quality presets. No renderer imports.
- `scene.js`: adapter from district data to instanced geometry, material batches, fixtures, signs, lights, wet-road shader, GPU rain.
- `main.js`: renderer/composer lifecycle, explicit menu/play/terminal/tour states, camera/input bridge, UI, quality/resolution scaling, context failure message.
- `tour.js`: development-only camera poses and frame-interval instrumentation. Dynamically imported under Vite's development flag, removed from the production bundle.
- `style.css` and `index.html`: accessible DOM text, menu, terminal, sparse scene overlays.

Units are meters, +Y up, street axis Z, player eye height 1.72 m. The map is finite. Collision uses a 0.28 m horizontal player radius against expanded axis-aligned proxies; substeps prevent high-delta tunneling, and axis separation allows wall sliding. Ground height is fixed. This is a deliberate lightweight controller, not a general physics engine. Props/terminal have proxies; cables, vents and shallow decorative fixtures are nonblocking. The player is clamped within district bounds. A future multi-block system can generate several district descriptors while retaining render and collision adapters.

## Rendering

Repeated boxes are instanced by material, with computed bounds for Three.js frustum culling. Small vent groups additionally disappear beyond a preset detail distance. Batches currently span the whole alley; larger worlds should partition batches spatially. Signs are generated on small CanvasTextures at startup. Towers, openings, bridges and the CRT are composed landmarks around which seeded facades are generated.

Fog establishes depth; six non-shadowing point lights produce local color pools, supported by hemisphere and directional fill. No dynamic shadow maps, expensive scene reflections, or volumetric simulation. Wet asphalt uses analytic colored streaks, procedural noise, broad puddle patches and animated ripples; it does not reflect actual scene objects. Rain is one line draw with GPU wrap animation and preallocated positions, not per-frame particle-object updates. Bloom is optional and constrained to bright sources.

The application reuses camera/player state and GPU buffers. Some renderer/composer internals and DOM operations can allocate; there is no claim of globally zero allocations. GPU resources persist for the page lifetime. Seed regeneration reloads the page, allowing the browser to release the prior context/resources.

## Quality and recovery

| Preset | Resolution multiplier | Rain segments | Bloom | Vent detail distance |
| ------ | --------------------- | ------------- | ----- | -------------------- |
| Low    | 0.65                  | 500           | Off   | 28 m                 |
| Medium | 0.85                  | 1,300         | On    | 48 m                 |
| High   | 1.0                   | 2,400         | On    | 70 m                 |

Device pixel ratio is capped at 1.5. Persistent slow frame intervals while playing reduce scale by 0.1 after two 3-second windows, down to 0.6 of the selected preset. This conservative one-way adaptation avoids oscillation; selecting a preset resets it. Benchmark/tour mode freezes adaptation. It does not infer GPU bottlenecks from CPU-side frame intervals.

Unavailable WebGL2 and initialization errors get a visible explanation. Context loss pauses exploration with a reload instruction; restoration reloads the scene. Focus loss clears movement. Pointer-lock rejection leaves a retry message. Mobile uses an explicit desktop-controls fallback.

## Deployment and constraints

Pinned dependencies and lockfile; static Vite output; relative repository base; no runtime CDNs or external APIs. CI tests/builds PRs. Pages deployment is workflow-dispatch only on main, maintaining a separate publication decision after review. The empty repository requires one empty baseline commit on main for a meaningful feature PR; no app content or workflow is placed on main before review.

## Mission 003 extensions

The Mission 002 core remains the compatibility reference. `district.js` creates tiered street/building descriptors; `city-scene.js` renders partitioned modular detail. Tier 0 preserves baseline geometry. `laboratory.js` is loaded only for development or experimental previews and measures separate frame, CPU and GPU timing channels. `world.js` movement optionally enforces the connected road-envelope union. Gameplay/network state remains independent in `scenario.js`.

See [world generation](WORLD_GENERATION.md), [rendering optimization](RENDERING_OPTIMIZATION.md), [Mission 003 report](MISSION_003_REPORT.md) and [density benchmark](DENSITY_BENCHMARK.md). A visible preview revision and `/preview/build.json` identify the actual deployed version. Production is not replaced by this mission.
