import { SECTIONS } from '@/constants/section.constants'
import { BaseSection } from '../base-section'
import { SectionLabel } from '../section-label'
import { SectionTitle } from '../section-title'
import { Timeline } from '../ui/timeline'

const jobs = [
  {
    period: '2023 — Present',
    role: 'Rottior Fullstack Engineer',
    company: 'FullTech Innovations',
    description:
      'Leading the development of core banking features. Optimised server-side rendering for a 48% improvement in LCP and integrated multi-region PostgreSQL clusters for high availability.',
    bullets: [
      'Mentoring 3 junior developers on modern architecture practices.',
      'Architecture design for real-time payment processor engine.',
    ],
  },
  {
    period: '2021 — 2023',
    role: 'Fullstack Developer',
    company: 'Digital Craft Studio',
    description:
      'Developed custom SaaS platforms for enterprise clients across healthcare and logistics industries. Focused on creating scalable UI components and efficient API layer integrations.',
    bullets: [
      'Reduced deployment cycles by 60% through automated pipeline implementations.',
      'Successfully migrated legacy PHP apps to React/Next.js stacks.',
    ],
  },
]

export const ProfessionalTimelineSection = () => {
  return (
    <BaseSection id={SECTIONS.PROFESSIONAL_EXPERIENCE} className="px-6 py-24">
      <div className="mx-auto max-w-300">
        <div className="mb-16">
          <SectionLabel title="Professional Timeline" />
          <SectionTitle title="Professional Experience" />
        </div>

        <Timeline items={jobs} />
      </div>
    </BaseSection>
  )
}
