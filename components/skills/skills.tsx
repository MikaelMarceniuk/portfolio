import { useTranslations } from 'next-intl'
import { SkillsList } from './skills-list'

export function Skills() {
  const t = useTranslations()

  return (
    <section
      id="skills"
      className="py-24 px-6 lg:px-12 bg-card/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="space-y-16">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="w-16 h-px bg-primary"></div>
              <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {t('skills.section')}
              </h2>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold text-balance">
              {t('skills.title')}
            </h3>

            <p className="text-lg text-muted-foreground max-w-2xl">
              {t('skills.subtitle')}
            </p>
          </div>

          <SkillsList />
        </div>
      </div>
    </section>
  )
}
