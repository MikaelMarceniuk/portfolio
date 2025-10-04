import { z } from 'zod'

export const createProjectSchema = z.object({
  name: z.string().min(1, 'Name is required'),

  description: z.object({
    en: z.string().min(1, 'Description EN is required'),
    'pt-br': z.string().min(1, 'Description PT is required'),
  }),

  impact: z.object({
    en: z.string().min(1, 'Impact EN is required'),
    'pt-br': z.string().min(1, 'Impact PT is required'),
  }),

  stack: z.array(z.string()).min(2, 'At least two stack items are required'),

  githubLink: z
    .string()
    .url('Invalid GitHub URL')
    .min(1, 'GitHub link is required'),

  liveLink: z.string().url('Invalid Live URL').min(1, 'Live link is required'),
})
