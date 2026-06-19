import { getRequestConfig } from 'next-intl/server'
import { defineRouting } from 'next-intl/routing'
import { AvailableLocales } from './available-locales'

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) ?? 'en-us'

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  }
})

export const routing = defineRouting({
  locales: AvailableLocales,
  defaultLocale: 'en-us',
})
