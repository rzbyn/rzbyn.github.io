import Footer from '@components/Footer';
import Header from '@components/Header';
import type { Metadata } from 'next';
import type { JSX } from 'react';
import { geistMono, geistSans } from '../consts/geist-fonts.const';
import './globals.css';

export const metadata: Metadata = {
  title: 'Reza Bayuni',
  description: "Reza Bayuni's personal website.",
  applicationName: "Reza Bayuni's peronal website.",
  authors: [{ name: 'Reza Bayuni', url: 'https://rzbyn.com' }],
  generator: 'Next.js',
  keywords: ['reza bayuni', 'abe'],
  referrer: 'origin',
  creator: 'Reza Bayuni',
  publisher: 'Reza Bayuni',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://rzbyn.com',
    languages: {},
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en" className={`${geistMono.variable} ${geistSans.variable} `}>
      <body className="font-[family-name:var(--font-geist-mono)] antialiased max-w-4xl mb-40 md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
