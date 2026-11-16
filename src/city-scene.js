import { streetTiles } from "./street-surfaces.js";
import { assemblyBounds, overlaps3, surfacePlate } from "./assemblies.js";
import * as T from "three";
import { identities, boundsOf, intersects } from "./district.js";
import { random } from "./random.js";
import { scenarioLayout, inReservedArea } from "./scenario.js";
// Material/geometry/chunk batching keeps visibility local rather than one city-wide bound.
export function buildCity(scene, world) {
  const tier = world.config.tier,
    layout = scenarioLayout(world);
  const attachmentReservations = [
    ...world.attachments.fans,
    ...world.attachments.vents,
  ].map((a) => assemblyBounds(a));
  if (!tier) return { update() {}, stats: { instances: 0, chunks: 0 } };
  const cube = new T.BoxGeometry(),
    sphere = new T.IcosahedronGeometry(1, 1),
    batch = new Map(),
    chunks = new Map(),
    materials = {},
    dummy = new T.Object3D(),
    animated = [],
    stats = { instances: 0, chunks: 0 };
  const surface = (color, roughness = 0.85) =>
    new T.MeshStandardMaterial({
      color,
      roughness,
      metalness: 0.3,
      emissive: color,
      emissiveIntensity: 0.18,
    });
  for (const [id, c] of Object.entries(identities))
    materials[id] = {
      body: surface(c.wall),
      trim: surface(c.trim),
      dark: surface("#101c25"),
      glass: new T.MeshBasicMaterial({ color: c.accent }),
      neon: new T.MeshBasicMaterial({
        color: new T.Color(c.neon).multiplyScalar(1.4),
      }),
    };
  const road = new T.ShaderMaterial({
      uniforms: { time: { value: 0 } },
      vertexShader: `varying vec3 wp;void main(){wp=(modelMatrix*instanceMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(wp,1.);}`,
      fragmentShader: `varying vec3 wp;uniform float time;float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}void main(){vec2 p=wp.xz;float noise=hash(floor(p*vec2(24.,48.)));float wet=.3+noise*.5;float ripple=.85+.15*sin(p.y*14.+sin(p.x*3.)+time*1.5);vec3 c=vec3(.028,.043,.06);float amber=exp(-pow((p.x+39.)*.22,2.))*exp(-abs(p.y+37.)*.035);float violet=exp(-pow((p.x-31.)*.3,2.))*exp(-abs(p.y+34.)*.04);float green=exp(-pow((p.y+57.)*.4,2.));float pink=exp(-pow((p.y+28.)*.35,2.));c+=(amber*vec3(.28,.13,.025)+violet*vec3(.08,.08,.25)+green*vec3(.055,.12,.07)+pink*vec3(.16,.025,.1))*wet*ripple;float f=1.-exp(-pow(length(cameraPosition-wp)*.025,2.));gl_FragColor=vec4(mix(c,vec3(.025,.038,.075),f),1.);}`,
    }),
    wear = surface("#58615f"),
    rust = surface("#4b3d32"),
    trash = surface("#121e23"),
    paper = surface("#868375");
  function add(
    x,
    y,
    z,
    w,
    h,
    d,
    mat,
    geometry = cube,
    detail = false,
    rotation = 0,
  ) {
    if (y < 2.7 && inReservedArea(layout, x, z, 0.6)) return;
    if (
      (detail || (h < 1.5 && y < 3)) &&
      attachmentReservations.some((a) =>
        overlaps3(
          a,
          {
            minX: x - w / 2,
            maxX: x + w / 2,
            minY: y - h / 2,
            maxY: y + h / 2,
            minZ: z - d / 2,
            maxZ: z + d / 2,
          },
          0.035,
        ),
      )
    )
      return;
    const cx = Math.floor(x / 24),
      cz = Math.floor(z / 24),
      chunk = `${cx},${cz},${detail}`;
    if (!chunks.has(chunk)) {
      const group = new T.Group();
      group.userData = {
        x: cx * 24 + 12,
        z: cz * 24 + 12,
        detail,
        visible: true,
      };
      chunks.set(chunk, group);
      scene.add(group);
    }
    const key = `${chunk}:${mat.uuid}:${geometry.uuid}`;
    if (!batch.has(key))
      batch.set(key, { group: chunks.get(chunk), mat, geometry, items: [] });
    batch.get(key).items.push([x, y, z, w, h, d, rotation]);
    stats.instances++;
  }
  function facade(b, core = false) {
    if (!core) return; // Structural architecture is now composed by the shared layer adapter.
    const r = random(b.seed + 374),
      id = core
        ? world.config.identity === "mixed"
          ? "commercial"
          : world.config.identity
        : b.identity,
      m = materials[id],
      side = core ? Math.sign(b.x) : b.side,
      vertical = core || b.vertical,
      depth = vertical ? b.w : b.d,
      width = vertical ? b.d : b.w,
      fx = b.x - (vertical ? (side * depth) / 2 : 0),
      fz = b.z - (vertical ? 0 : (side * depth) / 2);
    const put = (u, y, v, w, h, d, mat, detail = false, geometry = cube) =>
      add(
        fx + (vertical ? -side * v : u),
        y,
        fz + (vertical ? u : -side * v),
        vertical ? d : w,
        h,
        vertical ? w : d,
        mat,
        geometry,
        detail,
      );
    // Building grammar: depth ribs, meters, service doors, boxed AC, drain runs and abstract paint.
    for (let u = -width / 2 + 0.3; u < width / 2; u += 2.3) {
      put(u, 2.2, 0.22, 0.12, 4.4, 0.26, m.trim, true);
      put(u, 1.5, 0.38, 0.38, 0.55, 0.36, m.dark, true);
      put(u, 1.55, 0.59, 0.22, 0.08, 0.03, m.glass, true);
    }
    put(width * 0.3, 3.7, 0.44, 1.3, 0.75, 0.8, m.trim, true);
    for (let i = 0; i < 5; i++)
      put(width * 0.3, 3.48 + i * 0.1, 0.86, 1.05, 0.035, 0.03, m.dark, true);
    put(-width * 0.35, 3, 0.18, 0.12, 6, 0.24, rust, true);
    put(-width * 0.32, 1, 0.34, 0.28, 0.08, 0.45, m.trim, true);
    for (let i = 0; i < (tier === 4 ? 12 : 4); i++) {
      const u = (r() - 0.5) * (width - 0.6);
      put(
        u,
        0.4 + r() * 2,
        0.255,
        0.05 + r() * 0.35,
        0.04 + r() * 0.5,
        0.02,
        i % 2 ? rust : m.dark,
        true,
      );
    }
    if (id === "commercial") {
      put(0, 2.7, 1.1, width, 0.2, 2.2, m.trim);
      for (let i = 0; i < Math.floor(width); i++)
        put(-width / 2 + 0.5 + i, 2.6, 2.15, 0.6, 0.16, 0.08, m.neon);
    }
    if (id === "residential" || (tier >= 4 && r() > 0.4)) {
      for (let y = 5; y < b.h - 2; y += 5) {
        put(0, y, 0.75, width * 0.8, 0.18, 1.5, m.trim);
        put(0, y + 0.6, 1.45, width * 0.8, 0.08, 0.08, m.trim);
        for (let u = -width * 0.35; u < width * 0.4; u += 0.6)
          put(u, y + 0.3, 1.45, 0.05, 0.7, 0.05, m.trim, true);
      }
    }
    if (id === "industrial") {
      put(0, 6, 0.7, width, 0.5, 1, m.trim);
      for (let i = 0; i < 3; i++)
        put(-width * 0.35 + i * 0.4, 5, 0.7, 0.18, 8, 0.24, rust);
      put(0, 1.3, 0.25, width * 0.5, 2.4, 0.2, m.dark);
    }
    if (id === "abandoned") {
      for (let i = 0; i < 5; i++) {
        put(0, 0.5 + i * 0.35, 0.28, width * 0.6, 0.08, 0.12, m.trim);
      }
      put(-width * 0.3, 2, 0.4, 0.3, 2.5, 0.3, rust);
    }
    // Roof antenna clusters and equipment form varied, inexpensive silhouettes.
    add(b.x, b.h + 1, b.z, 1.4, 1.8, 1.6, m.trim);
    add(b.x + 0.6, b.h + 3, b.z, 0.06, 5, 0.06, m.neon);
    if (tier === 4)
      for (let i = 0; i < 3; i++)
        add(b.x - 1 + i, b.h + 2, b.z + 1, 0.6, 2, 0.7, m.trim);
  }
  for (const b of world.buildings) facade(b, true);
  if (tier >= 3) {
    for (const t of streetTiles(world))
      add(
        (t.minX + t.maxX) / 2,
        t.height - 0.11,
        (t.minZ + t.maxZ) / 2,
        t.maxX - t.minX,
        0.22,
        t.maxZ - t.minZ,
        road,
      );
    for (const seg of world.city.roads.slice(1)) {
      const vertical = seg.x1 === seg.x2,
        length = vertical ? seg.maxZ - seg.minZ : seg.maxX - seg.minX,
        cx = (seg.minX + seg.maxX) / 2,
        cz = (seg.minZ + seg.maxZ) / 2;

      const m = materials[seg.identity];
      for (const side of [-1, 1])
        for (let t = -length / 2 + 2; t < length / 2 - 1; t += 4) {
          const x = cx + (vertical ? side * (seg.width / 2 - 0.1) : t),
            z = cz + (vertical ? t : side * (seg.width / 2 - 0.1));
          if (
            world.city.roads.some(
              (o) =>
                o !== seg &&
                x > o.minX - 0.1 &&
                x < o.maxX + 0.1 &&
                z > o.minZ - 0.1 &&
                z < o.maxZ + 0.1,
            )
          )
            continue;
          add(
            x,
            0.03,
            z,
            vertical ? 0.08 : 2.7,
            0.04,
            vertical ? 2.7 : 0.08,
            m.neon,
          );
          add(x, 0.062, z, vertical ? 0.3 : 3, 0.1, vertical ? 3 : 0.3, m.trim);
        }
      for (let t = -length / 2 + 4; t < length / 2; t += 8)
        add(
          cx + (vertical ? 0 : t),
          0.009,
          cz + (vertical ? t : 0),
          vertical ? 0.12 : 1.6,
          0.02,
          vertical ? 1.6 : 0.12,
          paper,
        );
    }
  }
  const propList = [...world.city.props];
  for (const b of world.buildings) {
    const side = Math.sign(b.x),
      x = b.x - (side * b.w) / 2 + side * 0.1;
    if (!inReservedArea(layout, x, b.z, 1))
      propList.push({
        x,
        z: b.z,
        w: 0.7,
        h: 0.7,
        d: 0.7,
        identity: "industrial",
      });
  }
  for (const p of propList) {
    const m = materials[p.identity];
    add(p.x, p.h / 2, p.z, p.w, p.h, p.d, m.trim);
    add(p.x, p.h + 0.05, p.z, p.w + 0.08, 0.1, p.d + 0.08, rust);
    for (let i = 0; i < (tier === 4 ? 7 : 3); i++)
      add(
        p.x + (i % 2) * 0.3,
        0.2,
        p.z + 0.5 + i * 0.17,
        0.25,
        0.3,
        0.3,
        trash,
        sphere,
        true,
      );
    const cover = surfacePlate(world, p.x, p.z - 0.7, 0.7, 0.7);
    if (cover)
      add(p.x, cover.position[1] + 0.002, p.z - 0.7, 0.7, 0.002, 0.7, rust);
  }
  // Surface decoration has no player collider; local heights follow its supporting plane.
  for (const patch of world.surfaceDecorations)
    for (const p of patch.parts)
      add(
        patch.position[0],
        patch.position[1] + p.position[1],
        patch.position[2],
        ...p.size,
        p.material === "rust" ? rust : wear,
        cube,
        true,
      );
  if (tier >= 2) {
    const particleGeo = new T.BufferGeometry(),
      r = random(world.config.seed + 99),
      points = new Float32Array((tier === 4 ? 180 : 70) * 3);
    for (let i = 0; i < points.length / 3; i++) {
      const seg = world.city.roads[i % world.city.roads.length];
      points.set(
        [
          seg.minX + r() * (seg.maxX - seg.minX),
          r() * 5,
          seg.minZ + r() * (seg.maxZ - seg.minZ),
        ],
        i * 3,
      );
    }
    particleGeo.setAttribute("position", new T.BufferAttribute(points, 3));
    const material = new T.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: { time: { value: 0 } },
      vertexShader: `uniform float time;varying float a;void main(){vec3 p=position;p.y+=sin(time*.18+position.x)*.12;p.x+=sin(time*.3+position.z)*.4;vec4 v=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*v;gl_PointSize=min(2.5,24./max(2.,-v.z));a=.18;}`,
      fragmentShader: `varying float a;void main(){gl_FragColor=vec4(.57,.71,.73,a*smoothstep(.5,.1,length(gl_PointCoord-.5)));}`,
    });
    scene.add(new T.Points(particleGeo, material));
    animated.push({ material });
    const r2 = random(world.config.seed + 808);
    for (const b of [...world.buildings, ...world.city.buildings].filter(
      (_, i) => i % 4 === 0,
    )) {
      const m = new T.Mesh(
        cube,
        materials[
          world.config.identity === "mixed"
            ? "industrial"
            : world.config.identity
        ].neon,
      );
      m.scale.set(0.05, 0.14, 1.2);
      m.position.set(b.x, b.h + 1, b.z);
      scene.add(m);
      animated.push({ mesh: m, phase: r2() * 6 });
    }
  }
  for (const { group, mat, geometry, items } of batch.values()) {
    const mesh = new T.InstancedMesh(geometry, mat, items.length);
    items.forEach((p, i) => {
      dummy.position.set(p[0], p[1], p[2]);
      dummy.scale.set(p[3], p[4], p[5]);
      dummy.rotation.set(0, p[6], 0);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    });
    mesh.computeBoundingSphere();
    group.add(mesh);
  }
  stats.chunks = chunks.size;
  return {
    stats,
    update(time, camera, preset) {
      road.uniforms.time.value = time;
      for (const group of chunks.values()) {
        if (!group.userData.detail) continue;
        const d = Math.hypot(
            camera.position.x - group.userData.x,
            camera.position.z - group.userData.z,
          ),
          threshold = preset.detail + 24;
        group.visible = d < threshold + (group.visible ? 8 : 0);
      }
      for (const a of animated) {
        if (a.material) a.material.uniforms.time.value = time;
        else a.mesh.visible = Math.sin(time * 1.4 + a.phase) > -0.7;
      }
    },
  };
}
