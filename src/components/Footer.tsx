import { ArrowUp, Heart } from 'lucide-react'
import { navItems, profile, socials } from '@/data/portfolio'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-2.5 font-display text-lg font-extrabold">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-sm font-black text-white">
                AI
              </span>
              <span>
                Ahmed<span className="text-gradient">.dev</span>
              </span>
            </a>
            <p className="max-w-sm text-sm leading-relaxed text-text-muted">{profile.tagline}</p>
            <p className="font-mono text-xs text-text-muted">{profile.location}</p>
          </div>

          <nav aria-labelledby="footer-navigate">
            <h2
              id="footer-navigate"
              className="mb-4 font-display text-sm font-bold tracking-widest text-text uppercase"
            >
              Navigate
            </h2>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-text-muted transition-colors hover:text-indigo-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-connect">
            <h2
              id="footer-connect"
              className="mb-4 font-display text-sm font-bold tracking-widest text-text uppercase"
            >
              Connect
            </h2>
            <ul className="space-y-2.5">
              {socials.slice(0, 4).map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-indigo-400"
                  >
                    <social.icon className="h-4 w-4" aria-hidden="true" />
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="inline-flex items-center gap-1.5 text-xs text-text-muted">
            © {year} {profile.name}. Built with
            <Heart className="h-3.5 w-3.5 fill-fuchsia-500 text-fuchsia-500" />
            React, Vite &amp; Tailwind CSS.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-text-muted transition-colors hover:border-indigo-400/60 hover:text-indigo-400"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
