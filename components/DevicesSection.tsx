'use client'

import { Tv, Smartphone, Tablet, Monitor, Wifi, Cast } from 'lucide-react'

const devices = [
  { name: 'Android TV', image: '/images/devices/androidtv copy (1).png' },
  { name: 'Apple TV', image: '/images/devices/applelog.png' },
  { name: 'Samsung TV', image: '/images/devices/sams.png' },
  { name: 'LG TV', image: '/images/devices/lg.png' },
  { name: 'Fire TV', image: '/images/devices/firetv (1).png' },
  { name: 'Chrome Cast', image: '/images/devices/chrom.png' },
  { name: 'Sony TV', image: '/images/devices/sony.png' },
  { name: 'TCL TV', image: '/images/devices/tcl.png' },
  { name: 'Xbox', image: '/images/devices/xbox.png' },
  { name: 'Android', image: '/images/devices/android.png' },
  { name: 'Formuler', image: '/images/devices/formuller.png' },
  { name: 'X96', image: '/images/devices/x96.png' },
]

export default function DevicesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
            <Cast className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Werkt op <span className="text-blue-600">Al Uw Apparaten</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Geniet van naadloze streaming op elk apparaat. Onze service is compatibel met alle grote platforms en apparaten.
          </p>
        </div>

        {/* Devices Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {devices.map((device, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 mb-4 relative">
                  <img 
                    src={device.image} 
                    alt={device.name}
                    className="w-full h-full object-contain filter group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">
                  {device.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Features Row */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4">
              <Wifi className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Geen Apparatuur Nodig</h3>
            <p className="text-gray-600">Verbind gewoon met het internet en begin direct met streamen</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4">
              <Smartphone className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-Apparaat Ondersteuning</h3>
            <p className="text-gray-600">Kijk op maximaal 5 apparaten tegelijkertijd</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4">
              <Monitor className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">HD & 4K Kwaliteit</h3>
            <p className="text-gray-600">Kristalheldere streaming op alle ondersteunde apparaten</p>
          </div>
        </div>
      </div>
    </section>
  )
}