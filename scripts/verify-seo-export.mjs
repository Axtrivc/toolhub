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

const relatedSource = fs.readFileSync('lib/related-tools.ts', 'utf8')
const relatedBlock = relatedSource.match(/export const relatedIndex:[^{]+\{([\s\S]*?)\n\}/)?.[1] ?? ''
const relatedEntries = [...relatedBlock.matchAll(/^\s*'([^']+)':\s*\[([^\]]*)\],?$/gm)]
  .map((match) => ({
    slug: match[1],
    targets: [...match[2].matchAll(/'([^']+)'/g)].map((target) => target[1]),
  }))
const inbound = new Map(slugs.map((slug) => [slug, 0]))
const relatedBySlug = new Map(relatedEntries.map((entry) => [entry.slug, entry.targets]))
if (relatedEntries.length !== published) {
  errors.push(`Expected ${published} related-tool entries; found ${relatedEntries.length}`)
}
for (const { slug, targets } of relatedEntries) {
  if (targets.length > 4) errors.push(`Too many related links for ${slug}: ${targets.length}`)
  if (new Set(targets).size !== targets.length) errors.push(`Duplicate related-link target for ${slug}`)
  if (targets.includes(slug)) errors.push(`Self-referencing related link for ${slug}`)
  for (const target of targets) {
    if (!inbound.has(target)) {
      errors.push(`Unknown related-link target ${target} from ${slug}`)
    } else {
      inbound.set(target, inbound.get(target) + 1)
    }
  }
}
const uncovered = [...inbound].filter(([, count]) => count === 0).map(([slug]) => slug)
if (uncovered.length) errors.push(`${uncovered.length} tools receive no related-tool links: ${uncovered.slice(0, 10).join(', ')}`)
const inboundCounts = [...inbound.values()]
const relatedCoverage = { min: Math.min(...inboundCounts), max: Math.max(...inboundCounts) }

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
  const relatedSection = html.match(/<section\b[^>]*aria-labelledby="related-tools-heading"[\s\S]*?<\/section>/i)?.[0] ?? ''
  const actualRelated = [...relatedSection.matchAll(/href="\/tools\/([^"/]+)\//g)].map((match) => match[1])
  const expectedRelated = relatedBySlug.get(slug) ?? []
  if (actualRelated.join('|') !== expectedRelated.join('|')) {
    errors.push(`Rendered related links differ from the index for ${slug}`)
  }
}

if (errors.length) {
  for (const error of errors.slice(0, 50)) console.error('SEO ERROR:', error)
  console.error(`${errors.length} SEO verification failure(s)`)
  process.exit(1)
}
console.log(`SEO verification passed: ${slugs.length} tool HTML pages, ${locations.length} unique sitemap URLs`)
console.log(`Related-link coverage passed: ${slugs.length - uncovered.length}/${slugs.length} tools have inbound recommendations (min ${relatedCoverage.min}, max ${relatedCoverage.max})`)
