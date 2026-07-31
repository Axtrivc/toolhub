import type { NextConfig } from 'next'

/**
 * 静态导出配置
 * build 后生成 out/ 目录,可直接上传到 Cloudflare Pages / Vercel / Netlify 等静态托管。
 * 注意:静态导出不支持服务端功能(API routes、SSR、图片优化优化器)。
 * 站点配置:修改下面 SITE_URL 为你最终的域名,影响 sitemap / canonical / og:url。
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://toolhub.axtrivc.com'

const nextConfig: NextConfig = {
  output: 'export',
  // 静态导出时,图片组件使用 unoptimized(本地/外部图片都直接走原始链接)
  images: {
    unoptimized: true,
  },
  // 让 /me 重定向为 /me/,并输出 /me/index.html,兼容纯静态托管的路由
  trailingSlash: true,
  // 自动为每个页面生成带 locale 的 HTML 文件
  reactStrictMode: true,
}

export default nextConfig
