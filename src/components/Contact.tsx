import { ArrowUpRight, MessageCircle, Send } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { profile, socials, whatsappLink } from '@/data/portfolio'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          highlight="great together"
          description="Have a project in mind, or a role you think I'd be a fit for? Reach out — I reply fast."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-7 text-white sm:p-9">
              <div
                aria-hidden="true"
                className="absolute -top-16 -right-10 h-56 w-56 rounded-full bg-white/15 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-black/15 blur-3xl"
              />

              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3.5 py-1.5 text-xs font-medium backdrop-blur-md">
                  <Send className="h-3.5 w-3.5" />
                  Available for full-time &amp; contract work
                </span>

                <h3 className="mt-5 font-display text-2xl leading-tight font-extrabold sm:text-3xl">
                  Prefer a quick chat? Message me on WhatsApp.
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
                  The fastest way to reach me. Tell me about your project and I&apos;ll get back to
                  you as soon as possible.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {whatsappLink ? (
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-violet-700 shadow-xl transition-transform hover:-translate-y-0.5"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Chat on WhatsApp
                    </a>
                  ) : null}
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20"
                  >
                    <Send className="h-4 w-4" />
                    Send an email
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid h-full gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-4 card-hover hover:-translate-y-1 hover:border-indigo-400/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/15 to-fuchsia-500/15 text-indigo-400">
                    <social.icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-medium tracking-wide text-text-muted uppercase">
                      {social.label}
                    </span>
                    <span className="block truncate font-medium">{social.value}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-400" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
