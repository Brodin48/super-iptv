'use client'

import { Tv, Mail, Phone, Clock, Facebook, Twitter, Instagram, Shield, Zap, Users, Globe, Play, Star } from 'lucide-react'
import OptimizedImage from './OptimizedImage'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
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
              Jouw vertrouwde premium IPTV service provider sinds 2019. Ervaar hoogwaardige streaming met 25.000+ live TV-kanalen, 26.000+ films & series in HD en 4K kwaliteit.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links - Dutch IPTV Context */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-400">Snelle Links</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Startpagina</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">Over Ons</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-white transition-colors">IPTV Blog</a></li>
              <li><a href="/pricing" className="text-gray-300 hover:text-white transition-colors">Prijzen & Abonnementen</a></li>
              <li><a href="/free-trial" className="text-gray-300 hover:text-white transition-colors">Gratis Proefperiode</a></li>
              <li><a href="/multi-connections" className="text-gray-300 hover:text-white transition-colors">Multi-Apparaat Plannen</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact & Ondersteuning</a></li>
            </ul>
          </div>

          {/* IPTV Services - Dutch Context */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-400">IPTV Diensten</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li className="text-gray-300 flex items-center">
                <Tv className="w-4 h-4 mr-2 text-blue-400" />
                25.000+ Live TV-Kanalen
              </li>
              <li className="text-gray-300 flex items-center">
                <Play className="w-4 h-4 mr-2 text-blue-400" />
                26.000+ Films & Series
              </li>
              <li className="text-gray-300 flex items-center">
                <Star className="w-4 h-4 mr-2 text-blue-400" />
                HD, Full HD & 4K Kwaliteit
              </li>
              <li className="text-gray-300 flex items-center">
                <Users className="w-4 h-4 mr-2 text-blue-400" />
                Multi-Apparaat Ondersteuning
              </li>
              <li className="text-gray-300 flex items-center">
                <Shield className="w-4 h-4 mr-2 text-blue-400" />
                24/7 Klantenservice
              </li>
              <li className="text-gray-300 flex items-center">
                <Zap className="w-4 h-4 mr-2 text-blue-400" />
                Directe Activering
              </li>
              <li className="text-gray-300 flex items-center">
                <Globe className="w-4 h-4 mr-2 text-blue-400" />
                Wereldwijde Kanalen
              </li>
            </ul>
          </div>

          {/* Contact - Dutch Business Context */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-400">Contact & Support</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li className="text-gray-300 flex items-center">
                <Mail className="w-4 h-4 mr-2 sm:mr-3 text-blue-400 flex-shrink-0" />
                <a href="mailto:support@super-iptv.nl" className="hover:text-white transition-colors break-all">
                  support@super-iptv.nl
                </a>
              </li>
              <li className="text-gray-300 flex items-center">
                <Phone className="w-4 h-4 mr-2 sm:mr-3 text-green-400 flex-shrink-0" />
                <a href="https://wa.me/13237044063" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp Ondersteuning
                </a>
              </li>
              <li className="text-gray-300 flex items-start">
                <Clock className="w-4 h-4 mr-2 sm:mr-3 mt-0.5 text-blue-400 flex-shrink-0" />
                <div>
                  <div className="font-semibold">24/7 Beschikbaar</div>
                  <div className="text-xs text-gray-400">Nederlandse tijdzone support</div>
                </div>
              </li>
              <li className="text-gray-300 flex items-start">
                <Shield className="w-4 h-4 mr-2 sm:mr-3 mt-0.5 text-green-400 flex-shrink-0" />
                <div>
                  <div className="font-semibold">Veilige Betalingen</div>
                  <div className="text-xs text-gray-400">SSL beveiligde transacties</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Legal & Copyright */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-center sm:text-left">
              <p className="text-gray-400 text-sm sm:text-base">
                © 2024 Super-IPTV Nederland. Alle rechten voorbehouden.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Geregistreerde IPTV service provider | Premium streaming dienstverlening
              </p>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 text-sm sm:text-base">
              <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                Privacybeleid
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Algemene Voorwaarden
              </a>
              <a href="/refund" className="text-gray-400 hover:text-white transition-colors">
                Retour- & Annuleringsbeleid
              </a>
            </div>
          </div>
          
          {/* IPTV Disclaimer */}
          <div className="mt-4 pt-4 border-t border-gray-800">
            <p className="text-xs text-gray-500 text-center">
              Super-IPTV biedt legale IPTV streaming diensten. Alle content wordt geleverd via officiële bronnen en partnerships. 
              Gebruik in overeenstemming met lokale wetgeving. Nederland | Europa | Wereldwijd.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
