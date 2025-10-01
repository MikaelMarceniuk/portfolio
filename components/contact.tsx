import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Github, Linkedin, Coffee } from 'lucide-react'

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 lg:px-12 bg-card/30"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-16">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="w-16 h-px bg-primary mx-auto"></div>
              <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Contact
              </h2>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold text-balance">
              Ready to collaborate? Let's build something amazing together.
            </h3>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm actively seeking full-time opportunities and freelance
              projects where I can contribute my technical expertise and passion
              for innovation. Whether you're a startup looking to build your MVP
              or an established company needing to scale your platform, I'm
              ready to help you achieve your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg mx-auto flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="text-sm text-muted-foreground">
                    mikael@example.com
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg mx-auto flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">GitHub</h4>
                  <p className="text-sm text-muted-foreground">
                    github.com/mikael
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg mx-auto flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">LinkedIn</h4>
                  <p className="text-sm text-muted-foreground">
                    linkedin.com/in/mikael
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <Coffee className="w-4 h-4 mr-2" />
              Let's grab coffee and chat
            </Button>

            <p className="text-sm text-muted-foreground">
              Available for full-time positions and freelance projects
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
