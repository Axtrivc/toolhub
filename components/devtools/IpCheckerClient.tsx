'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { CopyButton } from '@/components/CopyButton'
import { useApp } from '@/components/providers/AppProviders'
import { ipCheckerDicts, type IpCheckerDict, type UseCaseKey } from '@/lib/i18n/ip-checker'

/**
 * IP Quality & Fraud Score Inspector —— 纯客户端多源探测仪表盘
 *
 * 数据链路(全部浏览器直连,零后端成本):
 *  Tier 1 即时探测: speed.cloudflare.com/meta → /cdn-cgi/trace → api.ipify.org
 *  Tier 2 富 Geo/ASN: ipwho.is/{ip} → ipapi.co/{ip}/json/
 *  辅助: Cloudflare DoH(域名解析 + PTR 反查)、RTCPeerConnection(WebRTC 泄漏)、
 *        AWS 各区域 S3 端点(no-cors 计时,全球边缘延迟探测)
 *
 * 风控评分是本地启发式加权模型(见 lib/tool-formulas.ts 的 ip-checker 条目):
 *  Risk = W_type·S_datacenter + W_tz·S_timezone_diff + W_bl·S_blacklist
 */

// ─────────────────────────── 类型 ───────────────────────────

interface GeoData {
  ip: string
  ipType: 'IPv4' | 'IPv6'
  asn: number | null
  asnOrg: string
  isp: string
  country: string
  countryCode: string
  flagEmoji: string
  region: string
  city: string
  latitude: number | null
  longitude: number | null
  postal: string
  timezoneId: string
  source: string
}

interface TraceData {
  ip: string
  colo: string
  countryCode: string
}

type RiskLevel = 'low' | 'medium' | 'high'

interface IpAnalysis {
  geo: GeoData
  ptr: string | null
  isDatacenter: boolean
  isUnverifiedHosting: boolean // 机房 IP 且无 PTR(原 isBroadcast,语义修正)
  proxyKeyword: boolean
  tzMismatch: boolean
  deviceTz: string
  score: number
  level: RiskLevel
}

interface PingResult {
  status: 'idle' | 'running' | 'ok' | 'fail'
  ms: number | null
}

// ─────────────────────────── 常量 ───────────────────────────

/** 机房 / IDC 关键词(命中即判 datacenter) */
const DATACENTER_KEYWORDS = [
  'amazon', 'aws', 'google', 'microsoft', 'azure', 'cloudflare', 'digitalocean',
  'linode', 'akamai technologies', 'vultr', 'hetzner', 'ovh', 'oracle', 'alibaba',
  'aliyun', 'tencent', 'qcloud', 'huawei', 'hosting', 'datacenter', 'data center',
  'cloud', 'server', 'cdn', 'fastly', 'leaseweb', 'choopa', 'contabo', 'm247',
  'scaleway', 'equinix', 'cogent', 'gtt', 'zayo', 'layer3', 'backbone',
]

/** 代理 / VPN 品牌关键词(近似黑名单信号) */
const PROXY_KEYWORDS = [
  'vpn', 'proxy', 'nordvpn', 'expressvpn', 'surfshark', 'mullvad', 'proton',
  'tor', 'exit node', 'anonymous', 'm247', 'datacamp', 'packet exchange',
]

/** ChatGPT/Claude 等 AI 服务不可用的国家/地区(近似清单) */
const AI_BLOCKED_COUNTRIES = ['CN', 'RU', 'BY', 'IR', 'KP', 'CU', 'SY', 'AF', 'VE', 'HK', 'MO']

/** 全球边缘延迟探测端点(no-cors 计时,只测 RTT 不读内容) */
const EDGE_ENDPOINTS: { id: string; flag: string; label: string; url: string }[] = [
  { id: 'us-west', flag: '🇺🇸', label: 'US West (AWS Oregon)', url: 'https://s3.us-west-2.amazonaws.com/?ipq-ping' },
  { id: 'us-east', flag: '🇺🇸', label: 'US East (AWS N. Virginia)', url: 'https://s3.us-east-1.amazonaws.com/?ipq-ping' },
  { id: 'tokyo', flag: '🇯🇵', label: 'Tokyo (AWS ap-northeast-1)', url: 'https://s3.ap-northeast-1.amazonaws.com/?ipq-ping' },
  { id: 'singapore', flag: '🇸🇬', label: 'Singapore (AWS ap-southeast-1)', url: 'https://s3.ap-southeast-1.amazonaws.com/?ipq-ping' },
  { id: 'frankfurt', flag: '🇩🇪', label: 'Frankfurt (AWS eu-central-1)', url: 'https://s3.eu-central-1.amazonaws.com/?ipq-ping' },
]

// ─────────────────────────── 校验 ───────────────────────────

