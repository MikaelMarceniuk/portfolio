import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/src/components/animate-ui/components/radix/sheet'
import { Menu01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Button } from './ui/button'
import { socialLinks } from '../constants/social-links.contants'
import { headerItens } from '../constants/header-itens.constants'

export const MobileHeader = () => {
  return (
    <header className="h-16 flex items-center justify-end px-2 bg-background/80 backdrop-blur lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant={'ghost'}
            size={'icon-lg'}
            aria-label="Abrir menu"
          >
            <HugeiconsIcon
              icon={Menu01Icon}
              className="size-6"
            />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-[80vw] max-w-sm flex flex-col justify-between p-0"
        >
          <div>
            <SheetHeader className="px-6 py-5 border-b">
              <SheetTitle className="text-lg font-semibold">
                Navegação
              </SheetTitle>
            </SheetHeader>

            <ul className="px-4 py-6 space-y-2">
              {headerItens.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="flex items-center h-12 px-4 rounded-lg text-base font-medium text-muted-foreground active:bg-muted/60 active:text-foreground transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center justify-center gap-4 mb-3">
              {Object.entries(socialLinks).map(([key, { url, icon }]) => (
                <Button
                  key={key}
                  asChild
                  variant="ghost"
                  className="size-11 rounded-full active:bg-muted/60"
                >
                  <HugeiconsIcon
                    icon={icon}
                    className="size-6"
                  />
                </Button>
              ))}
            </div>

            <SheetFooter className="px-6 py-4 border-t">
              <Button>Fale comigo</Button>
            </SheetFooter>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
