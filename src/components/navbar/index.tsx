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

export const AppNavbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('hero')
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Monitora a seção ativa na tela de forma otimizada
  useEffect(() => {
    if (!isHome) return

    const observer = new IntersectionObserver(
      (entries) => {
        const active = entries.find((entry) => entry.isIntersecting)
        if (active) setActiveSection(active.target.id)
      },
      { rootMargin: '-30% 0px -40% 0px' }
    )

    const targets = ['hero', ...NAV_ITEMS.map((item) => item.id)]
    targets.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [isHome])

  const getHref = (section: SECTION_VALUES) =>
    isHome ? `#${section}` : `/#${section}`

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-(--border-subtle) bg-[#0a0d14]/88 backdrop-blur-lg'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-300 items-center justify-between px-6 py-4">
        <Link
          href={getHref(SECTIONS.HERO)}
          className="relative cursor-pointer py-2"
        >
          <AnimatedText>Mikael Marceniuk</AnimatedText>
          {activeSection === SECTIONS.HERO && <NeonLine />}
        </Link>

        <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
          {NAV_ITEMS.map(({ id, label }) => {
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
                  <span className="relative z-10">{label}</span>
                  {isActive && <NeonLine />}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-4">
          <LocaleSwitcher />
          <AnimatedButton asChild>
            <Link href={getHref(SECTIONS.CONTACT)}>Hire Me</Link>
          </AnimatedButton>
        </div>
      </nav>
    </header>
  )
}
