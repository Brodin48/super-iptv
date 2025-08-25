'use client'

import { Trophy, Star } from 'lucide-react'

const leagues = [
  { name: 'Premier League', image: '/images/leagues/Premier League.svg' },
  { name: 'Champions League', image: '/images/leagues/Champions.svg' },
  { name: 'La Liga', image: '/images/leagues/Laliga.svg' },
  { name: 'Serie A', image: '/images/leagues/Seria A.svg' },
  { name: 'Bundesliga', image: '/images/leagues/Bundesliga.svg' },
  { name: 'Ligue 1', image: '/images/leagues/ligue1svg.svg' },
  { name: 'Europa League', image: '/images/leagues/Europa League.svg' },
  { name: 'Formula 1', image: '/images/leagues/f1.svg' },
  { name: 'Jupiler Pro', image: '/images/leagues/Jupiler Pro.svg' },
  { name: 'Liga Portugal', image: '/images/leagues/Ligaportugal.svg' },
  { name: 'RSL', image: '/images/leagues/RSL.svg' },
  { name: 'Ligue 2', image: '/images/leagues/ligue2.svg' },
]

export default function SportsLeaguesSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-red-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-100 to-red-100 rounded-full mb-4">
            <Trophy className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Alle Grote <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">Sportcompetities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mis nooit een wedstrijd! Stream alle topcompetities, Formule 1 en meer in HD-kwaliteit
          </p>
        </div>

        {/* Leagues Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {leagues.map((league, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-transparent rounded-full -mr-16 -mt-16 opacity-50"></div>
              
              <div className="relative z-10">
                <div className="h-24 mb-4 flex items-center justify-center">
                  <img 
                    src={league.image} 
                    alt={league.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-center font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {league.name}
                </h3>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="bg-gradient-to-r from-blue-600 to-red-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">Live Wedstrijden Maandelijks</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">HD/4K</div>
              <div className="text-blue-100">Stream Kwaliteit</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Sportkanalen</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">0</div>
              <div className="text-blue-100">Bufferproblemen</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Sluit u aan bij duizenden sportfans die genieten van ononderbroken streaming
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl">
            Begin Nu Met Kijken
          </button>
        </div>
      </div>
    </section>
  )
}