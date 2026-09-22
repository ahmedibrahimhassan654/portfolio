import { spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, copyFileSync, statSync, rmSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { tmpdir } from 'node:os'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const sourceHtml = join(root, 'resume', 'cv.html')
const outputTargets = [
  join(root, 'public', 'Ahmed-Ibrahim-CV.pdf'),
  join(root, 'MERN Stack Web Developer.pdf'),
]

const chromeCandidates = [
  process.env.CHROME_PATH,
  process.env.EDGE_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
  'google-chrome',
  'google-chrome-stable',
  'chromium',
  'chromium-browser',
  'microsoft-edge',
].filter(Boolean)

function findBrowser() {
  for (const candidate of chromeCandidates) {
    if (candidate.includes('/') || candidate.includes('\\')) {
      if (existsSync(candidate)) return candidate
    } else {
      const probe = spawnSync(candidate, ['--version'], { encoding: 'utf8' })
      if (probe.status === 0) return candidate
    }
  }
  return null
}

function printToPdf(browser, outFile) {
  const profileDir = join(tmpdir(), `cv-chrome-${Date.now()}`)
  mkdirSync(profileDir, { recursive: true })

  const args = [
    '--headless=new',
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    '--no-pdf-header-footer',
    '--virtual-time-budget=2000',
    `--user-data-dir=${profileDir}`,
    `--print-to-pdf=${outFile}`,
    pathToFileURL(sourceHtml).href,
  ]

  const result = spawnSync(browser, args, { encoding: 'utf8' })

  if (result.status !== 0 && result.stderr) {
    process.stderr.write(result.stderr)
  }

  rmSync(profileDir, { recursive: true, force: true })
  return result.status === 0
}

const browser = findBrowser()
if (!browser) {
  console.error('Could not find Chrome or Edge. Set CHROME_PATH to the browser executable.')
  process.exit(1)
}

if (!existsSync(sourceHtml)) {
  console.error(`Missing CV source: ${sourceHtml}`)
  process.exit(1)
}

const tempOut = join(tmpdir(), `Ahmed-Ibrahim-CV-${Date.now()}.pdf`)

console.log(`Using browser: ${browser}`)
console.log(`Rendering: ${sourceHtml}`)

if (!printToPdf(browser, tempOut) || !existsSync(tempOut) || statSync(tempOut).size === 0) {
  console.error('Failed to render the CV PDF.')
  process.exit(1)
}

for (const target of outputTargets) {
  mkdirSync(dirname(target), { recursive: true })
  copyFileSync(tempOut, target)
  console.log(`Wrote: ${target}`)
}

rmSync(tempOut, { force: true })
console.log('CV PDF build complete.')
