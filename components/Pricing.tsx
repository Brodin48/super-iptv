import { Check, Star, Crown, Shield, Zap, Tv, Users, Play } from 'lucide-react'

export default function Pricing() {
  const devicePlans = [
    {
      name: "1 Device",
      devices: 1,
      popular: false,
      plans: [
        { 
          duration: "1 Maand", 
          price: "€10.99", 
          originalPrice: "€19.99", 
          buyLink: "https://wa.link/aipqam", 
          savings: "45%",
          badge: "BESPAAR 45%"
        },
        { 
          duration: "3 Maanden", 
          price: "€25.99", 
          originalPrice: "€59.97", 
          buyLink: "https://wa.link/aipqam", 
          savings: "57%",
          badge: "POPULAIR"
        },
        { 
          duration: "6 Maanden", 
          price: "€39.99", 
          originalPrice: "€119.94", 
          buyLink: "https://wa.link/aipqam", 
          savings: "67%",
          badge: "BESTE WAARDE"
        },
        { 
          duration: "12 Maanden", 
          price: "€49.99", 
          originalPrice: "€139.88", 
          buyLink: "https://wa.link/aipqam", 
          savings: "64%",
          badge: "BESTE WAARDE"
        },
        { 
          duration: "24 Maanden", 
          price: "€89.99", 
          originalPrice: "€279.76", 
          buyLink: "https://wa.link/aipqam", 
          savings: "68%",
          badge: "MAXIMALE BESPARINGEN"
        }
      ]
    }
  ]

  const features = [
    "25.000+ Live TV Kanalen",
    "HD & 4K Streaming Kwaliteit",
    "Regelmatige Content Updates",
    "24/7 IPTV Ondersteuning",
    "Compatible met Alle Apparaten",
    "Adult Content Inbegrepen"
  ]

  return (
    <section id="pricing" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            Kies Jouw Perfecte <span className="text-primary-600">Plan</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
            Selecteer een abonnementsduur voor jouw enkelvoudige apparaat verbinding. Alle plannen bevatten volledige toegang tot onze premium functies.
          </p>
          
          {/* Free Trial Button */}
          <div className="mt-6">
            <a 
              href="https://wa.me/13237044063" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Gratis Proefperiode
            </a>
          </div>
        </div>

        {/* Single Device Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 max-w-8xl mx-auto mb-12">
          {devicePlans[0].plans.map((plan, planIndex) => (
            <div 
              key={planIndex} 
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 h-full flex flex-col ${
                planIndex === 3 ? 'ring-4 ring-primary-500 ring-opacity-50' : ''
              }`}
            >
              {/* Badge */}
              <div className={`absolute top-0 left-0 right-0 text-center py-3 text-xs font-bold text-white ${
                planIndex === 3 ? 'bg-gradient-to-r from-primary-500 to-primary-600' : 
                'bg-gradient-to-r from-gray-600 to-gray-700'
              }`}>
                {plan.badge}
              </div>

              <div className="p-4 sm:p-6 pt-16 h-full flex flex-col">
                {/* Plan Header */}
                <div className="text-center mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 px-2 py-2 mt-2">
                    {plan.duration}
                  </h3>
                  <div className="flex items-center justify-center mb-3">
                    <Users className="w-4 h-4 text-primary-500 mr-1" />
                    <span className="text-primary-500 font-semibold text-sm">1 Apparaat</span>
                  </div>
                  
                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-center justify-center space-x-1 mb-1">
                      <span className="text-gray-400 line-through text-sm">{plan.originalPrice}</span>
                      <span className="text-2xl sm:text-3xl font-black text-gray-800">{plan.price}</span>
                    </div>
                    <div className="text-gray-600 text-xs">Bespaar {plan.savings}</div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 text-left flex-grow mb-4">
                  {features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                        <Check className="w-2 h-2 text-green-600" />
                      </div>
                      <span className="text-gray-700 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Buy Button - Always at bottom */}
                <div className="mt-auto">
                  <a 
                    href={plan.buyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-white font-bold transition-all duration-300 transform hover:scale-105 text-sm ${
                      planIndex === 3 ? 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700' :
                      'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800'
                    }`}
                  >
                    <Crown className="w-4 h-4 mr-1" />
                    Koop Nu
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Alle Plannen Bevatten
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-gray-700 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Multi-Device CTA */}
        <div className="mb-12 text-center">
          <a 
            href="/multi-connections" 
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-blue-700 transition-colors"
          >
            <Users className="w-5 h-5 mr-2" />
            Multi-Apparaat Plannen Beschikbaar
          </a>
          <p className="text-sm text-gray-600 mt-2">
            Deel met familie • 2 of 3 apparaten • Vanaf €19.79
          </p>
        </div>

        {/* Premium Lifetime Offer with Subtle Netherlands Flag */}
        <div className="max-w-7xl mx-auto mt-12 sm:mt-16">
          <div className="relative netherlands-flag-bg rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 transform hover:scale-102 transition-all duration-500 overflow-hidden">
            
            {/* Simple premium badge */}
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="bg-black bg-opacity-30 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold flex items-center shadow-lg border-2 border-white">
                <Crown className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                <span className="hidden sm:inline">✨ EXCLUSIEF PREMIUM LEVENSLANG AANBOD ✨</span>
                <span className="sm:hidden">✨ LEVENSLANG AANBOD ✨</span>
              </div>
            </div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
                
                {/* Left: Title and Price */}
                <div className="text-center lg:text-left text-white">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 text-white drop-shadow-xl">
                    Levenslange Toegang
                  </h3>
                  
                  <div className="mb-3 sm:mb-4">
                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white drop-shadow-2xl">
                      €289.99
                    </div>
                  </div>
                  
                  <div className="text-sm sm:text-lg lg:text-xl font-semibold text-white mb-4 sm:mb-6 opacity-95">
                    Eenmalige betaling<br />Geen maandelijkse kosten<br />Onbeperkte apparaten
                  </div>

                  {/* Simple CTA Button */}
                  <a 
                    href="https://wa.link/aipqam" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-lg sm:text-xl font-black hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                  >
                    <Crown className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                    CLAIM LEVENSLANG
                  </a>
                </div>

                {/* Right: Features */}
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white border-opacity-30">
                      <div className="flex items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center mr-3 shadow-lg flex-shrink-0">
                          <Tv className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
                        </div>
                        <div>
                          <div className="font-bold text-white text-sm sm:text-base">25.000+ Live Kanalen</div>
                          <div className="text-white opacity-90 text-xs sm:text-sm">Wereldwijde dekking</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white border-opacity-30">
                      <div className="flex items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center mr-3 shadow-lg flex-shrink-0">
                          <Star className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
                        </div>
                        <div>
                          <div className="font-bold text-white text-sm sm:text-base">26.000+ Films & Series</div>
                          <div className="text-white opacity-90 text-xs sm:text-sm">Nieuwste releases inbegrepen</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white border-opacity-30">
                      <div className="flex items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center mr-3 shadow-lg flex-shrink-0">
                          <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
                        </div>
                        <div>
                          <div className="font-bold text-white text-sm sm:text-base">Ultra HD & 4K Kwaliteit</div>
                          <div className="text-white opacity-90 text-xs sm:text-sm">Kristalheldere streaming</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white border-opacity-30">
                      <div className="flex items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center mr-3 shadow-lg flex-shrink-0">
                          <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
                        </div>
                        <div>
                          <div className="font-bold text-white text-sm sm:text-base">Onbeperkte Apparaten</div>
                          <div className="text-white opacity-90 text-xs sm:text-sm">Gebruik op al je apparaten</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom text and trust indicators */}
                  <div className="mt-4 sm:mt-6 text-center">
                    <div className="text-white text-sm sm:text-lg font-semibold mb-3 sm:mb-4">
                      🔥 <span className="hidden sm:inline">Beperkt Tijd Aanbod • Bespaar €1.000+ vs Maandelijkse Plannen</span>
                      <span className="sm:hidden">Bespaar €1.000+ vs Maandelijkse Plannen</span>
                    </div>
                    
                    {/* Simple trust indicators */}
                    <div className="flex justify-center items-center space-x-4 sm:space-x-6 text-white">
                      <div className="flex items-center">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-yellow-300" />
                        <span className="text-xs sm:text-sm font-semibold">Premium Kwaliteit</span>
                      </div>
                      <div className="flex items-center">
                        <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-green-300" />
                        <span className="text-xs sm:text-sm font-semibold">Veilige Betaling</span>
                      </div>
                      <div className="flex items-center">
                        <Crown className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-yellow-300" />
                        <span className="text-xs sm:text-sm font-semibold">VIP Status</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              Waarom Kiezen Voor Super-IPTV?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-8 h-8 text-primary-500" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Directe Activering</h4>
                <p className="text-sm text-gray-600">Krijg toegang binnen 5 minuten na aankoop</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-8 h-8 text-primary-500" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Geld Terug Garantie</h4>
                <p className="text-sm text-gray-600">30-dagen risicovrije proefperiode</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-secondary-500" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">24/7 Ondersteuning</h4>
                <p className="text-sm text-gray-600">Premium klantenondersteuning altijd beschikbaar</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 text-center text-gray-600 text-xs sm:text-sm">
          <p>*Alle prijzen zijn in EUR. Extra belastingen kunnen van toepassing zijn in sommige regio's.</p>
          <p className="hidden sm:block">Abonnementen vernieuwen automatisch tenzij geannuleerd. Levenslang plan is een eenmalige betaling.</p>
        </div>
      </div>
    </section>
  )
}