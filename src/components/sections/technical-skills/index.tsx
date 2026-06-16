'use client'

import { BaseSection } from '@/components/base-section'
import { SectionLabel } from '@/components/section-label'
import { SectionTitle } from '@/components/section-title'
import { SKILLS_CATEGORIES } from '@/mock/technical-skills'
import { SkillCard } from './technical-skills.card'

type TechnicalSkillsSectionProps = {
  showProgress?: boolean
}

export const TechnicalSkillsSection: React.FC<TechnicalSkillsSectionProps> = ({
  showProgress = false,
}) => {
  return (
    <BaseSection id="tecnical_skills" className="px-6 py-24" isOdd>
      <div className="mx-auto max-w-300">
        <div className="mb-12">
          <SectionLabel title="Capabilities" />
          <SectionTitle title="Technical Skills" />
        </div>

        {/* 3 + 2 centered grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {SKILLS_CATEGORIES.map((cat, i) => (
            <SkillCard
              key={cat.name}
              category={cat}
              index={i}
              showProgress={showProgress}
              className={i < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}
            />
          ))}
        </div>
      </div>
    </BaseSection>
  )
}
