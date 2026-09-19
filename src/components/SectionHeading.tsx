import { Reveal } from '@/components/Reveal'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  highlight?: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <Reveal className={`flex flex-col gap-4 ${alignment}`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-4 py-1.5 font-mono text-xs font-medium tracking-widest text-text-muted uppercase">
        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
        {eyebrow}
      </span>
      <h2 className="max-w-3xl text-3xl leading-tight font-extrabold sm:text-4xl md:text-5xl">
        {title} {highlight ? <span className="text-gradient">{highlight}</span> : null}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">{description}</p>
      ) : null}
    </Reveal>
  )
}
