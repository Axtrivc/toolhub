'use client'

import { useState, useEffect, useMemo, type ComponentType } from 'react'
import { CopyButton } from '@/components/CopyButton'
import { PulseGlow } from '@/components/motion/PulseGlow'
import { useApp } from '@/components/providers/AppProviders'
import { t } from '@/lib/i18n'
import { tui } from '@/lib/i18n/tool-l10n'

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
   * 接收输入文本,返回输出文本
   */
  transform: (input: string) => string
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

    const output = useMemo(() => {
      if (!mounted) return ''
      try {
        return config.transform(input)
      } catch {
        return ''
      }
    }, [input, mounted])

    const showStats = config.showStats !== false
    const charCount = input.length
    const wordCount = input.trim() ? input.trim().split(/\s+/).length : 0

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
            <label htmlFor="text-input" className="text-sm font-medium text-slate-700">
              {inputLabel}
            </label>
            {input && (
              <button
                type="button"
                onClick={() => setInput('')}
                className="-my-1 rounded-md px-2 py-1 text-xs text-slate-400 hover:text-red-500 sm:text-sm"
              >
                {t(locale, 'textToolClear')}
              </button>
            )}
          </div>
          <textarea
            id="text-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
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
                borderColor: 'rgb(219 234 254)', // brand-100
                backgroundColor: 'rgb(219 234 254 / 0.4)', // brand-50/40
                color: 'rgb(var(--text))',
              }}
            />
          </PulseGlow>
        </div>

        {/* 统计 */}
        {showStats && (
          <div className="flex gap-4 text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
            <span>{t(locale, 'textToolChars', { count: charCount.toLocaleString() })}</span>
            <span>{t(locale, 'textToolWords', { count: wordCount.toLocaleString() })}</span>
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
