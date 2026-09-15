import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    // Album art comes from Spotify's CDN, which serves it under a per-image
    // hash — the files are immutable, so next/image only needs the host
    // allowlisted up front.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        pathname: '/image/**',
      },
    ],
  },
};

export default nextConfig;
