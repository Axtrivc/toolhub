'use client'

import { useState, useEffect, useMemo, useCallback } from 'react'
import { CopyButton } from '@/components/CopyButton'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'
import { countWords } from '@/lib/text-stats'

/**
 * 单个方向的变换规格(与 makeTextTool 的相关字段同构)。
 */
export interface ModeSpec {
  /** 输入框标签 */
  inputLabel: string
  /** 输出框标签 */
  outputLabel: string
  /** 该方向的默认示例输入(切到本方向时自动填充) */
  defaultInput: string
  /** 核心变换纯函数 */
  transform: (input: string) => string
  /** 该方向底部说明(可选) */
  note?: string
}

interface EncoderDecoderToolProps {
  /** Encode 方向规格 */
  encode: ModeSpec
  /** Decode 方向规格 */
  decode: ModeSpec
  /** 初始方向(由各自 pSEO 路由决定,encode 入口传 'encode',decode 入口传 'decode') */
  initialMode?: 'encode' | 'decode'
  /** 工具 slug(用于交互界面本地化;未传 → 回退英文原值) */
  slug?: string
}

/**
 * 编码/解码双向工具 —— 内置【Mode Toggle (Encode ↔ Decode)】
 *
 * 设计动机:Base64/URL/HTML 等都是对立性工具,用户从 encode 入口进来
 * 经常其实想 decode(反之亦然)。本组件在输入区上方放一个方向切换按钮组,
 * 切换时把输入重置为目标方向的默认示例,transform 同步切换。
 *
 * 视觉外壳与 makeTextTool 一致(textarea + CopyButton + stats + note),
 * 以保持全站文本工具的统一观感。
 *
 * 用法见 components/devtools/encoderTools.tsx 的 Base64CodecTool / URLCodecTool / HTMLEscapeTool。
 */
export function EncoderDecoderTool({ encode, decode, initialMode = 'encode', slug = '' }: EncoderDecoderToolProps) {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui(slug, locale, key, fb)
  const [mode, setMode] = useState<'encode' | 'decode'>(initialMode)
  const spec = mode === 'encode' ? encode : decode
  const [input, setInput] = useState(spec.defaultInput)
  // mounted 标记:部分 transform 依赖 document(SSR 期抛错被吞 → hydration mismatch)。
  // 挂载前输出固定空串,挂载后再 transform,保证 SSR/CSR 首帧一致。
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const output = useMemo(() => {
    if (!mounted) return ''
    try {
      return spec.transform(input)
    } catch {
      // 解码输入非法时给出可见提示,而不是静默输出空串
      return tui(slug, locale, 'invalidInput', '⚠️ Invalid input for this direction')
    }
  }, [input, spec, mounted, slug, locale])

  const switchMode = useCallback(
    (next: 'encode' | 'decode') => {
      if (next === mode) return
      const nextSpec = next === 'encode' ? encode : decode
      setMode(next)
      // 切换方向时保留用户已粘贴/编辑的输入,避免输入丢失;仅当输入仍是
      // 当前方向的默认示例(未被改动)或恰为另一方向的默认示例时,才重置为
      // 目标方向的默认示例
      const untouchedSample = input === spec.defaultInput || input === nextSpec.defaultInput
      if (untouchedSample) setInput(nextSpec.defaultInput)
    },
    [mode, encode, decode, input, spec],
  )

  const charCount = input.length
  // 中英混合口径:纯中文不再恒为 1 词
  const wordCount = countWords(input)

  return (
    <div className="space-y-5">
      {/* Mode Toggle(Encode ↔ Decode) */}
      <div className="flex items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide" style={{ color: 'rgb(var(--text-subtle))' }}>
          {L('mode', 'Mode')}
        </span>
        <div
          className="inline-flex overflow-hidden rounded-lg border"
          style={{ borderColor: 'rgb(var(--border-strong))' }}
          role="group"
          aria-label={L('modeAria', 'Encode / Decode mode')}
        >
          {(['encode', 'decode'] as const).map((m) => {
            const active = m === mode
            return (
              <button
                key={m}
                type="button"
                onClick={() => switchMode(m)}
                aria-pressed={active}
                className={`px-4 py-1.5 text-sm font-medium capitalize transition-colors ${
                  active ? 'text-white' : ''
                }`}
                style={
                  active
                    ? { backgroundColor: 'rgb(37 99 235)' } // brand-600
                    : { backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text-muted))' }
                }
              >
                {L(m === 'encode' ? 'encode' : 'decode', m)}
              </button>
            )
          })}
        </div>
      </div>

      {/* 输入区 */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="text-input" className="text-sm font-medium text-slate-700 dark:text-slate-300">
            {L(mode === 'encode' ? 'encodeInputLabel' : 'decodeInputLabel', spec.inputLabel)}
          </label>
          {input && (
            <button
              type="button"
              onClick={() => setInput('')}
              className="-my-1 rounded-md px-2 py-1 text-xs text-slate-400 hover:text-red-500 sm:text-sm"
            >
              {L('clear', 'Clear')}
            </button>
          )}
        </div>
        <textarea
          id="text-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={L('placeholder', 'Type or paste here...')}
          rows={6}
          className="w-full rounded-lg border p-4 font-mono text-sm shadow-sm outline-none transition focus:ring-2"
          style={{
            borderColor: 'rgb(var(--border-strong))',
            backgroundColor: 'rgb(var(--bg-card))',
            color: 'rgb(var(--text))',
          }}
        />
      </div>

      {/* 输出区 */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {L(mode === 'encode' ? 'encodeOutputLabel' : 'decodeOutputLabel', spec.outputLabel)}
          </label>
          <CopyButton value={output} disabled={!output} />
        </div>
        <textarea
          readOnly
          value={output}
          placeholder={L('resultPlaceholder', 'Result will appear here...')}
          rows={6}
          className="w-full rounded-lg border-2 p-4 font-mono text-sm outline-none"
          style={{
            borderColor: 'rgb(219 234 254)', // brand-100
            backgroundColor: 'rgb(219 234 254 / 0.4)', // brand-50/40
            color: 'rgb(var(--text))',
          }}
        />
      </div>

      {/* 统计 */}
      <div className="flex gap-4 text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
        <span>{charCount.toLocaleString()} {L('characters', 'characters')}</span>
        <span>{wordCount.toLocaleString()} {L('words', 'words')}</span>
      </div>

      {/* 说明 */}
      {spec.note && (
        <p
          className="rounded-md p-3 text-xs"
          style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}
        >
          {L(mode === 'encode' ? 'encodeNote' : 'decodeNote', spec.note)}
        </p>
      )}
    </div>
  )
}
