import type { BlockObjectResponse } from '@notionhq/client';
import type { HeadingTags } from './lib/heading-tags';

/** Notion `type` select value used to split posts. */
export type PostType = 'writing' | 'miscellany';

export interface Post {
  id: string;
  title: string;
  date: Date;
  slug: string;
  fullpath: string;
}

/** A Notion block with its children fetched. */
export type PostBlock = BlockObjectResponse & {
  children: PostBlock[];
};

export interface PostDetail {
  post: Post;
  blocks: PostBlock[];
  headings: HeadingTags;
  description: string;
}
