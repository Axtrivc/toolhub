/**
 * ip-checker 本地化 bundle —— zh / es / de
 * 覆盖:useCases(无 FAQ / formula 条目 → 仅 useCases)
 */
import type { ToolL10n } from '../tool-l10n'

export const ipCheckerL10n: ToolL10n = {
  zh: {
    useCases: [
      'IP 欺诈评分查询',
      '住宅 IP 与机房 IP 检测',
      'TikTok 专用 IP 质量检测',
      '免费在线代理 VPN 检测器',
    ],
  },
  es: {
    useCases: [
      'comprobador de puntuación de fraude IP',
      'comprobación IP residencial vs datacenter',
      'comprobador de calidad IP para TikTok',
      'detector de proxy VPN online gratis',
    ],
  },
  de: {
    useCases: [
      'IP-Betrugsscore-Prüfer',
      'Residential-gegen-Datacenter-IP-Prüfung',
      'IP-Qualitäts-Prüfer für TikTok',
      'kostenloser Proxy-VPN-Detektor online',
    ],
  },
}
