import { Footer, Header, Navbar } from '@features/layout';
import { archivo, geistMono, literata } from '@shared/consts/fonts.const';
import {
  OPEN_GRAPH_DEFAULTS,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from '@shared/consts/site-metadata.const';
import type { Metadata, Viewport } from 'next';
import type { JSX } from 'react';
import jsonLd from '@shared/lib/json-ld';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: SITE_URL,
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  referrer: 'origin-when-cross-origin',
  openGraph: {
    ...OPEN_GRAPH_DEFAULTS,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#11121b' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${literata.variable} ${geistMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          // biome-ignore lint:security/noDangerouslySetInnerHtml
          dangerouslySetInnerHTML={{
            __html: jsonLd({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Reza Bayuni',
              url: 'https://rzbyn.com',
              jobTitle: 'Tech Lead',
              worksFor: {
                '@type': 'Organization',
                name: 'Datasintesa',
                url: 'https://datasintesa.id/',
              },
              email: 'hi@rzbyn.com',
              sameAs: [
                'https://www.github.com/rzbyn',
                'https://www.linkedin.com/in/rezabayuni',
              ],
            }),
          }}
        />
      </head>
      <body className="grid grid-cols-1 gap-y-6 font-sans antialiased max-w-5xl mx-4 mt-8 mb-40 md:grid-cols-[200px_minmax(0,1fr)] md:gap-y-0 md:mt-20 lg:mt-32 lg:mx-auto">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-background focus:text-foreground focus:px-3 focus:py-2 focus:underline"
        >
          Skip to main content
        </a>
        <Header />
        <Navbar />
        {/* tabIndex -1: focus target for the skip link only, not a control */}
        <main
          id="main-content"
          tabIndex={-1}
          className="min-h-[58dvh] focus:outline-none md:col-start-2"
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
