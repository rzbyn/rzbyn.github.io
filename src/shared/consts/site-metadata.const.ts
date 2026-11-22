import type { Metadata } from 'next';

export const SITE_URL = new URL('https://rzbyn.com');
export const SITE_NAME = 'Reza Bayuni' as const;
export const SITE_DESCRIPTION = "Reza Bayuni's personal website" as const;

export const OPEN_GRAPH_IMAGE = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: 'Reza Bayuni personal website',
  type: 'image/png',
} as const;

export const OPEN_GRAPH_DEFAULTS = {
  siteName: SITE_NAME,
  locale: 'en_US',
  type: 'website',
  images: [OPEN_GRAPH_IMAGE],
} satisfies NonNullable<Metadata['openGraph']>;
