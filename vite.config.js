import { execFileSync } from "node:child_process";
const revision =
  process.env.GITHUB_SHA ||
  execFileSync("git", ["rev-parse", "HEAD"], { encoding: "utf8" }).trim();
import { defineConfig } from "vite";
export default defineConfig({
  base: "/NEON-DRIFT/",
  define: { __BUILD_SHA__: JSON.stringify(revision) },
  plugins: [
    {
      name: "experimental-preview-label",
      transformIndexHtml(html) {
        if (process.env.VITE_PREVIEW !== "true") return html;
        return html
          .replace("<title>", "<title>EXPERIMENTAL PREVIEW — ")
          .replace(
            "<body>",
            `<body><aside aria-label="Experimental development build" style="position:fixed;top:0;left:0;right:0;z-index:100;text-align:center;background:#e6bc65;color:#101820;font:700 11px/24px monospace;letter-spacing:1px">EXPERIMENTAL PREVIEW · MISSION 003 · ${revision.slice(0, 8)} · <a href="/NEON-DRIFT/" style="color:inherit">PLAY STABLE VERSION</a></aside>`,
          );
      },
    },
  ],
  build: { target: "es2022" },
});
