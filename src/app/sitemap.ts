import { MetadataRoute } from 'next'

const BASE_URL = 'https://mmarceniuk.dev'
const lastModified = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/en-us`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/pt-br`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
