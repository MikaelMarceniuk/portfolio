'use client'

import { getSkillsAction } from '@/actions/get-skills.action'
import useSWR from 'swr'
import { SkillCard } from './skill-card'
import { SkillCardSkeleton } from './skills-card.skeleton'

export const SkillsList = () => {
  const { data, isLoading } = useSWR(
    `/api/skills`,
    async () => await getSkillsAction()
  )

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {!data || isLoading ? (
        <>
          <SkillCardSkeleton />
          <SkillCardSkeleton />
          <SkillCardSkeleton />
          <SkillCardSkeleton />
        </>
      ) : (
        data.map(({ _id, ...rest }) => (
          <SkillCard
            key={_id}
            {...rest}
          />
        ))
      )}
    </div>
  )
}
