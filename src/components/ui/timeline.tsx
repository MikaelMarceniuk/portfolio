'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { AnimatedButton } from './animated-button'
import { TimelineItem } from '@/types/timeline-item.type'
import { ChevronDown } from 'lucide-react'
import { useTranslations } from 'next-intl'

const INITIAL_COUNT = 2
const LOAD_MORE_COUNT = 2

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const dotVariant = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
}

type TimelineCardProps = {
  item: TimelineItem
  index: number
}

const TimelineCard = ({ item, index }: TimelineCardProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className="relative md:pl-10"
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
    >
      <motion.div
        className="absolute top-1.5 left-0 hidden h-3.5 w-3.5 rounded-full border-2 md:block"
        style={{
          background: 'var(--accent)',
          borderColor: 'var(--bg)',
          boxShadow: '0 0 0 3px rgba(61,139,253,0.2)',
        }}
        variants={dotVariant}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
          delay: index * 0.1 + 0.1,
        }}
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-[220px_1fr]">
        <div>
          <p
            className="mb-2 font-mono text-xs tracking-widest uppercase"
            style={{ color: 'var(--fg-muted)' }}
          >
            {item.period}
          </p>
          <p
            className="font-heading text-base font-semibold"
            style={{ color: 'var(--fg)' }}
          >
            {item.role}
          </p>
          <p
            className="mt-1 font-mono text-xs"
            style={{ color: 'var(--accent)' }}
          >
            {item.company}
          </p>
        </div>

        <div
          className="card-glow rounded-xl border p-6"
          style={{
            borderColor: 'var(--border-subtle)',
            background: 'var(--surface)',
          }}
        >
          <p
            className="mb-4 text-sm leading-relaxed"
            style={{ color: 'var(--fg-muted)', lineHeight: '1.7' }}
          >
            {item.description}
          </p>
          <ul className="space-y-2">
            {item.bullets.map((bullet, j) => (
              <motion.li
                key={j}
                className="flex items-start gap-3"
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1 + 0.2 + j * 0.08,
                }}
              >
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: 'var(--accent)' }}
                  aria-hidden="true"
                />
                <span
                  className="text-sm"
                  style={{ color: 'var(--fg-muted)', lineHeight: '1.6' }}
                >
                  {bullet}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export const Timeline = () => {
  const t = useTranslations('ui.timeline')
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT)
  const lineRef = useRef<HTMLDivElement>(null)
  const lineInView = useInView(lineRef, { once: true })

  const items = useTranslations('data').raw(
    'profissionalExperience'
  ) as TimelineItem[]
  const visibleItems = items.slice(0, visibleCount)
  const hasMore = visibleCount < items.length
  const remaining = items.length - visibleCount

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, items.length))
  }

  return (
    <div className="relative" ref={lineRef}>
      {/* Vertical line */}
      <motion.div
        className="absolute top-0 left-1.75 hidden w-px md:block"
        style={{ background: 'var(--border-subtle)', originY: 0 }}
        initial={{ scaleY: 0, height: '100%' }}
        animate={lineInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      <div className="space-y-12">
        <AnimatePresence initial={false}>
          {visibleItems.map((item, i) => (
            <TimelineCard key={item.id} item={item} index={i} />
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {hasMore && (
          <motion.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.3 }}
          >
            <AnimatedButton
              onClick={handleLoadMore}
              icon={<ChevronDown size={15} />}
            >
              {t('loadMore.pt1')} {Math.min(remaining, LOAD_MORE_COUNT)}{' '}
              {t('loadMore.pt2')}
            </AnimatedButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
