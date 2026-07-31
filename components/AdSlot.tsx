import { SITE_URL } from '../next.config'

/**
 * 广告位组件 - 预留位,AdSense 审核通过后接入
 *
 * 使用方式:
 *   <AdSlot slot="homepage-top" format="auto" />
 *
 * AdSense 通过后:
 * 1. 在 app/layout.tsx 的 <head> 里放 AdSense 的 <Script>(ca-pub-xxxx)
 * 2. 把本组件内的占位替换为 <ins className="adsbygoogle" ... />
 * 3. 在 pageuseEffect 里 push adsbygoogle
 *
 * 现在只渲染一个带 aria-hidden 的占位 div,不影响布局也不报错。
 */

interface AdSlotProps {
  /** 广告位标识,用于区分位置统计 */
  slot: string
  /** AdSense 广告格式: 'auto' | 'horizontal' | 'vertical' | 'rectangle' */
  format?: 'auto' | 'horizontal' | 'vertical' | 'rectangle'
  /** 是否全宽 */
  fullWidth?: boolean
}

export function AdSlot({ slot, format = 'auto', fullWidth = false }: AdSlotProps) {
  // AdSense 尚未接入:渲染一个低调的占位框,不展示广告也不留空白塌陷
  // 通过审核后把下面替换成真实的 <ins className="adsbygoogle"> 即可
  if (process.env.NODE_ENV === 'production') {
    // 生产环境:完全隐藏,等接入广告后这段会被替换
    return null
  }

  // 开发环境:显示占位框,方便看到广告位的位置
  return (
    <div
      data-ad-slot={slot}
      data-ad-format={format}
      aria-hidden="true"
      className={`my-6 flex min-h-[90px] items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-100/50 text-xs text-slate-400 ${
        fullWidth ? 'w-full' : 'mx-auto max-w-[728px]'
      }`}
    >
      Ad Placeholder ({slot})
    </div>
  )
}

/**
 * AdSense 脚本注入(待接入)
 * AdSense 通过后,把这段注释取消,并在 layout.tsx 的 <head> 调用 <AdSenseScript />
 *
 * 使用前:
 * 1. 在项目根目录 .env.local 加 NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
 * 2. 取消下面注释
 */
// export function AdSenseScript() {
//   const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT
//   if (!client) return null
//   return (
//     <Script
//       id="adsense"
//       async
//       src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
//       crossOrigin="anonymous"
//       strategy="afterInteractive"
//     />
//   )
// }

// 占位导出,避免未使用告警(SITE_URL 在上面的注释代码中会用到)
export const _ADSENSE_BASE = SITE_URL
