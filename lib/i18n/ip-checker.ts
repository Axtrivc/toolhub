/**
 * ip-checker 工具 UI 文案 - 4 语字典
 *
 * 与 lib/i18n/pages.ts 同一模式:
 * - Record<Locale, IpCheckerDict>,en 为基准,缺失整包回退 en(组件内兜底)
 * - 只覆盖工具交互界面(卡片标题 / 徽章 / 按钮 / 错误提示 / 表格)
 * - SEO 字段(title/description/h1)与 content.tsx 长文本保持英文,不在此翻译
 *
 * 维护:加新 UI 文案时四个 locale 都加一个 key。
 */

import type { Locale } from '@/lib/i18n'

/** 跨境场景评级的 4 个用例 key(与组件内 useCaseStars 对应) */
export type UseCaseKey = 'tiktok' | 'ecom' | 'social' | 'ai'

export interface IpCheckerDict {
  // ── 头部:当前 IP + 查询 ──
  yourCurrentIp: string
  copyIp: string
  refresh: string
  queryPlaceholder: string
  analyze: string
  analyzing: string
  // ── 错误 / 加载提示 ──
  errorInvalidInput: string
  errorSources: string
  errorQuery: string
  loadingHint: string
  // ── 卡 A:IP 身份 ──
  cardIdentity: string
  locationUnknown: string
  tzUnknown: string
  badgeDatacenter: string
  badgeResidential: string
  badgeUnverifiedHost: string // 机房 IP 且无 PTR(原 isBroadcast,语义修正)
  badgeNativeIp: string
  // 当检测的是第三方 IP 时,本机相关信号(时区一致性 / WebRTC 泄漏)不适用
  signalNaBadge: string
  signalNaNote: string
  rowAsnOwner: string
  rowIsp: string
  rowPostal: string
  rowPtr: string
  rowSource: string
  // ── 卡 B:风险仪表盘 ──
  cardRisk: string
  gaugeLabel: string
  riskLow: string
  riskMedium: string
  riskHigh: string
  summaryDatacenter: string
  summaryResidential: string
  summaryTzMismatch: string // 追加在 summary 后,如 " + timezone mismatch"
  // ── 卡 C:地图 ──
  cardGeo: string
  mapUnavailable: string
  // ── 4 小卡:威胁与一致性 ──
  cardProxyTitle: string
  proxyDetected: string
  proxyClean: string
  proxyNote: string
  cardTzTitle: string
  tzMismatchBadge: string
  tzMatchBadge: string
  tzDevice: string
  tzIp: string
  cardProtoTitle: string
  protoV6: string
  protoV4: string
  cardWebrtcTitle: string
  webrtcTesting: string
  webrtcNoLeak: string
  webrtcLeak: string
  webrtcConsistent: string
  // ── 跨境场景评级矩阵 ──
  ratingsTitle: string
  useCaseLabels: Record<UseCaseKey, string>
  ratingRecommended: string
  ratingCaution: string
  ratingNotRecommended: string
  ratingsNote: string
  // ── 全球边缘延迟 ──
  latencyTitle: string
  runPingTest: string
  thRegion: string
  thEndpoint: string
  thLatency: string
  thStatus: string
  pingMeasuring: string
  pingTimeout: string
  pingIdle: string
  latencyNote: string
}

