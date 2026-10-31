import fs from 'node:fs'
import path from 'node:path'

/**
 * Check the *rendered HTML*, not just TS source, for crawlability regressions.
 * Run after `npm run build` with `node scripts/verify-seo-export.mjs`.
 */
const root = path.resolve('out')
const domain = 'https://toolhub.axtrivc.com'
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8')
const published = (fs.readFileSync('lib/tools.ts', 'utf8').match(/\bpublished:\s*true\b/g) ?? []).length
const toolsDir = path.join(root, 'tools')
const slugs = fs.readdirSync(toolsDir, { withFileTypes: true })
  .filter((item) => item.isDirectory())
  .map((item) => item.name)
  .filter((slug) => fs.existsSync(path.join(toolsDir, slug, 'index.html')))
const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
const indexed = new Set(locations)
const errors = []

if (slugs.length !== published || published === 0) {
  errors.push(`Expected ${published} published tool pages; found ${slugs.length} static HTML pages`)
}
if (indexed.size !== locations.length) errors.push('Sitemap contains duplicate canonical URLs')

for (const slug of slugs) {
  const expected = `${domain}/tools/${slug}/`
  if (!indexed.has(expected)) errors.push(`Sitemap is missing ${slug}`)
  const html = fs.readFileSync(path.join(toolsDir, slug, 'index.html'), 'utf8')
  const canonicalTag = html.match(/<link\b[^>]*\brel="canonical"[^>]*>/i)?.[0] ?? ''
  const canonical = canonicalTag.match(/\bhref="([^"]+)"/i)?.[1]
  if (canonical !== expected) errors.push(`Wrong canonical for ${slug}: ${canonical ?? 'missing'}`)
  const title = html.match(/<title>([^<]*)<\/title>/i)?.[1] ?? ''
  if (!title.trim()) errors.push(`Missing title for ${slug}`)
  if (!/<h1\b/i.test(html)) errors.push(`Missing H1 for ${slug}`)
  if (html.includes('100% Free &amp; Private. No sign-up, runs in your browser.')) {
    errors.push(`Repeating generic description hook in ${slug}`)
  }
  if (/\bhreflang="(?:zh|es|de)"[^>]*\?lang=|\?lang=(?:zh|es|de)[^<]*\bhreflang=/i.test(html)) {
    errors.push(`Client-only language URL incorrectly advertised via hreflang for ${slug}`)
  }
  if (html.includes('The Loan Calculator lets you figure out loan calculator instantly')) {
    errors.push('Generic SEO filler remains in the loan calculator')
  }
}

if (errors.length) {
  for (const error of errors.slice(0, 50)) console.error('SEO ERROR:', error)
  console.error(`${errors.length} SEO verification failure(s)`)
  process.exit(1)
}
console.log(`SEO verification passed: ${slugs.length} tool HTML pages, ${locations.length} unique sitemap URLs`)
