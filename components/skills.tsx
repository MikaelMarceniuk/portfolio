import { Badge } from '@/components/ui/badge'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Responsive Design',
    ],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'NestJS', 'RESTful APIs', 'GraphQL', 'Microservices'],
  },
  {
    title: 'Database & DevOps',
    skills: ['PostgreSQL', 'MongoDB', 'Docker', 'CI/CD', 'Cloud Deployment'],
  },
  {
    title: 'Tools & Testing',
    skills: [
      'Git',
      'Jest',
      'Playwright',
      'Webpack',
      'Performance Optimization',
    ],
  },
]

export function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 lg:px-12 bg-card/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="space-y-16">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="w-16 h-px bg-primary"></div>
              <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Skills
              </h2>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold text-balance">
              Frontend, Backend & Full-stack development
            </h3>

            <p className="text-lg text-muted-foreground max-w-2xl">
              I focus on creating maintainable, scalable solutions that grow
              with your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-primary">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
