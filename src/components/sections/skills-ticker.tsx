const skills = [
  'REACT', 'NEXT.JS', 'TYPESCRIPT', 'NODE.JS', 'POSTGRESQL',
  'AWS', 'DOCKER', 'GRAPHQL', 'PRISMA', 'TAILWIND CSS', 'REDIS', 'CI/CD',
]

export function SkillsTicker() {
  const doubled = [...skills, ...skills]

  return (
    <div
      aria-label="Skills"
      style={{
        overflow: 'hidden',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        background: 'var(--surface)',
        padding: '1rem 0',
      }}
    >
      <div className="ticker-track">
        {doubled.map((skill, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '0 1.5rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'var(--fg-muted)',
                whiteSpace: 'nowrap',
              }}
            >
              {skill}
            </span>
            <span aria-hidden="true" style={{ color: 'var(--accent)', fontSize: '0.4rem' }}>&#9679;</span>
          </div>
        ))}
      </div>
    </div>
  )
}
