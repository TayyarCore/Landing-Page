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
    {
      url: `${siteUrl}/privacy`,
      lastModified: new Date('2026-09-20T00:00:00.000Z'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: new Date('2026-09-20T00:00:00.000Z'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${siteUrl}/data-deletion`,
      lastModified: new Date('2026-09-20T00:00:00.000Z'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
