'use client'

import { openWebsite } from '@/lib/utils'
import { Button } from '../ui/button'
import { Coffee } from 'lucide-react'

export const CoffeButton = () => {
  return (
    <Button
      size="lg"
      className="bg-primary hover:bg-primary/90"
      onClick={() => openWebsite('whatsapp')}
    >
      <Coffee className="w-4 h-4 mr-2" />
      Let's grab coffee and chat
    </Button>
  )
}
