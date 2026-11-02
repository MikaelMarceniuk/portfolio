'use client'

import { SkillsCategories } from '@/types/skills.type'
import { motion, useInView } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useRef } from 'react'

type SkillCardProps = {
  category: SkillsCategories
  index: number
}

export const SkillCard: React.FC<SkillCardProps> = ({ category, index }) => {
  const t = useTranslations('data.technicalSkills')
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = category.icon

  const name = t(`${category.id}.name`)
  const skills = t.raw(`${category.id}.skills`) as string[]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{
        boxShadow: `0 0 32px ${category.color}22`,
        borderColor: `${category.color}55`,
      }}
      className="relative overflow-hidden rounded-xl border p-6"
      style={{
        background: 'var(--surface)',
        borderColor: 'var(--border-subtle)',
        borderTopColor: category.color,
        borderTopWidth: '2px',
      }}
    >
      {/* Gradient header */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-28"
        style={{
          background: `linear-gradient(to bottom, ${category.color}18, transparent)`,
        }}
        aria-hidden="true"
      />

      {/* Watermark icon */}
      <div
        className="pointer-events-none absolute -right-3 -bottom-3 opacity-[0.04]"
        aria-hidden="true"
      >
        <Icon size={110} color={category.color} />
      </div>

      {/* Category header */}
      <div className="relative mb-6 flex items-center gap-3">
        <div
          className="rounded-md p-1.5"
          style={{ background: `${category.color}18` }}
        >
          <Icon size={15} color={category.color} />
        </div>
        <p
          className="font-mono text-xs font-medium tracking-widest uppercase"
          style={{ color: category.color }}
        >
          {name}
        </p>
      </div>

      {/* Skills */}
      <ul className="relative space-y-3">
        {skills.map((skill, j) => (
          <motion.li
            key={skill}
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -8 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.3,
              delay: index * 0.1 + j * 0.06 + 0.2,
            }}
          >
            <span
              className="h-px w-3 shrink-0"
              style={{ background: `${category.color}66` }}
              aria-hidden="true"
            />
            <span
              className="font-heading text-sm font-medium"
              style={{ color: 'var(--fg)' }}
            >
              {skill}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}
