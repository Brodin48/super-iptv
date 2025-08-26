import { Check, Crown, Tv, Monitor } from 'lucide-react'

export default function FrenchStylePricing() {
  const pricingPlans = [
    {
      name: "FORFAIT DE BASE",
      subtitle: "12 MOIS", 
      badge: "12 MOIS",
      badgeColor: "bg-pink-500",
      price: "29.00",
      currency: "€",
      period: "/ 12 MOIS",
      popular: false,
      features: [
        "+79.000 Chaînes, +249.000 Films et Séries.",
        "Netflix, Disney+, Amazon Prime Video, HBO Max, OCS, Paramount+, Apple+, Discovery+ ..",
        "Ligue 1 Plus + France en FULL HD / 4K ⚽",
        "Choix illimité de Films & Séries",
        "Qualité SD / HD / FULL HD / 4K",
        "Catch-up et EPG",
        "Serveurs Rapides Et Stables",
        "Compatible avec tous les appareils.",
        "Contenu régulièrement mis à jour.",
        "€ 15 Jours Garantie De Remboursement."
      ],
      buttonText: "Commander maintenant",
      buttonColor: "bg-gray-800 hover:bg-gray-900",
      buttonLink: "https://wa.me/13237044063",
      paymentText: "Paiement unique :\n- Sans contrat contraignant"
    },
    {
      name: "FORFAIT",
      subtitle: "- PREMIUM",
      secondSubtitle: "- 12 MOIS",
      thirdSubtitle: "+ 3 MOIS GRATUIT",
      badge: "LE PLUS POPULAIRE",
      badgeColor: "bg-red-500",
      price: "39.00",
      currency: "€",
      period: "/ 15 MOIS",
      popular: true,
      features: [
        "🔞 Chaînes + Films Pour Adultes (avec mot de passe)",
        "+79.000 Chaînes, +249.000 Films et Séries.",
        "Netflix, Disney+, Amazon Prime Video, HBO Max, OCS, Paramount+, Apple+, Discovery+ ..",
        "Ligue 1 Plus + France en FULL HD / 4K ⚽",
        "Choix illimité de Films & Séries",
        "Qualité SD / HD / FULL HD / 4K",
        "Catch-up et EPG",
        "Serveurs Rapides Et Stables",
        "Compatible avec tous les appareils.",
        "Contenu régulièrement mis à jour.",
        "€ 15 Jours Garantie De Remboursement."
      ],
      buttonText: "Commander maintenant",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      buttonLink: "https://wa.me/13237044063",
      paymentText: "Paiement unique :\n- Sans contrat contraignant"
    }
,
    {
      name: "FORFAIT GOLD",
      subtitle: "- 15 MOIS",
      devices: "📱📱 2 écrans",
      badge: "MEILLEUR PRIX",
      badgeColor: "bg-red-500",
      price: "49.00",
      currency: "€", 
      period: "/ 15 MOIS",
      popular: false,
      features: [
        "📱📱 Deux écrans actifs",
        "🔞 Chaînes + Films Pour Adultes (avec mot de passe)",
        "+79.000 Chaînes, +249.000 Films et Séries.",
        "Netflix, Disney+, Amazon Prime Video, HBO Max, OCS, Paramount+, Apple+, Discovery+ ..",
        "Ligue 1 Plus + France en FULL HD / 4K ⚽",
        "Choix illimité de Films & Séries",
        "Qualité SD / HD / FULL HD / 4K",
        "Catch-up et EPG",
        "Serveurs Rapides Et Stables",
        "Compatible avec tous les appareils.",
        "Contenu régulièrement mis à jour.",
        "€ 15 Jours Garantie De Remboursement."
      ],
      buttonText: "Commander maintenant",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      buttonLink: "https://wa.me/13237044063",
      paymentText: "Paiement unique :\n- Sans contrat contraignant"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Découvrez nos <span className="text-blue-600">meilleurs plans.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choisissez le forfait qui correspond à vos besoins de divertissement
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                plan.popular ? 'ring-4 ring-blue-500 ring-opacity-50 transform scale-105' : ''
              }`}
            >
              {/* Diagonal Badge */}
              {plan.badge && (
                <div className={`absolute top-0 right-0 ${plan.badgeColor} text-white px-8 py-2 text-xs font-bold transform rotate-45 translate-x-6 -translate-y-1 z-10`}>
                  <div className="transform -rotate-45 whitespace-nowrap">
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-sm text-gray-600 mb-1">
                    {plan.subtitle}
                  </div>
                  {plan.secondSubtitle && (
                    <div className="text-sm text-gray-600 mb-1">
                      {plan.secondSubtitle}
                    </div>
                  )}
                  {plan.thirdSubtitle && (
                    <div className="text-sm font-semibold text-green-600 mb-2">
                      {plan.thirdSubtitle}
                    </div>
                  )}
                  {plan.devices && (
                    <div className="text-lg font-semibold text-gray-700 mb-2">
                      {plan.devices}
                    </div>
                  )}
                  
                  {/* Payment Info */}
                  <div className="bg-blue-50 rounded-lg p-3 mb-4 text-sm text-blue-800">
                    <div className="font-semibold">Paiement unique :</div>
                    <div>- Sans contrat contraignant</div>
                  </div>
                  
                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-800">{plan.price}</span>
                      <span className="text-2xl font-bold text-gray-800">{plan.currency}</span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Buy Button */}
                <a
                  href={plan.buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-block text-center ${plan.buttonColor} text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg`}
                >
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Pourquoi choisir Super-IPTV ?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Tv className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Qualité Premium</h4>
                <p className="text-sm text-gray-600">Streaming en HD, Full HD et 4K pour une expérience optimale</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Service VIP</h4>
                <p className="text-sm text-gray-600">Support client prioritaire et assistance technique 24/7</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Multi-Appareils</h4>
                <p className="text-sm text-gray-600">Compatible avec tous vos appareils favoris</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
