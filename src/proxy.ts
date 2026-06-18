import { NextRequest, NextResponse } from 'next/server'

export function proxy(request: NextRequest) {
  const response = NextResponse.next()

  const existingLocale = request.cookies.get('NEXT_LOCALE')
  if (existingLocale) return response

  // Pega o país pelo header da Cloudflare
  const country = request.headers.get('x-vercel-ip-country')
  console.log('proxy.country: ', country)
  const locale = country === 'BR' ? 'pt-br' : 'en-us'

  response.cookies.set('NEXT_LOCALE', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 ano
    sameSite: 'lax',
  })

  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}
