import type { ReactNode } from 'react'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { AppProviders } from '@/components/providers/AppProviders'
import { ThemeInitScript } from '@/components/ThemeInitScript'
import { siteMetadata, websiteJsonLd } from '@/lib/seo'

export const metadata = siteMetadata

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* 主题防闪烁:在 React hydrate 前就应用主题,避免 FOUC */}
        <ThemeInitScript />
        {/* AdSense 审核通过后,在这里加 <Script> 引入 AdSense 库,见 components/AdSlot.tsx */}
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
      </body>
    </html>
  )
}
