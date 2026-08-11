'use client'

import type { ToolMeta } from '@/lib/tools'
import { useApp } from './providers/AppProviders'
import { t } from '@/lib/i18n'

/**
 * YMYL(Your Money or Your Life)免责声明 —— 防范 Google 金融/医疗类算法降权
 *
 * 作用:Google 对金融、医疗内容有更严格的 E-E-A-T(经验/专业/权威/可信)评估。
 * 显式标注"仅供参考、不构成专业建议"既是合规要求,也是向搜索引擎表明
 * 内容定位(教育性、非专业建议),降低 YMYL 算法降权风险。
 *
 * 触发条件:工具分类属于金融或健康类时渲染对应免责声明;其他工具不渲染。
 * 位置:工具卡片之后(靠近计算结果)、内容区之前 —— 符合用户阅读动线。
 *
 * 本地化:文案走 dict(seoDisclaimer 在 lib/i18n.ts);en 回退英文原值(SSR 恒英文)。
 */

type DisclaimerType = 'finance' | 'health'

function getDisclaimerType(category: string): DisclaimerType | null {
  if (/finance|financial/i.test(category)) return 'finance'
  if (/health|medical/i.test(category)) return 'health'
  return null
}

export function Disclaimer({ tool }: { tool: ToolMeta }) {
  const { locale } = useApp()
  const type = getDisclaimerType(tool.category)
  if (!type) return null

  const key = type === 'finance' ? 'disclaimerFinance' : 'disclaimerHealth'

  return (
    <p
      className="mt-6 max-w-3xl text-xs leading-relaxed"
      style={{ color: 'rgb(var(--text-subtle))' }}
    >
      {t(locale, key)}
    </p>
  )
}
