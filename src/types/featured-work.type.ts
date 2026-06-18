export type FeaturedWork = {
  id: string
  order: number
  category: string
  title: string
  description: string
  tags: string[]
  ctaPrimary: {
    text: string
    hrefTo: string
  }
  ctaSecondary?: string
  imageUrl: string
  isFeatured: boolean
}
