'use client'

import { ArrowRight, Download } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '6rem 1.5rem 4rem',
        backgroundColor: 'var(--bg)',
      }}
    >
      {/* Subtle dot-grid overlay */}
      <div
        aria-hidden="true"
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(rgba(61,139,253,0.06) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div style={{ position: 'relative', maxWidth: '1200px', width: '100%', margin: '0 auto' }}>
        {/* Label */}
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: 'var(--accent)',
            marginBottom: '1.5rem',
            marginTop: 0,
          }}
        >
          Available for work
        </p>

        {/* Headline */}
        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: 'clamp(2.6rem, 7vw, 5.5rem)',
            lineHeight: 1.08,
            letterSpacing: '-0.04em',
            margin: 0,
            color: 'var(--fg)',
          }}
        >
          Mikael —
          <br />
          <span style={{ color: 'var(--accent)' }}>Fullstack Developer</span>
        </h1>

        {/* Description */}
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1rem',
            lineHeight: 1.7,
            color: 'var(--fg-muted)',
            maxWidth: '32rem',
            marginTop: '1.5rem',
            marginBottom: 0,
          }}
        >
          Specialized in React, Next.js &amp; modern backend systems.
          <br />
          Building scalable architecture with high-performance execution.
        </p>

        {/* CTAs */}
        <div style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
          <a
            href="#projects"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.06em',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.375rem',
              background: 'var(--accent)',
              color: '#fff',
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--accent-hover)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--accent)')}
          >
            View Projects
            <ArrowRight size={14} />
          </a>
          <a
            href="/resume.pdf"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.06em',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.375rem',
              background: 'transparent',
              color: 'var(--fg)',
              border: '1px solid var(--border-subtle)',
              textDecoration: 'none',
              transition: 'border-color 0.2s, background 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--surface)'
              e.currentTarget.style.borderColor = 'var(--fg-muted)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'var(--border-subtle)'
            }}
          >
            Download Resume
            <Download size={14} />
          </a>
        </div>

        {/* Stats */}
        <div style={{ marginTop: '4rem', display: 'flex', flexWrap: 'wrap', gap: '3rem' }}>
          {[
            { value: '5+', label: 'Years Building' },
            { value: '30+', label: 'Projects Shipped' },
            { value: '99%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label}>
              <p
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '2.2rem',
                  letterSpacing: '-0.03em',
                  color: 'var(--fg)',
                  margin: 0,
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'var(--fg-muted)',
                  marginTop: '0.25rem',
                  marginBottom: 0,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
