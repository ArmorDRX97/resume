const canvas = document.querySelector<HTMLCanvasElement>('[data-hero-scene]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (canvas && !reduceMotion) {
  const context = canvas.getContext('2d', { alpha: true });
  let width = 0;
  let height = 0;
  let pixelRatio = 1;
  let frame = 0;
  let pointerX = 0;
  let pointerY = 0;
  let targetX = 0;
  let targetY = 0;

  const resize = () => {
    const parent = canvas.parentElement;
    width = Math.max(parent?.clientWidth ?? window.innerWidth, 320);
    height = Math.max(parent?.clientHeight ?? window.innerHeight, 520);
    pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context?.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  };

  const onPointerMove = (event: PointerEvent) => {
    targetX = event.clientX / Math.max(window.innerWidth, 1) - 0.5;
    targetY = event.clientY / Math.max(window.innerHeight, 1) - 0.5;
  };

  const draw = (timestamp: number) => {
    if (!context) return;
    const time = timestamp * 0.00042;
    pointerX += (targetX - pointerX) * 0.035;
    pointerY += (targetY - pointerY) * 0.035;
    context.clearRect(0, 0, width, height);

    const columns = width < 640 ? 22 : 40;
    const rows = width < 640 ? 22 : 28;
    const points: { x: number; y: number }[][] = [];
    const horizon = height * 0.08;
    const fieldHeight = height * 0.96;

    for (let row = 0; row < rows; row += 1) {
      const rowPoints: { x: number; y: number }[] = [];
      const depth = row / (rows - 1);
      const perspective = 0.7 + depth * 0.65;
      for (let column = 0; column < columns; column += 1) {
        const progress = column / (columns - 1);
        const baseX = (progress - 0.5) * width * perspective + width * 0.5;
        const baseY = horizon + depth * fieldHeight;
        const wave =
          Math.sin(progress * 11 + time * 2.1) * (16 + depth * 12) +
          Math.cos(depth * 8.5 - time * 1.6) * (9 + depth * 10) +
          Math.sin((progress + depth) * 12 - time * 2.8) * 5;
        rowPoints.push({
          x: baseX + pointerX * 22 * depth,
          y: baseY + wave + pointerY * 14 * depth,
        });
      }
      points.push(rowPoints);
    }

    context.lineWidth = 0.8;
    context.strokeStyle = 'rgba(67, 211, 238, 0.18)';
    for (const row of points) {
      context.beginPath();
      row.forEach((point, index) => index === 0 ? context.moveTo(point.x, point.y) : context.lineTo(point.x, point.y));
      context.stroke();
    }
    for (let column = 0; column < columns; column += 1) {
      context.beginPath();
      points.forEach((row, index) => index === 0 ? context.moveTo(row[column].x, row[column].y) : context.lineTo(row[column].x, row[column].y));
      context.stroke();
    }

    context.fillStyle = 'rgba(126, 231, 255, 0.55)';
    for (let row = 0; row < rows; row += 2) {
      for (let column = 0; column < columns; column += 2) {
        const point = points[row][column];
        context.beginPath();
        context.arc(point.x, point.y, 1.1, 0, Math.PI * 2);
        context.fill();
      }
    }

    const highlightRow = points[Math.floor(rows * 0.52)];
    const gradient = context.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, 'rgba(79, 140, 255, 0)');
    gradient.addColorStop(0.48, 'rgba(32, 212, 246, 0.42)');
    gradient.addColorStop(1, 'rgba(163, 230, 53, 0)');
    context.strokeStyle = gradient;
    context.lineWidth = 1.4;
    context.beginPath();
    highlightRow.forEach((point, index) => index === 0 ? context.moveTo(point.x, point.y) : context.lineTo(point.x, point.y));
    context.stroke();

    frame = window.requestAnimationFrame(draw);
  };

  const updateVisibility = () => {
    window.cancelAnimationFrame(frame);
    if (!document.hidden) frame = window.requestAnimationFrame(draw);
  };

  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('pointermove', onPointerMove, { passive: true });
  document.addEventListener('visibilitychange', updateVisibility);
  resize();
  frame = window.requestAnimationFrame(draw);
}

