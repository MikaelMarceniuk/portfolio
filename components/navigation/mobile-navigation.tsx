'use client'

import { navItems } from '@/constants/nav-items.contants'
import { SheetTrigger, SheetContent, Sheet } from '../ui/sheet'
import { LanguageDropdown } from './language-dropdown'
import { NavButton } from './nav-button'
import { Menu } from 'lucide-react'

export const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="p-2 fixed top-4 right-4 z-50">
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="p-6"
      >
        <div className="flex flex-col gap-6">
          {navItems.map((item) => (
            <NavButton
              key={item.name}
              item={item}
            />
          ))}
          <LanguageDropdown />
        </div>
      </SheetContent>
    </Sheet>
  )
}
