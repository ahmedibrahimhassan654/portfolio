import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const whatsappUrl = env.VITE_WHATSAPP_URL ?? process.env.VITE_WHATSAPP_URL

  if (mode === 'production' && (!whatsappUrl || whatsappUrl === '[SENSITIVE]')) {
    throw new Error(
      'Missing VITE_WHATSAPP_URL. Set it in your local .env or as a non-sensitive variable in the Vercel project environment before building for production.',
    )
  }

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
