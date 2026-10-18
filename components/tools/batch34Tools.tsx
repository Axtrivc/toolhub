'use client'

import { useCallback, useEffect, useMemo, useRef, useState, type ChangeEvent, type DragEvent } from 'react'
import { CalculatorField, CalculatorNote } from '../calculator/CalculatorField'
import { CopyButton } from '@/components/CopyButton'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n-accessors/tools/batch34Tools'
import { getCalculatorSample } from '@/lib/tool-samples'

/**
 * 第三十四批(B14)生成器与趣味类(自定义 client)
 * Passphrase / Border Radius / Color Palette / Image Compressor
 * Username / Secret Santa
 *
 * 随机源统一走 crypto.getRandomValues + 拒绝采样(无模偏差);
 * 随机性只在挂载后的 useEffect 或事件回调里触发,SSR/水合确定性不受影响。
 */

/** 加密级随机整数 [0, max) —— rejection sampling 无模偏差 */
function randInt(max: number): number {
  if (max <= 0) return 0
  const range = 4294967296 // 2^32
  const limit = range - (range % max)
  const buf = new Uint32Array(1)
  let v = 0
  do {
    crypto.getRandomValues(buf)
    v = buf[0]
  } while (v >= limit)
  return v % max
}

/** Fisher-Yates 洗牌(crypto 随机) */
function shuffled<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = randInt(i + 1)
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ══════════════════════ 🔑 Passphrase Generator ══════════════════════

/**
 * 内建 256 词英文常用词表(3-9 字母、无撇号)。
 * 2^8 = 256 → 每个词恰好贡献 8 位熵,估算不需要对数心算。
 */
const WORDS_256: string[] = (
  'apple anchor arrow amber autumn avenue azure bacon bamboo banjo basil beach berry birch bison blaze ' +
  'bloom bolt brave bread brick brisk brook brush bubble bucket buffalo cabin cactus camel candle canoe ' +
  'canvas canyon cargo carousel castle cedar cherry chili chimney cider circus clay cliff cloak cloud clover ' +
  'coast cocoa comet compass copper coral cosmic cotton coyote crane crayon creek cricket crimson crystal cubic ' +
  'cumin daisy dawn deco delta denim dew diamond dinner dolphin domino donut dragon dune dusty ' +
  'eagle earth echo eclipse edge elder elbow elk ember emerald empire energy engine espresso essay exile ' +
  'falcon fable feather fern fiddle fig filter finch fjord flame flint float flora flute foam fog ' +
  'forest fossil fox frost fudge fuel gadget galaxy garden garlic gazelle gecko gem ghost giant ginger ' +
  'glacier glass glide globe glow gold gondola gopher granite grape gravity green grill grove guitar gulf ' +
  'gust harbor harvest hawk hazel heather hedge herb hive honey hood horizon hornet humid husky ice ' +
  'igloo indigo ivory jackal jaguar jasmine jetty jewel jigsaw jolly jungle juniper kayak kelp kernel kestrel ' +
  'kettle koala lagoon lantern lava lavender leaf legacy lemon lens lichen lilac lily limestone linen lion ' +
  'lizard llama lobster locket lotus lumber lunar lynx magnet mahogany mango maple marble marina marsh meadow ' +
  'melon meteor mighty mint mirror mist mocha molar moment monkey monsoon moon moose morning mosaic ' +
  'moss mountain muffin mulberry museum mustang nebula nectar needle nest night noble nomad noodle north nova ' +
  'nutmeg oak oasis ocean octopus olive onyx opera orbit orchid osprey otter owl oxide oyster paddle zephyr zenith'
).split(' ')

const SEPARATORS = [
  { label: 'hyphen  -', value: '-' },
  { label: 'dot  .', value: '.' },
  { label: 'underscore  _', value: '_' },
  { label: 'plus  +', value: '+' },
  { label: 'space', value: ' ' },
]

