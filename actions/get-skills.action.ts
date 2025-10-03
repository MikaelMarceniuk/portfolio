'use client'

import { SkillWithId } from '@/types/skills.type'

export const getSkillsAction = async (): Promise<SkillWithId[]> => {
  try {
    const res = await fetch(`/api/skill`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
    })

    if (!res.ok) {
      console.log('getSkillsAction.res: ', res)
      throw new Error(`Failed to fetch skills: ${res.statusText}`)
    }

    const data: SkillWithId[] = await res.json()
    return data
  } catch (err) {
    console.error('Erro ao buscar skills:', err)
    return []
  }
}
