'use client'

import { useState, useEffect, useMemo, useRef, type ComponentType } from 'react'
import { CopyButton } from '@/components/CopyButton'
import { PulseGlow } from '@/components/motion/PulseGlow'
import { AnimatedNumber } from '@/components/calculator/CalculatorField'
import { useApp } from '@/components/providers/AppProviders'
import { t, type Locale } from '@/lib/i18n'
import { tui } from '@/lib/i18n/tool-l10n'
import { countWords } from '@/lib/text-stats'

/**
 * 文本工具工厂
 *
 * 所有"输入文本 → 变换 → 输出文本"类工具共用此引擎。
 * 加新文本工具只需写一个 transform 纯函数。
 *
 * 本地化:
 *  - 工厂 chrome(Clear / placeholder / 字符·词数)走 dict;
 *  - 每工具的 inputLabel/outputLabel/note/placeholder:config 提供英文原值,
 *    若 config.slug 存在则经 tui() 取本地化,缺失回退英文(SSR 恒英文)。
 *  - defaultInput:初值恒英文(SSR/静态导出首帧一致,hydration 安全);挂载后及
 *    locale 运行时切换时,若输入仍 pristine(用户从未 onChange 编辑),替换为
 *    bundle 的 ui.defaultInput 本地化示例;用户编辑过则永不覆盖。
 *
 * 用法:
 *   export const UppercaseConverter = makeTextTool({
 *     slug: 'uppercase-converter',
 *     inputLabel: 'Convert to UPPERCASE',
 *     placeholder: 'Type or paste text...',
 *     transform: (text) => text.toUpperCase(),
 *     note: 'Converts all letters to uppercase.',
 *   })
 */
export interface TextToolConfig {
  /** 工具 slug(可选,提供后启用 per-tool 文案本地化) */
  slug?: string
  /** 输入框标签 */
  inputLabel?: string
  /** 输出框标签 */
  outputLabel?: string
  /** 输入占位符 */
  placeholder?: string
  /** 默认示例输入 */
  defaultInput?: string
  /**
   * 核心变换函数(纯函数)
   * 接收输入文本与当前 locale,返回输出文本。
   * locale 供需要本地化提示的 transform 使用(如「大小写转换仅对英文有效」)。
   */
  transform: (input: string, locale: Locale) => string
  /** 底部说明 */
  note?: string
  /** 是否显示字符/单词统计(默认 true) */
  showStats?: boolean
}