export function PassphraseGeneratorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('passphrase-generator', locale, key, fb)

  const [wordCount, setWordCount] = useState(4)
  const [sep, setSep] = useState('-')
  const [capitalize, setCapitalize] = useState(false)
  const [digits, setDigits] = useState(0)
  const [passphrase, setPassphrase] = useState('')

  const generate = useCallback(() => {
    const words: string[] = []
    for (let i = 0; i < wordCount; i++) {
      const w = WORDS_256[randInt(WORDS_256.length)]
      words.push(capitalize ? w[0].toUpperCase() + w.slice(1) : w)
    }
    let out = words.join(sep)
    for (let i = 0; i < digits; i++) out += String(randInt(10))
    setPassphrase(out)
  }, [wordCount, sep, capitalize, digits])

  // 挂载后才首次生成:SSR/水合首帧恒空串,不产生服务端/客户端随机分叉
  useEffect(() => {
    generate()
  }, [generate])

  // 熵:词表恰 256 词 → 每词恰 8 bits;十进制后缀每位 log2(10) ≈ 3.32 bits
  const bits = Math.round(wordCount * Math.log2(WORDS_256.length) + digits * Math.log2(10))
  const verdict =
    bits >= 80 ? L('verdictGreat', 'Excellent') :
    bits >= 64 ? L('verdictStrong', 'Strong') :
    bits >= 48 ? L('verdictFair', 'Fair') :
    L('verdictWeak', 'Weak')

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-stretch overflow-hidden rounded-lg border-2 border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
          <code
            className="flex-1 break-all px-4 py-4 font-mono text-lg text-slate-900 dark:text-slate-100 sm:text-xl"
            aria-label={L('generatedLabel', 'Generated passphrase')}
          >
            {passphrase || <span className="text-slate-300 dark:text-slate-600">{L('clickGenerate', 'Click generate')}</span>}
          </code>
        </div>
        <div className="mt-3 flex items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-400 sm:text-sm">
          <span>{L('entropyLabel', 'Entropy')}: <strong>{bits} {L('bits', 'bits')}</strong> · {verdict}</span>
          <span className="hidden sm:inline">{L('entropyHint', 'Each word adds exactly 8 bits (256-word list); each digit adds ~3.3.')}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button type="button" onClick={generate} className="btn btn-primary">🔁 {L('regenerate', 'Regenerate')}</button>
        <CopyButton value={passphrase} label={L('copyPassphrase', 'Copy Passphrase')} disabled={!passphrase} />
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="pg-words" className="text-sm font-medium text-slate-700 dark:text-slate-300">{L('wordCount', 'Words')}</label>
          <span className="rounded-md bg-brand-50 px-2 py-0.5 font-mono text-sm font-semibold text-brand-600 dark:bg-brand-900/30 dark:text-brand-400">{wordCount}</span>
        </div>
        <input id="pg-words" type="range" min={3} max={10} value={wordCount}
          onChange={(e) => setWordCount(Number(e.target.value))} className="w-full accent-brand-600" />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div>
          <label htmlFor="pg-sep" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">{L('separator', 'Separator')}</label>
          <select id="pg-sep" value={sep} onChange={(e) => setSep(e.target.value)}
            className="w-full rounded-lg border p-3 text-sm shadow-sm outline-none transition focus:ring-2"
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}>
            {SEPARATORS.map((s) => (
              <option key={s.value} value={s.value}>{L(`sep.${s.value === ' ' ? 'space' : s.value}`, s.label)}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="pg-digits" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">{L('digits', 'Trailing digits')}</label>
          <select id="pg-digits" value={String(digits)} onChange={(e) => setDigits(Number(e.target.value))}
            className="w-full rounded-lg border p-3 text-sm shadow-sm outline-none transition focus:ring-2"
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}>
            {[0, 1, 2].map((n) => <option key={n} value={n}>{n === 0 ? L('none', 'None') : `${n} ${L('digitWord', n === 1 ? 'digit' : 'digits')}`}</option>)}
          </select>
        </div>
        <label className="flex cursor-pointer items-center gap-2 self-end rounded-lg border p-3 text-sm text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          style={{ borderColor: 'rgb(var(--border-strong))' }}>
          <input type="checkbox" checked={capitalize} onChange={(e) => setCapitalize(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500" />
          {L('capitalize', 'Capitalize each word')}
        </label>
      </div>

      <CalculatorNote>{L('note', '🔑 Words are drawn from a built-in 256-word list with crypto-grade randomness: four words give 32 bits, six give 48, and ten give a full 80. Memorable and typeable — unlike a 16-character symbol soup. Generation is 100% offline.')}</CalculatorNote>
    </div>
  )
}

// ══════════════════════ 📐 Border Radius Generator ══════════════════════

const BR_PRESETS = [
  // [label key, tl, tr, br, bl, unit, elliptical, vtl, vtr, vbr, vbl]
  { key: 'presetCard', tl: '12', tr: '12', br: '12', bl: '12', unit: 'px', ell: false },
  { key: 'presetPill', tl: '999', tr: '999', br: '999', bl: '999', unit: 'px', ell: false },
  { key: 'presetSquircle', tl: '28%', tr: '28%', br: '28%', bl: '28%', unit: '%', ell: false },
  { key: 'presetLeaf', tl: '0', tr: '50%', br: '0', bl: '50%', unit: '%', ell: false },
  { key: 'presetBlob', tl: '30%', tr: '70%', br: '70%', bl: '30%', unit: '%', ell: true, vtl: '30%', vtr: '30%', vbr: '70%', vbl: '70%' },
  { key: 'presetTicket', tl: '12px', tr: '12px', br: '12px', bl: '12px', unit: 'px', ell: true, vtl: '48px', vtr: '4px', vbr: '48px', vbl: '4px' },
] as const

/**
 * 4 值 → CSS 简写:全等 → 1 值;a==c && b==d → 2 值;b==d → 3 值;否则 4 值。
 * 独立作用在水平组与垂直组上,椭圆斜杠语法两组分别折叠。
 */
function collapse4(a: string, b: string, c: string, d: string): string[] {
  if (a === b && b === c && c === d) return [a]
  if (a === c && b === d) return [a, b]
  if (b === d) return [a, b, c]
  return [a, b, c, d]
}

/**
 * 数值文本框清洗:只留数字与「第一个」小数点,孤立 '.' 归空。
 * 旧正则 [^0-9.] 放行 '1.2.3' / '...',会原样拼进可复制 CSS(border-radius: 1.2.3px),
 * 而滑杆 Number()→NaN→0 静默归零,用户看不出输出已非法。
 */
function sanitizeRadiusNum(v: string): string {
  let s = v.replace(/[^0-9.]/g, '')
  const first = s.indexOf('.')
  if (first !== -1) s = s.slice(0, first + 1) + s.slice(first + 1).replace(/\./g, '')
  if (s === '.') s = ''
  return s
}

export function BorderRadiusGeneratorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('border-radius-generator', locale, key, fb)

  const [unit, setUnit] = useState<'px' | '%'>('px')
  const [linkAll, setLinkAll] = useState(true)
  const [elliptical, setElliptical] = useState(false)
  const [tl, setTl] = useState('16')
  const [tr, setTr] = useState('16')
  const [br, setBr] = useState('16')
  const [bl, setBl] = useState('16')
  const [vtl, setVtl] = useState('8')
  const [vtr, setVtr] = useState('8')
  const [vbr, setVbr] = useState('8')
  const [vbl, setVbl] = useState('8')

  const maxSlider = unit === 'px' ? 150 : 100

  const setH = (setter: (v: string) => void, v: string) => {
    const clean = sanitizeRadiusNum(v)
    setter(clean)
    if (linkAll) { setTl(clean); setTr(clean); setBr(clean); setBl(clean) }
  }
  const setV = (setter: (v: string) => void, v: string) => {
    const clean = sanitizeRadiusNum(v)
    setter(clean)
    if (linkAll) { setVtl(clean); setVtr(clean); setVbr(clean); setVbl(clean) }
  }

  const h = [tl, tr, br, bl]
  const v = [vtl, vtr, vbr, vbl]
  // 输出再过一道 Number():状态允许 '1.' 这类输入中间态,但 CSS 里必须是无歧义数字
  const withUnit = (vals: string[]) => vals.map((x) => `${Number.isFinite(Number(x)) ? String(Number(x)) : 0}${unit}`)
  const [htl, htr, hbr, hbl] = withUnit(h)
  const [vtlu, vtru, vbru, vblu] = withUnit(v)
  const hCss = collapse4(htl, htr, hbr, hbl)
  const vCss = collapse4(vtlu, vtru, vbru, vblu)
  // 椭圆且两组完全一致 → 可退化为单值;否则水平 / 垂直(斜杠语法)
  const css =
    !elliptical
      ? `border-radius: ${hCss.join(' ')};`
      : hCss.length === 1 && vCss.length === 1 && hCss[0] === vCss[0]
        ? `border-radius: ${hCss[0]};`
        : `border-radius: ${hCss.join(' ')} / ${vCss.join(' ')};`
  const previewRadius = css.replace(/^border-radius: |;$/g, '')

  const applyPreset = (p: (typeof BR_PRESETS)[number]) => {
    // 只留数字与小数点:预设值里带的 'px'/'%' 后缀一律剥掉,
    // 单位由 setUnit 统一追加 —— 否则 '30%' 会拼成 '30%%'(滑杆也会 NaN 归零)
    const strip = (x: string) => x.replace(/[^0-9.]/g, '')
    const hasPct = [p.tl, p.tr, p.br, p.bl].some((x) => x.includes('%'))
    setUnit(hasPct ? '%' : 'px')
    setElliptical(p.ell)
    setTl(strip(p.tl)); setTr(strip(p.tr)); setBr(strip(p.br)); setBl(strip(p.bl))
    const v0 = 'vtl' in p ? strip(p.vtl) : '8'
    const v1 = 'vtr' in p ? strip(p.vtr) : '8'
    const v2 = 'vbr' in p ? strip(p.vbr) : '8'
    const v3 = 'vbl' in p ? strip(p.vbl) : '8'
    setVtl(v0); setVtr(v1); setVbr(v2); setVbl(v3)
  }

  const sliderRow = (
    id: string, label: string, value: string, setter: (v: string) => void, isVertical: boolean,
  ) => (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <label htmlFor={id} className="text-xs font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{label}</label>
        <input
          id={`${id}-num`}
          type="text"
          inputMode="decimal"
          value={value}
          onChange={(e) => (isVertical ? setV(setter, e.target.value) : setH(setter, e.target.value))}
          className="w-16 rounded-md border px-2 py-1 text-right font-mono text-xs"
          style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
        />
      </div>
      <input id={id} type="range" min={0} max={maxSlider} step={1} value={Math.min(Number(value) || 0, maxSlider)}
        onChange={(e) => (isVertical ? setV(setter, e.target.value) : setH(setter, e.target.value))}
        className="w-full accent-brand-600" />
    </div>
  )

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* 联动预览 */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-medium uppercase tracking-wide" style={{ color: 'rgb(var(--text-faint))' }}>{L('preview', 'Live preview')}</span>
          <div className="flex flex-1 items-center justify-center rounded-xl border p-8" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-subtle))' }}>
            <div
              className="h-36 w-full max-w-[260px] border-2 shadow-inner"
              style={{ borderRadius: previewRadius, backgroundColor: 'rgb(var(--primary) / 0.85)', borderColor: 'rgb(var(--primary))' }}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {BR_PRESETS.map((p) => (
              <button key={p.key} type="button" onClick={() => applyPreset(p)}
                className="rounded-full border px-3 py-1 text-xs font-medium transition hover:bg-slate-50 dark:hover:bg-slate-800"
                style={{ borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-muted))' }}>
                {L(p.key, p.key.replace('preset', ''))}
              </button>
            ))}
          </div>
        </div>

        {/* 控制 */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-4">
            <label className="flex cursor-pointer items-center gap-2 text-sm" style={{ color: 'rgb(var(--text))' }}>
              <input type="checkbox" checked={linkAll} onChange={(e) => { const on = e.target.checked; setLinkAll(on); if (on) { setTr(tl); setBr(tl); setBl(tl) } }}
                className="h-4 w-4 accent-blue-600" />
              {L('linkAll', 'Link all corners')}
            </label>
            <label className="flex cursor-pointer items-center gap-2 text-sm" style={{ color: 'rgb(var(--text))' }}>
              <input type="checkbox" checked={elliptical} onChange={(e) => setElliptical(e.target.checked)} className="h-4 w-4 accent-blue-600" />
              {L('elliptical', 'Elliptical (/)')}
            </label>
            <div className="ml-auto flex overflow-hidden rounded-lg border" style={{ borderColor: 'rgb(var(--border-strong))' }}>
              {(['px', '%'] as const).map((u) => (
                <button key={u} type="button" onClick={() => setUnit(u)} aria-pressed={unit === u}
                  className={`px-3 py-1.5 text-xs font-semibold ${unit === u ? 'bg-brand-600 text-white' : ''}`}
                  style={unit === u ? undefined : { color: 'rgb(var(--text-muted))' }}>{u}</button>
              ))}
            </div>
          </div>

          {elliptical && <p className="text-xs font-medium" style={{ color: 'rgb(var(--text-faint))' }}>{L('horizontal', 'Horizontal radii')}</p>}
          {/* linkAll 时只有一条滑杆,单列铺满整行——放进 2 列网格会只占左格,移动端右半留白 */}
          <div className={`grid gap-3 ${linkAll ? 'grid-cols-1' : 'grid-cols-2'}`}>
            {linkAll
              ? sliderRow('br-tl', L('allCorners', 'All corners'), tl, setTl, false)
              : <>
                {sliderRow('br-tl', L('tl', 'Top left'), tl, setTl, false)}
                {sliderRow('br-tr', L('tr', 'Top right'), tr, setTr, false)}
                {sliderRow('br-br', L('br', 'Bottom right'), br, setBr, false)}
                {sliderRow('br-bl', L('bl', 'Bottom left'), bl, setBl, false)}
              </>}
          </div>

          {elliptical && (
            <>
              <p className="text-xs font-medium" style={{ color: 'rgb(var(--text-faint))' }}>{L('vertical', 'Vertical radii')}</p>
              <div className={`grid gap-3 ${linkAll ? 'grid-cols-1' : 'grid-cols-2'}`}>
                {linkAll
                  ? sliderRow('br-vtl', L('allCornersV', 'All corners'), vtl, setVtl, true)
                  : <>
                    {sliderRow('br-vtl', L('tl', 'Top left'), vtl, setVtl, true)}
                    {sliderRow('br-vtr', L('tr', 'Top right'), vtr, setVtr, true)}
                    {sliderRow('br-vbr', L('br', 'Bottom right'), vbr, setVbr, true)}
                    {sliderRow('br-vbl', L('bl', 'Bottom left'), vbl, setVbl, true)}
                  </>}
              </div>
            </>
          )}
        </div>
      </div>

      {/* CSS 输出 */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>CSS</span>
          <CopyButton value={css} label={L('copyCss', 'Copy CSS')} />
        </div>
        <pre className="overflow-x-auto rounded-lg border p-4 font-mono text-sm" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text))' }}>{css}</pre>
      </div>
      <CalculatorNote>{L('note', '📐 Corner order is clockwise from top left: TL TR BR BL. The elliptical form takes horizontal / vertical radii separated by a slash — 50% / 50% with equal pairs renders a perfect ellipse. Percentages reference the box side they sit on, which is why blobs survive resizing better than pixel values.')}</CalculatorNote>
    </div>
  )
}

