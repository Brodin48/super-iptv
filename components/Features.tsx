import { Zap, Monitor, Shield, Clock, Star, Users, RotateCcw } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary-500" />,
      title: "Fast Installation",
      description: "Get started in minutes with our quick setup process. No technical knowledge required."
    },
    {
      icon: <Monitor className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary-500" />,
      title: "HD & 4K Quality",
      description: "Experience crystal clear viewing with HD & 4K streaming quality for the ultimate experience."
    },
    {
      icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary-500" />,
      title: "Ultra Fast Server",
      description: "Premium servers ensure smooth streaming with minimal buffering and maximum uptime."
    },
    {
      icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary-500" />,
      title: "Compatible with All Devices",
      description: "Works on Smart TVs, Android boxes, iOS devices, computers, and many more devices."
    },
    {
      icon: <RotateCcw className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary-500" />,
      title: "Regular Content Updates",
      description: "Our content library keeps growing with regular updates to movies, shows, and channels."
    },
    {
      icon: <Clock className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary-500" />,
      title: "24/7 Premium Support",
      description: "Round-the-clock premium customer support to help you with any issues or questions."
    }
  ]

  return (
    <section id="features" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            Why Choose Our <span className="text-primary-600">IPTV Baba</span> Service?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
            Experience the premium <strong>IPTV Baba</strong> difference with our world-class subscription service. 
            <span className="hidden sm:inline"> Our <strong>IPTV Baba</strong> platform works seamlessly with all devices 
            including M3U, Enigma 2, Android Box, Smart TV, MAG Box and more. Get instant access to 
            25,000+ Live Channels & 26,000+ Movies/Shows with your <strong>IPTV Baba</strong> subscription.</span>
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
          <h3 className="text-lg font-bold text-gray-800 mb-3">Complete Device Support</h3>
          <p className="text-sm text-gray-600">
            Works with M3U, Enigma 2, Android Box, Smart TV, MAG Box, iOS, Windows, Mac, and more devices.
          </p>
        </div>
      </div>
    </section>
  )
}
