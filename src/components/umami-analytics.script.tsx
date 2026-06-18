import Script from 'next/script'

export const UmamiAnalytics = () => {
  return (
    <Script
      defer
      src="https://analytics.mmarceniuk.dev/script.js"
      data-website-id="33e31b72-ebc5-4f24-b2c5-b95f332940ad"
      strategy="afterInteractive"
    />
  )
}
