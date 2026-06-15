const jobs = [
  {
    period: '2023 — Present',
    role: 'Rottior Fullstack Engineer',
    company: 'FullTech Innovations',
    description:
      'Leading the development of core banking features. Optimised server-side rendering for a 48% improvement in LCP and integrated multi-region PostgreSQL clusters for high availability.',
    bullets: [
      'Mentoring 3 junior developers on modern architecture practices.',
      'Architecture design for real-time payment processor engine.',
    ],
  },
  {
    period: '2021 — 2023',
    role: 'Fullstack Developer',
    company: 'Digital Craft Studio',
    description:
      'Developed custom SaaS platforms for enterprise clients across healthcare and logistics industries. Focused on creating scalable UI components and efficient API layer integrations.',
    bullets: [
      'Reduced deployment cycles by 60% through automated pipeline implementations.',
      'Successfully migrated legacy PHP apps to React/Next.js stacks.',
    ],
  },
]

export const ExperienceSection = () => {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-300">
        {/* Header */}
        <div className="mb-16">
          <p
            className="mb-3 font-mono text-xs tracking-widest uppercase"
            style={{ color: 'var(--color-accent)', letterSpacing: '0.15em' }}
          >
            Professional Timeline
          </p>
          <h2
            className="font-heading font-bold"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              letterSpacing: '-0.03em',
              color: 'var(--color-foreground)',
            }}
          >
            Experience.
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute top-0 bottom-0 left-1.75 hidden w-px md:block"
            style={{ background: 'var(--color-surface-border)' }}
            aria-hidden="true"
          />

          <div className="space-y-12">
            {jobs.map((job, i) => (
              <div key={i} className="relative md:pl-10">
                {/* Dot */}
                <div
                  className="absolute top-1.5 left-0 hidden h-3.5 w-3.5 rounded-full border-2 md:block"
                  style={{
                    background: 'var(--color-accent)',
                    borderColor: 'var(--color-background)',
                    boxShadow: '0 0 0 3px rgba(61,139,253,0.2)',
                  }}
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 gap-6 md:grid-cols-[220px_1fr]">
                  {/* Meta */}
                  <div>
                    <p
                      className="mb-2 font-mono text-xs tracking-widest uppercase"
                      style={{
                        color: 'var(--color-foreground-muted)',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {job.period}
                    </p>
                    <p
                      className="font-heading text-base font-semibold"
                      style={{ color: 'var(--color-foreground)' }}
                    >
                      {job.role}
                    </p>
                    <p
                      className="mt-1 font-mono text-xs"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      {job.company}
                    </p>
                  </div>

                  {/* Content */}
                  <div
                    className="card-glow rounded-xl border p-6"
                    style={{
                      borderColor: 'var(--color-surface-border)',
                      background: 'var(--color-surface)',
                    }}
                  >
                    <p
                      className="mb-4 text-sm leading-relaxed"
                      style={{
                        color: 'var(--color-foreground-muted)',
                        lineHeight: '1.7',
                      }}
                    >
                      {job.description}
                    </p>
                    <ul className="space-y-2">
                      {job.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span
                            className="mt-1.25 h-1 w-1 shrink-0 rounded-full"
                            style={{ background: 'var(--color-accent)' }}
                            aria-hidden="true"
                          />
                          <span
                            className="text-sm"
                            style={{
                              color: 'var(--color-foreground-muted)',
                              lineHeight: '1.6',
                            }}
                          >
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
