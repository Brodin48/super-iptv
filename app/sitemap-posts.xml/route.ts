import { NextResponse } from 'next/server'

// Function to fetch WordPress posts for sitemap from blog.super-iptv.nl
async function getWordPressPosts() {
  try {
    // Primary: Try to fetch from your Super IPTV blog
    let response = await fetch('https://blog.super-iptv.nl/wp-json/wp/v2/posts?per_page=100', {
      next: { revalidate: 86400 } // Revalidate daily
    })

    // Fallback: If primary fails, try alternative blog
    if (!response.ok) {
      console.log('Primary blog unavailable for sitemap, trying fallback...')
      response = await fetch('https://blog.iptvbaba.com/wp-json/wp/v2/posts?per_page=100', {
        next: { revalidate: 86400 }
      })
    }
    
    if (!response.ok) {
      throw new Error('Failed to fetch posts from both blog sources')
    }
    
    return await response.json()
  } catch (error) {
    console.error('Error fetching WordPress posts for sitemap:', error)
    return []
  }
}

export async function GET() {
  const posts = await getWordPressPosts()
  const baseUrl = 'https://super-iptv.nl'

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${posts.map((post: any) => `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${new Date(post.modified || post.date).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`).join('')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
