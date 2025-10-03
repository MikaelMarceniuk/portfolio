'use client'

import { useNavigation } from '@/hooks/use-navigation'
import { NavItem } from '@/types/nav-item.types'
import { useTranslations } from 'next-intl'
import React from 'react'

interface INavButtonProps {
  item: NavItem
}

export const NavButton: React.FC<INavButtonProps> = ({ item }) => {
  const t = useTranslations()
  const { activeSection, scrollToSection } = useNavigation()

  return (
    <button
      onClick={() => scrollToSection(item.href)}
      className={`text-left text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
        activeSection === item.href.slice(1)
          ? 'text-primary border-l-2 border-primary pl-4'
          : 'text-muted-foreground pl-4'
      }`}
    >
      {t('constants.nav-items.' + item.code).toUpperCase()}
    </button>
  )
}
