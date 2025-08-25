'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="relative">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'linear-gradient(to right, #AE1C28, #21468B)'
        }}
      />
      
      {/* Single Unified Header */}
      <header className="relative bg-white mx-8 sm:mx-12 lg:mx-16 xl:mx-20 shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center py-3 sm:py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="h-10 sm:h-12 lg:h-14 flex items-center relative">
                <img 
                  src="/images/logo.svg" 
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

            {/* Desktop Navigation & Contact */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Navigation Links */}
              <nav className="flex space-x-6">
                <a href="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                  Home
                </a>
                <a href="/about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                  Over Ons
                </a>
                <a href="/blog" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                  Blog
                </a>
                <a href="/pricing" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                  Prijzen
                </a>
                <a href="/contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                  Contact
                </a>
              </nav>

              {/* Contact Info */}
              <div className="flex items-center space-x-4 pl-6 border-l border-gray-200">
                {/* WhatsApp */}
                <a 
                  href="https://wa.link/bof0mw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-green-600 transition-colors text-sm font-medium"
                >
                  <div className="flex items-center justify-center w-5 h-5 bg-green-500 rounded-full mr-2 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.488"/>
                    </svg>
                  </div>
                  <span>+31 6 12345678</span>
                </a>

                {/* Email */}
                <a 
                  href="mailto:contact@super-iptv.nl" 
                  className="flex items-center text-gray-600 hover:text-primary-600 transition-colors text-sm font-medium"
                >
                  <Mail className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" />
                  <span>contact@super-iptv.nl</span>
                </a>
              </div>

              {/* CTA Button */}
              <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-semibold">
                Aan de Slag
              </button>
            </div>

            {/* Mobile: Contact + Menu Button */}
            <div className="lg:hidden flex items-center space-x-3">
              {/* Mobile Contact */}
              <div className="flex items-center space-x-2">
                <a 
                  href="https://wa.link/bof0mw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-green-600 transition-colors"
                >
                  <div className="flex items-center justify-center w-5 h-5 bg-green-500 rounded-full">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.488"/>
                    </svg>
                  </div>
                </a>
                
                <a 
                  href="mailto:contact@super-iptv.nl" 
                  className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary-600" />
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t bg-white">
              <nav className="flex flex-col space-y-3 mb-4">
                <a href="/" className="text-gray-700 hover:text-primary-600 font-medium py-2 px-2 rounded transition-colors">
                  Home
                </a>
                <a href="/about" className="text-gray-700 hover:text-primary-600 font-medium py-2 px-2 rounded transition-colors">
                  Over Ons
                </a>
                <a href="/blog" className="text-gray-700 hover:text-primary-600 font-medium py-2 px-2 rounded transition-colors">
                  Blog
                </a>
                <a href="/pricing" className="text-gray-700 hover:text-primary-600 font-medium py-2 px-2 rounded transition-colors">
                  Prijzen
                </a>
                <a href="/contact" className="text-gray-700 hover:text-primary-600 font-medium py-2 px-2 rounded transition-colors">
                  Contact
                </a>
              </nav>
              
              {/* Mobile Contact Info */}
              <div className="border-t pt-4 mb-4">
                <div className="flex flex-col space-y-3">
                  <a 
                    href="https://wa.link/bof0mw" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-green-600 transition-colors text-sm"
                  >
                    <div className="flex items-center justify-center w-5 h-5 bg-green-500 rounded-full mr-3">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.488"/>
                      </svg>
                    </div>
                    <span>+31 6 12345678</span>
                  </a>
                  
                  <a 
                    href="mailto:contact@super-iptv.nl" 
                    className="flex items-center text-gray-600 hover:text-primary-600 transition-colors text-sm"
                  >
                    <Mail className="w-4 h-4 text-primary-600 mr-3" />
                    <span>contact@super-iptv.nl</span>
                  </a>
                </div>
              </div>
              
              {/* Mobile CTA */}
              <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold w-full">
                Aan de Slag
              </button>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}