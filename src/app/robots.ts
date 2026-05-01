import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/in-gaming' },
    sitemap: 'https://o7meaning.com/sitemap.xml',
  }
}
