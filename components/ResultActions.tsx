'use client'

import { useCallback, useState } from 'react'
import { useApp } from './providers/AppProviders'
import { t } from '@/lib/i18n'
import { CopyButton } from './CopyButton'
import { motion, useReducedMotion } from './motion/MotionPrimitives'

interface ResultActionsProps {
  /** 复制用的纯文本摘要(通常含输入 + 结果) */
  summary: string
  /** 下载文件名(含扩展名),如 'calculation-result.csv' / 'conversion-result.txt' */
  filename: string
  /** 下载内容(纯文本)。与 summary 可以不同(如 CSV vs 人类可读文本) */
  downloadContent: string
  /** MIME 类型,默认 text/plain */
  mime?: string
  /** 禁用(如尚无结果) */
  disabled?: boolean
  /** 自定义「复制」按钮标签,默认用 i18n 的 toolCopySummary */
  copyLabel?: string
}

/**
 * 结果操作行 —— Copy(复制摘要)+ Download(下载结果)
 *
 * 设计:把「复制人类可读摘要」与「下载文件」组合成一行,
 * 供计算器/转换器结果区统一调用。比单点 CopyButton 多了下载能力。
 *
 * 文件下载用 Blob + a[download],纯客户端,无需后端。
 * MIME 默认 text/plain;导出 CSV 时传 'text/csv;charset=utf-8;'。
 *
 * 动画:下载按钮 whileTap scale 0.95 弹簧触感(与 CopyButton 统一)。
 */
export function ResultActions({
  summary,
  filename,
  downloadContent,
  mime = 'text/plain;charset=utf-8;',
  disabled,
  copyLabel,
}: ResultActionsProps) {
  const { locale } = useApp()
  const [downloaded, setDownloaded] = useState(false)
  const reduceMotion = useReducedMotion()

  const handleDownload = useCallback(() => {
    if (!downloadContent) return
    const blob = new Blob([downloadContent], { type: mime })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    setTimeout(() => URL.revokeObjectURL(url), 1000)
    setDownloaded(true)
    setTimeout(() => setDownloaded(false), 1500)
  }, [downloadContent, filename, mime])

  return (
    <div className="flex flex-wrap items-center gap-3">
      <CopyButton value={summary} label={copyLabel || t(locale, 'toolCopySummary')} disabled={disabled} />
      <motion.button
        type="button"
        onClick={handleDownload}
        disabled={disabled || !downloadContent}
        whileTap={reduceMotion ? undefined : { scale: 0.95 }}
        transition={reduceMotion ? undefined : { type: 'spring', stiffness: 500, damping: 30 }}
        className={`btn ${downloaded ? 'btn-primary' : 'btn-secondary'} disabled:cursor-not-allowed disabled:opacity-50`}
        aria-live="polite"
      >
        {downloaded ? t(locale, 'toolDownloaded') : t(locale, 'toolDownload')}
      </motion.button>
    </div>
  )
}
