import { SECTIONS } from './section.constants'

export const NAV_ITEMS = [
  { label: 'About me', id: SECTIONS.ABOUT },
  { label: 'Featured work', id: SECTIONS.FEATURED_WORK },
  {
    label: 'Professional experience',
    id: SECTIONS.PROFESSIONAL_EXPERIENCE,
  },
  { label: 'Skills', id: SECTIONS.TECHNICAL_SKILLS },
  { label: 'Contact', id: SECTIONS.CONTACT },
] as const
