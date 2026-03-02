import type { NextConfig } from 'next';
import '@configs/env/server.env';
import '@configs/env/client.env';

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