const DOMAIN_RE = /^(?=.{1,253}\.?$)([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,63}\.?$/

function isValidIPv4(s: string): boolean {
  const parts = s.split('.')
  return parts.length === 4 && parts.every((p) => /^\d{1,3}$/.test(p) && Number(p) <= 255 && String(Number(p)) === p)
}

function isValidIPv6(s: string): boolean {
  if (!s.includes(':')) return false
  if ((s.match(/::/g) ?? []).length > 1) return false
  return /^[0-9a-fA-F:]+$/.test(s) && s.split(':').every((h) => h.length <= 4)
}

function classifyTarget(raw: string): 'ipv4' | 'ipv6' | 'domain' | null {
  const s = raw.trim()
  if (isValidIPv4(s)) return 'ipv4'
  if (isValidIPv6(s)) return 'ipv6'
  if (DOMAIN_RE.test(s)) return 'domain'
  return null
}

// ─────────────────────────── 数据获取 ───────────────────────────

/** 只接受真正的字符串;对象/数组/数字一律归一为 ''(防止 API 返回嵌套对象时 React 渲染崩溃) */
function asStr(v: unknown): string {
  return typeof v === 'string' ? v : ''
}

/** 只接受有限数字,否则回退 null(防止 NaN 进入 SVG path / toFixed) */
function asNum(v: unknown): number | null {
  const n = typeof v === 'number' ? v : typeof v === 'string' ? Number(v) : NaN
  return Number.isFinite(n) ? n : null
}

async function fetchJson<T>(url: string, timeoutMs = 9000, headers?: Record<string, string>): Promise<T> {
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), timeoutMs)
  try {
    const res = await fetch(url, { signal: ctrl.signal, cache: 'no-store', headers })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return (await res.json()) as T
  } finally {
    clearTimeout(timer)
  }
}

/** 从 speed.cloudflare.com/meta 的 colo 字段提取 IATA 码——该字段历史上是字符串,现在是对象 {iata, lat, lon, cca2, region, city} */
function extractColo(colo: unknown): string {
  if (typeof colo === 'string') return colo
  if (colo && typeof colo === 'object') return asStr((colo as Record<string, unknown>).iata)
  return ''
}

/** Tier 1:即时拿到出口 IP / 国家码 / Cloudflare Colo */
async function fetchTrace(): Promise<TraceData | null> {
  try {
    const meta = await fetchJson<{ clientIp?: unknown; colo?: unknown; country?: unknown }>(
      'https://speed.cloudflare.com/meta',
      5000,
    )
    const ip = asStr(meta.clientIp)
    if (ip) return { ip, colo: extractColo(meta.colo), countryCode: asStr(meta.country) }
  } catch { /* fall through */ }
  try {
    const res = await fetch('/cdn-cgi/trace', { cache: 'no-store' })
    if (res.ok) {
      const text = await res.text()
      const map = Object.fromEntries(
        text.trim().split('\n').map((l) => {
          const idx = l.indexOf('=')
          return idx === -1 ? [l, ''] : [l.slice(0, idx), l.slice(idx + 1)]
        }),
      )
      const ip = asStr(map.ip)
      if (ip) return { ip, colo: asStr(map.colo), countryCode: asStr(map.loc) }
    }
  } catch { /* fall through */ }
  try {
    const data = await fetchJson<{ ip?: unknown }>('https://api.ipify.org?format=json', 5000)
    const ip = asStr(data.ip)
    if (ip) return { ip, colo: '', countryCode: '' }
  } catch { /* give up */ }
  return null
}

interface IpWhoIsResponse {
  success: boolean
  ip?: unknown
  type?: unknown
  country?: unknown
  country_code?: unknown
  region?: unknown
  city?: unknown
  latitude?: unknown
  longitude?: unknown
  postal?: unknown
  flag?: { emoji?: unknown }
  connection?: { asn?: unknown; org?: unknown; isp?: unknown }
  timezone?: { id?: unknown }
}

interface IpApiCoResponse {
  ip?: unknown
  version?: unknown
  country_name?: unknown
  country_code?: unknown
  region?: unknown
  city?: unknown
  latitude?: unknown
  longitude?: unknown
  postal?: unknown
  timezone?: unknown
  asn?: unknown
  org?: unknown
}

