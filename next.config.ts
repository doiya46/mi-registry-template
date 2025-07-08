import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/mi-registry-template',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  outputFileTracingIncludes: {
    registry: ['./registry/**/*'],
  },
};

export default nextConfig;
