import { LinkKey, LINKS } from '@/constants/links.contants'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function openWebsite(link: LinkKey) {
  window.open(LINKS[link], '_blank')
}
