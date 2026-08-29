'use client'

import { useEffect, useRef, useState } from 'react'
import { useApp } from './providers/AppProviders'
import { t, SUPPORTED_LOCALES, LOCALE_LABELS, type Locale } from '@/lib/i18n'

/**
 * 语言选择器 - 4 语自定义下拉(en / zh / es / de)· 胶囊形态
 *
 * 为什么不用原生 <select>:原生 <option> 展开列表由操作系统渲染,
 * 无法定制圆角/字体/内边距/阴影,视觉与全站设计令牌脱节。故重写为
 * React 自定义 Dropdown:
 *
 *  - 触发按钮:圆润胶囊,与 Header 右侧 Ctrl K 搜索按钮、主题图标按钮
 *    同为 h-9 描边控件家族;右侧 SVG 箭头随开合 rotate-180 平滑翻转。
 *  - 展开菜单:absolute right-0 mt-2 w-32;rounded-xl + shadow-xl +
 *    毛玻璃 + border;pure-CSS keyframes 淡入(scale 0.95→1 + opacity,
 *    transform/opacity only,GPU 合成)。
 *  - 选项 Item:button + rounded-lg,hover:bg-muted;当前选中项
 *    text-primary 高亮 + 右侧对勾。
 *  - 交互:useState(isOpen) 控制开合;pointerdown 监听实现点击外部
 *    自动收起,Escape 键关闭;切换语言时胶囊做一次快速回弹脉冲
 *    (scale 1→0.88→1,CSS keyframes,不重排)。
 *  - 可访问性:aria-haspopup="listbox" / aria-expanded / role="listbox" /
 *    role="option" aria-selected;prefers-reduced-motion 下动画全部关闭
 *    (globals.css 的 reduce 块统一降级)。
 *
 * 纯 CSS 动画版说明:此组件挂在 Header 上随每页加载,曾用 framer-motion
 * 驱动,会让动画库进入全站首屏 bundle;改为零依赖 CSS 后,framer-motion
 * 只随懒加载的 SearchPalette 等真正需要复杂动画的组件按需加载。
 */
export function LanguageToggle() {
  const { locale, setLocale } = useApp()
  const [isOpen, setIsOpen] = useState(false)
  const [pulse, setPulse] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // 点击组件外部(或按 Escape)时自动收起下拉菜单
  useEffect(() => {
    if (!isOpen) return

    const handlePointerDown = (event: PointerEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const handleSelect = (l: Locale) => {
    setLocale(l)
    setIsOpen(false)
    setPulse(true)
  }

  return (
    <div
      ref={containerRef}
      className={`relative ${pulse ? 'animate-lang-pulse' : ''}`}
      onAnimationEnd={() => setPulse(false)}
    >
      {/* 触发按钮:圆润胶囊,展示当前语言 + 可旋转 SVG 箭头 */}
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-label={t(locale, 'languageToggle')}
        title={t(locale, 'languageToggle')}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="flex h-9 items-center gap-1.5 rounded-full border border-border/80 bg-background/80 px-3 py-1.5 text-xs font-medium transition-colors hover:bg-muted"
        style={{ color: 'rgb(var(--text-muted))' }}
      >
        {LOCALE_LABELS[locale]}
        <svg
          className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* 展开菜单:毛玻璃浮层 + scale/opacity 淡入(纯 CSS keyframes)。
          桌面 header 里按钮靠右 → 右锚;移动抽屉里按钮靠左,右锚会让
          128px 菜单溢出左缘,故 <md 切换为左锚 */}
      {isOpen && (
        <div
          role="listbox"
          aria-label={t(locale, 'languageToggle')}
          className="animate-lang-menu absolute right-0 z-50 mt-2 w-32 rounded-xl border border-border/80 bg-card/90 p-1.5 shadow-xl backdrop-blur-md max-md:left-0 max-md:right-auto"
          style={{ transformOrigin: 'top right' }}
        >
          {SUPPORTED_LOCALES.map((l) => {
            const selected = l === locale
            return (
              <button
                key={l}
                type="button"
                role="option"
                aria-selected={selected}
                onClick={() => handleSelect(l)}
                className={`flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-left text-xs font-medium transition-colors hover:bg-muted ${
                  selected ? 'bg-muted/60 text-primary' : ''
                }`}
                style={selected ? undefined : { color: 'rgb(var(--text-muted))' }}
              >
                {LOCALE_LABELS[l]}
                {selected && (
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
