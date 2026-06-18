import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://mmarceniuk.dev'),
  title: {
    default: 'Mikael Marceniuk | Fullstack Developer',
    template: '%s | Mikael Marceniuk',
  },
  description:
    'Fullstack Developer with 6+ years of experience building web, mobile, and backend systems. Specialized in Node.js, React, Next.js and NestJS with hands-on AWS, Docker and Kubernetes experience.',
  keywords: [
    // Intenção de contratação — internacional
    'fullstack developer for hire',
    'freelance fullstack developer',
    'hire fullstack developer Brazil',
    'fullstack developer available',
    'remote fullstack developer',
    'contract fullstack developer',
    'fullstack developer open to work',
    'Brazilian fullstack developer',

    // Intenção de contratação — nacional
    'desenvolvedor fullstack freelance',
    'desenvolvedor fullstack para contratar',
    'desenvolvedor fullstack disponível',
    'desenvolvedor fullstack remoto',
    'desenvolvedor PJ',
    'desenvolvedor PJ São Paulo',
    'contratar desenvolvedor fullstack',
    'desenvolvedor fullstack contrato PJ',

    // Stack específica
    'Node.js developer remote',
    'Next.js developer freelance',
    'React developer for hire',
    'fullstack developer React Node',
    'TypeScript developer remote',
    'NestJS developer',
    'desenvolvedor React',
    'desenvolvedor Node.js',
    'desenvolvedor Next.js',

    // Identidade
    'Mikael Marceniuk',
    'mmarceniuk',
    'mmarceniuk.dev',
  ],
  authors: [{ name: 'Mikael Marceniuk', url: 'https://mmarceniuk.dev' }],
  creator: 'Mikael Marceniuk',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mmarceniuk.dev',
    siteName: 'Mikael Marceniuk',
    title: 'Mikael Marceniuk | Fullstack Developer',
    description:
      'Fullstack Developer with 6+ years of experience building web, mobile, and backend systems at scale.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mikael Marceniuk | Fullstack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mikael Marceniuk | Fullstack Developer',
    description:
      'Fullstack Developer with 6+ years of experience building web, mobile, and backend systems at scale.',
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
    canonical: 'https://mmarceniuk.dev',
  },
}
