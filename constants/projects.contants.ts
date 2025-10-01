import { Project } from '@/types/project.types'

export const projects: Project[] = [
  {
    name: 'EcoCommerce Platform',
    description:
      'Full-stack e-commerce platform for sustainable products with real-time inventory management',
    impact:
      'Increased conversion rate by 35% and reduced page load time by 50%',
    stack: ['Next.js', 'TypeScript', 'NestJS', 'PostgreSQL'],
    image: '/ecommerce-dashboard.png',
    githubLink: '#',
    liveLink: '#',
  },
  {
    name: 'TaskFlow SaaS',
    description:
      'Project management application with real-time collaboration and automated workflows',
    impact:
      'Serves 10K+ active users with 99.9% uptime and sub-200ms response times',
    stack: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
    image: '/project-management-dashboard.png',
    githubLink: '#',
    liveLink: '#',
  },
  {
    name: 'FinTech API Gateway',
    description:
      'Microservices architecture for financial data processing with advanced security features',
    impact:
      'Processes 1M+ transactions daily with 40% cost reduction in infrastructure',
    stack: ['NestJS', 'TypeScript', 'Redis', 'Docker'],
    image: '/fintech-api-dashboard.jpg',
    githubLink: '#',
    liveLink: '#',
  },
] as const
