export const AboutSection = () => {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto grid max-w-300 grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-24">
        {/* Left */}
        <div>
          <p
            className="mb-4 font-mono text-xs tracking-widest uppercase"
            style={{ color: 'var(--color-accent)', letterSpacing: '0.15em' }}
          >
            Next up
          </p>
          <h2
            className="font-heading leading-tight font-bold text-balance"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              letterSpacing: '-0.03em',
              color: 'var(--color-foreground)',
            }}
          >
            Crafting digital experiences with precision.
          </h2>
        </div>

        {/* Right */}
        <div className="space-y-5">
          <p
            className="text-base leading-relaxed"
            style={{
              color: 'var(--color-foreground-muted)',
              lineHeight: '1.7',
            }}
          >
            I am a software engineer focused on building robust fullstack
            applications. My journey involves deep-diving into complex
            architectural problems and delivering clean, maintainable code that
            drives business value.
          </p>
          <p
            className="text-base leading-relaxed"
            style={{
              color: 'var(--color-foreground-muted)',
              lineHeight: '1.7',
            }}
          >
            Beyond coding, I focus on system performance, developer experience,
            and creating seamless user interfaces that feel intuitive and
            powerful.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            {[
              { label: 'React / Next.js', cat: 'Frontend' },
              { label: 'Node.js / Bun', cat: 'Backend' },
              { label: 'PostgreSQL / Redis', cat: 'Database' },
              { label: 'AWS / Vercel', cat: 'Cloud' },
            ].map((item) => (
              <div
                key={item.cat}
                className="rounded-lg border p-4"
                style={{
                  borderColor: 'var(--color-surface-border)',
                  background: 'var(--color-surface)',
                }}
              >
                <p
                  className="mb-1 font-mono text-[10px] tracking-widest uppercase"
                  style={{
                    color: 'var(--color-accent)',
                    letterSpacing: '0.12em',
                  }}
                >
                  {item.cat}
                </p>
                <p
                  className="font-heading text-sm font-semibold"
                  style={{ color: 'var(--color-foreground)' }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
