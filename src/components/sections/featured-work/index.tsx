'use client'

import { WORK_DATA } from '@/mock/works'
import { BaseSection } from '../../base-section'
import { SectionLabel } from '../../section-label'
import { SectionTitle } from '../../section-title'
import { FeaturedWorkCard } from './featured-work.card'
import { FeaturedWorkModal } from './featured-work.modal'
import { SECTIONS } from '@/constants/section.constants'
import { AnimatedButton } from '@/components/ui/animated-button'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

const byOrder = (a: { order: number }, b: { order: number }) =>
  a.order - b.order

const featuredWorks = WORK_DATA.filter((wk) => wk.isFeatured).sort(byOrder)
const otherWorks = WORK_DATA.filter((wk) => !wk.isFeatured).sort(byOrder)

export const FeaturedWorkSection = () => {
  const t = useTranslations('rootPage.featuredWorkSection')
  const tUi = useTranslations('ui.featuredWork')
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const visibleWorks = isExpanded
    ? [...featuredWorks, ...otherWorks]
    : featuredWorks
  const hasMore = otherWorks.length > 0
  const selectedWork = WORK_DATA.find((wk) => wk.id === selectedId) ?? null

  const handleToggle = () => {
    if (isExpanded) {
      document
        .getElementById(SECTIONS.FEATURED_WORK)
        ?.scrollIntoView({ behavior: 'smooth' })
    }
    setIsExpanded((prev) => !prev)
  }

  return (
    <BaseSection id={SECTIONS.FEATURED_WORK} className="px-6 py-24" isOdd>
      <div className="mx-auto max-w-300">
        <div className="mb-16">
          <SectionLabel title={t('label')} />
          <SectionTitle title={t('title')} />
        </div>

        <LayoutGroup>
          <motion.div
            layout
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence initial={false} mode="popLayout">
              {visibleWorks.map((work, index) => (
                <motion.div
                  key={work.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 24 }}
                  transition={{
                    duration: 0.4,
                    ease: 'easeOut',
                    // Entrada escalonada só para os projetos que aparecem no "Ver mais"
                    delay: Math.max(0, index - featuredWorks.length) * 0.08,
                  }}
                >
                  <FeaturedWorkCard
                    work={work}
                    showFeaturedBadge={isExpanded}
                    onOpenDetails={() => setSelectedId(work.id)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <FeaturedWorkModal
            work={selectedWork}
            onClose={() => setSelectedId(null)}
          />
        </LayoutGroup>

        {hasMore && (
          <div className="mt-16 flex justify-center">
            <AnimatedButton
              onClick={handleToggle}
              icon={
                isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />
              }
            >
              {isExpanded ? tUi('viewLess') : tUi('viewMore')}
            </AnimatedButton>
          </div>
        )}
      </div>
    </BaseSection>
  )
}
