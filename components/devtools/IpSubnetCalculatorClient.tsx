'use client'

import { useState, useMemo } from 'react'
import { CopyButton } from '@/components/CopyButton'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * IP Subnet Calculator —— IPv4 CIDR 全量计算(32 位无符号位运算)
 *
 * 输入支持三种写法:
 *  - CIDR:      192.168.1.10/24
 *  - 点分掩码:   192.168.1.10/255.255.255.0
 *  - 空格分隔:   192.168.1.10 24 或 192.168.1.10 255.255.255.0
 *
 * 全部用 >>>0 保持无符号 32 位语义;/31(RFC 3021 点对点)与 /32(单主机)
 * 单独处理可用主机数。纯本地计算,无网络请求。
 */

interface SubnetResult {
  ip: string
  prefix: number
  subnetMask: string
  wildcardMask: string
  network: string
  broadcast: string
  firstUsable: string
  lastUsable: string
  usableHosts: number
  totalAddresses: number
  ipClass: string
  addressType: string
  binaryMask: string
}

function octetsToNum(octets: number[]): number {
  return ((octets[0] << 24) | (octets[1] << 16) | (octets[2] << 8) | octets[3]) >>> 0
}

function numToIp(n: number): string {
  return [(n >>> 24) & 255, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].join('.')
}

/** 解析点分十进制 IPv4,非法返回 null */
function parseIpv4(part: string): number[] | null {
  const pieces = part.split('.')
  if (pieces.length !== 4) return null
  const octets: number[] = []
  for (const p of pieces) {
    if (!/^\d{1,3}$/.test(p)) return null
    const v = parseInt(p, 10)
    if (v > 255) return null
    octets.push(v)
  }
  return octets
}

/** 点分掩码 → 前缀长度;掩码必须高位连续 1,否则返回 null */
function maskToPrefix(octets: number[]): number | null {
  const mask = octetsToNum(octets)
  const inverse = ~mask >>> 0
  // 连续掩码 ⇔ 反码形如 0...01...1,即 inverse & (inverse+1) === 0
  if ((inverse & (inverse + 1)) !== 0) return null
  return 32 - (inverse === 0 ? 0 : Math.log2(inverse + 1))
}

function prefixToMaskNum(prefix: number): number {
  return prefix === 0 ? 0 : (0xffffffff << (32 - prefix)) >>> 0
}

function classifyIp(a: number): string {
  if (a <= 127) return 'A'
  if (a <= 191) return 'B'
  if (a <= 223) return 'C'
  if (a <= 239) return 'D (multicast)'
  return 'E (experimental)'
}

function addressType(octets: number[]): string {
  const [a, b] = octets
  if (a === 10 || (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168)) return 'Private (RFC 1918)'
  if (a === 127) return 'Loopback (127.0.0.0/8)'
  if (a === 169 && b === 254) return 'Link-local (169.254.0.0/16)'
  if (a >= 224) return 'Reserved'
  return 'Public'
}

/** 校验错误:key 用于 tui 查询,fb 为英文原值,vars 填充 {name} 占位符 */
interface SubnetError {
  key: string
  fb: string
  vars?: Record<string, string>
}

/** 解析输入并计算全部子网字段;失败返回 { error } */
function computeSubnet(input: string): SubnetResult | { error: SubnetError } {
  const trimmed = input.trim()
  if (!trimmed) return { error: { key: 'errEnterIp', fb: 'Enter an IPv4 address with a prefix, e.g. 192.168.1.10/24' } }

  // 拆出 IP 部分与前缀/掩码部分(支持 "/" 或空格分隔)
  let ipPart = trimmed
  let suffix: string | null = null
  if (trimmed.includes('/')) {
    const idx = trimmed.indexOf('/')
    ipPart = trimmed.slice(0, idx)
    suffix = trimmed.slice(idx + 1)
  } else if (/\s/.test(trimmed)) {
    const parts = trimmed.split(/\s+/)
    if (parts.length !== 2) {
      return { error: { key: 'errTwoParts', fb: 'Use formats like 192.168.1.10/24 or 192.168.1.10 255.255.255.0' } }
    }
    ipPart = parts[0]
    suffix = parts[1]
  } else {
    return { error: { key: 'errMissingPrefix', fb: 'Missing prefix length — add /24 (or a space + mask) after the IP' } }
  }

  const octets = parseIpv4(ipPart)
  if (!octets) {
    return { error: { key: 'errInvalidIp', fb: 'Invalid IPv4 address "{ip}" — four octets of 0–255 expected', vars: { ip: ipPart } } }
  }

  // 后缀:数字前缀(0-32)或点分掩码
  let prefix: number
  if (suffix.includes('.')) {
    const maskOctets = parseIpv4(suffix)
    if (!maskOctets) {
      return { error: { key: 'errInvalidMask', fb: 'Invalid subnet mask "{mask}"', vars: { mask: suffix } } }
    }
    const p = maskToPrefix(maskOctets)
    if (p === null) {
      return {
        error: {
          key: 'errNonContiguousMask',
          fb: 'Mask "{mask}" is not contiguous (bits must be 1s followed by 0s)',
          vars: { mask: suffix },
        },
      }
    }
    prefix = p
  } else {
    if (!/^\d{1,2}$/.test(suffix)) {
      return { error: { key: 'errInvalidPrefix', fb: 'Invalid prefix "/{prefix}" — use 0–32', vars: { prefix: suffix } } }
    }
    prefix = parseInt(suffix, 10)
    if (prefix > 32) {
      return { error: { key: 'errPrefixRange', fb: 'Prefix /{prefix} is out of range (0–32)', vars: { prefix: String(prefix) } } }
    }
  }

  const ipNum = octetsToNum(octets)
  const maskNum = prefixToMaskNum(prefix)
  const wildcardNum = ~maskNum >>> 0
  const networkNum = (ipNum & maskNum) >>> 0
  const broadcastNum = (networkNum | wildcardNum) >>> 0
  const total = Math.pow(2, 32 - prefix)

  // /31 点对点链路(RFC 3021)两个地址皆可用;/32 单主机
  let firstUsableNum: number
  let lastUsableNum: number
  let usable: number
  if (prefix === 31) {
    firstUsableNum = networkNum
    lastUsableNum = broadcastNum
    usable = 2
  } else if (prefix === 32) {
    firstUsableNum = ipNum
    lastUsableNum = ipNum
    usable = 1
  } else {
    firstUsableNum = (networkNum + 1) >>> 0
    lastUsableNum = (broadcastNum - 1) >>> 0
    usable = total - 2
  }

  return {
    ip: numToIp(ipNum),
    prefix,
    subnetMask: numToIp(maskNum),
    wildcardMask: numToIp(wildcardNum),
    network: numToIp(networkNum),
    broadcast: numToIp(broadcastNum),
    firstUsable: numToIp(firstUsableNum),
    lastUsable: numToIp(lastUsableNum),
    usableHosts: usable,
    totalAddresses: total,
    ipClass: classifyIp(octets[0]),
    addressType: addressType(octets),
    binaryMask: maskNum.toString(2).padStart(32, '0').match(/.{8}/g)!.join('.'),
  }
}

