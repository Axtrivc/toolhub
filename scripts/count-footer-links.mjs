#!/usr/bin/env node
/**
 * Count rendered <a href> links inside <footer> of built static-export pages.
 * Usage: node scripts/count-footer-links.mjs [file ...]  (default: out/index.html)
 * Env: MAX_FOOTER_LINKS (default 35). Exit 1 if any page is over the limit.
 */
import { readFileSync } from 'node:fs'

const MAX_FOOTER_LINKS = Number(process.env.MAX_FOOTER_LINKS ?? 35)
const files = process.argv.slice(2)
if (files.length === 0) files.push('out/index.html')

let failed = false
for (const f of files) {
  let html
  try {
    html = readFileSync(f, 'utf8')
  } catch (e) {
    console.log(f + ': READ ERROR ' + e.message)
    failed = true
    continue
  }
  const footer = html.match(/<footer[\s\S]*?<\/footer>/i)
  if (!footer) {
    console.log(f + ': NO FOOTER ELEMENT FOUND')
    failed = true
    continue
  }
  const anchors = footer[0].match(/<a\s[^>]*href=(?:"[^"]*"|'[^']*')[^>]*>/gi) ?? []
  const over = anchors.length > MAX_FOOTER_LINKS
  if (over) failed = true
  console.log(f + ': ' + anchors.length + ' rendered footer links (limit ' + MAX_FOOTER_LINKS + ')' + (over ? ' -- OVER LIMIT' : ''))
  for (const a of anchors.slice(0, 40)) {
    const m = a.match(/href=(?:"([^"]*)"|'([^']*)')/i)
    console.log('  ' + (m ? (m[1] ?? m[2]) : '(no href)'))
  }
}
process.exit(failed ? 1 : 0)
