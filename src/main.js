import {
  createGame,
  saveGame,
  resetGame,
  scenarioColliders,
  nearby,
} from "./scenario.js";
import { buildLivingStreet, buildInfrastructure } from "./living.js";
import { createAudio } from "./audio.js";
import { createInteractionUI } from "./interaction-ui.js";
import * as T from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import {
  generate,
  colliders,
  movePlayer,
  presets,
  terminalCommand,
} from "./world.js";
import { buildScene } from "./scene.js";
import "./style.css";
const $ = (id) => document.getElementById(id);
try {
  await start();
} catch (e) {
  console.error(e);
  $("error").hidden = false;
  $("error").textContent =
    `The district could not start. This experience requires WebGL2 and hardware acceleration. Try an updated desktop browser. Details: ${e.message}`;
}
async function start() {
  const params = new URLSearchParams(location.search),
    seed = Number(params.get("seed") ?? 2049),
    world = generate({ seed });
  let saved = null;
  try {
    saved = localStorage.getItem(
      `neon-drift:${import.meta.env.BASE_URL.includes("/preview/") ? "preview:" : ""}m2:${seed}`,
    );
  } catch {}
  const game = createGame(world, saved),
    audio = createAudio();
  let boxes = [];
  const rebuildCollision = () => {
    boxes = [...colliders(world), ...scenarioColliders(game.layout)];
    if (!game.state.doorOpen) {
      const r = game.layout.room;
      boxes.push({ minX: r.minX, maxX: r.maxX, minZ: -6.12, maxZ: -5.88 });
    }
  };
  rebuildCollision();
  $("seed").value = seed;
  const renderer = new T.WebGLRenderer({
    canvas: $("world"),
    antialias: false,
    powerPreference: "high-performance",
  });
  renderer.info.autoReset = false;
  renderer.toneMapping = T.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  const scene = new T.Scene();
  scene.background = new T.Color("#090e20");
  scene.fog = new T.FogExp2("#111b30", world.config.fog);
  const camera = new T.PerspectiveCamera(67, 1, 0.08, 180);
  camera.rotation.order = "YXZ";
  const visual = buildScene(scene, world),
    composer = new EffectComposer(renderer);
  const living = buildLivingStreet(scene, world, game.layout),
    infrastructure = buildInfrastructure(scene, game);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new T.Vector2(1, 1), 0.35, 0.65, 1.05);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());
  let quality = "medium",
    scale = 1,
    state = "menu",
    yaw = 0,
    pitch = 0,
    last = 0,
    elapsed = 0,
    slow = 0,
    adaptTime = 0,
    frames = 0,
    frameSum = 0;
  const player = { x: 1, z: 13 },
    keys = new Set();
  game.player = player;
  const reset = () => {
    player.x = 1;
    player.z = 13;
    yaw = 0.08;
    pitch = 0.025;
    camera.position.set(player.x, 1.72, player.z);
    camera.rotation.set(pitch, yaw, 0);
  };
  reset();
  const resize = () => {
    const p = presets[quality];
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5) * p.scale * scale);
    renderer.setSize(innerWidth, innerHeight);
    composer.setPixelRatio(renderer.getPixelRatio());
    composer.setSize(innerWidth, innerHeight);
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    bloom.enabled = p.bloom;
  };
  resize();
  addEventListener("resize", resize);
  const showMenu = () => {
    state = "menu";
    keys.clear();
    document.exitPointerLock?.();
    $("menu").hidden = false;
    ui.hide();
    $("prompt").hidden = true;
    $("enter").focus();
  };
  const enter = async () => {
    try {
      await $("world").requestPointerLock();
    } catch {
      $("notice").textContent =
        "Mouse capture was denied. Click Enter district to try again.";
    }
  };
  $("enter").onclick = enter;
  $("menu-button").onclick = showMenu;
  document.addEventListener("pointerlockchange", () => {
    if (document.pointerLockElement) {
      state = "play";
      $("menu").hidden = true;
      $("terminal").hidden = true;
      $("enter").textContent = "RESUME DISTRICT ↗";
    } else if (state === "play") showMenu();
  });
  document.addEventListener("mousemove", (e) => {
    if (state === "play") {
      yaw -= e.movementX * 0.002;
      pitch = Math.max(-1.45, Math.min(1.45, pitch - e.movementY * 0.002));
    }
  });
  const persist = () => {
    rebuildCollision();
    try {
      localStorage.setItem(
        `neon-drift:${import.meta.env.BASE_URL.includes("/preview/") ? "preview:" : ""}m2:${seed}`,
        saveGame(game),
      );
      $("save-status").textContent = "Progress saved locally";
    } catch {
      $("save-status").textContent =
        "Storage unavailable — progress lasts this visit";
    }
  };
  const ui = createInteractionUI(game, {
    audio,
    onChange: persist,
    close: showMenu,
    pause(mode) {
      state = mode;
      keys.clear();
      document.exitPointerLock?.();
      $("menu").hidden = true;
      $("prompt").hidden = true;
      ui.hide();
    },
  });
  ui.refresh();
  $("reset-scenario").onclick = () => {
    resetGame(game);
    reset();
    ui.refresh();
    showMenu();
  };
  $("audio-toggle").onclick = async () => {
    if (audio.enabled) {
      audio.mute();
      $("audio-toggle").textContent = "Enable ambient audio";
    } else {
      $("audio-toggle").textContent = (await audio.enable())
        ? "Mute ambient audio"
        : "Audio unavailable — retry";
    }
  };
  $("volume").oninput = () => audio.setVolume(Number($("volume").value) / 100);
  addEventListener("keydown", (e) => {
    if (
      ["terminal", "inspect", "journal"].includes(state) &&
      e.code === "Tab"
    ) {
      const panel = $(state === "inspect" ? "inspector" : state);
      const items = panel.querySelectorAll("button,input");
      const first = items[0],
        last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    if (state === "play") {
      keys.add(e.code);
      if (e.code === "KeyE" && !e.repeat) {
        const object = nearby(game, player, yaw);
        if (object) ui.open(object);
      }
      if (e.code === "KeyJ" && !e.repeat) ui.journal();
    }
    if (
      e.code === "Escape" &&
      ["terminal", "inspect", "journal", "play", "tour"].includes(state)
    )
      showMenu();
  });
  addEventListener("keyup", (e) => keys.delete(e.code));
  addEventListener("blur", () => {
    keys.clear();
    if (state === "play") showMenu();
  });
  document.addEventListener("visibilitychange", () => {
    last = 0;
    keys.clear();
    if (document.hidden) audio.suspend();
    else audio.resume();
  });
  $("restart").onclick = () => {
    reset();
    showMenu();
  };
  $("quality").onchange = () => {
    quality = $("quality").value;
    scale = 1;
    resize();
  };
  $("regenerate").onclick = () => {
    const n = Number($("seed").value);
    if (!Number.isFinite(n)) return;
    params.set("seed", Math.trunc(n));
    location.search = params.toString();
  };
  if (matchMedia("(pointer:coarse)").matches) {
    $("enter").disabled = true;
    $("enter").textContent = "DESKTOP EXPLORATION";
    $("notice").textContent =
      "This first district needs a keyboard and mouse. You can view the live scene here; explore on desktop.";
    quality = "low";
    $("quality").value = "low";
    resize();
  }
  $("world").addEventListener("webglcontextlost", (e) => {
    e.preventDefault();
    showMenu();
    $("error").hidden = false;
    $("error").textContent =
      "Graphics connection lost. Reload this page to rebuild the district.";
  });
  $("world").addEventListener("webglcontextrestored", () => location.reload());
  let diagnostics = null;
  if (import.meta.env.DEV) {
    const { createDiagnostics } = await import("./tour.js");
    diagnostics = createDiagnostics({
      camera,
      renderer,
      world,
      hideUI() {
        state = "tour";
        $("menu").hidden = true;
        $("terminal").hidden = true;
      },
      reset,
      quality: () => quality,
      snapshot: () => ({
        player: { ...player },
        state,
        yaw,
        pitch,
        game: JSON.parse(saveGame(game)),
        audio: { enabled: audio.enabled, status: audio.status },
      }),
    });
  }
  function frame(now) {
    requestAnimationFrame(frame);
    const raw = last ? now - last : 16.67,
      dt = Math.min(raw / 1000, 0.05);
    last = now;
    if (document.hidden) return;
    elapsed += dt;
    if (state === "play") {
      let f = Number(keys.has("KeyW")) - Number(keys.has("KeyS")),
        s = Number(keys.has("KeyD")) - Number(keys.has("KeyA"));
      const length = Math.hypot(f, s) || 1,
        speed =
          ((keys.has("ShiftLeft") || keys.has("ShiftRight") ? 6 : 3) * dt) /
          length;
      movePlayer(
        player,
        (s * Math.cos(yaw) - f * Math.sin(yaw)) * speed,
        (-f * Math.cos(yaw) - s * Math.sin(yaw)) * speed,
        boxes,
        world.bounds,
      );
      camera.position.set(player.x, 1.72, player.z);
      camera.rotation.set(pitch, yaw, 0);
      const target = nearby(game, player, yaw);
      $("prompt").hidden = !target;
      if (target) $("prompt").textContent = "[ E ]  " + target.label;
    }
    diagnostics?.update(dt, raw);
    visual.update(elapsed, camera, presets[quality]);
    living.update(elapsed, presets[quality]);
    infrastructure.update(elapsed);
    renderer.info.reset();
    composer.render();
    if (!diagnostics?.active && state === "play") {
      frameSum += raw;
      frames++;
      adaptTime += dt;
      if (adaptTime > 3) {
        if (frameSum / frames > 23) slow++;
        else slow = 0;
        if (slow >= 2 && scale > 0.6) {
          scale = Math.max(0.6, scale - 0.1);
          resize();
          slow = 0;
        }
        frames = frameSum = adaptTime = 0;
      }
    }
  }
  requestAnimationFrame(frame);
}
