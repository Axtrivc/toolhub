'use client'

import { useState, useEffect, useMemo, useRef } from 'react'
import { CopyButton } from '@/components/CopyButton'
import { useApp } from '@/components/providers/AppProviders'
import { t } from '@/lib/i18n'
import { tuiFromEntry } from '@/lib/i18n/tool-l10n-core'
import type { Locale } from '@/lib/i18n'
import { GpsCoordinateConverterL10n } from '@/lib/i18n/tools-l10n/gps-coordinate-converter'

/**
 * 第三十批(B10)文本变换类工具:GPS 坐标格式互转
 * (本批其余 7 个计算器在 components/calculators/batch30Calculators.tsx)
 */

const HEMI_RE = /^[NSEW]$/

interface ParsedCoord {
  dd: number
  hemisphere: string
}

/**
 * 解析单坐标片段(度 [分 [秒]] + 可选方位字母,字母可在开头或结尾):
 *  - 十进制度: 40.7128 / -74.006
 *  - 度分:     40 42.768 N / N 40 42.768
 *  - 度分秒:   40° 42' 46.1" N / 74d 0m 21.6s W
 * 调用前保证方位字母已分离为独立 token(detachHemispheres)。
 */
function parseCoordPart(tokens: string[], southOrWest: string, northOrEast: string): ParsedCoord | null {
  if (tokens.length === 0) return null
  const toks = [...tokens]
  let hemisphere = ''
  if (HEMI_RE.test(toks[0])) {
    hemisphere = toks[0]
    toks.shift()
  }
  if (toks.length > 0 && HEMI_RE.test(toks[toks.length - 1])) {
    if (hemisphere) return null // 两个方位字母 → 结构错
    hemisphere = toks[toks.length - 1]
    toks.pop()
  }
  // 剥掉 ° ' " 与 d/m/s 记号后取数字
  const nums = toks
    .map((t) => t.replace(/[°ºd'′"″mMsS]/g, ''))
    .filter((t) => t !== '')
    .map(Number)
  if (nums.length === 0 || nums.length > 3 || nums.some((n) => !isFinite(n))) return null
  const [deg, min = 0, sec = 0] = nums
  if (Math.abs(min) >= 60 || Math.abs(sec) >= 60) return null
  let dd = Math.abs(deg) + min / 60 + sec / 3600
  if (deg < 0) dd = -dd // 前置负号即方向
  if (hemisphere) {
    if (deg < 0) return null // 负号 + 方位字母重复表达方向 → 歧义
    if (hemisphere === southOrWest[0]) dd = -dd
  }
  return { dd, hemisphere: hemisphere || (dd >= 0 ? northOrEast : southOrWest) }
}

/** 把粘连的方位字母拆成独立 token:"40.7128°N" → "40.7128° N";方向同理开头 */
function detachHemispheres(s: string): string {
  return s
    .replace(/([NSEWnsew])(?=[0-9])/g, '$1 ')
    .replace(/([0-9°º'"″d.])([NSEWnsew])\b/gi, '$1 $2')
}

/** 带符号十进制度 → "D° M′ S.S″ H"(秒 1 位小数,进位到 60 归并;符号决定方位) */
function toDMS(dd: number, positive: string, negative: string): string {
  const abs = Math.abs(dd)
  let d = Math.floor(abs)
  let m = Math.floor((abs - d) * 60)
  let s = Math.round(((abs - d) * 60 - m) * 60 * 10) / 10
  if (s >= 60) { s -= 60; m += 1 }
  if (m >= 60) { m -= 60; d += 1 }
  const hemi = dd >= 0 ? positive : negative
  return `${d}° ${m}′ ${s.toFixed(1)}″ ${hemi}`
}

/** 带符号十进制度 → "D° MMM.mmm′ H" */
function toDDM(dd: number, positive: string, negative: string): string {
  const abs = Math.abs(dd)
  const d = Math.floor(abs)
  const m = (abs - d) * 60
  const hemi = dd >= 0 ? positive : negative
  return `${d}° ${m.toFixed(3)}′ ${hemi}`
}

// ⚠️ 错误态文案:说明行随 locale 本地化(l10n bundle 的 'usage' 键),
// 格式示例三语通用保持不变 —— 与 makeTextTool 其余可见串同一条本地化链路
const USAGE_FORMATS = '  40.7128, -74.0060\n' +
  '  40.7128° N, 74.0060° W\n' +
  "  40° 42.768' N, 74° 0.360' W\n" +
  '  40° 42\' 46.1" N, 74° 0\' 21.6" W'
const USAGE_EN = '⚠️ Could not parse that coordinate. Accepted formats:\n' + USAGE_FORMATS
const usageText = (locale: Locale): string =>
  tuiFromEntry(GpsCoordinateConverterL10n, locale, 'usage', USAGE_EN)

function convertGps(input: string, locale: Locale): string {
  const usage = usageText(locale)
  const raw = input.trim()
  if (raw === '') return ''
  const tokens = detachHemispheres(raw)
    .replace(/[,;]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    // 方位字母统一大写("n 40" / "40 n" 都按 N 处理)
    .map((t) => (/^[nsew]$/i.test(t) ? t.toUpperCase() : t))
  if (tokens.length === 0) return ''
  // 分组状态机:字母在数字前=开启一组、在数字后=闭合一组;第二个字母开启经度组
  let latTokens: string[] = []
  let lonTokens: string[] = []
  let inLon = false
  let hemiInGroup = false // 当前组已有方位字母
  let hemiTrailing = false // 该字母跟在数字后(闭合型)
  let numInGroup = false
  for (const t of tokens) {
    const isHemi = HEMI_RE.test(t)
    if (inLon) {
      lonTokens.push(t)
      continue
    }
    if (isHemi) {
      if (hemiInGroup) {
        // 纬度组已有字母 → 本字母开启经度组
        inLon = true
        lonTokens.push(t)
        hemiInGroup = true
        hemiTrailing = false
        numInGroup = false
      } else {
        hemiInGroup = true
        hemiTrailing = numInGroup
        latTokens.push(t)
      }
    } else if (hemiInGroup && hemiTrailing) {
      // 闭合型字母之后的数字属于经度组
      inLon = true
      lonTokens.push(t)
      hemiInGroup = false
      hemiTrailing = false
      numInGroup = true
    } else {
      latTokens.push(t)
      numInGroup = true
    }
  }
  // 全程无方位字母:按数字个数对半分(2 个 = 1+1;偶数个 = 半半)
  if (!hemiInGroup && !inLon && lonTokens.length === 0) {
    if (tokens.length === 2) {
      latTokens = [tokens[0]]
      lonTokens = [tokens[1]]
    } else if (tokens.length >= 4 && tokens.length % 2 === 0) {
      const half = tokens.length / 2
      latTokens = tokens.slice(0, half)
      lonTokens = tokens.slice(half)
    }
  }
  const lat = latTokens.length ? parseCoordPart(latTokens, 'S', 'N') : null
  const lon = lonTokens.length ? parseCoordPart(lonTokens, 'W', 'E') : null
  if (!lat || Math.abs(lat.dd) > 90 || (lonTokens.length > 0 && (!lon || Math.abs(lon.dd) > 180))) {
    return usage
  }
  const lines: string[] = []
  lines.push(`Decimal degrees (DD):  ${lat.dd.toFixed(6)}${lon ? `, ${lon.dd.toFixed(6)}` : ''}`)
  lines.push(`Degrees decimal minutes (DDM):  ${toDDM(lat.dd, 'N', 'S')}${lon ? `, ${toDDM(lon.dd, 'E', 'W')}` : ''}`)
  lines.push(`Degrees/minutes/seconds (DMS):  ${toDMS(lat.dd, 'N', 'S')}${lon ? `, ${toDMS(lon.dd, 'E', 'W')}` : ''}`)
  if (lon) {
    lines.push(`GeoJSON/GPX pair (lon first):  [${lon.dd.toFixed(6)}, ${lat.dd.toFixed(6)}]`)
  }
  return lines.join('\n')
}

const DEFAULT_INPUT_EN = '40.7128° N, 74.0060° W'
const NOTE_EN = '🧭 Decimal degrees ↔ DMS ↔ DDM, with N/S/E/W hemisphere letters parsed in any position (glued to the number is fine). Latitude must stay within ±90°, longitude ±180°; the 6-decimal DD output resolves to roughly 0.11 m.'
// 坐标输入天然极短:2000 字符门控拦住误粘贴大文本(分词+多正则逐 token
// 处理,大输入会卡顿),与 batch32 校验器族同款口径
const MAX_INPUT_CHARS = 2000

/**
 * GPS 坐标转换器专用客户端 —— 刻意不走 makeTextTool(审计 B10):
 *  - 共享工厂输出框是 rows=6 的 textarea:360px 下 4 种格式折 ~13 行,
 *    末行被框底切半、GeoJSON 行完全不可见;本工具输出天然多行,改用
 *    自动高度的输出块,内容全部可见、无需框内滚动;
 *  - 不带文本工具的字符/词数/阅读时长统计(对坐标换算无意义);
 *  - l10n 键(inputLabel/outputLabel/placeholder/defaultInput/note/usage/
 *    inputTooLarge)与 makeTextTool 版完全同名,词典零改动。
 */
export function GpsCoordinateConverterClient() {
  const { locale } = useApp()
  const [input, setInput] = useState(DEFAULT_INPUT_EN)
  // 挂载门控:SSR/首帧输出恒空,挂载后再 transform(与 makeTextTool 同款
  // hydration 策略)
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  // 默认示例本地化:pristine 门控 —— 用户首次编辑即永久失效(同 makeTextTool)
  const pristineRef = useRef(true)
  useEffect(() => {
    if (!mounted) return
    if (pristineRef.current) {
      setInput(tuiFromEntry(GpsCoordinateConverterL10n, locale, 'defaultInput', DEFAULT_INPUT_EN))
    }
  }, [mounted, locale])

  const output = useMemo(() => {
    if (!mounted) return ''
    try {
      if (input.length > MAX_INPUT_CHARS) {
        const n = MAX_INPUT_CHARS.toLocaleString('en-US')
        return tuiFromEntry(GpsCoordinateConverterL10n, locale, 'inputTooLarge',
          `⚠️ Input is too large — the supported size is up to ${n} characters. Trim the input to compute.`)
      }
      return convertGps(input, locale)
    } catch {
      return ''
    }
  }, [input, mounted, locale])

  const inputLabel = tuiFromEntry(GpsCoordinateConverterL10n, locale, 'inputLabel', 'Coordinate (any format)')
  const outputLabel = tuiFromEntry(GpsCoordinateConverterL10n, locale, 'outputLabel', 'Converted to all formats')
  const placeholder = tuiFromEntry(GpsCoordinateConverterL10n, locale, 'placeholder', '40.7128, -74.0060 …')
  const note = tuiFromEntry(GpsCoordinateConverterL10n, locale, 'note', NOTE_EN)

  return (
    <div className="space-y-5">
      {/* 输入区 */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="gps-input" className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {inputLabel}
          </label>
          {input && (
            <button
              type="button"
              onClick={() => setInput('')}
              className="-my-1 rounded-md px-2 py-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-red-500 sm:text-sm"
            >
              {t(locale, 'textToolClear')}
            </button>
          )}
        </div>
        <textarea
          id="gps-input"
          value={input}
          onChange={(e) => {
            pristineRef.current = false
            setInput(e.target.value)
          }}
          placeholder={placeholder}
          rows={3}
          className="w-full rounded-lg border p-4 font-mono text-sm shadow-sm outline-none transition focus:ring-2"
          style={{
            borderColor: 'rgb(var(--border-strong))',
            backgroundColor: 'rgb(var(--bg-card))',
            color: 'rgb(var(--text))',
          }}
        />
      </div>

      {/* 输出区:自动高度,4 种格式全部可见(替代 rows=6 textarea 的框内滚动) */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {outputLabel}
          </span>
          <CopyButton value={output} disabled={!output} />
        </div>
        <div
          className="min-h-[9.75rem] w-full rounded-lg border-2 p-4 font-mono text-sm"
          style={{
            borderColor: 'rgb(var(--border))',
            backgroundColor: 'rgb(var(--bg-subtle))',
            color: 'rgb(var(--text))',
          }}
        >
          {output ? (
            <p className="whitespace-pre-wrap break-words leading-5">{output}</p>
          ) : (
            <p className="leading-5" style={{ color: 'rgb(var(--text-faint))' }}>
              {t(locale, 'textToolResultPlaceholder')}
            </p>
          )}
        </div>
      </div>

      {/* 说明 */}
      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        {note}
      </p>
    </div>
  )
}