// ══════════════════════ 🎨 Color Palette Generator ══════════════════════

type Scheme = 'analogous' | 'complementary' | 'split' | 'triadic' | 'monochrome'

const SCHEMES: { value: Scheme; key: string; fb: string }[] = [
  { value: 'analogous', key: 'schemeAnalogous', fb: 'Analogous' },
  { value: 'complementary', key: 'schemeComplementary', fb: 'Complementary' },
  { value: 'split', key: 'schemeSplit', fb: 'Split-complementary' },
  { value: 'triadic', key: 'schemeTriadic', fb: 'Triadic' },
  { value: 'monochrome', key: 'schemeMonochrome', fb: 'Monochrome' },
]

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim())
  if (!m) return null
  const n = parseInt(m[1], 16)
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 }
}

function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  const rn = r / 255, gn = g / 255, bn = b / 255
  const max = Math.max(rn, gn, bn), min = Math.min(rn, gn, bn)
  const l = (max + min) / 2
  if (max === min) return { h: 0, s: 0, l: Math.round(l * 100) }
  const d = max - min
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
  let h: number
  if (max === rn) h = ((gn - bn) / d + (gn < bn ? 6 : 0)) / 6
  else if (max === gn) h = ((bn - rn) / d + 2) / 6
  else h = ((rn - gn) / d + 4) / 6
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) }
}

