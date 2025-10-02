import { projects } from '@/constants/projects.contants'
import { ProjectCard } from './project-card'
import { useTranslations } from 'next-intl'

export function Projects() {
  const t = useTranslations()

  return (
    <section
      id="projects"
      className="py-24 px-6 lg:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <div className="space-y-16">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="w-16 h-px bg-primary"></div>
              <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {t('projects.section')}
              </h2>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold text-balance">
              {t('projects.title')}
            </h3>

            <p className="text-lg text-muted-foreground max-w-2xl">
              {t('projects.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <ProjectCard {...p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
