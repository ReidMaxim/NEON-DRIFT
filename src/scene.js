import { grimeTexture } from "./living.js";
import { scenarioLayout, inReservedArea } from "./scenario.js";
import { intersects } from "./district.js";
import * as T from "three";
import { random } from "./world.js";
export function buildScene(scene, world) {
  const batches = new Map(),
    geo = new T.BoxGeometry(1, 1, 1),
    details = [];
  const solid = (color) =>
    new T.MeshStandardMaterial({ color, roughness: 0.78, metalness: 0.25 });
  const mats = [solid("#263442"), solid("#302d40"), solid("#203d42")],
    metal = solid("#36464b"),
    dark = solid("#101d27");
  const grime = grimeTexture();
  for (const material of mats) material.map = grime;
  const layout = scenarioLayout(world);
  const windows = world.config.neon.map(
    (color) =>
      new T.MeshBasicMaterial({
        color: new T.Color(color).multiplyScalar(0.65),
      }),
  );
  const neon = world.config.neon.map(
    (color) =>
      new T.MeshBasicMaterial({
        color: new T.Color(color).multiplyScalar(2.6),
      }),
  );
  const box = (x, y, z, w, h, d, mat) => {
    if (!batches.has(mat)) batches.set(mat, []);
    batches.get(mat).push([x, y, z, w, h, d]);
  };
  const tube = (points, r, mat) => {
    const curve = new T.CatmullRomCurve3(
      points.map((p) => new T.Vector3(...p)),
    );
    const m = new T.Mesh(new T.TubeGeometry(curve, 16, r, 5, false), mat);
    scene.add(m);
  };
  const sign = (text, x, y, z, w, h, color, ry = 0) => {
    const c = document.createElement("canvas");
    c.width = 512;
    c.height = 128;
    const g = c.getContext("2d");
    g.fillStyle = "#07131d";
    g.fillRect(0, 0, 512, 128);
    g.strokeStyle = color;
    g.lineWidth = 5;
    g.strokeRect(7, 7, 498, 114);
    g.fillStyle = color;
    g.font = "bold 64px monospace";
    g.textAlign = "center";
    g.textBaseline = "middle";
    g.fillText(text, 256, 67);
    const texture = new T.CanvasTexture(c);
    texture.colorSpace = T.SRGBColorSpace;
    const m = new T.Mesh(
      new T.PlaneGeometry(w, h),
      new T.MeshBasicMaterial({ map: texture, side: T.DoubleSide }),
    );
    m.position.set(x, y, z);
    m.rotation.y = ry;
    scene.add(m);
    return m;
  };
  const half = world.config.streetWidth / 2;
  box(0, -0.17, -25, world.config.streetWidth + 18, 0.3, 100, dark);
  for (const side of [-1, 1]) {
    box(side * (half - 0.65), 0.04, -25, 1.3, 0.12, 91, metal);
    for (let i = 0; i < 17; i++)
      if ((i + (side + 1)) % 5 !== 0)
        box(
          side * (half - 1.4),
          0.015,
          15 - i * 5,
          0.045,
          0.02,
          3.8,
          windows[0],
        );
  }
  for (const b of world.buildings) {
    const r = random(b.seed),
      side = Math.sign(b.x),
      face = b.x - (side * b.w) / 2;
    box(b.x, b.h / 2, b.z, b.w, b.h, b.d, mats[b.color]);
    for (let patch = 0; patch < 5; patch++) {
      const z = b.z + (r() - 0.5) * b.d,
        y = 0.4 + r() * 5;
      box(
        face - side * 0.03,
        y,
        z,
        0.075,
        0.3 + r() * 1.1,
        0.2 + r() * 0.8,
        patch % 2 ? dark : mats[(b.color + 1) % 3],
      );
    }
    box(b.x, b.h + 0.2, b.z, b.w + 0.4, 0.4, b.d + 0.3, metal);
    for (let y = 3; y < b.h; y += 3) {
      box(face - side * 0.06, y, b.z, 0.15, 0.15, b.d, metal);
      for (let z = b.z - b.d / 2 + 0.7; z < b.z + b.d / 2 - 0.4; z += 1.3) {
        box(
          face - side * 0.09,
          y + 1.1,
          z,
          0.12,
          1.35,
          0.75,
          r() > 0.65 ? windows[Math.floor(r() * windows.length)] : dark,
        );
        box(face - side * 0.15, y + 1.1, z, 0.16, 0.08, 0.8, metal);
      }
    }
    box(face - side * 0.13, 1.2, b.z, 0.22, 2.4, 1.3, dark);
    box(face - side * 0.3, 2.8, b.z, 0.7, 0.15, 2.6, metal);
    const pipeFar = Math.min(2, b.d / 2 - 0.25),
      pipeNear = Math.min(1, b.d / 2 - 0.25);
    tube(
      [
        [face - side * 0.24, 0.2, b.z + pipeFar],
        [face - side * 0.24, 4, b.z + pipeFar],
        [face - side * 0.24, 4.4, b.z + pipeNear],
        [face - side * 0.24, b.h, b.z + pipeNear],
      ],
      0.09,
      metal,
    );
    for (let y = 1; y < b.h; y += 3.5) {
      box(face - side * 0.12, y, b.z + pipeFar, 0.26, 0.09, 0.24, metal);
      box(face - side * 0.12, y, b.z + pipeNear, 0.26, 0.09, 0.24, metal);
    }
    if (r() > 0.5) {
      box(face - side * 0.7, 7.2, b.z, 1.5, 0.22, 3.5, metal);
      box(face - side * 1.35, 7.7, b.z, 0.09, 1, 3.5, dark);
      for (let j = 0; j < 6; j++)
        box(face - side * 1.35, 7.7, b.z - 1.5 + j * 0.6, 0.1, 1, 0.06, metal);
    }
    if (r() > 0.5) {
      for (const y of [4.0, 4.6])
        box(face - side * 0.12, y, b.z - 1, 0.26, 0.12, 1.1, metal);
      box(face - side * 0.7, 4.3, b.z - 1, 1.1, 0.7, 1.5, mats[1]);
      tube(
        [
          [face - side * 0.8, 4.2, b.z - 1],
          [face - side * 0.8, 6, b.z - 1],
          [face - side * 0.8, 6.5, b.z],
        ],
        0.24,
        metal,
      );
    }
    const ventZ = b.z - Math.min(1.8, Math.max(0, b.d / 2 - 0.65));
    box(face - side * 0.08, 4.05, ventZ, 0.16, 0.78, 1.2, metal);
    const vent = new T.Group();
    for (let i = 0; i < 5; i++) {
      const m = new T.Mesh(geo, metal);
      m.position.set(
        face - side * 0.35,
        3.8 + i * 0.12,
        b.z - Math.min(1.8, Math.max(0, b.d / 2 - 0.65)),
      );
      m.scale.set(0.4, 0.06, 1.1);
      vent.add(m);
    }
    scene.add(vent);
    details.push(vent);
    if (r() > 0.35) {
      box(face - side * 0.04, 5.5, b.z, 0.08, 2.7, 0.16, metal);
      for (const y of [4.3, 6.7])
        box(face - side * 0.45, y, b.z, 0.9, 0.09, 0.16, metal);
      box(face - side * 0.8, 5.5, b.z, 1.4, 2.9, 0.25, dark);
      box(face - side * 1.4, 5.5, b.z, 0.06, 2.6, 0.28, neon[side < 0 ? 1 : 0]);
      sign(
        (side < 0
          ? ["VOID", "TAPE", "LATE", "FM 09"]
          : ["24H", "SLEEP", "RADIO", "OPEN"])[Math.floor(r() * 4)],
        face - side * 0.8,
        5.6,
        b.z + 0.15,
        1.25,
        0.55,
        side < 0 ? "#ff64d4" : "#6affef",
      );
    }
  }
  // Distant skyline is deliberately offset, forming a recognizable layered crown.
  for (let i = 0; i < 15; i++) {
    const r = random(800 + i),
      x = (i - 7) * 5,
      h = 25 + r() * 40;
    box(x, h / 2, -85 - r() * 15, 3 + r() * 4, h, 5, mats[i % 3]);
    for (let y = 6; y < h; y += 4) box(x, y, -81, 1.6, 0.12, 0.1, neon[i % 2]);
  }
  box(2, 23, -67, 9, 46, 8, mats[0]);
  box(2, 48, -67, 5, 4, 5, mats[1]);
  box(2, 54, -67, 0.15, 10, 0.15, neon[1]);
  sign("07", 2, 32, -62.9, 6, 6, "#66ffeb");
  // Bridges, hanging cables and old ventilation infrastructure break the street silhouette.
  for (const z of [-13, -42]) {
    box(0, 10, z, half * 2 + 2, 1.8, 2.4, dark);
    for (let x = -half; x < half; x += 1.1)
      box(x, 10, z + 1.23, 0.6, 0.75, 0.05, neon[0]);
  }
  for (const z of [7, -8, -27, -49]) {
    for (let j = 0; j < 4; j++) {
      if (
        world.config.tier >= 3 &&
        world.city.roads
          .slice(1)
          .some((r) =>
            intersects(
              { minX: -half + 0.15, maxX: -half + 2, minZ: z - 1, maxZ: z + 3 },
              r,
            ),
          )
      )
        continue;
      if (inReservedArea(layout, -half + 0.45 + j * 0.3, z + j * 0.4)) continue;
      box(
        -half + 0.45 + j * 0.3,
        0.13 + j * 0.045,
        z + j * 0.4,
        0.6,
        0.23,
        0.55,
        j % 2 ? mats[1] : metal,
      );
    }
  }
  for (const p of world.props) {
    box(p.x, p.h / 2 + 0.1, p.z, p.w, p.h, 0.8, metal);
    box(p.x, p.h + 0.12, p.z, p.w + 0.06, 0.08, 0.86, dark);
  }
  // Hero storefront and municipal terminal, readable from the opening camera.
  sign("AFTER HOURS", -half + 0.12, 3.4, -4, 5.6, 1.15, "#ff69d2", Math.PI / 2);
  box(-half + 0.28, 2.1, -4, 0.5, 0.18, 6, neon[1]);
  for (let z = -6; z < -1; z += 0.32)
    box(-half + 0.16, 1.2, z, 0.22, 2, 0.05, metal);
  sign("RELAY / 07", -half + 1.2, 2.9, 1.9, 2.3, 0.57, "#78ffe2");
  const term = world.terminal;
  box(term.x, 0.55, term.z, 1.05, 1.1, 0.8, metal);
  box(term.x, 1.45, term.z, 1.3, 0.95, 0.95, dark);
  box(term.x, 1.5, term.z + 0.49, 0.96, 0.56, 0.03, dark);
  sign("> ONLINE", term.x, 1.5, term.z + 0.515, 0.86, 0.43, "#80ffb6");
  box(term.x, 1.02, term.z + 0.6, 1.25, 0.12, 0.5, metal);
  for (let i = 0; i < 5; i++)
    box(
      term.x + 0.55,
      1.25 + i * 0.09,
      term.z + 0.48,
      0.06,
      0.035,
      0.04,
      metal,
    );
  box(term.x + 0.45, 1.12, term.z + 0.5, 0.1, 0.08, 0.06, windows[2]);
  for (let i = 0; i < 8; i++)
    box(term.x - 0.45 + i * 0.12, 1.09, term.z + 0.65, 0.07, 0.02, 0.15, dark);
  const lights = [
    [-half + 1, 3, -4, 0xff36be, 55],
    [term.x, 2, 3, 0x4dffdd, 12],
    [half - 1, 4, -16, 0x21bfff, 65],
    [-half + 1, 4, -33, 0xf199ff, 65],
    [1, 6, -57, 0x34caff, 130],
    ...world.attachments.lamps
      .filter((l) => l.faulty)
      .map((l) => [l.position[0], 5, l.position[2], 0xffbd7c, 35]),
  ];
  for (const [x, y, z, c, p] of lights) {
    const light = new T.PointLight(c, p, 19, 2);
    light.position.set(x, y, z);
    scene.add(light);
  }
  scene.add(new T.HemisphereLight(0x8ca9ce, 0x243647, 1.8));
  const moon = new T.DirectionalLight(0x6b84c3, 1.8);
  moon.position.set(-3, 30, -20);
  scene.add(moon);
  for (const [mat, items] of batches) {
    const mesh = new T.InstancedMesh(geo, mat, items.length),
      dummy = new T.Object3D();
    items.forEach((a, i) => {
      dummy.position.set(a[0], a[1], a[2]);
      dummy.scale.set(a[3], a[4], a[5]);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    });
    mesh.computeBoundingSphere();
    scene.add(mesh);
  }
  // Analytic, broken neon streaks: a wet-surface approximation, not scene reflections.
  const roadMat = new T.ShaderMaterial({
    uniforms: { time: { value: 0 }, fogDensity: { value: world.config.fog } },
    vertexShader: `varying vec3 wp; void main(){wp=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(wp,1.);}`,
    fragmentShader: `varying vec3 wp; uniform float time; uniform float fogDensity; float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);} void main(){vec2 p=wp.xz;float n=hash(floor(p*vec2(32.,65.)));float puddle=smoothstep(.15,.6,sin(p.x*1.7+sin(p.y*.3))*sin(p.y*.7));n=mix(n,.25,puddle*.85);float ripple=sin(p.y*18.+sin(p.x*4.)+time*2.)*.5+.5;vec3 c=vec3(.018,.028,.045);float a=exp(-pow((p.x+3.4)*.8,2.))*exp(-abs(p.y+4.)*.10);float b=exp(-pow((p.x-3.8)*.9,2.))*exp(-abs(p.y+16.)*.08);float d=exp(-pow((p.x+3.8)*1.1,2.))*exp(-abs(p.y-2.)*.18);c+=(vec3(.95,.035,.47)*a+vec3(.02,.46,.7)*b+vec3(.04,.7,.49)*d)*(.08+n*.55)*(.8+ripple*.2);float f=1.-exp(-pow(length(cameraPosition-wp)*fogDensity,2.));gl_FragColor=vec4(mix(c,vec3(.025,.038,.075),f),1.);}`,
  });
  const road = new T.Mesh(
    new T.PlaneGeometry(world.config.streetWidth - 2.8, 94),
    roadMat,
  );
  road.rotation.x = -Math.PI / 2;
  road.position.set(0, 0.012, -25);
  scene.add(road);

  const markings = new T.InstancedMesh(geo, metal, 14),
    dummy = new T.Object3D();
  for (let i = 0; i < 14; i++) {
    dummy.position.set(0.1, 0.025, 12 - i * 6);
    dummy.scale.set(0.07, 0.02, 1.2);
    dummy.updateMatrix();
    markings.setMatrixAt(i, dummy.matrix);
  }
  scene.add(markings);
  const rr = random(world.config.seed + 77),
    positions = new Float32Array(4800 * 3);
  for (let i = 0; i < 2400; i++) {
    const x = (rr() - 0.5) * world.config.streetWidth,
      y = rr() * 18,
      z = 18 - rr() * 90;
    if (world.config.tier >= 3) {
      const seg = world.city.roads[i % world.city.roads.length],
        px = seg.minX + rr() * (seg.maxX - seg.minX),
        pz = seg.minZ + rr() * (seg.maxZ - seg.minZ);
      positions.set([px, y, pz, px + 0.035, y, pz], i * 6);
    } else {
      positions.set([x, y, z, x + 0.035, y, z], i * 6);
    }
  }
  const rainGeo = new T.BufferGeometry();
  rainGeo.setAttribute("position", new T.BufferAttribute(positions, 3));
  const tips = new Float32Array(4800);
  for (let i = 1; i < 4800; i += 2) tips[i] = 1;
  rainGeo.setAttribute("tip", new T.BufferAttribute(tips, 1));
  const rainMat = new T.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: { time: { value: 0 } },
    vertexShader: `uniform float time; attribute float tip; varying float fade; void main(){vec3 p=position;p.y=mod(p.y-time*10.,18.)+tip*.32;vec4 mv=modelViewMatrix*vec4(p,1.);fade=clamp(1.+mv.z/65.,0.,1.);gl_Position=projectionMatrix*mv;}`,
    fragmentShader: `varying float fade;void main(){gl_FragColor=vec4(.42,.73,.86,.22*fade);}`,
  });
  const rain = new T.LineSegments(rainGeo, rainMat);
  rain.frustumCulled = false;
  scene.add(rain);
  return {
    update(time, camera, preset) {
      roadMat.uniforms.time.value = time;
      rainMat.uniforms.time.value = time;
      rainGeo.setDrawRange(
        0,
        Math.min(2400, Math.floor(preset.rain * world.config.rain)) * 2,
      );
      for (const d of details)
        d.visible =
          Math.abs(d.children[0].position.z - camera.position.z) <
          preset.detail;
    },
  };
}
