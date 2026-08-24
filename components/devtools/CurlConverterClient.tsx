'use client'

import { useState, useMemo, useCallback } from 'react'
import { CopyButton } from '@/components/CopyButton'
import { LoadSampleButton } from '@/components/LoadSampleButton'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * Curl to Code Converter —— 纯前端 tokenizer + 多语言代码生成
 *
 * 流程:手写 shell tokenizer(支持引号/转义/$'...')→ 解析成 ParsedCurl
 * → 生成 JavaScript (Fetch / Axios) + Python (requests)。
 * 不调用任何 shell,不依赖任何后端,100% 本地。
 */

const SAMPLE_CURL = `curl -X POST https://api.example.com/v1/users \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer token123" \\
  -d '{"name":"Jane","role":"admin"}'`

interface ParsedCurl {
  url: string
  method: string
  headers: Record<string, string>
  body: string
  insecure: boolean
  /** -u/--user 的原始值(user:pass),转成 Authorization: Basic 头 */
  user?: string
  /** 未支持但已安全忽略的 flag(带值的已连值一起消费),解析概要区提示 */
  ignoredFlags: string[]
}

/**
 * 手写 shell tokenizer:按空白拆分,但尊重单/双引号与反斜杠转义。
 * 支持 $'...' (ANSI-C quoting,解释常见转义)。
 */
function tokenize(input: string): string[] {
  const tokens: string[] = []
  let i = 0
  const n = input.length
  while (i < n) {
    // 跳过空白
    while (i < n && /\s/.test(input[i])) i++
    if (i >= n) break

    let token = ''
    // 处理行尾续行(\ 后换行)→ 当作空格
    while (i < n && !/\s/.test(input[i])) {
      const c = input[i]

      // $'...' ANSI-C quoting:解释 \n \t \r \\ \' \" \0,未知转义保留反斜杠+字符
      if (c === '$' && i + 1 < n && input[i + 1] === "'") {
        i += 2
        while (i < n && input[i] !== "'") {
          if (input[i] === '\\' && i + 1 < n) {
            const next = input[i + 1]
            if (next === 'n') token += '\n'
            else if (next === 't') token += '\t'
            else if (next === 'r') token += '\r'
            else if (next === '\\') token += '\\'
            else if (next === "'") token += "'"
            else if (next === '"') token += '"'
            else if (next === '0') token += '\0'
            else token += '\\' + next
            i += 2
            continue
          }
          token += input[i]
          i++
        }
        i++ // 跳过闭合 '
        continue
      }

      // 单引号:内容原样直到下一个单引号
      if (c === "'") {
        i++
        while (i < n && input[i] !== "'") {
          token += input[i]
          i++
        }
        i++ // 跳过闭合 '
        continue
      }

      // 双引号:支持反斜杠转义
      if (c === '"') {
        i++
        while (i < n && input[i] !== '"') {
          if (input[i] === '\\' && i + 1 < n) {
            const next = input[i + 1]
            // 双引号内仅 \" \\ \$ \` \<newline> 被转义,其余保留反斜杠
            if (next === '"' || next === '\\' || next === '$' || next === '`') {
              token += next
              i += 2
            } else {
              token += input[i]
              i++
            }
          } else {
            token += input[i]
            i++
          }
        }
        i++ // 跳过闭合 "
        continue
      }

      // 反斜杠转义(含行尾续行)
      if (c === '\\') {
        if (i + 1 < n) {
          // 行尾续行:支持 \ + \n 与 \ + \r\n(Windows CRLF 粘贴)
          if (input[i + 1] === '\n') {
            i += 2
            break
          }
          if (input[i + 1] === '\r' && i + 2 < n && input[i + 2] === '\n') {
            i += 3
            break
          }
          token += input[i + 1]
          i += 2
          continue
        }
      }

      // 普通字符
      token += c
      i++
    }

    if (token.length > 0) tokens.push(token)
  }
  return tokens
}

