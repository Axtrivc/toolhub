/**
 * 访客统计 - 环境驱动的双通道接入(零后端,适配静态导出)
 *
 * 1) Cloudflare Web Analytics(推荐,默认通道)
 *    NEXT_PUBLIC_CF_ANALYTICS_TOKEN=xxxxxxxx
 *    获取:Cloudflare Dashboard → Analytics & Logs → Web Analytics →
 *    Add a site(toolhub.axtrivc.com)→ 复制 JS beacon token。
 *    特点:无 cookie、无 localStorage、不做跨站追踪与个人识别,仅在面板
 *    聚合展示 PV/UV/来源/国家/路径 —— 与隐私政策"privacy-friendly,
 *    aggregate analytics"的承诺一致,因此不经 Cookie 同意横幅门控,
 *    设置 token 即全站生效。SPA 客户端路由(history API)由 beacon
 *    自动上报,无需额外代码。
 *
 * 2) Google Analytics 4(可选,可与 AdSense 联动看收益归因)
 *    NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
 *    合规:GA4 依赖 cookie,与 AdSense 相同,仅在用户对横幅选择
 *    "接受全部"后才加载脚本(见 GoogleAnalytics.tsx)。
 *
 * 两个通道相互独立,都不设置时本组件输出为空,站点行为与现在完全一致。
 *
 * 实现说明:本文件是服务端组件(无 'use client'),CF beacon 用原生
 * <script defer> 直出到静态 HTML(与 ThemeInitScript 同模式),整刷时
 * 不依赖 React 水合、加载更早;GA4 需要读同意状态,是客户端组件,
 * 由 next/script 在水合后按需注入。
 */
import {
  GoogleAnalytics,
  PageViewTracker as GAPageViewTracker,
} from './GoogleAnalytics'

const CF_TOKEN = process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN
const GA_ID = process.env.NEXT_PUBLIC_GA_ID

/**
 * 统计脚本注入 - 在 app/layout.tsx 的 <head> 调用一次
 */
export function AnalyticsScript() {
  return (
    <>
      {CF_TOKEN && (
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon={JSON.stringify({ token: CF_TOKEN })}
        />
      )}
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </>
  )
}

/** GA4 SPA 路由追踪的服务端预配置包装(未配置 GA_ID 时输出为空) */
export function PageViewTracker() {
  if (!GA_ID) return null
  return <GAPageViewTracker enabled />
}
