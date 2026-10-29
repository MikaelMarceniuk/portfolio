'use client'

import { AnimatedButton } from '@/components/ui/animated-button'
import { toSlug } from '@/lib/utils'
import { FeaturedWork } from '@/types/featured-work.type'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { Dialog as DialogPrimitive } from 'radix-ui'
import { FaGithub } from 'react-icons/fa'

type FeaturedWorkModalProps = {
  work: FeaturedWork | null
  onClose: () => void
}

export const FeaturedWorkModal: React.FC<FeaturedWorkModalProps> = ({
  work,
  onClose,
}) => {
  return (
    <DialogPrimitive.Root
      open={work !== null}
      onOpenChange={(open) => !open && onClose()}
    >
      {/* forceMount deixa o AnimatePresence controlar a saída */}
      <AnimatePresence>
        {work && (
          <DialogPrimitive.Portal forceMount>
            <DialogPrimitive.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              />
            </DialogPrimitive.Overlay>
            <DialogPrimitive.Content
              forceMount
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
              onClick={(e) => e.target === e.currentTarget && onClose()}
            >
              <ModalPanel work={work} />
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        )}
      </AnimatePresence>
    </DialogPrimitive.Root>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

const ModalPanel = ({ work }: { work: FeaturedWork }) => {
  const t = useTranslations('data.works')
  const tUi = useTranslations('ui.featuredWork')

  const title = t(`${work.id}.title`)
  const decisions = t.raw(`${work.id}.decisions`) as string[]

  return (
    <motion.div
      layoutScroll
      className="relative max-h-full w-full max-w-3xl overflow-y-auto rounded-xl border border-border bg-card shadow-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
    >
      <motion.div
        layoutId={`work-image-${work.id}`}
        className="relative aspect-16/10 w-full overflow-hidden bg-background/40"
      >
        <Image
          src={work.imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-contain p-4"
        />
      </motion.div>

      <DialogPrimitive.Close
        className="absolute top-3 right-3 cursor-pointer rounded-full border border-border bg-background/80 p-2 text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground"
        aria-label={tUi('close')}
      >
        <X size={16} />
      </DialogPrimitive.Close>

      <motion.div
        className="flex flex-col gap-8 p-6 md:p-10"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.06, delayChildren: 0.15 }}
      >
        <motion.header variants={fadeUp} className="flex flex-col gap-3">
          <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-primary uppercase">
            <span>{work.order}</span>
            <span className="text-border-subtle">/</span>
            <span>{t(`${work.id}.category`)}</span>
          </div>
          <DialogPrimitive.Title className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {title}
          </DialogPrimitive.Title>
          <DialogPrimitive.Description className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {t(`${work.id}.description`)}
          </DialogPrimitive.Description>
        </motion.header>

        <motion.section variants={fadeUp} className="flex flex-col gap-3">
          <ModalSectionTitle>{tUi('challenge')}</ModalSectionTitle>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {t(`${work.id}.challenge`)}
          </p>
        </motion.section>

        <motion.section variants={fadeUp} className="flex flex-col gap-3">
          <ModalSectionTitle>{tUi('decisions')}</ModalSectionTitle>
          <ul className="space-y-3">
            {decisions.map((decision) => (
              <li key={decision} className="flex items-start gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <span className="text-sm leading-relaxed text-muted-foreground">
                  {decision}
                </span>
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section variants={fadeUp} className="flex flex-col gap-3">
          <ModalSectionTitle>{tUi('stack')}</ModalSectionTitle>
          <div className="flex flex-wrap gap-2">
            {work.tags.map((tech) => (
              <span
                key={tech}
                className="rounded-sm border border-border bg-background/60 px-2.5 py-1 font-mono text-[10px] tracking-wider text-muted-foreground uppercase"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.section>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
          <AnimatedButton asChild icon={<ArrowUpRight size={15} />}>
            <Link
              href={work.links.live}
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="click_work_see_it_live"
              data-umami-event-work={toSlug(title)}
              data-umami-event-href={work.links.live}
            >
              {tUi('seeItLive')}
            </Link>
          </AnimatedButton>
          {work.links.repo && (
            <Link
              href={work.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              data-umami-event="click_work_source_code"
              data-umami-event-work={toSlug(title)}
            >
              <FaGithub size={15} />
              {tUi('sourceCode')}
            </Link>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

const ModalSectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h4 className="font-mono text-xs tracking-widest text-primary uppercase">
    {children}
  </h4>
)