function hslToHex(h: number, s: number, l: number): string {
  const sn = s / 100, ln = l / 100
  const k = (n: number) => (n + ((h / 360) * 12)) % 12
  const a = sn * Math.min(ln, 1 - ln)
  const f = (n: number) => {
    const v = ln - a * Math.max(-1, Math.min(Math.min(k(n) - 3, 9 - k(n)), 1))
    return Math.round(255 * v).toString(16).padStart(2, '0')
  }
  return `#${f(0)}${f(8)}${f(4)}`
}

const clamp = (n: number, lo: number, hi: number) => Math.min(Math.max(n, lo), hi)

/** 色板角色英文兜底(l10n 缺译时展示) */
const ROLE_FB: Record<string, string> = {
  'role.base': 'Base',
  'role.h+30': '+30°', 'role.h-30': '−30°', 'role.h+60': '+60°', 'role.h-60': '−60°',
  'role.complement': 'Complement', 'role.tint': 'Tint', 'role.shade': 'Shade', 'role.tintComp': 'Complement tint',
  'role.h+150': '+150°', 'role.h+210': '+210°', 'role.h+120': '+120°', 'role.h+240': '+240°',
  'role.darker': 'Darker', 'role.dark': 'Dark', 'role.light': 'Light', 'role.lighter': 'Lighter',
}

/** 每个色板条目:role 是 l10n key;h/s/l 经 hslToHex 输出 */
interface SwatchDef { role: string; h: number; s: number; l: number }

function buildPalette(baseHex: string, scheme: Scheme): SwatchDef[] {
  const rgb = hexToRgb(baseHex)!
  const { h, s, l } = rgbToHsl(rgb.r, rgb.g, rgb.b)
  const at = (dh: number, dl = 0) => ({ h: (h + dh + 360) % 360, s: clamp(s, 0, 100), l: clamp(l + dl, 4, 96) })
  switch (scheme) {
    case 'analogous':
      return [
        { role: 'role.h-60', ...at(-60) },
        { role: 'role.h-30', ...at(-30) },
        { role: 'role.base', h, s, l },
        { role: 'role.h+30', ...at(30) },
        { role: 'role.h+60', ...at(60) },
      ]
    case 'complementary':
      return [
        { role: 'role.base', h, s, l },
        { role: 'role.complement', ...at(180) },
        { role: 'role.tint', ...at(0, 18) },
        { role: 'role.shade', ...at(0, -18) },
        { role: 'role.tintComp', ...at(180, 18) },
      ]
    case 'split':
      return [
        { role: 'role.base', h, s, l },
        { role: 'role.h+150', ...at(150) },
        { role: 'role.h+210', ...at(210) },
        { role: 'role.tint', ...at(0, 18) },
        { role: 'role.shade', ...at(0, -18) },
      ]
    case 'triadic':
      return [
        { role: 'role.base', h, s, l },
        { role: 'role.h+120', ...at(120) },
        { role: 'role.h+240', ...at(240) },
        { role: 'role.tint', ...at(0, 18) },
        { role: 'role.shade', ...at(0, -18) },
      ]
    case 'monochrome':
    default:
      return [
        { role: 'role.darker', h, s: clamp(s, 0, 100), l: clamp(l - 32, 6, 96) },
        { role: 'role.dark', h, s: clamp(s, 0, 100), l: clamp(l - 16, 8, 96) },
        { role: 'role.base', h, s, l },
        { role: 'role.light', h, s: clamp(s, 0, 100), l: clamp(l + 16, 4, 94) },
        { role: 'role.lighter', h, s: clamp(s, 0, 100), l: clamp(l + 32, 4, 96) },
      ]
  }
}

