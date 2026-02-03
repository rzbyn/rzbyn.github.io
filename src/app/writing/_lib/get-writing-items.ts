import { isFullPage } from '@notionhq/client';
import { fetchWritings } from '../../../services/fetch-writing-list.service';

export async function getWritingItems() {
  const notionPayload = await fetchWritings();
  const { results } = notionPayload;
  const path = '/writing/';
  return (results as any[]).reduce<
    Array<{
      id: string;
      title: string;
      date: Date;
      slug: string;
      fullpath: string;
    }>
  >((acc, result) => {
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
            ? path + result.properties.slug.rich_text[0].plain_text
            : '',
      },
    ];
  }, []);
}
