'use client'

import { availableLocales } from '@/constants/locales.contants'
import { useLocale as usei18n } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'

export const useLocale = () => {
  const locale = usei18n()
  const pathname = usePathname()
  const router = useRouter()

  const handleChangeLocale = (newLocale: string) => {
    const segments = pathname.split('/').slice(2)
    const newPath = `/${newLocale}/${segments.join('/')}`
    router.push(newPath)
  }

  const localeLabel = availableLocales.find((l) => l.code == locale)?.label

  return {
    locale: {
      code: locale,
      label: localeLabel,
    },
    handleChangeLocale,
  }
}
