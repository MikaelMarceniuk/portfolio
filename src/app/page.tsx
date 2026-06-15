import { Navbar } from '@/components/sections/navbar'
import { Hero } from '@/components/sections/hero'
import { SkillsTicker } from '@/components/sections/skills-ticker'
import { About } from '@/components/sections/about'
import { Projects } from '@/components/sections/projects'
import { Experience } from '@/components/sections/experience'
import { TechnicalArsenal } from '@/components/sections/technical-arsenal'
import { Contact } from '@/components/sections/contact'

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SkillsTicker />
      <About />
      <Projects />
      <Experience />
      <TechnicalArsenal />
      <Contact />
    </main>
  )
}
