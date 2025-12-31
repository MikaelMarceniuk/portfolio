'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { withChildren } from '@/types/with-children.type'

type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider> &
  withChildren

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  ...props
}) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
