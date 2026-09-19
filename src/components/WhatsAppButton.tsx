import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/data/portfolio'

export function WhatsAppButton() {
  if (!whatsappLink) return null

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Ahmed on WhatsApp"
      className="group fixed right-5 bottom-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] py-3.5 pr-3.5 pl-3.5 text-white shadow-2xl shadow-emerald-500/30 transition-all duration-300 hover:gap-4 hover:pr-5 animate-pulse-ring sm:bottom-7 sm:right-7"
    >
      <MessageCircle className="h-6 w-6 shrink-0" />
      <span className="max-w-0 overflow-hidden text-sm font-semibold whitespace-nowrap transition-all duration-300 group-hover:max-w-[9rem] sm:max-w-[9rem] sm:pr-1">
        Chat on WhatsApp
      </span>
    </a>
  )
}
