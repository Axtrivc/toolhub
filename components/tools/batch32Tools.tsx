'use client'

import { useMemo, useState } from 'react'
import { CalculatorNote, ResultCard } from '../calculator/CalculatorField'
import { ResultActions } from '../ResultActions'
import { CopyButton } from '@/components/CopyButton'
import { useApp } from '@/components/providers/AppProviders'
import { makeTextTool } from './makeTextTool'
import { tuiFromEntry } from '@/lib/i18n/tool-l10n-core'
import { getCalculatorSample } from '@/lib/tool-samples'

import { UtmLinkBuilderL10n } from '@/lib/i18n/tools-l10n/utm-link-builder'
import { CreditCardValidatorL10n } from '@/lib/i18n/tools-l10n/credit-card-validator'
import { IbanValidatorL10n } from '@/lib/i18n/tools-l10n/iban-validator'
import { GraphqlFormatterL10n } from '@/lib/i18n/tools-l10n/graphql-formatter'
import { HttpStatusCodeLookupL10n } from '@/lib/i18n/tools-l10n/http-status-code-lookup'
import { CssMinifierL10n } from '@/lib/i18n/tools-l10n/css-minifier'
import { CsvToSqlConverterL10n } from '@/lib/i18n/tools-l10n/csv-to-sql-converter'
import { Rot13ConverterL10n } from '@/lib/i18n/tools-l10n/rot13-converter'

/**
 * 第三十二批(B12 开发者数据工具,2026-10)
 * UTM builder / credit card / IBAN / GraphQL formatter / HTTP status lookup
 * CSS minifier / CSV→SQL / ROT13
 *
 * 本地化:compute/transform 内与自定义组件的提示串直接 import 各 tools-l10n 词典
 * + tuiFromEntry(与 per-file accessor 查表行为一致),不生成 batch accessor。
 */

const selVars = { borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }
const txtVars = { borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }
const outVars = { borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text))' }

// ─────────────────────────── UTM Link Builder ───────────────────────────

const UTM_SOURCE_SUGGESTIONS = ['google', 'facebook', 'instagram', 'linkedin', 'twitter', 'newsletter', 'youtube', 'reddit', 'tiktok', 'partner']
const UTM_MEDIUM_SUGGESTIONS = ['cpc', 'ppc', 'paid-social', 'email', 'social', 'organic', 'referral', 'display', 'affiliate', 'video']
const UTM_CAMPAIGN_SUGGESTIONS = ['spring-sale', 'black-friday', 'product-launch', 'webinar-2026', 'newsletter-2026-10', 'retargeting']
const UTM_CONTENT_SUGGESTIONS = ['banner-top', 'sidebar', 'footer-cta', 'hero-button', 'text-link', 'variant-b']

export function UtmLinkBuilderClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tuiFromEntry(UtmLinkBuilderL10n, locale, key, fb)
  const sample = getCalculatorSample('utm-link-builder')
  const [url, setUrl] = useState(sample?.url ?? 'https://example.com/pricing')
  const [source, setSource] = useState(sample?.source ?? 'newsletter')
  const [medium, setMedium] = useState(sample?.medium ?? 'email')
  const [campaign, setCampaign] = useState(sample?.campaign ?? 'october-2026-launch')
  const [term, setTerm] = useState(sample?.term ?? '')
  const [content, setContent] = useState(sample?.content ?? 'footer-cta')

  const result = useMemo(() => {
    const raw = url.trim()
    if (!raw) return { link: '', error: L('errEmpty', 'Enter a base URL first.'), hints: [] as string[] }
    // 无协议时按浏览器地址栏惯例补 https:// 再解析
    const candidate = /^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(raw) ? raw : `https://${raw}`
    let u: URL
    try {
      u = new URL(candidate)
    } catch {
      return { link: '', error: `⚠️ ${L('errUrl', 'That does not parse as a URL. Example: https://example.com/pricing')}`, hints: [] }
    }
    if (u.protocol !== 'http:' && u.protocol !== 'https:') {
      return { link: '', error: `⚠️ ${L('errProto', 'Only http:// and https:// base URLs are supported — got')} ${u.protocol}//`, hints: [] }
    }
    const pairs: Array<[string, string]> = [
      ['utm_source', source.trim()],
      ['utm_medium', medium.trim()],
      ['utm_campaign', campaign.trim()],
      ['utm_term', term.trim()],
      ['utm_content', content.trim()],
    ]
    for (const [k] of pairs) u.searchParams.delete(k)
    for (const [k, v] of pairs) if (v) u.searchParams.set(k, v)

    const hints: string[] = []
    if (!source.trim() || !medium.trim()) hints.push(L('hintRequired', 'utm_source and utm_medium are required — without both, GA4 drops the session into "direct / none" attribution.'))
    const hasUpper = [source, medium, campaign, term, content].some((v) => v.trim() !== v.trim().toLowerCase())
    if (hasUpper) hints.push(L('hintCase', 'Values are case-sensitive: "Email" and "email" become two different rows in reports. Lowercase is the convention.'))
    return { link: u.toString(), error: '', hints }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, source, medium, campaign, term, content, locale])

  const fields: Array<{ key: string; label: string; value: string; set: (v: string) => void; list?: string[]; ph: string }> = [
    { key: 'utm_source', label: 'utm_source', value: source, set: setSource, list: UTM_SOURCE_SUGGESTIONS, ph: 'newsletter' },
    { key: 'utm_medium', label: 'utm_medium', value: medium, set: setMedium, list: UTM_MEDIUM_SUGGESTIONS, ph: 'email' },
    { key: 'utm_campaign', label: 'utm_campaign', value: campaign, set: setCampaign, list: UTM_CAMPAIGN_SUGGESTIONS, ph: 'october-2026-launch' },
    { key: 'utm_term', label: 'utm_term (optional)', value: term, set: setTerm, ph: 'running+shoes' },
    { key: 'utm_content', label: 'utm_content (optional)', value: content, set: setContent, list: UTM_CONTENT_SUGGESTIONS, ph: 'footer-cta' },
  ]

  return (
    <div className="space-y-5">
      <div>
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          <label htmlFor="utm-url" className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('urlLabel', 'Base URL')}</label>
          {sample && (
            <button type="button" onClick={() => { setUrl(sample.url); setSource(sample.source); setMedium(sample.medium); setCampaign(sample.campaign); setTerm(sample.term ?? ''); setContent(sample.content ?? '') }} className="btn btn-secondary px-3 py-1.5 text-xs">
              {L('loadSample', 'Load Sample')}
            </button>
          )}
        </div>
        <input
          id="utm-url" type="text" value={url} onChange={(e) => setUrl(e.target.value)} spellCheck={false}
          placeholder="https://example.com/pricing"
          className="w-full rounded-lg border p-3 font-mono text-sm shadow-sm outline-none transition focus:ring-2"
          style={txtVars}
        />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.key}>
            <label htmlFor={`utm-${f.key}`} className="mb-1 block text-xs font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{f.label}</label>
            <input
              id={`utm-${f.key}`} type="text" value={f.value} onChange={(e) => f.set(e.target.value)} spellCheck={false} list={f.list ? `dl-${f.key}` : undefined} placeholder={f.ph}
              className="w-full rounded-lg border p-2.5 font-mono text-sm outline-none transition focus:ring-2"
              style={txtVars}
            />
            {f.list && (
              <datalist id={`dl-${f.key}`}>
                {f.list.map((v) => <option key={v} value={v} />)}
              </datalist>
            )}
          </div>
        ))}
      </div>

      {result.error ? (
        <p role="alert" className="rounded-lg border-2 border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-800/60 dark:bg-red-950/30 dark:text-red-300">{result.error}</p>
      ) : (
        <div role="status" aria-live="polite">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('outputLabel', 'Tracked link')}</span>
            <CopyButton value={result.link} disabled={!result.link} />
          </div>
          <pre className="overflow-x-auto rounded-lg border p-4 font-mono text-xs whitespace-pre-wrap" style={outVars}>{result.link}</pre>
        </div>
      )}

      {result.hints.length > 0 && (
        <ul className="space-y-1">
          {result.hints.map((h) => (
            <li key={h} className="rounded-md border border-amber-300/60 bg-amber-50 p-3 text-xs text-amber-800 dark:border-amber-500/30 dark:bg-amber-950/30 dark:text-amber-200">💡 {h}</li>
          ))}
        </ul>
      )}
      <CalculatorNote>{L('note', '🔗 Existing query parameters on the base URL are preserved; utm_* values are URL-encoded, spaces become %20 or + depending on position. Keep a spreadsheet of campaign names — consistent naming is 90% of usable reports.')}</CalculatorNote>
    </div>
  )
}

