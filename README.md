# NEON–DRIFT

A signal in the rain. An original, procedural cyberpunk district for the browser.

Mission 001 builds one bounded alley: layered towers, abandoned storefronts, suspended cables, rain, broken neon, wet asphalt, and a working municipal CRT relay. Geometry and sign textures are generated locally. No downloaded art, accounts, API keys, or runtime services.

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

The production site is the `dist/` directory. It is approximately 0.53 MB uncompressed, including the renderer; see the mission report for measured build output. No network dependencies are loaded at runtime.

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

Only the development build exposes `window.neonDev`. Keys **1–6** select the six fixed viewpoints. **B** starts a 50-second interpolated tour; its final frame statistics are printed to the console. `neonDev.report()` returns browser, GPU string when exposed, viewport, drawing-buffer size, seed, quality, and mean/p99/max requestAnimationFrame intervals. These are not GPU timestamps. The tour does not claim to be a collision traversal.

Automated screenshots and interaction tests require Microsoft Edge installed:

```sh
# Keep npm run dev running in another terminal.
# Set TEST_URL to the printed Vite URL if it differs.
npm run test:browser
```

The script's default test URL is `http://127.0.0.1:5173/NEON-DRIFT/`. Set `BROWSER_CHANNEL=chrome` for installed Chrome. Results go to ignored `artifacts/`. Run `npm run build && npm run test:production` to check the built base path, offline dependencies, and graphics failure messages. Native mouse look and subjective motion quality still require a human pass. Formatting: `npm run format` / `npm run format:check`.

## GitHub Pages

Vite's base is **`/NEON-DRIFT/`**, matching this repository's project-site URL. Production assets are bundled locally using that base. There is no client router or backend.

1. Review and merge the feature PR only after acceptance testing.
2. In repository **Settings → Pages**, choose **GitHub Actions**.
3. After deployment approval, run **Deploy GitHub Pages (manual approval)** from `main` in the Actions tab.
4. Optionally require a reviewer on the `github-pages` environment.
5. Verify `https://reidmaxim.github.io/NEON-DRIFT/`, including a hard refresh and its terminal interaction.

The deployment workflow is manual and restricted to `main`; ordinary pushes and PRs only validate and upload a build artifact. No publication is triggered by this mission branch.

## Documentation

- [Architecture](docs/ARCHITECTURE.md)
- [Reference research](docs/REFERENCE_RESEARCH.md)
- [Mission report and acceptance checklist](docs/MISSION_001_REPORT.md)
- [Mission 002 roadmap](docs/MISSION_002_ROADMAP.md)
- [Dependency and license notices](docs/DEPENDENCIES.md)
