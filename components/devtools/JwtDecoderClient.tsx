'use client'

import { useState, useMemo, useCallback } from 'react'
import { CopyButton } from '@/components/CopyButton'
import { LoadSampleButton } from '@/components/LoadSampleButton'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * JWT Decoder —— 纯前端解析 JSON Web Token
 *
 * 安全:100% 本地 atob 解码,token 永不上传服务器(在 note 与文案中明确强调)。
 * 输出:Header / Payload(美化 JSON) / Signature(原样);iat/nbf/exp 统一转本地时间并附剩余时长。
 * 误输入优雅降级:非法 base64 / 非 3 段结构 → 友好错误,不抛异常。
 */

// 一个示例 HS256 JWT(payload 含 sub/exp/iat),仅本地演示,无任何真实凭证。
// exp 设为 2099-12-31 以保证示例长期"未过期"。
const SAMPLE_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkphbmUgRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjQxMDI0NDQ4MDB9.sflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

/** base64url → base64,补齐 padding,UTF-8 安全解码 */
function b64urlDecode(str: string): string {
  let s = str.replace(/-/g, '+').replace(/_/g, '/')
  // 补齐 padding
  while (s.length % 4) s += '='
  try {
    const binary = atob(s)
    // UTF-8 解码
    const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0))
    return new TextDecoder('utf-8').decode(bytes)
  } catch {
    throw new Error('Invalid Base64URL')
  }
}

interface DecodedJwt {
  header: unknown
  payload: unknown
  signature: string
}

function decodeJwt(token: string): DecodedJwt {
  const parts = token.trim().split('.')
  if (parts.length !== 3) throw new Error('A JWT must have exactly 3 parts separated by dots.')
  const header = JSON.parse(b64urlDecode(parts[0]))
  const payload = JSON.parse(b64urlDecode(parts[1]))
  return { header, payload, signature: parts[2] }
}

function pretty(obj: unknown): string {
  try {
    return JSON.stringify(obj, null, 2)
  } catch {
    return String(obj)
  }
}

