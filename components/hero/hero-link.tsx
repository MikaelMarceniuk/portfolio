'use client'

import { LinkKey } from '@/constants/links.contants'
import { openWebsite } from '@/lib/utils'
import React from 'react'

interface IHeroLink {
  icon: React.ReactNode
  hrefTo: LinkKey
}

export const HeroLink: React.FC<IHeroLink> = ({ icon, hrefTo }) => {
  return (
    <a
      href="#"
      className="text-muted-foreground hover:text-primary transition-colors"
      onClick={() => openWebsite(hrefTo)}
    >
      {icon}
    </a>
  )
}
