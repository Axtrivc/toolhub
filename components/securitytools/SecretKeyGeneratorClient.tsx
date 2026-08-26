'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { RefreshCw } from 'lucide-react'
import { CopyButton } from '@/components/CopyButton'
import { ResultActions } from '@/components/ResultActions'
import { GaugeChart } from '@/components/charts/GaugeChart'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * Secret Key Generator —— crypto.getRandomValues 高熵密钥/令牌生成
 *
 * 格式:Hex / Base64 / Base64URL / Alphanumeric(62 字符,拒绝采样消除模偏差)/
 * API key 风格(自定义前缀 + N 位字母数字)/ UUID v4(置 version/variant 位)。
 * 熵 = 字节数*8(字节格式)、字符数*log2(62)(字母数字)、122(UUID)。
 * 挂载后及参数变化时自动生成(仅在 useEffect 中触达 crypto,SSG 安全)。
 */

type Format = 'hex' | 'base64' | 'base64url' | 'alnum' | 'apikey' | 'uuid'

const ALNUM = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

function randomBytes(n: number): Uint8Array {
  const b = new Uint8Array(n)
  crypto.getRandomValues(b)
  return b
}

function bytesToHex(b: Uint8Array): string {
  return [...b].map((x) => x.toString(16).padStart(2, '0')).join('')
}

function bytesToB64(b: Uint8Array): string {
  let s = ''
  for (let i = 0; i < b.length; i++) s += String.fromCharCode(b[i])
  return btoa(s)
}

