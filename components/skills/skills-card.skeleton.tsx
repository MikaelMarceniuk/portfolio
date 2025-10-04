export const SkillCardSkeleton = () => {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="h-5 w-32 bg-primary rounded" />

      <div className="flex flex-wrap gap-2">
        <div className="h-6 w-16 bg-primary rounded-full" />
        <div className="h-6 w-20 bg-primary rounded-full" />
        <div className="h-6 w-14 bg-primary rounded-full" />
        <div className="h-6 w-24 bg-primary rounded-full" />
      </div>
    </div>
  )
}
