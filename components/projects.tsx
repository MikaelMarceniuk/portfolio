import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    name: 'EcoCommerce Platform',
    description:
      'Full-stack e-commerce platform for sustainable products with real-time inventory management',
    impact:
      'Increased conversion rate by 35% and reduced page load time by 50%',
    stack: ['Next.js', 'TypeScript', 'NestJS', 'PostgreSQL'],
    image: '/ecommerce-dashboard.png',
  },
  {
    name: 'TaskFlow SaaS',
    description:
      'Project management application with real-time collaboration and automated workflows',
    impact:
      'Serves 10K+ active users with 99.9% uptime and sub-200ms response times',
    stack: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
    image: '/project-management-dashboard.png',
  },
  {
    name: 'FinTech API Gateway',
    description:
      'Microservices architecture for financial data processing with advanced security features',
    impact:
      'Processes 1M+ transactions daily with 40% cost reduction in infrastructure',
    stack: ['NestJS', 'TypeScript', 'Redis', 'Docker'],
    image: '/fintech-api-dashboard.jpg',
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 lg:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <div className="space-y-16">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="w-16 h-px bg-primary"></div>
              <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Projects
              </h2>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold text-balance">
              Portfolio includes e-commerce platforms, SaaS applications, and
              API integrations
            </h3>

            <p className="text-lg text-muted-foreground max-w-2xl">
              Each project showcases my ability to translate complex
              requirements into elegant, performant solutions with measurable
              business impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.name}
                className="group hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || '/placeholder.svg'}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.name}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-primary font-medium">
                    {project.impact}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 bg-transparent"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 bg-transparent"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
