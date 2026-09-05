'use client'

import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { History as HistoryIcon, X, Trash2, Download } from 'lucide-react'
import { useApp } from '../providers/AppProviders'
import { t } from '@/lib/i18n'

/**
 * 本地计算历史留存引擎 —— useCalcHistory + HistoryDrawer
 *
 * 设计:
 *  - 纯前端 localStorage,每工具独立 key `toolhub-history-<slug>`,最多
 *    保留最近 10 条(超长截尾),零后端、零上报;
 *  - 一条记录 = 时间戳 + 输入快照(Record<string,string>)+ 主结果
 *    (compute 已格式化的字符串);
 *  - 去重:与最近一条输入完全相同 → 只刷新时间戳与结果,不重复占位;
 *  - SSR 安全:entries 初始恒 [],mount 后才从 localStorage 读取
 *    (预渲染 HTML 与首帧一致,不产生水合 mismatch)。

 * HistoryDrawer:滑出式轻量抽屉(桌面右侧 / 移动端底部上滑),列表展示
 * 历史;点击记录一键载入该方案;底部「清空记录」「导出 CSV」与
 * 🔒 100% Private 隐私承诺。仅在 open 时渲染(客户端交互态驱动)。
 */

/** 历史存储 key 前缀(与草稿 toolhub-draft-* 同族) */
const HISTORY_PREFIX = 'toolhub-history-'
/** 每工具保留的最大条数(任务规格:最近 10 条) */
const HISTORY_MAX = 10

export interface HistoryEntry {
  /** 记录时间戳(epoch ms) */
  ts: number
  /** 输入快照:字段 key → 用户输入值 */
  inputs: Record<string, string>
  /** 主结果(compute 返回的已格式化字符串,如 "$1,234.56") */
  main: string
}

/** 宽容解析 localStorage 里的历史数组;损坏数据返回 [] */
function readEntries(slug: string): HistoryEntry[] {
  try {
    const raw = localStorage.getItem(HISTORY_PREFIX + slug)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter(
      (e): e is HistoryEntry =>
        !!e &&
        typeof e === 'object' &&
        typeof (e as HistoryEntry).ts === 'number' &&
        typeof (e as HistoryEntry).main === 'string' &&
        !!(e as HistoryEntry).inputs &&
        typeof (e as HistoryEntry).inputs === 'object',
    )
  } catch {
    return []
  }
}

/**
 * 计算历史 hook:读取/追加/清空当前工具的本地历史。
 * slug 为空串时全部 no-op(未注册 slug 的工厂工具不启用历史)。
 */
export function useCalcHistory(slug: string) {
  const [entries, setEntries] = useState<HistoryEntry[]>([])

  useEffect(() => {
    if (!slug) return
    setEntries(readEntries(slug))
  }, [slug])

  /** 追加一条记录(自动去重 + 截尾到 10 条)并持久化 */
  const add = useCallback(
    (entry: HistoryEntry) => {
      if (!slug) return
      setEntries((prev) => {
        const inputsJson = JSON.stringify(entry.inputs)
        // 与最近一条输入相同:只刷新时间戳与主结果
        const next =
          prev.length > 0 && JSON.stringify(prev[0].inputs) === inputsJson
            ? [{ ...entry, inputs: prev[0].inputs }, ...prev.slice(1)]
            : [entry, ...prev]
        const capped = next.slice(0, HISTORY_MAX)
        try {
          localStorage.setItem(HISTORY_PREFIX + slug, JSON.stringify(capped))
        } catch {
          // 隐私模式/容量满:内存态仍可用,静默降级
        }
        return capped
      })
    },
    [slug],
  )

  /** 清空该工具全部历史 */
  const clear = useCallback(() => {
    if (!slug) return
    setEntries([])
    try {
      localStorage.removeItem(HISTORY_PREFIX + slug)
    } catch {
      // ignore
    }
  }, [slug])

  return { entries, count: entries.length, add, clear }
}

