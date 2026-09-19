export function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-bg" />

      <div className="absolute -top-40 -left-32 h-[32rem] w-[32rem] rounded-full bg-indigo-500/30 blur-[120px] animate-blob dark:bg-indigo-600/25" />
      <div
        className="absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/25 blur-[130px] animate-blob dark:bg-fuchsia-600/20"
        style={{ animationDelay: '-6s' }}
      />
      <div
        className="absolute -bottom-48 left-1/4 h-[34rem] w-[34rem] rounded-full bg-violet-500/25 blur-[140px] animate-blob dark:bg-violet-600/20"
        style={{ animationDelay: '-12s' }}
      />

      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.22]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)',
        }}
      />
    </div>
  )
}
