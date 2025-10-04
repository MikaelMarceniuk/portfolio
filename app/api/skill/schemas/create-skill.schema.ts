import { z } from 'zod'

export const createSkillSchema = z.object({
  title: z.object({
    en: z.string().min(1, 'Title EN is required'),
    'pt-br': z.string().min(1, 'Title PT is required'),
  }),
  skills: z
    .array(
      z.object({
        en: z.string().min(1, 'Skill EN is required'),
        'pt-br': z.string().min(1, 'Skill PT is required'),
      })
    )
    .min(1, 'At least one skill is required'),
})

export const createSkillsSchema = z.array(createSkillSchema)
