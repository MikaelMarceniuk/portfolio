export function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 lg:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="w-16 h-px bg-primary"></div>
              <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                About
              </h2>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold text-balance">
              Specialized in modern JavaScript ecosystems
            </h3>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I specialize in building end-to-end web applications using
              cutting-edge technologies like React, Next.js, NestJS, and
              TypeScript. My approach combines clean, maintainable code with
              performance optimization, resulting in applications that scale
              efficiently and deliver exceptional user experiences.
            </p>

            <p>
              I've helped startups reduce deployment time by 60% and enterprises
              improve application performance by 40% through strategic
              architecture decisions and modern development practices.
            </p>

            <p>
              Currently, I'm a Senior Full-Stack Developer specializing in
              accessibility and performance optimization. I contribute to the
              creation and maintenance of scalable applications that meet modern
              web standards and best practices to deliver inclusive user
              experiences.
            </p>

            <p>
              When I'm not coding, you'll find me exploring new coffee brewing
              techniques – precision matters in both code and coffee.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
