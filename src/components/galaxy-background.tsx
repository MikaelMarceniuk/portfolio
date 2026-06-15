export const GalaxyBackground = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Nebula glow */}
      <div className="absolute -top-40 -right-40 h-144 w-xl rounded-full bg-(--accent)/10 blur-[120px]" />
      <div className="absolute top-1/3 -left-32 h-112 w-md rounded-full bg-(--accent)/5 blur-[100px]" />

      {/* Star layers */}
      <div className="galaxy-stars-sm absolute inset-0" />
      <div className="galaxy-stars-md absolute inset-0" />
      <div className="galaxy-stars-lg absolute inset-0" />
    </div>
  )
}