export function IpSubnetCalculatorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('ip-subnet-calculator', locale, key, fb)

  const [input, setInput] = useState('192.168.1.10/24')

  const result = useMemo(() => computeSubnet(input), [input])

  const errorText = useMemo(() => {
    if (!('error' in result)) return ''
    let s = L(result.error.key, result.error.fb)
    if (result.error.vars) {
      for (const [k, v] of Object.entries(result.error.vars)) s = s.replace(`{${k}}`, v)
    }
    return s
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result, locale])

  const rows: [string, string][] = useMemo(() => {
    if ('error' in result) return []
    return [
      [L('ipAddress', 'IP Address'), `${result.ip}/${result.prefix}`],
      [L('subnetMask', 'Subnet Mask'), result.subnetMask],
      [L('wildcardMask', 'Wildcard Mask'), result.wildcardMask],
      [L('networkAddress', 'Network Address'), result.network],
      [L('broadcastAddress', 'Broadcast Address'), result.broadcast],
      [L('firstUsableHost', 'First Usable Host'), result.firstUsable],
      [L('lastUsableHost', 'Last Usable Host'), result.lastUsable],
      [L('usableHosts', 'Usable Hosts'), result.usableHosts.toLocaleString('en-US')],
      [L('totalAddresses', 'Total Addresses'), result.totalAddresses.toLocaleString('en-US')],
      [L('ipClass', 'IP Class'), result.ipClass],
      [L('addressType', 'Address Type'), result.addressType],
      [L('binaryMask', 'Binary Mask'), result.binaryMask],
    ]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result, locale])

  const summary = useMemo(() => {
    if ('error' in result) return ''
    return [L('summaryTitle', 'IP Subnet Summary'), `${L('sInput', 'Input:')} ${input.trim()}`, ...rows.map(([k, v]) => `${k}: ${v}`)].join('\n')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result, rows, input, locale])

  return (
    <div className="space-y-5">
      {/* 输入区 */}
      <div>
        <label htmlFor="subnet-input" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
          {L('inputLabel', 'IPv4 address with prefix (CIDR, dotted mask, or space-separated)')}
        </label>
        <input
          id="subnet-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          spellCheck={false}
          placeholder="192.168.1.10/24"
          className="w-full rounded-lg border p-4 font-mono text-sm shadow-sm outline-none transition focus:ring-2"
          style={{
            borderColor: 'rgb(var(--border-strong))',
            backgroundColor: 'rgb(var(--bg-card))',
            color: 'rgb(var(--text))',
          }}
        />
      </div>

      {/* 错误或结果 */}
      {'error' in result ? (
        <div className="rounded-lg border border-red-200 dark:border-red-800/60 bg-red-50 dark:bg-red-950/30 p-4 text-sm text-red-700">⚠️ {errorText}</div>
      ) : (
        <>
          <dl
            className="grid grid-cols-1 gap-x-6 gap-y-3 rounded-lg border p-5 sm:grid-cols-2"
            style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }}
          >
            {rows.map(([label, value]) => (
              <div key={label} className="flex items-baseline justify-between gap-4 border-b pb-2" style={{ borderColor: 'rgb(var(--border))' }}>
                <dt className="text-sm" style={{ color: 'rgb(var(--text-muted))' }}>
                  {label}
                </dt>
                <dd className="font-mono text-sm font-semibold" style={{ color: 'rgb(var(--text))' }}>
                  {value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-wrap items-center gap-3">
            <CopyButton value={summary} label={L('copySummary', 'Copy summary')} />
          </div>
        </>
      )}

      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        {L('noteF1', '🔒 Accepted inputs: ')}
        <code>192.168.1.10/24</code>
        {L('noteF2', ', ')}
        <code>192.168.1.10/255.255.255.0</code>
        {L('noteF3', ', or ')}
        <code>192.168.1.10 255.255.255.0</code>
        {L('noteF4', '. Edge cases follow the RFCs: ')}
        <code>/31</code>
        {L('noteF5', ' is a point-to-point link with 2 usable addresses (RFC 3021) and ')}
        <code>/32</code>
        {L('noteF6', ' identifies a single host.')}
      </p>
    </div>
  )
}