/** 疑似 URL 的 token(带协议或 www 前缀)——未知 flag 不把它误当自己的值吞掉 */
function looksLikeUrl(s: string): boolean {
  return /^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//.test(s) || s.startsWith('www.')
}

/** 无值 flag(布尔开关,不消费后续 token;不影响生成请求的语义,安全忽略) */
const VALUELESS_FLAGS = new Set([
  '-4', '-6', '-B', '--use-ascii', '-M', '--manual', '-O', '--remote-name',
  '-J', '--remote-header-name', '-Z', '--parallel', '-a', '--append', '-f', '--fail',
  '--fail-early', '-G', '--get', '-i', '--include', '-I', '--head', '-k', '--insecure',
  '-L', '--location', '--location-trusted', '-N', '--no-buffer', '--compressed', '-s',
  '--silent', '-S', '--show-error', '-v', '--verbose', '-#', '--progress-bar', '-q',
  '--http1.1', '--http2', '--http3', '--tlsv1', '--sslv3', '--no-keepalive', '--keepalive',
  '--digest', '--negotiate', '--ntlm', '--anyauth',
])

/** 带值 flag(与生成代码无关,连值一起消费并提示已忽略) */
const VALUED_FLAGS = new Set([
  '-A', '--user-agent', '-b', '--cookie', '-c', '--cookie-jar', '-C', '--continue-at',
  '-D', '--dump-header', '-e', '--referer', '-E', '--cert', '--cacert', '--capath',
  '--cert-type', '--connect-timeout', '--interface', '--key', '--key-type', '--krb',
  '--libcurl', '--limit-rate', '-m', '--max-time', '-o', '--output', '-U', '--proxy-user',
  '-r', '--range', '--resolve', '--retry', '--retry-delay', '--retry-max-time',
  '-T', '--upload-file', '--url', '-w', '--write-out', '-x', '--proxy', '-y', '--speed-time',
  '-Y', '--speed-limit', '-z', '--time-cond', '--trace', '--trace-ascii',
])

/** 带值短 flag 的首字母(识别 -Avalue 这类值紧跟的合并短选项) */
const SHORT_VALUED_CHARS = new Set(['A', 'b', 'c', 'C', 'd', 'D', 'e', 'E', 'H', 'h', 'm', 'o', 'r', 'T', 'U', 'u', 'w', 'x', 'X', 'y', 'Y', 'z'])

/** 无值短 flag 字母(识别 -sSv 这类组合开关) */
const SHORT_VALUELESS_CHARS = new Set(['4', '6', 'B', 'M', 'O', 'J', 'Z', 'a', 'f', 'G', 'i', 'I', 'k', 'L', 'N', 's', 'S', 'v', 'q', '#'])

