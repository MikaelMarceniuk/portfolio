import { LucideIcon } from 'lucide-react'

export type Skill = {
  name: string
  progress?: number
}

export type SkillsCategories = {
  icon: LucideIcon
  name: string
  color: string
  skills: Skill[]
}
