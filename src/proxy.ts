import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n'
import { NextRequest, NextResponse } from 'next/server'

const intlMiddleware = createMiddleware(routing)

function detectLocale(request: NextRequest): string {
  const country = request.headers.get('x-vercel-ip-country')
  return country === 'BR' ? 'pt-br' : 'en-us'
}

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const hasLocale = routing.locales.some((locale) =>
    pathname.startsWith(`/${locale}`)
  )

  if (!hasLocale) {
    const locale = detectLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`
    return NextResponse.redirect(request.nextUrl)
  }

  return intlMiddleware(request)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}
