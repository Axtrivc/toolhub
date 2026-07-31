'use client'

import { useState, useMemo, type ComponentType } from 'react'
import { CopyButton } from '@/components/CopyButton'

/**
 * 文本工具工厂
 *
 * 所有"输入文本 → 变换 → 输出文本"类工具共用此引擎。
 * 加新文本工具只需写一个 transform 纯函数。
 *
 * 用法:
 *   export const UppercaseConverter = makeTextTool({
 *     label: 'Convert to UPPERCASE',
 *     placeholder: 'Type or paste text...',
 *     transform: (text) => text.toUpperCase(),
 *     note: 'Converts all letters to uppercase.',
 *   })
 */
export interface TextToolConfig {
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
    const [input, setInput] = useState(config.defaultInput ?? '')

    const output = useMemo(() => {
      try {
        return config.transform(input)
      } catch {
        return ''
      }
    }, [input])

    const showStats = config.showStats !== false
    const charCount = input.length
    const wordCount = input.trim() ? input.trim().split(/\s+/).length : 0

    return (
      <div className="space-y-5">
        {/* 输入区 */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label htmlFor="text-input" className="text-sm font-medium text-slate-700">
              {config.inputLabel ?? 'Input'}
            </label>
            {input && (
              <button
                type="button"
                onClick={() => setInput('')}
                className="text-xs text-slate-400 hover:text-red-500"
              >
                Clear
              </button>
            )}
          </div>
          <textarea
            id="text-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={config.placeholder ?? 'Type or paste your text here...'}
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
              {config.outputLabel ?? 'Result'}
            </label>
            <CopyButton value={output} disabled={!output} />
          </div>
          <textarea
            readOnly
            value={output}
            placeholder="Result will appear here..."
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
        {showStats && (
          <div className="flex gap-4 text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
            <span>{charCount.toLocaleString()} characters</span>
            <span>{wordCount.toLocaleString()} words</span>
          </div>
        )}

        {/* 说明 */}
        {config.note && (
          <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
            {config.note}
          </p>
        )}
      </div>
    )
  }

  return GeneratedTextTool
}