// ─────────────────────────── Credit Card Validator (Luhn + IIN) ───────────────────────────

interface CardBrand { name: string; test: (d: string) => boolean; lengths: number[] }

const CARD_BRANDS: CardBrand[] = [
  { name: 'Visa', test: (d) => d.startsWith('4'), lengths: [13, 16, 18, 19] },
  { name: 'Mastercard', test: (d) => /^(5[1-5]|222[1-9]|22[3-9]\d|2[3-6]\d\d|27[01]\d|2720)/.test(d), lengths: [16] },
  { name: 'American Express', test: (d) => /^3[47]/.test(d), lengths: [15] },
  { name: 'Discover', test: (d) => /^(6011|64[4-9]|65|622(12[6-9]|1[3-9]\d|[2-8]\d\d|9[01]\d|92[0-5]))/.test(d), lengths: [16, 17, 18, 19] },
  { name: 'JCB', test: (d) => /^(352[89]|35[3-8]\d)/.test(d), lengths: [16, 17, 18, 19] },
  { name: 'Diners Club', test: (d) => /^3(0[0-5]|09[5-9]|6|8|9)/.test(d), lengths: [14, 16, 17, 18, 19] },
  { name: 'UnionPay', test: (d) => /^62/.test(d), lengths: [16, 17, 18, 19] },
]

function luhnCheck(digits: string): boolean {
  let sum = 0
  let double = false
  for (let i = digits.length - 1; i >= 0; i--) {
    let n = digits.charCodeAt(i) - 48
    if (double) { n *= 2; if (n > 9) n -= 9 }
    sum += n
    double = !double
  }
  return sum % 10 === 0
}

function groupCard(digits: string): string {
  if (/^3[47]/.test(digits) && digits.length === 15) {
    return `${digits.slice(0, 4)} ${digits.slice(4, 10)} ${digits.slice(10)}`
  }
  return digits.replace(/(\d{4})(?=\d)/g, '$1 ').trim()
}

function validateCardNumber(input: string): string {
  const cleaned = input.replace(/[\s-]/g, '')
  if (!cleaned) return ''
  if (!/^\d{12,19}$/.test(cleaned)) {
    return `⚠️ Not card-number-shaped: after stripping spaces and dashes it must be 12-19 digits (got ${cleaned.replace(/\D/g, '').length} digit${cleaned.replace(/\D/g, '').length === 1 ? '' : 's'}${cleaned.length > 32 ? ', input too long' : ''}).`
  }
  const brand = CARD_BRANDS.find((b) => b.test(cleaned))
  const luhnOk = luhnCheck(cleaned)
  const lines = [
    `Formatted:  ${groupCard(cleaned)}`,
    `Brand:      ${brand ? brand.name : 'Unrecognized IIN range (card is valid elsewhere in the world — only Visa/MC/Amex/Discover/JCB/Diners/UnionPay prefixes are cataloged)'}`,
    `Length:     ${cleaned.length} digits${brand ? ` (${brand.name} expects ${brand.lengths.join(' or ')})` : ''}`,
    `Luhn:       ${luhnOk ? 'checksum PASS ✓' : 'checksum FAIL ✗'}`,
  ]
  if (brand && brand.lengths.includes(cleaned.length) && luhnOk) {
    lines.push('', `✅ Structurally valid ${brand.name} number — well-formed, not proof the account exists.`)
  } else if (brand && !brand.lengths.includes(cleaned.length)) {
    lines.push('', `❌ Prefix says ${brand.name} but the length is wrong for that brand (expected ${brand.lengths.join(' or ')}).`)
  } else if (!luhnOk) {
    lines.push('', '❌ Luhn checksum does not total to a multiple of 10 — a digit is missing, extra, or mistyped.')
  } else {
    lines.push('', `✅ Passes Luhn with a plausible length, but the prefix is not in the cataloged IIN ranges.`)
  }
  return lines.join('\n')
}

export const CreditCardValidatorClient = makeTextTool({
  slug: 'credit-card-validator',
  l10n: CreditCardValidatorL10n,
  inputLabel: 'Card number',
  outputLabel: 'Validation result',
  defaultInput: '4111 1111 1111 1111',
  maxInputChars: 2000,
  showStats: false,
  transform: (t) => validateCardNumber(t),
  note: '🔒 Format check only: Luhn checksum plus brand prefix/length rules, computed entirely in your browser. "Valid" means well-formed — it says nothing about whether the account exists, and nothing is ever sent anywhere.',
})

// ─────────────────────────── IBAN Validator (mod-97) ───────────────────────────

/** 官方 IBAN 注册表:国家代码 → [英文国名, 总长度] */
const IBAN_REGISTRY: Record<string, [string, number]> = {
  AL: ['Albania', 28], AD: ['Andorra', 24], AT: ['Austria', 20], AZ: ['Azerbaijan', 28], BH: ['Bahrain', 22],
  BY: ['Belarus', 28], BE: ['Belgium', 16], BA: ['Bosnia and Herzegovina', 20], BR: ['Brazil', 29], BG: ['Bulgaria', 22],
  CR: ['Costa Rica', 22], HR: ['Croatia', 21], CY: ['Cyprus', 28], CZ: ['Czech Republic', 24], DK: ['Denmark', 18],
  DO: ['Dominican Republic', 28], EG: ['Egypt', 29], SV: ['El Salvador', 28], EE: ['Estonia', 20], FO: ['Faroe Islands', 18],
  FI: ['Finland', 18], FR: ['France', 27], GE: ['Georgia', 22], DE: ['Germany', 22], GI: ['Gibraltar', 23],
  GR: ['Greece', 27], GL: ['Greenland', 18], GT: ['Guatemala', 28], HN: ['Honduras', 28], HU: ['Hungary', 28],
  IS: ['Iceland', 26], IQ: ['Iraq', 23], IE: ['Ireland', 22], IL: ['Israel', 23], IT: ['Italy', 27],
  JO: ['Jordan', 30], KZ: ['Kazakhstan', 20], XK: ['Kosovo', 20], KW: ['Kuwait', 30], LV: ['Latvia', 21],
  LB: ['Lebanon', 28], LI: ['Liechtenstein', 21], LT: ['Lithuania', 20], LU: ['Luxembourg', 20], MT: ['Malta', 31],
  MR: ['Mauritania', 27], MU: ['Mauritius', 30], MC: ['Monaco', 27], MD: ['Moldova', 24], ME: ['Montenegro', 22],
  NL: ['Netherlands', 18], MK: ['North Macedonia', 19], NO: ['Norway', 15], PK: ['Pakistan', 24], PS: ['Palestine', 29],
  PL: ['Poland', 28], PT: ['Portugal', 25], QA: ['Qatar', 29], RO: ['Romania', 24], SM: ['San Marino', 27],
  SA: ['Saudi Arabia', 24], RS: ['Serbia', 22], SC: ['Seychelles', 31], SK: ['Slovakia', 24], SI: ['Slovenia', 19],
  ES: ['Spain', 24], SE: ['Sweden', 24], CH: ['Switzerland', 21], TN: ['Tunisia', 24], TR: ['Turkey', 26],
  AE: ['United Arab Emirates', 23], GB: ['United Kingdom', 22], VA: ['Vatican City', 22],
}

