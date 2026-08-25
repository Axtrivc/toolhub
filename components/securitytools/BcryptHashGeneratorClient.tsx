'use client'

import { useCallback, useEffect, useState } from 'react'
import { RefreshCw } from 'lucide-react'
import { CopyButton } from '@/components/CopyButton'
import { compareSync, genSaltSync, hashSync } from '@/lib/bcrypt'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * Bcrypt Hash Generator —— 纯客户端密码哈希/校验
 *
 * 三种算法:
 *  - bcrypt:vendored bcryptjs 2.4.3(lib/bcrypt.ts),cost 4–15,自动加盐。
 *  - Salted SHA-256 / SHA-512:SubtleCrypto digest(salt || password),
 *    输出格式 sha256$<salt_hex>$<digest_hex>,可自校验。
 * 校验区:bcrypt 走 compareSync;SHA 格式解析内嵌盐后重算比对。
 * 100% 本地运行,密码不出浏览器。
 */

type Algorithm = 'bcrypt' | 'sha256' | 'sha512'

/** 随机 n 字节 → hex 字符串(crypto.getRandomValues) */
function randomHex(n: number): string {
  const b = new Uint8Array(n)
  crypto.getRandomValues(b)
  return [...b].map((x) => x.toString(16).padStart(2, '0')).join('')
}

/** hex 字符串 → 字节(校验格式,非法抛错) */
function hexToBytes(hex: string): Uint8Array {
  if (hex.length === 0 || hex.length % 2 !== 0 || !/^[0-9a-fA-F]+$/.test(hex)) {
    throw new Error('Salt must be a non-empty, even-length hex string (0-9, a-f).')
  }
  const out = new Uint8Array(hex.length / 2)
  for (let i = 0; i < out.length; i++) out[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16)
  return out
}

const te = new TextEncoder()

/** 加盐 SHA 哈希:salt 字节 || UTF-8 密码,输出 tag$salt_hex$digest_hex */
async function saltedShaHash(kind: 'SHA-256' | 'SHA-512', saltHex: string, password: string): Promise<string> {
  const salt = hexToBytes(saltHex)
  const pw = te.encode(password)
  const data = new Uint8Array(salt.length + pw.length)
  data.set(salt)
  data.set(pw, salt.length)
  const digest = await crypto.subtle.digest(kind, data)
  const hex = [...new Uint8Array(digest)].map((x) => x.toString(16).padStart(2, '0')).join('')
  return `${kind === 'SHA-256' ? 'sha256' : 'sha512'}$${saltHex.toLowerCase()}$${hex}`
}

/** 让出一帧,确保 busy 状态先渲染(bcrypt cost≥12 会阻塞主线程) */
const nextTick = () => new Promise<void>((r) => setTimeout(r, 30))