const en: IpCheckerDict = {
  yourCurrentIp: 'Your Current IP',
  copyIp: 'Copy IP',
  refresh: 'Refresh',
  queryPlaceholder: 'Check any IP or domain, e.g. 1.1.1.1 / 2606:4700::1111 / example.com',
  analyze: 'Analyze',
  analyzing: 'Analyzing…',
  errorInvalidInput: 'Enter a valid IPv4 / IPv6 address or domain (e.g. 8.8.8.8 or example.com).',
  errorSources: 'All data sources are temporarily unavailable. Please try again later (the free APIs may be rate-limited).',
  errorQuery: 'Lookup failed: could not resolve or geolocate that target. Check the input and try again.',
  loadingHint: 'Probing your IP fingerprint via multiple sources… (Cloudflare → ipwho.is → DoH)',
  cardIdentity: 'IP Identity',
  locationUnknown: 'Unknown',
  tzUnknown: 'tz unknown',
  badgeDatacenter: 'Datacenter (IDC) IP',
  badgeResidential: 'Native Residential ISP',
  badgeUnverifiedHost: 'Hosting (no rDNS)',
  badgeNativeIp: 'Native IP',
  signalNaBadge: 'Own-IP only',
  signalNaNote: 'This signal only applies when inspecting your own exit IP.',
  rowAsnOwner: 'ASN Owner',
  rowIsp: 'ISP / Company',
  rowPostal: 'Postal',
  rowPtr: 'PTR (Reverse DNS)',
  rowSource: 'Data Source',
  cardRisk: 'Risk / Fraud Score',
  gaugeLabel: 'FRAUD SCORE / 100',
  riskLow: 'Low Risk · Clean',
  riskMedium: 'Medium Risk · Hosting / VPN',
  riskHigh: 'High Risk · Proxy / Blacklisted',
  summaryDatacenter: 'Datacenter exit node',
  summaryResidential: 'Genuine residential signal',
  summaryTzMismatch: ' + Timezone mismatch',
  cardGeo: 'Geo Location',
  mapUnavailable: 'Coordinates unavailable — cannot render the map.',
  cardProxyTitle: 'Proxy / VPN Detection',
  proxyDetected: 'Datacenter traits detected',
  proxyClean: 'No public proxy detected',
  proxyNote: 'Heuristic based on ASN ownership keywords',
  cardTzTitle: 'Timezone Consistency',
  tzMismatchBadge: 'Timezone mismatch (proxy signal)',
  tzMatchBadge: 'Timezone consistent',
  tzDevice: 'Device',
  tzIp: 'IP',
  cardProtoTitle: 'IP Protocol',
  protoV6: 'Dual Stack IPv6',
  protoV4: 'IPv4 exit',
  cardWebrtcTitle: 'WebRTC / Header Leak',
  webrtcTesting: 'Testing…',
  webrtcNoLeak: 'No leak (browser protected)',
  webrtcLeak: 'WebRTC leak detected',
  webrtcConsistent: 'WebRTC matches exit IP',
  ratingsTitle: 'Cross-Border Use-Case Ratings',
  useCaseLabels: {
    tiktok: 'TikTok & Video Outreach',
    ecom: 'Cross-Border E-Commerce (Amazon/eBay/Shopify)',
    social: 'Social Media Ops (X/Facebook/Instagram)',
    ai: 'AI Services (ChatGPT/Claude/Gemini)',
  },
  ratingRecommended: 'Recommended',
  ratingCaution: 'Use with caution',
  ratingNotRecommended: 'Not recommended',
  ratingsNote:
    'Ratings are heuristic estimates from ASN type (residential/datacenter), timezone consistency, and service availability in the target country. For reference only.',
  latencyTitle: 'Global Edge Latency',
  runPingTest: 'Run Ping Test',
  thRegion: 'Region',
  thEndpoint: 'Endpoint',
  thLatency: 'Latency',
  thStatus: 'Status',
  pingMeasuring: 'Measuring…',
  pingTimeout: 'Timeout / blocked',
  pingIdle: 'Idle',
  latencyNote:
    'Measures HTTP round-trip time from your browser to AWS regional endpoints via fetch + performance.now() (includes DNS/TLS handshake on first connect). For relative comparison only.',
}

