import { mkdir, rename, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { POST_IMAGE_MAX_WIDTH } from '../consts/post-image.const';
import {
  imageOutputFormat,
  type ImageOutputFormat,
} from '../lib/image-output-format';
import { resizedSize } from '../lib/resized-size';
import { shouldCopyImage } from '../lib/should-copy-image';
import type { ImageAsset } from '../types';

const PUBLIC_SUBDIR = 'notion';
const WEBP_QUALITY = 80;

interface ProcessedImage {
  data: Uint8Array;
  width: number;
  height: number;
}

/**
 * Shrink and re-encode an image. sharp drops EXIF by default, which also
 * removes any GPS location from photos. SVGs, and GIFs already narrow enough,
 * are copied unchanged.
 */
async function processImage(
  input: Uint8Array,
  format: ImageOutputFormat,
): Promise<ProcessedImage> {
  // `animated` keeps every frame of a GIF or animated WebP. The pixel limit
  // counts all frames, so it is off: inputs are the author's own post images.
  const options = { animated: true, limitInputPixels: false } as const;

  const metadata = await sharp(input, options).metadata();
  if (shouldCopyImage(format, metadata.width)) {
    return { data: input, ...resizedSize(metadata) };
  }

  const pipeline = sharp(input, options)
    .rotate()
    .resize({ width: POST_IMAGE_MAX_WIDTH, withoutEnlargement: true });
  const encoded =
    format === 'gif'
      ? pipeline.gif()
      : pipeline.webp({ quality: WEBP_QUALITY });
  const { data, info } = await encoded.toBuffer({ resolveWithObject: true });
  return { data, ...resizedSize(info) };
}

/**
 * Download a post image into `public/notion/`, resized and compressed, so the
 * static export serves its own copy (Notion file URLs expire about an hour
 * after each fetch).
 * @param url Notion file or external image URL.
 * @param blockId Image block id, used as the stable file name.
 * @param slug Post slug, named in error messages.
 */
export async function downloadImage(
  url: string,
  blockId: string,
  slug: string,
): Promise<ImageAsset> {
  const fail = (reason: string): never => {
    throw new Error(
      `Image download failed for block ${blockId} in post "${slug}": ${reason}`,
    );
  };
  const reasonOf = (error: unknown): string =>
    error instanceof Error ? error.message : String(error);

  const response = await fetch(url).catch((error: unknown) =>
    fail(reasonOf(error)),
  );
  if (!response.ok) fail(`HTTP ${response.status}`);

  let format: ImageOutputFormat = 'webp';
  try {
    format = imageOutputFormat(response.headers.get('content-type'));
  } catch (error) {
    fail(reasonOf(error));
  }

  const input = new Uint8Array(await response.arrayBuffer());
  const image = await processImage(input, format).catch((error: unknown) =>
    fail(`cannot process image (${reasonOf(error)})`),
  );

  const fileName = `${blockId}.${format}`;
  const dir = path.join(process.cwd(), 'public', PUBLIC_SUBDIR);
  const target = path.join(dir, fileName);
  const temp = `${target}.${process.pid}.tmp`;

  await mkdir(dir, { recursive: true });
  // Write then rename, so a parallel prerender worker never reads half a file.
  await writeFile(temp, image.data);
  await rename(temp, target);

  return {
    src: `/${PUBLIC_SUBDIR}/${fileName}`,
    width: image.width,
    height: image.height,
  };
}
