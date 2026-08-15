import type { NextConfig } from 'next'

/**
 * 静态导出配置
 * build 后生成 out/ 目录,可直接上传到 Cloudflare Pages / Vercel / Netlify 等静态托管。
 * 注意:静态导出不支持服务端功能(API routes、SSR、图片优化优化器)。
 * 站点配置:修改 lib/constants.ts 的 SITE_URL 为你最终的域名,影响 sitemap / canonical / og:url。
 * (此处 re-export 仅为兼容既有引用;新代码请直接 import '@/lib/constants')
 */
export { SITE_URL } from './lib/constants'

const nextConfig: NextConfig = {
  output: 'export',
  // 静态导出时,图片组件使用 unoptimized(本地/外部图片都直接走原始链接)
  images: {
    unoptimized: true,
  },
  // trailingSlash:为每个路由输出 <slug>/index.html,兼容纯静态托管的路由约定
  trailingSlash: true,
  // React Strict Mode:开发环境下组件双重渲染/ effects 双跑,及早暴露副作用问题(不影响生产构建)
  reactStrictMode: true,
}

export default nextConfig
