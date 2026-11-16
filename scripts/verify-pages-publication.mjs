import { readdir, readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
const base = "https://reidmaxim.github.io/NEON-DRIFT/";
async function walk(path, prefix = "") {
  const files = [];
  for (const d of await readdir(path, { withFileTypes: true })) {
    if (d.name.startsWith(".")) continue;
    const name = prefix + d.name;
    if (d.isDirectory())
      files.push(...(await walk(path + "/" + d.name, name + "/")));
    else files.push(name);
  }
  return files;
}
const hash = (b) => createHash("sha256").update(b).digest("hex");
const files = await walk("publication"),
  expected = await Promise.all(
    files.map(async (path) => ({
      path,
      sha256: hash(await readFile("publication/" + path)),
    })),
  );
let lastError;
for (let attempt = 0; attempt < 30; attempt++) {
  try {
    for (const f of expected) {
      const response = await fetch(
        base + f.path + "?verify=" + process.env.GITHUB_RUN_ID + "-" + attempt,
        { cache: "no-store" },
      );
      if (!response.ok) throw new Error(`${f.path}: HTTP ${response.status}`);
      if (hash(Buffer.from(await response.arrayBuffer())) !== f.sha256)
        throw new Error(`${f.path}: CDN bytes have not converged`);
    }
    if (process.env.EXPECTED_PREVIEW_SHA) {
      const response = await fetch(
        base +
          "preview/build.json?revision=" +
          process.env.EXPECTED_PREVIEW_SHA +
          "-" +
          attempt,
        { cache: "no-store" },
      );
      const meta = await response.json();
      if (
        meta.sha !== process.env.EXPECTED_PREVIEW_SHA ||
        meta.experimental !== true
      )
        throw new Error("Preview revision metadata mismatch");
    }
    await writeFile(
      "publication-verification.json",
      JSON.stringify(
        {
          checkedAt: new Date().toISOString(),
          base,
          previewSha: process.env.EXPECTED_PREVIEW_SHA || null,
          attempt: attempt + 1,
          files: expected,
        },
        null,
        2,
      ),
    );
    console.log(
      `Verified ${files.length} deployed files against the complete publication bundle.`,
    );
    process.exit(0);
  } catch (error) {
    lastError = error;
    console.log(`Waiting for Pages/CDN: ${error.message}`);
    if (attempt < 29) await new Promise((resolve) => setTimeout(resolve, 5000));
  }
}
throw lastError;
