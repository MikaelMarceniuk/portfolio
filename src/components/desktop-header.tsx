import { headerItens } from '@/src/constants/header-itens.constants'
import { socialLinks } from '@/src/constants/social-links.constants'
import { Button } from './ui/button'
import { HugeiconsIcon } from '@hugeicons/react'

export const DesktopHeader = () => {
  return (
    <header className="hidden lg:flex h-16 items-center justify-between px-8 bg-background/80 backdrop-blur border-b">
      <div className="flex items-center gap-8">
        <span className="text-lg font-semibold">Mikael</span>

        <nav>
          <ul className="flex items-center gap-6">
            {headerItens.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        {Object.entries(socialLinks).map(([key, { url, icon }]) => (
          <Button
            key={key}
            asChild
            variant="ghost"
            size="icon"
            className="rounded-full cursor-pointer hover:text-primary size-7"
          >
            <HugeiconsIcon
              icon={icon}
              className="size-5"
            />
          </Button>
        ))}

        <Button>Fale comigo</Button>
      </div>
    </header>
  )
}
