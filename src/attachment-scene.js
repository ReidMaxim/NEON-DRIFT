import * as T from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { localToWorld } from "./assemblies.js";
import { random } from "./random.js";
function normalizeGeometry(g) {
  g.computeBoundingBox();
  const size = new T.Vector3(),
    center = new T.Vector3();
  g.boundingBox.getSize(size);
  g.boundingBox.getCenter(center);
  g.translate(-center.x, -center.y, -center.z);
  g.scale(1 / size.x, 1 / size.y, 1 / size.z);
  return g;
}
export function buildAttachments(scene, world) {
  const model = world.attachments,
    batches = new Map(),
    rotors = [],
    dummy = new T.Object3D(),
    rootMatrix = new T.Matrix4(),
    partMatrix = new T.Matrix4();
  const metal = new T.MeshStandardMaterial({
      color: "#53646a",
      roughness: 0.73,
      metalness: 0.5,
      emissive: "#26343b",
      emissiveIntensity: 0.25,
    }),
    dark = new T.MeshStandardMaterial({ color: "#09151a", roughness: 0.85 }),
    brass = new T.MeshStandardMaterial({
      color: "#9cab9b",
      roughness: 0.65,
      metalness: 0.5,
      emissive: "#4d5a54",
      emissiveIntensity: 0.18,
    }),
    light = new T.MeshBasicMaterial({
      color: new T.Color("#ffb55b").multiplyScalar(2.6),
    }),
    faulty = new T.MeshBasicMaterial({ color: "#72c8bc" }),
    cableMaterial = new T.MeshStandardMaterial({
      color: "#15222b",
      roughness: 0.8,
    });
  const blades = [];
  for (let i = 0; i < 4; i++) {
    const g = new T.BoxGeometry(0.28, 0.1, 0.035);
    g.translate(0.23, 0, 0);
    g.rotateZ((i * Math.PI) / 2 + 0.13);
    blades.push(g);
  }
  const hub = new T.CylinderGeometry(0.09, 0.09, 0.05, 10);
  hub.rotateX(Math.PI / 2);
  blades.push(hub);
  const rotorGeometry = normalizeGeometry(mergeGeometries(blades));
  for (const g of blades) g.dispose();
  const geometry = {
    box: new T.BoxGeometry(),
    ring: normalizeGeometry(new T.TorusGeometry(0.5, 0.06, 6, 20)),
    rotor: rotorGeometry,
  };
  const materials = { metal, dark, brass, light };
  function batch(g, material, matrix, metadata) {
    const key = g.uuid + material.uuid;
    if (!batches.has(key))
      batches.set(key, { g, material, matrices: [], metadata: [] });
    batches.get(key).matrices.push(matrix.clone());
    batches.get(key).metadata.push(metadata);
  }
  function addAssembly(assembly) {
    const root = new T.Group();
    root.name = assembly.id;
    root.userData = {
      attachment: true,
      type: assembly.type,
      hostId: assembly.hostId,
    };
    root.position.fromArray(assembly.position);
    root.rotation.y = assembly.yaw;
    root.updateMatrix();
    rootMatrix.copy(root.matrix);
    scene.add(root);
    for (const part of assembly.parts) {
      const material =
        assembly.faulty && part.material === "light"
          ? faulty
          : materials[part.material];
      if (part.kind === "rotor") {
        const rotor = new T.Mesh(geometry.rotor, material);
        rotor.name = part.id;
        rotor.position.fromArray(part.position);
        rotor.scale.fromArray(part.size);
        root.add(rotor);
        rotors.push({
          mesh: rotor,
          phase: assembly.phase,
          speed: assembly.speed,
        });
      } else {
        dummy.position.fromArray(part.position);
        dummy.rotation.set(0, 0, 0);
        dummy.scale.fromArray(part.size);
        dummy.updateMatrix();
        partMatrix.multiplyMatrices(rootMatrix, dummy.matrix);
        batch(geometry[part.kind], material, partMatrix, {
          assembly: assembly.id,
          part: part.id,
        });
      }
    }
  }
  for (const assembly of [...model.fans, ...model.vents, ...model.lamps])
    addAssembly(assembly);
  for (const cable of model.cables) {
    const curve = new T.QuadraticBezierCurve3(
      ...cable.points.map((p) => new T.Vector3(...p)),
    );
    const mesh = new T.Mesh(
      new T.TubeGeometry(curve, 20, 0.027, 5, false),
      cableMaterial,
    );
    mesh.name = cable.id;
    mesh.userData = {
      attachment: true,
      type: "cable",
      hosts: cable.anchors.map((a) => a.hostId),
    };
    scene.add(mesh);
    for (const [i, a] of cable.anchors.entries()) {
      dummy.position.fromArray(a.mountPosition);
      dummy.rotation.set(0, a.yaw, 0);
      dummy.scale.set(0.26, 0.26, 0.1);
      dummy.position.add(
        new T.Vector3(Math.sin(a.yaw) * 0.05, 0, Math.cos(a.yaw) * 0.05),
      );
      dummy.updateMatrix();
      batch(geometry.box, metal, dummy.matrix, {
        assembly: cable.id,
        part: `wall-mount-${i}`,
      });
      dummy.position.fromArray(a.mountPosition);
      dummy.position.add(
        new T.Vector3(Math.sin(a.yaw) * 0.16, 0, Math.cos(a.yaw) * 0.16),
      );
      dummy.scale.set(0.14, 0.14, 0.18);
      dummy.updateMatrix();
      batch(geometry.box, brass, dummy.matrix, {
        assembly: cable.id,
        part: `insulator-${i}`,
      });
    }
  }
  for (const { g, material, matrices, metadata } of batches.values()) {
    const mesh = new T.InstancedMesh(g, material, matrices.length);
    mesh.name = "attachment-parts";
    mesh.userData = { attachment: true, instances: metadata };
    matrices.forEach((m, i) => mesh.setMatrixAt(i, m));
    mesh.computeBoundingSphere();
    scene.add(mesh);
  }
  const n = model.vents.length * 18,
    positions = new Float32Array(n * 3),
    launch = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const source = model.vents[i % model.vents.length],
      r = random(source.seed + Math.floor(i / model.vents.length) * 7919),
      p = localToWorld(source, source.emitter.position),
      offset = localToWorld({ ...source, position: [0, 0, 0] }, [
        (r() - 0.5) * source.emitter.spread[0] * 2,
        0,
        (r() - 0.5) * source.emitter.spread[1] * 2,
      ]);
    positions.set(p, i * 3);
    launch.set(
      i < model.vents.length ? [0, -1, 0] : [offset[0], r(), offset[2]],
      i * 3,
    );
  }
  const steamGeometry = new T.BufferGeometry();
  steamGeometry.setAttribute("position", new T.BufferAttribute(positions, 3));
  steamGeometry.setAttribute("launch", new T.BufferAttribute(launch, 3));
  const steamMaterial = new T.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: { time: { value: 0 } },
    vertexShader: `uniform float time;attribute vec3 launch;varying float a;void main(){bool base=launch.y<0.;float phase=base?0.:fract(launch.y+time*.14);vec3 p=position;p.x+=launch.x*(.25+phase*.5)+sin(time*.35+launch.y*6.28)*phase*.1;p.z+=launch.z*(.25+phase*.5);p.y+=phase*2.;vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=min(80.,260.*(.12+phase*.8)/max(1.,-mv.z));a=base?.06:(1.-phase)*.105;}`,
    fragmentShader: `varying float a;void main(){float d=length(gl_PointCoord-.5);gl_FragColor=vec4(.52,.66,.69,a*smoothstep(.5,.08,d));}`,
  });
  const steam = new T.Points(steamGeometry, steamMaterial);
  steam.name = "source-bound-steam";
  steam.userData = {
    attachment: true,
    sources: model.vents.map((v) => ({
      id: v.id,
      origin: localToWorld(v, v.emitter.position),
    })),
  };
  steam.frustumCulled = false;
  scene.add(steam);
  return {
    update(time, preset) {
      for (const r of rotors) r.mesh.rotation.z = r.phase + time * r.speed;
      steamMaterial.uniforms.time.value = time;
      steamGeometry.setDrawRange(
        0,
        preset.bloom ? n : Math.min(n, model.vents.length * 6),
      );
      faulty.color
        .setRGB(0.45, 0.78, 0.72)
        .multiplyScalar(Math.sin(time * 1.7) > -0.94 ? 1 : 0.12);
    },
  };
}
