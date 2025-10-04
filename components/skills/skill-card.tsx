'use client'

import { useLocale } from '@/hooks/use-locale'
import { Skill } from '@/types/skills.type'
import { Badge } from '../ui/badge'

export const SkillCard = ({ skills, title }: Skill) => {
  const { locale } = useLocale()

  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold text-primary">
        {title[locale.code]}
      </h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <Badge
            key={s[locale.code]}
            variant="secondary"
            className="text-sm"
          >
            {s[locale.code]}
          </Badge>
        ))}
      </div>
    </div>
  )
}
