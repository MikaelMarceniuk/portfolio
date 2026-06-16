'use client'

import { SectionLabel } from '@/components/section-label'
import { SectionTitle } from '@/components/section-title'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export const ContactLeftSide = () => {
  const t = useTranslations('rootPage.contactSection')

  return (
    <div className="flex flex-col gap-12">
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <SectionLabel title={t('label')} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
          <SectionTitle title={t('title')} />
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.15 }}
        className="max-w-sm text-sm leading-relaxed"
        style={{ color: 'var(--fg-muted)', lineHeight: '1.75' }}
      >
        {t('description')}
      </motion.p>
    </div>
  )
}
