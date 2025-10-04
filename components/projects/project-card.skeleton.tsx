import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export const ProjectCardSkeleton = () => {
  return (
    <Card className="pt-0">
      {/* Imagem */}
      <div className="aspect-video overflow-hidden rounded-t-lg pt-0">
        <Skeleton className="w-full h-full" />
      </div>

      <CardHeader>
        <CardTitle>
          <Skeleton className="h-6 w-3/4" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="h-4 w-full mb-1" />
          <Skeleton className="h-4 w-2/3" />
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Impact */}
        <Skeleton className="h-4 w-1/2" />

        {/* Stack */}
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton
              key={i}
              className="h-5 w-16 rounded-md"
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 pt-2">
          <Skeleton className="h-9 w-full rounded-md" />
          <Skeleton className="h-9 w-full rounded-md" />
        </div>
      </CardContent>
    </Card>
  )
}
