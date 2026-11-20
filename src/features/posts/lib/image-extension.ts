const EXTENSIONS: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/gif': 'gif',
  'image/webp': 'webp',
  'image/avif': 'avif',
  'image/svg+xml': 'svg',
};

/** File extension for an image Content-Type header; throws if it isn't a known image type. */
export function imageExtension(contentType: string | null): string {
  const mime = contentType?.split(';')[0].trim().toLowerCase() ?? '';
  const extension = EXTENSIONS[mime];
  if (!extension) {
    throw new Error(`Unsupported image content type "${contentType}"`);
  }
  return extension;
}
