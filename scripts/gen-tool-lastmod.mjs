import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

/**
 * Build lib/generated/tool-lastmod.json: the date (UTC, YYYY-MM-DD) of the latest
 * commit that touched each tool's own source files. The sitemap uses it for <lastmod>.
 *
 * A tool's own files are:
 *   - app/tools/<slug>/**                      (route + editorial content)
 *   - lib/i18n/tools-l10n/<slug>.ts           (localized copy, when present)
 *   - @/components modules imported by app/tools/<slug>/page.tsx that no other
 *     tool page imports (a dedicated client component)
 * Shared files (ToolLayout, batch component files, lib/tools.ts …) are ignored so a
 * change to one tool in a shared batch does not bump every tool sharing that file.
 *
 * Dates come only from git history. When history is unavailable or shallow (e.g. a
 * depth-1 CI checkout) the committed manifest is left untouched instead of writing
 * wrong dates. Run `npm run lastmod` after committing tool changes to refresh it.
 */
const root = process.cwd()
const outFile = path.join(root, 'lib/generated/tool-lastmod.json')
const toolsDir = path.join(root, 'app/tools')

function git(args) {
  return execFileSync('git', args, { cwd: root, encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 })
}

function skip(reason) {
  console.log(`[tool-lastmod] ${reason}; keeping committed ${path.relative(root, outFile)}`)
  process.exit(0)
}

try {
  if (git(['rev-parse', '--is-shallow-repository']).trim() !== 'false') skip('shallow git history')
} catch {
  skip('git history unavailable')
}

const slugs = fs.readdirSync(toolsDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && fs.existsSync(path.join(toolsDir, entry.name, 'page.tsx')))
  .map((entry) => entry.name)
  .sort()

function resolveModule(spec) {
  const base = path.join(root, spec.replace(/^@\//, ''))
  for (const candidate of [`${base}.tsx`, `${base}.ts`, path.join(base, 'index.tsx'), path.join(base, 'index.ts')]) {
    if (fs.existsSync(candidate)) return path.relative(root, candidate).split(path.sep).join('/')
  }
  return null
}

const componentImports = new Map()
const importers = new Map()
for (const slug of slugs) {
  const source = fs.readFileSync(path.join(toolsDir, slug, 'page.tsx'), 'utf8')
  const files = [...source.matchAll(/from\s+'(@\/components\/[^']+)'/g)]
    .map((match) => resolveModule(match[1]))
    .filter(Boolean)
  componentImports.set(slug, files)
  for (const file of files) importers.set(file, (importers.get(file) ?? 0) + 1)
}

// Latest commit date per path, newest first, merges excluded (their changes are on the merged commits).
const latestByFile = new Map()
let currentDate = null
for (const line of git(['log', '--no-merges', '--format=@@%ct', '--name-only', '--', 'app/tools', 'lib/i18n/tools-l10n', 'components']).split('\n')) {
  if (line.startsWith('@@')) {
    currentDate = new Date(Number(line.slice(2)) * 1000).toISOString().slice(0, 10)
  } else if (line && currentDate && !latestByFile.has(line)) {
    latestByFile.set(line, currentDate)
  }
}

const manifest = {}
const missing = []
for (const slug of slugs) {
  const ownFiles = [`lib/i18n/tools-l10n/${slug}.ts`, ...componentImports.get(slug).filter((file) => importers.get(file) === 1)]
  const dates = ownFiles.map((file) => latestByFile.get(file))
  const prefix = `app/tools/${slug}/`
  for (const [file, date] of latestByFile) if (file.startsWith(prefix)) dates.push(date)
  const latest = dates.filter(Boolean).sort().at(-1)
  if (latest) manifest[slug] = latest
  else missing.push(slug)
}

fs.mkdirSync(path.dirname(outFile), { recursive: true })
fs.writeFileSync(outFile, `${JSON.stringify(manifest, null, 2)}\n`)
console.log(`[tool-lastmod] wrote ${Object.keys(manifest).length} tool dates to ${path.relative(root, outFile)}`)
if (missing.length) console.log(`[tool-lastmod] no committed history for: ${missing.join(', ')}`)
