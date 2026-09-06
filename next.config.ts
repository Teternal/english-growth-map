import type { NextConfig } from 'next';

const nextConfig: NextConfig = process.env.ENGLISH_STATIC_EXPORT === '1'
  // This single-page export is mounted by GitHub at the repository subpath.
  // Keep prerendering at /; vinext currently skips it when basePath is set.
  ? { output: 'export', assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '' }
  : {};

export default nextConfig;
