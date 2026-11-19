import { BRAND_COLORS } from '@shared/consts/brand-colors.const';
import { OPEN_GRAPH_IMAGE } from '@shared/consts/site-metadata.const';
import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const alt = OPEN_GRAPH_IMAGE.alt;
export const size = {
  width: OPEN_GRAPH_IMAGE.width,
  height: OPEN_GRAPH_IMAGE.height,
};
export const contentType = OPEN_GRAPH_IMAGE.type;

export default function OpenGraphImage(): ImageResponse {
  return new ImageResponse(
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
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div
          style={{
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            backgroundColor: BRAND_COLORS.accent,
          }}
        />
        <span style={{ fontSize: '26px', fontWeight: 600 }}>Rzbyn</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div
          style={{
            width: '72px',
            height: '6px',
            backgroundColor: BRAND_COLORS.accent,
          }}
        />
        <span
          style={{
            fontSize: '88px',
            fontWeight: 700,
            letterSpacing: '-0.05em',
            lineHeight: 1.1,
          }}
        >
          Reza Bayuni
        </span>
        <span style={{ fontSize: '32px', color: BRAND_COLORS.muted }}>
          Software engineer · Technical lead
        </span>
      </div>

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
        <span>Jakarta, Indonesia</span>
        <span>rzbyn.com</span>
      </div>
    </div>,
    size,
  );
}
