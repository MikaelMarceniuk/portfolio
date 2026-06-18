import { FeaturedWork } from '@/types/featured-work.type'

export const WORK_DATA: FeaturedWork[] = [
  {
    id: '01',
    order: 1,
    category: 'SaaS & Automation',
    title: '',
    description: '',
    tags: [
      'Next.js',
      'Elysia.js',
      'TypeScript',
      'PostgreSQL',
      'Docker',
      'WebSockets',
      'WhatsApp API',
      'CI/CD',
    ],
    ctaPrimary: {
      text: '',
      hrefTo: 'https://github.com/MikaelMarceniuk/nexus-crm',
    },
    imageUrl: '/works/nexuscrm-mockup.png',
    isFeatured: true,
  },
  {
    id: '02',
    order: 2,
    category: 'AI & Productivity',
    title: '',
    description: '',
    tags: [
      'Next.js',
      'Elysia.js',
      'TypeScript',
      'PostgreSQL',
      'Docker',
      'LLM',
      'Speech-to-Text',
      'CI/CD',
    ],
    ctaPrimary: {
      text: '',
      hrefTo: 'https://github.com/MikaelMarceniuk/speaker-trainer-for-business',
    },
    imageUrl: '/works/speaker-trainer-for-business-mockup.png',
    isFeatured: true,
  },
]
