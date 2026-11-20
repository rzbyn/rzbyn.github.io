import { Mark } from '@features/layout';
import { BRAND_COLORS } from '@shared/consts/brand-colors.const';
import type { JSX, ReactNode } from 'react';
import { OG_FONT } from '../../lib/load-og-fonts';

interface OgCardProps {
  /** Show "REZA BAYUNI" next to the mark, like the site header. */
  wordmark?: boolean;
  /** The headline block, between the top row and the footer. */
  children: ReactNode;
  /** Muted footer text, left and right. */
  footer: readonly [left: string, right: string];
}

/**
 * The frame every OG card shares, in the site's light theme: mark on top,
 * headline in the middle, a ruled footer. Satori markup, so inline styles and
 * explicit `display: flex` only.
 */
function OgCard({ wordmark, children, footer }: OgCardProps): JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        padding: '80px',
        backgroundColor: BRAND_COLORS.background,
        color: BRAND_COLORS.foreground,
        fontFamily: OG_FONT.text,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Mark width={56} height={56} fill={BRAND_COLORS.accent} />
        {wordmark && (
          <span
            style={{
              fontFamily: OG_FONT.wordmark,
              fontSize: '30px',
              letterSpacing: '0.06em',
            }}
          >
            REZA BAYUNI
          </span>
        )}
      </div>

      {children}

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          paddingTop: '24px',
          borderTop: `1px solid ${BRAND_COLORS.rule}`,
          fontSize: '22px',
          color: BRAND_COLORS.muted,
        }}
      >
        <span>{footer[0]}</span>
        <span>{footer[1]}</span>
      </div>
    </div>
  );
}

export default OgCard;
