const categories = [
  {
    icon: '◻',
    name: 'Frontend',
    color: 'var(--color-accent)',
    skills: [
      'React / Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'GraphQL Client',
    ],
  },
  {
    icon: '◼',
    name: 'Backend',
    color: '#de7507',
    skills: ['Node.js / Bun', 'Go', 'REST / GraphQL', 'WebSockets', 'Python'],
  },
  {
    icon: '◈',
    name: 'Database',
    color: '#22c55e',
    skills: ['PostgreSQL', 'Redis', 'MongoDB', 'Prisma / Drizzle', 'Supabase'],
  },
  {
    icon: '◉',
    name: 'Cloud',
    color: '#a855f7',
    skills: [
      'AWS (EC2, S3, RDS)',
      'Vercel',
      'Docker / K8s',
      'Terraform',
      'CI/CD',
    ],
  },
]

export const TechnicalArsenalSection = () => {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-300">
        {/* Header */}
        <div className="mb-12 text-center">
          <p
            className="mb-3 font-mono text-xs tracking-widest uppercase"
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
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              letterSpacing: '-0.03em',
              color: 'var(--color-foreground)',
            }}
          >
            Technical Arsenal.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="card-glow rounded-xl border p-6"
              style={{
                borderColor: 'var(--color-surface-border)',
                background: 'var(--color-surface)',
              }}
            >
              {/* Category header */}
              <div className="mb-5 flex items-center gap-3">
                <span
                  style={{ color: cat.color, fontSize: '1rem' }}
                  aria-hidden="true"
                >
                  {cat.icon}
                </span>
                <p
                  className="font-mono text-xs font-medium tracking-widest uppercase"
                  style={{ color: cat.color, letterSpacing: '0.12em' }}
                >
                  {cat.name}
                </p>
              </div>

              {/* Skills list */}
              <ul className="space-y-2.5">
                {cat.skills.map((skill) => (
                  <li key={skill}>
                    <span
                      className="font-heading text-sm font-medium"
                      style={{ color: 'var(--color-foreground)' }}
                    >
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
