import { SITE_NAME, SITE_URL, CONTACT } from '@/lib/constants/site'

interface JsonLdProps {
  type?: 'Organization' | 'WebSite' | 'LocalBusiness' | 'Article' | 'BreadcrumbList'
  data?: Record<string, unknown>
}

export default function JsonLd({ type = 'Organization', data = {} }: JsonLdProps) {
  let jsonLd: Record<string, unknown> = {}

  switch (type) {
    case 'Organization':
      jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/images/logo.png`,
        description: 'Leading IT company in Zimbabwe providing cloud computing, cybersecurity, software development, networking, and hardware solutions.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '313 Samora Machel East',
          addressLocality: 'Eastlea, Harare',
          addressCountry: 'ZW',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: CONTACT.phone,
          contactType: 'customer service',
          email: CONTACT.email,
        },
        sameAs: [],
        ...data,
      }
      break

    case 'WebSite':
      jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_NAME,
        url: SITE_URL,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${SITE_URL}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
        ...data,
      }
      break

    case 'LocalBusiness':
      jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/images/logo.png`,
        description: 'Leading IT solutions provider in Zimbabwe with over 30 years of experience.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '313 Samora Machel East',
          addressLocality: 'Eastlea',
          addressRegion: 'Harare',
          addressCountry: 'ZW',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -17.8244,
          longitude: 31.0912,
        },
        telephone: CONTACT.phone,
        email: CONTACT.email,
        openingHours: 'Mo-Fr 08:00-17:00',
        priceRange: '$$',
        ...data,
      }
      break

    case 'Article':
      jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/images/logo.png`,
          },
        },
        ...data,
      }
      break

    case 'BreadcrumbList':
      jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        ...data,
      }
      break
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[]
}) {
  const itemListElement = items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${SITE_URL}${item.url}`,
  }))

  return (
    <JsonLd
      type="BreadcrumbList"
      data={{
        itemListElement,
      }}
    />
  )
}
