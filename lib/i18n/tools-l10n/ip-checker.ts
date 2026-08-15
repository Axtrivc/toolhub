/**
 * ip-checker 本地化 bundle —— zh / es / de
 * 覆盖:useCases + faqs
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
    faqs: [
      {
        q: '什么是 IP 欺诈评分?它是怎么算出来的?',
        a: '欺诈评分是一个 0–100 的启发式评级,衡量在线平台眼中这个 IP 有多可疑。它综合了 ASN 类型(机房还是住宅)、设备时区与 IP 归属地时区是否一致、以及 ASN 所有者名称中的托管/代理关键词等信号。分数越高,这个 IP 越像机器人、VPN 或代理出口节点。',
      },
      {
        q: '住宅 ISP IP 和机房(IDC)IP 有什么区别?',
        a: '住宅 IP 由面向消费者的 ISP 分配给真实家庭,所以平台把它的流量当成人来对待。机房 IP 来自 AWS、Google Cloud、DigitalOcean 这类云厂商,可以低成本批量获取,TikTok、亚马逊等平台因此会重点标记它们——跑在机房 IP 上的账号会遇到多得多的验证挑战和封号。',
      },
      {
        q: '为什么我的设备时区和 IP 时区不一致?',
        a: '设备时区来自浏览器/操作系统设置,而 IP 时区是对出口 IP 做地理定位得出的。两者不一致——比如设备是 Asia/Shanghai 而 IP 解析到 America/New_York——几乎可以肯定你在用 VPN 或代理,反欺诈系统正是把这种不一致当作泄漏信号。',
      },
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
    faqs: [
      {
        q: '¿Qué es una puntuación de fraude IP y cómo se calcula?',
        a: 'Una puntuación de fraude es una valoración heurística de 0 a 100 de lo sospechosa que parece una IP para las plataformas online. Combina señales como el tipo de ASN (datacenter frente a residencial), las discrepancias entre la zona horaria de tu dispositivo y la de la geolocalización de la IP, y palabras clave de hosting/proxy en el nombre del propietario del ASN. Cuanto mayor es la puntuación, más se parece la IP a un bot, una VPN o un nodo de salida de proxy.',
      },
      {
        q: '¿Cuál es la diferencia entre una IP residencial y una IP de datacenter (IDC)?',
        a: 'Las IP residenciales las asignan ISP de consumo a hogares reales, por lo que las plataformas tratan su tráfico como humano. Las IP de datacenter provienen de proveedores de nube como AWS, Google Cloud o DigitalOcean; son baratas de obtener en volumen, y por eso TikTok, Amazon y plataformas similares las marcan — las cuentas operadas desde IP de datacenter se enfrentan a muchas más verificaciones y baneos.',
      },
      {
        q: '¿Por qué la zona horaria de mi dispositivo difiere de la de mi IP?',
        a: 'La zona horaria del dispositivo viene de la configuración del navegador/sistema operativo, mientras que la de la IP se deduce geolocalizando tu IP de salida. Si no coinciden — por ejemplo, el dispositivo reporta Asia/Shanghai pero la IP resuelve a America/New_York — casi seguro estás detrás de una VPN o proxy, y los sistemas antifraude usan justo ese desajuste como señal de fuga.',
      },
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
    faqs: [
      {
        q: 'Was ist ein IP-Betrugsscore und wie wird er berechnet?',
        a: 'Ein Betrugsscore ist eine heuristische Bewertung von 0 bis 100 dafür, wie riskant eine IP für Online-Plattformen wirkt. Er kombiniert Signale wie den ASN-Typ (Rechenzentrum vs. Wohnanschluss), Abweichungen zwischen der Geräte-Zeitzone und der Zeitzone der IP-Geolokalisierung sowie Hosting-/Proxy-Schlüsselwörter im Namen des ASN-Betreibers. Je höher der Score, desto mehr ähnelt die IP einem Bot, einem VPN oder einem Proxy-Exit-Knoten.',
      },
      {
        q: 'Was ist der Unterschied zwischen einer Residential-IP und einer Datacenter-IP (IDC)?',
        a: 'Residential-IPs werden von Consumer-Providern an echte Haushalte vergeben, weshalb Plattformen ihren Traffic als menschlich einstufen. Datacenter-IPs stammen von Cloud-Anbietern wie AWS, Google Cloud oder DigitalOcean; sie sind günstig in großer Zahl zu bekommen, deshalb flaggen TikTok, Amazon und ähnliche Plattformen sie — Accounts auf Datacenter-IPs erleben deutlich mehr Verifizierungsanforderungen und Sperren.',
      },
      {
        q: 'Warum weicht meine Geräte-Zeitzone von der IP-Zeitzone ab?',
        a: 'Die Geräte-Zeitzone stammt aus den Browser-/Systemeinstellungen, die IP-Zeitzone ergibt sich aus der Geolokalisierung deiner Exit-IP. Stimmen sie nicht überein — etwa meldet das Gerät Asia/Shanghai, während die IP nach America/New_York auflöst — sitzt du fast sicher hinter einem VPN oder Proxy, und Anti-Betrugssysteme nutzen genau diese Abweichung als Leck-Signal.',
      },
    ],
  },
}
