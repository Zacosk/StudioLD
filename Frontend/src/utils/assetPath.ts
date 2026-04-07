export function assetPath(src: string): string {
  return `${import.meta.env.BASE_URL}${src.replace(/^\//, '')}`;
}