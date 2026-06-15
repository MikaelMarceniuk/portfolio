import { ExternalLink, ArrowUpRight } from 'lucide-react'

function IconGitHub({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

const featuredProject = {
  category: 'Featured Project',
  name: 'NexusCRM',
  problem:
    'Fragmented data silos preventing sales teams from gaining real-time visibility into pipeline activity across multiple channels.',
  solution:
    'A real-time data visualisation dashboard powered by Next.js and Redis, consolidating metrics into actionable insights.',
  impact:
    'Reduced manual data entry by 40% and improved sales conversion rate by 22% for 500+ initial pilot users.',
  tags: ['Next.js', 'TypeScript', 'Redis', 'PostgreSQL', 'Tailwind'],
  demoUrl: '#',
  githubUrl: '#',
  mockupSrc: '/placeholder.svg?width=1200&height=700',
}

const otherProjects = [
  {
    category: 'Trading API',
    name: 'AlphaTrader API',
    description:
      'High-frequency trading interface for cryptocurrency assets with real-time WebSocket updates and custom charting.',
    tags: ['TypeScript', 'Node.js', 'WebSocket'],
    stars: 142,
    forks: 31,
    url: '#',
  },
  {
    category: 'DevOps Tool',
    name: 'SynoFlow CI',
    description:
      'A custom internal CI/CD orchestration tool built for a FinTech startup to manage multi-stage deployments securely.',
    tags: ['Go', 'Docker', 'K8s'],
    stars: 88,
    forks: 12,
    url: '#',
  },
]

function Tag({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center rounded-full font-mono text-[10px] font-medium uppercase tracking-widest px-3 py-1"
      style={{
        background: 'var(--color-accent-dim)',
        color: 'var(--color-accent)',
        letterSpacing: '0.1em',
      }}
    >
      {label}
    </span>
  )
}

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Section header */}
        <div className="mb-12">
          <p
            className="font-mono text-xs uppercase tracking-widest mb-3"
            style={{ color: 'var(--color-accent)', letterSpacing: '0.15em' }}
          >
            Work Samples
          </p>
          <h2
            className="font-heading font-bold"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              letterSpacing: '-0.03em',
              color: 'var(--color-foreground)',
            }}
          >
            Featured Projects
          </h2>
        </div>

        {/* Featured card */}
        <div
          className="rounded-xl border card-glow overflow-hidden mb-8"
          style={{
            borderColor: 'var(--color-surface-border)',
            background: 'var(--color-surface)',
          }}
        >
          <div className="p-8 md:p-10">
            {/* Top meta */}
            <p
              className="font-mono text-[10px] uppercase tracking-widest mb-4"
              style={{ color: 'var(--color-foreground-muted)', letterSpacing: '0.15em' }}
            >
              {featuredProject.category}
            </p>
            <h3
              className="font-heading font-bold mb-6"
              style={{ fontSize: '1.75rem', letterSpacing: '-0.02em', color: 'var(--color-foreground)' }}
            >
              {featuredProject.name}
            </h3>

            {/* 3-col details */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
              {[
                { label: 'Problem', text: featuredProject.problem },
                { label: 'Solution', text: featuredProject.solution },
                { label: 'Impact', text: featuredProject.impact },
              ].map((col) => (
                <div key={col.label}>
                  <p
                    className="font-mono text-[10px] uppercase tracking-widest mb-2"
                    style={{ color: 'var(--color-accent)', letterSpacing: '0.12em' }}
                  >
                    {col.label}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--color-foreground-muted)', lineHeight: '1.65' }}
                  >
                    {col.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Tags & CTA row */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {featuredProject.tags.map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={featuredProject.demoUrl}
                  className="inline-flex items-center gap-2 rounded font-mono text-xs font-medium px-5 py-2.5 transition-all"
                  style={{ background: 'var(--color-accent)', color: '#fff', letterSpacing: '0.08em' }}
                >
                  View Case Study
                  <ExternalLink size={12} />
                </a>
                <a
                  href={featuredProject.githubUrl}
                  className="inline-flex items-center gap-2 rounded border font-mono text-xs font-medium px-5 py-2.5 transition-all"
                  style={{
                    borderColor: 'var(--color-surface-border)',
                    color: 'var(--color-foreground-muted)',
                    background: 'transparent',
                  }}
                  aria-label="View on GitHub"
                >
                  <IconGitHub size={14} />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Dashboard mockup */}
          <div
            className="border-t mx-8 md:mx-10 mb-0 overflow-hidden rounded-t-lg"
            style={{ borderColor: 'var(--color-surface-border)' }}
          >
            <div
              className="rounded-t-lg overflow-hidden"
              style={{ background: 'var(--color-surface-high)' }}
            >
              {/* Fake browser chrome */}
              <div
                className="flex items-center gap-2 px-4 py-3 border-b"
                style={{ borderColor: 'var(--color-surface-border)' }}
              >
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ffbd2e' }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
                </div>
                <div
                  className="flex-1 mx-4 rounded font-mono text-[10px] px-3 py-1 text-center"
                  style={{ background: 'var(--color-background)', color: 'var(--color-foreground-muted)' }}
                >
                  nexuscrm.app/dashboard
                </div>
              </div>
              {/* Mockup dashboard */}
              <div className="p-6 grid grid-cols-4 gap-4">
                {[
                  { label: 'Revenue', val: '$142K', up: true, delta: '+12%' },
                  { label: 'Leads', val: '2,847', up: true, delta: '+8%' },
                  { label: 'Conv. Rate', val: '24.1%', up: true, delta: '+3.2%' },
                  { label: 'Churn', val: '2.3%', up: false, delta: '-0.8%' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg p-4 border"
                    style={{
                      background: 'var(--color-surface)',
                      borderColor: 'var(--color-surface-border)',
                    }}
                  >
                    <p
                      className="font-mono text-[10px] uppercase tracking-widest mb-2"
                      style={{ color: 'var(--color-foreground-muted)' }}
                    >
                      {stat.label}
                    </p>
                    <p
                      className="font-heading font-bold text-xl"
                      style={{ color: 'var(--color-foreground)' }}
                    >
                      {stat.val}
                    </p>
                    <p
                      className="font-mono text-[10px] mt-1"
                      style={{ color: stat.up ? '#22c55e' : '#ef4444' }}
                    >
                      {stat.delta}
                    </p>
                  </div>
                ))}
                {/* Chart placeholder */}
                <div
                  className="col-span-3 rounded-lg p-4 border"
                  style={{
                    background: 'var(--color-surface)',
                    borderColor: 'var(--color-surface-border)',
                    minHeight: '120px',
                  }}
                >
                  <p
                    className="font-mono text-[10px] uppercase tracking-widest mb-3"
                    style={{ color: 'var(--color-foreground-muted)' }}
                  >
                    Revenue Trend
                  </p>
                  {/* Simple SVG sparkline */}
                  <svg viewBox="0 0 300 60" className="w-full h-16" aria-hidden="true">
                    <defs>
                      <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3d8bfd" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#3d8bfd" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 50 L30 42 L60 38 L90 30 L120 28 L150 20 L180 22 L210 14 L240 10 L270 8 L300 4"
                      fill="none"
                      stroke="#3d8bfd"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M0 50 L30 42 L60 38 L90 30 L120 28 L150 20 L180 22 L210 14 L240 10 L270 8 L300 4 L300 60 L0 60 Z"
                      fill="url(#sparkGrad)"
                    />
                  </svg>
                </div>
                <div
                  className="col-span-1 rounded-lg p-4 border flex flex-col justify-between"
                  style={{
                    background: 'var(--color-surface)',
                    borderColor: 'var(--color-surface-border)',
                  }}
                >
                  <p
                    className="font-mono text-[10px] uppercase tracking-widest"
                    style={{ color: 'var(--color-foreground-muted)' }}
                  >
                    Pipeline
                  </p>
                  {['Qualified', 'Proposal', 'Negotiation', 'Closed'].map((stage, i) => (
                    <div key={stage} className="mt-2">
                      <div className="flex justify-between mb-1">
                        <span
                          className="font-mono text-[9px]"
                          style={{ color: 'var(--color-foreground-muted)' }}
                        >
                          {stage}
                        </span>
                        <span
                          className="font-mono text-[9px]"
                          style={{ color: 'var(--color-accent)' }}
                        >
                          {[68, 45, 30, 82][i]}%
                        </span>
                      </div>
                      <div
                        className="h-1 rounded-full overflow-hidden"
                        style={{ background: 'var(--color-surface-border)' }}
                      >
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${[68, 45, 30, 82][i]}%`,
                            background: 'var(--color-accent)',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other projects */}
        <div className="mb-4 flex items-center justify-between">
          <p
            className="font-mono text-xs uppercase tracking-widest"
            style={{ color: 'var(--color-accent)', letterSpacing: '0.15em' }}
          >
            Selected Work
          </p>
          <p
            className="font-mono text-xs uppercase tracking-widest"
            style={{ color: 'var(--color-foreground-muted)', letterSpacing: '0.1em' }}
          >
            Building Modern Solutions.
          </p>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {otherProjects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              className="group rounded-xl border p-6 card-glow block transition-all"
              style={{
                borderColor: 'var(--color-surface-border)',
                background: 'var(--color-surface)',
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p
                    className="font-mono text-[10px] uppercase tracking-widest mb-1"
                    style={{ color: 'var(--color-foreground-muted)', letterSpacing: '0.12em' }}
                  >
                    {project.category}
                  </p>
                  <h3
                    className="font-heading font-semibold text-lg"
                    style={{ color: 'var(--color-foreground)', letterSpacing: '-0.02em' }}
                  >
                    {project.name}
                  </h3>
                </div>
                <div className="flex items-center gap-4">
                  <span
                    className="font-mono text-xs flex items-center gap-1"
                    style={{ color: 'var(--color-foreground-muted)' }}
                  >
                    &#9733; {project.stars}
                  </span>
                  <span
                    className="font-mono text-xs flex items-center gap-1"
                    style={{ color: 'var(--color-foreground-muted)' }}
                  >
                    &#8944; {project.forks}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: 'var(--color-accent)' }}
                  />
                </div>
              </div>
              <p
                className="text-sm mb-5 leading-relaxed"
                style={{ color: 'var(--color-foreground-muted)', lineHeight: '1.65' }}
              >
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
