import type { ReactNode } from 'react'
import type { Viewport } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { AppProviders } from '@/components/providers/AppProviders'
import { ThemeInitScript } from '@/components/ThemeInitScript'
import { EmbedDetectScript } from '@/components/EmbedDetectScript'
import { AdSenseScript } from '@/components/AdSlot'
import { AnalyticsScript, PageViewTracker } from '@/components/Analytics'
import { CookieConsent } from '@/components/CookieConsent'
import { ServiceWorkerRegister } from '@/components/ServiceWorkerRegister'
import { SkipToContent } from '@/components/SkipToContent'
import { siteMetadata, websiteJsonLd, jsonLdStringify } from '@/lib/seo'

export const metadata = siteMetadata

/**
 * 显式 viewport - 移动端优化:
 *  - viewportFit=cover:配合 safe-area,适配刘海屏/异形屏;
 *  - themeColor:按系统明暗主题染色浏览器顶栏(移动端观感);
 *  - initialScale=1:避免首屏缩放。
 * Next 默认已注入基础 viewport,这里显式覆盖以加入 cover 与 themeColor。
 */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1e293b' },
  ],
}

/**
 * AdSense publisher ID(环境驱动)。
 * 设置 NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXX 后:
 *  - <head> 注入 AdSense 加载脚本(AdSenseScript 组件);
 *  - 输出 google-adsense-account meta(AdSense 新版站点验证,取 pub-XXXX 部分);
 *  - 所有 <AdSlot /> 渲染真实广告单元。
 * 未设置时以上全部不输出,站点行为与无广告时完全一致。
 */
const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT
const ADSENSE_PUB_ID = ADSENSE_CLIENT?.replace(/^ca-/, '') // ca-pub-xxx → pub-xxx

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* 主题防闪烁:在 React hydrate 前就应用主题,避免 FOUC */}
        <ThemeInitScript />
        {/* Embed 检测:被 iframe 嵌入时给 <html> 加 embed class,隐藏 chrome(零闪烁) */}
        <EmbedDetectScript />
        {/* AdSense 加载脚本(环境驱动:无 NEXT_PUBLIC_ADSENSE_CLIENT 时不渲染) */}
        <AdSenseScript />
        {/* 访客统计(CF Web Analytics 无 cookie 始终注入;GA4 受 Cookie 同意门控) */}
        <AnalyticsScript />
        {/* AdSense 站点验证 meta(新版验证方式,env 驱动) */}
        {ADSENSE_PUB_ID && (
          <meta name="google-adsense-account" content={ADSENSE_PUB_ID} />
        )}
        {/* 站点级结构化数据 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdStringify(websiteJsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <AppProviders>
          <SkipToContent />
          <Header />
          <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
            {children}
          </main>
          <Footer />
          {/* Cookie 同意横幅 - 合规(AdSense/GDPR/CCPA),延迟挂载不影响首屏。
              必须在 AppProviders 内:它消费 useApp() 读取 locale 做 4 语本地化。 */}
          <CookieConsent />
        </AppProviders>
        {/* GA4 SPA 客户端路由的 page_view 补发(CF beacon 自带,无需它管) */}
        <PageViewTracker />
        {/* PWA Service worker 注册 - 仅生产,客户端 load 后注册 */}
        <ServiceWorkerRegister />
      </body>
    </html>
  )
}
