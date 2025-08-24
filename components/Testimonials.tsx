'use client'

import { Star, Quote, MessageCircle } from 'lucide-react'

export default function Testimonials() {
  // Real WhatsApp testimonial screenshots
  const whatsappTestimonials = [
    {
      image: '/images/testimonial/11 (3).webp',
      alt: 'WhatsApp testimonial from satisfied Super-IPTV customer'
    },
    {
      image: '/images/testimonial/3 (2).webp', 
      alt: 'Real WhatsApp review from Super-IPTV client'
    },
    {
      image: '/images/testimonial/5 (1) (1).webp',
      alt: 'Authentic WhatsApp feedback from IPTV customer'
    },
    {
      image: '/images/testimonial/6 (2).webp',
      alt: 'Genuine WhatsApp testimonial about IPTV service'
    },
    {
      image: '/images/testimonial/8 (1).webp',
      alt: 'Real client WhatsApp message testimonial'
    }
  ]

  const testimonials = [
    {
      name: "Michael Schmidt",
      country: "Germany", 
      rating: 5,
      color: "#4F46E5", // Blue
      avatar: "/images/avatars/michael.jpg",
      text: "I ordered it at 11pm, they activated it in less than 5 minutes. No regrets, Great image quality, Fast and professional service. I highly recommend it."
    },
    {
      name: "Erik Larsson", 
      country: "Norway",
      rating: 5,
      color: "#06B6D4", // Cyan
      avatar: "/images/avatars/erik.jpg",
      text: "Easy to set up, and convenient to use, super clear HD view and lots of European channels. IPTV folders are sorted elegantly. Keep up the good work!"
    },
    {
      name: "Anna Andersson",
      country: "Sweden", 
      rating: 5,
      color: "#EC4899", // Pink
      avatar: "/images/avatars/anna.jpg",
      text: "This is the best Super-IPTV service, that I would recommend anyone to use. Staff are so friendly, Channels are working so great too."
    },
    {
      name: "Lars Hansen",
      country: "Norway",
      rating: 5,
      color: "#10B981", // Green
      avatar: "/images/avatars/lars.jpg",
      text: "I was looking for a subscription and i have found Super-IPTV, the service was great and the iptv is very good, I liked the quality and all my favorite football channels are in."
    },
    {
      name: "James Wilson",
      country: "UK",
      rating: 5,
      color: "#F59E0B", // Orange
      avatar: "/images/avatars/james.jpg",
      text: "Very great channel selection and VOD's, my family is very happy with the service for the last 2 years. the technical support is very responsive and supportive."
    },
    {
      name: "Sami Virtanen", 
      country: "Finland",
      rating: 5,
      color: "#8B5CF6", // Purple
      avatar: "/images/avatars/sami.jpg",
      text: "I recommend this Super-IPTV Service for all those who love watching Soccer. FHD channels and real time live streaming that too at a great price tag, what else do we need?"
    }
  ]

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mr-4">
              What Our Customers Say
            </h2>
            <div className="h-8 sm:h-10 md:h-12 flex items-center text-yellow-500 text-2xl">
              ⭐⭐⭐⭐⭐
            </div>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers 
            from around the world have to say about our Super-IPTV service.
          </p>
        </div>

        {/* Trust indicators - moved to top */}
        <div className="mb-12 sm:mb-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-12 bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-100">
            <div className="flex items-center">
              <div className="mr-4">
                <div className="h-8 flex items-center text-yellow-500 text-xl">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-800">Excellent</div>
                <div className="text-sm text-gray-600">Based on 1,250+ reviews</div>
              </div>
            </div>
            <div className="flex items-center text-green-600">
              <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <div className="text-left">
                <div className="font-bold text-lg">Verified Reviews</div>
                <div className="text-sm text-gray-600">From real customers</div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">99.9%</div>
              <div className="text-sm text-gray-600">Uptime Guarantee</div>
            </div>
          </div>
        </div>

        {/* Real WhatsApp Testimonials Section */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <MessageCircle className="w-4 h-4 mr-2" />
              Real WhatsApp Reviews
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Authentic Client <span className="text-primary-600">Conversations</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See what our real customers are saying about Super-IPTV through their actual WhatsApp messages.
            </p>
          </div>

          {/* WhatsApp Screenshots Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 mb-12">
            {whatsappTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="aspect-[9/16] relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      const target = e.currentTarget;
                      const container = target.parentElement;
                      if (container) {
                        container.innerHTML = `
                          <div class="w-full h-full bg-gray-100 flex items-center justify-center">
                            <div class="text-center p-4">
                              <div class="text-gray-400 mb-2">📱</div>
                              <div class="text-sm text-gray-500">WhatsApp Review</div>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                  {/* WhatsApp overlay indicator */}
                  <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                    <MessageCircle className="w-3 h-3 mr-1" />
                    WhatsApp
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="text-center">
            <a 
              href="https://wa.link/bof0mw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat with Us on WhatsApp
            </a>
            <p className="text-gray-600 text-sm mt-3">
              Join thousands of satisfied customers! Get instant support and activation.
            </p>
          </div>
        </div>

        {/* Traditional Testimonials Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Customer <span className="text-primary-600">Reviews</span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied customers across the globe about their Super-IPTV experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card bg-white p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="relative mr-4 flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-gray-100 shadow-md">
                    {testimonial.avatar ? (
                      <img 
                        src={testimonial.avatar} 
                        alt={`${testimonial.name} - Super-IPTV customer`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback to initial letter if image fails to load
                          const target = e.currentTarget;
                          const container = target.parentElement;
                          if (container) {
                            container.style.backgroundColor = testimonial.color;
                            container.innerHTML = `<span class="text-white font-bold text-lg sm:text-xl flex items-center justify-center w-full h-full">${testimonial.name.charAt(0)}</span>`;
                          }
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: testimonial.color }}>
                        <span className="text-white font-bold text-lg sm:text-xl">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  {/* Verified badge */}
                  <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-800 text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-gray-500 mb-2">{testimonial.country}</div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-green-500 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="text-xs sm:text-sm text-gray-500">
                  Verified Customer
                </div>
                <div className="flex items-center text-green-600">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-xs sm:text-sm font-medium">Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
