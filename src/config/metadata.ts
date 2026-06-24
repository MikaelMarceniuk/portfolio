import { AvailableLocales } from '@/i18n/available-locales'
import type { Metadata } from 'next'

const BASE_URL = 'https://mmarceniuk.dev'

const keywordsEn = [
  // Hiring intent — international
  'fullstack developer for hire',
  'freelance fullstack developer',
  'hire fullstack developer Brazil',
  'fullstack developer available',
  'remote fullstack developer',
  'contract fullstack developer',
  'fullstack developer open to work',
  'Brazilian fullstack developer',
  // Target markets
  'fullstack developer Germany remote',
  'fullstack developer Canada remote',
  'fullstack developer USA remote',
  'Node.js developer Europe',
  'Next.js developer Europe',
  // Specific experience
  'fullstack developer fintech',
  'fullstack developer betting platform',
  'AWS fullstack developer',
  'fullstack developer TypeScript',
  // Stack
  'Node.js developer remote',
  'Next.js developer freelance',
  'React developer for hire',
  'fullstack developer React Node',
  'TypeScript developer remote',
  'NestJS developer',
  // Identity
  'Mikael Marceniuk',
  'mmarceniuk',
  'mmarceniuk.dev',
]

const keywordsPt = [
  // Intenção de contratação — nacional
  'desenvolvedor fullstack São Paulo',
  'desenvolvedor senior São Paulo',
  'desenvolvedor Node.js São Paulo',
  'desenvolvedor fullstack freelance',
  'desenvolvedor fullstack para contratar',
  'desenvolvedor fullstack disponível',
  'desenvolvedor fullstack remoto',
  'desenvolvedor PJ',
  'desenvolvedor PJ São Paulo',
  'contratar desenvolvedor fullstack',
  'desenvolvedor fullstack contrato PJ',
  // Stack específica
  'desenvolvedor React',
  'desenvolvedor Node.js',
  'desenvolvedor Next.js',
  'desenvolvedor TypeScript',
  'desenvolvedor NestJS',
  'desenvolvedor AWS',
  // Identidade
  'Mikael Marceniuk',
  'mmarceniuk',
  'mmarceniuk.dev',
]

const content = {
  'en-us': {
    title: 'Mikael Marceniuk | Fullstack Developer',
    description:
      'Fullstack Developer with 6+ years of experience building web, mobile, and backend systems. Specialized in Node.js, React, Next.js and NestJS with hands-on AWS, Docker and Kubernetes experience.',
    ogDescription:
      'Fullstack Developer with 6+ years of experience building web, mobile, and backend systems at scale.',
    ogLocale: 'en_US',
    ogAlt: 'Mikael Marceniuk | Fullstack Developer',
    keywords: keywordsEn,
  },
  'pt-br': {
    title: 'Mikael Marceniuk | Desenvolvedor Fullstack',
    description:
      'Desenvolvedor Fullstack com mais de 6 anos de experiência construindo sistemas web, mobile e backend. Especializado em Node.js, React, Next.js e NestJS com experiência prática em AWS, Docker e Kubernetes.',
    ogDescription:
      'Desenvolvedor Fullstack com mais de 6 anos de experiência construindo sistemas web, mobile e backend em escala.',
    ogLocale: 'pt_BR',
    ogAlt: 'Mikael Marceniuk | Desenvolvedor Fullstack',
    keywords: keywordsPt,
  },
} as const

export function getMetadata(locale: AvailableLocales): Metadata {
  const c = content[locale]
  const url = `${BASE_URL}/${locale}`

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: c.title,
      template: '%s | Mikael Marceniuk',
    },
    description: c.description,
    keywords: c.keywords,
    authors: [{ name: 'Mikael Marceniuk', url: BASE_URL }],
    creator: 'Mikael Marceniuk',
    openGraph: {
      type: 'website',
      locale: c.ogLocale,
      alternateLocale: locale === 'en-us' ? 'pt_BR' : 'en_US',
      url,
      siteName: 'Mikael Marceniuk',
      title: c.title,
      description: c.ogDescription,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: c.ogAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: c.title,
      description: c.ogDescription,
      images: ['/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
      },
    },
    alternates: {
      canonical: url,
      languages: {
        'en-US': `${BASE_URL}/en-us`,
        'pt-BR': `${BASE_URL}/pt-br`,
        'x-default': `${BASE_URL}/en-us`,
      },
    },
  }
}
