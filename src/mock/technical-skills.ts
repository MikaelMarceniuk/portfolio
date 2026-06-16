import { SkillsCategories } from '@/types/skills.type'
import { Monitor, Server, Database, Cloud, GitBranch } from 'lucide-react'

export const SKILLS_CATEGORIES: SkillsCategories[] = [
  {
    icon: Monitor,
    name: 'Frontend',
    color: '#3d8bfd',
    skills: [
      { name: 'React / Next.js', progress: 95 },
      { name: 'TypeScript', progress: 90 },
      { name: 'Tailwind CSS', progress: 92 },
      { name: 'Framer Motion', progress: 80 },
      { name: 'GraphQL Client', progress: 75 },
    ],
  },
  {
    icon: Server,
    name: 'Backend',
    color: '#de7507',
    skills: [
      { name: 'Node.js / Bun', progress: 90 },
      { name: 'Elysia / Hono', progress: 85 },
      { name: 'Go', progress: 70 },
      { name: 'REST / GraphQL', progress: 88 },
      { name: 'WebSockets', progress: 80 },
    ],
  },
  {
    icon: Database,
    name: 'Database',
    color: '#22c55e',
    skills: [
      { name: 'PostgreSQL', progress: 88 },
      { name: 'Redis', progress: 80 },
      { name: 'MongoDB', progress: 75 },
      { name: 'Drizzle / Prisma', progress: 85 },
      { name: 'Supabase', progress: 82 },
    ],
  },
  {
    icon: Cloud,
    name: 'Cloud & Infra',
    color: '#a855f7',
    skills: [
      { name: 'AWS (EC2, S3, RDS)', progress: 78 },
      { name: 'Vercel', progress: 90 },
      { name: 'VPS / Caddy', progress: 85 },
      { name: 'Nginx', progress: 75 },
    ],
  },
  {
    icon: GitBranch,
    name: 'DevOps & CI/CD',
    color: '#f43f5e',
    skills: [
      { name: 'Docker', progress: 85 },
      { name: 'GitHub Actions', progress: 88 },
      { name: 'Turborepo', progress: 80 },
      { name: 'Terraform', progress: 65 },
      { name: 'K8s', progress: 60 },
    ],
  },
]
