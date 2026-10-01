/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // SUNSET 2026-10-01: site retired per the October domain review
    // (docs/seo/kill-review-2026-10.md — 0 referral clicks since Jul 6,
    // 0 Google clicks ever, AI-bot fetches down 85%). The whole domain
    // (every path and host, incl. the vercel.app alias) now 301s to the
    // hub's glossary entry for o7.
    return [
      {
        source: '/:path*',
        destination: 'https://dayonecitizen.com/glossary#term-o7',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
