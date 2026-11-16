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
  // The underlay extends beyond all visible routes; the navigation union still bounds players.
  const e = model.envelope,
    floor = new T.Mesh(
      new T.PlaneGeometry(e.maxX - e.minX + 220, 300),
      new T.MeshStandardMaterial({
        color: "#23313b",
        roughness: 0.95,
        metalness: 0.15,
      }),
    );
  floor.rotation.x = -Math.PI / 2;
  floor.position.set((e.minX + e.maxX) / 2, -0.025, -25);
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
    update() {},
  };
}
