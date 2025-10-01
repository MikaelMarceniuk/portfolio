import { VariantProps } from 'class-variance-authority'
import { buttonVariants } from '@/components/ui/button'

export type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }
