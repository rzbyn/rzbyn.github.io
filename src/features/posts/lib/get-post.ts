import type { RichTextItemResponse } from '@notionhq/client';
import { SITE_DESCRIPTION } from '@shared/consts/site-metadata.const';
import { cache } from 'react';
import { SUPPORTED_BLOCK_TYPE_SET } from '../consts/supported-blocks.const';
import { downloadImage } from '../services/download-image.service';
import { fetchBlockTree } from '../services/fetch-block-tree.service';
import type { PostBlock, PostDetail, PostType } from '../types';
import { excerpt } from './excerpt';
import { findUnsupportedBlock } from './find-unsupported-block';
import { getPostItems } from './get-post-items';
import { headingTags, type HeadingLevel } from './heading-tags';

/** Depth-first walk over a block tree, in document order. */
function* walk(blocks: PostBlock[]): Generator<PostBlock> {
  for (const block of blocks) {
    yield block;
    yield* walk(block.children);
  }
}

function plainText(text: RichTextItemResponse[]): string {
  return text.map((t) => t.plain_text).join('');
}

function headingLevel(block: PostBlock): HeadingLevel | undefined {
  if (block.type === 'heading_1') return 1;
  if (block.type === 'heading_2') return 2;
  if (block.type === 'heading_3') return 3;
  return undefined;
}

/** Download every image in the tree, one at a time, and attach the local copy. */
async function attachImages(blocks: PostBlock[], slug: string): Promise<void> {
  for (const block of walk(blocks)) {
    if (block.type !== 'image') continue;
    const source = block.image;
    const url =
      source.type === 'file'
        ? source.file.url
        : source.type === 'external'
          ? source.external.url
          : undefined;
    if (!url) {
      throw new Error(
        `Unsupported image source in block ${block.id} in post "${slug}"`,
      );
    }
    block.asset = await downloadImage(url, block.id, slug);
  }
}

function describe(blocks: PostBlock[]): string {
  for (const block of walk(blocks)) {
    if (block.type !== 'paragraph') continue;
    const text = plainText(block.paragraph.rich_text).trim();
    if (text) return excerpt(text);
  }
  return SITE_DESCRIPTION;
}

/**
 * Load one published post by type and slug, with its block tree, local image
 * copies, heading map and description. Throws, failing the build, on a block
 * type the renderer doesn't support.
 */
export const getPost = cache(
  async (type: PostType, slug: string): Promise<PostDetail | undefined> => {
    const items = await getPostItems(type, '');
    const post = items.find((item) => item.slug === slug);
    if (!post) return undefined;

    const blocks = await fetchBlockTree(post.id);

    const unsupported = findUnsupportedBlock(blocks, SUPPORTED_BLOCK_TYPE_SET);
    if (unsupported) {
      throw new Error(
        `Unsupported Notion block "${unsupported.type}" in post "${slug}". Add support in src/features/posts or remove the block.`,
      );
    }

    await attachImages(blocks, slug);

    const levels = [...walk(blocks)].flatMap((block) => {
      const level = headingLevel(block);
      return level ? [level] : [];
    });

    return {
      post,
      blocks,
      headings: headingTags(levels),
      description: describe(blocks),
    };
  },
);

/**
 * Placeholder slug for a type with no published posts. `output: 'export'`
 * rejects an empty `generateStaticParams`; this slug matches no post, so its
 * page renders the not-found view (noindex).
 */
const EMPTY_PLACEHOLDER_SLUG = '_';

/** Slugs of every published post of a type, for `generateStaticParams`. */
export async function getPostSlugs(
  type: PostType,
): Promise<Array<{ slug: string }>> {
  const items = await getPostItems(type, '');
  if (items.length === 0) return [{ slug: EMPTY_PLACEHOLDER_SLUG }];
  return items.map(({ slug }) => ({ slug }));
}
