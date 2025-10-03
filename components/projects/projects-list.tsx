'use client'

import { getProjectsAction } from '@/actions/get-projects.action'
import { ProjectCard } from './project-card'
import useSWR from 'swr'

export const ProjectList = () => {
  const { data } = useSWR(
    `/api/projects`,
    async () => await getProjectsAction()
  )

  // TODO Create an skeleton
  if (!data) {
    return
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {data.map((p) => (
        <ProjectCard
          {...p}
          key={p.name}
        />
      ))}
    </div>
  )
}
