import { SECTION_VALUES, SECTIONS } from './section.constants'

export const NAV_ITEMS: { id: SECTION_VALUES }[] = [
  { id: SECTIONS.ABOUT },
  { id: SECTIONS.FEATURED_WORK },
  {
    id: SECTIONS.PROFESSIONAL_EXPERIENCE,
  },
  { id: SECTIONS.TECHNICAL_SKILLS },
] as const
