// .ts extensions so node --test can load this module's imports directly.
import { POST_IMAGE_MAX_WIDTH } from '../consts/post-image.const.ts';
import type { ImageOutputFormat } from './image-output-format.ts';

/**
 * Whether a downloaded image is served byte-for-byte instead of re-encoded:
 * SVGs always, GIFs when already narrow enough (re-encoding would only drop
 * their frame-difference compression). Photos are always re-encoded, which
 * strips EXIF.
 */
export function shouldCopyImage(
  format: ImageOutputFormat,
  width: number,
): boolean {
  if (format === 'svg') return true;
  return format === 'gif' && width <= POST_IMAGE_MAX_WIDTH;
}
