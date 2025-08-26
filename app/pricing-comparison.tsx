import { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Pricing from '../../components/Pricing'
import FrenchStylePricing from '../../components/FrenchStylePricing'
import { ArrowDown, Compare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Super IPTV Pricing - Affordable IPTV Subscription Plans',
  description: 'Discover our Super IPTV pricing plans. Get IPTV access for just €289 or choose from monthly plans. Best IPTV subscription deals available.',
  keywords: 'Super IPTV pricing, IPTV cost, IPTV subscription price, affordable IPTV, cheap IPTV plans'
}

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Super IPTV <span className="text-blue-300">Pricing</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8">
            Choose the perfect Super IPTV plan for your entertainment needs. 
            From our exclusive IPTV subscription to flexible monthly options.
          </p>
          
          {/* Design Toggle Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center text-lg font-semibold mb-2">
              <Compare className="w-6 h-6 mr-2" />
              Two Design Options Available
            </div>
            <p className="text-sm opacity-90">
              Scroll down to compare our original Dutch pricing design with the new French-style cards
            </p>
            <ArrowDown className="w-6 h-6 mx-auto mt-3 animate-bounce" />
          </div>
        </div>
      </section>

      {/* New French-Style Pricing */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
              NEW DESIGN
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              French-Style Pricing Cards
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Modern card design inspired by premium French IPTV services
            </p>
          </div>
        </div>
        <FrenchStylePricing />
      </div>

      {/* Divider Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Compare Design Styles</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Above: New French-style cards with premium badges and modern layout<br/>
            Below: Original Dutch design with Netherlands flag theme
          </p>
          <ArrowDown className="w-8 h-8 mx-auto mt-6 animate-bounce" />
        </div>
      </section>

      {/* Original Dutch Pricing */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
              ORIGINAL DESIGN
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Original Dutch Pricing Design
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your current pricing layout with Netherlands flag theme and lifetime offer
            </p>
          </div>
        </div>
        <Pricing />
      </div>

      {/* Comparison Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Design Comparison
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* French Style Features */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                  French-Style Cards
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Premium diagonal badges with "LE PLUS POPULAIRE"</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Clean white cards with subtle shadows</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">French language and terminology</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Modern typography and spacing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Emphasizes device count (2 écrans)</span>
                  </li>
                </ul>
              </div>

              {/* Dutch Style Features */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-orange-600 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                  Original Dutch Design
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Netherlands flag gradient theme</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Prominent lifetime offer (€289.99)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Dutch language throughout</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Multiple duration options (1-24 months)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Integrated trust indicators</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-blue-50 rounded-xl">
              <h4 className="font-bold text-blue-800 mb-2">💡 Recommendation</h4>
              <p className="text-blue-700">
                <strong>French-style cards</strong> for international appeal and modern aesthetics, 
                <strong>Dutch design</strong> for local market focus and lifetime value proposition. 
                You can A/B test both to see which converts better!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info - Shared */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Why Choose Super IPTV?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-primary-600 mb-4">Best Value</h3>
              <p className="text-gray-600">
                Our Super IPTV subscription offers the best value in the market with competitive pricing for premium access.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-primary-600 mb-4">Premium Quality</h3>
              <p className="text-gray-600">
                Enjoy HD & 4K streaming quality with our Super IPTV service, featuring 25,000+ channels.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-primary-600 mb-4">24/7 Support</h3>
              <p className="text-gray-600">
                Get premium customer support included with every Super IPTV subscription plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