/** Tier 2:富 Geo + ASN,双源回退;所有字段经 asStr/asNum 归一,杜绝嵌套对象/NaN 流入渲染层 */
async function fetchGeo(ip: string): Promise<GeoData> {
  try {
    const d = await fetchJson<IpWhoIsResponse>(`https://ipwho.is/${encodeURIComponent(ip)}`)
    const resolvedIp = asStr(d?.ip)
    if (d?.success && resolvedIp) {
      return {
        ip: resolvedIp,
        ipType: d.type === 'IPv6' ? 'IPv6' : 'IPv4',
        asn: asNum(d.connection?.asn),
        asnOrg: asStr(d.connection?.org),
        isp: asStr(d.connection?.isp),
        country: asStr(d.country),
        countryCode: asStr(d.country_code),
        flagEmoji: asStr(d.flag?.emoji),
        region: asStr(d.region),
        city: asStr(d.city),
        latitude: asNum(d.latitude),
        longitude: asNum(d.longitude),
        postal: asStr(d.postal),
        timezoneId: asStr(d.timezone?.id),
        source: 'ipwho.is',
      }
    }
    throw new Error('ipwho.is unsuccessful')
  } catch { /* fallback below */ }

  // ip 为空(Tier 1 全失败、走 Tier 2 自报调用方 IP)时用裸根端点,
  // 避免 `https://ipapi.co//json/`(双斜杠)被服务端 404。
  const d = await fetchJson<IpApiCoResponse>(
    ip ? `https://ipapi.co/${encodeURIComponent(ip)}/json/` : 'https://ipapi.co/json/',
  )
  const resolvedIp = asStr(d?.ip)
  if (!resolvedIp) throw new Error('Geo lookup failed on all sources')
  const asnRaw = asStr(d.asn)
  return {
    ip: resolvedIp,
    ipType: d.version === 'IPv6' ? 'IPv6' : 'IPv4',
    asn: asnRaw ? asNum(asnRaw.replace(/^AS/i, '')) : null,
    asnOrg: asStr(d.org),
    isp: asStr(d.org),
    country: asStr(d.country_name),
    countryCode: asStr(d.country_code),
    flagEmoji: '',
    region: asStr(d.region),
    city: asStr(d.city),
    latitude: asNum(d.latitude),
    longitude: asNum(d.longitude),
    postal: asStr(d.postal),
    timezoneId: asStr(d.timezone),
    source: 'ipapi.co',
  }
}

interface DohAnswer { type: number; data: string }
interface DohResponse { Answer?: DohAnswer[] }

async function dohQuery(name: string, type: string): Promise<DohAnswer[]> {
  // 必须带 accept: application/dns-json,否则 cloudflare-dns.com 返回 400
  const d = await fetchJson<DohResponse>(
    `https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(name)}&type=${type}`,
    6000,
    { accept: 'application/dns-json' },
  )
  return Array.isArray(d?.Answer) ? d.Answer : []
}

/** 域名 → IP(优先 A,回退 AAAA) */
async function resolveDomain(domain: string): Promise<string | null> {
  try {
    const a = await dohQuery(domain, 'A')
    const hit = a.find((x) => x.type === 1)
    const ipv4 = hit ? asStr(hit.data) : ''
    if (ipv4) return ipv4
    const aaaa = await dohQuery(domain, 'AAAA')
    const hit6 = aaaa.find((x) => x.type === 28)
    const ipv6 = hit6 ? asStr(hit6.data) : ''
    return ipv6 || null
  } catch {
    return null
  }
}

/** IPv6 地址展开成 32 位 hex(用于 ip6.arpa 反查) */
function expandIPv6(ip: string): string | null {
  const halves = ip.split('::')
  if (halves.length > 2) return null
  const parse = (s: string) => (s ? s.split(':') : [])
  const head = parse(halves[0])
  const tail = halves.length === 2 ? parse(halves[1]) : []
  const missing = 8 - head.length - tail.length
  if (missing < 0) return null
  const full = [...head, ...Array<string>(missing).fill('0'), ...tail]
  if (full.length !== 8 || full.some((h) => !/^[0-9a-fA-F]{0,4}$/.test(h))) return null
  return full.map((h) => h.padStart(4, '0')).join('')
}

/** PTR 反查(DoH) */
async function fetchPtr(ip: string): Promise<string | null> {
  try {
    let name: string
    if (ip.includes(':')) {
      const hex = expandIPv6(ip)
      if (!hex) return null
      name = hex.split('').reverse().join('.') + '.ip6.arpa'
    } else {
      name = ip.split('.').reverse().join('.') + '.in-addr.arpa'
    }
    const answers = await dohQuery(name, 'PTR')
    const hit = answers.find((a) => a.type === 12)
    const ptr = hit ? asStr(hit.data) : ''
    return ptr || null
  } catch {
    return null
  }
}

/** WebRTC 候选 IP 收集(mDNS 屏蔽时可能为空,代表浏览器已防泄漏) */
async function detectWebRtcIps(timeoutMs = 3000): Promise<string[]> {
  if (typeof RTCPeerConnection === 'undefined') return []
  const ips = new Set<string>()
  let pc: RTCPeerConnection | null = null
  try {
    pc = new RTCPeerConnection({ iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] })
    pc.createDataChannel('')
    pc.onicecandidate = (e) => {
      if (!e.candidate) return
      const parts = e.candidate.candidate.split(' ')
      const candidate = parts[4]
      if (candidate && !candidate.endsWith('.local')) ips.add(candidate)
    }
    const offer = await pc.createOffer()
    await pc.setLocalDescription(offer)
    await new Promise((r) => setTimeout(r, timeoutMs))
  } catch { /* ignore */ } finally {
    pc?.close()
  }
  return [...ips]
}

