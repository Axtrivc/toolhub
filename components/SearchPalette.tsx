'use client'

import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { tryInlineAnswer } from '@/lib/inline-answer'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { ToolMeta } from '@/lib/tools'
import { getToolIcon } from '@/lib/tools'
import { SmartIcon } from '@/components/SmartIcon'
import type { Locale } from '@/lib/i18n'
import { t, tc, getToolName, getToolShortIntro } from '@/lib/i18n'
import { motion, AnimatePresence, useReducedMotion } from './motion/MotionPrimitives'

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
 * 全局搜索弹窗(命令面板风格,参考 Raycast / macOS Spotlight)
 *
 * - 实时过滤 name / shortIntro / keywords / longTailKeywords / category / slug
 * - ↑/↓ 选择,Enter 跳转,ESC 关闭,点击遮罩关闭
 * - 跳转使用 <Link>,导航后自动关闭
 *
 * ── 关键实现细节:为什么必须用 React Portal ──
 * 本组件由 <Header> 渲染,而 Header 带有 `backdrop-blur`(即 backdrop-filter)。
 * CSS 规范:任何 backdrop-filter 不为 none 的元素,会成为其后代 position:fixed
 * 元素的 containing block(包含块)。于是弹窗的 `fixed inset-0` 不再相对视口、
 * 而是相对那条 64px 高的 header 条 → 遮罩只盖住顶部一条,变成"暗色横条"。
 * 解法:用 createPortal 把弹窗挂到 document.body,脱离 Header 的包含块,
 * `fixed inset-0` 才能真正铺满整个视口。
 */
