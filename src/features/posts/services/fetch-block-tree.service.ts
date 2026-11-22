import { isFullBlock } from '@notionhq/client';
import { Notion } from '@shared/lib/notion';
import type { PostBlock } from '../types';

/**
 * Fetch every child block of a page or block, following pagination and
 * recursing into nested children (columns, toggles, list items).
 * @param blockId Notion page or block id.
 * @returns The block tree in document order.
 */
export async function fetchBlockTree(blockId: string): Promise<PostBlock[]> {
  const blocks: PostBlock[] = [];
  let cursor: string | undefined;

  do {
    const response = await Notion.client.blocks.children.list({
      block_id: blockId,
      page_size: 100,
      start_cursor: cursor,
    });
    for (const result of response.results) {
      if (!isFullBlock(result)) continue;
      const children = result.has_children
        ? await fetchBlockTree(result.id)
        : [];
      blocks.push({ ...result, children });
    }
    cursor = response.has_more
      ? (response.next_cursor ?? undefined)
      : undefined;
  } while (cursor);

  return blocks;
}
