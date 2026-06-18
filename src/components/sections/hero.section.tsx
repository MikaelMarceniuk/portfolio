'use client'

import { Download } from 'lucide-react'
import { BaseSection } from '../base-section'
import { SectionLabel } from '../section-label'
import { GalaxyBackground } from '../galaxy-background'
import { AnimatedText } from '../ui/animated-text'
import { SECTIONS } from '@/constants/section.constants'
import { AnimatedButton } from '../ui/animated-button'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export const HeroSection = () => {
  const t = useTranslations('rootPage.heroSection')

  return (
    <BaseSection
      id={SECTIONS.HERO}
      isOdd
      className="relative flex min-h-dvh flex-col justify-center px-4 py-16 sm:px-6 sm:py-24"
    >
      <GalaxyBackground />

      <div className="relative z-10 mx-auto w-full max-w-300">
        <SectionLabel title={t('label')} />

        <h1 className="m-0 font-heading text-[clamp(2.25rem,9vw,5.5rem)] leading-[1.08] tracking-[-0.04em] text-foreground">
          {t('headline.title')}
          <br />
          <AnimatedText>{t('headline.subtitle')}</AnimatedText>
        </h1>

        <p className="mt-4 mb-0 max-w-2xl font-sans text-base leading-[1.7] text-muted-foreground sm:mt-6 sm:text-lg">
          {t('headline.description.pt1')}
          <br />
          {t('headline.description.pt2')}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <AnimatedButton asChild>
            <Link href={`#${SECTIONS.ABOUT}`}>{t('cta1')}</Link>
          </AnimatedButton>

          <Link
            href={`#${SECTIONS.CONTACT}`}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-transparent px-6 py-3 text-[0.75rem] font-medium tracking-[0.06em] text-foreground no-underline transition-all duration-200 hover:border-muted-foreground hover:bg-muted sm:w-auto sm:justify-start"
          >
            {t('cta2')}
            <Download size={14} />
          </Link>
        </div>
      </div>
    </BaseSection>
  )
}
