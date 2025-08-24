import { Metadata } from 'next'
import TopHeader from '../../components/TopHeader'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Star, Zap, Shield, Users, Clock, CheckCircle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Over Super-IPTV - Premium IPTV Service Provider',
  description: 'Leer meer over Super-IPTV - de toonaangevende leverancier van IPTV abonnementen met 25.000+ kanalen en premium streaming kwaliteit sinds 2019.',
  keywords: 'over Super-IPTV, Super-IPTV bedrijf, IPTV provider, premium IPTV service, Super-IPTV geschiedenis'
}

export default function About() {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "100K+", label: "Tevreden Klanten" },
    { icon: <Star className="w-8 h-8" />, number: "25K+", label: "Live TV Kanalen" },
    { icon: <CheckCircle className="w-8 h-8" />, number: "99.9%", label: "Uptime Garantie" },
    { icon: <Clock className="w-8 h-8" />, number: "6+", label: "Jaar Ervaring" }
  ]

  const features = [
    {
      icon: <Zap className="w-12 h-12 text-primary-600" />,
      title: "Bliksemsnelle Streaming",
      description: "Ervaar buffervrije IPTV streaming met onze premium servers en geavanceerde technologie."
    },
    {
      icon: <Shield className="w-12 h-12 text-primary-600" />,
      title: "Veilig & Betrouwbaar",
      description: "Jouw Super-IPTV abonnement is beschermd met enterprise-grade beveiliging en 99.9% uptime."
    },
    {
      icon: <Users className="w-12 h-12 text-primary-600" />,
      title: "Klant Eerst",
      description: "Onze Super-IPTV service bevat 24/7 premium ondersteuning om ervoor te zorgen dat jouw streaming ervaring perfect is."
    }
  ]

  return (
    <main className="min-h-screen">
      <TopHeader />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Over <span className="text-blue-300">Super-IPTV</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Jouw vertrouwde leverancier van premium IPTV abonnementen, die uitzonderlijke 
            streaming ervaringen levert sinds 2019 met de beste IPTV service in de industrie.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center text-primary-600 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Onze Super-IPTV Reis
            </h2>
            
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed mb-8">
                Sinds 2019 staat Super-IPTV aan de voorhoede van het revolutioneren van thusentertainment 
                door onze premium IPTV abonnementen. We begonnen met een eenvoudige missie: de beste IPTV service leveren 
                die kwaliteit, betrouwbaarheid en betaalbaarheid combineert.
              </p>
              
              <p className="text-lg leading-relaxed mb-8">
                Ons Super-IPTV platform is gegroeid om meer dan 100.000 tevreden klanten wereldwijd te bedienen, 
                met toegang tot 25.000+ live TV kanalen en 26.000+ films en TV series. We hebben 
                onze reputatie opgebouwd door de meest uitgebreide IPTV ervaring op de markt te leveren.
              </p>
              
              <p className="text-lg leading-relaxed">
                Vandaag staat Super-IPTV bekend als de premier bestemming voor IPTV abonnementen, 
                en blijven we innoveren en onze service verbeteren om te voldoen aan de evoluerende behoeften van moderne 
                entertainment consumenten die de beste IPTV oplossingen eisen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Waarom Kiezen Voor Onze Super-IPTV Service?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Klaar voor Jouw Super-IPTV Ervaring?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Sluit je aan bij duizenden tevreden klanten die onze premium Super-IPTV service hebben gekozen 
            voor hun entertainment behoeften.
          </p>
          <a 
            href="https://wa.link/aipqam" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Krijg Super-IPTV Nu
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
