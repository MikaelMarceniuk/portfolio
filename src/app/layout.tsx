import { Geist_Mono, Inter } from 'next/font/google'

import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import { AppFooter } from '@/components/app-footer'
import { AppNavbar } from '@/components/navbar'
import { I18nProvider } from '@/components/i18n-provider'
import { getLocale, getMessages } from 'next-intl/server'

export { metadata } from '@/config/metadata'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

type RootLayoutProps = {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const locale = await getLocale()
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
      </body>
    </html>
  )
}
