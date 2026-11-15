# One-click development previews

Play [production](https://reidmaxim.github.io/NEON-DRIFT/) or the [experimental preview](https://reidmaxim.github.io/NEON-DRIFT/preview/). No local setup or manual workflow is needed for development playtesting.

`Validate` runs on pushes to `feat/**`: install locked dependencies, run tests, build production, then build preview with `/NEON-DRIFT/preview/` and `VITE_PREVIEW=true`. Only successful push runs from the same repository and the explicitly selected branch can publish. Forks and PR events never publish.

The publisher runs trusted workflow/scripts from main after validation completes. `.github/preview.json` selects the branch using the shared preview URL. For the next mission, change that one branch setting on main and carry the CI/Vite preview support into the new feature branch. The feature branch does not need to merge its game changes to publish a preview.

Pages has one artifact for the entire project site. `pages-state` stores the last successful complete site. It was initialized from the exact successful Mission 001 Pages artifact, not a reconstruction of the game. Preview publication replaces only `preview/`; production files are copied unchanged. Manual production publication from main replaces only root files and retains `preview/`. Both use the same `pages` concurrency group with cancellation disabled. Stale branch commits are rejected before assembly. A failed validation, download, assembly or deployment does not commit new publication state. No main game merges are automatic.

The deployment token can write the publication branch, read Actions artifacts, publish Pages, and request an OIDC token. It is supplied only to the trusted publisher, not feature validation. The existing `github-pages` environment must allow deployments from main; the publisher always runs on main, even for preview artifacts. Pages must use GitHub Actions as its source (already configured).

## Limits and recovery

One shared preview represents one selected branch, not every pull request. The URLs share an origin; never put secrets in a public preview. Mission 002 uses a separate preview save namespace so testing does not overwrite stable-game saves.

GitHub can replace a pending concurrency run with a newer one; the active deployment is never cancelled. A newer failed build leaves the previous preview working. A valid but obsolete run is skipped; push a new commit if a skipped version needs a new validation run. Pages publication and updating a Git branch are separate operations: if the final state push fails after a successful deployment, fix that failed job before publishing again. The deployed artifact remains available in Actions, and `pages-state` retains the prior working snapshot. Do not delete the state branch. Backups do not depend on expiring Actions artifacts after bootstrap.

Do not use a second standalone Pages publisher: every publication must preserve both directories. Manual production deployment remains available through the publisher's workflow dispatch, for approved main changes only. The user never needs to dispatch it to test previews.

## Verification

Check both URLs return HTTP 200 and their referenced assets load. Preview must show EXPERIMENTAL PREVIEW; production must not. Compare every production file to the saved production artifact after a preview publish. Test that validation failure cannot reach the publisher by inspecting its success-only condition, and exercise assembly preservation tests. Inspect the build commit in `/preview/build.json` to identify what is playable. The Actions summary links directly to both versions.
