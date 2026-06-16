import { Navbar } from '@/components/sections/navbar'
import { HeroSection } from '@/components/sections/hero.section'
import { SkillsTicker } from '@/components/sections/skills-ticker'
import { AboutSection } from '@/components/sections/about'
import { FeaturedWorkSection } from '@/components/sections/featured-work'
import { ProfessionalTimelineSection } from '@/components/sections/professional-timeline.section'
import { TechnicalSkillsSection } from '@/components/sections/technical-skills'
import { ContactSection } from '@/components/sections/contact'

export default function Page() {
  return (
    <main>
      <Navbar />
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
