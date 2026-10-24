'use client'

import { useState, useMemo, useCallback } from 'react'
import { CopyButton } from '@/components/CopyButton'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n-accessors/devtools/DockerRunToComposeClient'

interface DockerRunOptions {
  serviceName: string
  containerName?: string
  image: string
  commandArgs: string[]
  entrypoint?: string
  restart?: string
  ports: string[]
  volumes: string[]
  environment: string[]
  envFiles: string[]
  networks: string[]
  workdir?: string
  user?: string
  hostname?: string
  shmSize?: string
  privileged?: boolean
  readOnly?: boolean
  stdinOpen?: boolean
  tty?: boolean
  memLimit?: string
  cpus?: string
  capAdd: string[]
  capDrop: string[]
  dns: string[]
  extraHosts: string[]
  expose: string[]
  ignoredFlags: string[]
  warnings: string[]
}

// nameKey 供 T() 取本地化按钮名,name 为英文兜底(SSR 恒英文)
const SAMPLES: Array<{ nameKey: string; name: string; cmd: string }> = [
  {
    nameKey: 'sample.postgres',
    name: 'PostgreSQL Database',
    cmd: `docker run -d \\
  --name my-postgres \\
  -p 5432:5432 \\
  -e POSTGRES_USER=appuser \\
  -e POSTGRES_PASSWORD=secretpassword \\
  -e POSTGRES_DB=appdb \\
  -v pgdata:/var/lib/postgresql/data \\
  --restart unless-stopped \\
  postgres:16-alpine`,
  },
  {
    nameKey: 'sample.nginx',
    name: 'Nginx Web Server',
    cmd: `docker run -d \\
  --name web-nginx \\
  -p 80:80 \\
  -p 443:443 \\
  -v /etc/nginx/nginx.conf:/etc/nginx/nginx.conf:ro \\
  -v /var/www/html:/usr/share/nginx/html:ro \\
  --restart always \\
  nginx:alpine`,
  },
  {
    nameKey: 'sample.redis',
    name: 'Redis with Custom Command',
    cmd: `docker run -d \\
  --name redis-cache \\
  -p 6379:6379 \\
  -v redis-data:/data \\
  --restart unless-stopped \\
  redis:7-alpine redis-server --appendonly yes --requirepass mysecret`,
  },
  {
    nameKey: 'sample.node',
    name: 'Node.js Development',
    cmd: `docker run -it --rm \\
  --name dev-node \\
  -p 3000:3000 \\
  -e NODE_ENV=development \\
  -e PORT=3000 \\
  -v $(pwd):/app \\
  -w /app \\
  --memory 1g \\
  node:20-alpine npm run dev`,
  },
]

/**
 * Shell tokenizer supporting:
 * - Line continuations (trailing backslashes)
 * - Single quotes '...'
 * - Double quotes "..."
 * - Whitespace separation
 */
