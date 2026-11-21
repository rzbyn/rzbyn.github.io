import { getPostCard, getPostSlugs } from '@features/posts';
import { postOgImage, siteOgImage } from '@features/og-image';
import {
  OPEN_GRAPH_IMAGE,
  SITE_NAME,
} from '@shared/consts/site-metadata.const';
import type { ImageResponse } from 'next/og';

const TYPE = 'log';

interface LogPostImageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = 'force-static';
export const alt = `Post title card | ${SITE_NAME}`;
export const size = {
  width: OPEN_GRAPH_IMAGE.width,
  height: OPEN_GRAPH_IMAGE.height,
};
export const contentType = OPEN_GRAPH_IMAGE.type;

export function generateStaticParams(): Promise<Array<{ slug: string }>> {
  return getPostSlugs(TYPE);
}

/** The post's title card; the empty-section placeholder gets the site card. */
export default async function LogPostImage({
  params,
}: LogPostImageProps): Promise<ImageResponse> {
  const { slug } = await params;
  const card = await getPostCard(TYPE, slug);
  return card ? postOgImage(card) : siteOgImage();
}
