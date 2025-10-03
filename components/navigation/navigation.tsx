'use client'

import { useIsMobile } from '../ui/use-mobile'
import { MobileNavigation } from './mobile-navigation'
import { DesktopNavigation } from './desktop-navigation'

export function Navigation() {
  const isMobile = useIsMobile()

  return isMobile ? <MobileNavigation /> : <DesktopNavigation />
}
