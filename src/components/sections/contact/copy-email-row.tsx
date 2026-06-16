'use client'

import { Check, Copy, Mail } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export const CopyEmailRow = ({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Mail
  label: string
  value: string
}) => {
  const t = useTranslations('ui.copyEmailRow')
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="group flex w-full cursor-pointer items-center justify-between py-4 text-left transition-colors"
    >
      <div className="flex items-center gap-3">
        <Icon size={15} style={{ color: 'var(--accent)' }} />
        <span className="font-mono text-sm" style={{ color: 'var(--fg)' }}>
          {label}
        </span>
      </div>
      <motion.div
        key={copied ? 'check' : 'copy'}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-1.5"
        style={{ color: copied ? 'var(--accent)' : 'var(--fg-muted)' }}
      >
        {copied ? <Check size={13} /> : <Copy size={13} />}
        <span className="font-mono text-xs">
          {copied ? t('copied') : t('copy')}
        </span>
      </motion.div>
    </button>
  )
}
