import { WORK_DATA } from '@/mock/works'
import { BaseSection } from '../../base-section'
import { SectionLabel } from '../../section-label'
import { SectionTitle } from '../../section-title'
import { FeaturedWorkCard } from './featured-work.card'
import { AnimatedButton } from '@/components/ui/animated-button'
import Link from 'next/link'
import { SECTIONS } from '@/constants/section.constants'

export const FeaturedWorkSection = () => {
  const featuredWorkData = WORK_DATA.filter((wk) => wk.isFeatured)

  return (
    <BaseSection id={SECTIONS.FEATURED_WORK} className="px-6 py-24" isOdd>
      <div className="mx-auto max-w-300">
        <div className="mb-16">
          <SectionLabel title="Independent Projects" />
          <SectionTitle title="Featured Work" />
        </div>

        {/* Lista de Cards (Espaçamento vertical de 16 entre cada um) */}
        <div className="flex flex-col gap-16">
          {featuredWorkData.map((work, index) => {
            const isEven = index % 2 === 1
            return <FeaturedWorkCard key={index} work={work} isEven={isEven} />
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <AnimatedButton asChild>
            <Link href="/work">View All Projects</Link>
          </AnimatedButton>
        </div>
      </div>
    </BaseSection>
  )
}
