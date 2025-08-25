'use client'

export default function ChannelLogosCarousel() {
  // Generate array of logo filenames
  const logos = Array.from({ length: 17 }, (_, i) => `/images/logos/${i + 1}.webp`)
  
  const ChannelLogo = ({ logo, index, keyPrefix }: { logo: string, index: number, keyPrefix: string }) => (
    <div
      key={`${keyPrefix}-${index}`}
      className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-white rounded-lg shadow-md p-2 sm:p-3 md:p-4 flex items-center justify-center hover:shadow-lg transition-shadow"
    >
      <div className="relative w-full h-full">
        <img
          src={logo}
          alt={`Channel ${index + 1} Logo`}
          className="w-full h-full object-contain"
          loading="lazy"
          sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 96px, 128px"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjRjNGNEY2IiByeD0iOCIvPgo8Y2lyY2xlIGN4PSI0MCIgY3k9IjQwIiByPSIxNSIgZmlsbD0iI0Q1RDdEQSIvPgo8L3N2Zz4K"
          onError={(e) => {
            console.log(`Channel logo failed to load: ${logo}`);
            const target = e.currentTarget;
            target.style.display = 'none';
            const container = target.parentElement;
            if (container) {
              container.innerHTML = `
                <div class="w-full h-full bg-gray-200 flex items-center justify-center rounded">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" fill="#E5E7EB" rx="4"/>
                    <circle cx="16" cy="16" r="8" fill="#9CA3AF"/>
                    <text x="16" y="20" font-family="Arial, sans-serif" font-size="8" text-anchor="middle" fill="white">TV</text>
                  </svg>
                </div>
              `;
            }
          }}
        />
      </div>
    </div>
  )
  
  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
          Beschikbaar op 25.000+ Premium Kanalen
        </h2>
        
        {/* Infinite scrolling logos container */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-4 sm:space-x-6 md:space-x-8 animate-scroll-fast">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <ChannelLogo key={`first-${index}`} logo={logo} index={index} keyPrefix="first" />
            ))}
            
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <ChannelLogo key={`second-${index}`} logo={logo} index={index} keyPrefix="second" />
            ))}
          </div>
        </div>
        
        <p className="text-center text-gray-600 mt-6 sm:mt-8 text-sm sm:text-base lg:text-lg">
          Stream van topnetwerken wereldwijd met uw Super IPTV abonnement
        </p>
      </div>
    </section>
  )
}