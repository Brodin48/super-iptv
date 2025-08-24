import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#DC2626',
}

export const metadata: Metadata = {
  title: 'Super-IPTV - Premium IPTV Service | 25.000+ Kanalen | super-iptv.nl',
  description: 'Ervaar premium Super-IPTV service met 25.000+ live kanalen en 26.000+ films. Krijg directe IPTV toegang met HD/4K kwaliteit. Sluit je aan bij miljoenen die Super-IPTV vertrouwen voor ultieme entertainment.',
  keywords: 'Super-IPTV, super-iptv.nl, IPTV service, IPTV abonnement, IPTV gratis proefperiode, IPTV app, live tv, streaming, films, sportkanalen, Nederlandse IPTV',
  verification: {
    google: 'V8NWMAKmJDsAejY_oVeKROeukdyIIg-ZqK1t096BMTA',
  },
  openGraph: {
    title: 'Super-IPTV - Premium IPTV Service',
    description: 'Krijg Super-IPTV toegang met 25.000+ live TV kanalen en 26.000+ films. Beste IPTV abonnement service.',
    url: 'https://super-iptv.nl',
    siteName: 'Super-IPTV',
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Super-IPTV - Premium IPTV Abonnement',
    description: 'Krijg Super-IPTV toegang met 25.000+ kanalen. Beste IPTV service.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/images/favicon.ico', type: 'image/x-icon' },
      { url: '/images/favicon.ico', sizes: 'any' }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <head>
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
