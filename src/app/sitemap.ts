import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://o7meaning.com'
  return [
    { url: base,                      lastModified: new Date('2026-05-10'), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/in-star-citizen`, lastModified: new Date('2026-05-10'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/faq`,             lastModified: new Date('2026-05-10'), changeFrequency: 'monthly', priority: 0.7 },
  ]
}
