export type FeaturedWork = {
  id: string
  order: number
  kind: 'freelance' | 'personal'
  tags: string[]
  links: {
    live: string
    repo?: string
  }
  imageUrl: string
  isFeatured: boolean
}
