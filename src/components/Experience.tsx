import { CalendarDays, MapPin } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { experience } from '@/data/portfolio'

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've"
          highlight="made an impact"
          description="Over 5 years across full-stack product work and mission-critical systems."
        />

        <div className="mt-14 space-y-6">
          {experience.map((item, index) => (
            <Reveal key={`${item.company}-${index}`} delay={index * 0.05}>
              <div className="relative grid grid-cols-[3rem_1fr] gap-4 sm:grid-cols-[3.5rem_1fr] sm:gap-6">
                {index < experience.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute top-14 bottom-[-1.5rem] left-6 w-px bg-gradient-to-b from-violet-500/60 via-violet-500/25 to-transparent sm:left-7"
                  />
                ) : null}

                <span className="z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-surface text-indigo-400 shadow-lg sm:h-14 sm:w-14">
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </span>

                <div className="rounded-3xl border border-border bg-surface p-5 card-hover hover:border-indigo-400/40 sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-bold sm:text-xl">{item.company}</h3>
                      {item.blurb ? (
                        <p className="mt-1 text-sm text-text-muted">{item.blurb}</p>
                      ) : null}
                    </div>
                    <div className="flex flex-col items-start gap-1.5 sm:items-end">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-2 px-3 py-1 font-mono text-xs text-text-muted">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {item.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-text-muted">
                        <MapPin className="h-3.5 w-3.5" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 space-y-6 border-t border-border pt-5">
                    {item.roles.map((role, roleIndex) => (
                      <div key={`${role.title}-${roleIndex}`}>
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-display text-base font-bold">{role.title}</h4>
                          <span className="rounded-full bg-indigo-500/10 px-2.5 py-0.5 text-xs font-medium text-indigo-400">
                            {role.type}
                          </span>
                        </div>
                        <ul className="mt-3 space-y-2">
                          {role.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex gap-3 text-sm leading-relaxed text-text-muted"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-indigo-400 to-fuchsia-400" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
