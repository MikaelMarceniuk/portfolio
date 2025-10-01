import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-12">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-balance">
              Mikael Marceniuk
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
              Full-Stack Developer
            </p>
            <p className="text-lg text-muted-foreground max-w-md">
              I build scalable web solutions with Node.js, React, and
              TypeScript.
            </p>
          </div>

          <div className="flex gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>

          <div className="flex gap-6 pt-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 bg-primary/30 rounded-full mx-auto flex items-center justify-center">
                <span className="text-2xl font-bold">MM</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {'// Coffee enthusiast & code craftsman'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
