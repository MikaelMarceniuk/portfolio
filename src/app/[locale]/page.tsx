import { HeroSection } from '@/components/sections/hero.section'
import { SkillsTicker } from '@/components/sections/skills-ticker'
import { AboutSection } from '@/components/sections/about'
import { FeaturedWorkSection } from '@/components/sections/featured-work'
import { ProfessionalTimelineSection } from '@/components/sections/professional-timeline.section'
import { TechnicalSkillsSection } from '@/components/sections/technical-skills'
import { ContactSection } from '@/components/sections/contact'
import { jsonLd } from '@/config/jsonld'

export default function Page() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
