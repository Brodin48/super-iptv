import { MetadataRoute } from 'next'

// Function to fetch WordPress posts from your blog for sitemap
async function getWordPressPosts() {
  try {
    // Primary: Try to fetch from your Super IPTV blog
    let response = await fetch('https://blog.super-iptv.nl/wp-json/wp/v2/posts?per_page=100', {
      next: { revalidate: 86400 } // Revalidate daily
    })

    // Fallback: If primary fails, try alternative blog (for backwards compatibility)
    if (!response.ok) {
      console.log('Primary blog unavailable, trying fallback for sitemap...')
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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getWordPressPosts()
  const baseUrl = 'https://super-iptv.nl'
  
  // Core pages - highest priority (conversion-focused)
  const corePages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/free-trial`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    }
  ]

  // Blog pages - high priority for content & SEO
  const blogPages = [
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/flix-iptv-complete-guide`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }
  ]

  // Service/activation pages - high priority
  const servicePages = [
    {
      url: `${baseUrl}/flix-iptv-activation-smart-tv`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ibo-iptv`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/flix-iptv`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/flix-iptv-1`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/duplex-iptv-activation`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }
  ]

  // Subscription/product pages - high priority
  const productPages = [
    {
      url: `${baseUrl}/aroma-iptv-subscription-for-12-months`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/bob-iptv-subscription-for-12-months-premium-package-3-months-free`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/falcon-iptv-subscription-for-12-months-supports-2-devices`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/multi-connections`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }
  ]

  // App download pages - medium-high priority
  const appPages = [
    {
      url: `${baseUrl}/apps/Windows_IPTV_Player_3.0.exe`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/apps/IpFoxTVSetup.exe`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }
  ]

  // Business pages - medium priority
  const businessPages = [
    {
      url: `${baseUrl}/iptv-reseller`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }
  ]

  // Legal pages - lower priority
  const legalPages = [
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    }
  ]

  // Dynamic blog post pages from WordPress
  const dynamicBlogPages = posts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.modified || post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Combine all pages in priority order
  return [
    ...corePages,
    ...blogPages,
    ...servicePages,
    ...productPages,
    ...appPages,
    ...businessPages,
    ...legalPages,
    ...dynamicBlogPages
  ]
}
