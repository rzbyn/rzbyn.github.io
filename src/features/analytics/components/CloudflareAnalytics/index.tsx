import { env } from '@shared/config/env/server.env';
import type { JSX } from 'react';

const BEACON_SRC = 'https://static.cloudflareinsights.com/beacon.min.js';

function CloudflareAnalytics(): JSX.Element | null {
  const token = env.CF_BEACON_TOKEN;
  // Empty string counts as unset; dev never loads the beacon.
  if (process.env.NODE_ENV !== 'production' || !token) return null;

  return (
    <script defer src={BEACON_SRC} data-cf-beacon={JSON.stringify({ token })} />
  );
}

export default CloudflareAnalytics;
