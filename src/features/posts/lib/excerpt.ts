const ELLIPSIS = '…';

/**
 * Collapses whitespace and shortens text to at most `max` characters
 * (ellipsis included), cutting at the last word boundary when there is one.
 */
export function excerpt(text: string, max = 160): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;

  const cut = clean.slice(0, max - ELLIPSIS.length);
  const lastSpace = cut.lastIndexOf(' ');
  const head = lastSpace > 0 ? cut.slice(0, lastSpace) : cut;
  return head.trimEnd() + ELLIPSIS;
}
