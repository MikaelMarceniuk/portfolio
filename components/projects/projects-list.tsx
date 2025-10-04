'use client'

import { getProjectsAction } from '@/actions/get-projects.action'
import { ProjectCard } from './project-card'
import useSWR from 'swr'
import { ProjectCardSkeleton } from './project-card.skeleton'

export const ProjectList = () => {
  const { data, isLoading } = useSWR(
    `/api/projects`,
    async () => await getProjectsAction()
  )

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {!data || isLoading ? (
        <>
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
          <ProjectCardSkeleton />
        </>
      ) : (
        data.map((p) => (
          <ProjectCard
            {...p}
            key={p.name}
          />
        ))
      )}
    </div>
  )
}
