import { BookOpen, GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { education } from '@/data/portfolio'

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="scroll-mt-24 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          id="education-heading"
          eyebrow="Education"
          title="Academic"
          highlight="foundation"
          description="An engineering background that shaped a systems-first approach to software."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {education.map((item, index) => {
            const degreeId = `education-${index}-degree`

            return (
              <Reveal key={item.school}>
                <article
                  aria-labelledby={degreeId}
                  className="relative h-full overflow-hidden rounded-3xl border border-border bg-surface p-6 card-hover hover:border-indigo-400/40 sm:p-8"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500"
                  />

                  <div className="flex items-start gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white shadow-lg">
                      <GraduationCap className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 id={degreeId} className="font-display text-lg font-bold">
                        {item.degree}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-indigo-400">{item.school}</p>
                      <p className="mt-0.5 font-mono text-xs text-text-muted">{item.period}</p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-text-muted">{item.description}</p>
                </article>
              </Reveal>
            )
          })}

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10 p-6 sm:p-8">
              <div>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface text-fuchsia-400">
                  <BookOpen className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold">Always learning</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  I continuously sharpen my craft across the MERN stack, cloud infrastructure and
                  system design — turning new tools into production-ready solutions.
                </p>
              </div>
              <p className="mt-6 font-mono text-xs text-text-muted">
                “Clean code, performance-first, business-oriented.”
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
