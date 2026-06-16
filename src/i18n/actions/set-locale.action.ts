'use server'

import { cookies } from 'next/headers'
import { AvailableLocales } from '../types/available-locales.type'

export async function setLocaleAction(locale: AvailableLocales) {
  const cookieStore = await cookies()

  cookieStore.set('NEXT_LOCALE', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  })
}
