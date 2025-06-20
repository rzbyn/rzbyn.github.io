import { getNotionClient } from "@/app/_lib/notion";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

export async function fetchMiscs(): Promise<QueryDatabaseResponse> {
  if (!process.env.NOTION_DATABASE_ID) {
    throw new Error(
      "NOTION_DATABASE_ID is not set in the environment variables."
    )
  }
  const notion = getNotionClient()

  return notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      and: [
        {
          property: "type",
          select: {
            equals: "miscellany",
          },
        },
        {
          property: "status",
          status: {
            equals: "published",
          },
        },
        {
          property: "published_date",
          date: {
            is_not_empty: true,
          },
        },
        {
          property: "slug",
          rich_text: {
            is_not_empty: true,
          },
        },
      ],
    },
    sorts: [
      {
        property: "published_date",
        direction: "ascending",
      },
      {
        property: "title",
        direction: "ascending",
      },
    ],
  })
}