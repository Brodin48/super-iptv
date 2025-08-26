import { MetadataRoute } from 'next'

// Function to fetch WordPress posts for sitemap
async function getWordPressPosts() {
  try {
    const response = await fetch('https://blog.sa-iptv.io/wp-json/wp/v2/posts?per_page=100', {
      next: { revalidate: 86400 } // Revalidate daily
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch posts')
    }
    
    return await response.json()
  } catch (error) {
    console.error('Error fetching WordPress posts for sitemap:', error)
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getWordPressPosts()
  
  // Static pages
  const staticPages = [
    {
      url: 'https://sa-iptv.io',
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: 'https://sa-iptv.io/about',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://sa-iptv.io/blog',
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: 'https://sa-iptv.io/pricing',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: 'https://sa-iptv.io/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://sa-iptv.io/privacy-policy',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: 'https://sa-iptv.io/flix-iptv-activation-smart-tv',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://sa-iptv.io/ibo-iptv',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://sa-iptv.io/duplex-iptv-activation',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://sa-iptv.io/apps/Windows_IPTV_Player_3.0.exe',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://sa-iptv.io/apps/IpFoxTVSetup.exe',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://sa-iptv.io/blog/flix-iptv-complete-guide',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
  ]

  // Dynamic blog post pages
  const blogPages = posts.map((post: any) => ({
    url: `https://sa-iptv.io/blog/${post.slug}`,
    lastModified: new Date(post.modified),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...blogPages]
}
