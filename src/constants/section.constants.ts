export type SECTION_VALUES = (typeof SECTIONS)[keyof typeof SECTIONS]

export type SECTIONS_KEYS = keyof typeof SECTIONS

export const SECTIONS = {
  HERO: 'hero',
  ABOUT: 'about',
  FEATURED_WORK: 'featured-work',
  PROFESSIONAL_EXPERIENCE: 'professional-experience',
  TECHNICAL_SKILLS: 'tecnical_skills',
} as const
