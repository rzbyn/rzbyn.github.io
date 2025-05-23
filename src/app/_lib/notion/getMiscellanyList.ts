import { isFullPage, PageObjectResponse } from "@notionhq/client";
import { getNotionPageList } from "./notion";

/**
 * Fetches a list of miscellany pages from the Notion database.
 * @returns A promise that resolves to a list of miscellany items from the Notion database.
 */
export async function getMiscellanyList() {
  const { results } = await getNotionPageList("miscellany");
  const path = "/misc/";
  return results
    .filter((result) => isFullPage(result))
    .map((result: PageObjectResponse) => ({
      id: result.id,
      title:
        result.properties.title.type === "title"
          ? result.properties.title.title[0].plain_text
          : "",
      date:
        result.properties.published_date.type === "date" &&
        result.properties.published_date.date
          ? new Date(result.properties.published_date.date.start)
          : new Date(),
      slug:
        result.properties.slug.type === "rich_text"
          ? result.properties.slug.rich_text[0].plain_text
          : "",
      fullpath:
        result.properties.slug.type === "rich_text"
          ? path + result.properties.slug.rich_text[0].plain_text
          : "",
    }));
}
