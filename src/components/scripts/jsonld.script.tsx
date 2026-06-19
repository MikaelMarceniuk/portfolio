import { jsonLd } from '@/config/jsonld'
import Script from 'next/script'

export const JsonLDScript = () => {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