function validateIban(input: string): string {
  const cleaned = input.toUpperCase().replace(/[\s-]/g, '')
  if (!cleaned) return ''
  if (!/^[A-Z]{2}\d{2}[A-Z0-9]+$/.test(cleaned)) {
    return `⚠️ Not IBAN-shaped: expecting 2 country letters + 2 check digits + BBAN (got "${cleaned.slice(0, 24)}${cleaned.length > 24 ? '…' : ''}", ${cleaned.length} characters).`
  }
  const cc = cleaned.slice(0, 2)
  const checkDigits = cleaned.slice(2, 4)
  const entry = IBAN_REGISTRY[cc]
  const lines = [`Formatted:  ${cleaned.replace(/(.{4})(?=.)/g, '$1 ').trim()}`, `Country:    ${entry ? `${cc} — ${entry[0]}` : `${cc} (not in the IBAN registry this tool catalogs)`}`]
  if (!entry) {
    lines.push('', `⚠️ Length and checksum cannot be verified without a registry entry for ${cc}.`)
    return lines.join('\n')
  }
  lines.push(`Length:     ${cleaned.length} of ${entry[1]} characters${cleaned.length === entry[1] ? ' ✓' : ''}`)
  if (cleaned.length !== entry[1]) {
    lines.push('', `❌ Wrong length for ${cc}: IBANs from ${entry[0]} are exactly ${entry[1]} characters (this one is ${cleaned.length}).`)
    return lines.join('\n')
  }
  if (checkDigits === '00' || checkDigits === '01' || checkDigits === '99') {
    lines.push('', `❌ Check digits ${checkDigits} are reserved-invalid under ISO 13616 (valid range is 02-98).`)
    return lines.join('\n')
  }
  // ISO 7064 MOD 97-10:把前 4 位挪到末尾,字母转数字(A=10…Z=35),整串 mod 97 应为 1
  const rearranged = cleaned.slice(4) + cleaned.slice(0, 4)
  let rem = 0
  for (const ch of rearranged) {
    const n = ch >= '0' && ch <= '9' ? ch.charCodeAt(0) - 48 : ch.charCodeAt(0) - 55
    rem = (rem * (n > 9 ? 100 : 10) + n) % 97
  }
  lines.push(`mod-97:      remainder ${rem}${rem === 1 ? ' ✓' : ''}`)
  if (rem === 1) {
    lines.push('', `✅ Valid ${entry[0]} IBAN — country length matches and the ISO 7064 checksum passes. Checksum validity does not prove the account exists.`)
  } else {
    lines.push('', `❌ Checksum fails: remainder is ${rem}, must be exactly 1. A character is wrong, dropped, or extra.`)
  }
  return lines.join('\n')
}

export const IbanValidatorClient = makeTextTool({
  slug: 'iban-validator',
  l10n: IbanValidatorL10n,
  inputLabel: 'IBAN',
  outputLabel: 'Validation result',
  defaultInput: 'GB82 WEST 1234 5698 7654 32',
  maxInputChars: 2000,
  showStats: false,
  transform: (t) => validateIban(t),
  note: '🏦 Checks structure only: country length from the official IBAN registry plus the ISO 7064 mod-97 checksum, in your browser. A passing checksum means the IBAN is well-formed — it cannot confirm the account exists or accepts payments.',
})

// ─────────────────────────── GraphQL Formatter ───────────────────────────

type GqlTok =
  | { t: 'name' | 'num' | 'str' | 'cmt'; v: string }
  | { t: 'punct'; v: string }

function lexGql(src: string): GqlTok[] {
  const toks: GqlTok[] = []
  const n = src.length
  let i = 0
  while (i < n) {
    const c = src[i]
    if (/\s/.test(c) || c === ',') { i++; continue }
    if (c === '#') {
      const nl = src.indexOf('\n', i)
      const stop = nl === -1 ? n : nl
      toks.push({ t: 'cmt', v: src.slice(i + 1, stop).trimEnd() })
      i = stop
      continue
    }
    if (c === '"') {
      if (src.slice(i, i + 3) === '"""') {
        let j = i + 3
        while (j < n) {
          if (src[j] === '\\' && src[j + 1] === '"') { j += 2; continue }
          if (src.slice(j, j + 3) === '"""') break
          j++
        }
        if (j >= n) throw new Error(`Unterminated block string (""" … ) starting at offset ${i}`)
        toks.push({ t: 'str', v: src.slice(i, j + 3) })
        i = j + 3
        continue
      }
      let j = i + 1
      while (j < n && src[j] !== '"' && src[j] !== '\n') {
        if (src[j] === '\\') j++
        j++
      }
      if (j >= n || src[j] === '\n') throw new Error(`Unterminated string starting at offset ${i}`)
      toks.push({ t: 'str', v: src.slice(i, j + 1) })
      i = j + 1
      continue
    }
    if (src.slice(i, i + 3) === '...') { toks.push({ t: 'punct', v: '...' }); i += 3; continue }
    if (c === '$' || c === '@') {
      const m = /^[_A-Za-z][_0-9A-Za-z]*/.exec(src.slice(i + 1))
      if (!m) throw new Error(`Expected a name after "${c}" at offset ${i}`)
      toks.push({ t: 'name', v: c + m[0] })
      i += 1 + m[0].length
      continue
    }
    if ('{}()[]=|&!:'.includes(c)) { toks.push({ t: 'punct', v: c }); i++; continue }
    if (c === '-' || (c >= '0' && c <= '9')) {
      const m = /^-?(?:\d+(?:\.\d+)?(?:[eE][+-]?\d+)?|\.\d+(?:[eE][+-]?\d+)?)/.exec(src.slice(i))
      if (!m || !/\d/.test(m[0])) throw new Error(`Unexpected character "${c}" at offset ${i}`)
      toks.push({ t: 'num', v: m[0] })
      i += m[0].length
      continue
    }
    const m = /^[_A-Za-z][_0-9A-Za-z]*/.exec(src.slice(i))
    if (m) { toks.push({ t: 'name', v: m[0] }); i += m[0].length; continue }
    throw new Error(`Unexpected character "${c}" at offset ${i}`)
  }
  return toks
}

function checkGqlBalance(toks: GqlTok[]): void {
  const stack: string[] = []
  const pairs: Record<string, string> = { '}': '{', ')': '(', ']': '[' }
  for (const tok of toks) {
    if (tok.t !== 'punct') continue
    if (tok.v === '{' || tok.v === '(' || tok.v === '[') stack.push(tok.v)
    else if (tok.v in pairs) {
      if (stack.pop() !== pairs[tok.v]) throw new Error(`Unbalanced "${tok.v}" — it closes nothing`)
    }
  }
  if (stack.length) throw new Error(`Unclosed "${stack[stack.length - 1]}" — the document ends before it is closed`)
}

/** 该 token 是否结束一个完整值(字段/参数/字面量),用于识别「新字段开始」与「参数边界」 */
function isGqlEnder(tok: GqlTok | null): boolean {
  if (!tok || tok.t === 'cmt') return false
  if (tok.t === 'punct') return tok.v === ')' || tok.v === ']' || tok.v === '}' || tok.v === '!'
  return true // name / num / str
}

