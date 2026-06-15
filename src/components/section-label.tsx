export const SectionLabel: React.FC<{ title: string }> = ({ title }) => {
  return (
    <p className="mt-0 mb-6 text-[0.65rem] font-(--font-mono) tracking-[0.2em] text-(--accent) uppercase">
      {title}
    </p>
  )
}
