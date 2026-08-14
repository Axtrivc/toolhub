/**
 * ip-checker 本地化 bundle —— zh / es / de
 * 覆盖:useCases(无 FAQ / formula 条目 → 仅 useCases)
 */
import type { ToolL10n } from '../tool-l10n'

export const ipCheckerL10n: ToolL10n = {
  zh: {
    ui: {
      'asn': 'ASN',
      'cfColo': 'CF 节点',
      'customQueryAria': '自定义 IP 或域名查询',
      'mapTitle': 'IP 位置地图 (OpenStreetMap)',
      'of100': '/ 100',
      'outOf5Stars': '/ 5 星',
      'riskScoreAria': '风险评分',
      'statusOk': '正常',
      'uaPrefix': 'UA',
    },
    useCases: [
      'IP 欺诈评分查询',
      '住宅 IP 与机房 IP 检测',
      'TikTok 专用 IP 质量检测',
      '免费在线代理 VPN 检测器',
    ],
  },
  es: {
    ui: {
      'asn': 'ASN',
      'cfColo': 'Colo CF',
      'customQueryAria': 'Consulta personalizada de IP o dominio',
      'mapTitle': 'Mapa de ubicación IP (OpenStreetMap)',
      'of100': 'de 100',
      'outOf5Stars': 'de 5 estrellas',
      'riskScoreAria': 'Puntuación de riesgo',
      'statusOk': 'OK',
      'uaPrefix': 'UA',
    },
    useCases: [
      'comprobador de puntuación de fraude IP',
      'comprobación IP residencial vs datacenter',
      'comprobador de calidad IP para TikTok',
      'detector de proxy VPN online gratis',
    ],
  },
  de: {
    ui: {
      'asn': 'ASN',
      'cfColo': 'CF-Colo',
      'customQueryAria': 'Eigene IP- oder Domain-Abfrage',
      'mapTitle': 'IP-Standortkarte (OpenStreetMap)',
      'of100': 'von 100',
      'outOf5Stars': 'von 5 Sternen',
      'riskScoreAria': 'Risiko-Score',
      'statusOk': 'OK',
      'uaPrefix': 'UA',
    },
    useCases: [
      'IP-Betrugsscore-Prüfer',
      'Residential-gegen-Datacenter-IP-Prüfung',
      'IP-Qualitäts-Prüfer für TikTok',
      'kostenloser Proxy-VPN-Detektor online',
    ],
  },
}
