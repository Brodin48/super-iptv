import { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Phone, Mail, Clock, MessageCircle, MapPin, Headphones, Send, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact IPTV Baba - 24/7 Premium Support for Your IPTV Service',
  description: 'Contact IPTV Baba for instant support with your IPTV subscription. Get help via WhatsApp, email or phone. Fast activation and professional service.',
  keywords: 'contact IPTV Baba, IPTV support, IPTV help, IPTV customer service, IPTV Baba contact, IPTV technical support',
  openGraph: {
    title: 'Contact IPTV Baba - Premium IPTV Support',
    description: 'Get instant help with your IPTV Baba subscription. 24/7 WhatsApp support, fast activation, and professional service.',
    images: ['/images/logo.webp'],
  }
}

export default function Contact() {
  const contactMethods = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "WhatsApp Support",
      description: "Get instant help with your IPTV subscription",
      contact: "+1 (323) 704‑4063",
      link: "https://wa.link/bof0mw",
      available: "24/7 Available",
      primary: true
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Support",
      description: "Send us your IPTV service questions",
      contact: "support@iptvbaba.com",
      link: "mailto:support@iptvbaba.com",
      available: "Response within 2 hours"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone Support",
      description: "Call us for immediate IPTV assistance",
      contact: "+1 (323) 704‑4063",
      link: "tel:+13237044063",
      available: "24/7 Support Line"
    }
  ]

  const supportFeatures = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "5-Minute Activation",
      description: "Get your IPTV service activated in less than 5 minutes after payment"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Expert Technical Support",
      description: "Our experienced team helps with setup, troubleshooting, and optimization"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-Language Support",
      description: "We provide support in English, Arabic, French, Spanish, and more"
    },
    {
      icon: <Send className="w-6 h-6" />,
      title: "Remote Assistance",
      description: "Screen sharing and remote setup assistance available when needed"
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact <span className="text-yellow-400">IPTV Baba</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8">
            Need help with your IPTV subscription? Our premium support team is available 24/7 
            to assist you with setup, activation, and any technical questions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://wa.link/bof0mw"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Now
            </a>
            <a 
              href="tel:+13237044063"
              className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Choose Your Preferred Contact Method
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help you get the most out of your IPTV Baba service. 
              Choose the contact method that works best for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <div 
                key={index} 
                className={`bg-white border-2 ${method.primary ? 'border-green-500' : 'border-gray-200'} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105 text-center relative`}
              >
                {method.primary && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className={`flex justify-center ${method.primary ? 'text-green-500' : 'text-primary-600'} mb-6`}>
                  {method.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {method.description}
                </p>
                <div className="mb-6">
                  <div className="text-xl font-semibold text-primary-600 mb-2">
                    {method.contact}
                  </div>
                  <div className="text-sm text-green-600 font-semibold">
                    {method.available}
                  </div>
                </div>
                <a 
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${method.primary ? 'bg-green-500 hover:bg-green-600' : 'bg-primary-600 hover:bg-primary-700'} text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block w-full`}
                >
                  Contact Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Why Our Support Stands Out
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {supportFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-primary-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-primary-600 mb-4">
                How quickly can I get my IPTV service activated?
              </h3>
              <p className="text-gray-600">
                We pride ourselves on lightning-fast activation! Most customers receive their login credentials 
                within 5 minutes of payment. Our 24/7 support team ensures you're watching your favorite content 
                without delay.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-primary-600 mb-4">
                Do you provide setup assistance?
              </h3>
              <p className="text-gray-600">
                Absolutely! We provide comprehensive setup guides for all devices, video tutorials, and if needed, 
                our support team can guide you through the installation process step-by-step via WhatsApp or phone.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-primary-600 mb-4">
                What if I experience buffering or technical issues?
              </h3>
              <p className="text-gray-600">
                Our technical support team is available 24/7 to help resolve any issues. We'll help optimize your 
                settings, recommend the best servers for your location, and ensure you get the smooth streaming 
                experience you deserve.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-primary-600 mb-4">
                Can I change my subscription plan later?
              </h3>
              <p className="text-gray-600">
                Yes! You can upgrade or modify your subscription at any time. Contact our support team, and we'll 
                help you find the perfect plan that meets your needs, whether you need more connections or additional features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Clock className="w-16 h-16 text-primary-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              We're Always Here for You
            </h2>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-primary-600 mb-4">WhatsApp Support</h3>
                  <p className="text-3xl font-bold text-green-600 mb-2">24/7</p>
                  <p className="text-gray-600">Always available for instant messaging</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-600 mb-4">Phone Support</h3>
                  <p className="text-3xl font-bold text-green-600 mb-2">24/7</p>
                  <p className="text-gray-600">Round-the-clock voice support</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-gray-600">
                  <strong>Response Time Guarantee:</strong> WhatsApp replies within 5 minutes, 
                  Email responses within 2 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience Premium IPTV?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers enjoying crystal-clear streaming with IPTV Baba. 
            Contact us now for instant activation!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://wa.link/bof0mw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Start Free Trial
            </a>
            <a 
              href="/pricing"
              className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
            >
              View Pricing Plans
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
