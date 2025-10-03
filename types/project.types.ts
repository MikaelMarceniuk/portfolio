export type Project = {
  name: string
  description: {
    en: string
    'pt-br': string
  }
  impact: {
    en: string
    'pt-br': string
  }
  stack: string[]
  image: string
  githubLink: string
  liveLink: string
}
