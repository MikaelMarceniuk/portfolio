'use client'

import { NextIntlClientProvider } from 'next-intl'

type I18nProviderProps = {
  children: React.ReactNode
  locale: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  messages: Record<string, any>
}

export const I18nProvider: React.FC<I18nProviderProps> = ({
  locale,
  children,
  messages,
}) => {
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      timeZone="America/Sao_Paulo"
    >
      {children}
    </NextIntlClientProvider>
  )
}
