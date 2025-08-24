'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Optimized Logo with Next.js Image */}
          <div className="flex items-center">
            <div className="h-12 sm:h-14 lg:h-16 flex items-center relative">
              <img 
                src="/images/logo.webp" 
                alt="Super-IPTV Logo" 
                width="200"
                height="60"
                className="h-full w-auto object-contain"
                onError={(e) => {
                  console.log('Logo failed to load, switching to fallback');
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const container = target.parentElement;
                  if (container) {
                    container.innerHTML = `
                      <div class="h-full flex items-center">
                        <svg width="200" height="60" viewBox="0 0 200 60" class="h-full w-auto">
                          <rect width="200" height="60" fill="#DC2626" rx="8"/>
                          <text x="100" y="35" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="white">
                            Super-IPTV
                          </text>
                        </svg>
                      </div>
                    `;
                  }
                }}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            <a href="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Home
            </a>
            <a href="/about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              About
            </a>
            <a href="/blog" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Blog
            </a>
            <a href="#features" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Features
            </a>
            <a href="/pricing" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Pricing
            </a>
            <a href="/multi-connections" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Multi-Device
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Reviews
            </a>
            <a href="/contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:block">
            <button className="bg-primary-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-semibold text-sm sm:text-base">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t bg-white">
            <nav className="flex flex-col space-y-3">
              <a href="/" className="text-gray-700 hover:text-primary-600 font-medium py-2 px-2 rounded transition-colors">
                Home
              </a>
              <a href="/about" className="text-gray-700 hover:text-primary-600 font-medium py-2 px-2 rounded transition-colors">
                About
              </a>
              <a href="/blog" className="text-gray-700 hover:text-primary-600 font-medium py-2 px-2 rounded transition-colors">
                Blog
              </a>
              <a href="#features" className="text-gray-700 hover:text-primary-600 font-medium py-2 px-2 rounded transition-colors">
                Features
              </a>
              <a href="/pricing" className="text-gray-700 hover:text-primary-600 font-medium py-2 px-2 rounded transition-colors">
                Pricing
              </a>
              <a href="/multi-connections" className="text-gray-700 hover:text-primary-600 font-medium py-2 px-2 rounded transition-colors">
                Multi-Device
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-primary-600 font-medium py-2 px-2 rounded transition-colors">
                Reviews
              </a>
              <a href="/contact" className="text-gray-700 hover:text-primary-600 font-medium py-2 px-2 rounded transition-colors">
                Contact
              </a>
              <div className="pt-2">
                <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold w-full sm:w-auto">
                  Get Started
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}