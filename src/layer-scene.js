import { streetTiles } from "./street-surfaces.js";
import * as T from "three";
import { familyPalette } from "./city-layers.js";

// Instance colors combine compatible family materials; 48m cells avoid tiny batches.
export function buildLayers(scene, world) {
  const model = world.layers,
    box = new T.BoxGeometry(),
    cylinder = new T.CylinderGeometry(0.5, 0.5, 1, 16),
    torus = new T.TorusGeometry(0.45, 0.05, 6, 28);
  torus.rotateX(-Math.PI / 2);
  torus.computeBoundingBox();
  const sz = new T.Vector3();
  torus.boundingBox.getSize(sz);
  torus.scale(1 / sz.x, 1 / sz.y, 1 / sz.z);
  const geometry = { box, cylinder, torus },
    dummy = new T.Object3D(),
    color = new T.Color(),
    batch = new Map(),
    groups = [];
  const opaque = new T.MeshStandardMaterial({
    color: "#ffffff",
    roughness: 0.82,
    metalness: 0.28,
    emissive: "#24364a",
    emissiveIntensity: 0.3,
  });
  const glow = new T.MeshBasicMaterial({
    color: "#ffffff",
  });
  const distant = new T.MeshLambertMaterial({
    color: "#ffffff",
  });
  distant.onBeforeCompile = (shader) => {
    shader.vertexShader = shader.vertexShader.replace(
      "#include <fog_vertex>",
      "#include <fog_vertex>\nvFogDepth *= 0.55;",
    );
  };
  distant.customProgramCacheKey = () => "city-distance-fog-055";
  for (const p of [
    ...model.architecture.flatMap((a) => a.parts),
    ...model.parts,
  ]) {
    const cell = p.distant
      ? "sky"
      : `${Math.floor(p.position[0] / 48)},${Math.floor(p.position[2] / 48)}`;
    const kind = p.kind || "box",
      appearance = p.distant ? "distant" : p.glow ? "glow" : "opaque",
      key = `${cell}:${kind}:${appearance}`;
    if (!batch.has(key))
      batch.set(key, {
        parts: [],
        material:
          appearance === "distant"
            ? distant
            : appearance === "glow"
              ? glow
              : opaque,
        geometry: geometry[kind],
      });
    batch.get(key).parts.push(p);
  }
  let instances = 0;
  for (const [key, b] of batch) {
    const mesh = new T.InstancedMesh(b.geometry, b.material, b.parts.length);
    mesh.name = "city-layers:" + key;
    b.parts.forEach((p, i) => {
      dummy.position.fromArray(p.position);
      dummy.scale.fromArray(p.size);
      dummy.rotation.set(...(p.rotation || [0, 0, 0]));
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
      color.set(familyPalette[p.family][p.tone]);
      if (p.distant) color.lerp(new T.Color("#18263b"), p.glow ? 0.65 : 0.48);
      else if (p.glow) color.multiplyScalar(1.05);
      mesh.setColorAt(i, color);
    });
    mesh.userData.parts = b.parts.map((p) => p.id);
    mesh.computeBoundingSphere();
    scene.add(mesh);
    groups.push(mesh);
    instances += b.parts.length;
  }
  // These exact cells are the physical site's permitted ground, not a background underlay.
  const groundMaterial = new T.ShaderMaterial({
    uniforms: { time: { value: 0 } },
    vertexShader: `varying vec3 wp;void main(){wp=(modelMatrix*instanceMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(wp,1.);}`,
    fragmentShader: `varying vec3 wp;uniform float time;float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}void main(){vec2 p=wp.xz;float noise=hash(floor(p*vec2(24.,48.)));float wet=.3+noise*.5;float ripple=.85+.15*sin(p.y*14.+sin(p.x*3.)+time*1.5);vec3 c=vec3(.028,.043,.06);float amber=exp(-pow((p.x+39.)*.22,2.))*exp(-abs(p.y+37.)*.035);float violet=exp(-pow((p.x-31.)*.3,2.))*exp(-abs(p.y+34.)*.04);float green=exp(-pow((p.y+57.)*.4,2.));float pink=exp(-pow((p.y+28.)*.35,2.));c+=(amber*vec3(.28,.13,.025)+violet*vec3(.08,.08,.25)+green*vec3(.055,.12,.07)+pink*vec3(.16,.025,.1))*wet*ripple;float f=1.-exp(-pow(length(cameraPosition-wp)*.025,2.));gl_FragColor=vec4(mix(c,vec3(.025,.038,.075),f),1.);}`,
  });
  const tiles = streetTiles(world),
    floor = new T.InstancedMesh(box, groundMaterial, tiles.length);
  tiles.forEach((t, i) => {
    dummy.position.set(
      (t.minX + t.maxX) / 2,
      t.height - 0.06,
      (t.minZ + t.maxZ) / 2,
    );
    dummy.rotation.set(0, 0, 0);
    dummy.scale.set(t.maxX - t.minX, 0.12, t.maxZ - t.minZ);
    dummy.updateMatrix();
    floor.setMatrixAt(i, dummy.matrix);
  });
  floor.name = "paved-site";
  floor.userData.surfaceTiles = tiles;
  floor.computeBoundingSphere();
  scene.add(floor);
  if (model.labels.length) {
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext("2d"),
      positions = [],
      uvs = [],
      indices = [];
    model.labels.forEach((l, i) => {
      const y = i * 128;
      ctx.fillStyle = "#101b22";
      ctx.fillRect(0, y, 1024, 128);
      ctx.strokeStyle = familyPalette[l.family][3];
      ctx.lineWidth = 4;
      ctx.strokeRect(8, y + 8, 1008, 112);
      ctx.fillStyle = familyPalette[l.family][3];
      ctx.font = "bold 58px monospace";
      ctx.textAlign = "center";
      ctx.fillText(l.text, 512, y + 82);
      dummy.position.fromArray(l.position);
      dummy.rotation.set(0, l.yaw, 0);
      dummy.scale.set(l.width, l.height, 1);
      dummy.updateMatrix();
      for (const p of [
        [-0.5, -0.5, 0],
        [0.5, -0.5, 0],
        [0.5, 0.5, 0],
        [-0.5, 0.5, 0],
      ]) {
        const v = new T.Vector3(...p).applyMatrix4(dummy.matrix);
        positions.push(v.x, v.y, v.z);
      }
      const bottom = 1 - (i + 1) / 4,
        top = 1 - i / 4;
      uvs.push(0, bottom, 1, bottom, 1, top, 0, top);
      indices.push(i * 4, i * 4 + 1, i * 4 + 2, i * 4, i * 4 + 2, i * 4 + 3);
    });
    const g = new T.BufferGeometry();
    g.setAttribute("position", new T.Float32BufferAttribute(positions, 3));
    g.setAttribute("uv", new T.Float32BufferAttribute(uvs, 2));
    g.setIndex(indices);
    g.computeVertexNormals();
    const texture = new T.CanvasTexture(canvas);
    texture.colorSpace = T.SRGBColorSpace;
    scene.add(
      new T.Mesh(
        g,
        new T.MeshBasicMaterial({ map: texture, side: T.DoubleSide }),
      ),
    );
  }
  return {
    stats: { instances, batches: batch.size, skyline: model.skyline.length },
    update(time) {
      groundMaterial.uniforms.time.value = time;
    },
  };
}
