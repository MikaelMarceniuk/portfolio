import { SECTION_VALUES } from '@/constants/section.constants'

type BaseSectionProps = {
  children: React.ReactNode
  className: string
  id: SECTION_VALUES
}

export const BaseSection: React.FC<BaseSectionProps> = ({
  children,
  className,
  id,
}) => {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  )
}
