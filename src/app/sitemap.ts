import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants/site'

const staticPages = [
  { url: '/', changeFrequency: 'weekly' as const, priority: 1.0 },
  { url: '/about', changeFrequency: 'monthly' as const, priority: 0.8 },
  { url: '/services', changeFrequency: 'weekly' as const, priority: 0.9 },
  { url: '/services/cloud-computing', changeFrequency: 'monthly' as const, priority: 0.7 },
  { url: '/services/consulting', changeFrequency: 'monthly' as const, priority: 0.7 },
  { url: '/services/cyber-security', changeFrequency: 'monthly' as const, priority: 0.7 },
  { url: '/services/hardware', changeFrequency: 'monthly' as const, priority: 0.7 },
  { url: '/services/networks', changeFrequency: 'monthly' as const, priority: 0.7 },
  { url: '/services/software', changeFrequency: 'monthly' as const, priority: 0.7 },
  { url: '/services/technical', changeFrequency: 'monthly' as const, priority: 0.7 },
  { url: '/portfolio', changeFrequency: 'monthly' as const, priority: 0.8 },
  { url: '/blog', changeFrequency: 'daily' as const, priority: 0.9 },
  { url: '/events', changeFrequency: 'weekly' as const, priority: 0.7 },
  { url: '/gallery', changeFrequency: 'weekly' as const, priority: 0.6 },
  { url: '/contact', changeFrequency: 'monthly' as const, priority: 0.8 },
  { url: '/vacancy', changeFrequency: 'weekly' as const, priority: 0.6 },
  { url: '/ticket', changeFrequency: 'monthly' as const, priority: 0.5 },
  { url: '/booking-meeting', changeFrequency: 'monthly' as const, priority: 0.5 },
  { url: '/projects', changeFrequency: 'monthly' as const, priority: 0.6 },
  { url: '/sales', changeFrequency: 'monthly' as const, priority: 0.5 },
  { url: '/privacy', changeFrequency: 'yearly' as const, priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticSitemap = staticPages.map((page) => ({
    url: `${SITE_URL}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))

  return [...staticSitemap]
}
