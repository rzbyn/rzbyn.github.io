import { isFullPage } from '@notionhq/client';
import { fetchPosts } from '../services/fetch-posts.service';
import type { Post, PostType } from '../types';

export async function getPostItems(
  type: PostType,
  basePath: string,
): Promise<Post[]> {
  const notionPayload = await fetchPosts(type);
  const { results } = notionPayload;
  return (results as any[]).reduce<Post[]>((acc, result) => {
    if (!isFullPage(result)) return acc;

    return [
      ...acc,
      {
        id: result.id,
        title:
          result.properties.title.type === 'title'
            ? result.properties.title.title[0].plain_text
            : '',
        date:
          result.properties.published_date.type === 'date' &&
          result.properties.published_date.date
            ? new Date(result.properties.published_date.date.start)
            : new Date(),
        slug:
          result.properties.slug.type === 'rich_text'
            ? result.properties.slug.rich_text[0].plain_text
            : '',
        fullpath:
          result.properties.slug.type === 'rich_text'
            ? basePath + result.properties.slug.rich_text[0].plain_text
            : '',
      },
    ];
  }, []);
}