function formatGql(toks: GqlTok[], indentWidth: number): string {
  checkGqlBalance(toks)
  const pad = (d: number) => ' '.repeat(d * indentWidth)
  let out = ''
  let line = ''
  let blockDepth = 0
  let inline = 0 // ( ) [ ] 以及括号内的输入对象 {}
  const braceStack: boolean[] = [] // true = 块级 {}
  let prev: GqlTok | null = null
  const flush = () => {
    if (line.trim()) out += `${out ? '\n' : ''}${pad(blockDepth)}${line.trim()}`
    line = ''
  }
  for (const tok of toks) {
    if (tok.t === 'cmt') {
      flush()
      out += `${out ? '\n' : ''}${pad(blockDepth)}#${tok.v}`
      prev = tok
      continue
    }
    if (tok.t === 'punct' && tok.v === '{') {
      const isBlock = inline === 0
      braceStack.push(isBlock)
      if (isBlock) {
        line += `${line.trim() ? ' ' : ''}{`
        flush()
        blockDepth++
      } else {
        line += ' {'
        inline++
      }
      prev = tok
      continue
    }
    if (tok.t === 'punct' && tok.v === '}') {
      const isBlock = braceStack.pop() ?? false
      if (isBlock) {
        flush()
        blockDepth--
        out += `${out ? '\n' : ''}${pad(blockDepth)}}`
        if (blockDepth === 0 && inline === 0) out += '\n'
      } else {
        inline--
        line += '}'
      }
      prev = tok
      continue
    }
    if (tok.t === 'punct' && (tok.v === '(' || tok.v === '[')) { inline++; line += tok.v; prev = tok; continue }
    if (tok.t === 'punct' && (tok.v === ')' || tok.v === ']')) { inline = Math.max(0, inline - 1); line += tok.v; prev = tok; continue }

    const v = tok.v
    const plainName = tok.t === 'name' && !v.startsWith('@')
    // 块内新字段/新 spread:上一 token 是完整值 → 起新行(alias 的 name 跟在 ':' 后,不受影响)
    const startsField = (plainName || (tok.t === 'punct' && v === '...'))
      && inline === 0 && blockDepth >= 1
      && isGqlEnder(prev)
      && !(prev && prev.t === 'name' && prev.v === 'on')
    // 顶层 SDL 描述字符串独占一行:"Root description" ↵ type Query {
    const descBreak = plainName && inline === 0 && blockDepth === 0 && prev?.t === 'str'
    if (startsField || descBreak) flush()
    // 括号/输入对象内:参数之间补逗号(GraphQL 里逗号是纯装饰,但这是通行排版)
    if (inline > 0 && plainName && isGqlEnder(prev) && !(prev && prev.t === 'name' && prev.v === 'on')) line += ','

    const last = line.slice(-1)
    let space: boolean
    if (!line) space = false
    else if (v === ':' || v === '!' || v === ')' || v === ']' || v === '(') space = false
    else if (last === '(' || last === '[') space = false
    else if (last === ':') space = true // first: 3 / (id: $id)
    else if (last === ',') space = true // (a: 1, b: 2)
    else if (inline > 0 && last === '{') space = false // {field: X} 输入对象首成员紧凑
    else if (prev && prev.t === 'punct' && prev.v === '...') space = !(tok.t === 'name' && v !== 'on')
    else space = true
    line += `${space ? ' ' : ''}${v}`
    prev = tok
  }
  flush()
  return out.trim()
}

function minifyGql(toks: GqlTok[]): string {
  checkGqlBalance(toks)
  let out = ''
  let prev: GqlTok | null = null
  let parenDepth = 0
  for (const tok of toks) {
    if (tok.t === 'cmt') continue
    const v = tok.v
    if (tok.t === 'punct' && (v === '(' || v === '[')) parenDepth++
    // 括号内参数边界补逗号:防止 ID!$b 这类视觉粘连(逗号本身是合法装饰)
    const comma = parenDepth > 0
      && (tok.t === 'name' || tok.t === 'num' || tok.t === 'str')
      && !(tok.t === 'name' && v.startsWith('@'))
      && isGqlEnder(prev)
    if (comma) out += ','
    if (!prev) {
      out += v
    } else {
      const space = !comma && ((tok.t !== 'punct' && prev.t !== 'punct')
        || (prev.t === 'punct' && prev.v === '...' && tok.t === 'name' && v === 'on'))
      out += `${space ? ' ' : ''}${v}`
    }
    if (tok.t === 'punct' && (v === ')' || v === ']')) parenDepth = Math.max(0, parenDepth - 1)
    prev = tok
  }
  return out
}

const DEFAULT_GQL = `# Fetch one user with their 3 latest posts
query UserProfile($id: ID!, $withPosts: Boolean! = true) {
  user(id: $id) {
    id name
    email
    posts(first: 3, orderBy: {field: CREATED_AT, direction: DESC}) @include(if: $withPosts) {
      edges { node { title publishedAt } }
      totalCount
    }
    ...UserAvatar
  }
}

fragment UserAvatar on User { avatarUrl(size: 96) }`

export function GraphqlFormatterClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tuiFromEntry(GraphqlFormatterL10n, locale, key, fb)
  const sample = getCalculatorSample('graphql-formatter')
  const [gql, setGql] = useState(sample?.gql ?? DEFAULT_GQL)
  const [indent, setIndent] = useState(2)
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')

  const run = (mode: 'format' | 'minify') => {
    setError('')
    try {
      if (gql.length > 100_000) throw new Error(L('tooLarge', 'Input is too large — the supported size is up to 100,000 characters.'))
      const toks = lexGql(gql)
      setOutput(mode === 'minify' ? minifyGql(toks) : formatGql(toks, indent))
    } catch (e) {
      setError((e as Error).message)
      setOutput('')
    }
  }

  return (
    <div className="space-y-5">
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="gql-in" className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('inputLabel', 'Your GraphQL')}</label>
          {sample && <button type="button" onClick={() => setGql(sample.gql)} className="btn btn-secondary px-3 py-1.5 text-xs">{L('loadSample', 'Load Sample')}</button>}
        </div>
        <textarea id="gql-in" value={gql} onChange={(e) => setGql(e.target.value)} rows={10} spellCheck={false}
          placeholder={'query { hero { name friends { name } } }'}
          className="w-full rounded-lg border p-4 font-mono text-sm outline-none transition focus:ring-2"
          style={txtVars} />
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <button type="button" onClick={() => run('format')} disabled={!gql.trim()} className="btn btn-primary">{L('beautify', 'Beautify')}</button>
        <button type="button" onClick={() => run('minify')} disabled={!gql.trim()} className="btn btn-secondary">{L('minify', 'Minify')}</button>
        <label className="flex items-center gap-2 text-sm" style={{ color: 'rgb(var(--text-muted))' }}>
          {L('indentLabel', 'Indent')}
          <select value={indent} onChange={(e) => setIndent(Number(e.target.value))} aria-label={L('indentLabel', 'Indent')} className="rounded border px-2 py-1" style={selVars}>
            {[2, 4].map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
        </label>
      </div>
      {error && (
        <p role="alert" className="rounded-lg border-2 border-red-200 bg-red-50 p-4 font-mono text-sm text-red-700 dark:border-red-800/60 dark:bg-red-950/30 dark:text-red-300">⚠️ {L('errPrefix', 'Cannot format — input is incomplete or invalid:')} {error}</p>
      )}
      {output && (
        <div role="status" aria-live="polite">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('outputLabel', 'Result')}</span>
            <CopyButton value={output} />
          </div>
          <pre className="overflow-x-auto rounded-lg border p-4 font-mono text-xs whitespace-pre-wrap" style={outVars}>{output}</pre>
        </div>
      )}
      <ResultActions summary={output} filename="query.graphql" downloadContent={output} mime="application/graphql;charset=utf-8;" disabled={!output} />
      <CalculatorNote>{L('note', '⚡ A real tokenizer — not regex line hacks: strings, block strings, # comments, directives, variables and fragments round-trip safely. Comments are kept when beautifying and dropped when minifying; commas are insignificant in GraphQL and normalized away.')}</CalculatorNote>
    </div>
  )
}

