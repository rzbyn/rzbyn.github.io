/**
 * Brand colors for places that can't read CSS variables, such as the
 * `ImageResponse` in `src/app/opengraph-image.tsx`.
 * `accent` mirrors the light `--accent` token in `src/app/globals.css`.
 */
export const BRAND_COLORS = {
  background: '#ffffff',
  foreground: '#111827',
  accent: '#3b82f6',
  muted: '#475569',
  subtle: '#64748b',
  border: '#e5e7eb',
} as const;
