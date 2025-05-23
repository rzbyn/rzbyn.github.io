import { Client } from "@notionhq/client";
import {
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";

/**
 * Create a Notion client instance.
 * @returns Notion client instance.
 */
function getNotionClient(): Client {
  if (!process.env.NOTION_API_KEY) {
    throw new Error("NOTION_API_KEY is not set in the environment variables.");
  }

  try {
    return new Client({ auth: process.env.NOTION_API_KEY });
  } catch (error) {
    console.error("Failed to create Notion client:", error);
    throw new Error(
      "Failed to create Notion client. Please check your API key."
    );
  }
}

/**
 * Fetches a list of pages from the Notion database based on the specified type.
 * @param type The type of content to query fromo Notion CMS database.
 * @returns {Promise<QueryDatabaseResponse>} A promise that resolves to the query response from the Notion database.
 */
export function getNotionPageList(
  type: "writing" | "miscellany"
): Promise<QueryDatabaseResponse> {
  if (!process.env.NOTION_DATABASE_ID) {
    throw new Error(
      "NOTION_DATABASE_ID is not set in the environment variables."
    );
  }
  const notion = getNotionClient();

  return notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID ?? "",
    filter: {
      and: [
        {
          property: "type",
          select: {
            equals: type,
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
  });
}
