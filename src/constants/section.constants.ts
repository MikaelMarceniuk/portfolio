export type SECTION_VALUES = (typeof SECTIONS)[keyof typeof SECTIONS]

export type SECTIONS_KEYS = keyof typeof SECTIONS

export const SECTIONS = {
  HERO: '#hero',
} as const
