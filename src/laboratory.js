import { validateSite } from "./site.js";
import { validateCityLayers } from "./city-layers.js";
import { localToWorld, validateAssemblies } from "./assemblies.js";
import * as T from "three";
import { poses as original } from "./tour.js";
import { worldMetrics } from "./district.js";
export { missionViews as viewpoints } from "./city-views.js";
import { missionViews as viewpoints } from "./city-views.js";
export function createLaboratory({
  camera,
  renderer,
  scene,
  world,
  initMs,
  pause,
  onComplete,
  snapshot,
  stagePlayer,
  quality,
  cityStats,
}) {
  let active = false,
    time = 0,
    n = 0,
    duration = 50,
    route = original,
    warmup = 3;
  const intervals = new Float32Array(18000),
    cpuUpdate = new Float32Array(18000),
    cpuRender = new Float32Array(18000),
    draws = new Uint32Array(18000),
    triangles = new Uint32Array(18000),
    gpu = [];
  const gl = renderer.getContext(),
    ext = gl.getExtension("EXT_disjoint_timer_query_webgl2"),
    pending = [];
  let query = null;
  const summary = (a) => {
    const v = Array.from(a).sort((a, b) => a - b);
    if (!v.length) return null;
    const at = (p) => v[Math.min(v.length - 1, Math.floor(v.length * p))];
    return {
      samples: v.length,
      mean: v.reduce((s, v) => s + v, 0) / v.length,
      median: at(0.5),
      p95: at(0.95),
      p99: at(0.99),
      max: v.at(-1),
      spikesOver33ms: v.filter((v) => v > 33.34).length,
    };
  };
  function resources() {
    const geometries = new Set(),
      textures = new Set(),
      arrays = new Set();
    scene.traverse((o) => {
      if (o.geometry) {
        geometries.add(o.geometry);
        for (const a of Object.values(o.geometry.attributes))
          arrays.add(a.array);
        if (o.geometry.index) arrays.add(o.geometry.index.array);
      }
      if (o.instanceMatrix) arrays.add(o.instanceMatrix.array);
      if (o.instanceColor) arrays.add(o.instanceColor.array);
      for (const m of Array.isArray(o.material) ? o.material : [o.material])
        if (m)
          for (const v of Object.values(m)) if (v?.isTexture) textures.add(v);
    });
    return {
      geometries: renderer.info.memory.geometries,
      textures: renderer.info.memory.textures,
      sceneGeometryObjects: geometries.size,
      sceneTextures: textures.size,
      geometryAndInstanceArrayBytes: [...arrays].reduce(
        (s, a) => s + a.byteLength,
        0,
      ),
      textureRGBA8EstimateBytes: [...textures].reduce(
        (s, t) =>
          s +
          (t.image?.width || 0) *
            (t.image?.height || 0) *
            4 *
            (t.generateMipmaps ? 4 / 3 : 1),
        0,
      ),
      note: "CPU attribute storage and RGBA8 texture approximation; excludes render targets, driver allocation, program memory. Not total VRAM.",
    };
  }
  function countSummary(a) {
    const s = summary(a);
    if (s) delete s.spikesOver33ms;
    return s;
  }
  function report() {
    const debug = gl.getExtension("WEBGL_debug_renderer_info");
    return {
      mission: 4,
      revision: __BUILD_SHA__,
      browser: navigator.userAgent,
      gpu: debug
        ? gl.getParameter(debug.UNMASKED_RENDERER_WEBGL)
        : "unavailable",
      viewport: [innerWidth, innerHeight],
      drawingBuffer: [renderer.domElement.width, renderer.domElement.height],
      quality: quality(),
      world: worldMetrics(world),
      city: cityStats,
      route: route === original ? "core" : "district",
      durationSeconds: duration,
      warmupSeconds: warmup,
      initMs,
      frameIntervalsMs: summary(intervals.subarray(0, n)),
      cpuUpdateMs: summary(cpuUpdate.subarray(0, n)),
      cpuRenderSubmissionMs: summary(cpuRender.subarray(0, n)),
      gpuElapsedMs: summary(gpu),
      gpuTimerSupported: !!ext,
      drawCalls: countSummary(draws.subarray(0, n)),
      triangles: countSummary(triangles.subarray(0, n)),
      resources: resources(),
      heap: performance.memory
        ? {
            used: performance.memory.usedJSHeapSize,
            total: performance.memory.totalJSHeapSize,
          }
        : null,
      notes: [
        "Frame intervals may be synchronized to display cadence and do not demonstrate spare GPU capacity.",
        "CPU update excludes render submission; GPU query results are asynchronous and discarded during disjoint events.",
      ],
    };
  }
  function cancel() {
    active = false;
    for (const q of pending) gl.deleteQuery(q);
    pending.length = 0;
  }
  const api = {
    poses: viewpoints,
    attachments: world.attachments,
    layers: world.layers,
    site: world.site,
    siteValidation: () => validateSite(world),
    layerValidation: () => validateCityLayers(world),
    stageExploration(x = 0, z = 13, heading = 0) {
      cancel();
      pause("menu");
      stagePlayer(x, z, heading);
    },
    stageSurfaceCrossing(index = 0, direction = 1) {
      cancel();
      pause("menu");
      const v = world.attachments.vents[index];
      if (!v || ![-1, 1].includes(direction))
        throw new Error("Invalid surface crossing");
      stagePlayer(
        v.position[0],
        v.position[2] + direction * 1.15,
        direction === 1 ? 0 : Math.PI,
      );
      return { x: v.position[0], z: v.position[2], direction };
    },
    attachmentValidation: () => validateAssemblies(world),
    poseAttachment(kind, index = 0, angle = 0) {
      cancel();
      pause("tour");
      const a = world.attachments[kind][index];
      if (!a) throw new Error("No attachment at that index");
      const fan = kind === "fans",
        p = localToWorld(
          a,
          fan
            ? [angle * 1.3, 0.15 + (angle === 2 ? 0.6 : 0), 2.4]
            : [angle * 1.1, angle === 2 ? 2.8 : 1.25, angle === 2 ? 0.1 : 1.8],
        ),
        t = localToWorld(a, fan ? [0, 0, 0.25] : [0, 0.22, 0]);
      camera.position.fromArray(p);
      camera.lookAt(...t);
    },
    snapshot,
    report,
    cancel,
    get active() {
      return active;
    },
    pose(i) {
      cancel();
      pause("tour");
      const pose = viewpoints[i];
      camera.position.set(...pose.p);
      camera.lookAt(...pose.t);
    },
    start(options = {}) {
      cancel();
      pause("tour");
      time = n = 0;
      gpu.length = 0;
      duration = options.duration ?? 50;
      warmup = Math.min(3, duration * 0.2);
      route =
        options.route === "district"
          ? [
              viewpoints[0],
              viewpoints[2],
              viewpoints[3],
              viewpoints[8],
              viewpoints[5],
              viewpoints[4],
              viewpoints[9],
            ]
          : original;
      active = true;
    },
    update(dt, raw) {
      if (!active) return;
      time += dt;
      const v = Math.min(0.999999, time / duration) * (route.length - 1),
        i = Math.floor(v),
        u = v - i,
        a = route[i],
        b = route[i + 1];
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
      if (time > warmup && n < intervals.length) intervals[n++] = raw;
    },
    beginGPU() {
      if (!active || time < warmup || !ext || pending.length >= 4) return;
      query = gl.createQuery();
      gl.beginQuery(ext.TIME_ELAPSED_EXT, query);
    },
    afterFrame(updateMs, renderMs) {
      if (query) {
        gl.endQuery(ext.TIME_ELAPSED_EXT);
        pending.push(query);
        query = null;
      }
      const disjoint = ext && gl.getParameter(ext.GPU_DISJOINT_EXT);
      for (let i = pending.length - 1; i >= 0; i--) {
        const q = pending[i];
        if (gl.getQueryParameter(q, gl.QUERY_RESULT_AVAILABLE)) {
          if (!disjoint)
            gpu.push(gl.getQueryParameter(q, gl.QUERY_RESULT) / 1e6);
          gl.deleteQuery(q);
          pending.splice(i, 1);
        }
      }
      if (!active) return;
      if (n) {
        cpuUpdate[n - 1] = updateMs;
        cpuRender[n - 1] = renderMs;
        draws[n - 1] = renderer.info.render.calls;
        triangles[n - 1] = renderer.info.render.triangles;
      }
      if (time >= duration) {
        active = false;
        onComplete(report());
      }
    },
  };
  return api;
}
