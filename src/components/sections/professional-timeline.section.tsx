'use client'

import { SECTIONS } from '@/constants/section.constants'
import { BaseSection } from '../base-section'
import { SectionLabel } from '../section-label'
import { SectionTitle } from '../section-title'
import { Timeline } from '../ui/timeline'
import { useTranslations } from 'next-intl'

export const ProfessionalTimelineSection = () => {
  const t = useTranslations('rootPage.professionalTimelineSection')

  return (
    <BaseSection id={SECTIONS.PROFESSIONAL_EXPERIENCE} className="px-6 py-24">
      <div className="mx-auto max-w-300">
        <div className="mb-16">
          <SectionLabel title={t('label')} />
          <SectionTitle title={t('title')} />
        </div>

        <Timeline />
      </div>
    </BaseSection>
  )
}
