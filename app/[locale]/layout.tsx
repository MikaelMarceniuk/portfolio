import type React from 'react'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { Suspense } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Mikael Marceniuk - Full-Stack Developer',
  description:
    'Full-stack developer crafting scalable web solutions with Node.js, React, and TypeScript.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="dark"
    >
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
