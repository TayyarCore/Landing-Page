import type { MetadataRoute } from 'next'

const siteUrl = 'https://tayyar.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date('2026-08-05T00:00:00.000Z'),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
