'use client'

import { useApp } from './providers/AppProviders'
import { t } from '@/lib/i18n'
import { AnimatePresence, motion, useReducedMotion } from './motion/MotionPrimitives'

/** 主题切换按钮 - 太阳/月亮图标(切换时旋转 + 缩放淡入淡出微交互) */
export function ThemeToggle() {
  const { theme, toggleTheme, locale } = useApp()
  const isDark = theme === 'dark'
  const reduceMotion = useReducedMotion()

  const icon = isDark ? (
    // 太阳图标(深色模式下显示,点击切回浅色)
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="4" />
      <path
        strokeLinecap="round"
        d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41"
      />
    </svg>
  ) : (
    // 月亮图标(浅色模式下显示,点击切到深色)
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  )

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t(locale, 'themeToggle')}
      title={isDark ? t(locale, 'themeLight') : t(locale, 'themeDark')}
      className="flex h-9 w-9 items-center justify-center rounded-lg border transition hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-700"
      style={{
        borderColor: 'rgb(var(--border-strong))',
        color: 'rgb(var(--text-muted))',
      }}
    >
      {reduceMotion ? (
        icon
      ) : (
        /* 图标换肤:旧图标旋出(rotate 90°)、新图标旋入(-90°→0°)+ 缩放淡入。
           mode="wait" 保证按钮内同一时刻只有 1 个图标,不会并排撑破 36×36 触控区;
           initial={false} 避免页面加载时无意义地播放一次。仅 transform/opacity。 */
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? 'sun' : 'moon'}
            className="flex"
            initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            {icon}
          </motion.span>
        </AnimatePresence>
      )}
    </button>
  )
}
