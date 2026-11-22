export type ImageOutputFormat = 'webp' | 'gif' | 'svg';

const FORMATS: Record<string, ImageOutputFormat> = {
  'image/jpeg': 'webp',
  'image/png': 'webp',
  'image/webp': 'webp',
  'image/avif': 'webp',
  'image/gif': 'gif',
  'image/svg+xml': 'svg',
};

/**
 * Output format, and file extension, for a downloaded image: photos are
 * re-encoded as WebP, GIFs stay GIF so they keep animating, SVGs are copied
 * as is. Throws if the Content-Type isn't a known image type.
 */
export function imageOutputFormat(
  contentType: string | null,
): ImageOutputFormat {
  const mime = contentType?.split(';')[0].trim().toLowerCase() ?? '';
  const format = FORMATS[mime];
  if (!format) {
    throw new Error(`Unsupported image content type "${contentType}"`);
  }
  return format;
}
