/**
 * Brand colors for places that can't read CSS variables, such as the
 * `ImageResponse` in `src/app/opengraph-image.tsx`.
 * Values mirror the light-scheme tokens in `src/app/globals.css`.
 */
export const BRAND_COLORS = {
  background: '#ffffff',
  foreground: '#1c1714',
  muted: '#6b5f58',
  rule: '#ede7e3',
  accent: '#a3221f',
  signature: '#8f6400',
} as const;
