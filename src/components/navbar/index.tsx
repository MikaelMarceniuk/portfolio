'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SECTION_VALUES, SECTIONS } from '@/constants/section.constants'
import { NAV_ITEMS } from '@/constants/nav-itens.contants'
import { AnimatedButton } from '../ui/animated-button'
import { NeonLine } from './neon-line'
import { AnimatedText } from '../ui/animated-text'
import { LocaleSwitcher } from '../locale-switcher'
import { useTranslations } from 'next-intl'
import { Menu, X } from 'lucide-react'

export const AppNavbar = () => {
  const t = useTranslations('ui.navbar')
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<SECTION_VALUES>('hero')
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    if (!isHome) return

    const observer = new IntersectionObserver(
      (entries) => {
        const active = entries.find((entry) => entry.isIntersecting)
        if (active) setActiveSection(active.target.id as SECTION_VALUES)
      },
      { rootMargin: '-30% 0px -40% 0px' }
    )

    const targets = [
      'hero',
      ...NAV_ITEMS.map((item) => item.id),
      SECTIONS.CONTACT,
    ]

    targets.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [isHome])

  const getHref = (section: SECTION_VALUES) =>
    isHome ? `#${section}` : `/#${section}`

  const handleMobileNavClick = () => setMobileOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? 'border-b border-(--border-subtle) bg-[#0a0d14]/88 backdrop-blur-lg'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-300 items-center justify-between px-6 py-4">
          <Link
            href={getHref(SECTIONS.HERO)}
            className="relative cursor-pointer py-2"
            onClick={handleMobileNavClick}
          >
            <AnimatedText>Mikael Marceniuk</AnimatedText>
            {activeSection === SECTIONS.HERO && <NeonLine />}
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 text-sm font-medium lg:flex">
            {NAV_ITEMS.map(({ id }) => {
              const isActive = activeSection === id
              return (
                <li key={id} className="relative py-2">
                  <Link
                    href={getHref(id)}
                    className={`cursor-pointer transition-colors duration-300 ${
                      isActive
                        ? 'font-semibold text-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <span className="relative z-10">{t(id)}</span>
                    {isActive && <NeonLine />}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Desktop right side */}
          <div className="hidden items-center gap-4 lg:flex">
            <LocaleSwitcher />
            <AnimatedButton asChild>
              <Link href={getHref(SECTIONS.CONTACT)}>{t('hire-me')}</Link>
            </AnimatedButton>
          </div>

          {/* Mobile right side */}
          <div className="flex items-center gap-3 lg:hidden">
            <LocaleSwitcher />
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="p-1 text-muted-foreground transition-colors duration-200 hover:text-foreground"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-[#0a0d14]/95 backdrop-blur-lg transition-all duration-300 lg:hidden ${
          mobileOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex flex-1 flex-col items-center justify-center gap-8">
          {NAV_ITEMS.map(({ id }) => {
            const isActive = activeSection === id
            return (
              <Link
                key={id}
                href={getHref(id)}
                onClick={handleMobileNavClick}
                className={`relative py-2 text-2xl font-medium transition-colors duration-300 ${
                  isActive
                    ? 'font-semibold text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {t(id)}
                {isActive && mobileOpen && <NeonLine />}
              </Link>
            )
          })}

          <div className="mt-4">
            <AnimatedButton asChild>
              <Link
                href={getHref(SECTIONS.CONTACT)}
                onClick={handleMobileNavClick}
              >
                {t('hire-me')}
              </Link>
            </AnimatedButton>
          </div>
        </div>
      </div>
    </>
  )
}
