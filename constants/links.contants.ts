export const LINKS = {
  github: 'https://github.com/MikaelMarceniuk',
  linkedin: 'https://www.linkedin.com/in/mikael-marceniuk/',
  email: 'mailto:mika.marceniuk@gmail.com',
  whatsapp: 'https://wa.me/5516997965512',
} as const

export type LinkKey = keyof typeof LINKS
