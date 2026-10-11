'use client'

import { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import { CopyButton } from '@/components/CopyButton'
import { useApp } from '@/components/providers/AppProviders'
import { tuiFromEntry, type ToolL10n } from '@/lib/i18n/tool-l10n-core'
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
  /** 与 slug 同源的本地化词典(lib/i18n/tools-l10n/<slug>.ts 导出值;未传 → 回退英文) */
  l10n?: ToolL10n
}

/**
 * P-1 大输入防线(R6):本组件服务 Base64/URL/HTML 六件套,transform 虽多为线性,
 * 但 TextEncoder→btoa/atob→解码产物→只读 textarea 渲染整条链路同步执行,
 * 数 MB 粘贴会冻结 UI。超过阈值跳过 transform,输出走既有 ⚠️ 通道提示。
 * 阈值与 line-diff 的 100k 先例对齐;仅影响本组六个编解码工具。
 */
const MAX_INPUT_CHARS = 100_000

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
 * 默认示例本地化(与 makeTextTool 同机制):encode/decode 两方向的默认示例
 * 初值恒英文(SSR/hydration 首帧一致);挂载后及 locale 切换时,pristine 输入
 * 替换为 bundle 的 ui.defaultInputEncode / ui.defaultInputDecode;用户编辑过
 * (onChange 触发)后永不覆盖。
 *
 * 用法见 components/devtools/encoderTools.tsx 的 Base64CodecTool / URLCodecTool / HTMLEscapeTool。
 */
