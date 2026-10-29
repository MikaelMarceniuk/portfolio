'use client'

import { AnimatedButton } from '@/components/ui/animated-button'
import { toSlug } from '@/lib/utils'
import { FeaturedWork } from '@/types/featured-work.type'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

const MAX_CARD_TAGS = 5

type FeaturedWorkCardProps = {
  work: FeaturedWork
  showFeaturedBadge: boolean
  onOpenDetails: () => void
}

export const FeaturedWorkCard: React.FC<FeaturedWorkCardProps> = ({
  work,
  showFeaturedBadge,
  onOpenDetails,
}) => {
  const t = useTranslations('data.works')
  const tUi = useTranslations('ui.featuredWork')

  const title = t(`${work.id}.title`)
  const visibleTags = work.tags.slice(0, MAX_CARD_TAGS)
  const hiddenTagsCount = work.tags.length - visibleTags.length

  return (
    <article className="card-glow relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card">
      {showFeaturedBadge && work.isFeatured && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-4 left-4 z-10 rounded-sm border border-primary/40 bg-background/80 px-2 py-0.5 font-mono text-[10px] tracking-widest text-primary uppercase backdrop-blur-sm"
        >
          {tUi('featured')}
        </motion.span>
      )}

      {/* Imagem compartilhada com o modal (layoutId) */}
      <motion.div
        layoutId={`work-image-${work.id}`}
        className="relative aspect-16/10 w-full overflow-hidden bg-background/40"
      >
        <Image
          src={work.imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
          className="object-contain p-3"
        />
      </motion.div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        {/* ID / Categoria */}
        <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-primary uppercase">
          <span>{work.order}</span>
          <span className="text-border-subtle">/</span>
          <span>{t(`${work.id}.category`)}</span>
        </div>

        <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground">
          {title}
        </h3>

        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {t(`${work.id}.description`)}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2">
          {visibleTags.map((tech) => (
            <span
              key={tech}
              className="rounded-sm border border-border bg-background/60 px-2.5 py-1 font-mono text-[10px] tracking-wider text-muted-foreground uppercase"
            >
              {tech}
            </span>
          ))}
          {hiddenTagsCount > 0 && (
            <span className="px-1 py-1 font-mono text-[10px] tracking-wider text-muted-foreground">
              +{hiddenTagsCount}
            </span>
          )}
        </div>

        {/* Botões de Ação */}
        <div className="mt-auto flex flex-wrap gap-3 pt-2">
          <button
            type="button"
            onClick={onOpenDetails}
            className="inline-flex cursor-pointer items-center rounded-md border border-border px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            data-umami-event="click_work_how_its_built"
            data-umami-event-work={toSlug(title)}
          >
            {tUi('howItsBuilt')}
          </button>
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
        </div>
      </div>
    </article>
  )
}
