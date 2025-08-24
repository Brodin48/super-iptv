import { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BlogFetcher from '../../components/BlogFetcher/BlogFetcher'
import { BookOpen, TrendingUp, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'IPTV Baba Blog - Latest IPTV News, Guides & Updates',
  description: 'Stay updated with the latest IPTV news, streaming guides, setup tutorials, and expert tips from IPTV Baba.',
  keywords: 'IPTV blog, IPTV news, IPTV guides, streaming tutorials, IPTV Baba blog, IPTV tips',
  openGraph: {
    title: 'IPTV Baba Blog - Your Source for IPTV Knowledge',
    description: 'Expert guides, news, and tutorials about IPTV streaming technology.',
    images: ['/images/logo.webp'],
  }
}

export default function Blog() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-yellow-400 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              Knowledge Hub
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IPTV Baba <span className="text-yellow-400">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Your ultimate resource for IPTV guides, streaming tips, technology updates, 
              and expert insights into the world of digital entertainment.
            </p>
            
            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://blog.iptvbaba.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 text-primary-600 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                Visit Full Blog
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <Link 
                href="/the-best-iptv-subscription-a-comprehensive-review"
                className="bg-yellow-400 hover:bg-yellow-500 text-primary-800 px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
              >
                Read Our Review
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Strip */}
      <section className="bg-primary-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600">50+</div>
              <div className="text-sm text-gray-600">Expert Articles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">Weekly</div>
              <div className="text-sm text-gray-600">Fresh Content</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">10K+</div>
              <div className="text-sm text-gray-600">Happy Readers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Latest Articles from Our Blog
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with expert guides, troubleshooting tips, and the latest updates 
              in IPTV technology.
            </p>
          </div>
          
          {/* Blog Posts Component - Client Side Fetching */}
          <BlogFetcher />
          
          {/* Visit Blog CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Explore More on Our Blog
              </h3>
              <p className="text-lg mb-6">
                Discover comprehensive guides, troubleshooting tips, device setup tutorials, 
                and the latest IPTV industry news on our dedicated blog platform.
              </p>
              <a 
                href="https://blog.iptvbaba.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-primary-800 px-8 py-4 rounded-lg text-lg font-bold transition-colors"
              >
                Visit blog.iptvbaba.com
                <ExternalLink className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Browse by Category
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { name: 'Setup Guides', icon: '🛠️', color: 'bg-blue-100 text-blue-800', slug: 'setup-guides' },
              { name: 'Troubleshooting', icon: '🔧', color: 'bg-red-100 text-red-800', slug: 'troubleshooting' },
              { name: 'Reviews', icon: '⭐', color: 'bg-yellow-100 text-yellow-800', slug: 'reviews' },
              { name: 'News & Updates', icon: '📰', color: 'bg-green-100 text-green-800', slug: 'news-updates' },
              { name: 'Tips & Tricks', icon: '💡', color: 'bg-purple-100 text-purple-800', slug: 'tips-tricks' },
              { name: 'Device Guides', icon: '📱', color: 'bg-pink-100 text-pink-800', slug: 'device-guides' },
              { name: 'Streaming Tech', icon: '🎬', color: 'bg-indigo-100 text-indigo-800', slug: 'streaming-tech' },
              { name: 'FAQs', icon: '❓', color: 'bg-gray-100 text-gray-800', slug: 'faqs' },
            ].map((category, index) => (
              <a
                key={index}
                href={`https://blog.iptvbaba.com/category/${category.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`${category.color} rounded-xl p-4 text-center hover:shadow-lg transition-all hover:scale-105 block`}
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <div className="font-semibold">{category.name}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Guides Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Popular Guides & Tutorials
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link 
              href="/the-best-iptv-subscription-a-comprehensive-review"
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:scale-105 block"
            >
              <div className="flex items-start">
                <div className="bg-primary-100 rounded-lg p-3 mr-4">
                  <TrendingUp className="w-6 h-6 text-primary-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Comprehensive IPTV Review
                  </h3>
                  <p className="text-gray-600 mb-3">
                    In-depth analysis of IPTV Baba's features, performance, and value proposition.
                  </p>
                  <span className="text-primary-600 font-semibold">
                    Read Review →
                  </span>
                </div>
              </div>
            </Link>
            
            <Link 
              href="/the-best-iptv-subscription-a-guide-to-getting-the-most-out-of-your-viewing-experience"
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:scale-105 block"
            >
              <div className="flex items-start">
                <div className="bg-green-100 rounded-lg p-3 mr-4">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Maximize Your IPTV Experience
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Expert tips and optimization techniques for the best streaming quality.
                  </p>
                  <span className="text-primary-600 font-semibold">
                    Read Guide →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Never Miss an Update
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Get the latest IPTV guides, streaming tips, and exclusive offers delivered 
            directly to your WhatsApp.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://wa.link/bof0mw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center gap-2"
            >
              {/* WhatsApp Icon */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.64 15.64c-1.63 1.63-3.79 2.36-5.64 2.36-1.11 0-2.22-.26-3.24-.78L4 20l.78-4.76C4.26 14.22 4 13.11 4 12c0-1.85.73-4.01 2.36-5.64C8 4.73 10.15 4 12 4s4.01.73 5.64 2.36C19.27 8 20 10.15 20 12s-.73 4.01-2.36 5.64z"/>
              </svg>
              Join WhatsApp Updates
            </a>
            <a 
              href="https://blog.iptvbaba.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center gap-2"
            >
              Visit Blog
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
