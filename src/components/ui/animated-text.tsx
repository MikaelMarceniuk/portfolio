interface AnimatedTextProps {
  children: React.ReactNode
  className?: string
}

export const AnimatedText = ({
  children,
  className = '',
}: AnimatedTextProps) => {
  return (
    <span
      className={`inline-block animate-shimmer bg-[linear-gradient(90deg,var(--accent),var(--fg),var(--accent-hover),var(--fg),var(--accent))] bg-size-[200%_auto] bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  )
}
