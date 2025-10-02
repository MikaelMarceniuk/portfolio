import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async ({ requestLocale }) => {
  const lang = (await requestLocale) ?? 'en'
  const messages = (await import(`./messages/${lang}.json`)).default

  return {
    locale: lang,
    messages,
  }
})
