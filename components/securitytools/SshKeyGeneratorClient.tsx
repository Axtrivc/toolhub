'use client'

import { useCallback, useState } from 'react'
import { Download, Eye, EyeOff } from 'lucide-react'
import { CopyButton } from '@/components/CopyButton'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * SSH Key Generator —— 纯 Web Crypto 客户端生成 SSH 密钥对
 *
 * - Ed25519:subtle.generateKey({ name: 'Ed25519' }),公钥导出 raw(32 字节)。
 * - RSA:RSASSA-PKCS1-v1_5,2048/4096,exponent 65537,SHA-256;公钥导出 JWK(e/n base64url)。
 * OpenSSH authorized_keys 公钥 = base64(SSH wire blob):
 *   ssh-ed25519:string("ssh-ed25519") + string(32B raw key)
 *   ssh-rsa:string("ssh-rsa") + mpint(e) + mpint(n)(mpint = 4B 长度 + 大端字节,高位补 0x00)
 * 私钥导出 PKCS#8 → PEM(64 字符折行)。指纹 = SHA256(wire blob) 的 base64,格式同 ssh-keygen -l。
 * 100% 本地运行,密钥不出浏览器。
 */

type KeyType = 'ed25519' | 'rsa'

interface GeneratedKeys {
  publicLine: string
  fingerprint: string
  privatePem: string
  baseName: 'id_ed25519' | 'id_rsa'
}

const te = new TextEncoder()

/** Uint8Array → 标准 base64 */
function bytesToB64(bytes: Uint8Array): string {
  let s = ''
  for (let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i])
  return btoa(s)
}

/** base64url(JWK 的 e/n)→ 字节 */
function b64urlToBytes(s: string): Uint8Array {
  const b64 = s.replace(/-/g, '+').replace(/_/g, '/')
  const padded = b64.length % 4 === 0 ? b64 : b64 + '='.repeat(4 - (b64.length % 4))
  const bin = atob(padded)
  const out = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i)
  return out
}

function concatBytes(...parts: Uint8Array[]): Uint8Array<ArrayBuffer> {
  const total = parts.reduce((n, p) => n + p.length, 0)
  const out = new Uint8Array(total)
  let off = 0
  for (const p of parts) {
    out.set(p, off)
    off += p.length
  }
  return out
}

/** SSH wire string 字段:4 字节大端长度前缀 + 内容 */
function sshString(bytes: Uint8Array): Uint8Array {
  const out = new Uint8Array(4 + bytes.length)
  new DataView(out.buffer).setUint32(0, bytes.length)
  out.set(bytes, 4)
  return out
}

/** SSH mpint:去前导零,最高位置位时补 0x00,再加长度前缀 */
function sshMpint(bytes: Uint8Array): Uint8Array {
  let b = bytes
  while (b.length > 1 && b[0] === 0) b = b.slice(1)
  if (b[0] & 0x80) {
    const padded = new Uint8Array(b.length + 1)
    padded.set(b, 1)
    b = padded
  }
  return sshString(b)
}

/** PKCS#8 DER → PEM(64 字符折行) */
function pemWrap(der: ArrayBuffer): string {
  const b64 = bytesToB64(new Uint8Array(der))
  const lines = b64.match(/.{1,64}/g) ?? []
  return `-----BEGIN PRIVATE KEY-----\n${lines.join('\n')}\n-----END PRIVATE KEY-----\n`
}

