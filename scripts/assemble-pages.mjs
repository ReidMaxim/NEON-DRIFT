import { cp, mkdir, readdir, rm, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
const mode = process.env.MODE;
if (!["workflow_run", "workflow_dispatch"].includes(mode))
  throw Error("Unknown publication mode");
const root = path.resolve("site");
// Only remove entries inside the checked-out publication tree; retain its Git metadata.
if (mode === "workflow_run") {
  const html = await readFile("candidate/index.html", "utf8");
  if (
    !html.includes("/NEON-DRIFT/preview/assets/") ||
    !html.includes("EXPERIMENTAL PREVIEW")
  )
    throw Error("Invalid preview base or missing experimental label");
  await rm(path.join(root, "preview"), { recursive: true, force: true });
  await cp("candidate", path.join(root, "preview"), { recursive: true });
  await writeFile(
    path.join(root, "preview", "build.json"),
    JSON.stringify({ sha: process.env.PREVIEW_SHA, experimental: true }) + "\n",
  );
} else {
  const html = await readFile("source/dist/index.html", "utf8");
  if (
    !html.includes("/NEON-DRIFT/assets/") ||
    html.includes("EXPERIMENTAL PREVIEW")
  )
    throw Error("Invalid production build");
  for (const entry of await readdir(root))
    if (![".git", "preview"].includes(entry))
      await rm(path.join(root, entry), { recursive: true, force: true });
  await cp("source/dist", root, { recursive: true });
}
await mkdir("publication", { recursive: true });
for (const entry of await readdir(root))
  if (entry !== ".git")
    await cp(path.join(root, entry), path.join("publication", entry), {
      recursive: true,
    });
await readFile("publication/index.html");
