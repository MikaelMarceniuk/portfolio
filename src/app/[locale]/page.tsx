import { HeroSection } from '@/components/sections/hero.section'
import { SkillsTicker } from '@/components/sections/skills-ticker'
import { AboutSection } from '@/components/sections/about'
import { FeaturedWorkSection } from '@/components/sections/featured-work'
import { ProfessionalTimelineSection } from '@/components/sections/professional-timeline.section'
import { TechnicalSkillsSection } from '@/components/sections/technical-skills'
import { ContactSection } from '@/components/sections/contact'
import { setRequestLocale } from 'next-intl/server'
import { JsonLDScript } from '@/components/scripts/jsonld.script'

export const dynamic = 'error'

export function generateStaticParams() {
  return [{ locale: 'en-us' }, { locale: 'pt-br' }]
}

type PageProps = {
  params: Promise<{ locale: string }>
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <main>
      <JsonLDScript />
      <HeroSection />
      <SkillsTicker />
      <AboutSection />
      <FeaturedWorkSection />
      <ProfessionalTimelineSection />
      <TechnicalSkillsSection />
      <ContactSection />
    </main>
  )
}
