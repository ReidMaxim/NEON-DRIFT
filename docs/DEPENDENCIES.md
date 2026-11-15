# Dependency and license notices

No external models, photographs, image textures, fonts, logos, or audio files are shipped. Scene geometry, canvas signs and shaders are authored for this project. Abyssal Garden is conceptual inspiration; no code is incorporated.

| Dependency       | Version | Role                                       | License    |
| ---------------- | ------- | ------------------------------------------ | ---------- |
| three            | 0.180.0 | Runtime renderer, geometry, postprocessing | MIT        |
| vite             | 7.3.8   | Development server/static build            | MIT        |
| @playwright/test | 1.56.1  | Local browser validation                   | Apache-2.0 |
| prettier         | 3.6.2   | Source formatting                          | MIT        |

Exact direct/transitive dependencies are locked in package-lock.json. npm audit after updating Vite reported zero vulnerabilities on 2026-11-15. Audit results are time-specific. Do not expose the development server publicly.

Three.js copyright and MIT license are retained in `THIRD_PARTY_NOTICES.txt`, copied into the public static output so the distribution contains the license. Dev-tool dependency licenses remain in installed packages; consult each package for its transitive notices. No project-wide license has been selected on the owner's behalf.

Mission 003 adds no npm dependencies, external assets, fonts, API keys or services. Its additional geometry, canvas labels, grime and shaders are authored/generated locally. Existing Third-Party Notices continue to cover the shipped Three.js renderer. Dependency versions remain pinned to the baseline lockfile.
