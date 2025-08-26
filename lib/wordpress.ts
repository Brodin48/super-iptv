// WordPress API configuration for Super IPTV
const WORDPRESS_API_URL = 'https://blog.super-iptv.nl/wp-json/wp/v2'

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