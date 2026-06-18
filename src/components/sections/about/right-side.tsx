import Image from 'next/image'

export const RightSide = () => {
  return (
    <div className="flex justify-center md:justify-end">
      <div
        className="relative overflow-hidden rounded-3xl border border-border/50 bg-card"
        style={{
          boxShadow: `
            0 10px 30px color-mix(in srgb, var(--color-primary) 12%, transparent),
            0 25px 80px color-mix(in srgb, var(--color-primary) 18%, transparent)
          `,
        }}
      >
        <Image
          src="/about-photo.webp"
          alt="About me"
          width={550}
          height={650}
          className="h-auto w-full max-w-md object-cover"
          priority
        />
      </div>
    </div>
  )
}
