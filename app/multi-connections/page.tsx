import { Check, Star, Crown, Shield, Zap, Tv, Users, Play, Wifi, Monitor } from 'lucide-react'

export const metadata = {
  title: 'Super-IPTV Multi-Apparaat Plannen - 2 of 3 Verbindingen | super-iptv.nl',
  description: 'Super-IPTV multi-apparaat abonnement plannen in EUR. Verbind 2 of 3 apparaten tegelijkertijd. Perfect voor koppels en families. Premium IPTV met meerdere verbindingen tot maximaal 3 apparaten.',
  keywords: 'Super-IPTV multi apparaat, meerdere verbindingen, familie IPTV, 2 apparaten, 3 apparaten, maximaal 3 verbindingen, EUR prijzen',
}

export default function MultiConnectionsPage() {
  const multiDevicePlans = [
    {
      name: "2 Devices",
      devices: 2,
      popular: false,
      description: "Perfect for couples",
      icon: <Monitor className="w-6 h-6" />,
      plans: [
        { 
          duration: "1 Month", 
          price: "$19.79", 
          originalPrice: "$35.99", 
          buyLink: "https://wa.link/aipqam", 
          savings: "45%",
          badge: "SAVE 45%"
        },
        { 
          duration: "3 Months", 
          price: "$46.79", 
          originalPrice: "$107.97", 
          buyLink: "https://wa.link/aipqam", 
          savings: "57%",
          badge: "POPULAR"
        },
        { 
          duration: "6 Months", 
          price: "$71.99", 
          originalPrice: "$215.94", 
          buyLink: "https://wa.link/aipqam", 
          savings: "67%",
          badge: "BEST VALUE"
        },
        { 
          duration: "12 Months", 
          price: "$89.99", 
          originalPrice: "$237.48", 
          buyLink: "https://wa.link/aipqam", 
          savings: "62%",
          badge: "BEST VALUE"
        }
      ]
    },
    {
      name: "3 Devices",
      devices: 3,
      popular: true,
      description: "Maximum connections - Ideal for families",
      icon: <Tv className="w-6 h-6" />,
      plans: [
        { 
          duration: "1 Month", 
          price: "$29.68", 
          originalPrice: "$53.99", 
          buyLink: "https://wa.link/aipqam", 
          savings: "45%",
          badge: "SAVE 45%"
        },
        { 
          duration: "3 Months", 
          price: "$70.18", 
          originalPrice: "$161.97", 
          buyLink: "https://wa.link/aipqam", 
          savings: "57%",
          badge: "MOST POPULAR"
        },
        { 
          duration: "6 Months", 
          price: "$107.98", 
          originalPrice: "$323.94", 
          buyLink: "https://wa.link/aipqam", 
          savings: "67%",
          badge: "BEST VALUE"
        },
        { 
          duration: "12 Months", 
          price: "$134.98", 
          originalPrice: "$355.68", 
          buyLink: "https://wa.link/aipqam", 
          savings: "62%",
          badge: "MAXIMUM PLAN"
        }
      ]
    }
  ]

  const features = [
    "25,000+ Live TV Channels",
    "26,000+ Movies & TV Shows", 
    "HD & 4K Streaming Quality",
    "Regular Content Updates",
    "24/7 IPTV Support",
    "All Device Compatibility",
    "Simultaneous Streaming",
    "Family Sharing Enabled"
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white py-16 sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Users className="w-4 h-4 mr-2" />
              Multi-Device Plans
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            IPTV Baba <span className="text-orange-300">Multi-Device</span> Plans
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
            Connect up to 3 devices simultaneously and share your IPTV Baba subscription with family members. 
            Perfect for couples and families that need multiple connections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.link/bof0mw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
            <a 
              href="#plans" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              View Plans
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Why Choose <span className="text-primary-600">Multi-Device</span> Plans?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Perfect for couples and families that need up to 3 simultaneous connections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Family Sharing</h3>
              <p className="text-gray-600">Share your subscription with family members. Everyone gets their own access.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Multiple Devices</h3>
              <p className="text-gray-600">Watch on TV, phone, tablet, and computer simultaneously.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No Buffering</h3>
              <p className="text-gray-600">Premium servers ensure smooth streaming on all connected devices.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure Access</h3>
              <p className="text-gray-600">Each device gets secure, independent access to your subscription.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="plans" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Choose Your <span className="text-primary-600">Multi-Device</span> Plan
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Select 2 or 3 devices for your family. All plans include full access to our premium features.
            </p>
          </div>

          {/* Device Plans Grid */}
          {multiDevicePlans.map((devicePlan, deviceIndex) => (
            <div key={deviceIndex} className="mb-16">
              <div className="text-center mb-8">
                <div className={`inline-flex items-center px-6 py-3 rounded-full text-white font-bold text-lg mb-4 ${
                  devicePlan.popular ? 'bg-gradient-to-r from-primary-500 to-primary-600' : 'bg-gray-600'
                }`}>
                  {devicePlan.icon}
                  <span className="ml-2">{devicePlan.name} Plan</span>
                  {devicePlan.popular && <Star className="w-5 h-5 ml-2 fill-current" />}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Connect {devicePlan.devices} Device{devicePlan.devices !== 1 ? 's' : ''} Simultaneously
                </h3>
                <p className="text-gray-600">{devicePlan.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {devicePlan.plans.map((plan, planIndex) => (
                  <div 
                    key={planIndex} 
                    className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                      planIndex === 2 ? 'ring-4 ring-primary-500 ring-opacity-50' : ''
                    }`}
                  >
                    {/* Badge */}
                    <div className={`absolute top-0 left-0 right-0 text-center py-3 text-xs font-bold text-white ${
                      planIndex === 2 ? 'bg-gradient-to-r from-primary-500 to-primary-600' : 
                      devicePlan.popular ? 'bg-gradient-to-r from-primary-500 to-primary-600' :
                      'bg-gradient-to-r from-gray-600 to-gray-700'
                    }`}>
                      {plan.badge}
                    </div>

                    <div className="p-6 pt-16">
                      {/* Plan Header */}
                      <div className="text-center mb-6">
                        <h4 className="text-xl font-bold text-gray-800 mb-2">{plan.duration}</h4>
                        <div className="flex items-center justify-center mb-3">
                          <Users className="w-4 h-4 text-primary-500 mr-1" />
                          <span className="text-primary-500 font-semibold text-sm">{devicePlan.devices} Device{devicePlan.devices !== 1 ? 's' : ''}</span>
                        </div>
                        
                        {/* Pricing */}
                        <div className="mb-4">
                          <div className="flex items-center justify-center space-x-1 mb-1">
                            <span className="text-gray-400 line-through text-sm">{plan.originalPrice}</span>
                            <span className="text-3xl font-black text-gray-800">{plan.price}</span>
                          </div>
                          <div className="text-gray-600 text-xs">Save {plan.savings}</div>
                        </div>
                      </div>

                      {/* Features List */}
                      <div className="space-y-2 mb-6">
                        {features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <div className="w-4 h-4 bg-primary-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                              <Check className="w-2 h-2 text-primary-500" />
                            </div>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Buy Button */}
                      <a 
                        href={plan.buyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-white font-bold transition-all duration-300 transform hover:scale-105 ${
                          planIndex === 2 || devicePlan.popular ? 
                          'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700' :
                          'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800'
                        }`}
                      >
                        <Crown className="w-4 h-4 mr-2" />
                        Buy Now
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Pricing Note */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-6 max-w-2xl mx-auto shadow-lg">
            <p className="text-gray-600 text-sm">
              <strong>Note:</strong> All prices are in USD. Additional taxes may apply in some regions.
              Subscriptions will auto-renew unless cancelled.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Frequently Asked <span className="text-primary-600">Questions</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Can I watch different channels on each device?</h3>
              <p className="text-gray-600">Yes! Each device can watch completely different channels and content simultaneously. Your family members can enjoy their preferred shows independently.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">What devices are supported?</h3>
              <p className="text-gray-600">All devices are supported: Smart TVs, Android/iOS phones and tablets, computers, streaming boxes, and more. Works with any device that can run IPTV apps.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Is there a speed requirement for multiple devices?</h3>
              <p className="text-gray-600">We recommend at least 10 Mbps internet speed per device for HD streaming. For 4K content, 25 Mbps per device is ideal for the best experience.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Can I upgrade my single device plan?</h3>
              <p className="text-gray-600">Absolutely! Contact us via WhatsApp and we'll help you upgrade to a multi-device plan. You can keep your remaining subscription time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Share IPTV Baba with Your Family?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-3xl mx-auto">
            Get instant activation and start streaming on multiple devices today. Our team is ready to help you choose the perfect plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.link/aipqam" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center"
            >
              <Play className="w-5 h-5 mr-2" />
              Get Started Now
            </a>
            <a 
              href="/" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
