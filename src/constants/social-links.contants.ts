import { Mail } from 'lucide-react'
import { FaLinkedinIn } from 'react-icons/fa'
import { SiGithub, SiWhatsapp } from 'react-icons/si'

export const SOCIAL_LINKS = [
  {
    icon: Mail,
    label: 'mikael@mmarceniuk.dev',
    value: 'mikael@mmarceniuk.dev',
    action: 'copy' as const,
  },
  {
    icon: SiWhatsapp,
    label: 'WhatsApp',
    value: 'https://wa.me/5516997965512',
    action: 'link' as const,
  },
  {
    icon: FaLinkedinIn,
    label: 'LinkedIn',
    value: 'https://www.linkedin.com/in/mikael-marceniuk/',
    action: 'link' as const,
  },
  {
    icon: SiGithub,
    label: 'GitHub',
    value: 'https://github.com/MikaelMarceniuk',
    action: 'link' as const,
  },
]
