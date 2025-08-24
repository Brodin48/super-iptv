// WordPress API configuration for IPTV Baba
const WORDPRESS_API_URL = 'https://blog.iptvbaba.com/wp-json/wp/v2'

export interface WordPressPost {
  id: number
  date: string
  modified: string
  slug: string
  status: string
  type: string
  title: { rendered: string }
  content: { rendered: string }
  excerpt: { rendered: string }
  author: number
  featured_media: number
  link: string
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
      alt_text: string
      media_details?: {
        sizes?: {
          thumbnail?: { source_url: string }
          medium?: { source_url: string }
          large?: { source_url: string }
          full?: { source_url: string }
        }
      }
    }>
    author?: Array<{
      name: string
      description: string
      avatar_urls?: {
        '24': string
        '48': string
        '96': string
      }
    }>
    'wp:term'?: Array<Array<{
      id: number
      name: string
      slug: string
      taxonomy: string
    }>>
  }
}

export interface WordPressCategory {
  id: number
  name: string
  slug: string
  description: string
  count: number
}

// Fetch WordPress posts with error handling and caching
export async function getWordPressPosts(params: {
  per_page?: number
  page?: number
  categories?: string
  search?: string
  orderby?: string
  order?: 'asc' | 'desc'
} = {}): Promise<WordPressPost[]> {
  try {
    const searchParams = new URLSearchParams({
      _embed: 'true',
      per_page: (params.per_page || 12).toString(),
      page: (params.page || 1).toString(),
      orderby: params.orderby || 'date',
      order: params.order || 'desc',
      ...(params.categories && { categories: params.categories }),
      ...(params.search && { search: params.search }),
    })

    console.log(`Fetching from: ${WORDPRESS_API_URL}/posts?${searchParams.toString()}`)

    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?${searchParams.toString()}`,
      {
        next: { revalidate: 300 }, // Revalidate every 5 minutes for fresher content
        headers: { 
          'Accept': 'application/json',
          'User-Agent': 'IPTV-Baba-Portal/1.0'
        },
      }
    )

    if (!response.ok) {
      console.error(`WordPress API error: ${response.status} from ${WORDPRESS_API_URL}`)
      console.log('Response:', await response.text())
      return []
    }

    const posts = await response.json()
    console.log(`Successfully fetched ${posts.length} posts from WordPress`)
    return posts || []
  } catch (error) {
    console.error('Error fetching WordPress posts:', error)
    // Try without timeout as fallback
    try {
      const fallbackResponse = await fetch(
        `${WORDPRESS_API_URL}/posts?_embed=true&per_page=${params.per_page || 12}`,
        { 
          cache: 'no-cache',
          headers: { 
            'Accept': 'application/json',
          }
        }
      )
      
      if (fallbackResponse.ok) {
        const posts = await fallbackResponse.json()
        console.log(`Fallback fetch successful: ${posts.length} posts`)
        return posts || []
      }
    } catch (fallbackError) {
      console.error('Fallback fetch also failed:', fallbackError)
    }
    return []
  }
}

// Fetch a single WordPress post by slug
export async function getWordPressPost(slug: string): Promise<WordPressPost | null> {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?slug=${slug}&_embed=true`,
      {
        next: { revalidate: 300 },
        headers: { 
          'Accept': 'application/json',
          'User-Agent': 'IPTV-Baba-Portal/1.0'
        },
      }
    )

    if (!response.ok) {
      console.error(`WordPress API error: ${response.status}`)
      return null
    }

    const posts = await response.json()
    return posts.length > 0 ? posts[0] : null
  } catch (error) {
    console.error('Error fetching WordPress post:', error)
    return null
  }
}

// Fetch WordPress categories
export async function getWordPressCategories(): Promise<WordPressCategory[]> {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/categories?per_page=50`,
      {
        next: { revalidate: 86400 }, // Revalidate daily
        headers: { 
          'Accept': 'application/json',
          'User-Agent': 'IPTV-Baba-Portal/1.0'
        },
      }
    )

    if (!response.ok) {
      console.error(`WordPress API error: ${response.status}`)
      return []
    }

    const categories = await response.json()
    return categories || []
  } catch (error) {
    console.error('Error fetching WordPress categories:', error)
    return []
  }
}

// Format date for display
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// Extract plain text from HTML content
export function extractPlainText(html: string, maxLength: number = 160): string {
  const text = html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text
}

// Get featured image URL with fallback
export function getFeaturedImageUrl(post: WordPressPost, size: 'thumbnail' | 'medium' | 'large' | 'full' = 'large'): string {
  const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0]
  
  if (!featuredMedia) {
    return '/images/logo.webp' // Default IPTV Baba logo
  }

  // Try to get the requested size
  const sizes = featuredMedia.media_details?.sizes
  if (sizes && sizes[size]) {
    return sizes[size].source_url
  }

  // Fallback to source_url
  return featuredMedia.source_url || '/images/logo.webp'
}

// Get post categories
export function getPostCategories(post: WordPressPost): Array<{ name: string; slug: string }> {
  const terms = post._embedded?.['wp:term']
  if (!terms) return []
  
  const categories = terms.flat().filter(term => term.taxonomy === 'category')
  return categories.map(cat => ({ name: cat.name, slug: cat.slug }))
}

// Get post tags
export function getPostTags(post: WordPressPost): Array<{ name: string; slug: string }> {
  const terms = post._embedded?.['wp:term']
  if (!terms) return []
  
  const tags = terms.flat().filter(term => term.taxonomy === 'post_tag')
  return tags.map(tag => ({ name: tag.name, slug: tag.slug }))
}