function toB64Url(b64: string): string {
  return b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

/** 拒绝采样:只接受 < 248(=62*4)的字节,保证 62 字符均匀分布、无模偏差 */
function randomAlphanumeric(len: number): string {
  const out: string[] = []
  while (out.length < len) {
    const buf = randomBytes(Math.max(16, len * 2))
    for (const byte of buf) {
      if (byte < 248) {
        out.push(ALNUM[byte % 62])
        if (out.length === len) break
      }
    }
  }
  return out.join('')
}

/** RFC 4122 UUID v4:第 7 字节高 4 位置 0100,第 9 字节高 2 位置 10 */
function uuidV4(): string {
  const b = randomBytes(16)
  b[6] = (b[6] & 0x0f) | 0x40
  b[8] = (b[8] & 0x3f) | 0x80
  const hex = bytesToHex(b)
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`
}

function generateOne(format: Format, len: number, prefix: string): string {
  switch (format) {
    case 'hex':
      return bytesToHex(randomBytes(len))
    case 'base64':
      return bytesToB64(randomBytes(len))
    case 'base64url':
      return toB64Url(bytesToB64(randomBytes(len)))
    case 'alnum':
      return randomAlphanumeric(len)
    case 'apikey':
      return prefix + randomAlphanumeric(len)
    case 'uuid':
      return uuidV4()
  }
}

/** 结果字符串长度(字符数) */
function charCount(format: Format, len: number, prefix: string): number {
  switch (format) {
    case 'hex':
      return len * 2
    case 'base64':
      return Math.ceil(len / 3) * 4
    case 'base64url':
      return Math.ceil((len * 4) / 3) // 去填充后的长度
    case 'alnum':
      return len
    case 'apikey':
      return prefix.length + len
    case 'uuid':
      return 36
  }
}

/** 熵(bit):UUID 固定 122(6 位被 version/variant 占用) */
function entropyBits(format: Format, len: number): number {
  switch (format) {
    case 'alnum':
    case 'apikey':
      return Math.round(len * Math.log2(62))
    case 'uuid':
      return 122
    default:
      return len * 8
  }
}

interface Strength {
  key: string
  label: string
  color: string
}

function strengthOf(bits: number): Strength {
  if (bits < 80) return { key: 'strengthWeak', label: 'Weak', color: 'rgb(220 38 38)' }
  if (bits <= 128) return { key: 'strengthGood', label: 'Good', color: 'rgb(217 119 6)' }
  return { key: 'strengthStrong', label: 'Strong', color: 'rgb(22 163 74)' }
}

export function SecretKeyGeneratorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('secret-key-generator', locale, key, fb)

  const [format, setFormat] = useState<Format>('hex')
  const [byteLen, setByteLen] = useState(32)
  // 默认前缀用中性的 key_,避免 sk_live_(Stripe 生产前缀)被误当真实凭据
  const [prefix, setPrefix] = useState('key_')
  const [count, setCount] = useState(1)
  const [secrets, setSecrets] = useState<string[]>([])

  const regenerate = useCallback(
    (n: number) => {
      setSecrets(Array.from({ length: n }, () => generateOne(format, byteLen, prefix)))
    },
    [format, byteLen, prefix],
  )

  // 挂载时 + 参数/数量变化时重新生成(仅此处触达 crypto)
  useEffect(() => {
    regenerate(count)
  }, [regenerate, count])

  // Generate N 仅选择数量(幂等);刷新随机结果用 Regenerate all
  const handleCount = useCallback((n: number) => setCount(n), [])

  const bits = entropyBits(format, byteLen)
  const chars = charCount(format, byteLen, prefix)
  const strength = strengthOf(bits)
  const allText = useMemo(() => secrets.join('\n'), [secrets])

  const formatLabel =
    format === 'alnum' || format === 'apikey' ? `${byteLen} ${L('randomChars', 'random chars')}` : `${byteLen} ${L('bytes', 'bytes')}`

  return (
    <div className="space-y-5">
      {/* 控制区 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="sk-format" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {L('format', 'Format')}
          </label>
          <select
            id="sk-format"
            value={format}
            onChange={(e) => setFormat(e.target.value as Format)}
            className="w-full rounded-lg border p-3 text-sm shadow-sm outline-none transition focus:ring-2"
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          >
            <option value="hex">{L('fmtHex', 'Hex')}</option>
            <option value="base64">{L('fmtBase64', 'Base64')}</option>
            <option value="base64url">{L('fmtBase64Url', 'Base64URL')}</option>
            <option value="alnum">{L('fmtAlnum', 'Alphanumeric (A–Z a–z 0–9)')}</option>
            <option value="apikey">{L('fmtApiKey', 'API key style (prefix + random)')}</option>
            <option value="uuid">{L('fmtUuid', 'UUID v4')}</option>
          </select>
        </div>
        {format === 'apikey' ? (
          <div>
            <label htmlFor="sk-prefix" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
              {L('prefix', 'Prefix')}
            </label>
            <input
              id="sk-prefix"
              type="text"
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
              placeholder="key_"
              spellCheck={false}
              className="w-full rounded-lg border p-3 font-mono text-sm shadow-sm outline-none transition focus:ring-2"
              style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
            />
          </div>
        ) : (
          format !== 'uuid' && (
            <div>
              <label htmlFor="sk-length" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
                {formatLabel}
              </label>
              <input
                id="sk-length"
                type="range"
                min={8}
                max={64}
                step={1}
                value={byteLen}
                onChange={(e) => setByteLen(Number(e.target.value))}
                className="w-full accent-blue-600"
              />
              <div className="mt-1 flex justify-between text-xs" style={{ color: 'rgb(var(--text-faint))' }}>
                <span>8</span>
                <span className="font-mono">{byteLen}</span>
                <span>64</span>
              </div>
            </div>
          )
        )}
      </div>
      {format === 'apikey' && (
        <div>
          <label htmlFor="sk-length-api" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {L('randomPart', 'Random part:')} <span className="font-mono">{byteLen}</span> {L('chars', 'chars')}
          </label>
          <input
            id="sk-length-api"
            type="range"
            min={8}
            max={64}
            step={1}
            value={byteLen}
            onChange={(e) => setByteLen(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
          <div className="mt-1 flex justify-between text-xs" style={{ color: 'rgb(var(--text-faint))' }}>
            <span>8</span>
            <span>32</span>
            <span>64</span>
          </div>
        </div>
      )}

      {/* 统计徽标 */}
      <div className="flex flex-wrap gap-2 text-xs">
        <span className="rounded-full border px-3 py-1 font-medium" style={{ borderColor: 'rgb(var(--border))', color: 'rgb(var(--text-muted))' }}>
          {L('length', 'Length:')} <span className="font-mono">{chars}</span> {L('chars', 'chars')}
        </span>
        <span className="rounded-full border px-3 py-1 font-medium" style={{ borderColor: 'rgb(var(--border))', color: 'rgb(var(--text-muted))' }}>
          {L('entropy', 'Entropy:')} <span className="font-mono">{bits}</span> {L('bits', 'bits')}
        </span>
        <span className="rounded-full border px-3 py-1 font-semibold" style={{ borderColor: strength.color, color: strength.color }}>
          {L(strength.key, strength.label)}
        </span>
      </div>

      {/* 熵值仪表盘:长度/格式变化时指针 spring 滑动,「够不够强」一眼可见 */}
      <GaugeChart
        title={L('entropyGauge', 'Entropy strength')}
        value={bits}
        min={0}
        max={512}
        zones={[
          { upTo: 80, color: '#ef4444', label: L('strengthWeak', 'Weak') },
          { upTo: 128, color: '#f59e0b', label: L('strengthGood', 'Good') },
          { upTo: 256, color: '#22c55e', label: L('strengthStrong', 'Strong') },
          { upTo: 512, color: '#3b82f6', label: L('strengthExcellent', 'Excellent') },
        ]}
        formatValue={(n) => `${Math.round(n)} bits`}
      />

      {/* 生成数量 */}
      <div className="flex flex-wrap items-center gap-3">
        {[1, 5, 10].map((n) => (
          <button key={n} type="button" onClick={() => handleCount(n)} className={`btn ${count === n ? 'btn-primary' : 'btn-secondary'}`}>
            {L('generate', 'Generate')} {n}
          </button>
        ))}
      </div>

      {/* 结果列表 */}
      {secrets.length > 0 && (
        <div className="space-y-2">
          {secrets.map((s, i) => (
            <div
              key={`${i}-${s.slice(0, 8)}`}
              className="flex flex-wrap items-center gap-3 rounded-lg border px-4 py-2.5"
              style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }}
            >
              <code className="min-w-0 flex-1 break-all font-mono text-sm" style={{ color: 'rgb(var(--text))' }}>
                {s}
              </code>
              <CopyButton value={s} label={L('copy', 'Copy')} />
            </div>
          ))}
        </div>
      )}

      {/* 批量操作 */}
      {secrets.length > 0 && (
        <div className="flex flex-wrap items-center gap-3">
          <button type="button" onClick={() => regenerate(count)} className="btn btn-secondary">
            <RefreshCw className="h-4 w-4" /> {L('regenerateAll', 'Regenerate all')}
          </button>
          <ResultActions summary={allText} filename="secrets.txt" downloadContent={`${allText}\n`} copyLabel={L('copyAll', 'Copy all')} />
        </div>
      )}

      <p
        className="rounded-md p-3 text-xs"
        style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}
      >
        {L('noteIntro', '🔒 Generated with ')}<code>crypto.getRandomValues</code>{L('noteMid1', ' — your browser&apos;s CSPRNG — entirely on this device; nothing is uploaded. Alphanumeric output uses ')}<strong>{L('noteRejectionSampling', 'rejection sampling')}</strong>{L('noteOutro', ' so every character is uniformly distributed (no modulo bias). Store generated secrets in a password manager or your platform&apos;s secrets store, and rotate any key that ever appears in logs, tickets, or screenshots.')}
      </p>
    </div>
  )
}