export function ColorPaletteGeneratorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('color-palette-generator', locale, key, fb)

  const [hexInput, setHexInput] = useState('#3b82f6')
  const [scheme, setScheme] = useState<Scheme>('analogous')

  const validHex = useMemo(() => hexToRgb(hexInput), [hexInput])
  const baseHex = validHex ? `#${validHex.r.toString(16).padStart(2, '0')}${validHex.g.toString(16).padStart(2, '0')}${validHex.b.toString(16).padStart(2, '0')}` : ''

  const randomBase = useCallback(() => {
    // crypto 随机基色:亮度限制在 25-70,避免肉眼难辨的近黑/近白
    const h = randInt(360)
    const s = 55 + randInt(40)
    const l = 25 + randInt(45)
    setHexInput(hslToHex(h, s, l))
  }, [])

  const palette = useMemo(() => (baseHex ? buildPalette(baseHex, scheme) : []), [baseHex, scheme])

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-[auto_1fr_auto] sm:items-end">
        <div>
          <label htmlFor="cp-color" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('baseColor', 'Base color')}</label>
          <input id="cp-color" type="color" value={baseHex || '#3b82f6'} onChange={(e) => setHexInput(e.target.value)}
            className="h-11 w-20 cursor-pointer rounded-lg border" style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))' }} />
        </div>
        <div>
          <label htmlFor="cp-hex" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>HEX</label>
          <input id="cp-hex" type="text" value={hexInput} onChange={(e) => setHexInput(e.target.value)} spellCheck={false}
            placeholder="#3b82f6"
            className="w-full rounded-lg border p-3 font-mono text-sm shadow-sm outline-none transition focus:ring-2"
            style={{ borderColor: validHex ? 'rgb(var(--border-strong))' : '#ef4444', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }} />
          {!validHex && <p className="mt-1 text-xs text-red-500">⚠️ {L('errHex', 'Enter a 6-digit hex color like #3b82f6')}</p>}
        </div>
        <button type="button" onClick={randomBase} className="btn btn-secondary">🎲 {L('randomBase', 'Random base')}</button>
      </div>

      <div>
        <label htmlFor="cp-scheme" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('harmony', 'Harmony scheme')}</label>
        <div className="flex flex-wrap gap-2">
          {SCHEMES.map((s) => (
            <button key={s.value} type="button" onClick={() => setScheme(s.value)} aria-pressed={scheme === s.value}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                scheme === s.value ? 'border-brand-500 bg-brand-50 text-brand-700 dark:border-brand-500 dark:bg-brand-950/40 dark:text-brand-300' : ''
              }`}
              style={scheme === s.value ? undefined : { borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-muted))' }}>
              {L(s.key, s.fb)}
            </button>
          ))}
        </div>
      </div>

      {palette.length > 0 && (
        <div className="space-y-3">
          {palette.map((sw) => {
            const hex = hslToHex(sw.h, sw.s, sw.l)
            const rgb = hexToRgb(hex)!
            const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b)
            const light = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255 > 0.6
            return (
              <div key={sw.role} className="flex items-center gap-4 rounded-xl border p-3" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }}>
                {/* 窄屏色块收窄到 w-16,给右侧 rgb/hsl 留出整行宽度,避免值在括号中间折行 */}
                <div className="h-14 w-16 shrink-0 rounded-lg border sm:w-24" style={{ backgroundColor: hex, borderColor: 'rgb(var(--border))' }} />
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'rgb(var(--text-faint))' }}>
                    {L(sw.role, ROLE_FB[sw.role] ?? sw.role)}
                  </div>
                  <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs" style={{ color: 'rgb(var(--text-muted))' }}>
                    <span className="whitespace-nowrap font-semibold" style={{ color: light ? '#111827' : '#f9fafb', backgroundColor: hex, padding: '1px 6px', borderRadius: 4 }}>{hex.toUpperCase()}</span>
                    <span className="whitespace-nowrap">rgb({rgb.r}, {rgb.g}, {rgb.b})</span>
                    <span className="whitespace-nowrap">hsl({hsl.h}, {hsl.s}%, {hsl.l}%)</span>
                  </div>
                </div>
                <CopyButton value={hex.toUpperCase()} label={L('copyHex', 'Copy')} />
              </div>
            )
          })}
        </div>
      )}
      <CalculatorNote>{L('note', '🎨 Harmony angles follow the classic color wheel: analogous ±30°/±60°, complement 180°, split 150°/210°, triadic 120°/240°. Monochrome keeps hue and saturation, stepping lightness. Every swatch shows hex, rgb(), and hsl() — copy the format your stack wants.')}</CalculatorNote>
    </div>
  )
}

// ══════════════════════ 🗜️ Image Compressor ══════════════════════

interface CompressResult { url: string; size: number; mime: string }

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

function extOf(mime: string): string {
  if (mime === 'image/jpeg') return 'jpg'
  if (mime === 'image/webp') return 'webp'
  return 'png'
}

// 与 ImageResizer 同口径:20MB 上传拦截 + 画布安全上限(超限时部分浏览器
// 会把 canvas 静默渲染成空白图 / toBlob 返回 null,必须渲染前拦截)
const MAX_BYTES = 20 * 1024 * 1024
const MAX_SIDE = 8192
const MAX_PIXELS = 40 * 1000 * 1000

export function ImageCompressorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('image-compressor', locale, key, fb)

  const [imgSrc, setImgSrc] = useState('')
  const [imgName, setImgName] = useState('image')
  const [origSize, setOrigSize] = useState(0)
  const [natural, setNatural] = useState<{ w: number; h: number } | null>(null)
  const [format, setFormat] = useState<'jpeg' | 'webp'>('jpeg')
  const [quality, setQuality] = useState(0.75)
  const [result, setResult] = useState<CompressResult | null>(null)
  const [error, setError] = useState('')
  const [dragging, setDragging] = useState(false)
  // 解码失败标记:失败时重新展示上传区,否则用户只剩一条错误、无法换文件重试
  const [imgFailed, setImgFailed] = useState(false)
  const imgRef = useRef<HTMLImageElement | null>(null)
  const outUrlRef = useRef('')

  const handleFile = useCallback((file: File) => {
    setError('')
    setImgFailed(false)
    if (!file.type.startsWith('image/')) {
      setError(L('errUploadImage', 'Please upload an image file (PNG, JPG, or WebP).'))
      return
    }
    if (file.size > MAX_BYTES) {
      setError(L('errFileTooLarge', 'File is too large ({size}). Maximum size is 20 MB.').replace('{size}', formatBytes(file.size)))
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      setImgSrc(reader.result as string)
      setImgName(file.name.replace(/\.[^.]+$/, '') || 'image')
      setOrigSize(file.size)
      setNatural(null)
      setResult(null)
    }
    reader.onerror = () => setError(L('errReadFile', 'Could not read the file.'))
    reader.readAsDataURL(file)
  }, [locale])

  const onInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) handleFile(file)
  }, [handleFile])

  const onDrop = useCallback((e: DragEvent) => {
    e.preventDefault()
    setDragging(false)
    const file = e.dataTransfer.files?.[0]
    if (file) handleFile(file)
  }, [handleFile])

  // 解码原图(尺寸不变 —— 本工具只重编码,不改分辨率)
  useEffect(() => {
    if (!imgSrc) {
      imgRef.current = null
      return
    }
    let cancelled = false
    const img = new Image()
    img.onload = () => {
      if (cancelled) return
      imgRef.current = img
      setNatural({ w: img.naturalWidth, h: img.naturalHeight })
    }
    img.onerror = () => {
      if (cancelled) return
      imgRef.current = null
      setImgFailed(true)
      setError(L('errDecodeImage', 'Could not decode the image file.'))
    }
    img.src = imgSrc
    return () => { cancelled = true }
  }, [imgSrc, locale])

  const outMime = format === 'jpeg' ? 'image/jpeg' : 'image/webp'

  // 防抖重编码:原始分辨率 canvas 重绘 + toBlob 测真实体积
  useEffect(() => {
    if (!imgRef.current || !natural) {
      setResult(null)
      return
    }
    if (natural.w > MAX_SIDE || natural.h > MAX_SIDE || natural.w * natural.h > MAX_PIXELS) {
      setResult(null)
      setError(L('errTooLarge', 'This image is too large to re-encode in-browser — keep each side at 8192 px or below and the total under 40 megapixels.'))
      return
    }
    let cancelled = false
    const timer = setTimeout(() => {
      const img = imgRef.current
      if (!img) return
      const canvas = document.createElement('canvas')
      canvas.width = natural.w
      canvas.height = natural.h
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = 'high'
      // JPEG 无透明通道:透明像素会被编码成黑色 → 先铺白底(与 image-resizer 同做法)
      if (outMime === 'image/jpeg') {
        ctx.fillStyle = '#ffffff'
        ctx.fillRect(0, 0, natural.w, natural.h)
      }
      ctx.drawImage(img, 0, 0)
      canvas.toBlob((blob) => {
        if (cancelled) return
        if (!blob) {
          setError(L('errEncodeFailed', 'Encoding failed — the browser could not generate the image. Try a different quality.'))
          return
        }
        // 老 Safari 的 toBlob 不认识 image/webp,会静默回退 PNG → 显式报错而非伪装成功
        if (outMime === 'image/webp' && blob.type !== 'image/webp') {
          setError(L('errWebpUnsupported', 'Your browser cannot encode WebP. Use a current Chrome, Edge, Firefox, or Safari 14+, or choose JPEG output.'))
          setResult(null)
          return
        }
        setError('')
        if (outUrlRef.current) URL.revokeObjectURL(outUrlRef.current)
        const url = URL.createObjectURL(blob)
        outUrlRef.current = url
        setResult({ url, size: blob.size, mime: blob.type })
      }, outMime, quality)
    }, 300)
    return () => { cancelled = true; clearTimeout(timer) }
  }, [imgSrc, natural, outMime, quality, locale])

  useEffect(() => () => { if (outUrlRef.current) URL.revokeObjectURL(outUrlRef.current) }, [])

  const download = useCallback(() => {
    if (!result) return
    const a = document.createElement('a')
    a.href = result.url
    a.download = `${imgName}-compressed.${extOf(result.mime)}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }, [result, imgName])

  const savedPct = result && origSize > 0 ? Math.round((1 - result.size / origSize) * 100) : 0

  return (
    <div className="space-y-5">
      {(!imgSrc || imgFailed) && (
        <label
          htmlFor="compressor-upload"
          onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
          onDragLeave={() => setDragging(false)}
          onDrop={onDrop}
          className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-12 text-center transition ${dragging ? 'border-blue-400 bg-blue-50/50 dark:bg-blue-950/20' : ''}`}
          style={{ borderColor: dragging ? undefined : 'rgb(var(--border-strong))' }}
        >
          <span className="text-4xl" aria-hidden="true">🗜️</span>
          <span className="mt-3 text-sm font-medium" style={{ color: 'rgb(var(--text))' }}>
            {L('uploadPrompt', 'Click to upload or drag & drop')}
          </span>
          <span className="mt-1 text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
            {L('uploadHint', 'PNG, JPG, or WebP — never uploaded anywhere')}
          </span>
          <input id="compressor-upload" type="file" accept="image/*" onChange={onInputChange} className="hidden" />
        </label>
      )}

      {error && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-800/60 dark:bg-red-950/30 dark:text-red-300">
          ⚠️ {error}
        </div>
      )}

      {imgSrc && natural && (
        <div className="space-y-5">
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgSrc} alt={L('sourceAlt', 'Uploaded source')} className="h-20 w-20 rounded-lg border object-contain" style={{ borderColor: 'rgb(var(--border))' }} />
            <div className="flex-1">
              <div className="text-sm font-medium" style={{ color: 'rgb(var(--text))' }}>{imgName}</div>
              <div className="text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
                {natural.w} × {natural.h} px · {formatBytes(origSize)}
              </div>
            </div>
            <label htmlFor="compressor-reupload" className="btn btn-secondary cursor-pointer text-xs">
              {L('change', 'Change')}
              <input id="compressor-reupload" type="file" accept="image/*" onChange={onInputChange} className="hidden" />
            </label>
          </div>

          <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
            <div>
              <label htmlFor="ic-format" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('outputFormat', 'Output format')}</label>
              <select id="ic-format" value={format} onChange={(e) => setFormat(e.target.value as 'jpeg' | 'webp')}
                className="w-full rounded-lg border p-2.5 text-sm shadow-sm outline-none transition focus:ring-2"
                style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}>
                <option value="jpeg">JPEG</option>
                <option value="webp">WebP</option>
              </select>
            </div>
            <div>
              <label htmlFor="ic-quality" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
                {L('qualityLabel', 'Quality —')} {Math.round(quality * 100)}%
              </label>
              <input id="ic-quality" type="range" min={0.05} max={1} step={0.01} value={quality}
                onChange={(e) => setQuality(Number(e.target.value))} className="calc-slider"
                style={{ background: `linear-gradient(to right, rgb(var(--primary)) ${((quality - 0.05) / 0.95) * 100}%, rgb(var(--bg-subtle)) ${((quality - 0.05) / 0.95) * 100}%)` }} />
            </div>
          </div>

          {result && (
            <div className="flex flex-col items-start gap-4 rounded-lg border p-4 sm:flex-row sm:items-center" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }} role="status" aria-live="polite">
              {/* 窄屏纵向堆叠:否则 flex-1 文本区被缩到几十 px,「12.5 KB → 10.1 KB」逐词竖排折行 */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={result.url} alt={L('compressedAlt', 'Compressed preview')} className="max-h-24 max-w-32 rounded-lg border object-contain" style={{ borderColor: 'rgb(var(--border))' }} />
              <div className="flex-1 text-sm" style={{ color: 'rgb(var(--text))' }}>
                <div className="font-semibold">{formatBytes(origSize)} → {formatBytes(result.size)}</div>
                <div className={`mt-1 font-mono text-xs ${savedPct > 0 ? 'text-green-600 dark:text-green-400' : 'text-amber-600 dark:text-amber-400'}`}>
                  {extOf(result.mime).toUpperCase()} · q{Math.round(quality * 100)}
                  {savedPct > 0
                    ? ` · ${savedPct}% ${L('smaller', 'smaller')}`
                    : ` · ${Math.abs(savedPct)}% ${L('larger', 'larger — lower the quality or pick WebP')}`}
                </div>
              </div>
              <button type="button" onClick={download} className="btn btn-primary text-sm">{L('download', 'Download')}</button>
            </div>
          )}
        </div>
      )}

      <CalculatorNote>{L('note', '🔒 100% client-side: the image is decoded and re-encoded by an in-browser canvas at its original dimensions — nothing is uploaded. The output size shown is the real encoded file measured with canvas.toBlob, not an estimate. 70-85 quality is the usual sweet spot; WebP typically lands 25-35% smaller than JPEG at the same quality.')}</CalculatorNote>
    </div>
  )
}

// ══════════════════════ 🎮 Username Generator ══════════════════════

type UsernameStyle = 'gamer' | 'retro' | 'minimal' | 'underscore'

const U_STYLES: { value: UsernameStyle; key: string; fb: string }[] = [
  { value: 'gamer', key: 'styleGamer', fb: '🎮 Gamer' },
  { value: 'retro', key: 'styleRetro', fb: '👾 Retro' },
  { value: 'minimal', key: 'styleMinimal', fb: '⬜ Minimal' },
  { value: 'underscore', key: 'styleUnderscore', fb: 'underscore_style' },
]

const U_ADJ = ['swift', 'iron', 'shadow', 'neon', 'cyber', 'storm', 'frost', 'solar', 'hyper', 'quantum', 'pixel', 'turbo', 'blaze', 'static', 'phantom', 'crimson']
const U_NOUN = ['fox', 'wolf', 'hawk', 'byte', 'blade', 'rider', 'viper', 'nova', 'drift', 'ghost', 'spark', 'falcon', 'ranger', 'ninja', 'titan', 'otter']

/** leet 替换(a→4 e→3 i→1 o→0 s→5 t→7)—— 只用于 gamer 风格 */
function leet(s: string): string {
  return s.replace(/a/gi, '4').replace(/e/gi, '3').replace(/i/gi, '1').replace(/o/gi, '0').replace(/s/gi, '5').replace(/t/gi, '7')
}

function buildUsername(style: UsernameStyle, keyword: string): string {
  const kw = keyword.trim().toLowerCase().replace(/[^a-z0-9]/g, '')
  const adj = U_ADJ[randInt(U_ADJ.length)]
  const noun = U_NOUN[randInt(U_NOUN.length)]
  const num = String(randInt(90) + 10) // 两位数
  const num3 = String(randInt(900) + 100) // 三位数
  const year = String(1980 + randInt(20)) // 1980-1999
  const core = kw || adj
  const variants: string[] = []
  switch (style) {
    case 'gamer':
      variants.push(`xX${core}Xx`, `${core}${num3}`, `${adj}${core}${num}`, leet(core))
      break
    case 'retro':
      variants.push(`${core}${year.slice(2)}`, `${core}_${noun}`, `${noun}${year.slice(2)}`, `the_${core}`)
      break
    case 'minimal':
      variants.push(core, `${core}${num[0]}`, `${adj}${noun}`, `${noun}${core}`)
      break
    case 'underscore':
      variants.push(`${adj}_${noun}`, `${core}_${noun}`, `${adj}_${core}`, `${core}_${noun}_${num}`)
      break
  }
  return variants[randInt(variants.length)]
}

export function UsernameGeneratorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('username-generator', locale, key, fb)
  const sample = getCalculatorSample('username-generator')

  const [keyword, setKeyword] = useState(sample?.keyword ?? '')
  const [style, setStyle] = useState<UsernameStyle>((sample?.style as UsernameStyle) ?? 'gamer')
  const [maxLen, setMaxLen] = useState(sample?.maxLen ?? '20')
  const [names, setNames] = useState<string[]>([])
  // 挂载标记:SSR/水合首帧 names 恒空,不能先闪"没有合适候选"的警告
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const generate = useCallback(() => {
    const limit = Math.min(Math.max(Math.round(Number(maxLen) || 24), 6), 30)
    const out: string[] = []
    const seen = new Set<string>()
    // 最多尝试 60 次:长度过滤 + 去重后凑满 6 个候选
    for (let i = 0; i < 60 && out.length < 6; i++) {
      const u = buildUsername(style, keyword)
      if (u.length > limit || seen.has(u)) continue
      seen.add(u)
      out.push(u)
    }
    setNames(out)
  }, [style, keyword, maxLen])

  // 挂载后首次生成:随机只在客户端发生(SSR 首帧恒空列表,水合一致)
  useEffect(() => {
    generate()
  }, [generate])

  const limit = Math.min(Math.max(Math.round(Number(maxLen) || 24), 6), 30)

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="sm:col-span-2">
          <CalculatorField id="ug-keyword" type="text" label={L('keywordLabel', 'Keyword or name (optional)')} value={keyword}
            onChange={setKeyword} placeholder={L('keywordPlaceholder', 'e.g. nova, your name, your clan tag')} />
        </div>
        <div>
          <CalculatorField id="ug-maxlen" label={L('maxLenLabel', 'Max length')} value={maxLen} onChange={setMaxLen} placeholder="20" suffix="chars" />
        </div>
      </div>

      <div>
        <span className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>{L('styleLabel', 'Style')}</span>
        <div className="flex flex-wrap gap-2">
          {U_STYLES.map((s) => (
            <button key={s.value} type="button" onClick={() => setStyle(s.value)} aria-pressed={style === s.value}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                style === s.value ? 'border-brand-500 bg-brand-50 text-brand-700 dark:border-brand-500 dark:bg-brand-950/40 dark:text-brand-300' : ''
              }`}
              style={style === s.value ? undefined : { borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text-muted))' }}>
              {L(s.key, s.fb)}
            </button>
          ))}
        </div>
      </div>

      <button type="button" onClick={generate} className="btn btn-primary w-full py-3">🎲 {L('generate', 'Generate usernames')}</button>

      {names.length > 0 && (
        <div role="status" aria-live="polite" className="space-y-2">
          {names.map((n) => (
            <div key={n} className="flex items-center gap-3 rounded-lg border p-3" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }}>
              <code className="flex-1 truncate font-mono text-sm" style={{ color: 'rgb(var(--text))' }}>{n}</code>
              <span className="shrink-0 text-xs tabular-nums" style={{ color: 'rgb(var(--text-faint))' }}>{n.length}/{limit}</span>
              <CopyButton value={n} />
            </div>
          ))}
        </div>
      )}
      {mounted && names.length === 0 && (
        <p className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-700 dark:border-amber-800/60 dark:bg-amber-950/30 dark:text-amber-300">
          ⚠️ {L('noneFit', 'No candidate fits that max length — raise the limit or shorten the keyword.')}
        </p>
      )}
      <CalculatorNote>{L('note', '👤 Gamer tags bring leet digits and xX decoration, retro picks an 80s/90s year suffix, minimal strips to clean lowercase, underscore joins two words with the classic _. These are for handles, not passwords — use the password generator for anything that gates an account.')}</CalculatorNote>
    </div>
  )
}

