# NEON–DRIFT

A signal in the rain. An original, procedural cyberpunk city for the browser.

Mission 001 builds one bounded alley: layered towers, abandoned storefronts, suspended cables, rain, broken neon, wet asphalt, and a working municipal CRT relay. Geometry and sign textures are generated locally. No downloaded art, accounts, API keys, or runtime services.

## Mission 003 — World Laboratory

[Play the experimental city](https://reidmaxim.github.io/NEON-DRIFT/preview/) and use **World Lab**. Complexity tiers 0–4 control geometry; Low/Medium/High controls rendering cost independently. Controls & graphics exposes seed, district identity, quality and regeneration. Tier 0 preserves the Mission 002 environment. Tier 3 opens a connected industrial/commercial/residential/abandoned district; Tier 4 is the maximum-density experiment.

Example configuration: `?seed=8128&tier=3&identity=mixed&quality=medium`. **L** opens the lab in the preview; WASD, mouse look, Shift, E, J and Escape preserve exploration and the Dead Relay scenario. The experimental banner and Lab show the revision. Production remains the stable Mission 001 game.

Read the [Mission 003 report](docs/MISSION_003_REPORT.md), [benchmark evidence](docs/DENSITY_BENCHMARK.md), [visual comparisons](docs/VISUAL_COMPARISON.md), [generation rules](docs/WORLD_GENERATION.md), and [rendering analysis](docs/RENDERING_OPTIMIZATION.md).

## Run locally

Requires Node.js 22.12+ (Node 24 recommended), npm, and a desktop WebGL2 browser.

```sh
npm ci
npm run dev
```

Open the URL printed by Vite, including `/NEON-DRIFT/`. Click **Enter district** to capture the mouse.

```sh
npm test
npm run build
npm run preview
```

The production site is the `dist/` directory. It is approximately 0.58 MB uncompressed, including the renderer; see the mission report for measured build output. No network dependencies are loaded at runtime.

## Controls

| Action                | Control                       |
| --------------------- | ----------------------------- |
| Walk                  | WASD                          |
| Look                  | Mouse, while captured         |
| Move faster           | Shift                         |
| Use nearby relay      | E                             |
| Pause / release mouse | Escape                        |
| Resume                | Menu button → Resume district |

The terminal accepts `status`, `directory`, `about`, and `exit`, both through buttons and typed commands. Exit returns to the menu; Resume recaptures the mouse. Quality, seed, and restart are available under **Controls & graphics**. Mobile displays the scene and a desktop-controls explanation; touch exploration is not implemented.

## Configuration

`src/world.js` exports validated `defaults`, `generate(config)`, and Low/Medium/High presets. Supported configuration includes seed, density, height multiplier, street width, neon palette distribution (at least three six-digit hex colors; repeat entries to weight colors), fog density, rain intensity, and prop density. The public menu exposes seed and quality. `?seed=42` creates a reproducible district. Developer configuration can pass the other options to `generate` in `src/main.js`.

## Development diagnostics

World Lab is available in development and experimental preview builds. Its comparison tour follows the original six viewpoints; the district tour visits the connected neighborhoods. Reports separate requestAnimationFrame cadence, CPU update, render submission and asynchronous GPU elapsed queries where supported. Run a tour from the Lab and inspect the report afterward. Camera tours do not prove collision routing; keyboard traversal is tested separately.

To reproduce the static benchmark:

```sh
# Build with VITE_PREVIEW=true in your shell's environment.
npm run build -- --base=/NEON-DRIFT/preview/
npm run preview -- --base=/NEON-DRIFT/preview/ --port 5183 --strictPort
# In another terminal:
node scripts/density-benchmark.mjs
```

The matrix runs serially on installed Microsoft Edge and writes ignored results under `artifacts/mission003/`. Set TEST_URL to override the server, BENCH_SECONDS to extend the common duration, or RESUME=true to retain completed case files. Native mouse look and subjective motion quality remain human acceptance checks. Existing `npm run test:browser` covers the earlier interaction loop; `node scripts/acceptance-m3.mjs` covers both puzzle methods and connected traversal. Run browser tests separately from benchmarks to avoid GPU contention.

Formatting: `npm run format` / `npm run format:check`. `npm run test:production` validates production-build base-path and error handling; run it after a normal production build, not a preview build.

## Browser playtesting and GitHub Pages

[Play the stable game](https://reidmaxim.github.io/NEON-DRIFT/) or [Play the experimental development preview](https://reidmaxim.github.io/NEON-DRIFT/preview/).

Successful validation of pushes to the selected development branch automatically publishes the preview. No clone, local server, merge, or manual Actions dispatch is required to play it. Failed validation retains the last working preview. The experimental banner links back to the stable version.

Production stays at `/NEON-DRIFT/`; preview uses `/NEON-DRIFT/preview/`. The serialized publisher preserves both paths using the durable `pages-state` branch. Production publication remains manual from approved main. Development gameplay is never automatically merged into main.

See [preview setup, branch selection, safeguards, limitations and verified evidence](docs/PREVIEW_DEPLOYMENTS.md). For future missions, update the selected branch in `.github/preview.json` on main and retain the same CI/Vite setup in that branch.

## Documentation

- [Mission 003 report](docs/MISSION_003_REPORT.md)
- [Density benchmark](docs/DENSITY_BENCHMARK.md)
- [World generation](docs/WORLD_GENERATION.md)
- [Visual comparison](docs/VISUAL_COMPARISON.md)
- [Mission 004 roadmap](docs/MISSION_004_ROADMAP.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Reference research](docs/REFERENCE_RESEARCH.md)
- [Mission report and acceptance checklist](docs/MISSION_001_REPORT.md)
- [Mission 002 roadmap](docs/MISSION_002_ROADMAP.md)
- [Dependency and license notices](docs/DEPENDENCIES.md)

Mission 003 attachment correction: [root cause, validation and close-up evidence](docs/ATTACHMENT_CORRECTION.md).
