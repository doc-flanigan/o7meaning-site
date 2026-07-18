/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // www → apex redirect is handled by Vercel's Domains config — do not add a duplicate rule here.
  async redirects() {
    return [
      {
        // vercel.app alias served a full indexable duplicate (network-wide
        // GSC duplicate-canonical fix, 2026-07-18). Exact match keeps
        // preview URLs working.
        source: '/:path*',
        has: [{ type: 'host', value: 'o7meaning-site.vercel.app' }],
        destination: 'https://o7meaning.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
