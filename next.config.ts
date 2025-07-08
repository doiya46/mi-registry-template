import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  outputFileTracingIncludes: {
    registry: ['./registry/**/*'],
  },
};

export default nextConfig;
