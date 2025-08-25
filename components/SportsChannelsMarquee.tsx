'use client'

import { ChevronRight, Trophy, Zap } from 'lucide-react'

export default function SportsChannelsMarquee() {
  // Sports channel images
  const sportsLogos = [
    { src: '/images/Sport/championsleague02 (1).webp', name: 'Champions League' },
    { src: '/images/Sport/peremierleague (1).webp', name: 'Premier League' },
    { src: '/images/Sport/eredivisieposter (1).webp', name: 'Eredivisie' },
    { src: '/images/Sport/f1poster (1).webp', name: 'Formula 1' },
    { src: '/images/Sport/f1poster2 (1).webp', name: 'F1 Racing' },
    { src: '/images/Sport/ligue1d (1).webp', name: 'Ligue 1' },
    { src: '/images/Sport/seriaitaly (1) (1).webp', name: 'Serie A' },
    { src: '/images/Sport/ufc (1).webp', name: 'UFC' },
    { src: '/images/Sport/tennis (1).webp', name: 'Tennis' },
    { src: '/images/Sport/nascarsports (1).webp', name: 'NASCAR' },
    { src: '/images/Sport/2 (2).webp', name: 'Sports Channel' },
    { src: '/images/Sport/4 (1) (1).webp', name: 'Sports Network' },
    { src: '/images/Sport/5 (2).webp', name: 'Sports TV' },
    { src: '/images/Sport/6 (3) (1).webp', name: 'Sport Zone' }
  ]

  const SportsLogo = ({ logo, index, keyPrefix }: { logo: any, index: number, keyPrefix: string }) => (
    <div
      key={`${keyPrefix}-${index}`}
      className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-white rounded-xl shadow-lg p-2 sm:p-3 md:p-4 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
    >
      <div className="relative w-full h-full">
        <img
          src={logo.src}
          alt={logo.name}
          className="w-full h-full object-contain"
          loading="lazy"
          onError={(e) => {
            console.log(`Sports logo failed to load: ${logo.src}`);
            const target = e.currentTarget;
            target.style.display = 'none';
            const container = target.parentElement;
            if (container) {
              container.innerHTML = `
                <div class="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center rounded-lg">
                  <div class="text-center">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto mb-2">
                      <circle cx="16" cy="16" r="12" fill="#DC2626"/>
                      <path d="M12 11l8 5-8 5V11z" fill="white"/>
                    </svg>
                    <div class="text-xs font-semibold text-primary-600">SPORT</div>
                  </div>
                </div>
              `;
            }
          }}
        />
      </div>
    </div>
  )

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Trophy className="w-4 h-4 mr-2" />
            Sport Kanalen
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            Ontdek alle <span className="text-primary-600">sportkanalen</span> en je favoriete competities
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <span className="font-semibold text-primary-600">In één abonnement</span> - Van Premier League tot Eredivisie, 
            van Champions League tot Formula 1. Alle grote competities live in HD & 4K kwaliteit.
          </p>
        </div>

        {/* Sports Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-4xl mx-auto">
          <div className="text-center bg-white rounded-xl p-4 shadow-md">
            <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-1">500+</div>
            <div className="text-sm text-gray-600">Sport Kanalen</div>
          </div>
          <div className="text-center bg-white rounded-xl p-4 shadow-md">
            <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-1">HD/4K</div>
            <div className="text-sm text-gray-600">Kwaliteit</div>
          </div>
          <div className="text-center bg-white rounded-xl p-4 shadow-md">
            <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-1">24/7</div>
            <div className="text-sm text-gray-600">Live Sport</div>
          </div>
          <div className="text-center bg-white rounded-xl p-4 shadow-md">
            <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-1">Alle</div>
            <div className="text-sm text-gray-600">Competities</div>
          </div>
        </div>
        
        {/* Scrolling Sports Logos - Moving Right */}
        <div className="relative overflow-hidden mb-6">
          <div className="flex space-x-4 sm:space-x-6 animate-scroll-fast">
            {/* First set of logos */}
            {sportsLogos.map((logo, index) => (
              <SportsLogo key={`first-${index}`} logo={logo} index={index} keyPrefix="first" />
            ))}
            
            {/* Duplicate set for seamless loop */}
            {sportsLogos.map((logo, index) => (
              <SportsLogo key={`second-${index}`} logo={logo} index={index} keyPrefix="second" />
            ))}
          </div>
        </div>

        {/* Scrolling Sports Logos - Moving Left (Reverse) */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-4 sm:space-x-6" style={{ animation: 'scroll-infinite 15s linear infinite reverse' }}>
            {/* First set of logos (reversed order) */}
            {[...sportsLogos].reverse().map((logo, index) => (
              <SportsLogo key={`third-${index}`} logo={logo} index={index} keyPrefix="third" />
            ))}
            
            {/* Duplicate set for seamless loop */}
            {[...sportsLogos].reverse().map((logo, index) => (
              <SportsLogo key={`fourth-${index}`} logo={logo} index={index} keyPrefix="fourth" />
            ))}
          </div>
        </div>

        {/* Popular Sports List */}
        <div className="mt-8 sm:mt-12 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
            Populaire Competities & Sport Kanalen
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {[
              'Champions League', 'Premier League', 'Eredivisie', 'La Liga', 'Bundesliga', 'Serie A',
              'Ligue 1', 'Formula 1', 'MotoGP', 'UFC', 'Tennis', 'NASCAR',
              'Europa League', 'Conference League', 'WK Voetbal', 'EK Voetbal', 'Olympic Games', 'Wimbledon'
            ].map((sport, index) => (
              <div key={index} className="flex items-center justify-center bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
                <Zap className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">{sport}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 sm:mt-12 text-center">
          <a 
            href="https://wa.me/13237044063" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <Trophy className="w-5 h-5 mr-2" />
            Start Gratis Sport Proefperiode
            <ChevronRight className="w-4 h-4 ml-2" />
          </a>
          <p className="text-sm text-gray-600 mt-3">
            Alle sport kanalen inbegrepen in elk abonnement
          </p>
        </div>
      </div>
    </section>
  )
}
