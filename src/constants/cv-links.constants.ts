import { AvailableLocales } from '@/i18n/available-locales'

type CvLink = {
  locale: AvailableLocales
  label: string
  // Nome do idioma na própria língua, igual em qualquer locale do site
  language: string
  file: string
}

export const CV_LINKS: CvLink[] = [
  {
    locale: 'pt-br',
    label: 'CV — PT-BR',
    language: 'Português (BR)',
    file: '/cv/mikael-marceniuk-pt-br.pdf',
  },
  {
    locale: 'en-us',
    label: 'CV — EN (US)',
    language: 'English (US)',
    file: '/cv/mikael-marceniuk-en-us.pdf',
  },
  // { label: 'CV — EN (EU)', file: '/cv/mikael-marceniuk-en-eu.pdf' },
]
