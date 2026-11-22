import { isFullPage, type PageObjectResponse } from '@notionhq/client';
import { fetchPosts } from '../services/fetch-posts.service';
import type { Post, PostType } from '../types';

type PageProperty = PageObjectResponse['properties'][string];

/** Joins a title or rich_text property into plain text; '' for other types or when empty. */
function plainText(property: PageProperty | undefined): string {
  if (property?.type === 'title') {
    return property.title.map((t) => t.plain_text).join('');
  }
  if (property?.type === 'rich_text') {
    return property.rich_text.map((t) => t.plain_text).join('');
  }
  return '';
}

function toPost(page: PageObjectResponse, basePath: string): Post {
  const { title, published_date, slug } = page.properties;
  const slugText = plainText(slug);

  return {
    id: page.id,
    title: plainText(title),
    date:
      published_date?.type === 'date' && published_date.date
        ? new Date(published_date.date.start)
        : new Date(),
    slug: slugText,
    fullpath: basePath + slugText,
  };
}

export async function getPostItems(
  type: PostType,
  basePath: string,
): Promise<Post[]> {
  const { results } = await fetchPosts(type);
  return results.flatMap((result) =>
    isFullPage(result) ? [toPost(result, basePath)] : [],
  );
}
