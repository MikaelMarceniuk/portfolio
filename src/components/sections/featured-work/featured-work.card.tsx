import { cn } from '@/lib/utils'
import { FeaturedWork } from '@/types/featured-work.type'
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
          <span>{work.title}</span>
        </div>

        {/* Título do Projeto */}
        <h3 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {work.title}
        </h3>

        {/* Descrição */}
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {work.description}
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
            <Link
              href={work.ctaPrimary.hrefTo}
              className="cursor-pointer rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:opacity-90"
            >
              {work.ctaPrimary.text}
            </Link>
          )}
          {work.ctaSecondary && (
            <button className="cursor-pointer rounded-md border border-border bg-transparent px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-secondary">
              {work.ctaSecondary}
            </button>
          )}
        </div>
      </div>

      {/* ── Coluna: Mockup do Navegador (Imagem) ── */}
      {/* order-1 força a imagem para o topo no mobile. md:order-* assume o controle no desktop */}
      <div
        className={`order-1 flex w-full justify-center md:col-span-5 ${
          isEven
            ? 'md:order-first md:justify-start'
            : 'md:order-last md:justify-end'
        }`}
      >
        <div className="relative aspect-16/10 w-full max-w-md overflow-hidden rounded-lg border border-border shadow-2xl">
          <Image
            src="/placeholder.svg"
            alt={work.title}
            fill
            sizes="(max-width: 768px) 100vw, 450px"
            className="object-cover"
            priority={work.order < 2}
          />
        </div>
      </div>
    </div>
  )
}
