import type { MetadataRoute } from 'next'
import { SITE_URL } from '../next.config'

/**
 * Web App Manifest - 让站点可被"安装"为 PWA(添加到主屏幕/桌面),
 * 并在 Android 上显示图标和启动画面。AdSense 审核也会把它视作正规站点的信号。
 *
 * 静态导出模式(output: 'export')下,metadata 文件需显式声明为静态。
 */
export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ToolHub — Free Online Tools',
    short_name: 'ToolHub',
    description:
      'Collection of free, fast, and privacy-friendly online tools. No signup, no upload, works right in your browser.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    categories: ['utilities', 'productivity', 'developer'],
  }
}
