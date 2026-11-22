/**
 * Notion block types the post renderer handles. A published post using any
 * other type fails the build, so content is never dropped silently.
 * `NotionBlocks` is type-checked against this list: adding a type here
 * without a renderer case is a compile error.
 */
export const SUPPORTED_BLOCK_TYPES = [
  'paragraph',
  'heading_1',
  'heading_2',
  'heading_3',
  'column_list',
  'column',
  'callout',
  'code',
  'bulleted_list_item',
  'numbered_list_item',
  'quote',
  'toggle',
  'image',
  'divider',
] as const;

export type SupportedBlockType = (typeof SUPPORTED_BLOCK_TYPES)[number];

export const SUPPORTED_BLOCK_TYPE_SET: ReadonlySet<string> = new Set(
  SUPPORTED_BLOCK_TYPES,
);
