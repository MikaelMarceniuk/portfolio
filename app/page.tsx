import { Hero } from '@/components/hero/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact/contact'
import { Navigation } from '@/components/navigation'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
