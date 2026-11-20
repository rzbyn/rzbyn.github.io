import { siteOgImage } from '@features/og-image';
import { OPEN_GRAPH_IMAGE } from '@shared/consts/site-metadata.const';
import type { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const alt = OPEN_GRAPH_IMAGE.alt;
export const size = {
  width: OPEN_GRAPH_IMAGE.width,
  height: OPEN_GRAPH_IMAGE.height,
};
export const contentType = OPEN_GRAPH_IMAGE.type;

export default function OpenGraphImage(): Promise<ImageResponse> {
  return siteOgImage();
}
