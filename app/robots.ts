import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/', '/_next/', '/api/'],
    },
    sitemap: [
      'https://super-iptv.nl/sitemap.xml',
      'https://super-iptv.nl/sitemap-pages.xml',
      'https://super-iptv.nl/sitemap-posts.xml',
      'https://super-iptv.nl/sitemap_index.xml'
    ],
    host: 'https://super-iptv.nl'
  }
}
