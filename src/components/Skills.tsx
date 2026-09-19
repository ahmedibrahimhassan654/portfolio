import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { skillGroups } from '@/data/portfolio'

const marqueeSkills = skillGroups.flatMap((group) => group.skills.map((skill) => skill.name))

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Skills"
          title="The tools I use to"
          highlight="ship results"
          description="A full-stack toolkit covering the frontend, the backend and the infrastructure in between."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-surface p-6 card-hover hover:-translate-y-1.5 hover:border-indigo-400/40 hover:shadow-2xl hover:shadow-violet-500/10">
                <span
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${group.accent}`}
                  aria-hidden="true"
                />

                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${group.accent} text-white shadow-lg`}
                >
                  <group.icon className="h-6 w-6" />
                </span>

                <h3 className="mt-5 font-display text-xl font-bold">{group.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{group.description}</p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-2 px-3 py-2 text-sm font-medium transition-colors group-hover:border-indigo-400/30"
                    >
                      <skill.icon className="h-4 w-4 text-indigo-400" />
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-12">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface py-4 mask-fade-x">
            <div className="flex w-max animate-marquee items-center gap-3">
              {[...marqueeSkills, ...marqueeSkills].map((name, index) => (
                <span
                  key={`${name}-${index}`}
                  className="rounded-full border border-border bg-surface-2 px-4 py-2 font-mono text-xs font-medium whitespace-nowrap text-text-muted"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
