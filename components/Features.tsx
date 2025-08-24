import { Zap, Monitor, Shield, Clock, Star, Users, RotateCcw } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary-500" />,
      title: "Snelle Installatie",
      description: "Begin in enkele minuten met ons snelle setup proces. Geen technische kennis vereist."
    },
    {
      icon: <Monitor className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary-500" />,
      title: "HD & 4K Kwaliteit",
      description: "Ervaar kristalheldere weergave met HD & 4K streaming kwaliteit voor de ultieme ervaring."
    },
    {
      icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary-500" />,
      title: "Ultra Snelle Server",
      description: "Premium servers zorgen voor vloeiende streaming met minimale buffering en maximale uptime."
    },
    {
      icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary-500" />,
      title: "Compatible met Alle Apparaten",
      description: "Werkt op Smart TV's, Android boxes, iOS apparaten, computers, en veel meer apparaten."
    },
    {
      icon: <RotateCcw className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary-500" />,
      title: "Regelmatige Content Updates",
      description: "Onze content bibliotheek blijft groeien met regelmatige updates van films, series, en kanalen."
    },
    {
      icon: <Clock className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary-500" />,
      title: "24/7 Premium Ondersteuning",
      description: "24/7 premium klantenondersteuning om je te helpen met eventuele problemen of vragen."
    }
  ]

  return (
    <section id="features" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            Waarom Kiezen Voor Onze <span className="text-primary-600">Super-IPTV</span> Service?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
            Ervaar het premium <strong>Super-IPTV</strong> verschil met onze wereldklasse abonnement service. 
            <span className="hidden sm:inline"> Ons <strong>Super-IPTV</strong> platform werkt naadloos met alle apparaten 
            inclusief M3U, Enigma 2, Android Box, Smart TV, MAG Box en meer. Krijg directe toegang tot 
            25.000+ Live Kanalen & 26.000+ Films/Series met jouw <strong>Super-IPTV</strong> abonnement.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4 sm:mb-6">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional info section for mobile */}
        <div className="sm:hidden mt-8 bg-white rounded-xl p-6 shadow-lg text-center">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Volledige Apparaat Ondersteuning</h3>
          <p className="text-sm text-gray-600">
            Werkt met M3U, Enigma 2, Android Box, Smart TV, MAG Box, iOS, Windows, Mac, en meer apparaten.
          </p>
        </div>
      </div>
    </section>
  )
}
