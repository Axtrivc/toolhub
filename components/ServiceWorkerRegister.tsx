'use client'

import { useEffect } from 'react'

/**
 * Service Worker 注册器
 *
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *  ⚠️ 注册条件(核心):
 *   - **不使用** process.env.NODE_ENV 做判断。该变量在 Next.js 静态导出
 *     (output: 'export') + Cloudflare Pages 构建时会被静态替换,但替换
 *     行为依赖构建命令显式设置 NODE_ENV=production,若未设置则替换为
 *     undefined,导致条件恒真 → 注册被静默跳过(SW 面板为空)。
 *   - 改用纯客户端、运行时校验:
 *       ① typeof window !== 'undefined'(SSR 安全)
 *       ② 'serviceWorker' in navigator(能力检测)
 *       ③ 非 localhost/127.0.0.1 开发环境(避免 SW 缓存 HMR 热更新资源)
 *     这三项都是运行时判定,不依赖任何构建时变量,生产环境(Cloudflare
 *     Pages / 任何静态托管)100% 触发注册。
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *
 * 行为:
 *  - 注册失败输出 console.error,便于在 DevTools 控制台排查
 *    (成功路径不打日志,避免生产环境泄露部署细节)。
 *  - 注册后调 registration.update():绕过浏览器默认 24h 更新检查间隔,
 *    让 sw.js 新版本分钟级生效(配合 sw.js 内 VERSION 常量)。
 *
 * 放在 app/layout.tsx 的 <body> 末尾,全站生效。
 */
export function ServiceWorkerRegister() {
  useEffect(() => {
    // ① SSR 安全:仅在客户端执行
    if (typeof window === 'undefined') return
    // ② 能力检测:不支持 SW 的浏览器直接跳过
    if (!('serviceWorker' in navigator)) return
    // ③ 开发环境保护:用 hostname 而非 NODE_ENV(NODE_ENV 静态替换不可靠)。
    //    localhost / 127.0.0.1 是 next dev 默认 host,SW 会缓存 HMR 资源干扰开发。
    const isDevHost =
      location.hostname === 'localhost' || location.hostname === '127.0.0.1' || location.hostname === '0.0.0.0'
    if (isDevHost) return

    const register = async () => {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js', {
          scope: '/',
        })
        // 主动检查更新(绕过浏览器默认 24h 间隔),让新版本尽快接管
        await registration.update()
      } catch (err) {
        // 失败日志:暴露具体错误(如 sw.js 语法错、HTTPS 缺失、scope 问题)
        console.error('SW registration failed:', err)
      }
    }

    // 页面 load 后注册,避免与首屏关键资源争抢带宽
    if (document.readyState === 'complete') {
      register()
    } else {
      window.addEventListener('load', register, { once: true })
    }
  }, [])

  return null
}
