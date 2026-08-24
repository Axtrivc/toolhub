'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useApp } from './providers/AppProviders'
import { t, type Locale } from '@/lib/i18n'

/**
 * 站内访客计数器 - Footer 底栏展示"总访问 / 今日访问 / 今日访客"
 *
 * 数据链路:本组件 POST /api/stats {path, vid} → Cloudflare Pages
 * Function(functions/api/stats.ts)写 D1 并返回最新计数。本地 next dev
 * 或未绑定 D1 的环境请求失败 → 组件永久隐藏(dead ref),页面零残留。
 *
 * 计数时机:整刷(首次挂载)与站内 SPA 路由切换各记一次 PV,与
 * Cloudflare 面板的 PV 口径对齐;被 iframe 嵌入(embed class)不计数。
 * 服务端按 vid 做 2 秒节流,React StrictMode 开发期双跑不会刷数。
 *
 * 隐私:vid = localStorage 随机 ID 与 UTC 日期拼接后的 SHA-256 前缀,
 * 服务端只能按天去重,无法跨天关联同一访客;无 cookie,不涉个人数据,
 * 与隐私政策"aggregate, anonymized usage metrics"一致。
 */

interface Stats {
  total: number
  today: number
  visitors: number
}

/** 访客随机 ID 的 localStorage key(仅本机可见,永不上传原文) */
const VID_KEY = 'toolhub-vid'

/** 数字按语言本地化分隔(en 12,345 / de 12.345 / zh 12,345) */
const NUMBER_LOCALE: Record<Locale, string> = {
  en: 'en-US',
  zh: 'zh-CN',
  es: 'es-ES',
  de: 'de-DE',
}

/** 读取/生成本机随机访客 ID(仅作为服务端按天去重的原料,不具个人标识性) */
function getRawVid(): string {
  try {
    let v = localStorage.getItem(VID_KEY)
    if (!v) {
      const buf = new Uint8Array(8)
      crypto.getRandomValues(buf)
      v = Array.from(buf, (b) => b.toString(16).padStart(2, '0')).join('')
      localStorage.setItem(VID_KEY, v)
    }
    return v
  } catch {
    // 隐私模式等 localStorage 不可用:每次访问一个临时随机 ID
    return Math.random().toString(16).slice(2, 18)
  }
}

/** 每日轮换的匿名访客 ID:sha256(rawVid + UTC日期),跨天不可关联 */
async function dailyVid(): Promise<string> {
  const raw = `${getRawVid()}:${new Date().toISOString().slice(0, 10)}`
  if (globalThis.crypto?.subtle) {
    const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(raw))
    return Array.from(
      new Uint8Array(digest).slice(0, 12),
      (b) => b.toString(16).padStart(2, '0'),
    ).join('')
  }
  // 非安全上下文(如局域网 http 预览)退化到简单哈希,仅影响 UV 去重精度
  let h = 5381
  for (const ch of raw) h = ((h << 5) + h + ch.charCodeAt(0)) >>> 0
  return h.toString(16).padStart(8, '0').padEnd(16, '0')
}

export function SiteStats() {
  const { locale } = useApp()
  const pathname = usePathname()
  const [stats, setStats] = useState<Stats | null>(null)
  // 端点不存在(本地 dev/未绑 D1)后永久放弃,避免每次路由切换都白发请求
  const dead = useRef(false)

  useEffect(() => {
    if (dead.current) return
    // 被嵌入 iframe 时前台 chrome 整体隐藏,也不计入统计
    if (document.documentElement.classList.contains('embed')) return
    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch('/api/stats', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ path: pathname, vid: await dailyVid() }),
        })
        // 端点确定不存在(本地 dev/未绑 D1/被托管方移除)才永久放弃;
        // 瞬时网络故障(离线、弱网、拦截器抖动)只跳过本次,下次路由切换重试
        if (res.status === 404 || res.status === 501 || res.status === 503) {
          dead.current = true
          return
        }
        if (!res.ok) return
        const data = (await res.json()) as Stats
        if (!cancelled) setStats(data)
      } catch {
        // fetch TypeError(网络层失败):可恢复,不置 dead
      }
    })()
    return () => {
      cancelled = true
    }
  }, [pathname])

  // 拿到数据前不渲染(也覆盖 SSR 首帧,无 hydration mismatch)
  if (!stats) return null

  const fmt = (n: number) => n.toLocaleString(NUMBER_LOCALE[locale])
  const items: Array<[label: string, count: string]> = [
    [t(locale, 'statsTotalVisits'), fmt(stats.total)],
    [t(locale, 'statsTodayVisits'), fmt(stats.today)],
    [t(locale, 'statsTodayVisitors'), fmt(stats.visitors)],
  ]

  return (
    <div
      className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs"
      style={{ color: 'rgb(var(--text-faint))' }}
      aria-label={t(locale, 'statsAriaLabel')}
    >
      {items.map(([label, count]) => (
        <span key={label}>
          {label}{' '}
          <span className="font-semibold tabular-nums" style={{ color: 'rgb(var(--text-muted))' }}>
            {count}
          </span>
        </span>
      ))}
    </div>
  )
}
