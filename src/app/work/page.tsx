import { FeaturedWorkCard } from '@/components/sections/featured-work/featured-work.card'
import { WORK_DATA } from '@/mock/works'

export const metadata = {
  title: 'Projects | mmarceniuk.dev',
  description: 'All featured projects and work samples.',
}

// TODO Improve this page
export default function WorkPage() {
  return (
    <main className="px-6 py-24">
      <div className="mx-auto max-w-300">
        <div className="mb-16">
          <p className="font-mono text-xs tracking-widest text-primary uppercase">
            All Projects
          </p>
          <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Work Samples
          </h1>
        </div>

        <div className="flex flex-col gap-16">
          {WORK_DATA.map((work, index) => {
            const isEven = index % 2 === 1
            return <FeaturedWorkCard key={index} work={work} isEven={isEven} />
          })}
        </div>
      </div>
    </main>
  )
}
