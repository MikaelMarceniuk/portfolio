import { BaseSection } from '@/components/base-section'
import { LeftSide } from './left-side'
import { RightSide } from './right-side'
import { SECTIONS } from '@/constants/section.constants'

export const AboutSection = () => {
  return (
    <BaseSection id={SECTIONS.ABOUT} className="px-6 py-28">
      <div className="mx-auto grid max-w-300 grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-24">
        <LeftSide />
        <RightSide />
      </div>
    </BaseSection>
  )
}
