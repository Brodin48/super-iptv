'use client'

import { Tv, Mail, Phone, Clock, Facebook, Twitter, Instagram } from 'lucide-react'
import OptimizedImage from './OptimizedImage'

export default function Footer() {
  return (
    <footer className="bg-dark-800 text-white">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="h-16 sm:h-20 relative">
                <OptimizedImage
                  src="/images/logo.svg" 
                  alt="Super-IPTV Logo" 
                  width={160}
                  height={48}
                  className="h-full w-auto object-contain"
                  fallbackSrc="/images/logo.svg"
                />
              </div>
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              Jouw vertrouwde IPTV service provider sinds 2019. Ervaar premium streaming met 25.000+ live kanalen en 26.000+ on-demand content.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="/multi-connections" className="text-gray-300 hover:text-white transition-colors">Multi-Device</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Services</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li className="text-gray-300 flex items-center">
                <Tv className="w-4 h-4 mr-2 text-accent-400" />
                25,000+ Live Channels
              </li>
              <li className="text-gray-300 flex items-center">
                <Clock className="w-4 h-4 mr-2 text-accent-400" />
                26,000+ On-Demand
              </li>
              <li className="text-gray-300">4K & HD Quality</li>
              <li className="text-gray-300">Multi-Device Support</li>
              <li className="text-gray-300">24/7 Customer Support</li>
              <li className="text-gray-300">Free Trial Available</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Contact</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li className="text-gray-300 flex items-center">
                <Mail className="w-4 h-4 mr-2 sm:mr-3 text-accent-400 flex-shrink-0" />
                <a href="mailto:support@super-iptv.nl" className="hover:text-white transition-colors break-all">
                  support@super-iptv.nl
                </a>
              </li>
              <li className="text-gray-300 flex items-center">
                <Phone className="w-4 h-4 mr-2 sm:mr-3 text-accent-400 flex-shrink-0" />
                <a href="https://wa.link/bof0mw" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp Support
                </a>
              </li>
              <li className="text-gray-300 flex items-start">
                <Clock className="w-4 h-4 mr-2 sm:mr-3 mt-0.5 text-accent-400 flex-shrink-0" />
                <span>24/7 Support Available</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-center sm:text-left text-sm sm:text-base">
              © 2024 Super-IPTV. Alle rechten voorbehouden.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 text-sm sm:text-base">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacybeleid</a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">Gebruiksvoorwaarden</a>
              <a href="/refund" className="text-gray-400 hover:text-white transition-colors">Retourbeleid</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}