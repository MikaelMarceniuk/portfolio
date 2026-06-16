import { SiGithub } from 'react-icons/si'

export const LinkRow = ({
  icon: Icon,
  label,
}: {
  icon: typeof SiGithub
  label: string
  value: string
}) => (
  <div className="flex w-full items-center justify-between py-4">
    <div className="flex items-center gap-3">
      <Icon size={15} style={{ color: 'var(--fg-muted)' }} />
      <span className="font-mono text-sm" style={{ color: 'var(--fg)' }}>
        {label}
      </span>
    </div>
    <span className="font-mono text-xs" style={{ color: 'var(--fg-muted)' }}>
      ↗
    </span>
  </div>
)
