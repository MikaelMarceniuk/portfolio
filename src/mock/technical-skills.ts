import { SkillsCategories } from '@/types/skills.type'
import {
  Braces,
  Cloud,
  Database,
  FlaskConical,
  Monitor,
  Server,
} from 'lucide-react'

// Nome e lista de skills de cada categoria ficam em data.technicalSkills.<id> (i18n)
export const SKILLS_CATEGORIES: SkillsCategories[] = [
  { id: 'languages', icon: Braces, color: '#eab308' },
  { id: 'frontend', icon: Monitor, color: '#3d8bfd' },
  { id: 'backend', icon: Server, color: '#de7507' },
  { id: 'databases', icon: Database, color: '#22c55e' },
  { id: 'cloud', icon: Cloud, color: '#a855f7' },
  { id: 'testingArchitecture', icon: FlaskConical, color: '#f43f5e' },
]