export function BcryptHashGeneratorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('bcrypt-hash-generator', locale, key, fb)

  const [password, setPassword] = useState('')
  const [algorithm, setAlgorithm] = useState<Algorithm>('bcrypt')
  const [cost, setCost] = useState(10)
  const [saltHex, setSaltHex] = useState('')
  const [hash, setHash] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [verifyHash, setVerifyHash] = useState('')
  const [verifyPassword, setVerifyPassword] = useState('')
  const [verifyResult, setVerifyResult] = useState<boolean | null>(null)

  // 盐只能在挂载后生成(getRandomValues 不能出现在初始渲染)
  useEffect(() => {
    setSaltHex(randomHex(16))
  }, [])

  const regenerateSalt = useCallback(() => setSaltHex(randomHex(16)), [])

  const handleGenerate = useCallback(async () => {
    setError(null)
    setVerifyResult(null)
    if (!password) {
      setError(L('errorEnterPassword', 'Enter a password first.'))
      return
    }
    setBusy(true)
    try {
      if (typeof crypto === 'undefined' || !crypto.subtle) {
        throw new Error(L('errorNoWebCrypto', 'Web Crypto API is not available here. It requires a secure (HTTPS) context and a modern browser.'))
      }
      await nextTick()
      let out: string
      if (algorithm === 'bcrypt') {
        out = hashSync(password, genSaltSync(cost))
      } else {
        out = await saltedShaHash(algorithm === 'sha256' ? 'SHA-256' : 'SHA-512', saltHex, password)
      }
      setHash(out)
      setVerifyHash(out)
    } catch (e) {
      setHash('')
      setError(e instanceof Error ? e.message : L('errorHashingFailed', 'Hashing failed.'))
    } finally {
      setBusy(false)
    }
  }, [password, algorithm, cost, saltHex, locale])

  const handleVerify = useCallback(async () => {
    setError(null)
    setVerifyResult(null)
    const h = verifyHash.trim()
    if (!h || !verifyPassword) {
      setError(L('errorPasteHash', 'Paste a hash and enter the password to check.'))
      return
    }
    setBusy(true)
    try {
      if (typeof crypto === 'undefined' || !crypto.subtle) {
        throw new Error(L('errorNoWebCrypto', 'Web Crypto API is not available here. It requires a secure (HTTPS) context and a modern browser.'))
      }
      await nextTick()
      if (h.startsWith('$2a$') || h.startsWith('$2b$') || h.startsWith('$2y$')) {
        setVerifyResult(compareSync(verifyPassword, h))
      } else if (h.startsWith('sha256$') || h.startsWith('sha512$')) {
        const [tag, salt] = h.split('$')
        const recomputed = await saltedShaHash(tag === 'sha256' ? 'SHA-256' : 'SHA-512', salt, verifyPassword)
        setVerifyResult(recomputed === h)
      } else {
        throw new Error(L('errorUnrecognizedHash', 'Unrecognized hash format. Expected bcrypt ($2a$/$2b$/$2y$…) or sha256$salt$hash / sha512$salt$hash from this tool.'))
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : L('errorVerifyFailed', 'Verification failed.'))
    } finally {
      setBusy(false)
    }
  }, [verifyHash, verifyPassword, locale])

  return (
    <div className="space-y-5">
      {/* 输入区 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="bh-password" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {L('password', 'Password')}
          </label>
          <input
            id="bh-password"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={L('passwordToHash', 'Password to hash')}
            spellCheck={false}
            autoComplete="off"
            className="w-full rounded-lg border p-4 font-mono text-sm shadow-sm outline-none transition focus:ring-2"
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          />
        </div>
        <div>
          <label htmlFor="bh-algorithm" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {L('algorithm', 'Algorithm')}
          </label>
          <select
            id="bh-algorithm"
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value as Algorithm)}
            className="w-full rounded-lg border p-3 text-sm shadow-sm outline-none transition focus:ring-2"
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          >
            <option value="bcrypt">{L('algoBcrypt', 'bcrypt (recommended)')}</option>
            <option value="sha256">{L('algoSha256', 'Salted SHA-256')}</option>
            <option value="sha512">{L('algoSha512', 'Salted SHA-512')}</option>
          </select>
        </div>
      </div>

      {/* bcrypt:cost 滑块 */}
      {algorithm === 'bcrypt' && (
        <div>
          <label htmlFor="bh-cost" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {L('costFactor', 'Cost factor:')} <span className="font-mono">{cost}</span> ({(2 ** cost).toLocaleString()} {L('iterations', 'iterations')})
          </label>
          <input
            id="bh-cost"
            type="range"
            min={4}
            max={15}
            step={1}
            value={cost}
            onChange={(e) => setCost(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
          <div className="mt-1 flex justify-between text-xs" style={{ color: 'rgb(var(--text-faint))' }}>
            <span>{L('costFastWeak', '4 (fast, weak)')}</span>
            <span>{L('costTypical', '10–12 typical')}</span>
            <span>{L('costSlowStrong', '15 (slow, strong)')}</span>
          </div>
          {cost > 12 && (
            <div className="mt-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-800">
              {L('costWarn', '⚠️ Cost above 12 is deliberately slow — each step doubles the work, so 15 can take several seconds in the browser.')}
            </div>
          )}
        </div>
      )}

      {/* SHA:hex 盐 + 重新生成 */}
      {algorithm !== 'bcrypt' && (
        <div>
          <label htmlFor="bh-salt" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {L('salt', 'Salt (hex, 16 bytes)')}
          </label>
          <div className="flex gap-2">
            <input
              id="bh-salt"
              type="text"
              value={saltHex}
              onChange={(e) => setSaltHex(e.target.value.trim())}
              spellCheck={false}
              className="w-full rounded-lg border p-4 font-mono text-sm shadow-sm outline-none transition focus:ring-2"
              style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
            />
            <button type="button" onClick={regenerateSalt} className="btn btn-secondary shrink-0" title={L('newRandomSalt', 'New random salt')}>
              <RefreshCw className="h-4 w-4" /> {L('regenerate', 'Regenerate')}
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={handleGenerate}
          disabled={busy}
          className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-50"
        >
          {busy ? L('hashing', 'Hashing…') : L('generateHash', 'Generate hash')}
        </button>
        {busy && algorithm === 'bcrypt' && cost >= 12 && (
          <span className="text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
            {L('highCostWait', 'High cost — this can take a moment…')}
          </span>
        )}
      </div>

      {error && <div className="rounded-lg border border-red-200 dark:border-red-800/60 bg-red-50 dark:bg-red-950/30 p-4 text-sm text-red-700">⚠️ {error}</div>}

      {/* 哈希输出 */}
      {hash && (
        <div>
          <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2">
            <span className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
              {L('hash', 'Hash')}
            </span>
            <CopyButton value={hash} label={L('copyHash', 'Copy hash')} />
          </div>
          <pre
            className="w-full overflow-x-auto whitespace-pre-wrap break-all rounded-lg border p-4 font-mono text-sm shadow-sm"
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          >
            {hash}
          </pre>
        </div>
      )}

      {/* 校验区 */}
      <div className="rounded-lg border p-4" style={{ borderColor: 'rgb(var(--border))' }}>
        <h3 className="mb-3 text-sm font-semibold" style={{ color: 'rgb(var(--text))' }}>
          {L('verifyHeading', 'Verify a password against a hash')}
        </h3>
        <div className="space-y-3">
          <div>
            <label htmlFor="bh-verify-hash" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
              {L('hash', 'Hash')}
            </label>
            <input
              id="bh-verify-hash"
              type="text"
              value={verifyHash}
              onChange={(e) => {
                setVerifyHash(e.target.value)
                setVerifyResult(null)
              }}
              placeholder="$2a$10$… or sha256$salt$hash"
              spellCheck={false}
              className="w-full rounded-lg border p-4 font-mono text-sm shadow-sm outline-none transition focus:ring-2"
              style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
            />
          </div>
          <div>
            <label htmlFor="bh-verify-password" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
              {L('passwordToCheck', 'Password to check')}
            </label>
            <input
              id="bh-verify-password"
              type="text"
              value={verifyPassword}
              onChange={(e) => {
                setVerifyPassword(e.target.value)
                setVerifyResult(null)
              }}
              spellCheck={false}
              autoComplete="off"
              className="w-full rounded-lg border p-4 font-mono text-sm shadow-sm outline-none transition focus:ring-2"
              style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
            />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleVerify}
              disabled={busy}
              className="btn btn-secondary disabled:cursor-not-allowed disabled:opacity-50"
            >
              {busy ? L('checking', 'Checking…') : L('verify', 'Verify')}
            </button>
            {verifyResult !== null &&
              (verifyResult ? (
                <span className="rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                  {L('matchCorrect', '✓ Match — password is correct')}
                </span>
              ) : (
                <span className="rounded-full border border-red-200 dark:border-red-800/60 bg-red-50 dark:bg-red-950/30 px-3 py-1 text-xs font-semibold text-red-700">
                  {L('noMatch', '✗ No match — wrong password or hash')}
                </span>
              ))}
          </div>
        </div>
      </div>

      <p
        className="rounded-md p-3 text-xs"
        style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}
      >
        {L('noteIntro', '⚠️ This is a ')}<strong>{L('noteClientSide', 'client-side demo')}</strong>{L('noteMid1', ': hashing runs locally in your browser and nothing is uploaded. In production, hash passwords ')}<strong>{L('noteServerSide', 'server-side')}</strong>{L('noteMid2', ' with a dedicated password-hashing algorithm — ')}<code>argon2id</code>{L('noteOr', ' or ')}<code>bcrypt</code>{L('noteOutro', ' — never with a bare SHA-2 hash. Salted SHA-256/SHA-512 is included here for learning and legacy-format verification only.')}
      </p>
    </div>
  )
}