// ─────────────────────────── 评分模型 ───────────────────────────

function analyze(geo: GeoData, ptr: string | null, isSelf: boolean): IpAnalysis {
  const haystack = `${geo.asnOrg} ${geo.isp}`.toLowerCase()
  const isDatacenter = DATACENTER_KEYWORDS.some((k) => haystack.includes(k))
  const proxyKeyword = PROXY_KEYWORDS.some((k) => haystack.includes(k))
  // 机房 IP 且无 PTR:身份未经验证的 hosting 节点(城市级 Geo 精度往往也差)。
  // 免费数据源无法精确判定广播/未注册段,这里只如实标注「机房 + 无 rDNS」。
  const isUnverifiedHosting = isDatacenter && !ptr

  // Intl 只在浏览器可用;异常环境(隐私模式/极端 UA)下兜底为空串
  let deviceTz = ''
  try {
    deviceTz = typeof Intl !== 'undefined' ? Intl.DateTimeFormat().resolvedOptions().timeZone || '' : ''
  } catch { /* leave empty */ }
  // 时区一致性只在检测「本机出口 IP」时有意义(本机设备时区 vs 出口 IP 时区 → VPN 泄漏信号)。
  // 查询任意第三方 IP 时,被查 IP 的地理时区与检测者所在时区无关,不计入评分,否则会
  // 给所有国外 IP 虚加 20 分,污染风险评分与跨境评级矩阵。
  const tzMismatch = isSelf && Boolean(geo.timezoneId && deviceTz && geo.timezoneId !== deviceTz)

  // 权重:机房 52 / 时区不一致 20 / 代理关键词 22(对应公式 W_type·W_tz·W_bl)
  let score = 6
  if (isDatacenter) score += 52
  if (tzMismatch) score += 20
  if (proxyKeyword) score += 22
  score = Math.max(0, Math.min(100, score))

  const level: RiskLevel = score <= 20 ? 'low' : score <= 60 ? 'medium' : 'high'
  return { geo, ptr, isDatacenter, isUnverifiedHosting, proxyKeyword, tzMismatch, deviceTz, score, level }
}

/** 跨境场景星级(1-5);文案由字典按 locale 提供,这里只产出 key + stars */
function useCaseStars(a: IpAnalysis): { key: UseCaseKey; stars: number }[] {
  const dc = a.isDatacenter
  const aiBlocked = AI_BLOCKED_COUNTRIES.includes(a.geo.countryCode)
  const tzPenalty = a.tzMismatch ? 1 : 0
  return [
    { key: 'tiktok', stars: clamp1to5((dc ? 1 : 5) - tzPenalty) },
    { key: 'ecom', stars: clamp1to5((dc ? 2 : 4) - tzPenalty) },
    { key: 'social', stars: clamp1to5((dc ? 2 : 4) - tzPenalty) },
    { key: 'ai', stars: aiBlocked ? 1 : clamp1to5((dc ? 3 : 5) - tzPenalty) },
  ]
}

function clamp1to5(n: number): number {
  return Math.max(1, Math.min(5, n))
}

// ─────────────────────────── 小组件 ───────────────────────────

/** 风险等级 → 颜色样式;文案按等级从字典取(riskLow/riskMedium/riskHigh) */
const LEVEL_STYLE: Record<RiskLevel, { color: string; bg: string }> = {
  low: { color: '#16a34a', bg: 'rgba(34,197,94,0.12)' },
  medium: { color: '#d97706', bg: 'rgba(245,158,11,0.12)' },
  high: { color: '#dc2626', bg: 'rgba(239,68,68,0.12)' },
}

function Badge({ color, bg, children }: { color: string; bg: string; children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold"
      style={{ color, backgroundColor: bg }}
    >
      {children}
    </span>
  )
}

