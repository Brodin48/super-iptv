import { CheckCircle, Star, Zap, Shield } from 'lucide-react'

export default function SEOContent() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main SEO Content */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              De Ultieme <span className="text-primary-600">Super-IPTV</span> Ervaring
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ontdek waarom miljoenen <strong>Super-IPTV</strong> kiezen als hun favoriete streaming oplossing. 
              Ons premium <strong>IPTV abonnement</strong> biedt ongeëvenaarde kwaliteit, betrouwbaarheid, 
              en waarde voor jouw entertainment behoeften.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Premium IPTV Kwaliteit</h3>
              </div>
              <p className="text-gray-600">
                Ervaar kristalheldere HD en 4K streaming met onze premium <strong>Super-IPTV</strong> service. 
                Onze geavanceerde servers zorgen ervoor dat jouw <strong>IPTV</strong> ervaring altijd vloeiend en buffervrij is.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Vertrouwde IPTV Provider</h3>
              </div>
              <p className="text-gray-600">
                Sinds 2019 is <strong>Super-IPTV</strong> de go-to keuze voor streaming liefhebbers. 
                Sluit je aan bij duizenden tevreden klanten die dagelijks vertrouwen op onze <strong>IPTV</strong> service.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Zap className="w-6 h-6 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Snelle IPTV Setup</h3>
              </div>
              <p className="text-gray-600">
                Krijg jouw <strong>IPTV</strong> abonnement direct geactiveerd. Ons snelle setup proces 
                betekent dat je binnen minuten na aankoop kunt genieten van <strong>IPTV</strong> content.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Veilige IPTV Toegang</h3>
              </div>
              <p className="text-gray-600">
                Jouw <strong>IPTV</strong> abonnement is beschermd met enterprise-grade beveiliging. 
                Geniet van gemoedsrust met ons betrouwbare en veilige <strong>IPTV</strong> platform.
              </p>
            </div>
          </div>

          {/* Why Choose Super-IPTV */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Waarom <span className="text-primary-600">Super-IPTV</span> Jouw Beste Keuze Is
            </h3>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                Wanneer je <strong>Super-IPTV</strong> kiest, kies je voor excellentie in streaming entertainment. 
                Onze <strong>IPTV</strong> service onderscheidt zich van de concurrentie met meer dan 25.000 live TV kanalen, 
                26.000+ films en TV series, allemaal geleverd in prachtige HD en 4K kwaliteit.
              </p>
              <p className="mb-4">
                Wat <strong>Super-IPTV</strong> speciaal maakt is onze toewijding aan betrouwbaarheid en klanttevredenheid. 
                Ons <strong>IPTV</strong> platform werkt naadloos op alle apparaten - Smart TV's, Android boxes, 
                iOS apparaten, computers, en meer. Met 99.9% uptime en 24/7 premium ondersteuning is jouw <strong>IPTV</strong> 
                ervaring altijd gegarandeerd uitzonderlijk.
              </p>
              <p>
                Neem geen genoegen met gewone streaming services. Upgrade vandaag naar <strong>Super-IPTV</strong> en ontdek 
                waarom wij de voorkeurskeuze zijn voor premium entertainment wereldwijd. Neem nu jouw <strong>IPTV</strong> 
                abonnement en transformeer jouw kijkervaring voor altijd.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
