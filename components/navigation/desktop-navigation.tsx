'use client'

import { navItems } from '@/constants/nav-items.contants'
import { NavButton } from './nav-button'
import { LanguageDropdown } from './language-dropdown'

export const DesktopNavigation = () => {
  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col gap-6">
        {navItems.map((item) => (
          <NavButton
            item={item}
            key={item.name}
          />
        ))}
        <LanguageDropdown />
      </div>
    </nav>
  )
}
