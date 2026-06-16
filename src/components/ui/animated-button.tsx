'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

type AnimatedButtonProps = {
  text: string
  hrefTo: string
}

const MotionLink = motion.create(Link)

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  text,
  hrefTo,
}) => {
  return (
    <>
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0px 0px rgba(99,102,241,0); border-color: hsl(var(--border)); }
          50%       { box-shadow: 0 0 18px 5px rgba(99,102,241,0.28); border-color: rgba(99,102,241,0.55); }
        }
        .animated-btn { animation: pulse-glow 2.8s ease-in-out infinite; }
      `}</style>

      <MotionLink
        href={hrefTo}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="animated-btn inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-6 py-3 text-sm font-medium text-foreground"
      >
        {text}
        <motion.span
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          →
        </motion.span>
      </MotionLink>
    </>
  )
}
