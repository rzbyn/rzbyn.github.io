import type { BlockObjectResponse } from '@notionhq/client';
import type { HeadingTags } from './lib/heading-tags';

/** Notion `type` select value used to split posts. */
export type PostType = 'log' | 'etc';

export interface Post {
  id: string;
  title: string;
  date: Date;
  slug: string;
  fullpath: string;
}

/** An image downloaded at build time and served from the site. */
export interface ImageAsset {
  src: string;
  width: number;
  height: number;
}

/**
 * A Notion block with its children fetched. Image blocks get `asset`, their
 * local copy (`image` is taken by Notion's own field).
 */
export type PostBlock = BlockObjectResponse & {
  children: PostBlock[];
  asset?: ImageAsset;
};

export interface PostDetail {
  post: Post;
  blocks: PostBlock[];
  headings: HeadingTags;
  description: string;
}
