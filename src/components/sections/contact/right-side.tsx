'use client'

import { Separator } from '@/components/ui/separator'
import { SOCIAL_LINKS } from '@/constants/social-links.contants'
import { motion, Variants } from 'framer-motion'
import { CopyEmailRow } from './copy-email-row'
import { LinkRow } from './link-row'
import { CV_LINKS } from '@/constants/cv-links.constants'
import { FileText } from 'lucide-react'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.07,
      duration: 0.45,
      ease: 'easeOut' as const,
    },
  }),
}

export const ContactRightSide = () => {
  return (
    <div className="flex flex-col">
      <Separator className="h-px" />

      {/* Sociais */}
      {SOCIAL_LINKS.map((item, i) => (
        <motion.div
          key={item.label}
          custom={i}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {item.action === 'copy' ? (
            <div
              onClick={() => {
                if (typeof window !== 'undefined' && window.umami) {
                  window.umami.track(item.eventName)
                }
              }}
            >
              <CopyEmailRow
                icon={item.icon}
                label={item.label}
                value={item.value}
              />
            </div>
          ) : (
            <a
              href={item.value}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-opacity hover:opacity-70"
              data-umami-event={item.eventName}
            >
              <LinkRow icon={item.icon} label={item.label} value={item.value} />
            </a>
          )}
          <Separator className="h-px" />
        </motion.div>
      ))}

      {/* CVs */}
      <div className="mt-6 flex flex-col gap-2">
        {CV_LINKS.map((cv, i) => (
          <motion.a
            key={cv.label}
            href={cv.file}
            download
            custom={SOCIAL_LINKS.length + i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-2 font-mono text-xs transition-opacity hover:opacity-70"
            style={{ color: 'var(--fg-muted)' }}
            data-umami-event="download_cv"
            data-umami-event-label={cv.label}
            data-umami-event-file={cv.file}
          >
            <FileText size={13} style={{ color: 'var(--accent)' }} />
            {cv.label}
            <span className="ml-auto">↓</span>
          </motion.a>
        ))}
      </div>
    </div>
  )
}