/** 解析 token 数组为结构化 ParsedCurl */
function parseCurl(input: string): ParsedCurl {
  const raw = tokenize(input)
  // 去掉开头的 "curl"(不区分大小写)
  const tokens = raw[0]?.toLowerCase() === 'curl' ? raw.slice(1) : raw

  const result: ParsedCurl = {
    url: '',
    method: 'GET',
    headers: {},
    body: '',
    insecure: false,
    ignoredFlags: [],
  }

  let hasBody = false
  let methodFromFlag = false
  // 多个 -d/--data* 按 curl 语义用 & 拼接
  const dataParts: string[] = []
  let i = 0
  while (i < tokens.length) {
    const tok = tokens[i]
    const lower = tok.toLowerCase()

    // -X / --request METHOD
    if (lower === '-x' || lower === '--request') {
      result.method = (tokens[++i] || 'GET').toUpperCase()
      methodFromFlag = true
    }
    // -H / --header "Key: Value"
    else if (lower === '-h' || lower === '--header') {
      const header = tokens[++i] || ''
      const sep = header.indexOf(':')
      if (sep > -1) {
        const key = header.slice(0, sep).trim()
        const val = header.slice(sep + 1).trim()
        if (key) result.headers[key] = val
      }
    }
    // -d / --data / --data-raw / --data-binary BODY(多次出现用 & 拼接)
    else if (
      lower === '-d' ||
      lower === '--data' ||
      lower === '--data-raw' ||
      lower === '--data-binary' ||
      lower === '--data-ascii'
    ) {
      dataParts.push(tokens[++i] || '')
      hasBody = true
    }
    // --data-urlencode name=value:value 部分 encodeURIComponent 后并入 body
    else if (lower === '--data-urlencode') {
      const v = tokens[++i] || ''
      const eq = v.indexOf('=')
      dataParts.push(eq === -1 ? encodeURIComponent(v) : `${v.slice(0, eq)}=${encodeURIComponent(v.slice(eq + 1))}`)
      hasBody = true
    }
    // -k / --insecure
    else if (lower === '-k' || lower === '--insecure') {
      result.insecure = true
    }
    // -u / --user user:pass → 转成 Authorization: Basic 头输出
    else if (lower === '-u' || lower === '--user') {
      result.user = tokens[++i] || ''
    }
    // 其余 flag:按 arity 表消费,未支持的记入 ignoredFlags 在概要区提示
    else if (tok.startsWith('-') && tok.length > 1) {
      if (VALUELESS_FLAGS.has(lower)) {
        // 已知无值开关(-s/-v/-L 等):安全忽略
      } else if (VALUED_FLAGS.has(lower)) {
        i++ // 连值一起消费
        result.ignoredFlags.push(tok)
      } else if (tok.startsWith('--')) {
        if (lower.includes('=')) {
          // --flag=value 自带值,整体忽略
          result.ignoredFlags.push(lower.split('=')[0])
        } else {
          // 未知长 flag:假定带值,连值一起消费(不吞疑似 URL 的 token)
          const next = tokens[i + 1]
          if (next !== undefined && !next.startsWith('-') && !looksLikeUrl(next)) i++
          result.ignoredFlags.push(tok)
        }
      } else if (tok.length > 2 && SHORT_VALUED_CHARS.has(tok[1])) {
        // -Avalue 合并短选项:值已附带,只提示不消费下一 token
        result.ignoredFlags.push('-' + tok[1])
      } else if (/^-[A-Za-z0-9#]{2,}$/.test(tok) && [...tok.slice(1)].every((ch) => SHORT_VALUELESS_CHARS.has(ch))) {
        // -sSv 组合无值开关:安全忽略
      } else {
        // 未知短 flag:假定带值,连值一起消费(不吞疑似 URL 的 token)
        const next = tokens[i + 1]
        if (next !== undefined && !next.startsWith('-') && !looksLikeUrl(next)) i++
        result.ignoredFlags.push(tok)
      }
    }
    // URL(第一个非 flag 参数)
    else if (!tok.startsWith('-') && !result.url) {
      result.url = tok
    }
    i++
  }

  result.body = dataParts.join('&')

  // 有 body 但未指定 -X → 默认 POST
  if (hasBody && !methodFromFlag) {
    result.method = 'POST'
  }

  return result
}

// ───────────── 代码生成 ─────────────

function isJsonBody(body: string, headers: Record<string, string>): boolean {
  const ct = Object.entries(headers).find(([k]) => k.toLowerCase() === 'content-type')?.[1] ?? ''
  if (/application\/json/i.test(ct)) return true
  try {
    JSON.parse(body)
    return true
  } catch {
    return false
  }
}

/** 把字符串转成 JS 字符串字面量(双引号,转义内部双引号、反斜杠与换行/制表符) */
function jsString(s: string): string {
  return `"${s
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t')}"`
}

/**
 * 输出用请求头:-u/--user 转成 Authorization: Basic(base64 在浏览器端计算,
 * 非 latin1 凭据 btoa 会抛错,此时留占位符让用户自行替换)。
 * 已显式提供 Authorization 头时不覆盖。
 */
function effectiveHeaders(c: ParsedCurl): Record<string, string> {
  const h = { ...c.headers }
  if (c.user && !Object.keys(h).some((k) => k.toLowerCase() === 'authorization')) {
    let encoded: string
    try {
      encoded = btoa(c.user)
    } catch {
      encoded = 'BASE64(user:password)'
    }
    h['Authorization'] = `Basic ${encoded}`
  }
  return h
}

function genFetch(c: ParsedCurl): string {
  const opts: string[] = []
  opts.push(`  method: ${jsString(c.method)}`)
  const headers = effectiveHeaders(c)
  const headerKeys = Object.keys(headers)
  if (headerKeys.length > 0) {
    const pairs = headerKeys.map((k) => `    ${jsString(k)}: ${jsString(headers[k])}`).join(',\n')
    opts.push(`  headers: {\n${pairs}\n  }`)
  }
  if (c.body) {
    if (isJsonBody(c.body, headers)) {
      opts.push(`  body: JSON.stringify(${c.body})`)
    } else {
      opts.push(`  body: ${jsString(c.body)}`)
    }
  }
  const insecureNote = c.insecure
    ? `// ⚠️ curl -k equivalent: skips TLS certificate verification.
// Node.js: process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0' (global, avoid in production)
// Browsers: fetch cannot disable TLS verification.
`
    : ''
  return `${insecureNote}const response = await fetch(${jsString(c.url)}, {
${opts.join(',\n')}
});

const data = await response.json();`
}

function genAxios(c: ParsedCurl): string {
  const json = isJsonBody(c.body, c.headers)
  const headers = effectiveHeaders(c)
  const headerKeys = Object.keys(headers)
  const config: string[] = []
  config.push(`  url: ${jsString(c.url)}`)
  config.push(`  method: ${jsString(c.method.toLowerCase())}`)
  if (headerKeys.length > 0) {
    const pairs = headerKeys.map((k) => `      ${jsString(k)}: ${jsString(headers[k])}`).join(',\n')
    config.push(`  headers: {\n${pairs}\n    }`)
  }
  if (c.body) {
    if (json) {
      config.push(`  data: ${c.body}`)
    } else {
      config.push(`  data: ${jsString(c.body)}`)
    }
  }
  // curl -k 等价:仅 Node 环境可用 https.Agent 关闭证书校验
  if (c.insecure) {
    config.push(`  // ⚠️ curl -k equivalent (Node only)\n  httpsAgent: new https.Agent({ rejectUnauthorized: false })`)
  }
  const importLine = c.insecure
    ? `import axios from "axios";\nimport https from "node:https";`
    : `import axios from "axios";`
  return `${importLine}

const response = await axios({
${config.join(',\n')}
});`
}

/** Python 字符串字面量(单引号,转义内部单引号、反斜杠与换行/制表符) */
function pyString(s: string): string {
  return `'${s
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t')}'`
}

function genPython(c: ParsedCurl): string {
  const headers = effectiveHeaders(c)
  const headerKeys = Object.keys(headers)
  const lines: string[] = ['import requests', '']
  if (headerKeys.length > 0) {
    lines.push('headers = {')
    headerKeys.forEach((k) => {
      lines.push(`    ${pyString(k)}: ${pyString(headers[k])},`)
    })
    lines.push('}')
    lines.push('')
  }

  const json = isJsonBody(c.body, c.headers)
  let bodyArg = ''
  if (c.body) {
    if (json) {
      bodyArg = `, json=${c.body}`
    } else {
      lines.push(`data = ${pyString(c.body)}`)
      lines.push('')
      bodyArg = ', data=data'
    }
  }

  const headerArg = headerKeys.length > 0 ? ', headers=headers' : ''
  // curl -k 等价:verify=False 跳过证书校验(requests 会发 InsecureRequestWarning)
  const verifyArg = c.insecure ? ', verify=False' : ''
  lines.push(`response = requests.${c.method.toLowerCase()}(${pyString(c.url)}${headerArg}${bodyArg}${verifyArg})`)
  lines.push('')
  lines.push('print(response.json())')
  return lines.join('\n')
}

export function CurlConverterClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('curl-converter', locale, key, fb)

  const [input, setInput] = useState('')

  const result = useMemo<{ parsed?: ParsedCurl; fetch?: string; axios?: string; python?: string; error?: string }>(() => {
    if (!input.trim()) return {}
    try {
      const parsed = parseCurl(input)
      return {
        parsed,
        fetch: genFetch(parsed),
        axios: genAxios(parsed),
        python: genPython(parsed),
      }
    } catch (e) {
      return { error: e instanceof Error ? e.message : L('invalidCurl', 'Invalid curl command') }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, locale])

  const handleLoadSample = useCallback(() => setInput(SAMPLE_CURL), [])

  const tabs: { label: string; code?: string }[] = [
    { label: 'JavaScript (Fetch)', code: result.fetch },
    { label: 'Axios', code: result.axios },
    { label: 'Python (requests)', code: result.python },
  ]

  return (
    <div className="space-y-5">
      {/* 输入区 */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="curl-input" className="text-sm font-medium text-slate-700 dark:text-slate-300">
            {L('pasteCurl', 'Paste your curl command')}
          </label>
          <div className="flex items-center gap-2">
            <LoadSampleButton onLoad={handleLoadSample} variant="compact" />
            {input && (
              <button
                type="button"
                onClick={() => setInput('')}
                className="-my-1 rounded-md px-2 py-1 text-xs text-slate-400 hover:text-red-500 sm:text-sm"
              >
                {L('clear', 'Clear')}
              </button>
            )}
          </div>
        </div>
        <textarea
          id="curl-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="curl -X GET https://api.example.com/users -H 'Authorization: Bearer ...'"
          rows={6}
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

      {/* 解析概要 */}
      {result.parsed && (
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-md bg-blue-50 px-2 py-1 font-semibold text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
            {result.parsed.method}
          </span>
          <span className="font-mono" style={{ color: 'rgb(var(--text-muted))' }}>
            {result.parsed.url || L('noUrl', '(no URL)')}
          </span>
          {Object.keys(result.parsed.headers).length > 0 && (
            <span className="rounded-md px-2 py-1" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
              {Object.keys(result.parsed.headers).length} {L('headers', 'header(s)')}
            </span>
          )}
          {result.parsed.body && (
            <span className="rounded-md px-2 py-1" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
              {L('hasBody', 'has body')}
            </span>
          )}
          {result.parsed.ignoredFlags.length > 0 && (
            <span className="rounded-md border border-amber-200 bg-amber-50 px-2 py-1 text-amber-700 dark:border-amber-800 dark:bg-amber-950/50 dark:text-amber-300">
              ⚠️ {L('ignoredFlags', 'unsupported flag(s) ignored')}: {result.parsed.ignoredFlags.join(', ')}
            </span>
          )}
        </div>
      )}

      {/* 多语言输出区 */}
      {tabs.map(
        (tab) =>
          tab.code && (
            <div key={tab.label}>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{tab.label}</span>
                <CopyButton value={tab.code} label={L('copy', 'Copy')} />
              </div>
              <pre
                className="overflow-x-auto rounded-lg border bg-slate-50 p-4 text-xs"
                style={{ borderColor: 'rgb(var(--border))' }}
              >
                <code>{tab.code}</code>
              </pre>
            </div>
          ),
      )}

      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        {L('note', '🔒 100% client-side — parsing runs in your browser. No command is executed; only text is converted.')}
      </p>
    </div>
  )
}
