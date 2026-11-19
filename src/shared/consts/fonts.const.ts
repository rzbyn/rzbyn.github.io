import { Archivo, Geist_Mono, Literata } from 'next/font/google';

/** Wordmark, display and UI. The wdth axis powers the `stretch-wide` utility. */
export const archivo = Archivo({
  variable: '--font-archivo',
  subsets: ['latin'],
  axes: ['wdth'],
});

/** Prose. */
export const literata = Literata({
  variable: '--font-literata',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['opsz'],
});

/** Code only, so it isn't preloaded on pages without code. */
export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  preload: false,
});