const zh: IpCheckerDict = {
  yourCurrentIp: '当前出口 IP',
  copyIp: '复制 IP',
  refresh: '刷新',
  queryPlaceholder: '查询任意 IP 或域名,如 1.1.1.1 / 2606:4700::1111 / example.com',
  analyze: '检测',
  analyzing: '检测中…',
  errorInvalidInput: '请输入合法的 IPv4 / IPv6 地址或域名(如 8.8.8.8 或 example.com)。',
  errorSources: '所有数据源暂时不可用,请稍后重试(可能是免费 API 限流)。',
  errorQuery: '查询失败:无法解析或定位该目标,请检查输入或稍后重试。',
  loadingHint: '正在通过多源接口探测您的 IP 指纹… (Cloudflare → ipwho.is → DoH)',
  cardIdentity: 'IP 身份',
  locationUnknown: '未知',
  tzUnknown: '时区未知',
  badgeDatacenter: 'IDC 机房 IP / 商业宽带',
  badgeResidential: '原生住宅 ISP',
  badgeUnverifiedHost: '机房(无 rDNS)',
  badgeNativeIp: '原生 IP',
  signalNaBadge: '仅本机 IP',
  signalNaNote: '该信号仅在检测您自己的出口 IP 时有效。',
  rowAsnOwner: 'ASN 归属',
  rowIsp: 'ISP / 公司',
  rowPostal: '邮编',
  rowPtr: 'PTR(反向 DNS)',
  rowSource: '数据源',
  cardRisk: '风险 / 欺诈评分',
  gaugeLabel: '欺诈评分 / 100',
  riskLow: '低风险 · 干净',
  riskMedium: '中风险 · 机房/VPN',
  riskHigh: '高风险 · 代理/黑名单',
  summaryDatacenter: '机房出口节点',
  summaryResidential: '真实住宅信号',
  summaryTzMismatch: ' + 时区不一致',
  cardGeo: '地理定位',
  mapUnavailable: '坐标不可用,无法渲染地图。',
  cardProxyTitle: 'Proxy / VPN 检测',
  proxyDetected: '检测到数据中心特征',
  proxyClean: '未检测到公开代理',
  proxyNote: '基于 ASN 归属关键词的启发式判定',
  cardTzTitle: '时区一致性',
  tzMismatchBadge: '时区不一致(代理信号)',
  tzMatchBadge: '时区一致',
  tzDevice: '设备',
  tzIp: 'IP',
  cardProtoTitle: 'IP 协议',
  protoV6: '双栈 IPv6',
  protoV4: 'IPv4 出口',
  cardWebrtcTitle: 'WebRTC / Header 泄漏',
  webrtcTesting: '检测中…',
  webrtcNoLeak: '无泄漏(浏览器已防护)',
  webrtcLeak: '检测到 WebRTC 泄漏',
  webrtcConsistent: 'WebRTC 与出口一致',
  ratingsTitle: '跨境场景适用性评级',
  useCaseLabels: {
    tiktok: 'TikTok / 短视频出海',
    ecom: '跨境电商(Amazon/eBay/Shopify)',
    social: '社媒运营(X/Facebook/Instagram)',
    ai: 'AI 服务(ChatGPT/Claude/Gemini)',
  },
  ratingRecommended: '推荐',
  ratingCaution: '谨慎使用',
  ratingNotRecommended: '不推荐',
  ratingsNote: '评级基于 ASN 类型(住宅/机房)、时区一致性与目标国家服务可用性启发式推算,仅供参考。',
  latencyTitle: '全球边缘延迟探测',
  runPingTest: '开始测速',
  thRegion: '区域',
  thEndpoint: '端点',
  thLatency: '延迟',
  thStatus: '状态',
  pingMeasuring: '测量中…',
  pingTimeout: '超时 / 被阻断',
  pingIdle: '待测',
  latencyNote:
    '通过 fetch + performance.now() 测量浏览器到各 AWS 区域端点的 HTTP 往返时间(含 DNS/TLS 首连开销),仅用于相对比较。',
}