/** 半圆分段仪表盘:0-20 绿 / 21-60 黄 / 61-100 红 */
function RiskGauge({ score, level, gaugeLabel, riskLabel }: { score: number; level: RiskLevel; gaugeLabel: string; riskLabel: string }) {
  const cx = 100
  const cy = 92
  const r = 76
  const polar = (s: number): [number, number] => {
    const a = Math.PI * (1 - s / 100)
    return [cx + r * Math.cos(a), cy - r * Math.sin(a)]
  }
  const arc = (s0: number, s1: number): string => {
    const [x0, y0] = polar(s0)
    const [x1, y1] = polar(s1)
    return `M ${x0.toFixed(2)} ${y0.toFixed(2)} A ${r} ${r} 0 0 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`
  }
  // 防御:任何非有限分数一律归零,杜绝 NaN 流入 SVG path / needle 坐标
  const safeScore = Number.isFinite(score) ? Math.max(0, Math.min(100, score)) : 0
  const [nx, ny] = polar(safeScore)
  const style = LEVEL_STYLE[level]
  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 200 104" className="w-full max-w-[240px]" role="img" aria-label={`Risk score ${safeScore} of 100`}>
        <path d={arc(0, 20)} fill="none" stroke="#22c55e" strokeWidth="14" strokeLinecap="round" opacity="0.9" />
        <path d={arc(21, 60)} fill="none" stroke="#f59e0b" strokeWidth="14" opacity="0.9" />
        <path d={arc(61, 100)} fill="none" stroke="#ef4444" strokeWidth="14" strokeLinecap="round" opacity="0.9" />
        <line x1={cx} y1={cy} x2={nx} y2={ny} stroke={style.color} strokeWidth="3.5" strokeLinecap="round" />
        <circle cx={cx} cy={cy} r="5" fill={style.color} />
        <text x={cx} y={cy - 26} textAnchor="middle" fontSize="26" fontWeight="800" fill={style.color}>
          {safeScore}
        </text>
        <text x={cx} y={cy - 10} textAnchor="middle" fontSize="9" fill="rgb(var(--text-subtle))">
          {gaugeLabel}
        </text>
      </svg>
      <Badge color={style.color} bg={style.bg}>
        {riskLabel}
      </Badge>
    </div>
  )
}

function StarRow({ stars }: { stars: number }) {
  return (
    <span className="text-lg tracking-wide" style={{ color: '#f59e0b' }} aria-label={`${stars} out of 5 stars`}>
      {'★'.repeat(stars)}
      <span style={{ color: 'rgb(var(--text-faint))' }}>{'★'.repeat(5 - stars)}</span>
    </span>
  )
}

function RatingPill({ stars, d }: { stars: number; d: IpCheckerDict }) {
  if (stars >= 4) return <Badge color="#16a34a" bg="rgba(34,197,94,0.12)">{d.ratingRecommended}</Badge>
  if (stars === 3) return <Badge color="#d97706" bg="rgba(245,158,11,0.12)">{d.ratingCaution}</Badge>
  return <Badge color="#dc2626" bg="rgba(239,68,68,0.12)">{d.ratingNotRecommended}</Badge>
}

function DetailRow({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="flex items-start justify-between gap-3 py-1.5 text-sm">
      <span style={{ color: 'rgb(var(--text-subtle))' }}>{label}</span>
      <span className={`text-right ${mono ? 'font-mono' : ''} break-all`}>{value || '—'}</span>
    </div>
  )
}

// ─────────────────────────── 主组件 ───────────────────────────

