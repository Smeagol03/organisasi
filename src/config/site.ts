/**
 * Site Configuration
 * Centralized configuration for site metadata and settings
 */

export const siteConfig = {
  // Basic site info
  name: 'Alpiant.',
  description: 'Official website of our organization - connecting members, sharing news, and building community.',
  url: 'https://your-domain.com',
  
  // Organization info
  organization: {
    name: 'Alpiant.',
    shortName: 'alpiant.',
    description: 'A brief description of your organization.',
    founded: '2020',
    email: 'contact@yourorg.com',
    phone: '+1 (555) 123-4567',
    address: {
      street: '123 Organization Street',
      city: 'City Name',
      state: 'State',
      zipCode: '12345',
      country: 'Country',
    },
  },
  
  // Social media links
  social: {
    instagram: 'https://instagram.com/yourorg',
    twitter: 'https://twitter.com/yourorg',
    facebook: 'https://facebook.com/yourorg',
    youtube: 'https://youtube.com/@yourorg',
    linkedin: 'https://linkedin.com/company/yourorg',
  },
  
  // SEO
  seo: {
    titleTemplate: '%s | Your Organization',
    defaultTitle: 'Your Organization - Building Community Together',
    defaultDescription: 'Official website of our organization - connecting members, sharing news, and building community.',
    keywords: ['organization', 'community', 'nonprofit', 'volunteer'],
    author: 'Your Organization',
    robots: 'index, follow',
  },
  
  // Theme
  theme: {
    primaryColor: '#2563EB',
    accentColor: '#F97316',
  },
}

export type SiteConfig = typeof siteConfig