// ─────────────────────────── HTTP Status Code Lookup ───────────────────────────

interface StatusRow { code: number; name: string; cause: string; tip: string }

const HTTP_STATUS_DB: StatusRow[] = [
  { code: 100, name: 'Continue', cause: 'Client sent Expect: 100-continue; the server invites the request body.', tip: 'Interim only — the real status arrives after the body.' },
  { code: 101, name: 'Switching Protocols', cause: 'Upgrade header negotiated a protocol switch (HTTP → WebSockets).', tip: 'Check the Upgrade and Connection response headers.' },
  { code: 102, name: 'Processing', cause: 'WebDAV: request received and in progress, but slow.', tip: 'Wait — a final status follows; do not retry yet.' },
  { code: 103, name: 'Early Hints', cause: 'Server sends hint headers (e.g. Link: preload) before the final response.', tip: 'Use it to warm preloads while the app builds the page.' },
  { code: 200, name: 'OK', cause: 'The request succeeded and the body carries the result.', tip: 'Not a freshness promise — read Cache-Control before caching.' },
  { code: 201, name: 'Created', cause: 'POST or PUT created a resource; Location points at it.', tip: 'Follow Location to fetch the new resource URL.' },
  { code: 202, name: 'Accepted', cause: 'Queued for async processing; not finished yet.', tip: 'Poll a status endpoint or subscribe to a webhook.' },
  { code: 203, name: 'Non-Authoritative Information', cause: 'A proxy returned a transformed copy, not the origin\'s exact payload.', tip: 'Treat metadata (headers) as possibly stale.' },
  { code: 204, name: 'No Content', cause: 'Success with an intentionally empty body (DELETE, PUT).', tip: '204 must have no body — use 200 with a body if you need one.' },
  { code: 205, name: 'Reset Content', cause: 'Success; the client should reset the form that sent the request.', tip: 'Rare today; mostly legacy form flows.' },
  { code: 206, name: 'Partial Content', cause: 'A Range request was satisfied; Content-Range describes the slice.', tip: 'Resume downloads with Range + If-Range validators.' },
  { code: 300, name: 'Multiple Choices', cause: 'The resource has several representations and the server lists them.', tip: 'Rare — servers usually pick via content negotiation.' },
  { code: 301, name: 'Moved Permanently', cause: 'The URL changed for good; search engines transfer link equity.', tip: 'Update sitemaps and bookmarks; keep the redirect indefinitely.' },
  { code: 302, name: 'Found', cause: 'Temporary redirect; historic behavior may switch POST to GET.', tip: 'Need the method preserved? Use 307 instead.' },
  { code: 303, name: 'See Other', cause: 'Redirect to a different URL with GET (Post/Redirect/Get pattern).', tip: 'The classic PRG partner after a form POST.' },
  { code: 304, name: 'Not Modified', cause: 'Conditional headers (If-None-Match) matched the ETag — cache still fresh.', tip: 'No body by design; this is a full-download avoided.' },
  { code: 305, name: 'Use Proxy', cause: 'Obsolete security risk; modern clients ignore it.', tip: 'Do not implement — listed for completeness.' },
  { code: 307, name: 'Temporary Redirect', cause: 'Like 302 but the method and body are preserved.', tip: 'The correct way to redirect a POST temporarily.' },
  { code: 308, name: 'Permanent Redirect', cause: 'Like 301 but the method and body are preserved.', tip: 'Prefer over 301 for permanent non-GET redirects.' },
  { code: 400, name: 'Bad Request', cause: 'Malformed syntax the server refuses to process.', tip: 'Log the exact body you sent; validate client-side too.' },
  { code: 401, name: 'Unauthorized', cause: 'Really means unauthenticated: missing or invalid credentials.', tip: 'Check WWW-Authenticate; refresh the token, then retry.' },
  { code: 402, name: 'Payment Required', cause: 'Reserved since 1997; de facto "paid plan required" in commercial APIs.', tip: 'Expect it behind API paywalls, not from browsers.' },
  { code: 403, name: 'Forbidden', cause: 'The server knows who you are and still refuses (permissions, IP rules).', tip: 'Unlike 401, re-authenticating will not necessarily fix it.' },
  { code: 404, name: 'Not Found', cause: 'No resource at this URI — or it exists and is hidden deliberately.', tip: 'Check casing, trailing slashes, and auth masking.' },
  { code: 405, name: 'Method Not Allowed', cause: 'The URI exists but not for that verb (e.g. POST to a GET-only route).', tip: 'The Allow header lists supported methods.' },
  { code: 406, name: 'Not Acceptable', cause: 'No representation matches your Accept headers.', tip: 'Content negotiation failed — loosen the Accept value.' },
  { code: 407, name: 'Proxy Authentication Required', cause: 'A proxy in front of the origin demands credentials.', tip: 'Send Proxy-Authorization, not Authorization.' },
  { code: 408, name: 'Request Timeout', cause: 'The client took too long to finish sending the request.', tip: 'Usually flaky networks; safe to retry idempotent calls.' },
  { code: 409, name: 'Conflict', cause: 'State clash: duplicate key, stale version, edit collision.', tip: 'Read the body — it usually names the conflicting field.' },
  { code: 410, name: 'Gone', cause: 'Deliberately removed; stronger than 404 — do not ask again.', tip: 'SEO signal to delist the URL for good.' },
  { code: 411, name: 'Length Required', cause: 'Server demands Content-Length and refuses chunked framing.', tip: 'Send Content-Length, or fix your chunked encoding.' },
  { code: 412, name: 'Precondition Failed', cause: 'An If-Match / If-Unmodified-Match guard rejected the write.', tip: 'Optimistic concurrency — refetch, merge, retry.' },
  { code: 413, name: 'Content Too Large', cause: 'Request body exceeds the server\'s size limit.', tip: 'Raise the server limit or upload in parts.' },
  { code: 414, name: 'URI Too Long', cause: 'The address exceeds what the server will parse.', tip: 'Move oversized query data into a POST body.' },
  { code: 415, name: 'Unsupported Media Type', cause: 'The body format (Content-Type) is not supported here.', tip: 'JSON APIs: send application/json with a charset.' },
  { code: 416, name: 'Range Not Satisfiable', cause: 'The Range asks for bytes outside the resource size.', tip: 'Compare Content-Length with your offsets.' },
  { code: 417, name: 'Expectation Failed', cause: 'An Expect header cannot be met.', tip: 'Usually Expect: 100-continue stripped by a proxy.' },
  { code: 418, name: "I'm a teapot", cause: 'RFC 2324 April Fools joke; a few servers answer it for real.', tip: 'Easter egg — never build on it.' },
  { code: 421, name: 'Misdirected Request', cause: 'This connection cannot serve that Host (SNI / HTTP-2 routing).', tip: 'Retry on a fresh connection to the right host.' },
  { code: 422, name: 'Unprocessable Content', cause: 'Syntactically valid but semantically invalid (validation failure).', tip: 'The validation workhorse of JSON:API and Rails apps.' },
  { code: 423, name: 'Locked', cause: 'WebDAV: the resource is locked by someone else.', tip: 'Check the lock token before retrying.' },
  { code: 424, name: 'Failed Dependency', cause: 'WebDAV: an earlier request in the batch failed, so this one aborted.', tip: 'Fix the dependency, not this request.' },
  { code: 425, name: 'Too Early', cause: 'Server refuses possibly-replayed data (TLS 1.3 early data).', tip: 'Retry after the handshake finalizes.' },
  { code: 426, name: 'Upgrade Required', cause: 'The client must switch protocols (typically to TLS).', tip: 'Read the Upgrade header and comply.' },
  { code: 428, name: 'Precondition Required', cause: 'The server demands conditional requests to avoid lost updates.', tip: 'Send If-Match on writes to state-changing endpoints.' },
  { code: 429, name: 'Too Many Requests', cause: 'Rate limit or quota exceeded.', tip: 'Honor Retry-After; back off exponentially with jitter.' },
  { code: 431, name: 'Request Header Fields Too Large', cause: 'Headers exceed the limit — oversized cookies are the usual culprit.', tip: 'Clear cookies; shrink JWTs and custom headers.' },
  { code: 451, name: 'Unavailable For Legal Reasons', cause: 'Blocked by a legal demand: geo-blocks, court orders, DMCA.', tip: 'The body or Link header usually cites the policy.' },
  { code: 500, name: 'Internal Server Error', cause: 'Unhandled server exception — the generic "we broke it".', tip: 'Correlate server logs with the request timestamp.' },
  { code: 501, name: 'Not Implemented', cause: 'The server does not support that method or feature at all.', tip: 'Not transient — you need a different approach.' },
  { code: 502, name: 'Bad Gateway', cause: 'An upstream returned garbage to the gateway or proxy.', tip: 'The fault sits between proxy and origin; retry later.' },
  { code: 503, name: 'Service Unavailable', cause: 'Overloaded, or down for maintenance.', tip: 'Honor Retry-After; shed load, do not hammer.' },
  { code: 504, name: 'Gateway Timeout', cause: 'The upstream did not answer within the timeout.', tip: 'Unlike 502: nothing came back at all.' },
  { code: 505, name: 'HTTP Version Not Supported', cause: 'The server refuses this protocol version.', tip: 'Retry with HTTP/1.1.' },
  { code: 506, name: 'Variant Also Negotiates', cause: 'Transparent content negotiation is misconfigured.', tip: 'Server config error; extremely rare.' },
  { code: 507, name: 'Insufficient Storage', cause: 'WebDAV: the server cannot store the resource (disk full).', tip: 'Server-side capacity issue — not your payload.' },
  { code: 508, name: 'Loop Detected', cause: 'WebDAV: the operation hit an infinite loop.', tip: 'Look for redirect or binding cycles.' },
  { code: 510, name: 'Not Extended', cause: 'A required extension policy was not met.', tip: 'Experimental and near-extinct; see RFC 2774.' },
  { code: 511, name: 'Network Authentication Required', cause: 'A captive portal (hotel/airport Wi-Fi) wants a login first.', tip: 'The portal intercepted the request; log in via the body page.' },
]

