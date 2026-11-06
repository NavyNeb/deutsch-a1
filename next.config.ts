import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    // The games hub became the Practice hub (/practice); the review queue moved to /practice/review.
    return [{ source: '/games', destination: '/practice', permanent: false }];
  },
  async headers() {
    return [
      {
        // The worker must never be served stale, or installed apps can't pick up updates.
        source: '/sw.js',
        headers: [
          { key: 'Content-Type', value: 'application/javascript; charset=utf-8' },
          { key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' },
        ],
      },
    ];
  },
};

export default nextConfig;
