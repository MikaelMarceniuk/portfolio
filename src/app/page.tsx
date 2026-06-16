import { Navbar } from '@/components/sections/navbar'
import { HeroSection } from '@/components/sections/hero.section'
import { SkillsTicker } from '@/components/sections/skills-ticker'
import { AboutSection } from '@/components/sections/about'
import { FeaturedWorkSection } from '@/components/sections/featured-work'
import { ProfessionalTimelineSection } from '@/components/sections/professional-timeline.section'
import { TechnicalArsenalSection } from '@/components/sections/technical-arsenal.section'
import { ContactSection } from '@/components/sections/contact.section'

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <SkillsTicker />
      <AboutSection />
      <FeaturedWorkSection />
      <ProfessionalTimelineSection />
      <TechnicalArsenalSection />
      <ContactSection />
    </main>
  )
}