const STATUS_CLASS: Record<string, string> = {
  '1': 'Informational', '2': 'Success', '3': 'Redirection', '4': 'Client error', '5': 'Server error',
}

export function HttpStatusCodeLookupClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tuiFromEntry(HttpStatusCodeLookupL10n, locale, key, fb)
  const [q, setQ] = useState('')
  const query = q.trim().toLowerCase()

  const results = useMemo(() => {
    if (!query) return HTTP_STATUS_DB
    return HTTP_STATUS_DB.filter((r) =>
      String(r.code).includes(query)
      || r.name.toLowerCase().includes(query)
      || r.cause.toLowerCase().includes(query)
      || r.tip.toLowerCase().includes(query))
  }, [query])

  return (
    <div className="space-y-5">
      <input
        type="search" value={q} onChange={(e) => setQ(e.target.value)}
        placeholder={L('searchPlaceholder', 'Search code (404) or keyword (timeout, redirect)…')}
        aria-label={L('searchPlaceholder', 'Search status code or keyword')}
        className="w-full rounded-lg border p-3 shadow-sm outline-none transition focus:ring-2"
        style={txtVars}
      />
      <p className="text-xs" style={{ color: 'rgb(var(--text-faint))' }}>
        {results.length} / {HTTP_STATUS_DB.length} · {L('coverageNote', 'All 62 IANA-registered status codes')}
      </p>
      <div className="overflow-x-auto rounded-lg border border-border bg-card">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-subtle))' }}>
              <th scope="col" className="px-4 py-2 font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('thCode', 'Code')}</th>
              <th scope="col" className="px-4 py-2 font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('thName', 'Name')}</th>
              <th scope="col" className="px-4 py-2 font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('thClass', 'Class')}</th>
              <th scope="col" className="px-4 py-2 font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('thCause', 'Typical cause')}</th>
              <th scope="col" className="px-4 py-2 font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('thTip', 'Troubleshooting')}</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r) => (
              <tr key={r.code} className="border-b last:border-b-0" style={{ borderColor: 'rgb(var(--border))' }}>
                <td className="px-4 py-2 font-mono text-xs font-bold" style={{ color: r.code < 400 ? '#059669' : r.code < 500 ? '#d97706' : '#dc2626' }}>{r.code}</td>
                <td className="px-4 py-2 font-mono text-xs" style={{ color: 'rgb(var(--text))' }}>{r.name}</td>
                <td className="px-4 py-2 text-xs" style={{ color: 'rgb(var(--text-muted))' }}>{STATUS_CLASS[String(r.code)[0]]}</td>
                <td className="px-4 py-2 text-xs" style={{ color: 'rgb(var(--text))' }}>{r.cause}</td>
                <td className="px-4 py-2 text-xs" style={{ color: 'rgb(var(--text-muted))' }}>{r.tip}</td>
              </tr>
            ))}
            {results.length === 0 && (
              <tr><td colSpan={5} className="px-4 py-4 text-center text-sm" style={{ color: 'rgb(var(--text-faint))' }}>{L('noMatch', 'No matching status codes')}</td></tr>
            )}
          </tbody>
        </table>
      </div>
      <CalculatorNote>{L('note', '🧭 The classic confusions: 401 is "who are you" and 403 is "I know you — no"; 307/308 preserve the method while 301/302 may not; 502 means garbage came back from upstream, 504 means nothing did. Codes outside this table (e.g. Cloudflare 52x or 599) are vendor extensions, not IANA-registered.')}</CalculatorNote>
    </div>
  )
}

// ─────────────────────────── CSS Minifier ───────────────────────────

