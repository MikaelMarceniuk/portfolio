import { Geist_Mono, Inter } from 'next/font/google'

import '@/styles/globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import { AppFooter } from '@/components/app-footer'
import { AppNavbar } from '@/components/navbar'
import { I18nProvider } from '@/components/i18n-provider'
import { getLocale, getMessages, setRequestLocale } from 'next-intl/server'
import { UmamiAnalytics } from '@/components/umami-analytics.script'
import { SpeedInsights } from '@vercel/speed-insights/next'

export { metadata } from '@/config/metadata'

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
          <ThemeProvider>{children}</ThemeProvider>
          <AppFooter />
        </I18nProvider>
        <UmamiAnalytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
