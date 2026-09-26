import Footer from '@components/Footer';
import Header from '@components/Header';
import { geistMono, geistSans } from '@consts/geist-fonts.const';
import {
  OPEN_GRAPH_DEFAULTS,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from '@consts/site-metadata.const';
import type { Metadata } from 'next';
import type { JSX } from 'react';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: SITE_URL,
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  referrer: 'origin',
  openGraph: {
    ...OPEN_GRAPH_DEFAULTS,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en" className={`${geistMono.variable} ${geistSans.variable} `}>
      <body className="flex flex-col gap-8 font-(family-name:--font-geist-mono) antialiased max-w-5xl mb-40 mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <Header />
        <main className="flex-1 min-h-[58dvh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
