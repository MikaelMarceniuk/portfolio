import { BaseSection } from '@/components/base-section'
import { LeftSide } from './left-side'
import { RightSide } from './right-side'

export const AboutSection = () => {
  return (
    <BaseSection id="about" className="px-6 py-28" isOdd={false}>
      <div className="mx-auto grid max-w-300 grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-24">
        <LeftSide />
        <RightSide />
      </div>
    </BaseSection>
  )
}
