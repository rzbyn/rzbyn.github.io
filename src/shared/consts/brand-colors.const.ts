/**
 * Brand colors for places that can't read CSS variables, such as the
 * `ImageResponse` in `src/app/opengraph-image.tsx`.
 * Values mirror the light-scheme tokens in `src/app/globals.css`.
 */
export const BRAND_COLORS = {
  background: '#ffffff',
  foreground: '#1b1c28',
  muted: '#5c5f74',
  rule: '#e7e8ef',
  accent: '#3b3fb6',
} as const;