export function SearchPalette({ tools, locale, open, onClose }: SearchPaletteProps) {
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const [mounted, setMounted] = useState(false) // SSR 安全:仅在 client 渲染 portal
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  // 打开前的焦点元素:所有关闭路径(ESC / Enter 跳转 / 点击遮罩)统一经 open=false
  // 触发下方 effect cleanup,把焦点归还给它(键盘用户不掉焦点)。
  const restoreFocusRef = useRef<HTMLElement | null>(null)
  // listbox 语义:listId 用于 input aria-controls 与 option id(aria-activedescendant)
  const listId = useId()
  const reduceMotion = useReducedMotion()
  const router = useRouter()

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

  // ── 内联答案:算式 / 百分比 / 单位换算(输入即答,置于工具列表之上) ──
  const inline = useMemo(() => tryInlineAnswer(query), [query])
  const total = results.length + (inline ? 1 : 0)

  // 仅在客户端标记已挂载(createPortal 需要 DOM)
  useEffect(() => setMounted(true), [])

  // ── 打开/关闭副作用 ──
  useEffect(() => {
    if (!open) return
    // 记录打开前的焦点元素(通常为 Header 搜索按钮),供关闭时归还
    restoreFocusRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null
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
      // 关闭(open 翻 false / 组件卸载)时归还焦点,覆盖 ESC/Enter/遮罩点击全部路径
      restoreFocusRef.current?.focus()
    }
  }, [open])

  // ESC 关闭;Tab 焦点陷阱:aria-modal 弹层内 Tab 循环,焦点不漏到页面背后
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }
      if (e.key !== 'Tab' || !panelRef.current) return
      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])',
      )
      if (focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      } else if (!panelRef.current.contains(document.activeElement)) {
        e.preventDefault()
        first.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  // 结果变化时把高亮项钳制到合法范围(含内联答案行)
  useEffect(() => {
    if (activeIndex >= total) setActiveIndex(0)
  }, [total, activeIndex])

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
      if (total === 0) return
      setActiveIndex((i) => Math.min(i + 1, total - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      // 内联答案行占据第 0 位:回车跳对应完整工具
      if (inline && activeIndex === 0) {
        e.preventDefault()
        onClose()
        router.push(`/tools/${inline.toolSlug}/`)
        return
      }
      const toolIdx = inline ? activeIndex - 1 : activeIndex
      if (results[toolIdx]) {
        e.preventDefault()
        // 用编程式导航;Link 的 onClick 在 Enter 路径上不会触发
        onClose()
        router.push(`/tools/${results[toolIdx].slug}/`)
      }
    }
  }

  // SSR 期间不渲染(portal 没有 DOM 可挂);open 的开/关交给 AnimatePresence 做进出动画。
  if (!mounted) return null

  // 面板进出动画:打开 = 遮罩淡入 + 面板 scale-up(0.96→1)+ 轻微下落;
  // 关闭 = 反向快速消散(0.15s)。reduced-motion 下仅保留淡入淡出,无位移/缩放。
  // 仅 opacity/transform,不触发重排;portal 脱离布局流,CLS=0。
  const panelMotion = reduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0, transition: { duration: 0.15 } },
      }
    : {
        initial: { opacity: 0, scale: 0.96, y: -8 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.97, y: -6, transition: { duration: 0.15 } },
      }

  // 用 Portal 把弹窗挂到 <body> 根,脱离 Header 的 backdrop-filter 包含块。
  // 注意:遮罩(z-50)与面板(z-60)是兄弟节点,面板在上层。
  // AnimatePresence 直接子节点需带 key,卸载时播完 exit 动画再移除 DOM。
  return createPortal(
    <AnimatePresence>
      {open && (
        /* 全屏遮罩:fixed 相对真正的视口(已脱离 Header 的 containing block) */
        <motion.button
          key="backdrop"
          type="button"
          aria-label={t(locale, 'searchClose')}
          tabIndex={-1}
          onClick={onClose}
          className="fixed inset-0 z-50 h-screen w-screen bg-black/20 backdrop-blur-sm dark:bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          transition={{ duration: 0.2 }}
        />
      )}

      {open && (
        /* 顶部偏下对齐的定位容器(Raycast/Spotlight 风格)。
           ★ 点击关闭挂在容器上:容器 fixed inset-0 覆盖在遮罩之上,
           点击面板外区域实际落在容器(而非遮罩按钮)——onClick={onClose} 让
           "点击外部关闭"真实生效;面板内 onClick stopPropagation 防误关。 */
        <motion.div
          key="panel-wrap"
          className="fixed inset-0 z-[60] flex items-start justify-center p-4 pt-[10vh] sm:pt-[14vh]"
          role="dialog"
          aria-modal="true"
          aria-label={t(locale, 'searchPaletteTitle')}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          transition={{ duration: 0.2 }}
        >
          {/* 面板:圆角 + 描边 + 大阴影,质感升级;transformOrigin 顶中,
              像从 Header 搜索栏"展开"下来。 */}
          <motion.div
            ref={panelRef}
            {...panelMotion}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[70vh] w-full max-w-xl flex-col overflow-hidden rounded-2xl border border-gray-100 shadow-2xl ring-1 ring-black/5 dark:border-gray-800 dark:ring-white/5"
            style={{ transformOrigin: '50% 0%', backgroundColor: 'rgb(var(--bg-card))' }}
          >
          {/* 搜索输入 */}
          <div className="flex items-center gap-3 border-b border-gray-100 px-4 dark:border-gray-800">
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
              role="combobox"
              aria-expanded="true"
              aria-autocomplete="list"
              aria-label={t(locale, 'searchPalettePlaceholder')}
              aria-controls={listId}
              aria-activedescendant={
                results[activeIndex] ? `${listId}-opt-${activeIndex}` : undefined
              }
            />
            <kbd
              className="hidden shrink-0 rounded border border-gray-200 px-1.5 py-0.5 text-xs font-medium dark:border-gray-700"
              style={{ color: 'rgb(var(--text-subtle))' }}
            >
              ESC
            </kbd>
          </div>

          {/* 结果列表(隐藏原生滚动条,见 .scrollbar-none) */}
          {results.length === 0 && !inline ? (
            <div
              className="px-4 py-12 text-center text-sm"
              style={{ color: 'rgb(var(--text-muted))' }}
            >
              {t(locale, 'searchNoResults')}
            </div>
          ) : (
            <ul ref={listRef} id={listId} role="listbox" className="scrollbar-none flex-1 overflow-y-auto p-2">
              {inline && (
                <li data-idx={0} id={`${listId}-opt-0`} role="option" aria-selected={activeIndex === 0}>
                  <button
                    type="button"
                    onClick={() => {
                      onClose()
                      router.push(`/tools/${inline.toolSlug}/`)
                    }}
                    onMouseEnter={() => setActiveIndex(0)}
                    className={
                      'flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors duration-150 ' +
                      (activeIndex === 0
                        ? 'bg-blue-50/80 dark:bg-gray-800/80'
                        : 'hover:bg-blue-50/60 dark:hover:bg-gray-800/60')
                    }
                  >
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-base"
                      style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}
                      aria-hidden="true"
                    >
                      =
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-medium">
                        {inline.expression} <span className="opacity-60">=</span>{' '}
                        <span className="font-bold text-primary">{inline.result}</span>
                      </span>
                      <span className="block truncate text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
                        {t(locale, 'searchQuickAnswer')}
                      </span>
                    </span>
                    <svg
                      className="h-4 w-4 shrink-0 transition-opacity duration-150"
                      style={{ color: 'rgb(var(--text-subtle))', opacity: activeIndex === 0 ? 1 : 0 }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </li>
              )}
              {results.map((tool, idx) => {
                const viewIdx = inline ? idx + 1 : idx
                const isActive = viewIdx === activeIndex
                const icon = getToolIcon(tool)
                return (
                  <li
                    key={tool.slug}
                    data-idx={viewIdx}
                    id={`${listId}-opt-${viewIdx}`}
                    role="option"
                    aria-selected={isActive}
                  >
                    <Link
                      href={`/tools/${tool.slug}/`}
                      onClick={onClose}
                      onMouseEnter={() => setActiveIndex(viewIdx)}
                      className={
                        'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors duration-150 ' +
                        (isActive
                          ? 'bg-blue-50/80 dark:bg-gray-800/80'
                          : 'hover:bg-blue-50/60 dark:hover:bg-gray-800/60')
                      }
                      style={{ color: 'rgb(var(--text))' }}
                    >
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-base transition-colors duration-150"
                        style={{
                          backgroundColor: isActive
                            ? 'rgb(255 255 255 / 0.7)'
                            : 'rgb(var(--bg-subtle))',
                        }}
                        aria-hidden="true"
                      >
                        <SmartIcon icon={icon} className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-medium">{getToolName(locale, tool.slug, tool.name)}</span>
                        <span
                          className="block truncate text-xs"
                          style={{ color: 'rgb(var(--text-subtle))' }}
                        >
                          {tc(locale, tool.category)}
                        </span>
                      </span>
                      {/* 选中态右箭头:用 opacity 过渡,避免抖动 */}
                      <svg
                        className="h-4 w-4 shrink-0 transition-opacity duration-150"
                        style={{
                          color: 'rgb(var(--text-subtle))',
                          opacity: isActive ? 1 : 0,
                        }}
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
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}

          {/* 底部提示栏 */}
          <div
            className="flex items-center justify-between gap-2 border-t border-gray-100 px-4 py-2.5 text-xs dark:border-gray-800"
            style={{ color: 'rgb(var(--text-subtle))' }}
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}

/** 小巧的键盘按键样式标签 */
function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd
      className="inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded border border-gray-200 px-1 font-sans text-[11px] font-semibold dark:border-gray-700"
      style={{ color: 'rgb(var(--text-muted))' }}
    >
      {children}
    </kbd>
  )
}
