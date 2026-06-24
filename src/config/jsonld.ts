import { AvailableLocales } from '@/i18n/available-locales'

const BASE_URL = 'https://mmarceniuk.dev'

const jobTitle = {
  'en-us': 'Fullstack Developer',
  'pt-br': 'Desenvolvedor Fullstack',
}

const description = {
  'en-us':
    'Fullstack Developer with 6+ years of experience building web, mobile, and backend systems across betting, enterprise automation, and logistics.',
  'pt-br':
    'Desenvolvedor Fullstack com mais de 6 anos de experiência construindo sistemas web, mobile e backend em setores como apostas, automação empresarial e logística.',
}

export function getJsonLd(locale: AvailableLocales) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mikael Marceniuk',
    url: `${BASE_URL}/${locale}`,
    jobTitle: jobTitle[locale],
    description: description[locale],
    inLanguage: locale === 'en-us' ? 'en-US' : 'pt-BR',
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
  }
}