export function JwtDecoderClient() {
  const { locale } = useApp()
  // 取本地化 UI 串;缺失回退英文(SSR 恒英文)。
  const L = (key: string, fb: string) => tui('jwt-decoder', locale, key, fb)

  const [token, setToken] = useState('')

  const result = useMemo<{ decoded?: DecodedJwt; error?: string }>(() => {
    if (!token.trim()) return {}
    try {
      return { decoded: decodeJwt(token) }
    } catch (e) {
      return { error: e instanceof Error ? e.message : L('invalidJwt', 'Invalid JWT') }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, locale])

  // exp 过期检查(payload.exp 为秒级 Unix 时间戳) → 扩展为 iat/nbf/exp 时间类 claim:
  // 统一转本地时间 + 剩余/已过时长(如 "expired 3 days ago" / "valid for 2 hours")
  const humanizeDuration = (totalSec: number): string => {
    const fmt = (n: number, base: string, fbSingular: string, fbPlural: string) =>
      `${n} ${L(n === 1 ? base : base + 'Plural', n === 1 ? fbSingular : fbPlural)}`
    if (totalSec < 60) return fmt(totalSec, 'unitSecond', 'second', 'seconds')
    const mins = Math.floor(totalSec / 60)
    if (mins < 60) return fmt(mins, 'unitMinute', 'minute', 'minutes')
    const hours = Math.floor(mins / 60)
    if (hours < 24) return fmt(hours, 'unitHour', 'hour', 'hours')
    const days = Math.floor(hours / 24)
    if (days < 365) return fmt(days, 'unitDay', 'day', 'days')
    return fmt(Math.floor(days / 365), 'unitYear', 'year', 'years')
  }

  const timeClaims = useMemo<{ claims: { key: string; label: string; text: string }[]; problem: boolean }>(() => {
    const p = result.decoded?.payload as Record<string, unknown> | undefined
    if (!p) return { claims: [], problem: false }
    const nowSec = Math.floor(Date.now() / 1000)
    const defs: [key: string, labelKey: string, labelFb: string][] = [
      ['iat', 'issuedLabel', 'Issued (iat):'],
      ['nbf', 'notBeforeLabel', 'Not before (nbf):'],
      ['exp', 'expiryLabel', 'Expiry (exp):'],
    ]
    const claims: { key: string; label: string; text: string }[] = []
    let problem = false
    for (const [key, labelKey, labelFb] of defs) {
      const ts = p[key]
      if (typeof ts !== 'number') continue
      const date = new Date(ts * 1000)
      const dur = humanizeDuration(Math.abs(ts - nowSec))
      let rel: string
      if (ts < nowSec) {
        rel = (key === 'exp' ? L('expiredAgo', 'expired {dur} ago') : L('timeAgo', '{dur} ago')).replace('{dur}', dur)
        if (key === 'exp') problem = true
      } else {
        rel = (key === 'exp' ? L('validFor', 'valid for {dur}') : L('timeIn', 'in {dur}')).replace('{dur}', dur)
        if (key === 'nbf') problem = true // nbf 在未来 → 令牌尚未生效
      }
      claims.push({ key, label: L(labelKey, labelFb), text: `${date.toLocaleString(locale)} (${rel})` })
    }
    return { claims, problem }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result, locale])

  const handleLoadSample = useCallback(() => setToken(SAMPLE_TOKEN), [])

  const headerStr = result.decoded ? pretty(result.decoded.header) : ''
  const payloadStr = result.decoded ? pretty(result.decoded.payload) : ''

  return (
    <div className="space-y-5">
      {/* 输入区 */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="jwt-input" className="text-sm font-medium text-slate-700">
            {L('inputLabel', 'Paste your JWT')}
          </label>
          <div className="flex items-center gap-2">
            <LoadSampleButton onLoad={handleLoadSample} variant="compact" />
            {token && (
              <button
                type="button"
                onClick={() => setToken('')}
                className="-my-1 rounded-md px-2 py-1 text-xs text-slate-400 hover:text-red-500 sm:text-sm"
              >
                {L('clear', 'Clear')}
              </button>
            )}
          </div>
        </div>
        <textarea
          id="jwt-input"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
          rows={4}
          spellCheck={false}
          className="w-full rounded-lg border p-4 font-mono text-xs shadow-sm outline-none transition focus:ring-2"
          style={{
            borderColor: 'rgb(var(--border-strong))',
            backgroundColor: 'rgb(var(--bg-card))',
            color: 'rgb(var(--text))',
          }}
        />
      </div>

      {/* 错误提示 */}
      {result.error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          ⚠️ {result.error}
        </div>
      )}

      {/* 解码结果:Header / Payload / Signature 三栏 */}
      {result.decoded && (
        <div className="space-y-4">
          {/* 时间类 claim:iat/nbf/exp → 本地时间 + 剩余/已过时长 */}
          {timeClaims.claims.length > 0 && (
            <div
              className={`rounded-lg border p-3 text-sm ${
                timeClaims.problem
                  ? 'border-red-200 bg-red-50 text-red-700'
                  : 'border-green-200 bg-green-50 text-green-700'
              }`}
            >
              {timeClaims.claims.map((c) => (
                <div key={c.key}>
                  <strong>{c.label}</strong> {c.text}
                </div>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {/* Header */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>
                  {L('header', 'Header')}{' '}
                  <span className="font-normal text-slate-400">
                    ({(result.decoded.header as { alg?: string })?.alg ?? 'alg'})
                  </span>
                </span>
                <CopyButton value={headerStr} label={L('copy', 'Copy')} />
              </div>
              <pre className="overflow-x-auto rounded-lg border bg-slate-50 p-4 text-xs" style={{ borderColor: 'rgb(var(--border))' }}>
                <code>{headerStr}</code>
              </pre>
            </div>

            {/* Payload */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{L('payload', 'Payload')}</span>
                <CopyButton value={payloadStr} label={L('copy', 'Copy')} />
              </div>
              <pre className="overflow-x-auto rounded-lg border bg-slate-50 p-4 text-xs" style={{ borderColor: 'rgb(var(--border))' }}>
                <code>{payloadStr}</code>
              </pre>
            </div>
          </div>

          {/* Signature(原样展示,无法解码) */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>
                {L('signature', 'Signature')}{' '}
                <span className="font-normal text-slate-400">{L('signatureHint', '(verifying requires the secret/public key)')}</span>
              </span>
              <CopyButton value={result.decoded.signature} label={L('copy', 'Copy')} />
            </div>
            <pre className="overflow-x-auto rounded-lg border bg-slate-50 p-4 text-xs" style={{ borderColor: 'rgb(var(--border))' }}>
              <code>{result.decoded.signature}</code>
            </pre>
          </div>
        </div>
      )}

      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        {L('note', '🔒 100% client-side — your token is parsed in your browser only and never sent to any server. This tool decodes tokens; it cannot verify the signature without the matching secret or public key.')}
      </p>
    </div>
  )
}
