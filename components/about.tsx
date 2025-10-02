import { useTranslations } from 'next-intl'

export function About() {
  const t = useTranslations()

  return (
    <section
      id="about"
      className="py-24 px-6 lg:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="w-16 h-px bg-primary"></div>
              <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {t('about.section')}
              </h2>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold text-balance">
              {t('about.title')}
            </h3>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>{t('about.paragraphs.first')}</p>
            <p>{t('about.paragraphs.second')}</p>
            <p>{t('about.paragraphs.third')}</p>
            <p>{t('about.paragraphs.fourth')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
