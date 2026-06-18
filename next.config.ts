import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  output: 'standalone',
}

const withNextIntl = createNextIntlPlugin('./src/i18n/index.ts')
export default withNextIntl(nextConfig)
