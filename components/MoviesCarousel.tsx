'use client'

export default function MoviesCarousel() {
  // Comprehensive array of all available movie poster filenames
  const movies = [
    '/images/movies carousel /1.png',
    '/images/movies carousel /2.png',
    '/images/movies carousel /2 2.png',
    '/images/movies carousel /3.png',
    '/images/movies carousel /3 2.png',
    '/images/movies carousel /4.png',
    '/images/movies carousel /5.png',
    '/images/movies carousel /6.png',
    '/images/movies carousel /6 2.png',
    '/images/movies carousel /7.png',
    '/images/movies carousel /7 copy.png',
    '/images/movies carousel /8.png',
    '/images/movies carousel /277064-barbie-0-230-0-345-crop.png',
    '/images/movies carousel /398009-killers-of-the-flower-moon-0-230-0-345-crop.png',
    '/images/movies carousel /avatar-the-way-of-water-font.png',
    '/images/movies carousel /bupkis_TV-Fontmeme.png',
    '/images/movies carousel /tulsa-king-font.png'
  ]

  // Function to get descriptive alt text from filename
  const getMovieTitle = (filename: string) => {
    const name = filename.split('/').pop()?.replace('.png', '') || '';
    if (name.includes('barbie')) return 'Barbie Movie Poster';
    if (name.includes('killers-of-the-flower-moon')) return 'Killers of the Flower Moon Movie Poster';
    if (name.includes('avatar-the-way-of-water')) return 'Avatar: The Way of Water Movie Poster';
    if (name.includes('bupkis')) return 'Bupkis TV Show Poster';
    if (name.includes('tulsa-king')) return 'Tulsa King TV Show Poster';
    return `Movie Poster ${name}`;
  }

  const MoviePoster = ({ movie, index, keyPrefix }: { movie: string, index: number, keyPrefix: string }) => (
    <div
      key={`${keyPrefix}-${index}`}
      className="flex-shrink-0 w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64"
    >
      <div className="relative group overflow-hidden rounded-lg bg-gray-800 shadow-xl hover:scale-105 transition-all duration-300">
        <div className="relative w-full h-44 sm:h-56 md:h-64 lg:h-80 xl:h-96">
          <img
            src={movie}
            alt={getMovieTitle(movie)}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              console.log(`Movie poster failed to load: ${movie}`);
              const target = e.currentTarget;
              target.style.display = 'none';
              const container = target.parentElement;
              if (container) {
                container.innerHTML = `
                  <div class="w-full h-full bg-gray-700 flex items-center justify-center">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="60" height="60" fill="#4B5563" rx="8"/>
                      <path d="M20 20h20v20H20z" fill="#9CA3AF" opacity="0.5"/>
                      <circle cx="25" cy="25" r="2" fill="#6B7280"/>
                      <path d="m22 35 3-3 3 3 5-5" stroke="#6B7280" stroke-width="2" fill="none"/>
                    </svg>
                  </div>
                `;
              }
            }}
          />
        </div>
        
        {/* Hover overlay - Hidden on mobile for better performance */}
        <div className="hidden sm:flex absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <div className="w-0 h-0 border-l-[8px] md:border-l-[12px] border-l-white border-t-[6px] md:border-t-[8px] border-t-transparent border-b-[6px] md:border-b-[8px] border-b-transparent ml-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section className="py-12 sm:py-16 bg-dark-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
          26,000+ Movies & TV Shows Available
        </h2>
        
        {/* Infinite scrolling movies container */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-3 sm:space-x-4 md:space-x-6 animate-scroll-infinite">
            {/* First set of movies */}
            {movies.map((movie, index) => (
              <MoviePoster key={`first-${index}`} movie={movie} index={index} keyPrefix="first" />
            ))}
            
            {/* Duplicate set for seamless loop */}
            {movies.map((movie, index) => (
              <MoviePoster key={`second-${index}`} movie={movie} index={index} keyPrefix="second" />
            ))}
            
            {/* Third set for extra smoothness */}
            {movies.map((movie, index) => (
              <MoviePoster key={`third-${index}`} movie={movie} index={index} keyPrefix="third" />
            ))}
          </div>
        </div>
        
        <p className="text-center text-gray-300 mt-6 sm:mt-8 text-sm sm:text-base lg:text-lg">
          Enjoy the latest movies and TV shows with your IPTV Baba subscription
        </p>
      </div>
    </section>
  )
}