import { Mail, Github, Linkedin, Coffee } from 'lucide-react'
import { ContactCard } from './contact-card'
import { CoffeButton } from './coffe-button'
import { useTranslations } from 'next-intl'

export function Contact() {
  const t = useTranslations()

  return (
    <section
      id="contact"
      className="py-24 px-6 lg:px-12 bg-card/30"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-16">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="w-16 h-px bg-primary mx-auto"></div>
              <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {t('contact.section')}
              </h2>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold text-balance">
              {t('contact.title')}
            </h3>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ContactCard
              icon={<Mail className="w-6 h-6 text-primary" />}
              title="Email"
              subtitle="mika.marceniuk@gmail.com"
              hrefTo="email"
            />
            <ContactCard
              icon={<Github className="w-6 h-6 text-primary" />}
              title="GitHub"
              subtitle="github.com/MikaelMarceniuk"
              hrefTo="github"
            />
            <ContactCard
              icon={<Linkedin className="w-6 h-6 text-primary" />}
              title="LinkedIn"
              subtitle="linkedin.com/in/mikaelmarceniuk"
              hrefTo="linkedin"
            />
          </div>

          <div className="space-y-6">
            <CoffeButton />
            <p className="text-sm text-muted-foreground">
              {t('contact.availability')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
