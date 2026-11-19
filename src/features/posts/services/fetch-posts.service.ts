import type { QueryDataSourceResponse } from '@notionhq/client';
import { env } from '@shared/config/env/server.env';
import { Notion } from '@shared/lib/notion';
import type { PostType } from '../types';

/**
 * Fetch published posts of the given type from notion
 * @param type Notion `type` select value.
 * @returns Notion data source query response.
 **/
export async function fetchPosts(
  type: PostType,
): Promise<QueryDataSourceResponse> {
  const notion = Notion.client;

  return notion.dataSources.query({
    data_source_id: env.NOTION_DATASOURCE_ID,
    filter: {
      and: [
        {
          property: 'type',
          select: {
            equals: type,
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
