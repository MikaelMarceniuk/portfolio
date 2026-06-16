import { BaseSection } from '@/components/base-section'
import { ContactLeftSide } from './left-side'
import { ContactRightSide } from './right-side'
import { SECTIONS } from '@/constants/section.constants'

export const ContactSection = () => {
  return (
    <BaseSection id={SECTIONS.CONTACT} className="px-6 py-28">
      <div className="mx-auto grid max-w-300 grid-cols-1 gap-16 md:grid-cols-[1fr_420px]">
        <ContactLeftSide />
        <ContactRightSide />
      </div>
    </BaseSection>
  )
}