// ══════════════════════ 🎅 Secret Santa Generator ══════════════════════

/**
 * 带互斥约束的闭环配对:assign[i] = i 送礼对象的下标。
 * 候选接收者按 crypto 洗牌、约束最多的人先安置 + 回溯,保证有解必找到、
 * 无解返回 null(不静默降级成"允许抽自己")。
 */
function findAssignment(n: number, bannedFor: (i: number) => Set<number>): number[] | null {
  const candidates: number[][] = []
  for (let i = 0; i < n; i++) {
    const list: number[] = []
    for (let j = 0; j < n; j++) {
      if (j !== i && !bannedFor(i).has(j)) list.push(j)
    }
    candidates.push(shuffled(list))
  }
  // 约束最多(候选最少)的送礼人先安置 —— 与图着色的 MRV 启发一致
  const order = [...Array(n).keys()].sort((a, b) => candidates[a].length - candidates[b].length)
  const used = new Array<boolean>(n).fill(false)
  const assign = new Array<number>(n).fill(-1)
  const dfs = (k: number): boolean => {
    if (k === n) return true
    const giver = order[k]
    for (const recv of candidates[giver]) {
      if (used[recv]) continue
      used[recv] = true
      assign[giver] = recv
      if (dfs(k + 1)) return true
      used[recv] = false
      assign[giver] = -1
    }
    return false
  }
  return dfs(0) ? assign : null
}

