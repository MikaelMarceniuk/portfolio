'use client'

import { AnimatedButton } from '@/components/ui/animated-button'
import { cn, toSlug } from '@/lib/utils'
import { FeaturedWork } from '@/types/featured-work.type'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

type FeaturedWorkCardProps = {
  work: FeaturedWork
  isEven: boolean
}

export const FeaturedWorkCard: React.FC<FeaturedWorkCardProps> = ({
  work,
  isEven,
}) => {
  const t = useTranslations('data.works')

  return (
    <div
      className={cn(
        'card-glow grid w-full grid-cols-1 items-center gap-8 overflow-hidden rounded-xl border border-border bg-card p-6 md:grid-cols-12 md:p-10'
      )}
    >
      <div
        className={`order-2 flex flex-col gap-5 md:col-span-7 ${
          isEven ? 'md:order-last' : 'md:order-first'
        }`}
      >
        {/* ID / Categoria */}
        <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-primary uppercase">
          <span>{work.order}</span>
          <span className="text-border-subtle">/</span>
          <span>{t(`${work.id}.category`)}</span>
        </div>

        {/* Título do Projeto */}
        <h3 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {t(`${work.id}.title`)}
        </h3>

        {/* Descrição */}
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {t(`${work.id}.description`)}
        </p>

        {/* Tech Stack Badges */}
        <div className="mt-2 flex flex-wrap gap-2">
          {work.tags.map((tech) => (
            <span
              key={tech}
              className="rounded-sm border border-border bg-background/60 px-2.5 py-1 font-mono text-[10px] tracking-wider text-muted-foreground uppercase"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Botões de Ação */}
        <div className="mt-4 flex flex-wrap gap-3">
          {work.ctaPrimary && (
            <AnimatedButton asChild>
              <Link
                href={work.ctaPrimary.hrefTo}
                target="_blank"
                className="cursor-pointer rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary shadow-sm transition-all hover:opacity-90"
                data-umami-event="click_work_cta_primary"
                data-umami-event-work={toSlug(t(`${work.id}.title`))}
                data-umami-event-href={work.ctaPrimary.hrefTo}
              >
                {t(`${work.id}.ctaPrimary`)}
              </Link>
            </AnimatedButton>
          )}
          {/* {work.ctaSecondary && (
            <button
              className="cursor-pointer rounded-md border border-border bg-transparent px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-secondary"
              data-umami-event="click_work_cta_secondary"
              data-umami-event-work={work.id}
            >
              {work.ctaSecondary}
            </button>
          )} */}
        </div>
      </div>

      <div
        className={`order-1 flex w-full justify-center md:col-span-5 ${
          isEven
            ? 'md:order-first md:justify-start'
            : 'md:order-last md:justify-end'
        }`}
      >
        <div className="relative aspect-16/10 w-full overflow-hidden">
          <Image
            src={work.imageUrl}
            alt={work.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 500px"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}