/** CSV 字段转义:含逗号/引号/换行则用双引号包裹,内部引号翻倍 */
function csvEscape(s: string): string {
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`
  return s
}

interface HistoryDrawerProps {
  /** 抽屉开关(由结果操作栏 History 按钮驱动) */
  open: boolean
  onClose: () => void
  /** 当前工具的历史记录(新→旧) */
  entries: HistoryEntry[]
  /** 主结果标签(如 "Total bill",随 locale 本地化) */
  mainLabel: string
  /** 输入摘要渲染器:把输入快照拼为本地化的 "Label: value · …" 一行 */
  summarize: (inputs: Record<string, string>) => string
  /** 点击一条记录:一键载入该方案(回填输入字段) */
  onLoad: (inputs: Record<string, string>) => void
  /** 清空全部记录 */
  onClear: () => void
  /** 导出文件名(含扩展名);缺省 'calculation-history.csv' */
  filename?: string
}

/**
 * 历史抽屉 —— 桌面(sm+)从右侧滑入,移动端从底部上滑。
 * 仅 open 时挂载(客户端态),SSR/预渲染不输出任何标记。
 */
export function HistoryDrawer({
  open,
  onClose,
  entries,
  mainLabel,
  summarize,
  onLoad,
  onClear,
  filename = 'calculation-history.csv',
}: HistoryDrawerProps) {
  const { locale } = useApp()

  // Portal 到 document.body:计算器根节点带 ios-rise 入场动画的驻留
  // transform(fill-mode both 的 translateY(0) 终态),会为 position:fixed
  // 后代建立 containing block,把 fixed 覆盖层钉在文档流容器上;
  // portal 后抽屉直挂 body,彻底免疫任意祖先的 transform/filter。
  // 抽屉仅在 open(客户端交互态)时渲染,SSR/水合不受影响。
  const [portalHost, setPortalHost] = useState<HTMLElement | null>(null)
  useEffect(() => {
    setPortalHost(document.body)
  }, [])

  // Escape 关闭
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const formatTime = (ts: number) =>
    new Date(ts).toLocaleString(locale === 'en' ? 'en-US' : locale, {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })

  const handleExportCsv = () => {
    const rows: string[][] = [
      ['Date', 'Main result', 'Inputs'],
      ...entries.map((e) => [
        new Date(e.ts).toISOString(),
        e.main,
        summarize(e.inputs),
      ]),
    ]
    const csv = '\uFEFF' + rows.map((r) => r.map(csvEscape).join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  }

  if (!open || !portalHost) return null

  return createPortal(
    <div className="no-print fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label={t(locale, 'historyTitle')}>
      {/* 背景遮罩:点击关闭 */}
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* 面板:移动端底部上滑(<sm),桌面右侧滑入(sm+) */}
      <div
        className="history-drawer-panel absolute inset-x-0 bottom-0 flex max-h-[78vh] flex-col rounded-t-2xl border shadow-2xl sm:inset-y-0 sm:left-auto sm:right-0 sm:max-h-none sm:w-[24rem] sm:rounded-none sm:rounded-l-2xl"
        style={{
          borderColor: 'rgb(var(--border-strong))',
          backgroundColor: 'rgb(var(--bg-card))',
          color: 'rgb(var(--text))',
        }}
      >
        {/* 头部:标题 + 条数 + 关闭 */}
        <div
          className="flex items-center justify-between border-b px-4 py-3"
          style={{ borderColor: 'rgb(var(--border))' }}
        >
          <div className="flex min-w-0 items-center gap-2">
            <HistoryIcon className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <span className="truncate text-sm font-semibold">{t(locale, 'historyTitle')}</span>
            {entries.length > 0 && (
              <span
                className="rounded-full px-2 py-0.5 text-[11px] font-semibold tabular-nums"
                style={{ backgroundColor: 'rgb(var(--primary) / 0.1)', color: 'rgb(var(--primary))' }}
              >
                {entries.length}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-lg p-1.5 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
            style={{ color: 'rgb(var(--text-muted))' }}
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {/* 列表:新 → 旧;空态引导 */}
        <div className="flex-1 space-y-2 overflow-y-auto p-3">
          {entries.length === 0 ? (
            <p className="px-2 py-8 text-center text-sm" style={{ color: 'rgb(var(--text-subtle))' }}>
              {t(locale, 'historyEmpty')}
            </p>
          ) : (
            <>
              <p className="px-1 pb-1 text-[11px]" style={{ color: 'rgb(var(--text-faint))' }}>
                {t(locale, 'historyLoadHint')}
              </p>
              {entries.map((e) => (
                <button
                  key={e.ts}
                  type="button"
                  onClick={() => onLoad(e.inputs)}
                  className="w-full rounded-xl border p-3 text-left transition-colors hover:border-brand-400 hover:bg-brand-50/50 dark:hover:bg-brand-950/20"
                  style={{ borderColor: 'rgb(var(--border))' }}
                >
                  <div className="text-[11px] tabular-nums" style={{ color: 'rgb(var(--text-faint))' }}>
                    {formatTime(e.ts)}
                  </div>
                  <div className="mt-0.5 flex flex-wrap items-baseline gap-x-2">
                    <span className="text-base font-bold text-primary tabular-nums">{e.main}</span>
                    {mainLabel && (
                      <span className="truncate text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
                        {mainLabel}
                      </span>
                    )}
                  </div>
                  <div className="mt-1 line-clamp-2 text-xs" style={{ color: 'rgb(var(--text-muted))' }}>
                    {summarize(e.inputs)}
                  </div>
                </button>
              ))}
            </>
          )}
        </div>

        {/* 底部:清空 / 导出 CSV + 隐私承诺 */}
        <div
          className="space-y-2.5 border-t px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]"
          style={{ borderColor: 'rgb(var(--border))' }}
        >
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleExportCsv}
              disabled={entries.length === 0}
              className="btn btn-secondary flex-1 text-sm disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              {t(locale, 'historyExportCsv')}
            </button>
            <button
              type="button"
              onClick={onClear}
              disabled={entries.length === 0}
              className="btn btn-secondary flex-1 text-sm disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Trash2 className="h-4 w-4" aria-hidden="true" />
              {t(locale, 'historyClear')}
            </button>
          </div>
          <p className="text-center text-[11px]" style={{ color: 'rgb(var(--text-faint))' }}>
            {t(locale, 'historyPrivate')}
          </p>
        </div>
      </div>
    </div>,
    portalHost,
  )
}
