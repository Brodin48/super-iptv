import Script from 'next/script'

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Super-IPTV",
    "description": "Premium Super-IPTV abonnement service met 25.000+ live TV kanalen en 26.000+ films. HD & 4K streaming kwaliteit.",
    "provider": {
      "@type": "Organization",
      "name": "Super-IPTV",
      "url": "https://super-iptv.nl"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Super-IPTV Abonnement Plannen",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Super-IPTV 1 Maand Plan"
          },
          "price": "10.99",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "IPTV Baba 3 Months Plan"
          },
          "price": "24.99",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "IPTV Baba 6 Months Plan"
          },
          "price": "39.99",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IPTV Baba 12 Months Plan"
          },
          "price": "69.99", 
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IPTV Baba Lifetime Access"
          },
          "price": "199",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IPTV Baba 2 Devices - 1 Month"
          },
          "price": "19.79",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IPTV Baba 2 Devices - 12 Months"
          },
          "price": "89.99",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IPTV Baba 3 Devices - 1 Month"
          },
          "price": "29.68",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IPTV Baba 3 Devices - 12 Months"
          },
          "price": "134.98",
          "priceCurrency": "USD"
        }
      ]
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "10.99",
      "highPrice": "199",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "bestRating": "5",
      "worstRating": "1", 
      "ratingCount": "1250"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "reviewBody": "Amazing Super-IPTV service! Crystal clear quality and tons of channels."
      }
    ]
  }

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Super-IPTV",
    "url": "https://super-iptv.nl",
    "logo": "https://super-iptv.nl/images/logo.svg",
    "description": "Premium Super-IPTV subscription service provider offering 25,000+ live channels and 26,000+ movies with HD & 4K quality.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1 (323) 704‑4063",
      "contactType": "Customer Service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://twitter.com/superiptv",
      "https://facebook.com/superiptv"
    ]
  }

  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Super-IPTV Subscription",
    "description": "Premium Super-IPTV subscription with 25,000+ live TV channels, 26,000+ movies and TV shows, HD & 4K streaming quality.",
    "brand": {
      "@type": "Brand",
      "name": "Super-IPTV"
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "10.99",
      "highPrice": "199", 
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://super-iptv.nl/pricing"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1250"
    }
  }

  return (
    <>
      <Script
        id="structured-data-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="structured-data-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <Script
        id="structured-data-product"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productData) }}
      />
    </>
  )
}