const es: IpCheckerDict = {
  yourCurrentIp: 'Tu IP actual',
  copyIp: 'Copiar IP',
  refresh: 'Actualizar',
  queryPlaceholder: 'Consulta cualquier IP o dominio, p. ej. 1.1.1.1 / 2606:4700::1111 / example.com',
  analyze: 'Analizar',
  analyzing: 'Analizando…',
  errorInvalidInput: 'Introduce una dirección IPv4/IPv6 o un dominio válido (p. ej. 8.8.8.8 o example.com).',
  errorSources: 'Todas las fuentes de datos no están disponibles temporalmente. Inténtalo más tarde (posible límite de las APIs gratuitas).',
  errorQuery: 'Consulta fallida: no se pudo resolver ni geolocalizar el objetivo. Revisa la entrada e inténtalo de nuevo.',
  loadingHint: 'Sondeando tu huella de IP con múltiples fuentes… (Cloudflare → ipwho.is → DoH)',
  cardIdentity: 'Identidad de IP',
  locationUnknown: 'Desconocido',
  tzUnknown: 'zona horaria desconocida',
  badgeDatacenter: 'IP de centro de datos (IDC)',
  badgeResidential: 'ISP residencial nativo',
  badgeUnverifiedHost: 'Hosting (sin rDNS)',
  badgeNativeIp: 'IP nativa',
  signalNaBadge: 'Solo IP propia',
  signalNaNote: 'Esta señal solo aplica al inspeccionar tu propia IP de salida.',
  rowAsnOwner: 'Propietario del ASN',
  rowIsp: 'ISP / Empresa',
  rowPostal: 'Código postal',
  rowPtr: 'PTR (DNS inverso)',
  rowSource: 'Fuente de datos',
  cardRisk: 'Riesgo / Puntuación de fraude',
  gaugeLabel: 'PUNTUACIÓN DE FRAUDE / 100',
  riskLow: 'Riesgo bajo · Limpia',
  riskMedium: 'Riesgo medio · Hosting / VPN',
  riskHigh: 'Riesgo alto · Proxy / Lista negra',
  summaryDatacenter: 'Nodo de salida de centro de datos',
  summaryResidential: 'Señal residencial genuina',
  summaryTzMismatch: ' + Zona horaria no coincide',
  cardGeo: 'Geolocalización',
  mapUnavailable: 'Coordenadas no disponibles: no se puede mostrar el mapa.',
  cardProxyTitle: 'Detección de Proxy / VPN',
  proxyDetected: 'Rasgos de centro de datos detectados',
  proxyClean: 'No se detectó proxy público',
  proxyNote: 'Heurística basada en palabras clave del propietario del ASN',
  cardTzTitle: 'Consistencia de zona horaria',
  tzMismatchBadge: 'Zona horaria no coincide (señal de proxy)',
  tzMatchBadge: 'Zona horaria consistente',
  tzDevice: 'Dispositivo',
  tzIp: 'IP',
  cardProtoTitle: 'Protocolo IP',
  protoV6: 'IPv6 de pila dual',
  protoV4: 'Salida IPv4',
  cardWebrtcTitle: 'Fuga de WebRTC / Cabeceras',
  webrtcTesting: 'Probando…',
  webrtcNoLeak: 'Sin fugas (navegador protegido)',
  webrtcLeak: 'Fuga de WebRTC detectada',
  webrtcConsistent: 'WebRTC coincide con la IP de salida',
  ratingsTitle: 'Valoración por casos de uso transfronterizos',
  useCaseLabels: {
    tiktok: 'TikTok y divulgación en vídeo',
    ecom: 'Comercio electrónico transfronterizo (Amazon/eBay/Shopify)',
    social: 'Gestión de redes sociales (X/Facebook/Instagram)',
    ai: 'Servicios de IA (ChatGPT/Claude/Gemini)',
  },
  ratingRecommended: 'Recomendado',
  ratingCaution: 'Usar con cautela',
  ratingNotRecommended: 'No recomendado',
  ratingsNote:
    'Las valoraciones son estimaciones heurísticas basadas en el tipo de ASN (residencial/centro de datos), la consistencia de zona horaria y la disponibilidad del servicio en el país de destino. Solo como referencia.',
  latencyTitle: 'Latencia global de borde',
  runPingTest: 'Ejecutar prueba de ping',
  thRegion: 'Región',
  thEndpoint: 'Endpoint',
  thLatency: 'Latencia',
  thStatus: 'Estado',
  pingMeasuring: 'Midiendo…',
  pingTimeout: 'Tiempo agotado / bloqueado',
  pingIdle: 'Inactivo',
  latencyNote:
    'Mide el tiempo de ida y vuelta HTTP desde tu navegador a los endpoints regionales de AWS con fetch + performance.now() (incluye DNS/TLS en la primera conexión). Solo para comparación relativa.',
}

