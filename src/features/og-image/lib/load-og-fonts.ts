import { readFile } from 'node:fs/promises';
import path from 'node:path';
import type { ImageResponse } from 'next/og';

type OgFonts = NonNullable<
  NonNullable<ConstructorParameters<typeof ImageResponse>[1]>['fonts']
>;

/** Family names the OG card styles refer to. */
export const OG_FONT = {
  wordmark: 'Archivo Wordmark',
  heading: 'Archivo Heading',
  text: 'Archivo',
} as const;

const FONT_DIR = path.join(process.cwd(), 'src/features/og-image/assets/fonts');

/*
 * Satori can't use variable fonts, so these are static instances of the
 * site's Archivo, Latin subset, made from Google Fonts' Archivo[wdth,wght].ttf
 * (OFL, see OFL.txt) with fontTools:
 *
 *   fonttools varLib.instancer Archivo[wdth,wght].ttf wdth=125 wght=800 -o inst.ttf
 *   pyftsubset inst.ttf --layout-features='*' --output-file=Archivo-Expanded-ExtraBold.ttf \
 *     --unicodes="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD"
 *
 * Likewise wdth=125 wght=650 (Archivo-Expanded-Heading.ttf) and wdth=100
 * wght=400 (Archivo-Regular.ttf). Each instance gets its own family name,
 * because Satori only accepts weights in steps of 100.
 */
const FONT_FILES = [
  {
    name: OG_FONT.wordmark,
    file: 'Archivo-Expanded-ExtraBold.ttf',
    weight: 800,
  },
  { name: OG_FONT.heading, file: 'Archivo-Expanded-Heading.ttf', weight: 600 },
  { name: OG_FONT.text, file: 'Archivo-Regular.ttf', weight: 400 },
] as const;

let fonts: Promise<OgFonts> | undefined;

/** Font data for `ImageResponse`, read once per build worker. */
export function loadOgFonts(): Promise<OgFonts> {
  fonts ??= Promise.all(
    FONT_FILES.map(async ({ name, file, weight }) => ({
      name,
      weight,
      style: 'normal' as const,
      data: await readFile(path.join(FONT_DIR, file)),
    })),
  );
  return fonts;
}
