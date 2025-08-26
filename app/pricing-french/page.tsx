import { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FrenchStylePricing from '../../components/FrenchStylePricing'

export const metadata: Metadata = {
  title: 'Super IPTV Tarifs - Plans d\'Abonnement IPTV Premium',
  description: 'Découvrez nos forfaits Super IPTV. Accès IPTV premium avec 79.000+ chaînes et 249.000+ films. Meilleurs prix IPTV disponibles.',
  keywords: 'Super IPTV tarifs, prix IPTV, abonnement IPTV, forfait IPTV premium, IPTV pas cher'
}

export default function FrenchPricingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Super IPTV <span className="text-yellow-400">Tarifs</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Choisissez le forfait Super IPTV parfait pour vos besoins de divertissement. 
            Des plans premium avec accès illimité à votre contenu préféré.
          </p>
        </div>
      </section>

      {/* French-Style Pricing */}
      <FrenchStylePricing />

      {/* Additional Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Pourquoi Choisir Super IPTV ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-600 mb-4">Meilleure Valeur</h3>
              <p className="text-gray-600">
                Nos abonnements Super IPTV offrent le meilleur rapport qualité-prix du marché avec un accès premium.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-600 mb-4">Qualité Premium</h3>
              <p className="text-gray-600">
                Profitez de la qualité de streaming HD et 4K avec notre service Super IPTV, avec 79.000+ chaînes.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-600 mb-4">Support 24/7</h3>
              <p className="text-gray-600">
                Bénéficiez d'un support client premium inclus avec chaque plan d'abonnement Super IPTV.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
