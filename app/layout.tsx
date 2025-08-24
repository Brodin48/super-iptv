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
  title: 'Super-IPTV - Premium IPTV Service | 25,000+ Channels | super-iptv.nl',
  description: 'Experience premium Super-IPTV service with 25,000+ live channels & 26,000+ movies. Get instant IPTV access with HD/4K quality. Join millions who trust Super-IPTV for ultimate entertainment.',
  keywords: 'Super-IPTV, super-iptv.nl, IPTV service, IPTV subscription, IPTV free trial, IPTV app, live tv, streaming, movies, sports channels',
  verification: {
    google: 'V8NWMAKmJDsAejY_oVeKROeukdyIIg-ZqK1t096BMTA',
  },
  openGraph: {
    title: 'Super-IPTV - Premium IPTV Service',
    description: 'Get Super-IPTV access with 25,000+ live TV channels and 26,000+ movies. Best IPTV subscription service.',
    url: 'https://super-iptv.nl',
    siteName: 'Super-IPTV',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Super-IPTV - Premium IPTV Subscription',
    description: 'Get Super-IPTV access with 25,000+ channels. Best IPTV service.',
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
    <html lang="en">
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
