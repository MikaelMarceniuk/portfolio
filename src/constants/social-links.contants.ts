import { Mail } from 'lucide-react'
import { FaLinkedinIn } from 'react-icons/fa'
import { SiGithub, SiWhatsapp } from 'react-icons/si'

export const SOCIAL_LINKS = [
  {
    icon: Mail,
    label: 'hello@mmarceniuk.dev',
    value: 'hello@mmarceniuk.dev',
    action: 'copy' as const,
  },
  {
    icon: SiWhatsapp,
    label: 'WhatsApp',
    value: 'https://wa.me/55...',
    action: 'link' as const,
  },
  {
    icon: FaLinkedinIn,
    label: 'LinkedIn',
    value: 'https://linkedin.com/...',
    action: 'link' as const,
  },
  {
    icon: SiGithub,
    label: 'GitHub',
    value: 'https://github.com/...',
    action: 'link' as const,
  },
]
