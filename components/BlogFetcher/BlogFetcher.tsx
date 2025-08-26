'use client'

import { useState, useEffect } from 'react'
import { Calendar, User, ArrowRight, ExternalLink, Loader2, AlertCircle } from 'lucide-react'

interface WordPressPost {
  id: number
  date: string
  link: string
  slug: string
  title: { rendered: string }
  excerpt: { rendered: string }
  content?: { rendered: string }
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
    }>
    author?: Array<{
      name: string
    }>
  }
}

export default function BlogFetcher() {
  const [posts, setPosts] = useState<WordPressPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      setLoading(true)
      setError(null)
      
      // Primary: Try to fetch from your Super IPTV blog
      let response = await fetch('https://blog.super-iptv.nl/wp-json/wp/v2/posts?_embed=true&per_page=9', {
        headers: {
          'Accept': 'application/json',
        },
      })

      // Fallback: If primary fails, try alternative blog
      if (!response.ok) {
        console.log('Primary blog unavailable, trying fallback...')
        response = await fetch('https://blog.iptvbaba.com/wp-json/wp/v2/posts?_embed=true&per_page=9', {
          headers: {
            'Accept': 'application/json',
          },
        })
      }

      if (!response.ok) {
        throw new Error(`Failed to fetch from both blog sources: ${response.status}`)
      }

      const data = await response.json()
      setPosts(data)
    } catch (err) {
      console.error('Error fetching blog posts:', err)
      setError('Unable to load blog posts. Please visit our blog directly.')
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('nl-NL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const extractPlainText = (html: string, maxLength: number = 150) => {
    const text = html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Loader2 className="w-8 h-8 text-primary-600 animate-spin mb-4" />
        <p className="text-gray-600">Loading latest articles from blog.super-iptv.nl...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 max-w-2xl mx-auto">
        <div className="flex items-start">
          <AlertCircle className="w-6 h-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Blog Content Loading Issue
            </h3>
            <p className="text-gray-600 mb-4">
              {error}
            </p>
            <div className="flex flex-wrap gap-2">
              <a 
                href="https://blog.super-iptv.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                Visit Primary Blog
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <button
                onClick={fetchPosts}
                className="inline-flex items-center bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                Retry Loading
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-600 mb-6">No articles available at the moment.</p>
        <a 
          href="https://blog.super-iptv.nl"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Visit Our Blog
          <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => {
        const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/images/logo.webp'
        const authorName = post._embedded?.author?.[0]?.name || 'Super IPTV Team'
        
        return (
          <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105">
            <div className="relative h-48 overflow-hidden">
              <img
                src={featuredImage}
                alt={post.title.rendered}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/images/logo.webp'
                }}
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  <span>{authorName}</span>
                </div>
              </div>
              
              <h3 
                className="text-xl font-bold text-gray-800 mb-3 line-clamp-2" 
                dangerouslySetInnerHTML={{ __html: post.title.rendered }} 
              />
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {extractPlainText(post.excerpt.rendered)}
              </p>
              
              <div className="flex items-center justify-between">
                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  title="View on blog"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
