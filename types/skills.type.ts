export type Skill = {
  title: { en: string; 'pt-br': string }
  skills: { en: string; 'pt-br': string }[]
}

export type SkillWithId = {
  _id: string
} & Skill
