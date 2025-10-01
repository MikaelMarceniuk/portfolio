'use client'

import React from 'react'
import { Button } from '../ui/button'
import { LinkKey } from '@/constants/links.contants'
import { openWebsite } from '@/lib/utils'
import { ButtonProps } from '@/types/button.types'

interface IHeroButtonProps extends ButtonProps {
  icon: React.ReactNode
  text: string
  hrefTo: LinkKey
}

export const HeroButton: React.FC<IHeroButtonProps> = ({
  icon,
  text,
  hrefTo,
  ...props
}) => {
  return (
    <Button
      size="lg"
      className="bg-primary hover:bg-primary/90"
      onClick={() => openWebsite(hrefTo)}
      {...props}
    >
      {icon}
      {text}
    </Button>
  )
}
