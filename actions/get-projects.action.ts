'use client'

import { Project } from '@/types/project.types'

export const getProjectsAction = async (): Promise<Project[]> => {
  try {
    const res = await fetch(`/api/project`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
    })

    if (!res.ok) {
      console.log('getProjectsAction.res: ', res)
      throw new Error(`Failed to fetch projects: ${res.statusText}`)
    }

    const data: Project[] = await res.json()
    return data
  } catch (err) {
    console.error('Erro ao buscar projetos:', err)
    return []
  }
}
