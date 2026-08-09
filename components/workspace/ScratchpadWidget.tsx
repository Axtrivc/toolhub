'use client'

/**
 * ScratchpadWidget —— 双栏仪表盘右栏:随手记 + 快捷文本工具
 *
 * 功能:
 *  - 文本输入即写 localStorage(useWorkspace → toolhub-scratchpad),无需手动保存;
 *  - 快捷工具栏(mono 微按钮,直接改写文本):
 *      Format JSON(JSON.parse → stringify 2 空格)
 *      Base64 Enc / Dec(Unicode 安全:TextEncoder/TextDecoder 中转)
 *      UPPER / lower(大小写切换)
 *      Trim(行尾空白 + 首尾 + 多余空行清理)
 *      Copy(带 clipboard 回退)/ Clear
 *  - 错误反馈:非法 JSON / Base64 时工具栏右侧闪现红色 mono 提示(1.6s);
 *  - 底部状态栏:词数 / 字符数(tabular-nums 等宽数字)+ ● SAVED 指示灯(在标题栏);
 *  - 紧凑高度(textarea 140px),不挤压下方搜索框首屏曝光。
 */

import { useEffect, useRef, useState } from 'react'
import { Check, Copy, NotebookPen, Trash2 } from 'lucide-react'
import { useWorkspace } from '@/hooks/useWorkspace'
import { useApp } from '@/components/providers/AppProviders'
import { t } from '@/lib/i18n'

/** 词数统计:按空白切分;空串为 0 */
function countWords(text: string): number {
  const trimmed = text.trim()
  return trimmed ? trimmed.split(/\s+/).length : 0
}

/** Unicode 安全 Base64 编码(btoa 只接受 Latin1,先走 UTF-8 字节) */
function b64Encode(text: string): string {
  const bytes = new TextEncoder().encode(text)
  let bin = ''
  bytes.forEach((b) => {
    bin += String.fromCharCode(b)
  })
  return btoa(bin)
}

/** Unicode 安全 Base64 解码;非法输入抛异常(由调用方捕获) */
function b64Decode(text: string): string {
  const bin = atob(text.trim())
  const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0))
  return new TextDecoder().decode(bytes)
}

/** Trim:去行尾空白 + 首尾空白 + 3 个以上连续空行压成 1 个空行 */
function trimText(text: string): string {
  return text
    .split('\n')
    .map((line) => line.trimEnd())
    .join('\n')
    .trim()
    .replace(/\n{3,}/g, '\n\n')
}

type ActionKey = 'json' | 'b64enc' | 'b64dec' | 'upper' | 'lower' | 'trim'

