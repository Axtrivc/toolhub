'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useApp } from './providers/AppProviders'
import { t, tc } from '@/lib/i18n'
import { SITE_NAME } from '@/lib/constants'
import { SiteStats } from './SiteStats'

/**
 * Footer 分类导航数据(由 app/layout.tsx 服务端预计算传入)。
 * Footer 只需 slug/name/category 三个轻字段(工具注册表 SEO 文案重数据
 * 留在服务端、不进客户端 bundle)——这是全站每页共载 chunk 瘦身的关键一环。
 */
export interface FooterNavCategory {
  category: string
  /** 该分类已上线工具总数(layout 仍传入;页脚精简后暂不使用) */
  total: number
  /** 该分类工具注册表声明顺序(layout 仍传入;页脚精简后暂不使用) */
  tools: { slug: string; name: string }[]
}

/**
 * 2026-11 收录修复(阶段二):页脚不再罗列每类 6 个工具 + "+N more"
 * (渲染约 103 个链接,全站每页重复,稀释抓取预算)。改为每个分类一个链接,
 * 直达首页分类筛选锚点 /?category=<cat>#all-tools(与原 "+N more" 同一
 * 目标,不新增路由、不改工具逻辑),渲染链接数降到约 21。
 */
export function Footer({ nav, totalCount }: { nav: FooterNavCategory[]; totalCount: number }) {
  // hydration 安全:首帧用 null(SSR 与 CSR 首帧一致渲染时不显示年份),
  // 挂载后再读真实年份,避免 SSR(构建时年份)与 CSR(运行时年份)不一致。
  const [year, setYear] = useState<number | null>(null)
  useEffect(() => setYear(new Date().getFullYear()), [])
  const { locale } = useApp()

  return (
    <footer data-embed-hide className="mt-16 border-t" style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }}>
      <div className="container-page py-10">
        {/* 分类导航 - 大网格:每类一个链接(原 6 工具 + more 链接墙已精简) */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
          {nav.map(({ category }) => (
            <div key={category}>
              <h3 className="mb-3 text-sm font-semibold" style={{ color: 'rgb(var(--text))' }}>
                <Link
                  href={`/?category=${encodeURIComponent(category)}#all-tools`}
                  className="hover:text-brand-600"
                >
                  {tc(locale, category)}
                </Link>
              </h3>
            </div>
          ))}
        </div>

        {/* 底部品牌 + 法律链接 */}
        <div className="mt-10 grid grid-cols-1 gap-6 border-t pt-8 sm:grid-cols-2" style={{ borderColor: 'rgb(var(--border))' }}>
          <div>
            <div className="flex items-center gap-2 font-bold" style={{ color: 'rgb(var(--text))' }}>
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
                T
              </span>
              <span className="text-lg">{SITE_NAME}</span>
            </div>
            <p className="mt-3 max-w-md text-sm" style={{ color: 'rgb(var(--text-subtle))' }}>
              {t(locale, 'footerTagline')}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm sm:justify-end">
            <Link href="/#all-tools" className="hover:text-brand-600 max-sm:py-2" style={{ color: 'rgb(var(--text-muted))' }}>
              {t(locale, 'navAllTools')}
            </Link>
            <Link href="/blog/" className="hover:text-brand-600 max-sm:py-2" style={{ color: 'rgb(var(--text-muted))' }}>
              {t(locale, 'navBlog')}
            </Link>
            <Link href="/about/" className="hover:text-brand-600 max-sm:py-2" style={{ color: 'rgb(var(--text-muted))' }}>
              {t(locale, 'footerAbout')}
            </Link>
            <Link href="/contact/" className="hover:text-brand-600 max-sm:py-2" style={{ color: 'rgb(var(--text-muted))' }}>
              {t(locale, 'footerContact')}
            </Link>
            <Link href="/privacy/" className="hover:text-brand-600 max-sm:py-2" style={{ color: 'rgb(var(--text-muted))' }}>
              {t(locale, 'footerPrivacy')}
            </Link>
            <Link href="/terms/" className="hover:text-brand-600 max-sm:py-2" style={{ color: 'rgb(var(--text-muted))' }}>
              {t(locale, 'footerTerms')}
            </Link>
          </div>
        </div>

        {/* 底栏:版权 + 站内访客计数(计数组件拿到数据前不渲染,本地 dev 自动隐藏) */}
        <div
          className="mt-6 flex flex-col gap-3 border-t pt-6 text-sm sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: 'rgb(var(--border))', color: 'rgb(var(--text-faint))' }}
        >
          <div>
            © {year ?? ''} {SITE_NAME}. {totalCount} {t(locale, 'footerRights')}
          </div>
          <SiteStats />
        </div>
      </div>
    </footer>
  )
}
