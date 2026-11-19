/** Notion `type` select value used to split posts. */
export type PostType = 'writing' | 'miscellany';

export interface Post {
  id: string;
  title: string;
  date: Date;
  slug: string;
  fullpath: string;
}
