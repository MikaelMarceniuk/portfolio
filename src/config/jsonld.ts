export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mikael Marceniuk',
  url: 'https://mmarceniuk.dev',
  jobTitle: 'Fullstack Developer',
  description:
    'Fullstack Developer with 6+ years of experience building web, mobile, and backend systems across betting, enterprise automation, and logistics.',
  knowsAbout: [
    'Node.js',
    'React',
    'Next.js',
    'NestJS',
    'TypeScript',
    'AWS',
    'Docker',
    'Kubernetes',
    'PostgreSQL',
    'React Native',
  ],
  sameAs: [
    'https://linkedin.com/in/mikael-marceniuk',
    'https://github.com/mmarceniuk',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'São Paulo',
    addressCountry: 'BR',
  },
  availableFor: 'https://schema.org/EmployerAggregateRating',
}