export function ScratchpadWidget() {
  const { locale } = useApp()
  const { scratchpad, setScratchpad, clearScratchpad, scratchpadReady } = useWorkspace()

  const [copied, setCopied] = useState(false)
  // "已保存"指示:输入变化后短暂 pulse,提示自动保存已发生
  const [savePulse, setSavePulse] = useState(false)
  // 快捷操作错误反馈(非法 JSON / Base64)
  const [actionError, setActionError] = useState<string | null>(null)
  const pulseTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const errorTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (pulseTimer.current) clearTimeout(pulseTimer.current)
      if (copyTimer.current) clearTimeout(copyTimer.current)
      if (errorTimer.current) clearTimeout(errorTimer.current)
    }
  }, [])

  const flashError = (message: string) => {
    setActionError(message)
    if (errorTimer.current) clearTimeout(errorTimer.current)
    errorTimer.current = setTimeout(() => setActionError(null), 1600)
  }

  const handleChange = (value: string) => {
    setScratchpad(value)
    setActionError(null)
    setSavePulse(true)
    if (pulseTimer.current) clearTimeout(pulseTimer.current)
    pulseTimer.current = setTimeout(() => setSavePulse(false), 1200)
  }

  const handleCopy = async () => {
    if (!scratchpad) return
    try {
      await navigator.clipboard.writeText(scratchpad)
    } catch {
      // 回退:旧浏览器 / 非安全上下文 → execCommand
      const ta = document.createElement('textarea')
      ta.value = scratchpad
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      try {
        document.execCommand('copy')
      } catch {
        /* ignore */
      }
      document.body.removeChild(ta)
    }
    setCopied(true)
    if (copyTimer.current) clearTimeout(copyTimer.current)
    copyTimer.current = setTimeout(() => setCopied(false), 1500)
  }

  /** 快捷文本变换;json / b64dec 失败时闪现错误提示,不动文本 */
  const runAction = (action: ActionKey) => {
    if (!scratchpad) return
    try {
      switch (action) {
        case 'json':
          setScratchpad(JSON.stringify(JSON.parse(scratchpad), null, 2))
          break
        case 'b64enc':
          setScratchpad(b64Encode(scratchpad))
          break
        case 'b64dec':
          setScratchpad(b64Decode(scratchpad))
          break
        case 'upper':
          setScratchpad(scratchpad.toUpperCase())
          break
        case 'lower':
          setScratchpad(scratchpad.toLowerCase())
          break
        case 'trim':
          setScratchpad(trimText(scratchpad))
          break
      }
      setActionError(null)
    } catch {
      flashError(
        action === 'json'
          ? t(locale, 'scratchpadErrorJson')
          : t(locale, 'scratchpadErrorBase64'),
      )
    }
  }

  const words = countWords(scratchpad)
  const chars = scratchpad.length

  const TOOLBAR_ACTIONS: { key: ActionKey; labelKey: 'scratchpadFormatJson' | 'scratchpadB64Enc' | 'scratchpadB64Dec' | 'scratchpadUpper' | 'scratchpadLower' | 'scratchpadTrim' }[] = [
    { key: 'json', labelKey: 'scratchpadFormatJson' },
    { key: 'b64enc', labelKey: 'scratchpadB64Enc' },
    { key: 'b64dec', labelKey: 'scratchpadB64Dec' },
    { key: 'upper', labelKey: 'scratchpadUpper' },
    { key: 'lower', labelKey: 'scratchpadLower' },
    { key: 'trim', labelKey: 'scratchpadTrim' },
  ]

  const toolButtonClass =
    'inline-flex items-center rounded-md border border-slate-200/80 bg-white px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-slate-500 transition-all duration-150 hover:-translate-y-px hover:border-slate-300 hover:text-slate-700 hover:shadow-sm disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-slate-200'

  return (
    <section
      aria-labelledby="scratchpad-heading"
      className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white/80 shadow-sm backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/70 dark:shadow-none"
    >
      {/* 标题栏:图标 + 标题 + ● SAVED 指示(等宽 mono 微标签) */}
      <header className="flex items-center justify-between gap-3 border-b border-slate-200/60 px-4 py-2.5 dark:border-slate-800/60">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400">
            <NotebookPen className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <h2
            id="scratchpad-heading"
            className="truncate text-sm font-semibold text-slate-900 dark:text-slate-100"
          >
            {t(locale, 'scratchpadTitle')}
          </h2>
        </div>
        {/* ● SAVED:输入后 1.2s 内显示脉冲绿点 */}
        <span
          className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider transition-colors ${
            savePulse
              ? 'border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-400'
              : 'border-slate-200/80 text-slate-400 dark:border-slate-700 dark:text-slate-500'
          }`}
          aria-live="polite"
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              savePulse ? 'animate-pulse bg-emerald-500' : 'bg-slate-300 dark:bg-slate-600'
            }`}
          />
          {t(locale, 'scratchpadSaved')}
        </span>
      </header>

      {/* 快捷工具栏:文本变换微按钮 + 右侧错误提示 / Copy / Clear */}
      <div className="flex flex-wrap items-center gap-1.5 border-b border-slate-200/60 px-3 py-2 dark:border-slate-800/60">
        {TOOLBAR_ACTIONS.map(({ key, labelKey }) => (
          <button
            key={key}
            type="button"
            onClick={() => runAction(key)}
            disabled={!scratchpad}
            className={toolButtonClass}
          >
            {t(locale, labelKey)}
          </button>
        ))}
        {/* 错误提示(非法 JSON / Base64,1.6s 自动消失) */}
        <span
          aria-live="polite"
          className={`ml-1 font-mono text-[10px] text-red-500 transition-opacity dark:text-red-400 ${
            actionError ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {actionError ?? '·'}
        </span>
        <div className="ml-auto flex items-center gap-1.5">
          <button
            type="button"
            onClick={handleCopy}
            disabled={!scratchpad}
            className={toolButtonClass}
          >
            {copied ? (
              <Check className="h-3 w-3 text-emerald-500" aria-hidden="true" />
            ) : (
              <Copy className="h-3 w-3" aria-hidden="true" />
            )}
            {copied ? t(locale, 'toolCopied') : t(locale, 'toolCopy')}
          </button>
          <button
            type="button"
            onClick={() => clearScratchpad()}
            disabled={!scratchpad}
            className={`${toolButtonClass} hover:border-red-200 hover:text-red-600 dark:hover:border-red-900/60 dark:hover:text-red-400`}
          >
            <Trash2 className="h-3 w-3" aria-hidden="true" />
            {t(locale, 'scratchpadClear')}
          </button>
        </div>
      </div>

      {/* 输入区:等宽字体,紧凑 140px 高 */}
      <textarea
        value={scratchpadReady ? scratchpad : ''}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={t(locale, 'scratchpadPlaceholder')}
        aria-label={t(locale, 'scratchpadTitle')}
        spellCheck={false}
        className="h-[140px] w-full flex-1 resize-y bg-transparent px-4 py-3 font-mono text-sm leading-relaxed text-slate-800 placeholder:text-slate-400 focus:outline-none dark:text-slate-200 dark:placeholder:text-slate-500"
      />

      {/* 状态栏:统计(等宽数字) */}
      <footer className="flex items-center justify-between gap-3 border-t border-slate-200/60 px-4 py-2 dark:border-slate-800/60">
        <span className="font-mono text-[11px] tabular-nums text-slate-400 dark:text-slate-500">
          {t(locale, 'scratchpadStats', { words, chars })}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-slate-300 dark:text-slate-600">
          localStorage · auto
        </span>
      </footer>
    </section>
  )
}