export function EncoderDecoderTool({ encode, decode, initialMode = 'encode', slug = '', l10n }: EncoderDecoderToolProps) {
  const { locale } = useApp()
  // l10n 未传 → tuiFromEntry 返回 fallback(英文原值),行为与改造前一致。
  const L = (key: string, fb: string) => tuiFromEntry(l10n, locale, key, fb)
  const [mode, setMode] = useState<'encode' | 'decode'>(initialMode)
  const spec = mode === 'encode' ? encode : decode
  const [input, setInput] = useState(spec.defaultInput)
  // mounted 标记:部分 transform 依赖 document(SSR 期抛错被吞 → hydration mismatch)。
  // 挂载前输出固定空串,挂载后再 transform,保证 SSR/CSR 首帧一致。
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  // D5 默认示例本地化:按方向取 defaultInputEncode/defaultInputDecode,
  // pristine 门控(用户首次 onChange 编辑即永久失效)。替换发生在 useEffect,
  // SSR/hydration 首帧恒英文 config 默认示例;tui 缺译回退英文原值,同值
  // setInput 不触发渲染。
  const pristineRef = useRef(true)
  useEffect(() => {
    if (!mounted || !pristineRef.current) return
    const fallback = mode === 'encode' ? encode.defaultInput : decode.defaultInput
    setInput(tuiFromEntry(l10n, locale, mode === 'encode' ? 'defaultInputEncode' : 'defaultInputDecode', fallback))
  }, [mounted, mode, locale, slug, encode, decode])

  // 某方向当前生效的默认示例(含本地化),供 switchMode 判断「输入未被改动」
  const defaultFor = useCallback(
    (m: 'encode' | 'decode') => {
      const fallback = m === 'encode' ? encode.defaultInput : decode.defaultInput
      return tuiFromEntry(l10n, locale, m === 'encode' ? 'defaultInputEncode' : 'defaultInputDecode', fallback)
    },
    [slug, locale, encode, decode],
  )

  const output = useMemo<{ value: string; isError: boolean }>(() => {
    if (!mounted) return { value: '', isError: false }
    // P-1 大输入防线:超阈值不同步执行 transform,直接给 ⚠️ 提示(与 line-diff 同款思路)
    if (input.length > MAX_INPUT_CHARS) {
      return {
        value: tuiFromEntry(l10n,
          locale,
          'inputTooLarge',
          `⚠️ Input is too large — the supported size is up to ${MAX_INPUT_CHARS.toLocaleString('en-US')} characters. Trim the input to convert.`,
        ),
        isError: true,
      }
    }
    try {
      // 部分 transform 不抛异常而是返回 ⚠️ 开头的错误文案(Base64/URL 解码的
      // 定位提示):按前缀一并归入 isError,对调按钮/复制按钮据此禁用
      const value = spec.transform(input)
      return { value, isError: value.startsWith('⚠️') }
    } catch {
      // 解码输入非法时给出可见提示,而不是静默输出空串
      return { value: tuiFromEntry(l10n, locale, 'invalidInput', '⚠️ Invalid input for this direction'), isError: true }
    }
  }, [input, spec, mounted, slug, locale])

  /**
   * ⇄ 对调闭环:当前输出整体填充为新输入,方向自动翻转
   * (encode 的产物 → decode 的输入,反之亦然),编码→解码→再编码一路通。
   * isError 门控:错误提示文案不是有效数据,不参与对调。
   */
  const swapDirection = useCallback(() => {
    if (!output.value || output.isError) return
    pristineRef.current = false // 对调填入的是真实数据,默认示例的 pristine 替换机制永久失效
    setInput(output.value)
    setMode(mode === 'encode' ? 'decode' : 'encode')
  }, [output, mode])

  const switchMode = useCallback(
    (next: 'encode' | 'decode') => {
      if (next === mode) return
      const nextSpec = next === 'encode' ? encode : decode
      setMode(next)
      // 切换方向时保留用户已粘贴/编辑的输入,避免输入丢失;仅当输入仍是
      // 当前方向的默认示例(未被改动)或恰为另一方向的默认示例时,才重置为
      // 目标方向的默认示例。本地化后默认示例 ≠ config 英文原值,两种口径都要比对
      const untouchedSample = [spec.defaultInput, nextSpec.defaultInput, defaultFor(mode), defaultFor(next)].includes(input)
      if (untouchedSample) setInput(defaultFor(next))
    },
    [mode, encode, decode, input, spec, defaultFor],
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
              className="-my-1 rounded-md px-2 py-1.5 text-xs text-slate-500 hover:text-red-500 dark:text-slate-400 sm:text-sm"
            >
              {L('clear', 'Clear')}
            </button>
          )}
        </div>
        <textarea
          id="text-input"
          value={input}
          onChange={(e) => {
            pristineRef.current = false
            setInput(e.target.value)
          }}
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

      {/* ⇄ 对调按钮(输入区与输出区之间):当前输出 → 新输入,方向自动翻转,
          打通「编码 → 解码 → 再编码」的往返闭环 */}
      <div className="flex justify-center">
        <button
          type="button"
          onClick={swapDirection}
          disabled={!output.value || output.isError}
          className="rounded-full border border-brand-500 bg-brand-50 px-5 py-2 text-sm font-semibold text-brand-700 shadow-sm transition hover:bg-brand-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-brand-500 dark:bg-brand-950/40 dark:text-brand-300 dark:hover:bg-brand-950/70"
          aria-label={mode === 'encode' ? L('swapToDecode', '⇄ Swap to Decode') : L('swapToEncode', '⇄ Swap to Encode')}
        >
          {mode === 'encode' ? L('swapToDecode', '⇄ Swap to Decode') : L('swapToEncode', '⇄ Swap to Encode')}
        </button>
      </div>

      {/* 输出区 */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {L(mode === 'encode' ? 'encodeOutputLabel' : 'decodeOutputLabel', spec.outputLabel)}
          </label>
          <CopyButton value={output.value} disabled={!output.value || output.isError} />
        </div>
        <textarea
          readOnly
          value={output.value}
          placeholder={L('resultPlaceholder', 'Result will appear here...')}
          rows={6}
          className="w-full rounded-lg border-2 p-4 font-mono text-sm outline-none"
          style={{
            // 与 makeTextTool 输出框同一套令牌(--border / --bg-subtle),暗色自动适配,
            // 不再用硬编码 brand-100 浅蓝(暗色主题下是刺眼浅蓝块)
            borderColor: 'rgb(var(--border))',
            backgroundColor: 'rgb(var(--bg-subtle))',
            color: 'rgb(var(--text))',
          }}
        />
      </div>

      {/* 统计 */}
      <div className="flex gap-4 text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
        <span>{charCount.toLocaleString('en-US')} {L('characters', 'characters')}</span>
        <span>{wordCount.toLocaleString('en-US')} {L('words', 'words')}</span>
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
