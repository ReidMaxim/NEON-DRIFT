import * as T from "three";
import { intersects } from "./district.js";
import { random } from "./world.js";
import { inReservedArea, powered } from "./scenario.js";
export function grimeTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const g = c.getContext("2d"),
    r = random(907);
  g.fillStyle = "#b1b6bb";
  g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 70; i++) {
    const x = r() * 256,
      y = r() * 256,
      w = 1 + r() * 10,
      h = 20 + r() * 130,
      grad = g.createLinearGradient(0, y, 0, y + h);
    grad.addColorStop(0, "#101b2755");
    grad.addColorStop(1, "#101b2700");
    g.fillStyle = grad;
    g.fillRect(x, y, w, h);
  }
  const t = new T.CanvasTexture(c);
  t.colorSpace = T.SRGBColorSpace;
  t.wrapS = t.wrapT = T.RepeatWrapping;
  return t;
}
export function buildLivingStreet(scene, world, layout) {
  const r = random(world.config.seed + 3701),
    geo = new T.BoxGeometry(),
    sphere = new T.IcosahedronGeometry(1, 1),
    batches = new Map(),
    fans = [];
  const metal = new T.MeshStandardMaterial({
      color: "#293f41",
      roughness: 0.85,
    }),
    rust = new T.MeshStandardMaterial({ color: "#674837", roughness: 0.95 }),
    bag = new T.MeshStandardMaterial({ color: "#17252b", roughness: 0.85 }),
    paper = new T.MeshStandardMaterial({ color: "#827d69", roughness: 1 });
  const add = (geometry, material, x, y, z, sx, sy, sz) => {
    const key = geometry.uuid + material.uuid;
    if (!batches.has(key)) batches.set(key, { geometry, material, items: [] });
    batches.get(key).items.push([x, y, z, sx, sy, sz]);
  };
  const half = world.config.streetWidth / 2;
  for (let z = 13; z > -66; z -= 7) {
    const side = r() > 0.5 ? 1 : -1,
      x = side * (half - 0.65);
    if (
      inReservedArea(layout, x, z, 1) ||
      world.city.roads
        .slice(1)
        .some((road) =>
          intersects(
            { minX: x - 1, maxX: x + 1, minZ: z - 3, maxZ: z + 3 },
            road,
          ),
        )
    )
      continue;
    add(geo, metal, x, 0.55, z, 0.9, 1.1, 1.65);
    add(geo, rust, x, 1.15, z, 1.05, 0.12, 1.85);
    for (let j = 0; j < 3; j++)
      add(
        sphere,
        bag,
        x - side * 0.55,
        0.2,
        z + 0.5 + j * 0.32,
        0.25 + r() * 0.1,
        0.23,
        0.27,
      );
    for (let j = 0; j < 5; j++)
      add(
        geo,
        paper,
        x - side * (0.3 + r()),
        0.075,
        z - 1 + r() * 2,
        0.1 + r() * 0.25,
        0.015,
        0.1 + r() * 0.3,
      );
    add(geo, rust, x, 0.09, z - 2, 0.8, 0.04, 1.2);
  }
  for (const z of [10, -22, -45]) {
    const fan = new T.Group();
    fan.position.set(half - 0.35, 3.2, z);
    for (let i = 0; i < 4; i++) {
      const blade = new T.Mesh(geo, metal);
      blade.scale.set(0.8, 0.16, 0.06);
      blade.rotation.z = (i * Math.PI) / 2;
      fan.add(blade);
    }
    scene.add(fan);
    fans.push(fan);
  }
  for (const { geometry, material, items } of batches.values()) {
    const mesh = new T.InstancedMesh(geometry, material, items.length),
      d = new T.Object3D();
    items.forEach((p, i) => {
      d.position.set(p[0], p[1], p[2]);
      d.scale.set(p[3], p[4], p[5]);
      d.updateMatrix();
      mesh.setMatrixAt(i, d.matrix);
    });
    mesh.computeBoundingSphere();
    scene.add(mesh);
  }
  const data = new Float32Array(36 * 3);
  for (let i = 0; i < 36; i++)
    data.set(
      [i % 2 ? -half + 1 : half - 1, r() * 2, (i % 2 ? -24 : 10) + r()],
      i * 3,
    );
  const g = new T.BufferGeometry();
  g.setAttribute("position", new T.BufferAttribute(data, 3));
  const mat = new T.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: { time: { value: 0 } },
    vertexShader: `uniform float time;varying float a;void main(){vec3 p=position;float phase=fract(position.y*.5+time*.12);p.y=.1+phase*3.;p.x+=sin(time*.4+position.z)*phase*.5;vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=min(100.,240.*(.3+phase)/max(1.,-mv.z));a=sin(phase*3.14159)*.055;}`,
    fragmentShader: `varying float a;void main(){float d=length(gl_PointCoord-.5);gl_FragColor=vec4(.5,.65,.7,a*smoothstep(.5,.1,d));}`,
  });
  const steam = new T.Points(g, mat);
  steam.frustumCulled = false;
  scene.add(steam);
  const flicker = new T.MeshBasicMaterial({ color: "#72c8bc" });
  const faulty = new T.Mesh(geo, flicker);
  faulty.position.set(half - 1.5, 5.55, 9);
  faulty.scale.set(1.4, 0.16, 0.3);
  scene.add(faulty);
  return {
    update(time, preset) {
      for (const fan of fans) fan.rotation.z = time * 0.65;
      mat.uniforms.time.value = time;
      g.setDrawRange(0, preset.bloom ? 36 : 12);
      flicker.color.setScalar(Math.sin(time * 1.7) > -0.94 ? 0.7 : 0.08);
    },
  };
}
export function buildInfrastructure(scene, game) {
  const geo = new T.BoxGeometry(),
    body = new T.MeshStandardMaterial({ color: "#243338", roughness: 0.8 }),
    trim = new T.MeshStandardMaterial({ color: "#665744", roughness: 0.7 }),
    inside = new T.MeshStandardMaterial({ color: "#33464b", roughness: 0.9 }),
    off = new T.MeshBasicMaterial({ color: "#aa5537" }),
    on = new T.MeshBasicMaterial({ color: "#64ffe0" });
  const box = (x, y, z, w, h, d, m) => {
    const mesh = new T.Mesh(geo, m);
    mesh.position.set(x, y, z);
    mesh.scale.set(w, h, d);
    scene.add(mesh);
    return mesh;
  };
  const label = (text, x, y, z, w, color = "#b8d9cd") => {
    const c = document.createElement("canvas");
    c.width = 512;
    c.height = 128;
    const ctx = c.getContext("2d");
    ctx.fillStyle = "#0a171d";
    ctx.fillRect(0, 0, 512, 128);
    ctx.strokeStyle = color;
    ctx.lineWidth = 4;
    ctx.strokeRect(8, 8, 496, 112);
    ctx.fillStyle = color;
    ctx.font = "bold 37px monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, 256, 64);
    const tex = new T.CanvasTexture(c);
    tex.colorSpace = T.SRGBColorSpace;
    const mesh = new T.Mesh(
      new T.PlaneGeometry(w, w / 4),
      new T.MeshBasicMaterial({ map: tex }),
    );
    mesh.position.set(x, y, z);
    scene.add(mesh);
    return mesh;
  };
  const find = (id) => game.layout.objects.find((o) => o.id === id).position;
  const tag = find("notice");
  box(tag.x, 1, tag.z, 0.7, 2, 0.12, trim);
  label("MAINT / LINE 7", tag.x, 1.5, tag.z + 0.08, 1.2, "#eacb85");
  label("E : READ TAG", tag.x, 1.05, tag.z + 0.08, 1, "#bdaf8b");
  const relay = find("relay");
  box(relay.x, 0.85, relay.z, 0.85, 1.7, 0.5, body);
  label("R-07 / ISOLATED", relay.x, 1.95, relay.z + 0.3, 1.7, "#e6a161");
  const led = box(relay.x, 1.3, relay.z + 0.28, 0.6, 0.07, 0.03, off);
  for (let i = 0; i < 5; i++)
    box(relay.x, 0.5 + i * 0.1, relay.z + 0.27, 0.6, 0.035, 0.04, trim);
  const power = find("power");
  box(power.x, 1, power.z, 1, 2, 0.5, body);
  label("SERVICE TRANSFER", power.x, 2.25, power.z + 0.3, 2, "#e9c77d");
  label("NORMAL / BYPASS", power.x, 1.55, power.z + 0.27, 0.9, "#c1d1c7");
  const lever = box(power.x, 1.1, power.z + 0.35, 0.12, 0.48, 0.15, trim);
  box(power.x, 0.5, power.z + 0.27, 0.7, 0.25, 0.02, off);
  const room = game.layout.room,
    x = (room.minX + room.maxX) / 2;
  box(x, 0.04, -8, 3, 0.08, 4, inside);
  box(room.minX, 1.6, -8, 0.22, 3.2, 4, body);
  box(room.maxX, 1.6, -8, 0.22, 3.2, 4, body);
  box(x, 1.6, -10, 3, 3.2, 0.22, inside);
  box(x, 3.2, -8, 3.3, 0.18, 4.4, body);
  box(x, 3, -5.9, 3.3, 0.6, 0.25, trim);
  label("PALISADE / ARCHIVE", x, 3.1, -5.74, 3.15, "#e5ac74");
  const door = box(x, 1.35, -6, 2.75, 2.7, 0.18, body);
  for (let i = 0; i < 12; i++) {
    const rib = new T.Mesh(geo, trim);
    rib.scale.set(0.98, 0.009, 1.05);
    rib.position.y = (i - 5.5) * 0.075;
    door.add(rib);
  }
  label("ACCESS / 03", x, 2.35, -5.87, 1.4, "#b9aba0");
  const strips = [
    box(room.minX + 0.22, 2.65, -7.8, 0.06, 0.06, 3.2, off),
    box(room.maxX - 0.22, 2.65, -7.8, 0.06, 0.06, 3.2, off),
  ];
  const light = new T.PointLight("#7be8d4", 0, 7, 2);
  light.position.set(x, 2.4, -8);
  scene.add(light);
  box(x, 0.65, -9, 1.5, 1.3, 0.7, body);
  box(x, 1.4, -9, 0.75, 0.2, 0.45, trim);
  label("RECORDER / 03", x, 1.7, -8.74, 1.5, "#99dec9");
  const reward = box(x, 1.53, -8.85, 0.08, 0.04, 0.04, on);
  let last = -1;
  return {
    update(time) {
      const s = game.state;
      if (last !== s.revision) {
        last = s.revision;
        const active = powered(game);
        led.material = s.routed ? on : off;
        for (const strip of strips) strip.material = active ? on : off;
        light.intensity = active ? 24 : 0;
        lever.rotation.z = s.manual ? 0.7 : -0.7;
        door.position.y = s.doorOpen ? 4.2 : 1.35;
      }
      reward.visible = !s.complete || Math.sin(time * 0.8) > 0.3;
    },
  };
}
