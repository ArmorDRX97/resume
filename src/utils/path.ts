export function withBase(path: string) {
  if (!path.startsWith('/')) return path;
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${path.slice(1)}`.replace(/\/{2,}/g, '/');
}