function downloadTextFile(filename: string, content: string): void {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

const MASK = '•'.repeat(48)

export function SshKeyGeneratorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('ssh-key-generator', locale, key, fb)

  const [keyType, setKeyType] = useState<KeyType>('ed25519')
  const [modulusLength, setModulusLength] = useState<2048 | 4096>(2048)
  const [comment, setComment] = useState('')
  const [keys, setKeys] = useState<GeneratedKeys | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const generate = useCallback(async () => {
    setError(null)
    setBusy(true)
    try {
      if (typeof crypto === 'undefined' || !crypto.subtle) {
        throw new Error(L('errorNoWebCrypto', 'Web Crypto API is not available here. It requires a secure (HTTPS) context and a modern browser.'))
      }
      let blob: Uint8Array<ArrayBuffer>
      let privatePem: string
      if (keyType === 'ed25519') {
        let pair: CryptoKeyPair
        try {
          // 特性检测:旧浏览器不认识 Ed25519,generateKey 会抛异常
          pair = (await crypto.subtle.generateKey({ name: 'Ed25519' }, true, ['sign', 'verify'])) as CryptoKeyPair
        } catch {
          throw new Error(
            L('errorNoEd25519', 'This browser does not support Ed25519 in the Web Crypto API. Try a current Chrome, Edge, Firefox or Safari — or switch to RSA below.'),
          )
        }
        const raw = await crypto.subtle.exportKey('raw', pair.publicKey)
        blob = concatBytes(sshString(te.encode('ssh-ed25519')), sshString(new Uint8Array(raw)))
        privatePem = pemWrap(await crypto.subtle.exportKey('pkcs8', pair.privateKey))
      } else {
        const pair = await crypto.subtle.generateKey(
          {
            name: 'RSASSA-PKCS1-v1_5',
            modulusLength,
            publicExponent: new Uint8Array([1, 0, 1]), // 65537
            hash: 'SHA-256',
          },
          true,
          ['sign', 'verify'],
        )
        const jwk = await crypto.subtle.exportKey('jwk', pair.publicKey)
        if (!jwk.e || !jwk.n) throw new Error(L('errorRsaExport', 'Could not export the RSA public key parameters.'))
        blob = concatBytes(sshString(te.encode('ssh-rsa')), sshMpint(b64urlToBytes(jwk.e)), sshMpint(b64urlToBytes(jwk.n)))
        privatePem = pemWrap(await crypto.subtle.exportKey('pkcs8', pair.privateKey))
      }
      const cleanComment = comment.replace(/[\r\n]+/g, ' ').trim()
      const algoName = keyType === 'ed25519' ? 'ssh-ed25519' : 'ssh-rsa'
      const publicLine = `${algoName} ${bytesToB64(blob)}${cleanComment ? ` ${cleanComment}` : ''}`
      const digest = await crypto.subtle.digest('SHA-256', blob)
      const fingerprint = `SHA256:${bytesToB64(new Uint8Array(digest)).replace(/=+$/, '')}`
      setKeys({ publicLine, fingerprint, privatePem, baseName: keyType === 'ed25519' ? 'id_ed25519' : 'id_rsa' })
      setRevealed(false)
    } catch (e) {
      setKeys(null)
      setError(e instanceof Error ? e.message : L('errorKeyGenFailed', 'Key generation failed.'))
    } finally {
      setBusy(false)
    }
  }, [keyType, modulusLength, comment, locale])

  return (
    <div className="space-y-5">
      {/* 控制区 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="ssh-key-type" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {L('keyType', 'Key type')}
          </label>
          <select
            id="ssh-key-type"
            value={keyType}
            onChange={(e) => setKeyType(e.target.value as KeyType)}
            className="w-full rounded-lg border p-3 text-sm shadow-sm outline-none transition focus:ring-2"
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          >
            <option value="ed25519">{L('ed25519Recommended', 'Ed25519 (recommended)')}</option>
            <option value="rsa">{L('rsa', 'RSA')}</option>
          </select>
        </div>
        <div>
          <label htmlFor="ssh-comment" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {L('comment', 'Comment (optional)')}
          </label>
          <input
            id="ssh-comment"
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="you@example.com"
            spellCheck={false}
            className="w-full rounded-lg border p-3 text-sm shadow-sm outline-none transition focus:ring-2"
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          />
        </div>
      </div>
      {keyType === 'rsa' && (
        <div>
          <label htmlFor="ssh-rsa-bits" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
            {L('rsaModulus', 'RSA modulus (bits)')}
          </label>
          <select
            id="ssh-rsa-bits"
            value={modulusLength}
            onChange={(e) => setModulusLength(Number(e.target.value) as 2048 | 4096)}
            className="w-full rounded-lg border p-3 text-sm shadow-sm outline-none transition focus:ring-2"
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          >
            <option value={2048}>2048</option>
            <option value={4096}>4096</option>
          </select>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <button type="button" onClick={generate} disabled={busy} className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-50">
          {busy ? L('generating', 'Generating…') : L('generateKeyPair', 'Generate key pair')}
        </button>
        {busy && (
          <span className="text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
            {L('rsa4096Wait', 'RSA-4096 can take a few seconds…')}
          </span>
        )}
      </div>

      {error && <div className="rounded-lg border border-red-200 dark:border-red-800/60 bg-red-50 dark:bg-red-950/30 p-4 text-sm text-red-700 dark:text-red-300">⚠️ {error}</div>}

      {keys && (
        <>
          {/* 指纹 */}
          <div
            className="rounded-lg border p-5"
            style={{ borderColor: 'rgb(var(--primary) / 0.4)', backgroundColor: 'rgb(var(--primary) / 0.08)' }}
          >
            <div className="text-xs font-medium uppercase tracking-wide" style={{ color: 'rgb(var(--text-subtle))' }}>
              {L('fingerprint', 'Fingerprint (SHA-256)')}
            </div>
            <div className="mt-1.5 font-mono text-sm font-semibold" style={{ color: 'rgb(var(--primary))' }}>
              {keys.fingerprint}
            </div>
          </div>

          {/* 公钥 */}
          <div>
            <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2">
              <span className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
                {L('publicKeyPrefix', 'Public key — paste into ')}<code>~/.ssh/authorized_keys</code>
              </span>
              <CopyButton value={keys.publicLine} label={L('copyPublicKey', 'Copy public key')} />
            </div>
            <pre
              className="w-full overflow-x-auto whitespace-pre-wrap break-all rounded-lg border p-4 font-mono text-sm shadow-sm"
              style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
            >
              {keys.publicLine}
            </pre>
          </div>

          {/* 私钥(遮蔽/显示) */}
          <div>
            <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2">
              <span className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
                {L('privateKeyPem', 'Private key (PKCS#8 PEM)')}
              </span>
              <button type="button" onClick={() => setRevealed((r) => !r)} className="btn btn-secondary">
                {revealed ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                {revealed ? L('hide', 'Hide') : L('reveal', 'Reveal')}
              </button>
            </div>
            {/* 显眼警示:导出的私钥无口令保护(底部说明仅弱提示,此处直标) */}
            <div className="mb-1.5 rounded-lg border border-amber-300 bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-800 dark:border-amber-600/60 dark:bg-amber-900/20 dark:text-amber-300">
              ⚠️ {L('unencryptedBadge', 'Unencrypted — no passphrase')}
            </div>
            <textarea
              readOnly
              rows={revealed ? 12 : 3}
              value={revealed ? keys.privatePem : `${MASK}\n${MASK}\n${MASK}`}
              aria-label={L('privateKeyMasked', 'Private key (masked)')}
              className="w-full rounded-lg border p-4 font-mono text-sm shadow-sm outline-none"
              style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
            />
            <div className="mt-3 flex flex-wrap gap-3">
              <CopyButton value={keys.privatePem} label={L('copyPrivateKey', 'Copy private key')} />
              <button
                type="button"
                onClick={() => downloadTextFile(`${keys.baseName}.pub`, `${keys.publicLine}\n`)}
                className="btn btn-secondary"
              >
                <Download className="h-4 w-4" /> {keys.baseName}.pub
              </button>
              <button
                type="button"
                onClick={() => downloadTextFile(keys.baseName, keys.privatePem)}
                className="btn btn-secondary"
              >
                <Download className="h-4 w-4" /> {keys.baseName}
              </button>
            </div>
          </div>

          <p
            className="rounded-md p-3 text-xs"
            style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}
          >
            {L('noteIntro', '🔒 Store the private key somewhere safe and lock it down with ')}<code>chmod 600 ~/.ssh/{keys.baseName}</code>{L('noteMid1', '. The private key is exported in PKCS#8 PEM — many tools (including OpenSSH ≥ 7.8) read it directly, and you can convert it to the OpenSSH "BEGIN OPENSSH PRIVATE KEY" format any time with ')}<code>ssh-keygen -p -f {keys.baseName}</code>{L('noteOutro', '. Keys are generated and kept entirely in your browser — nothing is uploaded.')}
          </p>
        </>
      )}
    </div>
  )
}
