'use client'

import { MessageCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { FaLinkedinIn } from 'react-icons/fa'
import { SiGithub } from 'react-icons/si'

// TODO Refactor
export const AppFooter = () => {
  const t = useTranslations('ui.footer')

  return (
    <footer
      className="border-t px-6 py-6"
      style={{ borderColor: 'var(--border-subtle)' }}
    >
      <div className="mx-auto flex max-w-300 flex-col items-center justify-between gap-4 sm:flex-row">
        <p
          className="font-heading text-sm font-semibold tracking-widest uppercase"
          style={{ color: 'var(--fg)', letterSpacing: '0.15em' }}
        >
          mmarceniuk.dev
        </p>

        <div className="flex items-center gap-6">
          {[
            {
              icon: SiGithub,
              href: 'https://github.com/mmarceniuk',
              label: 'GitHub',
            },
            {
              icon: FaLinkedinIn,
              href: 'https://linkedin.com/in/mmarceniuk',
              label: 'LinkedIn',
            },
            {
              icon: MessageCircle,
              href: 'https://wa.me/5511999999999',
              label: 'WhatsApp',
            },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="transition-colors"
              style={{ color: 'var(--fg-muted)' }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = 'var(--fg)')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  'var(--fg-muted)')
              }
            >
              <Icon size={15} />
            </a>
          ))}
        </div>

        <p
          className="font-mono text-[10px] tracking-widest uppercase"
          style={{ color: 'var(--fg-muted)' }}
        >
          © {new Date().getFullYear()} — {t('credits')}
        </p>
      </div>
    </footer>
  )
}
