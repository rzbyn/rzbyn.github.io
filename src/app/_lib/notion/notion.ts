import { Client } from "@notionhq/client";

let notionClient: Client | null = null;

/**
 * Create a Notion client instance.
 * @returns Notion client instance.
 */
export function getNotionClient(): Client {
  if (!process.env.NOTION_API_KEY) {
    throw new Error("NOTION_API_KEY is not set in the environment variables.");
  }

  if (notionClient) return notionClient;

  try {
    notionClient = new Client({ auth: process.env.NOTION_API_KEY });
    return notionClient;
  } catch (error) {
    console.error("Failed to create Notion client:", error);
    throw new Error(
      "Failed to create Notion client. Please check your API key."
    );
  }
}
