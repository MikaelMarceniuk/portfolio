'use client'

function IconGitHub({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function IconLinkedIn({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function IconTwitter({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export const ContactSection = () => {
  return (
    <>
      {/* Recruitment CTA band */}
      <section
        className="border-y px-6 py-16"
        style={{ borderColor: 'var(--color-surface-border)' }}
      >
        <div className="mx-auto flex max-w-300 flex-col items-center gap-6 text-center">
          <p
            className="font-mono text-xs tracking-widest uppercase"
            style={{
              color: 'var(--color-foreground-muted)',
              letterSpacing: '0.15em',
            }}
          >
            Capabilities
          </p>
          <h2
            className="font-heading font-bold"
            style={{
              fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
              letterSpacing: '-0.02em',
              color: 'var(--color-foreground)',
            }}
          >
            Ready for recruitment?
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border px-5 py-2.5 font-mono text-xs font-medium transition-all"
              style={{
                borderColor: 'var(--color-surface-border)',
                color: 'var(--color-foreground-muted)',
                background: 'var(--color-surface)',
                letterSpacing: '0.08em',
              }}
            >
              <IconGitHub size={14} />
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border px-5 py-2.5 font-mono text-xs font-medium transition-all"
              style={{
                borderColor: 'var(--color-surface-border)',
                color: 'var(--color-foreground-muted)',
                background: 'var(--color-surface)',
                letterSpacing: '0.08em',
              }}
            >
              <IconLinkedIn size={14} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Main contact section */}
      <section id="contact" className="px-6 py-28">
        <div className="mx-auto max-w-300 text-center">
          <h2
            className="mb-4 font-heading font-bold text-balance"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              letterSpacing: '-0.04em',
              color: 'var(--color-foreground)',
              lineHeight: '1.05',
            }}
          >
            {"Let's build something together"}
          </h2>
          <a
            href="mailto:hello@mikael.dev"
            className="mt-4 inline-block font-mono text-lg transition-colors"
            style={{ color: 'var(--color-accent)' }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                'var(--color-accent-hover)')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                'var(--color-accent)')
            }
          >
            hello@mikael.dev
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t px-6 py-6"
        style={{ borderColor: 'var(--color-surface-border)' }}
      >
        <div className="mx-auto flex max-w-300 flex-col items-center justify-between gap-4 sm:flex-row">
          <p
            className="font-heading text-sm font-semibold tracking-widest uppercase"
            style={{
              color: 'var(--color-foreground)',
              letterSpacing: '0.15em',
            }}
          >
            Mikael
          </p>

          <div className="flex items-center gap-6">
            {[
              { icon: IconGitHub, href: 'https://github.com', label: 'GitHub' },
              {
                icon: IconTwitter,
                href: 'https://twitter.com',
                label: 'Twitter',
              },
              {
                icon: IconLinkedIn,
                href: 'https://linkedin.com',
                label: 'LinkedIn',
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="transition-colors"
                style={{ color: 'var(--color-foreground-muted)' }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    'var(--color-foreground)')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    'var(--color-foreground-muted)')
                }
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <p
            className="font-mono text-[10px] tracking-widest uppercase"
            style={{
              color: 'var(--color-foreground-muted)',
              letterSpacing: '0.1em',
            }}
          >
            &copy; {new Date().getFullYear()} Built with precision
          </p>
        </div>
      </footer>
    </>
  )
}
