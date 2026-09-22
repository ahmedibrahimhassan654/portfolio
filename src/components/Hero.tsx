import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import {
  ArrowRight,
  Atom,
  Database,
  Download,
  MessageCircle,
  Server,
  Sparkles,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { profile, stats, whatsappLink } from '@/data/portfolio'

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState<'typing' | 'deleting'>('typing')

  useEffect(() => {
    const word = words[index % words.length]
    const speed = phase === 'typing' ? 80 : 40

    if (phase === 'typing' && text === word) {
      const pause = setTimeout(() => setPhase('deleting'), 1700)
      return () => clearTimeout(pause)
    }

    if (phase === 'deleting' && text === '') {
      setIndex((value) => value + 1)
      setPhase('typing')
      return
    }

    const timer = setTimeout(() => {
      setText(
        phase === 'typing'
          ? word.slice(0, text.length + 1)
          : word.slice(0, Math.max(0, text.length - 1)),
      )
    }, speed)

    return () => clearTimeout(timer)
  }, [text, phase, index, words])

  return text
}

type FloatingBadge = {
  label: string
  icon: LucideIcon
  position: string
  delay: string
}

const floatingBadges: FloatingBadge[] = [
  { label: 'React', icon: Atom, position: 'top-6 -left-4 sm:-left-8', delay: '0s' },
  { label: 'Node.js', icon: Server, position: 'top-1/2 -right-4 sm:-right-8', delay: '-2s' },
  { label: 'MongoDB', icon: Database, position: '-bottom-4 left-6', delay: '-4s' },
]

export function Hero() {
  const prefersReduced = useReducedMotion()
  const typed = useTypewriter(profile.roles)
  const roleText = prefersReduced ? profile.roles[0] : typed

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-text-muted sm:text-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {profile.availability}
          </motion.span>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 text-4xl leading-[1.05] font-extrabold sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-4 flex min-h-10 items-center font-mono text-lg font-semibold text-text-muted sm:text-2xl"
          >
            <span className="mr-2 text-indigo-400">&gt;</span>
            <span className="text-gradient">{roleText}</span>
            <span className="ml-1 inline-block h-6 w-0.5 animate-pulse bg-fuchsia-500 sm:h-7" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-size-[200%_200%] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition-all hover:bg-right"
            >
              View my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-indigo-400/60 hover:text-indigo-400"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
            {whatsappLink ? (
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-6 py-3 text-sm font-semibold text-emerald-500 transition-colors hover:bg-emerald-500/20"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            ) : null}
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="mt-12 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-border bg-surface p-4">
                <dt className="text-xs leading-snug text-text-muted">{stat.label}</dt>
                <dd className="mt-1 font-display text-2xl font-extrabold text-gradient">
                  {stat.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-linear-to-br from-indigo-500 via-violet-500 to-fuchsia-500 opacity-30 blur-3xl" />

          <div className="relative overflow-hidden rounded-4xl border border-border bg-surface p-3 glow">
            <div className="aspect-square overflow-hidden rounded-3xl bg-linear-to-br from-indigo-500 via-violet-500 to-fuchsia-500">
              <img
                src={profile.avatar}
                alt={profile.name}
                width={480}
                height={480}
                loading="eager"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex items-center justify-between px-3 py-3">
              <div>
                <p className="font-display text-sm font-bold">{profile.name}</p>
                <p className="font-mono text-xs text-text-muted">MERN Stack Developer</p>
              </div>
              <Sparkles className="h-5 w-5 text-fuchsia-400" />
            </div>
          </div>

          {floatingBadges.map((badge) => (
            <div
              key={badge.label}
              className={`absolute ${badge.position} flex items-center gap-2 rounded-2xl border border-border bg-surface px-3.5 py-2 text-xs font-semibold shadow-xl backdrop-blur-md animate-float`}
              style={{ animationDelay: badge.delay }}
            >
              <badge.icon className="h-4 w-4 text-indigo-400" />
              {badge.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
