'use client'

import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { Languages, Check } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { setLocaleAction } from '@/i18n/actions/set-locale.action'
import { AvailableLocales } from '@/i18n/types/available-locales.type'

const LANGUAGES: { code: AvailableLocales; label: string }[] = [
  { code: 'en-us', label: 'English' },
  { code: 'pt-br', label: 'Português' },
] as const

export const LocaleSwitcher = () => {
  const currentLocale = useLocale()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const handleLanguageChange = (nextLocale: AvailableLocales) => {
    if (nextLocale === currentLocale) return

    startTransition(async () => {
      await setLocaleAction(nextLocale)
      router.refresh()
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon-lg"
          className="size-10 transition-colors hover:bg-muted"
          disabled={isPending}
        >
          <Languages className="h-[1.2rem] w-[1.2rem] text-muted-foreground hover:text-foreground" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="min-w-35 border-(--border-subtle) bg-[#0a0d14]/95 backdrop-blur-md"
      >
        {LANGUAGES.map((lang) => {
          const isActive = currentLocale === lang.code

          return (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`flex cursor-pointer items-center justify-between transition-colors ${
                isActive
                  ? 'font-semibold text-foreground'
                  : 'text-muted-foreground'
              }`}
            >
              <span>{lang.label}</span>
              {isActive && (
                <Check className="animate-in fade-in zoom-in-75 h-4 w-4 text-primary" />
              )}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
