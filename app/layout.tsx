import type { ReactNode } from 'react'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { AppProviders } from '@/components/providers/AppProviders'
import { ThemeInitScript } from '@/components/ThemeInitScript'
import { AdSenseScript } from '@/components/AdSlot'
import { CookieConsent } from '@/components/CookieConsent'
import { siteMetadata, websiteJsonLd } from '@/lib/seo'

export const metadata = siteMetadata

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
        {/* AdSense 加载脚本(环境驱动:无 NEXT_PUBLIC_ADSENSE_CLIENT 时不渲染) */}
        <AdSenseScript />
        {/* AdSense 站点验证 meta(新版验证方式,env 驱动) */}
        {ADSENSE_PUB_ID && (
          <meta name="google-adsense-account" content={ADSENSE_PUB_ID} />
        )}
        {/* 站点级结构化数据 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <AppProviders>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </AppProviders>
        {/* Cookie 同意横幅 - 合规(AdSense/GDPR/CCPA),延迟挂载不影响首屏 */}
        <CookieConsent />
      </body>
    </html>
  )
}