export function makeTextTool(config: TextToolConfig): ComponentType {
  function GeneratedTextTool() {
    const { locale } = useApp()
    const [input, setInput] = useState(config.defaultInput ?? '')
    // mounted 标记:部分 transform 依赖 document(如 HTMLTagStripper 的 DOMParser),
    // SSR 期 transform 抛错被 catch 吞掉,导致 SSR 与首帧输出不一致 → hydration mismatch。
    // 挂载前输出固定空串,挂载后再 transform,保证 SSR/CSR 首帧一致。
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    // D5 默认示例本地化:pristine 门控 —— 用户首次 onChange 编辑即永久失效。
    // 替换发生在 useEffect(挂载后/切换 locale 后),SSR 与 hydration 首帧恒为
    // 英文 config.defaultInput,无 mismatch;tui 缺译时返回英文原值,setInput
    // 同值 React 直接 bail out,不产生多余渲染。
    const pristineRef = useRef(true)
    useEffect(() => {
      if (!mounted || !config.slug || !config.defaultInput) return
      if (!pristineRef.current) return
      setInput(tui(config.slug, locale, 'defaultInput', config.defaultInput))
    }, [mounted, locale, config])

    const output = useMemo(() => {
      if (!mounted) return ''
      try {
        return config.transform(input, locale)
      } catch {
        return ''
      }
    }, [input, mounted, locale])

    const showStats = config.showStats !== false
    // 字符数按 Unicode 码点计([...input] 按码位拆分):emoji 等增补平面字符不再按 2 计
    const charCount = [...input].length
    // 词数走中英混合口径:纯中文不再恒为 1 词
    const wordCount = countWords(input)
    // 行数与阅读时长(200 wpm 口径;纯中文按 300 字/分钟计,与 WordCounter 同族)
    const lineCount = input === '' ? 0 : input.split('\n').length
    const readingSec = Math.round(
      (locale === 'zh' ? charCount / 5 : wordCount / 200) * 60,
    )
    const readingLabel =
      readingSec < 60 ? `${Math.max(readingSec, input ? 1 : 0)}s` : `${Math.floor(readingSec / 60)}m ${readingSec % 60}s`
    // 数字格式跟随应用语言(en 固定 en-US,保证 SSR 首屏与英文输出不变)
    const numberLocale = locale === 'en' ? 'en-US' : locale
    const fmtC = charCount.toLocaleString(numberLocale)
    const fmtW = wordCount.toLocaleString(numberLocale)
    const fmtL = lineCount.toLocaleString(numberLocale)
    // 输出长度(码点口径,与输入一致)——驱动长度对比条
    const outChars = [...output].length

    // 每工具可本地化字符串:有 slug → tui 取本地化;无 → config 英文原值。
    const inputLabel = config.slug && config.inputLabel
      ? tui(config.slug, locale, 'inputLabel', config.inputLabel)
      : (config.inputLabel ?? 'Input')
    const outputLabel = config.slug && config.outputLabel
      ? tui(config.slug, locale, 'outputLabel', config.outputLabel)
      : (config.outputLabel ?? 'Result')
    const placeholder = config.slug && config.placeholder
      ? tui(config.slug, locale, 'placeholder', config.placeholder)
      : (config.placeholder ?? t(locale, 'textToolInputPlaceholder'))
    const note = config.slug && config.note
      ? tui(config.slug, locale, 'note', config.note)
      : config.note

    return (
      <div className="space-y-5">
        {/* 输入区 */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label htmlFor="text-input" className="text-sm font-medium text-slate-700 dark:text-slate-300">
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
            id="text-input"
            value={input}
            onChange={(e) => {
              pristineRef.current = false
              setInput(e.target.value)
            }}
            placeholder={placeholder}
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
              {outputLabel}
            </label>
            <CopyButton value={output} disabled={!output} />
          </div>
          {/* Pulse Border —— 结果文本变化时,输出框四周一次性高亮微光闪烁,
              提示用户「结果已更新」(transform/opacity only,CLS 安全)。
              PulseGlow 包裹 textarea,overlay 用 absolute inset-0 贴合边框。 */}
          <PulseGlow trigger={output}>
            <textarea
              readOnly
              value={output}
              placeholder={t(locale, 'textToolResultPlaceholder')}
              rows={6}
              className="w-full rounded-lg border-2 p-4 font-mono text-sm outline-none"
              style={{
                borderColor: 'rgb(var(--border))',
                backgroundColor: 'rgb(var(--bg-subtle))',
                color: 'rgb(var(--text))',
              }}
            />
          </PulseGlow>
        </div>

        {/* 统计仪表条:iOS 风格四格统计(字符/词/行/阅读时长,数字滚动)+
            输入↔输出长度对比条(压缩/展开工具一眼看出变换幅度,宽度过渡动画) */}
        {showStats && (
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[
              { label: t(locale, 'textToolCharsLabel'), value: charCount, display: fmtC },
              { label: t(locale, 'textToolWordsLabel'), value: wordCount, display: fmtW },
              { label: t(locale, 'textToolLinesLabel'), value: lineCount, display: fmtL },
              { label: t(locale, 'textToolReadingLabel'), value: readingSec, display: readingLabel },
            ].map((cell) => (
              <div
                key={cell.label}
                className="rounded-xl border border-border/60 bg-card/80 p-3 text-center shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="text-xl font-bold tabular-nums sm:text-2xl" style={{ color: 'rgb(var(--text))' }}>
                  <AnimatedNumber value={cell.display} />
                </div>
                <div className="mt-0.5 text-[11px] font-medium uppercase tracking-wide" style={{ color: 'rgb(var(--text-faint))' }}>
                  {cell.label}
                </div>
              </div>
            ))}
          </div>
        )}
        {showStats && (
          <div
            className="rounded-xl border p-4"
            style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }}
          >
            {[
              { label: t(locale, 'textToolInputLen'), count: charCount, color: 'rgb(var(--primary))' },
              { label: t(locale, 'textToolOutputLen'), count: outChars, color: '#22c55e' },
            ].map((row) => {
              const max = Math.max(charCount, outChars, 1)
              return (
                <div key={row.label} className="flex items-center gap-3">
                  <span className="w-20 shrink-0 truncate text-xs font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
                    {row.label}
                  </span>
                  <div className="h-2.5 flex-1 overflow-hidden rounded-full" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
                    <div
                      className="h-full rounded-full transition-all duration-300"
                      style={{
                        width: `${Math.min(100, (row.count / max) * 100)}%`,
                        backgroundColor: row.color,
                        transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
                      }}
                    />
                  </div>
                  <span className="w-14 shrink-0 text-right text-xs font-semibold tabular-nums" style={{ color: 'rgb(var(--text-muted))' }}>
                    {row.count.toLocaleString(numberLocale)}
                  </span>
                </div>
              )
            })}
          </div>
        )}

        {/* 说明 */}
        {note && (
          <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
            {note}
          </p>
        )}
      </div>
    )
  }

  return GeneratedTextTool
}
