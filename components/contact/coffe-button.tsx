'use client'

import { openWebsite } from '@/lib/utils'
import { Button } from '../ui/button'
import { Coffee } from 'lucide-react'
import { useTranslations } from 'next-intl'

export const CoffeButton = () => {
  const t = useTranslations()

  return (
    <Button
      size="lg"
      className="bg-primary hover:bg-primary/90"
      onClick={() => openWebsite('whatsapp')}
    >
      <Coffee className="w-4 h-4 mr-2" />
      {t('contact.coffe')}
    </Button>
  )
}
