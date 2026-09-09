import type { NextConfig } from 'next';
// Static HTML can run on GitHub Pages without a server.
const nextConfig: NextConfig = { output: 'export', trailingSlash: true, images: { unoptimized: true } };
export default nextConfig;
