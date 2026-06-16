type SectionTitleProps = {
  title: string
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <h2 className="font-heading text-[clamp(1.8rem,4vw,2.8rem)] leading-tight font-bold tracking-[-0.03em] text-balance text-foreground">
      {title}
    </h2>
  )
}
