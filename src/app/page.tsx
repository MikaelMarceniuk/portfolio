import { Navbar } from '@/components/sections/navbar'
import { HeroSection } from '@/components/sections/hero.section'
import { SkillsTicker } from '@/components/sections/skills-ticker'
import { AboutSection } from '@/components/sections/about.section'
import { ProjectsSection } from '@/components/sections/projects.section'
import { ExperienceSection } from '@/components/sections/experience.section'
import { TechnicalArsenalSection } from '@/components/sections/technical-arsenal.section'
import { ContactSection } from '@/components/sections/contact.section'

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <SkillsTicker />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <TechnicalArsenalSection />
      <ContactSection />
    </main>
  )
}
