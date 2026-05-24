/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // www → apex redirect is handled by Vercel's Domains config — do not add a duplicate rule here.
};

export default nextConfig;
