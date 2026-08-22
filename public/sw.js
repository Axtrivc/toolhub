/**
 * ToolHub Service Worker — PWA 离线运行 + 静态资源缓存
 *
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *  ⚠️ 防强缓存机制(关键):
 *   - 顶部 VERSION 常量,每次代码更新必须递增(如 v1.0.0 → v1.0.1)。
 *   - 静态导出(output:'export')部署后,本文件名固定为 /sw.js,
 *     浏览器对 sw.js 本身有最长 24h 的更新检查间隔。
 *     通过 VERSION + install 时 skipWaiting + activate 清理旧版本缓存,
 *     确保用户在下次访问时分钟级拿到最新版本,旧缓存不残留。
 *   - 注册侧(ServiceWorkerRegister.tsx)每次页面加载主动调
 *     registration.update(),绕过 24h 默认间隔。
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *
 * 缓存策略(惰性缓存,适配 138+ 工具页):
 *  - HTML 导航请求:network-first(保证看到最新版),网络失败回退缓存,
 *    再失败回退离线兜底页。
 *  - 静态资源(_next/static、图片、字体、js、css):stale-while-revalidate,
 *    秒开 + 后台更新。
 *  - 不缓存:跨域第三方请求(adsense、分析)、POST 请求。
 *
 * 用户访问过的页才会被缓存 —— 这是"works offline"的真实价值:
 * 首次访问需联网,二次起离线可用。
 */

// ===== 版本号:每次更新本文件递增此值,触发新 SW 接管 + 旧缓存清理 =====
const VERSION = 'toolhub-sw-v1.0.2'
const STATIC_CACHE = `static-${VERSION}`
const RUNTIME_CACHE = `runtime-${VERSION}`

// 预缓存的 app shell(离线兜底 + 首页)
const PRECACHE_URLS = ['/', '/manifest.json']

// 离线兜底页(网络全失败时显示)。静态导出无独立 offline.html,
// 回退到已缓存的首页(/),保证用户至少能看到工具入口。
const OFFLINE_FALLBACK = '/'

// ─────────── install:预缓存 app shell,立即激活 ───────────
self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(STATIC_CACHE)
      // 用 addAll 批量预缓存;单个失败不阻塞整体(避免某资源 404 导致 SW 装不上)
      await Promise.allSettled(PRECACHE_URLS.map((url) => cache.add(url)))
      // 立即激活新 SW,跳过 waiting 阶段
      await self.skipWaiting()
    })(),
  )
})

// ─────────── activate:清旧版本缓存,立即接管页面 ───────────
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys()
      // 保留当前 VERSION 的缓存,删除所有其它(旧版本)
      await Promise.all(
        keys
          .filter((key) => !key.endsWith(VERSION))
          .map((key) => caches.delete(key)),
      )
      // 立即控制所有已打开的页面(否则需刷新才接管)
      await self.clients.claim()
    })(),
  )
})

// ─────────── fetch:分流缓存策略 ───────────
self.addEventListener('fetch', (event) => {
  const { request } = event

  // 只处理 GET;POST/PUT 等不缓存(广告点击、表单提交)
  if (request.method !== 'GET') return

  const url = new URL(request.url)

  // 跨域请求不缓存(AdSense、分析脚本等第三方),直接放行给浏览器
  if (url.origin !== self.location.origin) return

  // /api/*:站内访客统计等 Pages Functions 动态接口,必须实时,
  // 不进任何缓存策略(SWR 会回陈旧计数),直接放行给浏览器
  if (url.pathname.startsWith('/api/')) return

  // HTML 导航请求:network-first
  if (request.mode === 'navigate' || (request.headers.get('accept') || '').includes('text/html')) {
    event.respondWith(networkFirst(request))
    return
  }

  // 静态资源:stale-while-revalidate
  if (isStaticAsset(url.pathname)) {
    event.respondWith(staleWhileRevalidate(request))
    return
  }

  // 无哈希的文本/RSC 资源(*.txt、含 __next. 的 RSC payload):发版后内容会变,
  // 落入 SWR 兜底会有陈旧内容窗口,改走 network-first 保证拿到最新。
  if (isVersionedTextAsset(url.pathname)) {
    event.respondWith(networkFirst(request))
    return
  }

  // 其它同源 GET 也走 SWR(如 API、动态数据),保持一致性
  event.respondWith(staleWhileRevalidate(request))
})

// ─────────── 策略实现 ───────────

/**
 * Network-first:优先拿最新 HTML,失败回退缓存,再失败回退离线页。
 * 保证用户看到最新内容,同时离线可用。
 */
async function networkFirst(request) {
  const cache = await caches.open(RUNTIME_CACHE)
  try {
    const fresh = await fetch(request)
    // 成功则更新缓存(仅缓存有效响应)
    if (fresh && fresh.ok && fresh.type === 'basic') {
      cache.put(request, fresh.clone()).then(() => trimRuntimeCache(cache)).catch(() => {})
    }
    return fresh
  } catch (err) {
    // 网络失败:先找缓存
    const cached = await cache.match(request)
    if (cached) return cached
    // 缓存也没有:回退到首页(离线兜底)
    const fallback = await cache.match(OFFLINE_FALLBACK)
    if (fallback) return fallback
    throw err
  }
}

/**
 * Stale-while-revalidate:立即返回缓存(秒开),后台同时拉新版更新缓存。
 * 无缓存时走网络。适配静态资源(_next/static 带哈希,可长期缓存)。
 */
async function staleWhileRevalidate(request) {
  const cache = await caches.open(RUNTIME_CACHE)
  const cached = await cache.match(request)

  const networkPromise = fetch(request)
    .then((fresh) => {
      if (fresh && fresh.ok && fresh.type === 'basic') {
        cache.put(request, fresh.clone()).then(() => trimRuntimeCache(cache)).catch(() => {})
      }
      return fresh
    })
    .catch(() => cached) // 网络失败且无缓存 → 由调用方处理

  // 有缓存先返缓存,网络结果后台更新
  return cached || networkPromise
}

/** 判断是否为带哈希的静态资源(可激进缓存) */
function isStaticAsset(pathname) {
  return (
    pathname.startsWith('/_next/static/') ||
    /\.(?:js|css|woff2?|ttf|otf|png|jpe?g|gif|webp|svg|ico|avif)$/i.test(pathname)
  )
}

/**
 * 判断是否为"无哈希但发版会变"的文本/RSC 资源。
 * 这些资源没有内容哈希,落入 SWR 兜底会有陈旧窗口,改走 network-first。
 *  - *.txt:IndexNow 密钥、ads.txt、robots.txt 等,发版可能更新
 *  - 含 __next. 的路径:Next 的 RSC payload(__next.js / __next/data 等),无哈希
 */
function isVersionedTextAsset(pathname) {
  return /\.txt$/i.test(pathname) || pathname.includes('__next.')
}

/** RUNTIME_CACHE 容量上限:超过则删最旧的条目,避免长期运行无限膨胀。 */
const RUNTIME_CACHE_MAX = 100
async function trimRuntimeCache(cache) {
  const keys = await cache.keys()
  if (keys.length <= RUNTIME_CACHE_MAX) return
  // cache.keys() 按插入顺序返回,删最旧的若干条直至回到上限内
  const excess = keys.length - RUNTIME_CACHE_MAX
  for (let i = 0; i < excess; i++) {
    await cache.delete(keys[i])
  }
}

// ─────────── 消息通道:页面可主动通知 SW 立即激活(skipWaiting) ───────────
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting()
})
