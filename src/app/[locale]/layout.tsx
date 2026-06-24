import { Geist_Mono, Inter } from 'next/font/google'

import '@/styles/globals.css'
import { cn } from '@/lib/utils'
import { AppFooter } from '@/components/app-footer'
import { AppNavbar } from '@/components/navbar'
import { I18nProvider } from '@/components/i18n-provider'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { UmamiAnalytics } from '@/components/scripts/umami-analytics.script'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { AvailableLocales } from '@/i18n/available-locales'
import { getMetadata } from '@/config/metadata'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: AvailableLocales }>
}) {
  const { locale } = await params
  return getMetadata(locale)
}

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

type RootLayoutProps = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return [{ locale: 'en-us' }, { locale: 'pt-br' }]
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params
  setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={cn(
        'antialiased',
        fontMono.variable,
        'font-sans',
        inter.variable
      )}
    >
      <body>
        <I18nProvider locale={locale} messages={messages}>
          <AppNavbar />
          {children}
          <AppFooter />
        </I18nProvider>
        <UmamiAnalytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
