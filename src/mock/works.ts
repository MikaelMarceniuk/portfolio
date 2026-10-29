import { FeaturedWork } from '@/types/featured-work.type'

// A ordem das tags é a prioridade: o card mostra as primeiras, o modal mostra todas
export const WORK_DATA: FeaturedWork[] = [
  {
    id: '01',
    order: 1,
    tags: [
      'Next.js',
      'MySQL',
      'Drizzle',
      'Mercado Pago',
      'Melhor Envio',
      'Better Auth',
      'Tiptap',
      'Sharp',
      'Google Analytics',
      'GitHub Actions',
    ],
    links: {
      live: 'https://dalua.top/',
    },
    imageUrl: '/works/dalua-mockup.webp',
    isFeatured: true,
  },
  {
    id: '02',
    order: 2,
    tags: [
      'MERN',
      'React',
      'Yjs (CRDT)',
      'Tiptap',
      'Express',
      'MongoDB',
      'Better Auth',
      'Vite',
      'CI/CD',
    ],
    links: {
      live: 'https://collaborative-text-editor.mmarceniuk.dev/',
      repo: 'https://github.com/MikaelMarceniuk/collaborative-text-editor',
    },
    imageUrl: '/works/collaborative-text-editor-mockup.webp',
    isFeatured: true,
  },
  {
    id: '03',
    order: 3,
    tags: ['Next.js', 'next-intl', 'SEO', 'Umami', 'Docker', 'GitHub Actions'],
    links: {
      live: 'https://higher-up.com.br/',
    },
    imageUrl: '/works/higher-up-mockup.webp',
    isFeatured: true,
  },
]
