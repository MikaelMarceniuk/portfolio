import { SECTION_VALUES } from '@/constants/section.constants'
import { cn } from '@/lib/utils'

type BaseSectionProps = {
  children: React.ReactNode
  className: string
  isOdd?: boolean
  id: SECTION_VALUES
}

export const BaseSection: React.FC<BaseSectionProps> = ({
  children,
  className,
  isOdd = false,
  id,
}) => {
  return (
    <>
      <section
        id={id}
        className={cn(className, isOdd ? 'bg-background' : 'bg-muted')}
      >
        {children}
      </section>
    </>
  )
}