const de: IpCheckerDict = {
  yourCurrentIp: 'Deine aktuelle IP',
  copyIp: 'IP kopieren',
  refresh: 'Aktualisieren',
  queryPlaceholder: 'Beliebige IP oder Domain prüfen, z. B. 1.1.1.1 / 2606:4700::1111 / example.com',
  analyze: 'Analysieren',
  analyzing: 'Analysiere…',
  errorInvalidInput: 'Gib eine gültige IPv4-/IPv6-Adresse oder Domain ein (z. B. 8.8.8.8 oder example.com).',
  errorSources: 'Alle Datenquellen sind vorübergehend nicht verfügbar. Bitte später erneut versuchen (mögliches Rate-Limit der Gratis-APIs).',
  errorQuery: 'Abfrage fehlgeschlagen: Ziel konnte nicht aufgelöst oder geolokalisiert werden. Eingabe prüfen und erneut versuchen.',
  loadingHint: 'Dein IP-Fingerprint wird über mehrere Quellen ermittelt… (Cloudflare → ipwho.is → DoH)',
  cardIdentity: 'IP-Identität',
  locationUnknown: 'Unbekannt',
  tzUnknown: 'Zeitzone unbekannt',
  badgeDatacenter: 'Rechenzentrums-IP (IDC)',
  badgeResidential: 'Nativer Privat-ISP',
  badgeUnverifiedHost: 'Hosting (ohne rDNS)',
  badgeNativeIp: 'Native IP',
  signalNaBadge: 'Nur eigene IP',
  signalNaNote: 'Dieses Signal gilt nur bei der Prüfung der eigenen Exit-IP.',
  rowAsnOwner: 'ASN-Inhaber',
  rowIsp: 'ISP / Firma',
  rowPostal: 'PLZ',
  rowPtr: 'PTR (Reverse DNS)',
  rowSource: 'Datenquelle',
  cardRisk: 'Risiko / Fraud-Score',
  gaugeLabel: 'FRAUD-SCORE / 100',
  riskLow: 'Niedriges Risiko · Sauber',
  riskMedium: 'Mittleres Risiko · Hosting / VPN',
  riskHigh: 'Hohes Risiko · Proxy / Blacklist',
  summaryDatacenter: 'Rechenzentrums-Exit-Node',
  summaryResidential: 'Echtes Privatanschluss-Signal',
  summaryTzMismatch: ' + Zeitzone weicht ab',
  cardGeo: 'Geolokalisierung',
  mapUnavailable: 'Koordinaten nicht verfügbar — Karte kann nicht gerendert werden.',
  cardProxyTitle: 'Proxy-/VPN-Erkennung',
  proxyDetected: 'Rechenzentrums-Merkmale erkannt',
  proxyClean: 'Kein öffentlicher Proxy erkannt',
  proxyNote: 'Heuristik anhand von Stichworten im ASN-Inhaber',
  cardTzTitle: 'Zeitzonen-Konsistenz',
  tzMismatchBadge: 'Zeitzone weicht ab (Proxy-Signal)',
  tzMatchBadge: 'Zeitzone konsistent',
  tzDevice: 'Gerät',
  tzIp: 'IP',
  cardProtoTitle: 'IP-Protokoll',
  protoV6: 'Dual-Stack IPv6',
  protoV4: 'IPv4-Exit',
  cardWebrtcTitle: 'WebRTC-/Header-Leak',
  webrtcTesting: 'Teste…',
  webrtcNoLeak: 'Kein Leak (Browser geschützt)',
  webrtcLeak: 'WebRTC-Leak erkannt',
  webrtcConsistent: 'WebRTC stimmt mit Exit-IP überein',
  ratingsTitle: 'Bewertung grenzüberschreitender Anwendungsfälle',
  useCaseLabels: {
    tiktok: 'TikTok & Video-Outreach',
    ecom: 'Grenzüberschreitender E-Commerce (Amazon/eBay/Shopify)',
    social: 'Social-Media-Betrieb (X/Facebook/Instagram)',
    ai: 'KI-Dienste (ChatGPT/Claude/Gemini)',
  },
  ratingRecommended: 'Empfohlen',
  ratingCaution: 'Mit Vorsicht nutzen',
  ratingNotRecommended: 'Nicht empfohlen',
  ratingsNote:
    'Die Bewertungen sind heuristische Schätzungen auf Basis des ASN-Typs (Privat/Rechenzentrum), der Zeitzonen-Konsistenz und der Dienstverfügbarkeit im Zielland. Nur zur Orientierung.',
  latencyTitle: 'Globale Edge-Latenz',
  runPingTest: 'Ping-Test starten',
  thRegion: 'Region',
  thEndpoint: 'Endpunkt',
  thLatency: 'Latenz',
  thStatus: 'Status',
  pingMeasuring: 'Messung…',
  pingTimeout: 'Timeout / blockiert',
  pingIdle: 'Bereit',
  latencyNote:
    'Misst die HTTP-Roundtrip-Zeit von deinem Browser zu regionalen AWS-Endpunkten via fetch + performance.now() (inkl. DNS/TLS beim ersten Connect). Nur für den relativen Vergleich.',
}

export const ipCheckerDicts: Record<Locale, IpCheckerDict> = { en, zh, es, de }