function minifyCss(css: string): string {
  const kept: string[] = []
  // 先把 /*! 重要注释 */ 与字符串抽成占位符,后续任何空白/注释操作都不会碰到内容
  let s = css
    .replace(/\/\*![\s\S]*?\*\//g, (m) => { kept.push(m); return `\u0001${kept.length - 1}\u0001` })
    .replace(/"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'/g, (m) => { kept.push(m); return `\u0001${kept.length - 1}\u0001` })
  // 去普通注释 → 折叠空白 → 删除安全标点旁的空格
  s = s
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/ *\{ */g, '{')
    .replace(/ *\} */g, '}')
    .replace(/ ?; ?/g, ';')
    .replace(/ ?, ?/g, ',')
    .replace(/: /g, ':')
    .replace(/ ?\)/g, ')')
    .replace(/\( /g, '(')
    .replace(/ ?> ?/g, '>')
  // 注意:故意不动 + 与 - 两侧的空格 —— calc() 语法要求它们存在
  // 末分号、空规则、零值折叠(绝对单位,不含 %,flex-basis 里 0% 与 0 不等价)
  s = s
    .replace(/;}/g, '}')
    .replace(/(^|\})([^{}]*)\{\}/g, '$1')
    .replace(/(^|[: ,(;{])0(?:px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pt|pc|ch|ex)(?=[;}), ]|$)/g, '$10')
    .replace(/(^|[: ,(;{])0\.(?=\d)/g, '$1.')
  // 还原字符串与重要注释
  s = s.replace(/\u0001(\d+)\u0001/g, (_, i) => kept[Number(i)] ?? '')
  return s
}

const DEFAULT_CSS = `/* Base card styles */
.card {
  padding: 0px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  font-family: "Open Sans", sans-serif;
}

.card__title {
  font-size: 1.5rem;
  line-height: 1.2;
  letter-spacing: 0.02em;
}

/*! keep this banner after minify */
@media (max-width: 600px) {
  .card {
    width: calc(100% - 32px);
  }
}`

export function CssMinifierClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tuiFromEntry(CssMinifierL10n, locale, key, fb)
  const sample = getCalculatorSample('css-minifier')
  const [css, setCss] = useState(sample?.css ?? DEFAULT_CSS)

  const result = useMemo(() => {
    if (!css.trim()) return null
    if (css.length > 300_000) return { out: `⚠️ ${L('tooLarge', 'Input is too large — the supported size is up to 300,000 characters.')}`, inB: 0, outB: 0, pct: 0 }
    const out = minifyCss(css)
    const enc = new TextEncoder()
    const inB = enc.encode(css).length
    const outB = enc.encode(out).length
    const pct = inB > 0 ? ((inB - outB) / inB) * 100 : 0
    return { out, inB, outB, pct }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [css, locale])

  return (
    <div className="space-y-5">
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="css-in" className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('inputLabel', 'Your CSS')}</label>
          {sample && <button type="button" onClick={() => setCss(sample.css)} className="btn btn-secondary px-3 py-1.5 text-xs">{L('loadSample', 'Load Sample')}</button>}
        </div>
        <textarea id="css-in" value={css} onChange={(e) => setCss(e.target.value)} rows={10} spellCheck={false}
          placeholder={'.card { padding: 0px; }'}
          className="w-full rounded-lg border p-4 font-mono text-sm outline-none transition focus:ring-2"
          style={txtVars} />
      </div>

      {result && (
        <div role="status" aria-live="polite" className="space-y-4">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            <ResultCard label={L('statsIn', 'Bytes in')} value={result.inB ? result.inB.toLocaleString('en-US') : '—'} />
            <ResultCard label={L('statsOut', 'Bytes out')} value={result.inB ? result.outB.toLocaleString('en-US') : '—'} />
            <ResultCard label={L('statsSaved', 'Saved')} value={result.inB ? `${result.pct.toFixed(1)}%` : '—'} highlight />
          </div>
          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('outputLabel', 'Minified CSS')}</span>
              <CopyButton value={result.out} />
            </div>
            <pre className="overflow-x-auto rounded-lg border p-4 font-mono text-xs whitespace-pre-wrap" style={outVars}>{result.out}</pre>
          </div>
        </div>
      )}
      <ResultActions summary={result?.out ?? ''} filename="styles.min.css" downloadContent={result?.out ?? ''} mime="text/css;charset=utf-8;" disabled={!result?.out} />
      <CalculatorNote>{L('note', '🛡️ Conservative by design: strings and /*! banners are protected before any whitespace work, calc() keeps the spaces its grammar requires, and 0% is never folded to 0 (they differ inside flex-basis). No aggressive rule merging, so output stays valid on the first try.')}</CalculatorNote>
    </div>
  )
}

// ─────────────────────────── CSV → SQL Converter ───────────────────────────

function detectDelimiter(text: string): string {
  const head = text.slice(0, 4000)
  const counts: Array<[string, number]> = [',', ';', '\t'].map((d) => {
    let n = 0
    let inQ = false
    for (const ch of head) {
      if (ch === '"') inQ = !inQ
      else if (ch === d && !inQ) n++
    }
    return [d, n]
  })
  counts.sort((a, b) => b[1] - a[1])
  return counts[0][1] > 0 ? counts[0][0] : ','
}

function parseCsv(text: string, delim: string): string[][] {
  const rows: string[][] = []
  let row: string[] = []
  let field = ''
  let i = 0
  const n = text.length
  let inQuotes = false
  while (i < n) {
    const c = text[i]
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i += 2; continue }
        inQuotes = false; i++; continue
      }
      field += c; i++; continue
    }
    if (c === '"' && field === '') { inQuotes = true; i++; continue }
    if (c === delim) { row.push(field); field = ''; i++; continue }
    if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++
      row.push(field); field = ''
      rows.push(row); row = []
      i++; continue
    }
    field += c; i++
  }
  if (field !== '' || row.length > 0) { row.push(field); rows.push(row) }
  return rows.filter((r) => r.length > 1 || (r.length === 1 && r[0].trim() !== ''))
}

function sanitizeIdent(name: string): string {
  const s = name.trim().replace(/[^A-Za-z0-9_]+/g, '_').replace(/^_+|_+$/g, '')
  return /^[0-9]/.test(s) ? `_${s}` : (s || 'col')
}

/** 冷启动样例:表头 + 含逗号引号的名字 + 空单元格(NULL 演示) */
const DEFAULT_CSV = `id,name,email,signup_date,plan
1,Ada Lovelace,ada@example.com,2026-01-14,pro
2,"Liskov, Barbara",bl@example.com,2026-02-02,free
3,Alan Turing,,2026-03-30,pro`

