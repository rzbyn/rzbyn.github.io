export type LinkTarget =
  { kind: 'internal'; href: string } | { kind: 'external' } | { kind: 'other' };

/**
 * Classify a post link. `internal` (this host, or root-relative) carries a
 * path for next/link; `external` is http(s) to another host; `other` (hash,
 * mailto, malformed) stays a plain anchor.
 */
export function linkTarget(href: string, site: URL): LinkTarget {
  if (href.startsWith('#')) return { kind: 'other' };

  let url: URL;
  try {
    url = new URL(href, site);
  } catch {
    return { kind: 'other' };
  }

  if (url.protocol !== 'https:' && url.protocol !== 'http:') {
    return { kind: 'other' };
  }
  if (url.host !== site.host) return { kind: 'external' };
  return { kind: 'internal', href: url.pathname + url.search + url.hash };
}