export function SecretSantaGeneratorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('secret-santa-generator', locale, key, fb)
  const sample = getCalculatorSample('secret-santa-generator')

  const [namesText, setNamesText] = useState(sample?.names ?? '')
  const [exclText, setExclText] = useState(sample?.exclusions ?? '')
  const [assign, setAssign] = useState<string[] | null>(null)
  const [error, setError] = useState('')
  const [revealIdx, setRevealIdx] = useState('')

  const names = useMemo(() => {
    const seen = new Set<string>()
    return namesText.split(/\r?\n/).map((x) => x.trim()).filter((x) => {
      if (!x) return false
      const k = x.toLowerCase()
      if (seen.has(k)) return false
      seen.add(k)
      return true
    })
  }, [namesText])

  // 互斥对解析:"A - B"(连字符两侧须有空格)/ "A -> B" / "A & B" / "A, B" / "A / B" 都收。
  // 裸 "-" 不当分隔符:否则带连字符的名字(Mary-Jane - Bob)被拆成 3 段永远报错。
  // 大小写不敏感匹配名单。
  const exclPairs = useMemo(() => exclText.split(/\r?\n/).map((x) => x.trim()).filter(Boolean), [exclText])

  const draw = useCallback(() => {
    setError('')
    if (names.length < 3) {
      setAssign(null)
      setError(`⚠️ ${L('errMin', 'Enter at least 3 participants.')}`)
      return
    }
    const lowerIdx = new Map<string, number>(names.map((nm, i) => [nm.toLowerCase(), i]))
    const banned: Set<number>[] = names.map(() => new Set<number>())
    for (const line of exclPairs) {
      const parts = line.split(/\s*->\s*|\s*[&,\/]\s*|\s+-\s+/).map((p) => p.trim()).filter(Boolean)
      if (parts.length !== 2) {
        setAssign(null)
        setError(`⚠️ ${L('errBadPair', 'Could not read pair: {line}').replace('{line}', line)}`)
        return
      }
      const a = lowerIdx.get(parts[0].toLowerCase())
      const b = lowerIdx.get(parts[1].toLowerCase())
      if (a === undefined || b === undefined) {
        setAssign(null)
        setError(`⚠️ ${L('errUnknown', 'Pair "{line}" uses a name that is not in the list.').replace('{line}', line)}`)
        return
      }
      banned[a].add(b)
      banned[b].add(a)
    }
    const result = findAssignment(names.length, (i) => banned[i])
    if (!result) {
      setAssign(null)
      setError(`⚠️ ${L('errImpossible', 'No valid draw exists with these exclusions — every pairing blocks someone. Loosen a rule and draw again.')}`)
      return
    }
    setAssign(result.map((recv) => names[recv]))
    setRevealIdx('')
  }, [names, exclPairs, locale])

  const revealTarget = assign && revealIdx !== '' ? assign[Number(revealIdx)] : ''
  const message = assign && revealIdx !== ''
    ? L('msgTemplate', '🎁 Secret Santa\n{from}, you are buying a gift for: {to}\nKeep it secret!')
        .replace('{from}', names[Number(revealIdx)] ?? '')
        .replace('{to}', revealTarget)
    : ''

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="ss-names" className="mb-2 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {L('namesLabel', 'Participants — one per line (min 3)')}
          </label>
          <textarea id="ss-names" value={namesText} onChange={(e) => setNamesText(e.target.value)} rows={8}
            placeholder={'Alice\nBob\nCarla\nDev\nEmma\nFrank'}
            className="w-full rounded-lg border p-4 text-sm outline-none transition focus:ring-2"
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }} />
          {names.length > 0 && (
            <p className="mt-1 text-xs" style={{ color: 'rgb(var(--text-faint))' }}>
              {L('nNames', '{n} participants').replace('{n}', String(names.length))}
              {exclPairs.length > 0 ? ` · ${L('nExcl', '{n} exclusion pairs').replace('{n}', String(exclPairs.length))}` : ''}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="ss-excl" className="mb-2 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {L('exclLabel', 'Exclusion pairs — one per line (optional)')}
          </label>
          <textarea id="ss-excl" value={exclText} onChange={(e) => setExclText(e.target.value)} rows={8}
            placeholder={'Alice - Bob\nCarla - Dev'}
            className="w-full rounded-lg border p-4 font-mono text-sm outline-none transition focus:ring-2"
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }} />
          <p className="mt-1 text-xs" style={{ color: 'rgb(var(--text-faint))' }}>
            {L('exclHint', 'Couples or teammates who must not draw each other, e.g. Alice - Bob. Separators: ->, &, comma, or a hyphen with spaces on both sides — hyphenated names like Mary-Jane keep working.')}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button type="button" onClick={draw} className="btn btn-primary">🎅 {L('drawBtn', 'Draw names')}</button>
        {assign && <button type="button" onClick={draw} className="btn btn-secondary">🔁 {L('redraw', 'Draw again')}</button>}
      </div>

      {error && (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-800/60 dark:bg-red-950/30 dark:text-red-300">{error}</div>
      )}

      {assign && (
        <div className="space-y-4 rounded-xl border p-4" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }}>
          {/* A-2:ToolLayout 只提供 h1,组件内首个标题层级应为 h2 */}
          <h2 className="text-sm font-bold uppercase tracking-wide" style={{ color: 'rgb(var(--text-muted))' }}>
            {L('revealTitle', 'Reveal one at a time — pass the device around')}
          </h2>
          <select
            aria-label={L('whoLabel', 'Who are you?')}
            value={revealIdx}
            onChange={(e) => setRevealIdx(e.target.value)}
            className="w-full max-w-xs rounded-lg border p-3 text-sm shadow-sm outline-none transition focus:ring-2"
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          >
            <option value="">{L('whoLabel', 'Who are you?')}</option>
            {names.map((nm, i) => <option key={nm} value={i}>{nm}</option>)}
          </select>
          {revealTarget && (
            <div role="status" aria-live="polite" className="rounded-xl border px-6 py-4" style={{ borderColor: 'rgb(var(--primary) / 0.3)', backgroundColor: 'rgb(var(--primary) / 0.06)' }}>
              <div className="text-[10px] font-medium uppercase tracking-widest" style={{ color: 'rgb(var(--text-faint))' }}>
                {L('givesTo', 'You are buying a gift for')}
              </div>
              <div className="mt-1 text-2xl font-bold" style={{ color: 'rgb(var(--primary))' }}>🎁 {revealTarget}</div>
              <div className="mt-3">
                <CopyButton value={message} label={L('copyMsg', 'Copy message')} />
              </div>
            </div>
          )}
        </div>
      )}
      <CalculatorNote>{L('note', '🎅 A closed-loop draw: everyone gives once and receives once, nobody draws themselves, and exclusion pairs (couples, teammates) never land on each other. Pairing is found with crypto-shuffled backtracking — it either returns a valid draw or tells you the rules are impossible. Results never leave this page.')}</CalculatorNote>
    </div>
  )
}
