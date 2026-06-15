import { ArrowRight, Download } from 'lucide-react'
import { BaseSection } from '../base-section'
import { SectionLabel } from '../section-label'
import { GalaxyBackground } from '../galaxy-background'
import { AnimatedText } from '../ui/animated-text'

export const HeroSection = () => {
  return (
    <BaseSection
      id="#hero"
      className="relative flex min-h-dvh flex-col justify-center bg-background px-4 py-16 sm:px-6 sm:py-24"
    >
      <GalaxyBackground />

      <div className="relative z-10 mx-auto w-full max-w-300">
        <SectionLabel title="Available for work" />

        {/* Headline */}
        <h1 className="m-0 font-heading text-[clamp(2.25rem,9vw,5.5rem)] leading-[1.08] tracking-[-0.04em] text-foreground">
          Mikael Marceniuk
          <br />
          <AnimatedText>Fullstack Developer</AnimatedText>
        </h1>

        {/* Description */}
        <p className="mt-4 mb-0 max-w-2xl font-sans text-base leading-[1.7] text-muted-foreground sm:mt-6 sm:text-lg">
          Specialized in React, Next.js &amp; modern backend systems.
          <br />
          Building scalable architecture with high-performance execution.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-mono text-[0.75rem] tracking-[0.06em] text-primary-foreground no-underline transition-colors duration-200 hover:bg-(--accent-hover) sm:w-auto sm:justify-start"
          >
            View Projects
            <ArrowRight size={14} />
          </a>

          <a
            href="/resume.pdf"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-transparent px-6 py-3 text-[0.75rem] font-medium tracking-[0.06em] text-foreground no-underline transition-all duration-200 hover:border-muted-foreground hover:bg-muted sm:w-auto sm:justify-start"
          >
            Download Resume
            <Download size={14} />
          </a>
        </div>
      </div>
    </BaseSection>
  )
}
