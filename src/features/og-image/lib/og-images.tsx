import { BRAND_COLORS } from '@shared/consts/brand-colors.const';
import { OPEN_GRAPH_IMAGE } from '@shared/consts/site-metadata.const';
import { ImageResponse } from 'next/og';
import OgCard from '../components/OgCard';
import { loadOgFonts, OG_FONT } from './load-og-fonts';

const SIZE = { width: OPEN_GRAPH_IMAGE.width, height: OPEN_GRAPH_IMAGE.height };
const DOMAIN = 'rzbyn.com';

/** The site-wide card: name, role and location. */
export async function siteOgImage(): Promise<ImageResponse> {
  return new ImageResponse(
    <OgCard footer={['Jakarta, Indonesia', DOMAIN]}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <span
          style={{
            fontFamily: OG_FONT.wordmark,
            fontSize: '88px',
            letterSpacing: '0.06em',
            lineHeight: 1.1,
          }}
        >
          REZA BAYUNI
        </span>
        <span style={{ fontSize: '32px', color: BRAND_COLORS.muted }}>
          Software engineer • Technical lead
        </span>
      </div>
    </OgCard>,
    { ...SIZE, fonts: await loadOgFonts() },
  );
}

interface PostCard {
  title: string;
  /** Section and date, e.g. "Log · 22 May 2025". */
  meta: string;
}

/** A post's card: wordmark, the title as headline (3 lines at most), meta. */
export async function postOgImage({
  title,
  meta,
}: PostCard): Promise<ImageResponse> {
  return new ImageResponse(
    <OgCard wordmark footer={[meta, DOMAIN]}>
      <div
        style={{
          display: 'block',
          lineClamp: 3,
          fontFamily: OG_FONT.heading,
          fontSize: '64px',
          lineHeight: 1.15,
          // Long identifiers wrap instead of running off the card.
          wordBreak: 'break-word',
        }}
      >
        {title}
      </div>
    </OgCard>,
    { ...SIZE, fonts: await loadOgFonts() },
  );
}
