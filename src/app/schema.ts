export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Elite Consult',
  description: 'Luxury business consulting services for enterprises looking to elevate their brand and operations.',
  url: 'https://eliteconsult.com',
  logo: 'https://eliteconsult.com/images/logo.png',
  sameAs: [
    'https://twitter.com/eliteconsult',
    'https://linkedin.com/company/eliteconsult',
    'https://instagram.com/eliteconsult'
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Luxury Lane',
    addressLocality: 'Beverly Hills',
    addressRegion: 'CA',
    postalCode: '90210',
    addressCountry: 'US'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-310-555-0123',
    contactType: 'customer service',
    email: 'contact@eliteconsult.com'
  }
};

export const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  provider: {
    '@type': 'Organization',
    name: 'Elite Consult'
  },
  serviceType: 'Business Consulting',
  areaServed: {
    '@type': 'Country',
    name: 'United States'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Consulting Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Strategic Planning',
          description: 'Comprehensive business strategy development'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Brand Development',
          description: 'Luxury brand positioning and development'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Digital Transformation',
          description: 'Modern digital solutions for luxury businesses'
        }
      }
    ]
  }
};
