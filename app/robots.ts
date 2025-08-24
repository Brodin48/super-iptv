import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'],
    },
    sitemap: [
      'https://sa-iptv.io/sitemap.xml',
      'https://sa-iptv.io/sitemap-pages.xml',
      'https://sa-iptv.io/sitemap-posts.xml',
      'https://sa-iptv.io/sitemap_index.xml'
    ],
  }
}