export function CsvToSqlConverterClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tuiFromEntry(CsvToSqlConverterL10n, locale, key, fb)
  const sample = getCalculatorSample('csv-to-sql-converter')
  const [csv, setCsv] = useState(sample?.csv ?? DEFAULT_CSV)
  const [table, setTable] = useState('users')
  const [batch, setBatch] = useState(25)
  const [nullsAsNull, setNullsAsNull] = useState(true)
  const [quote, setQuote] = useState<'backtick' | 'double'>('backtick')
  const [headerRow, setHeaderRow] = useState(true)
  const [includeCols, setIncludeCols] = useState(true)
  const [inferTypes, setInferTypes] = useState(true)

  const result = useMemo(() => {
    if (!csv.trim()) return null
    if (csv.length > 200_000) return { sql: `⚠️ ${L('tooLarge', 'Input is too large — the supported size is up to 200,000 characters.')}`, stat: '' }
    const rows = parseCsv(csv, detectDelimiter(csv))
    if (rows.length === 0) return { sql: `⚠️ ${L('errNoRows', 'No rows detected — paste CSV text with a header row first.')}`, stat: '' }
    const width = Math.max(...rows.map((r) => r.length))
    const padded = rows.map((r) => (r.length === width ? r : [...r, ...Array(width - r.length).fill('')]))
    const ragged = rows.filter((r) => r.length !== width).length
    const columns = headerRow
      ? padded[0].map((h, i) => sanitizeIdent(h || `col${i + 1}`))
      : Array.from({ length: width }, (_, i) => `col${i + 1}`)
    const data = headerRow ? padded.slice(1) : padded
    if (data.length === 0) return { sql: `⚠️ ${L('errHeaderOnly', 'Only a header row was found — add at least one data row.')}`, stat: '' }

    const numeric: boolean[] = columns.map((_, c) => inferTypes && data.every((r) => r[c].trim() === '' || /^-?\d+(\.\d+)?$/.test(r[c].trim())) && data.some((r) => r[c].trim() !== ''))
    const q = quote === 'backtick' ? '`' : '"'
    const colList = includeCols ? ` (${columns.map((c) => `${q}${c}${q}`).join(', ')})` : ''
    const valueOf = (v: string, isNum: boolean) => {
      const t = v.trim()
      if (t === '') return nullsAsNull ? 'NULL' : "''"
      if (isNum) return t
      return `'${t.replace(/'/g, "''")}'`
    }
    const stmts: string[] = []
    for (let s = 0; s < data.length; s += batch) {
      const chunk = data.slice(s, s + batch)
      const tuples = chunk.map((r) => `(${columns.map((_, c) => valueOf(r[c], numeric[c])).join(', ')})`)
      stmts.push(`INSERT INTO ${q}${sanitizeIdent(table)}${q}${colList} VALUES\n${tuples.join(',\n')};`)
    }
    const notes: string[] = []
    if (ragged > 0) notes.push(L('raggedNote', '{n} short row(s) were padded with empty cells').replace('{n}', String(ragged)))
    const header = `-- ${data.length} rows → ${stmts.length} INSERT statement(s), table "${sanitizeIdent(table)}"${notes.length ? `\n-- ${notes.join('; ')}` : ''}`
    return { sql: `${header}\n\n${stmts.join('\n\n')}`, stat: L('rowsStat', '{r} rows · {s} statements').replace('{r}', String(data.length)).replace('{s}', String(stmts.length)) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [csv, table, batch, nullsAsNull, quote, headerRow, includeCols, inferTypes, locale])

  return (
    <div className="space-y-5">
      <div>
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          <label htmlFor="csv-in" className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('inputLabel', 'Your CSV')}</label>
          {sample && <button type="button" onClick={() => setCsv(sample.csv)} className="btn btn-secondary px-3 py-1.5 text-xs">{L('loadSample', 'Load Sample')}</button>}
        </div>
        <textarea id="csv-in" value={csv} onChange={(e) => setCsv(e.target.value)} rows={8} spellCheck={false}
          placeholder={'id,name,email\n1,"Liskov, Barbara",bl@example.com'}
          className="w-full rounded-lg border p-4 font-mono text-sm outline-none transition focus:ring-2"
          style={txtVars} />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="csv-table" className="mb-1 block text-xs font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{L('tblLabel', 'Table name')}</label>
          <input id="csv-table" type="text" value={table} onChange={(e) => setTable(e.target.value)} spellCheck={false} className="w-full rounded-lg border p-2.5 font-mono text-sm outline-none focus:ring-2" style={txtVars} />
        </div>
        <div>
          <label htmlFor="csv-batch" className="mb-1 block text-xs font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{L('batchLabel', 'Rows per INSERT')}</label>
          <select id="csv-batch" value={batch} onChange={(e) => setBatch(Number(e.target.value))} className="w-full rounded-lg border p-2.5 text-sm" style={selVars}>
            {[1, 10, 25, 50, 100, 500].map((n) => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>
      </div>

      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgb(var(--text-muted))' }}>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={headerRow} onChange={(e) => setHeaderRow(e.target.checked)} className="h-4 w-4 accent-brand-600" />
          {L('headerRow', 'First row is the header')}
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={includeCols} onChange={(e) => setIncludeCols(e.target.checked)} className="h-4 w-4 accent-brand-600" />
          {L('includeCols', 'Column list in INSERT')}
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={inferTypes} onChange={(e) => setInferTypes(e.target.checked)} className="h-4 w-4 accent-brand-600" />
          {L('inferTypes', 'Numbers unquoted')}
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={nullsAsNull} onChange={(e) => setNullsAsNull(e.target.checked)} className="h-4 w-4 accent-brand-600" />
          {L('nullsAsNull', 'Empty cells → NULL')}
        </label>
        <label className="flex items-center gap-2">
          {L('quoteLabel', 'Identifiers:')}
          <select value={quote} onChange={(e) => setQuote(e.target.value as 'backtick' | 'double')} aria-label={L('quoteLabel', 'Identifier quotes')} className="rounded border px-2 py-1 text-xs" style={selVars}>
            <option value="backtick">`backtick` (MySQL)</option>
            <option value="double">"double" (ANSI)</option>
          </select>
        </label>
      </div>

      {result && (
        <div role="status" aria-live="polite" className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
              {result.stat ? `${L('outputLabel', 'SQL INSERT statements')} · ${result.stat}` : L('outputLabel', 'SQL INSERT statements')}
            </span>
            <CopyButton value={result.sql} />
          </div>
          <pre className="overflow-x-auto rounded-lg border p-4 font-mono text-xs whitespace-pre-wrap" style={outVars}>{result.sql}</pre>
        </div>
      )}
      <ResultActions summary={result?.sql ?? ''} filename="import.sql" downloadContent={result?.sql ?? ''} mime="application/sql;charset=utf-8;" disabled={!result?.sql} />
      <CalculatorNote>{L('note', '🔐 Values are escaped the SQL-standard way (single quotes doubled); identifiers are sanitized to [A-Za-z0-9_] and quoted with backticks or double quotes. This is a generator for import scripts — when loading untrusted data at runtime, use parameterized queries instead of concatenation.')}</CalculatorNote>
    </div>
  )
}

// ─────────────────────────── ROT13 Converter ───────────────────────────

function rotTransform(text: string, shift: number, rot5: boolean): string {
  let out = ''
  for (const ch of text) {
    const c = ch.charCodeAt(0)
    if (c >= 65 && c <= 90) out += String.fromCharCode(((c - 65 + shift) % 26 + 26) % 26 + 65)
    else if (c >= 97 && c <= 122) out += String.fromCharCode(((c - 97 + shift) % 26 + 26) % 26 + 97)
    else if (rot5 && c >= 48 && c <= 57) out += String.fromCharCode(((c - 48 + 5) % 10) + 48)
    else out += ch
  }
  return out
}

export function Rot13ConverterClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tuiFromEntry(Rot13ConverterL10n, locale, key, fb)
  const [input, setInput] = useState('The quick brown fox jumps over 13 lazy dogs.')
  const [shift, setShift] = useState(13)
  const [rot5, setRot5] = useState(false)

  const output = useMemo(() => {
    if (input.length > 200_000) return `⚠️ ${L('tooLarge', 'Input is too large — the supported size is up to 200,000 characters.')}`
    return rotTransform(input, shift, rot5)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, shift, rot5, locale])

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-4">
        <label htmlFor="rot-shift" className="flex items-center gap-2 text-sm" style={{ color: 'rgb(var(--text-muted))' }}>
          {L('shiftLabel', 'Shift')}
          <input
            id="rot-shift" type="range" min={1} max={25} step={1} value={shift}
            onChange={(e) => setShift(Number(e.target.value))}
            className="w-32 accent-brand-600"
            aria-valuetext={String(shift)}
          />
          <span className="w-14 font-mono font-semibold tabular-nums" style={{ color: 'rgb(var(--text))' }}>
            {shift === 13 ? 'ROT13' : `ROT${shift}`}
          </span>
        </label>
        <label className="flex items-center gap-2 text-sm" style={{ color: 'rgb(var(--text-muted))' }}>
          <input type="checkbox" checked={rot5} onChange={(e) => setRot5(e.target.checked)} className="h-4 w-4 accent-brand-600" />
          {L('rot5Label', 'Also rotate digits by 5 (ROT5)')}
        </label>
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="rot-in" className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('inputLabel', 'Input text')}</label>
          {input && <button type="button" onClick={() => setInput('')} className="-my-1 rounded-md px-2 py-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-red-500">{L('clear', 'Clear')}</button>}
        </div>
        <textarea id="rot-in" value={input} onChange={(e) => setInput(e.target.value)} rows={6}
          placeholder={'The quick brown fox…'}
          className="w-full rounded-lg border p-4 font-mono text-sm outline-none transition focus:ring-2"
          style={txtVars} />
      </div>

      <div role="status" aria-live="polite">
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="rot-out" className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('outputLabel', 'Output')}</label>
          <CopyButton value={output} disabled={!output} />
        </div>
        <textarea id="rot-out" readOnly value={output} rows={6}
          className="w-full rounded-lg border-2 p-4 font-mono text-sm outline-none"
          style={outVars} />
      </div>
      <CalculatorNote>{L('note', '🔁 ROT13 is its own inverse — paste the output back to decode. Any other ROT-N shift undoes with 26 − N (ROT7 decodes with ROT19). Case is preserved; digits pass through untouched unless ROT5 is enabled, which is likewise self-inverse.')}</CalculatorNote>
    </div>
  )
}
