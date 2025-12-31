import { DesktopHeader } from '../components/desktop-header'
import { MobileHeader } from '../components/mobile-header'

const HomePage = () => {
  return (
    <main className="px-6">
      <MobileHeader />
      <DesktopHeader />
    </main>
  )
}

export default HomePage
