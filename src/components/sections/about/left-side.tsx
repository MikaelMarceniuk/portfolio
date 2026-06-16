import { SectionLabel } from '@/components/section-label'
import { SectionTitle } from '@/components/section-title'

// TODO Improve text
export const LeftSide = () => {
  return (
    <div>
      <SectionLabel title="About me" />
      <SectionTitle title="Crafting digital experiences with precision." />

      <div className="space-y-4 pt-4">
        <p className="text-muted-foreground">
          I am a software engineer focused on building robust fullstack
          applications. My journey involves deep-diving into complex
          architectural problems and delivering clean, maintainable code that
          drives business value.
        </p>

        <p className="text-muted-foreground">
          Beyond coding, I focus on system performance, developer experience,
          and creating seamless user interfaces that feel intuitive and
          powerful.
        </p>
      </div>
    </div>
  )
}
