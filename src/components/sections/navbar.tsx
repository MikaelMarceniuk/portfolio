'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(10,13,20,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
      }}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        <a
          href="#hero"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--fg)',
            textDecoration: 'none',
          }}
        >
          Mikael
        </a>

        <ul className="hidden items-center gap-8 md:flex list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.625rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--fg-muted)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--fg)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--fg-muted)')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.625rem',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            background: 'var(--accent)',
            color: '#fff',
            textDecoration: 'none',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--accent-hover)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--accent)')}
        >
          Hire Me
        </a>
      </nav>
    </header>
  )
}
