import Header from '../components/Header'
import Hero from '../components/Hero'
import ChannelLogosCarousel from '../components/ChannelLogosCarousel'
import SportsChannelsMarquee from '../components/SportsChannelsMarquee'
import MoviesCarousel from '../components/MoviesCarousel'
import Features from '../components/Features'
import SEOContent from '../components/SEOContent'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import StructuredData from '../components/StructuredData'

export default function Home() {
  return (
    <main className="min-h-screen">
      <StructuredData />
      <Header />
      <Hero />
      <ChannelLogosCarousel />
      <SportsChannelsMarquee />
      <MoviesCarousel />
      <Pricing />
      <Features />
      <SEOContent />
      <Testimonials />
      <Footer />
    </main>
  )
}
