'use client'

import { openWebsite } from '@/lib/utils'
import { Card, CardContent } from '../ui/card'
import { LinkKey } from '@/constants/links.contants'

interface IContactCard {
  icon: React.ReactNode
  title: string
  subtitle: string
  hrefTo: LinkKey
}

// TODO Fix overflow
export const ContactCard: React.FC<IContactCard> = ({
  icon,
  title,
  subtitle,
  hrefTo,
}) => {
  return (
    <Card
      className="group hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => openWebsite(hrefTo)}
    >
      <CardContent className="p-6 text-center space-y-4">
        <div className="w-12 h-12 bg-primary/20 rounded-lg mx-auto flex items-center justify-center group-hover:bg-primary/30 transition-colors">
          {icon}
        </div>
        <div>
          <h4 className="font-semibold mb-2">{title}</h4>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </CardContent>
    </Card>
  )
}
