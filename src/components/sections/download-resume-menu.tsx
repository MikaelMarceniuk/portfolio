'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { CV_LINKS } from '@/constants/cv-links.constants'
import { Download, FileText } from 'lucide-react'
import { useLocale } from 'next-intl'

type DownloadResumeMenuProps = {
  label: string
}

export const DownloadResumeMenu: React.FC<DownloadResumeMenuProps> = ({
  label,
}) => {
  const locale = useLocale()

  // CV no idioma atual do site aparece primeiro
  const cvLinks = [...CV_LINKS].sort(
    (a, b) => Number(b.locale === locale) - Number(a.locale === locale)
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-md border border-border bg-transparent px-6 py-3 text-[0.75rem] font-medium tracking-[0.06em] text-foreground transition-all duration-200 hover:border-muted-foreground hover:bg-muted data-[state=open]:border-muted-foreground data-[state=open]:bg-muted sm:w-auto sm:justify-start"
        >
          {label}
          <Download size={14} />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className="min-w-48 border-(--border-subtle) bg-[#0a0d14]/95 backdrop-blur-md"
      >
        {cvLinks.map((cv) => (
          <DropdownMenuItem key={cv.locale} asChild>
            <a
              href={cv.file}
              download
              className="flex cursor-pointer items-center gap-2 font-mono text-xs text-muted-foreground"
              data-umami-event="download_cv"
              data-umami-event-label={cv.label}
              data-umami-event-file={cv.file}
              data-umami-event-source="hero"
            >
              <FileText size={13} style={{ color: 'var(--accent)' }} />
              {cv.language}
              <span className="ml-auto" aria-hidden="true">
                ↓
              </span>
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
