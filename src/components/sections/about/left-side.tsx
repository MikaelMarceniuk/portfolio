'use client'

import { SectionLabel } from '@/components/section-label'
import { SectionTitle } from '@/components/section-title'
import { useTranslations } from 'next-intl'

// TODO Improve text
export const LeftSide = () => {
  const t = useTranslations('rootPage.aboutSection')

  return (
    <div>
      <SectionLabel title={t('label')} />
      <SectionTitle title={t('title')} />

      <div className="space-y-4 pt-4">
        <p className="text-muted-foreground">{t('description.pt1')}</p>
        <p className="text-muted-foreground">{t('description.pt2')}</p>
        <p className="text-muted-foreground">{t('description.pt3')}</p>
      </div>
    </div>
  )
}
