import { mkdir, rename, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { imageSize } from 'image-size';
import { imageExtension } from '../lib/image-extension';
import type { ImageAsset } from '../types';

const PUBLIC_SUBDIR = 'notion';

/**
 * Download a post image into `public/notion/` so the static export serves its
 * own copy (Notion file URLs expire about an hour after each fetch).
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

  let extension = '';
  try {
    extension = imageExtension(response.headers.get('content-type'));
  } catch (error) {
    fail(reasonOf(error));
  }

  const buffer = new Uint8Array(await response.arrayBuffer());
  let width = 0;
  let height = 0;
  try {
    ({ width, height } = imageSize(buffer));
  } catch (error) {
    fail(`cannot read image size (${reasonOf(error)})`);
  }

  const fileName = `${blockId}.${extension}`;
  const dir = path.join(process.cwd(), 'public', PUBLIC_SUBDIR);
  const target = path.join(dir, fileName);
  const temp = `${target}.${process.pid}.tmp`;

  await mkdir(dir, { recursive: true });
  // Write then rename, so a parallel prerender worker never reads half a file.
  await writeFile(temp, buffer);
  await rename(temp, target);

  return { src: `/${PUBLIC_SUBDIR}/${fileName}`, width, height };
}
