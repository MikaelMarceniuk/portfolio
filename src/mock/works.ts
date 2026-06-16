import { FeaturedWork } from '@/types/featured-work.type'

export const WORK_DATA: FeaturedWork[] = [
  {
    id: '01',
    order: 1,
    category: 'Fintech Infrastructure',
    title: 'Nexus CRM',
    description:
      'High-frequency trading interface for cryptocurrency assets with real-time WebSocket updates and custom charting libraries for institutional investors.',
    tags: [
      'Next.js',
      'Elysia.js',
      'Typescript',
      'Postgres',
      'Docker',
      'Websockets',
      'Integration',
    ],
    ctaPrimary: {
      text: 'Know more',
      hrefTo: '/work/nexus-crm',
    },
    isFeatured: true,
  },
  {
    id: '02',
    order: 2,
    category: 'Web3 & Blockchain',
    title: 'Speaker Trainer for Business',
    description:
      'High-throughput indexing engine for EVM-compatible networks, capable of processing blocks concurrently with zero data loss.',
    tags: [
      'Next.js',
      'Elysia.js',
      'Typescript',
      'Postgres',
      'Docker',
      'IA',
      'Integration',
      'Websockets',
    ],
    ctaPrimary: {
      text: 'Know more',
      hrefTo: '/work/speaker-trainer-for-business',
    },
    isFeatured: true,
  },
  {
    id: '03',
    order: 3,
    category: 'Security & Auth',
    title: 'Lumina Ecommerce',
    description:
      'Zero-knowledge authentication toolkit with biological factor support, built for high-security applications and banking software.',
    tags: [
      'Next.js',
      'Elysia.js',
      'Typescript',
      'Postgres',
      'Docker',
      'Integration',
    ],
    ctaPrimary: {
      text: 'Know more',
      hrefTo: '/work/lumina-ecommerce',
    },
    isFeatured: false,
  },
  {
    id: '04',
    order: 4,
    category: 'Cloud Architecture',
    title: 'URL Shortner',
    description:
      'Edge computing delivery network focusing on ultra-low latency assets caching and predictive route optimization powered by analytics.',
    tags: [
      'Next.js',
      'Elysia.js',
      'Typescript',
      'Postgres',
      'Docker',
      'Multi-tenant',
    ],
    ctaPrimary: {
      text: 'Know more',
      hrefTo: '/work/lumina-ecommerce',
    },
    ctaSecondary: 'Benchmarks',
    isFeatured: false,
  },
]
