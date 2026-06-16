'use client'

import { motion } from 'framer-motion'
import { Slot, Slottable } from '@radix-ui/react-slot'
import type { ReactNode } from 'react'

type AnimatedButtonProps = {
  children: ReactNode
  icon?: ReactNode
  asChild?: boolean
  onClick?: () => void
  className?: string
}

const MotionSlot = motion.create(Slot)

const sharedClassName =
  'animated-btn inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-6 py-3 text-sm font-medium text-foreground cursor-pointer'

const sharedMotionProps = {
  whileHover: { scale: 1.05 },
  transition: { type: 'spring' as const, stiffness: 300, damping: 25 },
}

const AnimatedIcon = ({ icon }: { icon: ReactNode }) => (
  <motion.span
    initial={{ y: 0 }}
    whileHover={{ y: 3 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className="inline-flex"
  >
    {icon}
  </motion.span>
)

const DefaultArrow = () => (
  <motion.span
    initial={{ x: 0 }}
    whileHover={{ x: 4 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
  >
    →
  </motion.span>
)

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  icon,
  asChild = false,
  onClick,
  className,
}) => {
  const Comp = asChild ? MotionSlot : motion.button
  const trailing = icon ? <AnimatedIcon icon={icon} /> : <DefaultArrow />

  return (
    <>
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0px 0px rgba(99,102,241,0); border-color: hsl(var(--border)); }
          50%       { box-shadow: 0 0 18px 5px rgba(99,102,241,0.28); border-color: rgba(99,102,241,0.55); }
        }
        .animated-btn { animation: pulse-glow 2.8s ease-in-out infinite; }
      `}</style>

      <Comp
        onClick={onClick}
        className={`${sharedClassName} ${className ?? ''}`}
        {...sharedMotionProps}
      >
        <Slottable>{children}</Slottable>
        {trailing}
      </Comp>
    </>
  )
}
