import { FeaturedWork } from '@/types/featured-work.type'

export const WORK_DATA: FeaturedWork[] = [
  {
    id: '01',
    order: 1,
    category: 'Fintech Infrastructure',
    title: 'AlphaTrader API',
    description:
      'High-frequency trading interface for cryptocurrency assets with real-time WebSocket updates and custom charting libraries for institutional investors.',
    tags: ['TypeScript', 'Node.js', 'WebSockets', 'Redis'],
    ctaPrimary: 'View Case Study',
    ctaSecondary: 'API Docs',
    isFeatured: true,
  },
  {
    id: '02',
    order: 2,
    category: 'Web3 & Blockchain',
    title: 'LedgerSync Core',
    description:
      'High-throughput indexing engine for EVM-compatible networks, capable of processing blocks concurrently with zero data loss.',
    tags: ['Go', 'GraphQL', 'PostgreSQL', 'Docker'],
    ctaPrimary: 'Read Technical Spec',
    ctaSecondary: 'GitHub Repo',
    isFeatured: true,
  },
  {
    id: '03',
    order: 3,
    category: 'Security & Auth',
    title: 'VaultGuard SDK',
    description:
      'Zero-knowledge authentication toolkit with biological factor support, built for high-security applications and banking software.',
    tags: ['Rust', 'WebAssembly', 'Next.js', 'Prisma'],
    ctaPrimary: 'View Showcase',
    ctaSecondary: 'NPM Package',
    isFeatured: false,
  },
  {
    id: '04',
    order: 4,
    category: 'Cloud Architecture',
    title: 'Hydra CDN',
    description:
      'Edge computing delivery network focusing on ultra-low latency assets caching and predictive route optimization powered by analytics.',
    tags: ['C++', 'Kubernetes', 'Prometheus', 'gRPC'],
    ctaPrimary: 'Case Study',
    ctaSecondary: 'Benchmarks',
    isFeatured: false,
  },
]
