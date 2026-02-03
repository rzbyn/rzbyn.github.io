import { Client } from '@notionhq/client';

export class Notion {
  private constructor() {}

  private static _client: Client | null = null;

  /**
   * Get the Notion client instance (Singleton).
   * @returns Notion client instance.
   */
  public static get client(): Client {
    if (this._client) return this._client;

    if (!process.env.NOTION_API_KEY) {
      throw new Error(
        'NOTION_API_KEY is not set in the environment variables.',
      );
    }

    try {
      this._client = new Client({ auth: process.env.NOTION_API_KEY });
      return this._client;
    } catch (error) {
      console.error('Failed to create Notion client:', error);
      throw new Error(
        'Failed to create Notion client. Please check your API key.',
      );
    }
  }
}
