import { AvailableLocales } from '@/i18n/available-locales'

const BASE_URL = 'https://mmarceniuk.dev'

const jobTitle = {
  'en-us': 'Fullstack Developer',
  'pt-br': 'Desenvolvedor Fullstack',
}

const description = {
  'en-us':
    'Fullstack Developer with 6 years of experience building web, mobile and backend systems in TypeScript and Java/Spring Boot, across betting, enterprise automation, logistics and multi-tenant scheduling.',
  'pt-br':
    'Desenvolvedor Fullstack com 6 anos de experiência construindo sistemas web, mobile e backend em TypeScript e Java/Spring Boot, em setores como apostas, automação empresarial, logística e agendamento multi-tenant.',
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
      'Java',
      'Spring Boot',
      'Python',
      'PostgreSQL',
      'React Native',
    ],
    sameAs: [
      'https://www.linkedin.com/in/mikael-marceniuk/',
      'https://github.com/MikaelMarceniuk',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Myp-7 Tecnologia',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São Paulo',
      addressCountry: 'BR',
    },
  }
}
