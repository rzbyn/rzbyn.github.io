export type HeadingLevel = 1 | 2 | 3;
export type HeadingTag = 'h2' | 'h3' | 'h4';
export type HeadingTags = Partial<Record<HeadingLevel, HeadingTag>>;

const TAGS: readonly HeadingTag[] = ['h2', 'h3', 'h4'];

/**
 * Maps the Notion heading levels a post uses to HTML tags. The page title is
 * the h1, so the highest level used becomes h2 and the rest follow in order
 * with no gaps.
 */
export function headingTags(levelsUsed: Iterable<HeadingLevel>): HeadingTags {
  const levels = [...new Set(levelsUsed)].sort((a, b) => a - b);
  return Object.fromEntries(levels.map((level, i) => [level, TAGS[i]]));
}
