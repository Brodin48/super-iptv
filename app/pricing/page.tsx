import { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Pricing from '../../components/Pricing'

export const metadata: Metadata = {
  title: 'IPTV Baba Pricing - Affordable IPTV Subscription Plans',
  description: 'Discover our IPTV Baba pricing plans. Get IPTV access for just $289 or choose from monthly plans. Best IPTV subscription deals available.',
  keywords: 'IPTV Baba pricing, IPTV cost, IPTV subscription price, affordable IPTV, cheap IPTV plans'
}

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            IPTV Baba <span className="text-blue-300">Pricing</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Choose the perfect IPTV Baba plan for your entertainment needs. 
            From our exclusive IPTV subscription to flexible monthly options.
          </p>
        </div>
      </section>

      {/* Pricing Component */}
      <Pricing />

      {/* Additional Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Why Choose IPTV Baba Subscription?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-primary-600 mb-4">Best Value</h3>
              <p className="text-gray-600">
                Our IPTV Baba subscription offers the best value in the market with one-time payment for premium access.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-primary-600 mb-4">Premium Quality</h3>
              <p className="text-gray-600">
                Enjoy HD & 4K streaming quality with our IPTV Baba service, featuring 25,000+ channels.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-primary-600 mb-4">24/7 Support</h3>
              <p className="text-gray-600">
                Get premium customer support included with every IPTV Baba subscription plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
