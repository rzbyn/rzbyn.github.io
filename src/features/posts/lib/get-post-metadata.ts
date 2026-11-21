import {
  OPEN_GRAPH_DEFAULTS,
  SITE_NAME,
} from '@shared/consts/site-metadata.const';
import type { Metadata } from 'next';
import type { PostType } from '../types';
import { getPost } from './get-post';

// The site defaults minus `images`: an explicit image here would override
// each post's own opengraph-image file.
const ARTICLE_OPEN_GRAPH = {
  siteName: OPEN_GRAPH_DEFAULTS.siteName,
  locale: OPEN_GRAPH_DEFAULTS.locale,
};

/**
 * Page metadata for a post: its title, first-paragraph description, canonical
 * URL and Open Graph article fields.
 * @param basePath Route prefix with slashes, e.g. `/log/`.
 */
export async function getPostMetadata(
  type: PostType,
  slug: string,
  basePath: string,
): Promise<Metadata> {
  const detail = await getPost(type, slug);
  if (!detail) return {};

  const { post, description } = detail;
  const url = `${basePath}${slug}/`;

  return {
    title: post.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      ...ARTICLE_OPEN_GRAPH,
      type: 'article',
      title: `${post.title} | ${SITE_NAME}`,
      description,
      url,
      publishedTime: post.date.toISOString(),
    },
  };
}
