export type FeaturedWork = {
  id: string
  order: number
  tags: string[]
  links: {
    live: string
    repo?: string
  }
  imageUrl: string
  isFeatured: boolean
}
