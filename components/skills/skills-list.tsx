'use client'

import { getSkillsAction } from '@/actions/get-skills.action'
import { useLocale } from '@/hooks/use-locale'
import useSWR from 'swr'
import { Badge } from '../ui/badge'

export const SkillsList = () => {
  const { locale } = useLocale()
  const { data } = useSWR(`/api/skills`, async () => await getSkillsAction())

  if (!data) return

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {data.map(({ title, skills, _id }) => (
        <div
          key={_id}
          className="space-y-4"
        >
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
      ))}
    </div>
  )
}
