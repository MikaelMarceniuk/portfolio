import { Github, Linkedin, Mail } from 'lucide-react'
import { HeroButton } from './hero-button'
import { HeroLink } from './hero-link'
import { useTranslations } from 'next-intl'

export function Hero() {
  const t = useTranslations()

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-12">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-balance">
              {t('hero.name')}
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
              {t('hero.title')}
            </p>
            <p className="text-lg text-muted-foreground max-w-md">
              {t('hero.subtitle')}
            </p>
          </div>

          <div className="flex gap-4">
            <HeroButton
              icon={<Mail className="w-4 h-4 mr-2" />}
              text={t('hero.cta.contact')}
              hrefTo={'email'}
            />
            <HeroButton
              icon={<Github className="w-4 h-4 mr-2" />}
              text={t('hero.cta.github')}
              hrefTo={'github'}
              variant={'outline'}
            />
          </div>

          <div className="flex gap-6 pt-4">
            <HeroLink
              icon={<Github className="w-6 h-6" />}
              hrefTo="github"
            />
            <HeroLink
              icon={<Linkedin className="w-6 h-6" />}
              hrefTo="linkedin"
            />
            <HeroLink
              icon={<Mail className="w-6 h-6" />}
              hrefTo="email"
            />
          </div>
        </div>

        <div className="relative">
          <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 bg-primary/30 rounded-full mx-auto flex items-center justify-center">
                <span className="text-2xl font-bold">MM</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {t('hero.social.coffee')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
