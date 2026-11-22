import type { PostType } from '../types';
import { getPostItems } from './get-post-items';
import { postCardMeta } from './post-card-meta';

/**
 * Title and meta line for a post's OG card. Reads the post list only, so a
 * card never fetches the post's blocks or images.
 */
export async function getPostCard(
  type: PostType,
  slug: string,
): Promise<{ title: string; meta: string } | undefined> {
  const items = await getPostItems(type, '');
  const post = items.find((item) => item.slug === slug);
  if (!post) return undefined;
  return { title: post.title, meta: postCardMeta(type, post.date) };
}
