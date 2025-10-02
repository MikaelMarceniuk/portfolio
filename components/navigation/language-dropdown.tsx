'use client'

import { useLocale } from '@/hooks/use-locale'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { availableLocales } from '@/constants/locales.contants'
import { useTranslations } from 'next-intl'

export const LanguageDropdown = () => {
  const t = useTranslations()
  const { handleChangeLocale } = useLocale()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={`text-left text-sm font-medium transition-colors hover:text-primary pl-4 text-muted-foreground`}
        >
          {t('components.language-dropdown.title').toUpperCase()}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          {t('components.language-dropdown.label')}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {availableLocales.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => handleChangeLocale(l.code)}
          >
            {l.flag}
            <p className="pl-0.5">{l.label}</p>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
