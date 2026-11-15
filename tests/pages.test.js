import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
const script = path.resolve("scripts/assemble-pages.mjs");
test("preview preserves production, production preserves preview, bad preview leaves state intact", async () => {
  const dir = await mkdtemp(path.join(tmpdir(), "neon-pages-"));
  try {
    for (const p of ["site/.git", "site/assets", "candidate", "source/dist"])
      await mkdir(path.join(dir, p), { recursive: true });
    await writeFile(path.join(dir, "site/index.html"), "STABLE EXACT BYTES");
    await writeFile(path.join(dir, "site/assets/stable.js"), "stable");
    await writeFile(
      path.join(dir, "candidate/index.html"),
      "EXPERIMENTAL PREVIEW /NEON-DRIFT/preview/assets/x.js",
    );
    const run = (mode) =>
      spawnSync(process.execPath, [script], {
        cwd: dir,
        env: { ...process.env, MODE: mode, PREVIEW_SHA: "abc" },
        encoding: "utf8",
      });
    let r = run("workflow_run");
    assert.equal(r.status, 0, r.stderr);
    assert.equal(
      await readFile(path.join(dir, "publication/index.html"), "utf8"),
      "STABLE EXACT BYTES",
    );
    assert.equal(
      await readFile(path.join(dir, "publication/assets/stable.js"), "utf8"),
      "stable",
    );
    const preview = await readFile(
      path.join(dir, "site/preview/index.html"),
      "utf8",
    );
    await writeFile(path.join(dir, "candidate/index.html"), "invalid");
    assert.notEqual(run("workflow_run").status, 0);
    assert.equal(
      await readFile(path.join(dir, "site/preview/index.html"), "utf8"),
      preview,
    );
    await writeFile(
      path.join(dir, "source/dist/index.html"),
      "/NEON-DRIFT/assets/new.js",
    );
    r = run("workflow_dispatch");
    assert.equal(r.status, 0, r.stderr);
    assert.equal(
      await readFile(path.join(dir, "publication/preview/index.html"), "utf8"),
      preview,
    );
    assert.equal(
      await readFile(path.join(dir, "publication/index.html"), "utf8"),
      "/NEON-DRIFT/assets/new.js",
    );
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
});
