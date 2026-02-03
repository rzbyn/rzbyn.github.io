import { Notion } from '@/libs/notion';

/**
 * Fetch writing posts from notion
 * @returns {Promise<any>} Notion database response.
 **/
export async function fetchWritings(): Promise<any> {
  if (!process.env.NOTION_DATASOURCE_ID) {
    throw new Error(
      'NOTION_DATASOURCE_ID is not set in the environment variables.',
    );
  }
  const notion = Notion.client;

  return notion.dataSources.query({
    data_source_id: process.env.NOTION_DATASOURCE_ID,
    filter: {
      and: [
        {
          property: 'type',
          select: {
            equals: 'writing',
          },
        },
        {
          property: 'status',
          status: {
            equals: 'published',
          },
        },
        {
          property: 'published_date',
          date: {
            is_not_empty: true,
          },
        },
        {
          property: 'slug',
          rich_text: {
            is_not_empty: true,
          },
        },
      ],
    },
    sorts: [
      {
        property: 'published_date',
        direction: 'descending',
      },
      {
        property: 'title',
        direction: 'ascending',
      },
    ],
  });
}
