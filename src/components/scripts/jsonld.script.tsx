import { getJsonLd } from '@/config/jsonld'
import { AvailableLocales } from '@/i18n/available-locales'
import Script from 'next/script'

type JsonLDScriptProps = {
  locale: AvailableLocales
}

export const JsonLDScript: React.FC<JsonLDScriptProps> = ({ locale }) => {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(getJsonLd(locale)) }}
    />
  )
}
