export const poses = [
  { name: "opening", p: [1, 1.72, 13], t: [-1, 3, -18] },
  { name: "upward", p: [0, 2, 0], t: [2, 30, -18] },
  { name: "storefront", p: [-1, 1.72, -1], t: [-6, 2.8, -4] },
  { name: "skyline", p: [1, 1.72, -28], t: [2, 18, -67] },
  { name: "wet-street", p: [2, 1.2, 7], t: [-2, 0.1, -12] },
  { name: "terminal", p: [-3.8, 1.72, 4], t: [-4.8, 1.5, 2] },
];
export function createDiagnostics({
  camera,
  renderer,
  world,
  hideUI,
  quality,
  snapshot,
}) {
  let active = false,
    time = 0,
    n = 0;
  const samples = new Float32Array(18000);
  function pose(i) {
    hideUI();
    active = false;
    camera.position.set(...poses[i].p);
    camera.lookAt(...poses[i].t);
  }
  function report() {
    const a = Array.from(samples.subarray(0, n)).sort((a, b) => a - b),
      gl = renderer.getContext(),
      ext = gl.getExtension("WEBGL_debug_renderer_info");
    return {
      browser: navigator.userAgent,
      gpu: ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : "unavailable",
      viewport: [innerWidth, innerHeight],
      drawingBuffer: [renderer.domElement.width, renderer.domElement.height],
      quality: quality(),
      seed: world.config.seed,
      frames: n,
      meanMs: a.reduce((s, v) => s + v, 0) / n,
      p99Ms: a[Math.floor(n * 0.99)],
      maxMs: a.at(-1),
      metric: "requestAnimationFrame interval; not GPU timestamp",
      drawCalls: renderer.info.render.calls,
      triangles: renderer.info.render.triangles,
    };
  }
  const api = {
    poses,
    pose,
    snapshot,
    start() {
      hideUI();
      active = true;
      time = 0;
      n = 0;
    },
    report,
    get active() {
      return active;
    },
    update(dt, raw) {
      if (!active) return;
      time += dt;
      if (time > 3 && n < samples.length) samples[n++] = raw;
      const segment = Math.min(4, Math.floor(time / 10)),
        a = poses[segment],
        b = poses[segment + 1],
        u = Math.min(1, (time - segment * 10) / 10);
      camera.position.set(
        a.p[0] + (b.p[0] - a.p[0]) * u,
        a.p[1] + (b.p[1] - a.p[1]) * u,
        a.p[2] + (b.p[2] - a.p[2]) * u,
      );
      camera.lookAt(
        a.t[0] + (b.t[0] - a.t[0]) * u,
        a.t[1] + (b.t[1] - a.t[1]) * u,
        a.t[2] + (b.t[2] - a.t[2]) * u,
      );
      if (time >= 50) {
        active = false;
        console.info("NEON-DRIFT benchmark", report());
      }
    },
  };
  window.neonDev = api;
  addEventListener("keydown", (e) => {
    if (e.target instanceof HTMLInputElement) return;
    if (/^[1-6]$/.test(e.key)) pose(Number(e.key) - 1);
    if (e.code === "KeyB") api.start();
  });
  return api;
}
