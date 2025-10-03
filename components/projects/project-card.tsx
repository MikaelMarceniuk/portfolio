'use client'

import { Github, ExternalLink } from 'lucide-react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../ui/card'
import React from 'react'
import { Project } from '@/types/project.types'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { useLocale } from '@/hooks/use-locale'

export const ProjectCard: React.FC<Project> = (project) => {
  const { locale } = useLocale()

  return (
    <Card
      key={project.name}
      className="group hover:shadow-lg transition-shadow pt-0"
    >
      <div className="aspect-video overflow-hidden rounded-t-lg pt-0">
        <img
          src={project.image || '/placeholder.svg'}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{project.name}</CardTitle>
        <CardDescription className="text-base">
          {project.description[locale.code]}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-primary font-medium">
          {project.impact[locale.code]}
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
            onClick={() => window.open(project.githubLink, '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            Code
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="flex-1 bg-transparent"
            onClick={() => window.open(project.liveLink, '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Live
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
