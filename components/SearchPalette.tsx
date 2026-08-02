'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import type { ToolMeta } from '@/lib/tools'
import { getToolIcon } from '@/lib/tools'
import type { Locale } from '@/lib/i18n'
import { t } from '@/lib/i18n'

interface SearchPaletteProps {
  /** 全部已上线工具(由 Server 传入) */
  tools: ToolMeta[]
  locale: Locale
  /** 是否展开 */
  open: boolean
  /** 关闭回调 */
  onClose: () => void
}

/** 单页最多展示的结果数,避免超长滚动 */
const MAX_RESULTS = 30

/**
 * 全局搜索弹窗(命令面板风格)
 *
 * - 实时过滤 name / shortIntro / keywords / longTailKeywords / category / slug
 * - ↑/↓ 选择,Enter 跳转,ESC 关闭,点击遮罩关闭
 * - 跳转使用 <Link>,导航后自动关闭
 *
 * 受控组件:由 Header 管理 open 状态并监听 Cmd/Ctrl+K 触发。
 * 这里只负责弹窗本身的视觉与交互。
 */
export function SearchPalette({ tools, locale, open, onClose }: SearchPaletteProps) {
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  // ── 过滤:匹配 name / 介绍 / 关键词 / 长尾词 / 分类 / slug ──
  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return tools.slice(0, MAX_RESULTS)
    const matched = tools.filter((tl) => {
      const haystack = [
        tl.name,
        tl.h1,
        tl.shortIntro,
        tl.category,
        tl.slug,
        ...tl.keywords,
        ...(tl.longTailKeywords ?? []),
      ]
        .join(' ')
        .toLowerCase()
      return haystack.includes(q)
    })
    return matched.slice(0, MAX_RESULTS)
  }, [tools, query])

  // ── 打开/关闭副作用 ──
  useEffect(() => {
    if (!open) return
    // 每次打开重置状态 + 聚焦输入框(下一帧,确保已挂载)
    setQuery('')
    setActiveIndex(0)
    const id = window.requestAnimationFrame(() => inputRef.current?.focus())
    // 锁定背景滚动,避免穿透
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.cancelAnimationFrame(id)
      document.body.style.overflow = prev
    }
  }, [open])

  // ESC 关闭
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  // 结果变化时把高亮项钳制到合法范围
  useEffect(() => {
    if (activeIndex >= results.length) setActiveIndex(0)
  }, [results.length, activeIndex])

  // 高亮项变化时自动滚动进可视区
  useEffect(() => {
    if (!open || !listRef.current) return
    const el = listRef.current.querySelector<HTMLElement>(
      `[data-idx="${activeIndex}"]`,
    )
    el?.scrollIntoView({ block: 'nearest' })
  }, [activeIndex, open])

  // ── 键盘导航:在 input 上拦截 ↑↓Enter ──
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((i) => Math.min(i + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      if (results[activeIndex]) {
        e.preventDefault()
        // 用编程式导航;Link 的 onClick 在 Enter 路径上不会触发
        window.location.href = `/tools/${results[activeIndex].slug}/`
      }
    }
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center p-4 pt-[12vh] sm:pt-[15vh]"
      role="dialog"
      aria-modal="true"
      aria-label={t(locale, 'searchPaletteTitle')}
    >
      {/* 遮罩:点击关闭 */}
      <button
        type="button"
        aria-label={t(locale, 'searchClose')}
        tabIndex={-1}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm dark:bg-black/60"
      />

      {/* 面板 */}
      <div
        className="relative flex max-h-[70vh] w-full max-w-xl flex-col overflow-hidden rounded-2xl border shadow-2xl"
        style={{
          borderColor: 'rgb(var(--border))',
          backgroundColor: 'rgb(var(--bg-card))',
        }}
      >
        {/* 搜索输入 */}
        <div
          className="flex items-center gap-3 border-b px-4"
          style={{ borderColor: 'rgb(var(--border))' }}
        >
          <svg
            className="h-5 w-5 shrink-0"
            style={{ color: 'rgb(var(--text-subtle))' }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setActiveIndex(0)
            }}
            onKeyDown={onKeyDown}
            placeholder={t(locale, 'searchPalettePlaceholder')}
            className="h-14 w-full bg-transparent text-base outline-none placeholder:opacity-60"
            style={{ color: 'rgb(var(--text))' }}
            autoFocus
            autoComplete="off"
            spellCheck={false}
            aria-label={t(locale, 'searchPalettePlaceholder')}
          />
          <kbd
            className="hidden shrink-0 rounded border px-1.5 py-0.5 text-xs font-medium sm:inline-block"
            style={{
              borderColor: 'rgb(var(--border))',
              color: 'rgb(var(--text-subtle))',
            }}
          >
            ESC
          </kbd>
        </div>

        {/* 结果列表 */}
        {results.length === 0 ? (
          <div
            className="px-4 py-10 text-center text-sm"
            style={{ color: 'rgb(var(--text-muted))' }}
          >
            {t(locale, 'searchNoResults')}
          </div>
        ) : (
          <ul ref={listRef} className="flex-1 overflow-y-auto p-2">
            {results.map((tool, idx) => {
              const isActive = idx === activeIndex
              const icon = getToolIcon(tool)
              return (
                <li key={tool.slug} data-idx={idx}>
                  <Link
                    href={`/tools/${tool.slug}/`}
                    onClick={onClose}
                    onMouseEnter={() => setActiveIndex(idx)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors"
                    style={{
                      backgroundColor: isActive
                        ? 'rgb(var(--bg-subtle))'
                        : 'transparent',
                      color: 'rgb(var(--text))',
                    }}
                  >
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-base"
                      style={{
                        backgroundColor: 'rgb(var(--bg-subtle))',
                      }}
                      aria-hidden="true"
                    >
                      {icon}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-medium">{tool.name}</span>
                      <span
                        className="block truncate text-xs"
                        style={{ color: 'rgb(var(--text-subtle))' }}
                      >
                        {tool.category}
                      </span>
                    </span>
                    {isActive && (
                      <svg
                        className="h-4 w-4 shrink-0"
                        style={{ color: 'rgb(var(--text-subtle))' }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        )}

        {/* 底部提示栏 */}
        <div
          className="flex items-center justify-between gap-2 border-t px-4 py-2.5 text-xs"
          style={{
            borderColor: 'rgb(var(--border))',
            color: 'rgb(var(--text-subtle))',
          }}
        >
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="flex items-center gap-1.5">
              <Kbd>↑</Kbd>
              <Kbd>↓</Kbd>
              <span className="hidden sm:inline">{t(locale, 'searchKbdMove')}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Kbd>↵</Kbd>
              <span className="hidden sm:inline">{t(locale, 'searchKbdSelect')}</span>
            </span>
            <span className="hidden items-center gap-1.5 sm:flex">
              <Kbd>ESC</Kbd>
              <span>{t(locale, 'searchKbdClose')}</span>
            </span>
          </div>
          <span style={{ color: 'rgb(var(--text-faint))' }}>
            {t(locale, 'searchPaletteHint', { count: tools.length })}
          </span>
        </div>
      </div>
    </div>
  )
}

/** 小巧的键盘按键样式标签 */
function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd
      className="inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded border px-1 font-sans text-[11px] font-semibold"
      style={{
        borderColor: 'rgb(var(--border))',
        color: 'rgb(var(--text-muted))',
      }}
    >
      {children}
    </kbd>
  )
}
