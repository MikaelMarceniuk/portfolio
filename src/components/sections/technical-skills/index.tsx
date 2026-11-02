'use client'

import { BaseSection } from '@/components/base-section'
import { SectionLabel } from '@/components/section-label'
import { SectionTitle } from '@/components/section-title'
import { SKILLS_CATEGORIES } from '@/mock/technical-skills'
import { SkillCard } from './technical-skills.card'
import { SECTIONS } from '@/constants/section.constants'
import { useTranslations } from 'next-intl'

export const TechnicalSkillsSection = () => {
  const t = useTranslations('rootPage.technicalSkillsSection')

  return (
    <BaseSection id={SECTIONS.TECHNICAL_SKILLS} className="px-6 py-24" isOdd>
      <div className="mx-auto max-w-300">
        <div className="mb-12">
          <SectionLabel title={t('label')} />
          <SectionTitle title={t('title')} />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS_CATEGORIES.map((cat, i) => (
            <SkillCard key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </div>
    </BaseSection>
  )
}
