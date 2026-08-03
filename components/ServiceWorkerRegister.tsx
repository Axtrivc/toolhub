'use client'

import { useEffect } from 'react'

/**
 * Service Worker 注册器
 *
 * 行为:
 *  - 仅在生产环境注册(dev 下 SW 会缓存热更新资源,干扰开发)。
 *  - window guard:静态导出 SSR 安全。
 *  - 注册成功后调 registration.update():绕过浏览器默认 24h 更新检查间隔,
 *    让 sw.js 的新版本能在用户下次访问时分钟级生效(配合 sw.js 内的
 *    VERSION 常量 + skipWaiting + 清旧缓存)。
 *  - 监听 controllerchange:新 SW 接管时可在未来扩展为"刷新以加载新版"提示。
 *
 * 放在 app/layout.tsx 的 <body> 末尾,全站生效。
 */
export function ServiceWorkerRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return
    if (typeof window === 'undefined') return
    if (!('serviceWorker' in navigator)) return

    const register = async () => {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js', {
          scope: '/',
        })
        // 主动检查更新(绕过浏览器默认 24h 间隔),让新版本尽快接管
        await registration.update()
        // 监听新 SW 接管
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          // 新 SW 已控制页面;保持安静不打断用户,下次导航自然生效
        })
      } catch {
        // 注册失败静默忽略 —— 不影响工具正常使用,仅失去离线能力
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
