import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://super-iptv.nl'
  
  const staticPages = [
    // Core pages - highest priority
    {
      url: baseUrl,
      changefreq: 'daily',
      priority: '1.0'
    },
    {
      url: `${baseUrl}/pricing`,
      changefreq: 'weekly',
      priority: '0.9'
    },
    {
      url: `${baseUrl}/free-trial`,
      changefreq: 'daily',
      priority: '0.9'
    },
    {
      url: `${baseUrl}/blog`,
      changefreq: 'daily',
      priority: '0.9'
    },
    // Service pages
    {
      url: `${baseUrl}/flix-iptv-activation-smart-tv`,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/ibo-iptv`,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/flix-iptv`,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/flix-iptv-1`,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/duplex-iptv-activation`,
      changefreq: 'monthly',
      priority: '0.8'
    },
    // Subscription pages
    {
      url: `${baseUrl}/aroma-iptv-subscription-for-12-months`,
      changefreq: 'weekly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/bob-iptv-subscription-for-12-months-premium-package-3-months-free`,
      changefreq: 'weekly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/falcon-iptv-subscription-for-12-months-supports-2-devices`,
      changefreq: 'weekly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/multi-connections`,
      changefreq: 'weekly',
      priority: '0.8'
    },
    // App pages
    {
      url: `${baseUrl}/apps/Windows_IPTV_Player_3.0.exe`,
      changefreq: 'monthly',
      priority: '0.7'
    },
    {
      url: `${baseUrl}/apps/IpFoxTVSetup.exe`,
      changefreq: 'monthly',
      priority: '0.7'
    },
    // Business pages
    {
      url: `${baseUrl}/iptv-reseller`,
      changefreq: 'monthly',
      priority: '0.7'
    },
    {
      url: `${baseUrl}/about`,
      changefreq: 'monthly',
      priority: '0.7'
    },
    {
      url: `${baseUrl}/contact`,
      changefreq: 'monthly',
      priority: '0.7'
    },
    // Legal pages
    {
      url: `${baseUrl}/privacy-policy`,
      changefreq: 'yearly',
      priority: '0.3'
    }
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map(page => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
