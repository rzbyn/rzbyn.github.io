// .ts extensions so node --test can load this module's imports directly.
import { POST_SECTION_LABEL } from '../consts/post-section-label.const.ts';
import type { PostType } from '../types.ts';
import { formatPostDate } from './format-post-date.ts';

/** OG card meta line for a post, e.g. "Log · 22 May 2025". */
export function postCardMeta(type: PostType, date: Date): string {
  return `${POST_SECTION_LABEL[type]} · ${formatPostDate(date)}`;
}
