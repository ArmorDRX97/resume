import * as THREE from 'three';

const canvas = document.querySelector<HTMLCanvasElement>('[data-hero-scene]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (canvas && !reduceMotion) {
  const isContactTheme = canvas.dataset.waveTheme === 'contact';
  const pointColor = isContactTheme ? 0xf0abfc : 0x7ee7ff;
  const lineColor = isContactTheme ? 0x8b5cf6 : 0x20d4f6;
  const glowColor = isContactTheme ? 0xfb7185 : 0xa3e635;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(52, 1, 0.1, 100);
  camera.position.set(0, 3.15, 8.2);
  camera.lookAt(0, -0.55, 0);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const group = new THREE.Group();
  group.rotation.x = -0.68;
  group.position.y = -1.35;
  scene.add(group);

  const columns = 98;
  const rows = 38;
  const width = 32;
  const depth = 12;
  const pointCount = columns * rows;
  const basePositions = new Float32Array(pointCount * 3);
  const pointPositions = new Float32Array(pointCount * 3);

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < columns; col += 1) {
      const index = row * columns + col;
      const x = (col / (columns - 1) - 0.5) * width;
      const y = (row / (rows - 1) - 0.5) * depth;
      basePositions[index * 3] = x;
      basePositions[index * 3 + 1] = y;
      basePositions[index * 3 + 2] = 0;
      pointPositions[index * 3] = x;
      pointPositions[index * 3 + 1] = y;
      pointPositions[index * 3 + 2] = 0;
    }
  }

  const pointsGeometry = new THREE.BufferGeometry();
  pointsGeometry.setAttribute('position', new THREE.BufferAttribute(pointPositions, 3));
  const points = new THREE.Points(
    pointsGeometry,
    new THREE.PointsMaterial({
      color: pointColor,
      size: 0.048,
      transparent: true,
      opacity: 0.78,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
    }),
  );
  group.add(points);

  const diagonalCount = (columns - 1) * (rows - 1);
  const segmentCount = (columns - 1) * rows + (rows - 1) * columns + diagonalCount;
  const linePositions = new Float32Array(segmentCount * 2 * 3);
  const linesGeometry = new THREE.BufferGeometry();
  linesGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
  const lines = new THREE.LineSegments(
    linesGeometry,
    new THREE.LineBasicMaterial({
      color: lineColor,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
    }),
  );
  group.add(lines);

  const glowGeometry = new THREE.BufferGeometry();
  const glowPositions = new Float32Array(columns * 3);
  glowGeometry.setAttribute('position', new THREE.BufferAttribute(glowPositions, 3));
  const glowLine = new THREE.Line(
    glowGeometry,
    new THREE.LineBasicMaterial({
      color: glowColor,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending,
    }),
  );
  group.add(glowLine);

  const pointer = new THREE.Vector2();
  const target = new THREE.Vector2();

  const resize = () => {
    const parent = canvas.parentElement;
    const viewportWidth = Math.max(parent?.clientWidth ?? canvas.clientWidth, 320);
    const viewportHeight = Math.max(parent?.clientHeight ?? canvas.clientHeight, 420);
    renderer.setSize(viewportWidth, viewportHeight, false);
    camera.aspect = viewportWidth / viewportHeight;
    camera.updateProjectionMatrix();
  };

  const onPointerMove = (event: PointerEvent) => {
    target.x = (event.clientX / window.innerWidth - 0.5) * 2;
    target.y = -(event.clientY / window.innerHeight - 0.5) * 2;
  };

  window.addEventListener('resize', resize);
  window.addEventListener('pointermove', onPointerMove);
  resize();

  const updateLines = () => {
    const positions = pointsGeometry.attributes.position.array as Float32Array;
    let offset = 0;
    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < columns - 1; col += 1) {
        const a = row * columns + col;
        const b = a + 1;
        linePositions.set(positions.subarray(a * 3, a * 3 + 3), offset);
        linePositions.set(positions.subarray(b * 3, b * 3 + 3), offset + 3);
        offset += 6;
      }
    }
    for (let row = 0; row < rows - 1; row += 1) {
      for (let col = 0; col < columns; col += 1) {
        const a = row * columns + col;
        const b = a + columns;
        linePositions.set(positions.subarray(a * 3, a * 3 + 3), offset);
        linePositions.set(positions.subarray(b * 3, b * 3 + 3), offset + 3);
        offset += 6;
      }
    }
    for (let row = 0; row < rows - 1; row += 1) {
      for (let col = 0; col < columns - 1; col += 1) {
        const a = row * columns + col;
        const b = a + columns + 1;
        linePositions.set(positions.subarray(a * 3, a * 3 + 3), offset);
        linePositions.set(positions.subarray(b * 3, b * 3 + 3), offset + 3);
        offset += 6;
      }
    }
    linesGeometry.attributes.position.needsUpdate = true;
  };

  const clock = new THREE.Clock();

  renderer.setAnimationLoop(() => {
    const elapsed = clock.getElapsedTime();
    pointer.lerp(target, 0.052);

    for (let index = 0; index < pointCount; index += 1) {
      const x = basePositions[index * 3];
      const y = basePositions[index * 3 + 1];
      const distance = Math.hypot(x - pointer.x * 4.5, y - pointer.y * 2.8);
      pointPositions[index * 3] = x + pointer.x * 0.16;
      pointPositions[index * 3 + 1] = y;
      pointPositions[index * 3 + 2] =
        Math.sin(x * 0.62 + elapsed * 0.82) * 0.62 +
        Math.cos(y * 1.05 + elapsed * 0.68) * 0.34 +
        Math.sin(distance * 1.35 - elapsed * 1.35) * 0.26;
    }

    pointsGeometry.attributes.position.needsUpdate = true;
    updateLines();

    const positions = pointsGeometry.attributes.position.array as Float32Array;
    const centerRow = Math.floor(rows * 0.52);
    for (let col = 0; col < columns; col += 1) {
      const source = centerRow * columns + col;
      glowPositions[col * 3] = positions[source * 3];
      glowPositions[col * 3 + 1] = positions[source * 3 + 1] + 0.04;
      glowPositions[col * 3 + 2] = positions[source * 3 + 2] + 0.08;
    }
    glowGeometry.attributes.position.needsUpdate = true;

    group.rotation.z = pointer.x * 0.035;
    group.position.x = pointer.x * 0.24;
    group.position.y = -1.42 + pointer.y * 0.1;

    renderer.render(scene, camera);
  });
}
