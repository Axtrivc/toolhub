'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Printer } from 'lucide-react'
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
  /**
   * 深度分享参数(可选):当前工具输入的 query 参数映射,如
   * { amount: '300000', rate: '6.5' }。传入即渲染「Share Link」按钮,
   * 点击组装 `${origin}${pathname}?...` 完整 URL 写入剪贴板 ——
   * 他人点开链接即还原完整计算场景(带参反链,裂变流量入口)。
   */
  shareParams?: Record<string, string>
  /**
   * 「Print Report」按钮(默认 true):点击 window.print() 触发浏览器打印,
   * 配合 globals.css 的 @media print 排版输出机构级 A4 报告
   * (隐藏 Header/Footer/广告/FAQ 等,顶部注入报告抬头)。
   * 纯展示型工具(无输入结果可打印)可显式传 false 关闭。
   */
  enablePrint?: boolean
}

/**
 * 打印报告抬头 —— 屏显隐藏,仅 @media print 时可见(globals.css .print-only)。
 * URL 与日期依赖 window/Date,挂载后才填充(SSR 渲染占位,保持水合一致)。
 */
function PrintReportHeader() {
  const { locale } = useApp()
  const [info, setInfo] = useState<{ url: string; date: string } | null>(null)
  useEffect(() => {
    setInfo({
      url: window.location.href.split(/[?#]/)[0],
      date: new Date().toLocaleDateString(locale === 'en' ? 'en-US' : locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    })
  }, [locale])
  return (
    <div className="print-only print-report-header">
      <div className="print-report-brand">ToolHub Calculation Report</div>
      <div className="print-report-meta">
        <span>{info?.url ?? ''}</span>
        {info && (
          <>
            <span aria-hidden="true"> · </span>
            <span>
              {t(locale, 'printReportGenerated')}: {info.date}
            </span>
          </>
        )}
      </div>
    </div>
  )
}

/**
 * 结果操作行 —— Copy(复制摘要)+ Download(下载结果)+ Share Link(带参深链)
 *
 * 设计:把「复制人类可读摘要」「下载文件」「复制带参分享链接」组合成一行,
 * 供计算器/转换器结果区统一调用。比单点 CopyButton 多了下载与分享能力。
 *
 * 文件下载用 Blob + a[download],纯客户端,无需后端。
 * MIME 默认 text/plain;导出 CSV 时传 'text/csv;charset=utf-8;'。
 * 分享链接用 URLSearchParams 组装,绝对地址(origin+pathname)保证
 * 粘贴到论坛/社群后可直接访问;剪贴板失败时回退 execCommand。
 *
 * 动画:下载/分享按钮 whileTap scale 0.95 弹簧触感(与 CopyButton 统一)。
 */
export function ResultActions({
  summary,
  filename,
  downloadContent,
  mime = 'text/plain;charset=utf-8;',
  disabled,
  copyLabel,
  shareParams,
  enablePrint = true,
}: ResultActionsProps) {
  const { locale } = useApp()
  const [downloaded, setDownloaded] = useState(false)
  const [linkCopied, setLinkCopied] = useState(false)
  const reduceMotion = useReducedMotion()
  // "Link copied!" 回退计时器:重复复制时重置;卸载时清理
  const linkTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(
    () => () => {
      if (linkTimerRef.current) clearTimeout(linkTimerRef.current)
    },
    [],
  )

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

  const handleShareLink = useCallback(async () => {
    if (!shareParams) return
    // 过滤空值后组装带 query 的绝对地址;与 urlState 同约定:
    // 等于默认值的字段由调用方过滤,链接保持干净。
    const params = new URLSearchParams()
    for (const [k, v] of Object.entries(shareParams)) {
      if (v !== '') params.set(k, v)
    }
    const qs = params.toString()
    const shareUrl = `${window.location.origin}${window.location.pathname}${qs ? `?${qs}` : ''}`
    const armReset = () => {
      if (linkTimerRef.current) clearTimeout(linkTimerRef.current)
      linkTimerRef.current = setTimeout(() => setLinkCopied(false), 1500)
    }
    try {
      await navigator.clipboard.writeText(shareUrl)
      setLinkCopied(true)
      armReset()
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = shareUrl
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      try {
        document.execCommand('copy')
        setLinkCopied(true)
        armReset()
      } catch {
        // ignore
      }
      document.body.removeChild(textarea)
    }
  }, [shareParams])

  return (
    <>
      {/* 打印抬头:屏显隐藏,进 @media print 后成为报告页眉
          (放在 .no-print 操作行之外,避免被打印隐藏规则吞掉) */}
      {enablePrint && <PrintReportHeader />}
      <div className="flex flex-wrap items-center gap-3 no-print">
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
      {shareParams && (
        <motion.button
          type="button"
          onClick={handleShareLink}
          disabled={disabled}
          whileTap={reduceMotion ? undefined : { scale: 0.95 }}
          transition={reduceMotion ? undefined : { type: 'spring', stiffness: 500, damping: 30 }}
          className={`btn ${linkCopied ? 'btn-primary' : 'btn-secondary'} disabled:cursor-not-allowed disabled:opacity-50`}
          aria-live="polite"
        >
          {linkCopied ? `✓ ${t(locale, 'linkCopied')}` : t(locale, 'shareLink')}
        </motion.button>
      )}
      {enablePrint && (
        <motion.button
          type="button"
          onClick={() => window.print()}
          disabled={disabled}
          whileTap={reduceMotion ? undefined : { scale: 0.95 }}
          transition={reduceMotion ? undefined : { type: 'spring', stiffness: 500, damping: 30 }}
          className="btn btn-secondary disabled:cursor-not-allowed disabled:opacity-50"
          title={t(locale, 'toolPrintReport')}
        >
          <Printer className="h-4 w-4" aria-hidden="true" />
          {t(locale, 'toolPrintReport')}
        </motion.button>
      )}
      </div>
    </>
  )
}
