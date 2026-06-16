'use client'

import { motion } from 'framer-motion'

export const NeonLine = () => (
  <motion.div
    layoutId="subterraneanNeon"
    className="absolute right-0 -bottom-1 left-0 h-0.75"
    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
  >
    <div className="relative z-20 h-full w-full rounded-full bg-primary" />
    <div className="absolute top-0 left-1/2 z-10 h-6 w-[120%] -translate-x-1/2 rounded-full bg-primary/35 blur-md" />
  </motion.div>
)