function tokenizeShell(cmd: string): string[] {
  const tokens: string[] = []
  let i = 0
  const n = cmd.length

  while (i < n) {
    // Skip whitespace & backslash-newlines
    while (i < n && (/\s/.test(cmd[i]) || cmd[i] === '\\')) {
      if (cmd[i] === '\\' && i + 1 < n && (cmd[i + 1] === '\n' || cmd[i + 1] === '\r')) {
        i += cmd[i + 1] === '\r' && i + 2 < n && cmd[i + 2] === '\n' ? 3 : 2
      } else if (/\s/.test(cmd[i])) {
        i++
      } else {
        break
      }
    }
    if (i >= n) break

    let token = ''
    while (i < n && !/\s/.test(cmd[i])) {
      const c = cmd[i]
      if (c === '\\') {
        if (i + 1 < n && (cmd[i + 1] === '\n' || cmd[i + 1] === '\r')) {
          i += cmd[i + 1] === '\r' && i + 2 < n && cmd[i + 2] === '\n' ? 3 : 2
          break
        }
        if (i + 1 < n) {
          token += cmd[i + 1]
          i += 2
        } else {
          i++
        }
      } else if (c === "'") {
        i++
        while (i < n && cmd[i] !== "'") {
          token += cmd[i]
          i++
        }
        if (i < n) i++ // skip closing quote
      } else if (c === '"') {
        i++
        while (i < n && cmd[i] !== '"') {
          // POSIX: inside double quotes a backslash only escapes $ ` " \ and newline
          if (cmd[i] === '\\' && i + 1 < n && '$`"\\\n\r'.includes(cmd[i + 1])) {
            // \<newline> is a line continuation — dropped, not embedded
            if (cmd[i + 1] !== '\n' && cmd[i + 1] !== '\r') token += cmd[i + 1]
            i += cmd[i + 1] === '\r' && i + 2 < n && cmd[i + 2] === '\n' ? 3 : 2
          } else {
            token += cmd[i]
            i++
          }
        }
        if (i < n) i++ // skip closing quote
      } else {
        token += c
        i++
      }
    }

    if (token) {
      tokens.push(token)
    }
  }

  return tokens
}

