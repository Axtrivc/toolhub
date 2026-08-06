'use client'

import { useAnimationControls } from 'framer-motion'
import { useApp } from './providers/AppProviders'
import { t, SUPPORTED_LOCALES, LOCALE_LABELS, type Locale } from '@/lib/i18n'
import { motion, useReducedMotion } from './motion/MotionPrimitives'

/**
 * 语言选择器 - 4 语下拉(en / zh / es / de)
 *
 * 用原生 <select>:紧凑、可访问、跨端一致,与现有小按钮占用相同空间。
 * value=当前 locale,onChange 写回 setLocale 并持久化(见 AppProviders)。
 *
 * 微交互:切换语言时控件做一次快速回弹脉冲(scale 1→0.88→1,仅 transform,
 * 不重排、不丢焦点 —— 用 useAnimationControls 而非 key 重挂载)。
 * prefers-reduced-motion 下关闭。
 */
export function LanguageToggle() {
  const { locale, setLocale } = useApp()
  const reduceMotion = useReducedMotion()
  const controls = useAnimationControls()

  return (
    <motion.select
      value={locale}
      onChange={(e) => {
        setLocale(e.target.value as Locale)
        if (!reduceMotion) {
          controls.start({
            scale: [1, 0.88, 1],
            transition: { duration: 0.35, ease: 'easeOut' },
          })
        }
      }}
      initial={false}
      animate={controls}
      aria-label={t(locale, 'languageToggle')}
      title={t(locale, 'languageToggle')}
      className="h-9 cursor-pointer rounded-lg border bg-transparent px-1.5 text-sm font-semibold outline-none transition hover:bg-slate-100 focus:ring-2 dark:border-slate-600 dark:hover:bg-slate-700"
      style={{
        borderColor: 'rgb(var(--border-strong))',
        color: 'rgb(var(--text-muted))',
      }}
    >
      {SUPPORTED_LOCALES.map((l) => (
        <option key={l} value={l}>
          {LOCALE_LABELS[l]}
        </option>
      ))}
    </motion.select>
  )
}
