import { CheckCircle2, Rocket, ShieldCheck, Sparkles, Workflow } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { profile, socials, stats } from '@/data/portfolio'

type Highlight = {
  icon: LucideIcon
  title: string
  text: string
}

const highlights: Highlight[] = [
  {
    icon: Workflow,
    title: 'End-to-end delivery',
    text: 'From idea and architecture to deployment and production support.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure by design',
    text: 'JWT, OAuth, role-based access control and input sanitization.',
  },
  {
    icon: Rocket,
    title: 'Performance first',
    text: 'Optimized APIs, caching and responsive, accessible interfaces.',
  },
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          id="about-heading"
          eyebrow="About me"
          title="Turning ideas into"
          highlight="production software"
          description="A closer look at how I work and what I bring to every project."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal className="space-y-6">
            <p className="text-base leading-relaxed text-text-muted sm:text-lg">{profile.summary}</p>
            <p className="text-base leading-relaxed text-text-muted sm:text-lg">
              {profile.summarySecondary}
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-surface p-5 card-hover hover:-translate-y-1 hover:border-indigo-400/40"
                >
                  <item.icon className="h-6 w-6 text-indigo-400" />
                  <h3 className="mt-3 font-display text-sm font-bold">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-text-muted">{item.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-5">
            <div className="rounded-3xl border border-border bg-surface p-6">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-fuchsia-400" />
                <h3 className="font-display text-base font-bold">Quick facts</h3>
              </div>

              <dl className="mt-5 grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-surface-2 p-3.5">
                    <dt className="text-xs text-text-muted">{stat.label}</dt>
                    <dd className="mt-1 font-display text-lg font-extrabold">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-3xl border border-border bg-surface p-6">
              <h3 className="font-display text-base font-bold">Get in touch</h3>
              <ul className="mt-4 space-y-2">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group flex items-center gap-3 rounded-2xl border border-transparent px-3 py-2.5 transition-colors hover:border-border hover:bg-surface-2"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/15 to-fuchsia-500/15 text-indigo-400">
                        <social.icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs text-text-muted">{social.label}</span>
                        <span className="block truncate text-sm font-medium">{social.value}</span>
                      </span>
                      <CheckCircle2 className="ml-auto h-4 w-4 shrink-0 text-transparent transition-colors group-hover:text-emerald-400" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