/** Sanitize string for yaml service name */
function toServiceName(raw: string): string {
  const clean = raw
    .replace(/^https?:\/\//, '')
    .replace(/[^a-zA-Z0-9_-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase()
  return clean || 'app'
}

/** Compose never runs shell substitution — map $(pwd)/$PWD style hosts to "." */
function normalizeVolumeHost(vol: string): string {
  return vol.replace(/^(\$\((pwd|PWD)\)|\$\{PWD\}|\$PWD)/, '.')
}

/** Extract base name from docker image (e.g. "ghcr.io/org/my-app:v1.2" -> "my-app") */
function extractImageBase(img: string): string {
  const noTag = img.split(':')[0].split('@')[0]
  const parts = noTag.split('/')
  return parts[parts.length - 1] || 'app'
}

/** Parse tokens into DockerRunOptions */
function parseDockerRun(tokens: string[]): DockerRunOptions {
  const res: DockerRunOptions = {
    serviceName: 'app',
    image: '',
    commandArgs: [],
    ports: [],
    volumes: [],
    environment: [],
    envFiles: [],
    networks: [],
    capAdd: [],
    capDrop: [],
    dns: [],
    extraHosts: [],
    expose: [],
    ignoredFlags: [],
    warnings: [],
  }

  // Filter out leading "docker", "container", "run", "create"
  let idx = 0
  if (tokens[idx] === 'docker') idx++
  if (tokens[idx] === 'container') idx++
  if (tokens[idx] === 'run' || tokens[idx] === 'create') idx++

  let imageFound = false
  const commandArgs: string[] = []

  while (idx < tokens.length) {
    const rawTok = tokens[idx]

    if (imageFound) {
      commandArgs.push(rawTok)
      idx++
      continue
    }

    // Check if flag or image
    if (rawTok.startsWith('-')) {
      // Split --flag=val
      let flag = rawTok
      let val: string | undefined

      const eqIdx = rawTok.indexOf('=')
      if (eqIdx !== -1 && !rawTok.startsWith('--')) {
        // e.g. -p=80:80
        flag = rawTok.substring(0, eqIdx)
        val = rawTok.substring(eqIdx + 1)
      } else if (eqIdx !== -1 && rawTok.startsWith('--')) {
        flag = rawTok.substring(0, eqIdx)
        val = rawTok.substring(eqIdx + 1)
      }

      const getVal = (): string => {
        if (val !== undefined) return val
        if (idx + 1 < tokens.length && !tokens[idx + 1].startsWith('-')) {
          idx++
          return tokens[idx]
        }
        return ''
      }

      switch (flag) {
        case '--name':
          res.containerName = getVal()
          res.serviceName = toServiceName(res.containerName)
          break
        case '-p':
        case '--publish':
          {
            const p = getVal()
            if (p) res.ports.push(p)
          }
          break
        case '-v':
        case '--volume':
          {
            const v = getVal()
            if (v) res.volumes.push(normalizeVolumeHost(v))
          }
          break
        case '-e':
        case '--env':
          {
            const e = getVal()
            if (e) res.environment.push(e)
          }
          break
        case '--env-file':
          {
            const ef = getVal()
            if (ef) res.envFiles.push(ef)
          }
          break
        case '--restart':
          res.restart = getVal()
          break
        case '--net':
        case '--network':
          {
            const net = getVal()
            if (net) res.networks.push(net)
          }
          break
        case '-w':
        case '--workdir':
          res.workdir = getVal()
          break
        case '-u':
        case '--user':
          res.user = getVal()
          break
        case '--entrypoint':
          res.entrypoint = getVal()
          break
        case '-h':
        case '--hostname':
          res.hostname = getVal()
          break
        case '--shm-size':
          res.shmSize = getVal()
          break
        case '-m':
        case '--memory':
          res.memLimit = getVal()
          break
        case '--cpus':
          res.cpus = getVal()
          break
        case '--privileged':
          res.privileged = true
          break
        case '--read-only':
          res.readOnly = true
          break
        case '-d':
        case '--detach':
          // Detached mode is default for compose services
          break
        case '-i':
        case '--interactive':
          res.stdinOpen = true
          break
        case '-t':
        case '--tty':
          res.tty = true
          break
        case '-it':
        case '-ti':
          res.stdinOpen = true
          res.tty = true
          break
        case '--rm':
          // Not needed in compose
          break
        case '--cap-add':
          {
            const ca = getVal()
            if (ca) res.capAdd.push(ca)
          }
          break
        case '--cap-drop':
          {
            const cd = getVal()
            if (cd) res.capDrop.push(cd)
          }
          break
        case '--dns':
          {
            const d = getVal()
            if (d) res.dns.push(d)
          }
          break
        case '--add-host':
          {
            const ah = getVal()
            if (ah) res.extraHosts.push(ah)
          }
          break
        case '--expose':
          {
            const exp = getVal()
            if (exp) res.expose.push(exp)
          }
          break
        default:
          // Bundled flags like -dit
          if (/^-[a-zA-Z]+$/.test(flag)) {
            const chars = flag.slice(1).split('')
            let handledAll = true
            for (const c of chars) {
              if (c === 'd') {
                /* background */
              } else if (c === 'i') {
                res.stdinOpen = true
              } else if (c === 't') {
                res.tty = true
              } else {
                handledAll = false
              }
            }
            if (!handledAll) {
              res.ignoredFlags.push(flag)
            }
          } else {
            res.ignoredFlags.push(flag)
          }
          break
      }
    } else {
      // First non-flag is image
      res.image = rawTok
      imageFound = true
      if (!res.containerName) {
        res.serviceName = toServiceName(extractImageBase(rawTok))
      }
    }
    idx++
  }

  if (commandArgs.length > 0) {
    res.commandArgs = commandArgs
  }

  if (!res.image) {
    res.warnings.push('No container image found in command line.')
  }

  return res
}

/** Check if volume is a named volume (not host path) */
function isNamedVolume(vol: string): boolean {
  // Windows drive colon comes first — check the full string before splitting on ':'
  if (/^[a-zA-Z]:[\\/]/.test(vol)) return false
  const hostPart = vol.split(':')[0]
  if (!hostPart) return false
  if (
    hostPart === '.' ||
    hostPart.startsWith('/') ||
    hostPart.startsWith('./') ||
    hostPart.startsWith('../') ||
    hostPart.startsWith('~') ||
    hostPart.startsWith('$')
  ) {
    return false
  }
  return true
}

/** Escape a value for use inside a YAML double-quoted scalar */
function yamlEscape(s: string): string {
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"')
}

/** True when a bare YAML plain scalar would be invalid or lose data ("x #c", "a: b", leading indicators) */
function yamlNeedsQuote(s: string): boolean {
  if (s === '' || s !== s.trim()) return true
  if (/^[!&*[\]{}>,?@`"'#|%]/.test(s)) return true
  if (/^(-|\?|:)(\s|$)/.test(s)) return true
  return s.includes(': ') || s.includes(' #')
}

/** Emit a command/entrypoint style scalar: plain when every arg is safe, list form otherwise */
function yamlArgsLines(header: string, args: string[], indent: string): string[] {
  const plainSafe = args.length > 0 && args.every((a) => !yamlNeedsQuote(a) && !/\s/.test(a))
  if (plainSafe) return [`${indent}${header}: ${args.join(' ')}`]
  return [`${indent}${header}:`, ...args.map((a) => `${indent}  - "${yamlEscape(a)}"`)]
}

/** Generate Compose YAML */
function generateComposeYaml(
  opts: DockerRunOptions,
  config: { includeVersion: boolean; envFormat: 'list' | 'map' },
): string {
  const lines: string[] = []

  if (config.includeVersion) {
    lines.push("version: '3.8'")
    lines.push('')
  }

  lines.push('services:')
  lines.push(`  ${opts.serviceName}:`)
  lines.push(`    image: ${opts.image || 'IMAGE_NAME'}`)

  if (opts.containerName) {
    lines.push(`    container_name: ${opts.containerName}`)
  }

  if (opts.restart) {
    lines.push(`    restart: ${opts.restart}`)
  }

  if (opts.ports.length > 0) {
    lines.push('    ports:')
    for (const p of opts.ports) {
      lines.push(`      - "${yamlEscape(p)}"`)
    }
  }

  if (opts.volumes.length > 0) {
    lines.push('    volumes:')
    for (const v of opts.volumes) {
      lines.push(`      - "${yamlEscape(v)}"`)
    }
  }

  if (opts.environment.length > 0) {
    lines.push('    environment:')
    if (config.envFormat === 'map') {
      for (const e of opts.environment) {
        const eq = e.indexOf('=')
        if (eq !== -1) {
          const k = e.slice(0, eq)
          const v = e.slice(eq + 1)
          lines.push(`      ${k}: "${yamlEscape(v)}"`)
        } else {
          lines.push(`      ${e}: ""`)
        }
      }
    } else {
      for (const e of opts.environment) {
        lines.push(`      - ${yamlNeedsQuote(e) ? `"${yamlEscape(e)}"` : e}`)
      }
    }
  }

  if (opts.envFiles.length > 0) {
    lines.push('    env_file:')
    for (const ef of opts.envFiles) {
      lines.push(`      - ${yamlNeedsQuote(ef) ? `"${yamlEscape(ef)}"` : ef}`)
    }
  }

  if (opts.commandArgs.length > 0) {
    lines.push(...yamlArgsLines('command', opts.commandArgs, '    '))
  }

  if (opts.entrypoint) {
    lines.push(...yamlArgsLines('entrypoint', [opts.entrypoint], '    '))
  }

  if (opts.workdir) {
    lines.push(`    working_dir: ${opts.workdir}`)
  }

  if (opts.user) {
    lines.push(`    user: "${yamlEscape(opts.user)}"`)
  }

  if (opts.hostname) {
    lines.push(`    hostname: ${opts.hostname}`)
  }

  if (opts.shmSize) {
    lines.push(`    shm_size: ${opts.shmSize}`)
  }

  if (opts.privileged) {
    lines.push('    privileged: true')
  }

  if (opts.readOnly) {
    lines.push('    read_only: true')
  }

  if (opts.stdinOpen) {
    lines.push('    stdin_open: true')
  }

  if (opts.tty) {
    lines.push('    tty: true')
  }

  // host/bridge/none/container: are network modes, not networks — `networks: [host]` is invalid compose
  const isBuiltinNet = (n: string) =>
    n === 'host' || n === 'bridge' || n === 'none' || n.startsWith('container:')
  const networkMode = opts.networks.find(isBuiltinNet)
  const customNets = opts.networks.filter((n) => !isBuiltinNet(n))
  if (networkMode) {
    lines.push(
      networkMode.startsWith('container:')
        ? `    network_mode: "${networkMode}"`
        : `    network_mode: ${networkMode}`,
    )
  }
  if (customNets.length > 0) {
    lines.push('    networks:')
    for (const n of customNets) {
      lines.push(`      - ${n}`)
    }
  }

  if (opts.memLimit || opts.cpus) {
    lines.push('    deploy:')
    lines.push('      resources:')
    lines.push('        limits:')
    if (opts.cpus) lines.push(`          cpus: '${opts.cpus}'`)
    if (opts.memLimit) lines.push(`          memory: ${opts.memLimit}`)
  }

  if (opts.capAdd.length > 0) {
    lines.push('    cap_add:')
    for (const ca of opts.capAdd) lines.push(`      - ${ca}`)
  }

  if (opts.capDrop.length > 0) {
    lines.push('    cap_drop:')
    for (const cd of opts.capDrop) lines.push(`      - ${cd}`)
  }

  if (opts.dns.length > 0) {
    lines.push('    dns:')
    for (const d of opts.dns) lines.push(`      - ${d}`)
  }

  if (opts.extraHosts.length > 0) {
    lines.push('    extra_hosts:')
    for (const h of opts.extraHosts) lines.push(`      - "${yamlEscape(h)}"`)
  }

  if (opts.expose.length > 0) {
    lines.push('    expose:')
    for (const ep of opts.expose) lines.push(`      - "${yamlEscape(ep)}"`)
  }

  // Top-level named volumes
  const namedVolumes = opts.volumes
    .filter(isNamedVolume)
    .map((v) => v.split(':')[0].trim())
    .filter(Boolean)

  if (namedVolumes.length > 0) {
    lines.push('')
    lines.push('volumes:')
    for (const nv of Array.from(new Set(namedVolumes))) {
      lines.push(`  ${nv}:`)
    }
  }

  // Top-level networks
  if (customNets.length > 0) {
    lines.push('')
    lines.push('networks:')
    for (const net of Array.from(new Set(customNets))) {
      lines.push(`  ${net}:`)
      lines.push('    external: true')
    }
  }

  return lines.join('\n')
}

export function DockerRunToComposeClient() {
  const { locale } = useApp()
  const [inputCmd, setInputCmd] = useState(SAMPLES[0].cmd)
  const [includeVersion, setIncludeVersion] = useState(false)
  const [envFormat, setEnvFormat] = useState<'list' | 'map'>('list')

  const T = useCallback(
    (key: string, fb: string) => tui('docker-run-to-compose', locale, key, fb),
    [locale],
  )

  const parsed = useMemo(() => {
    const tokens = tokenizeShell(inputCmd.trim())
    return parseDockerRun(tokens)
  }, [inputCmd])

  const yamlOutput = useMemo(() => {
    return generateComposeYaml(parsed, { includeVersion, envFormat })
  }, [parsed, includeVersion, envFormat])

  return (
    <div className="space-y-6">
      {/* Sample presets */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
          {T('samplesLabel', 'Load Example:')}
        </span>
        {SAMPLES.map((s) => (
          <button
            key={s.nameKey}
            type="button"
            onClick={() => setInputCmd(s.cmd)}
            className="px-2.5 py-1 text-xs rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
          >
            {T(s.nameKey, s.name)}
          </button>
        ))}
      </div>

      {/* Editor grids */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Input Docker Command */}
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="drtc-input" className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              {T('inputTitle', 'Docker Run Command')}
            </label>
            <button
              type="button"
              onClick={() => setInputCmd('')}
              className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            >
              {T('clearBtn', 'Clear')}
            </button>
          </div>
          <textarea
            id="drtc-input"
            value={inputCmd}
            onChange={(e) => setInputCmd(e.target.value)}
            placeholder="docker run -d --name my-app -p 8080:80 nginx:alpine"
            rows={14}
            spellCheck={false}
            className="w-full font-mono text-xs sm:text-sm p-3.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {T(
              'inputHint',
              'Paste any docker run or docker create command with multiline backslashes, flags, ports, volumes, and env vars.',
            )}
          </p>
        </div>

        {/* Right: Output Compose YAML */}
        <div className="flex flex-col space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
            <label className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              {T('outputTitle', 'docker-compose.yml')}
            </label>
            <div className="flex shrink-0 items-center gap-2 whitespace-nowrap">
              <CopyButton value={yamlOutput} label={T('copyYaml', 'Copy Compose')} />
            </div>
          </div>
          <div className="relative">
            <pre
              aria-label={T('outputTitle', 'docker-compose.yml')}
              className="w-full font-mono text-xs sm:text-sm p-3.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-950 text-slate-100 overflow-x-auto min-h-[300px] max-h-[460px]"
            >
              <code>{yamlOutput}</code>
            </pre>
          </div>
          {/* Format controls */}
          <div className="flex flex-wrap items-center gap-4 text-xs pt-1 text-slate-600 dark:text-slate-400">
            <label className="inline-flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox"
                checked={includeVersion}
                onChange={(e) => setIncludeVersion(e.target.checked)}
                className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <span>{T('includeVersionLabel', "Include version: '3.8' header")}</span>
            </label>

            <div className="flex items-center gap-1">
              <span>{T('envFormatLabel', 'Environment syntax:')}</span>
              <button
                type="button"
                onClick={() => setEnvFormat('list')}
                className={`px-1.5 py-0.5 rounded ${
                  envFormat === 'list'
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300 font-semibold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                - KEY=VAL
              </button>
              <button
                type="button"
                onClick={() => setEnvFormat('map')}
                className={`px-1.5 py-0.5 rounded ${
                  envFormat === 'map'
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300 font-semibold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                KEY: VAL
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Detected parameters summary badges */}
      <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
        <h4 className="text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
          {T('summaryTitle', 'Detected Configuration Breakdown')}
        </h4>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="px-2.5 py-1 rounded bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300">
            <strong>{T('badgeService', 'Service:')}</strong> {parsed.serviceName}
          </span>
          <span className="px-2.5 py-1 rounded bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300">
            <strong>{T('badgeImage', 'Image:')}</strong> {parsed.image || '—'}
          </span>
          <span className="px-2.5 py-1 rounded bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300">
            <strong>{T('badgePorts', 'Ports:')}</strong> {parsed.ports.length}
          </span>
          <span className="px-2.5 py-1 rounded bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300">
            <strong>{T('badgeVolumes', 'Volumes:')}</strong> {parsed.volumes.length}
          </span>
          <span className="px-2.5 py-1 rounded bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300">
            <strong>{T('badgeEnvVars', 'Env Vars:')}</strong> {parsed.environment.length}
          </span>
          {parsed.restart && (
            <span className="px-2.5 py-1 rounded bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300">
              <strong>{T('badgeRestart', 'Restart:')}</strong> {parsed.restart}
            </span>
          )}
          {parsed.networks.length > 0 && (
            <span className="px-2.5 py-1 rounded bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300">
              <strong>{T('badgeNetworks', 'Networks:')}</strong> {parsed.networks.join(', ')}
            </span>
          )}
        </div>

        {parsed.ignoredFlags.length > 0 && (
          <div className="mt-3 text-xs text-amber-600 dark:text-amber-400">
            ⚠️ {T('ignoredFlagsNote', 'Ignored flags (not applicable to compose or unhandled):')}{' '}
            <code className="font-mono">{parsed.ignoredFlags.join(' ')}</code>
          </div>
        )}
      </div>
    </div>
  )
}
