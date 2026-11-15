# Rendering and optimization

Three.js 0.180.0/WebGL2 is retained. No new dependencies, imported models or downloaded image assets are added.

## Batches and visibility

The original alley retains its material-instanced batches and quality-dependent vent culling. Additional city boxes, sign planes, cylinder landmark and trash shapes share geometry and materials. The city renderer groups instances by 24 m XZ cell, material, geometry and detail class. Each InstancedMesh computes a bound for Three.js frustum culling. Major architecture stays present; small-detail chunks use the selected preset detail distance plus 24 m, with an 8 m exit margin. This hysteresis reduces threshold churn but cannot prove invisible transitions.

The cell keys are deterministic; there is no asynchronous chunk spawning or streaming. Major roads/buildings never disappear because a detail-distance threshold was crossed. Large instances can span cells but are assigned by center; computed mesh bounds cover full geometry. Spatial batches improve visibility granularity but increase draw calls, a tradeoff measured by the matrix.

## Materials and animation

Existing code-generated grime textures remain on the core facades. New facade parts use shared material families, geometry-level repair/paint marks and restrained emissive fill; this avoids adding many texture files or live lights. A custom instanced wet-road shader uses world-position noise, colored streaks, animated ripple and continuous distance fog. It explicitly transforms by instanceMatrix. Rain remains one GPU-animated line draw with a fixed budget, distributed across roads at expanded tiers. Drift particles use one shader draw and warning elements reuse materials. The existing non-shadowing light budget is retained.

Surface detail is a hybrid: shader puddles/ripples are cheaper than geometry per pixel-feature; explicit frames, vents and trim provide visible silhouettes. Repair rims have deliberate height offsets. Large numbers of tiny overlay parts eventually add more submission/culling cost than perceived detail. No full scene reflections, shadow-map expansion or volumetric simulation is introduced.

## Timing and resource accounting

`laboratory.js` reports requestAnimationFrame intervals separately from CPU update, CPU render submission and asynchronous EXT_disjoint_timer_query_webgl2 elapsed GPU queries. It polls a bounded queue without waiting on GPU completion and discards results while disjoint is reported. CPU measurements are subject to browser timer precision. The benchmark pauses movement and freezes adaptive resolution; preset pixel ratios remain explicit.

Reports include renderer geometry/texture counts, unique CPU geometry/instance array byte totals, and a simple RGBA8 texture estimate including an assumed mip factor. These exclude render-target attachments, driver overhead, shader programs and other allocations, so they are not total GPU memory measurements. JS heap is reported only where performance.memory is exposed. Scene initialization time measures CPU generation/setup before the first complete frame; the runner separately records navigation-to-ready time after two animation frames.

GPU timing and frame cadence are different evidence. Synchronized ~16.67 ms frame intervals do not prove spare capacity. Query samples and results can vary with clock/power state, browser overhead and camera-visible batches. The matrix uses one browser page at a time to avoid competing GPU tests. See DENSITY_BENCHMARK.md for the actual measurements and limits.

## Resource lifetime

Generation is bounded and runs once on page load. Regeneration reloads the page, letting the browser release the old renderer and geometry. Camera state, animation buffers and timing arrays are reused. Three.js, UI and diagnostic collection still allocate; no globally zero-allocation claim is made. Post-tour resource inspection and JSON formatting are deliberately outside the measured update loop.
