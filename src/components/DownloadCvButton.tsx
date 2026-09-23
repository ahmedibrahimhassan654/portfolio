import { Download } from 'lucide-react'
import { profile } from '@/data/portfolio'

type DownloadCvButtonProps = {
  label?: string
  size?: 'sm' | 'md'
  className?: string
}

const sizeClasses = {
  sm: 'gap-1.5 px-4 py-2 text-xs',
  md: 'gap-2 px-6 py-3 text-sm',
}

const iconClasses = {
  sm: 'h-3.5 w-3.5',
  md: 'h-4 w-4',
}

export function DownloadCvButton({
  label = 'Download CV',
  size = 'md',
  className = '',
}: DownloadCvButtonProps) {
  return (
    <a
      href={profile.resume}
      download
      aria-label={`Download ${profile.name}'s CV (PDF)`}
      className={`inline-flex items-center rounded-full border border-border bg-surface font-semibold text-text transition-colors hover:border-indigo-400/60 hover:text-indigo-400 ${sizeClasses[size]} ${className}`}
    >
      <Download className={iconClasses[size]} aria-hidden="true" />
      {label}
    </a>
  )
}
