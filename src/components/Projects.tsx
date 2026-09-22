import { ArrowUpRight, Server } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { projects } from '@/data/portfolio'

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          id="projects-heading"
          eyebrow="Projects"
          title="Real products,"
          highlight="shipped live"
          description="A selection of platforms I have designed, built and deployed end-to-end."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            const titleId = `project-${index}-title`

            return (
              <Reveal key={project.title} delay={index * 0.07} className="h-full">
                <article aria-labelledby={titleId} className="h-full">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface card-hover hover:-translate-y-1.5 hover:border-indigo-400/40 hover:shadow-2xl hover:shadow-violet-500/10"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={project.image}
                        alt={`${project.title} — ${project.subtitle}`}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

                      {project.featured ? (
                        <span className="absolute top-4 left-4 rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                          Featured
                        </span>
                      ) : null}

                      <span className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-md transition-transform duration-300 group-hover:rotate-45">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <p className="font-mono text-xs text-indigo-400">{project.subtitle}</p>
                      <h3 id={titleId} className="mt-1 font-display text-xl font-bold">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-muted">
                        {project.description}
                      </p>

                      <ul className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-lg border border-border bg-surface-2 px-2.5 py-1 font-mono text-xs text-text-muted"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>

                      {project.architecture ? (
                        <div className="mt-5 rounded-2xl border border-border bg-surface-2/60 p-4">
                          <h4 className="inline-flex items-center gap-2 font-display text-xs font-bold tracking-wide text-text uppercase">
                            <Server className="h-3.5 w-3.5 text-indigo-400" aria-hidden="true" />
                            Architecture &amp; Infrastructure
                          </h4>
                          <ul className="mt-3 space-y-2">
                            {project.architecture.map((step) => (
                              <li
                                key={step.label}
                                className="flex gap-2.5 text-xs leading-relaxed text-text-muted"
                              >
                                <span
                                  aria-hidden="true"
                                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-indigo-400 to-fuchsia-400"
                                />
                                <span>
                                  <span className="font-semibold text-text">{step.label}:</span>{' '}
                                  {step.detail}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}

                      <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-indigo-400">
                        Visit live site
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </a>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
