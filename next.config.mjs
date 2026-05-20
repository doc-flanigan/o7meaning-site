/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.o7meaning.com' }],
        destination: 'https://o7meaning.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