export function IpCheckerClient() {
  const { locale } = useApp()
  // 缺失整包回退 en(与 LocalizedPageShell 同款兜底)
  const d: IpCheckerDict = ipCheckerDicts[locale] ?? ipCheckerDicts.en
  const [trace, setTrace] = useState<TraceData | null>(null)
  const [analysis, setAnalysis] = useState<IpAnalysis | null>(null)
  // 当前分析的是「本机出口 IP」还是「用户查询的第三方 IP」。本机相关信号
  // (时区一致性 / WebRTC 泄漏)只对自查有效,查第三方 IP 时需显示 N/A。
  const [isSelfIp, setIsSelfIp] = useState(true)
  const [loading, setLoading] = useState(true)
  // 错误存字典 key 而非字符串,保证切换语言后错误提示也跟随变化
  const [errorKey, setErrorKey] = useState<'errorSources' | 'errorQuery' | ''>('')
  const [query, setQuery] = useState('')
  const [queryErrorKey, setQueryErrorKey] = useState<'errorInvalidInput' | ''>('')
  const [webRtcIps, setWebRtcIps] = useState<string[] | null>(null)
  const [pings, setPings] = useState<Record<string, PingResult>>(
    () => Object.fromEntries(EDGE_ENDPOINTS.map((e) => [e.id, { status: 'idle', ms: null }])),
  )
  const pingRanRef = useRef(false)

  const loadGeo = useCallback(async (targetIp: string, isSelf: boolean) => {
    const geo = await fetchGeo(targetIp)
    const ptr = await fetchPtr(geo.ip)
    setAnalysis(analyze(geo, ptr, isSelf))
    setIsSelfIp(isSelf)
  }, [])

  const refresh = useCallback(async () => {
    setLoading(true)
    setErrorKey('')
    try {
      const t = await fetchTrace()
      setTrace(t)
      if (t?.ip) {
        await loadGeo(t.ip, true)
      } else {
        // Tier 1 全失败时让 Tier 2 自报 IP(ipwho.is 无参 = 调用方 IP)
        await loadGeo('', true)
      }
    } catch {
      setErrorKey('errorSources')
    } finally {
      setLoading(false)
    }
  }, [loadGeo])

  useEffect(() => {
    void refresh()
    void detectWebRtcIps().then(setWebRtcIps)
  }, [refresh])

  const runPingTest = useCallback(async () => {
    setPings(Object.fromEntries(EDGE_ENDPOINTS.map((e) => [e.id, { status: 'running', ms: null }])))
    await Promise.all(
      EDGE_ENDPOINTS.map(async (ep) => {
        const start = performance.now()
        const ctrl = new AbortController()
        const timer = setTimeout(() => ctrl.abort(), 8000)
        try {
          await fetch(ep.url, { mode: 'no-cors', cache: 'no-store', signal: ctrl.signal })
          const ms = Math.round(performance.now() - start)
          setPings((prev) => ({ ...prev, [ep.id]: { status: 'ok', ms } }))
        } catch {
          setPings((prev) => ({ ...prev, [ep.id]: { status: 'fail', ms: null } }))
        } finally {
          clearTimeout(timer)
        }
      }),
    )
  }, [])

  // 数据加载完成后自动跑一次延迟探测
  useEffect(() => {
    if (analysis && !pingRanRef.current) {
      pingRanRef.current = true
      void runPingTest()
    }
  }, [analysis, runPingTest])

  const handleQuery = useCallback(async () => {
    setQueryErrorKey('')
    const kind = classifyTarget(query)
    if (!kind) {
      setQueryErrorKey('errorInvalidInput')
      return
    }
    setLoading(true)
    setErrorKey('')
    try {
      let ip = query.trim()
      if (kind === 'domain') {
        const resolved = await resolveDomain(ip)
        if (!resolved) throw new Error('resolve')
        ip = resolved
      }
      // 用户主动查询的是第三方 IP —— 本机相关信号(时区/WebRTC)对它无意义
      await loadGeo(ip, false)
    } catch {
      setErrorKey('errorQuery')
    } finally {
      setLoading(false)
    }
  }, [query, loadGeo])

  const geo = analysis?.geo ?? null
  const ipDisplay = geo?.ip ?? trace?.ip ?? '…'
  const levelStyle = analysis ? LEVEL_STYLE[analysis.level] : null
  const ratings = analysis ? useCaseStars(analysis) : []
  const mapUrl =
    geo?.latitude != null && geo?.longitude != null
      ? `https://www.openstreetmap.org/export/embed.html?bbox=${geo.longitude - 0.08}%2C${geo.latitude - 0.05}%2C${geo.longitude + 0.08}%2C${geo.latitude + 0.05}&layer=mapnik&marker=${geo.latitude}%2C${geo.longitude}`
      : null

  return (
    <div className="space-y-6">
      {/* ───── 头部:当前 IP + 查询 ───── */}
      <div className="surface rounded-xl border p-5 shadow-sm">
        <div className="flex flex-wrap items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-xs font-medium uppercase tracking-wider" style={{ color: 'rgb(var(--text-subtle))' }}>
              {d.yourCurrentIp}
            </p>
            <div className="mt-1 flex flex-wrap items-center gap-3">
              <span className="break-all font-mono text-2xl font-bold sm:text-3xl">{ipDisplay}</span>
              {trace?.colo && (
                <Badge color="#2563eb" bg="rgba(37,99,235,0.12)">CF Colo: {trace.colo}</Badge>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CopyButton value={ipDisplay === '…' ? '' : ipDisplay} label={d.copyIp} />
            <button type="button" onClick={() => void refresh()} disabled={loading} className="btn btn-secondary" title={d.refresh}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={loading ? 'animate-spin' : ''}>
                <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                <path d="M21 3v5h-5" />
              </svg>
              {d.refresh}
            </button>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && void handleQuery()}
            placeholder={d.queryPlaceholder}
            className="flex-1 rounded-lg border px-3 py-2 font-mono text-sm outline-none transition focus:ring-2"
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))' }}
            aria-label="Custom IP or domain query"
          />
          <button type="button" onClick={() => void handleQuery()} disabled={loading} className="btn btn-primary">
            {loading ? d.analyzing : d.analyze}
          </button>
        </div>
        {queryErrorKey && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{d[queryErrorKey]}</p>}
        {errorKey && (
          <p className="mt-3 rounded-md p-3 text-sm text-red-700 dark:text-red-300" style={{ backgroundColor: 'rgba(239,68,68,0.1)' }}>
            {d[errorKey]}
          </p>
        )}
      </div>

      {loading && !analysis && (
        <div className="surface rounded-xl border p-8 text-center text-sm shadow-sm" style={{ color: 'rgb(var(--text-subtle))' }}>
          {d.loadingHint}
        </div>
      )}

      {analysis && geo && levelStyle && (
        <>
          {/* ───── 三卡主指标区 ───── */}
          <div className="grid gap-4 lg:grid-cols-3">
            {/* Card A:IP 身份 */}
            <div className="surface rounded-xl border p-5 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'rgb(var(--text-subtle))' }}>
                {d.cardIdentity}
              </h3>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-3xl">{geo.flagEmoji || '🌐'}</span>
                <div>
                  <p className="font-semibold leading-tight">
                    {[geo.country, geo.region, geo.city].filter(Boolean).join(' · ') || d.locationUnknown}
                  </p>
                  <p className="text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
                    {geo.ipType} · {geo.timezoneId || d.tzUnknown}
                  </p>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {analysis.isDatacenter ? (
                  <Badge color="#dc2626" bg="rgba(239,68,68,0.12)">{d.badgeDatacenter}</Badge>
                ) : (
                  <Badge color="#16a34a" bg="rgba(34,197,94,0.12)">{d.badgeResidential}</Badge>
                )}
                {analysis.isUnverifiedHosting ? (
                  <Badge color="#d97706" bg="rgba(245,158,11,0.12)">{d.badgeUnverifiedHost}</Badge>
                ) : (
                  <Badge color="#16a34a" bg="rgba(34,197,94,0.12)">{d.badgeNativeIp}</Badge>
                )}
              </div>
              <div className="mt-3 divide-y" style={{ borderColor: 'rgb(var(--border))' }}>
                <DetailRow label="ASN" value={geo.asn ? `AS${geo.asn}` : ''} mono />
                <DetailRow label={d.rowAsnOwner} value={geo.asnOrg} />
                <DetailRow label={d.rowIsp} value={geo.isp} />
                <DetailRow label={d.rowPostal} value={geo.postal} mono />
                <DetailRow label={d.rowPtr} value={analysis.ptr ?? ''} mono />
                <DetailRow label={d.rowSource} value={geo.source} mono />
              </div>
            </div>

            {/* Card B:风险仪表盘 */}
            <div className="surface rounded-xl border p-5 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'rgb(var(--text-subtle))' }}>
                {d.cardRisk}
              </h3>
              <div className="mt-4">
                <RiskGauge
                  score={analysis.score}
                  level={analysis.level}
                  gaugeLabel={d.gaugeLabel}
                  riskLabel={analysis.level === 'low' ? d.riskLow : analysis.level === 'medium' ? d.riskMedium : d.riskHigh}
                />
              </div>
              <p className="mt-3 text-center text-sm" style={{ color: 'rgb(var(--text-muted))' }}>
                {analysis.isDatacenter ? d.summaryDatacenter : d.summaryResidential}
                {analysis.tzMismatch && d.summaryTzMismatch}
              </p>
            </div>

            {/* Card C:地图 */}
            <div className="surface overflow-hidden rounded-xl border shadow-sm">
              <h3 className="px-5 pt-5 text-sm font-semibold uppercase tracking-wider" style={{ color: 'rgb(var(--text-subtle))' }}>
                {d.cardGeo}
              </h3>
              {mapUrl ? (
                <iframe
                  key={mapUrl}
                  src={mapUrl}
                  title="IP location map (OpenStreetMap)"
                  className="mt-3 h-56 w-full border-0 lg:h-[calc(100%-3.5rem)]"
                  loading="lazy"
                />
              ) : (
                <p className="p-5 text-sm" style={{ color: 'rgb(var(--text-subtle))' }}>{d.mapUnavailable}</p>
              )}
              {geo.latitude != null && geo.longitude != null && (
                <p className="px-5 pb-3 pt-1 font-mono text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
                  {geo.latitude.toFixed(4)}, {geo.longitude?.toFixed(4)}
                </p>
              )}
            </div>
          </div>

          {/* ───── 威胁与一致性检测(4 卡片) ───── */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="surface rounded-xl border p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgb(var(--text-subtle))' }}>
                {d.cardProxyTitle}
              </p>
              <div className="mt-2">
                {analysis.proxyKeyword || analysis.isDatacenter ? (
                  <Badge color="#d97706" bg="rgba(245,158,11,0.12)">{d.proxyDetected}</Badge>
                ) : (
                  <Badge color="#16a34a" bg="rgba(34,197,94,0.12)">{d.proxyClean}</Badge>
                )}
              </div>
              <p className="mt-2 text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
                {d.proxyNote}
              </p>
            </div>

            <div className="surface rounded-xl border p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgb(var(--text-subtle))' }}>
                {d.cardTzTitle}
              </p>
              <div className="mt-2">
                {isSelfIp ? (
                  analysis.tzMismatch ? (
                    <Badge color="#d97706" bg="rgba(245,158,11,0.12)">{d.tzMismatchBadge}</Badge>
                  ) : (
                    <Badge color="#16a34a" bg="rgba(34,197,94,0.12)">{d.tzMatchBadge}</Badge>
                  )
                ) : (
                  <Badge color="rgb(var(--text-muted))" bg="rgba(120,120,120,0.12)">{d.signalNaBadge}</Badge>
                )}
              </div>
              {isSelfIp ? (
                <p className="mt-2 font-mono text-xs leading-relaxed" style={{ color: 'rgb(var(--text-subtle))' }}>
                  {d.tzDevice}: {analysis.deviceTz || '—'}
                  <br />
                  {d.tzIp}: {geo.timezoneId || '—'}
                </p>
              ) : (
                <p className="mt-2 text-xs leading-relaxed" style={{ color: 'rgb(var(--text-subtle))' }}>
                  {d.signalNaNote}
                </p>
              )}
            </div>

            <div className="surface rounded-xl border p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgb(var(--text-subtle))' }}>
                {d.cardProtoTitle}
              </p>
              <div className="mt-2">
                {geo.ipType === 'IPv6' ? (
                  <Badge color="#2563eb" bg="rgba(37,99,235,0.12)">{d.protoV6}</Badge>
                ) : (
                  <Badge color="#2563eb" bg="rgba(37,99,235,0.12)">{d.protoV4}</Badge>
                )}
              </div>
              <p className="mt-2 font-mono text-xs break-all" style={{ color: 'rgb(var(--text-subtle))' }}>
                {geo.ip}
              </p>
            </div>

            <div className="surface rounded-xl border p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgb(var(--text-subtle))' }}>
                {d.cardWebrtcTitle}
              </p>
              <div className="mt-2">
                {isSelfIp ? (
                  webRtcIps === null ? (
                    <Badge color="#d97706" bg="rgba(245,158,11,0.12)">{d.webrtcTesting}</Badge>
                  ) : webRtcIps.length === 0 ? (
                    <Badge color="#16a34a" bg="rgba(34,197,94,0.12)">{d.webrtcNoLeak}</Badge>
                  ) : webRtcIps.some((ip) => ip !== geo.ip) ? (
                    <Badge color="#dc2626" bg="rgba(239,68,68,0.12)">{d.webrtcLeak}</Badge>
                  ) : (
                    <Badge color="#16a34a" bg="rgba(34,197,94,0.12)">{d.webrtcConsistent}</Badge>
                  )
                ) : (
                  <Badge color="rgb(var(--text-muted))" bg="rgba(120,120,120,0.12)">{d.signalNaBadge}</Badge>
                )}
              </div>
              <p className="mt-2 text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
                {isSelfIp
                  ? `UA: ${typeof navigator !== 'undefined' ? navigator.userAgent.slice(0, 42) : ''}…`
                  : d.signalNaNote}
              </p>
            </div>
          </div>

          {/* ───── 跨境场景评级矩阵 ───── */}
          <div className="surface rounded-xl border p-5 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'rgb(var(--text-subtle))' }}>
              {d.ratingsTitle}
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {ratings.map((r) => (
                <div key={r.key} className="rounded-lg border p-4" style={{ borderColor: 'rgb(var(--border))' }}>
                  <p className="text-sm font-semibold leading-snug">{d.useCaseLabels[r.key]}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <StarRow stars={r.stars} />
                    <RatingPill stars={r.stars} d={d} />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
              {d.ratingsNote}
            </p>
          </div>
        </>
      )}

      {/* ───── 全球边缘延迟探测 ───── */}
      <div className="surface rounded-xl border p-5 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'rgb(var(--text-subtle))' }}>
            {d.latencyTitle}
          </h3>
          <button type="button" onClick={() => void runPingTest()} className="btn btn-secondary">
            {d.runPingTest}
          </button>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className="border-b text-left text-xs uppercase tracking-wider" style={{ borderColor: 'rgb(var(--border))', color: 'rgb(var(--text-subtle))' }}>
                <th className="pb-2 pr-4 font-medium">{d.thRegion}</th>
                <th className="pb-2 pr-4 font-medium">{d.thEndpoint}</th>
                <th className="pb-2 pr-4 font-medium">{d.thLatency}</th>
                <th className="pb-2 font-medium">{d.thStatus}</th>
              </tr>
            </thead>
            <tbody>
              {EDGE_ENDPOINTS.map((ep) => {
                const p: PingResult = pings[ep.id] ?? { status: 'idle', ms: null }
                return (
                  <tr key={ep.id} className="border-b last:border-0" style={{ borderColor: 'rgb(var(--border))' }}>
                    <td className="py-2.5 pr-4 whitespace-nowrap">{ep.flag} {ep.label}</td>
                    <td className="py-2.5 pr-4 font-mono text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
                      {ep.url.replace('https://', '').replace('/?ipq-ping', '')}
                    </td>
                    <td className="py-2.5 pr-4 font-mono font-semibold">
                      {p.status === 'ok' && p.ms != null ? (
                        <span style={{ color: p.ms < 150 ? '#16a34a' : p.ms < 350 ? '#d97706' : '#dc2626' }}>
                          {p.ms} ms
                        </span>
                      ) : p.status === 'running' ? '…' : '—'}
                    </td>
                    <td className="py-2.5 text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
                      {p.status === 'ok' ? 'OK' : p.status === 'running' ? d.pingMeasuring : p.status === 'fail' ? d.pingTimeout : d.pingIdle}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
          {d.latencyNote}
        </p>
      </div>
    </div>
  )
}
