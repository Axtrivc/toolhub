'use client'

import { useState, useCallback, useMemo } from 'react'
import { CopyButton } from '@/components/CopyButton'

/**
 * SVG Minifier —— 纯前端 SVG 压缩
 *
 * 粘贴或上传 .svg → 按开关管线精简(声明/注释/metadata/编辑器残留/空白/数值精度/默认属性)
 * → 输出 + before/after 体积对比 + 安全预览(<img data URI,不用 dangerouslySetInnerHTML)。
 */

interface MinifyOptions {
  removeDecl: boolean
  removeComments: boolean
  removeMeta: boolean
  removeEditorData: boolean
  collapseWhitespace: boolean
  roundNumbers: boolean
  decimals: number
  removeDefaultAttrs: boolean
}

/** UTF-8 字节数(Node/浏览器都有 TextEncoder,SSG 安全) */
function byteSize(s: string): number {
  return new TextEncoder().encode(s).length
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  return `${(bytes / 1024).toFixed(1)} KB`
}

/** 核心精简管线:每一步由对应开关控制 */
function minifySvg(input: string, opts: MinifyOptions): string {
  let out = input

  if (opts.removeDecl) {
    out = out.replace(/<\?xml[\s\S]*?\?>/gi, '')
    out = out.replace(/<!DOCTYPE[\s\S]*?(\[[\s\S]*?\])?>/gi, '')
  }

  if (opts.removeComments) {
    out = out.replace(/<!--[\s\S]*?-->/g, '')
  }

  if (opts.removeMeta) {
    out = out.replace(/<metadata[\s\S]*?(<\/metadata>|\/>)/gi, '')
    out = out.replace(/<title[\s\S]*?<\/title>/gi, '')
    out = out.replace(/<desc[\s\S]*?<\/desc>/gi, '')
  }

  if (opts.removeEditorData) {
    // sodipodi:namedview 整块(Inkscape 视口状态)
    out = out.replace(/<sodipodi:namedview[\s\S]*?(<\/sodipodi:namedview>|\/>)/gi, '')
    // inkscape:/sodipodi: 前缀属性(双/单引号)
    out = out.replace(/\s+(?:inkscape|sodipodi):[a-zA-Z-]+="[^"]*"/g, '')
    out = out.replace(/\s+(?:inkscape|sodipodi):[a-zA-Z-]+='[^']*'/g, '')
    // 编辑器命名空间声明 + Adobe 导出残留(xmlns:x/i/graph 等)
    out = out.replace(/\s+xmlns:(?:inkscape|sodipodi|x|i|graph|ns1|ns2|adobe[^=\s]*)="[^"]*"/gi, '')
    out = out.replace(/\s+(?:enable-background|xml:space)="[^"]*"/gi, '')
  }

  if (opts.removeDefaultAttrs) {
    // 保持最小集合:仅移除明确等于默认值的属性
    out = out.replace(/\s+version="1\.1"/g, '')
    out = out.replace(/\s+fill-rule="nonzero"/g, '')
  }

  if (opts.roundNumbers) {
    const factor = Math.pow(10, opts.decimals)
    // 只处理引号内(属性值/路径数据)的数字;整数与科学计数法不动
    out = out.replace(/="([^"]*)"/g, (m, val: string) => {
      const rounded = val.replace(/-?\d*\.\d+(?:e[+-]?\d+)?/gi, (num) => {
        if (/e/i.test(num)) return num
        const n = Math.round(parseFloat(num) * factor) / factor
        return String(n)
      })
      return rounded === val ? m : `="${rounded}"`
    })
  }

  if (opts.collapseWhitespace) {
    out = out.replace(/>\s+</g, '><')
    out = out.trim()
  }

  return out
}

const TOGGLES: { key: keyof Omit<MinifyOptions, 'decimals'>; label: string; hint: string }[] = [
  { key: 'removeDecl', label: 'XML declaration & DOCTYPE', hint: '<?xml …?> and <!DOCTYPE …>' },
  { key: 'removeComments', label: 'Comments', hint: '<!-- … -->' },
  { key: 'removeMeta', label: 'Metadata blocks', hint: '<metadata>, <title>, <desc>' },
  { key: 'removeEditorData', label: 'Editor leftovers', hint: 'inkscape:, sodipodi:, Adobe namespaces, enable-background' },
  { key: 'collapseWhitespace', label: 'Whitespace between tags', hint: '> < collapses to ><' },
  { key: 'roundNumbers', label: 'Round numeric values', hint: 'Inside attribute values & path data' },
  { key: 'removeDefaultAttrs', label: 'Default attributes', hint: 'version="1.1", fill-rule="nonzero"' },
]

export function SvgMinifierClient() {
  const [input, setInput] = useState('')
  const [error, setError] = useState('')
  const [dragging, setDragging] = useState(false)
  const [opts, setOpts] = useState<MinifyOptions>({
    removeDecl: true,
    removeComments: true,
    removeMeta: true,
    removeEditorData: true,
    collapseWhitespace: true,
    roundNumbers: true,
    decimals: 2,
    removeDefaultAttrs: true,
  })

  // 上传 .svg 文件(读为文本)
  const handleFile = useCallback((file: File) => {
    setError('')
    const looksSvg = file.type === 'image/svg+xml' || /\.svg$/i.test(file.name)
    if (!looksSvg) {
      setError('Please upload an .svg file (or paste SVG markup into the textarea).')
      return
    }
    const reader = new FileReader()
    reader.onload = () => setInput(String(reader.result || ''))
    reader.onerror = () => setError('Could not read the file.')
    reader.readAsText(file)
  }, [])

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setDragging(false)
      const file = e.dataTransfer.files?.[0]
      if (file) handleFile(file)
    },
    [handleFile],
  )

  const trimmed = input.trim()
  const looksLikeSvg = /<svg[\s>]/i.test(trimmed)

  // 实时精简(纯字符串处理,useMemo 安全)
  const output = useMemo(
    () => (looksLikeSvg ? minifySvg(trimmed, opts) : ''),
    [trimmed, looksLikeSvg, opts],
  )

  const beforeBytes = useMemo(() => (trimmed ? byteSize(trimmed) : 0), [trimmed])
  const afterBytes = useMemo(() => (output ? byteSize(output) : 0), [output])
  const savings = beforeBytes > 0 && output ? Math.round((1 - afterBytes / beforeBytes) * 100) : 0

  // 安全预览:data URI + <img>,绝不 innerHTML
  const previewSrc = useMemo(
    () => (output ? `data:image/svg+xml;utf8,${encodeURIComponent(output)}` : ''),
    [output],
  )

  const download = useCallback(() => {
    if (!output) return
    const blob = new Blob([output], { type: 'image/svg+xml;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'minified.svg'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }, [output])

  const toggle = useCallback((key: keyof Omit<MinifyOptions, 'decimals'>) => {
    setOpts((prev) => ({ ...prev, [key]: !prev[key] }))
  }, [])

  return (
    <div className="space-y-5">
      {/* 输入:textarea + 上传/拖拽 */}
      <div>
        <div className="mb-1.5 flex items-center justify-between">
          <label
            htmlFor="svg-input"
            className="block text-sm font-medium"
            style={{ color: 'rgb(var(--text-muted))' }}
          >
            SVG markup
          </label>
          <label htmlFor="svg-file" className="btn btn-secondary cursor-pointer text-xs">
            Upload .svg
            <input
              id="svg-file"
              type="file"
              accept=".svg,image/svg+xml"
              onChange={(e) => {
                const file = e.target.files?.[0]
                if (file) handleFile(file)
                e.target.value = ''
              }}
              className="hidden"
            />
          </label>
        </div>
        <div
          onDragOver={(e) => {
            e.preventDefault()
            setDragging(true)
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={onDrop}
          className={dragging ? 'rounded-lg ring-2 ring-blue-400' : ''}
        >
          <textarea
            id="svg-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={'Paste SVG markup here, or drag & drop a .svg file…'}
            rows={8}
            spellCheck={false}
            className="w-full rounded-lg border p-4 font-mono text-sm shadow-sm outline-none transition focus:ring-2"
            style={{
              borderColor: 'rgb(var(--border-strong))',
              backgroundColor: 'rgb(var(--bg-card))',
              color: 'rgb(var(--text))',
            }}
          />
        </div>
      </div>

      {/* 错误提示 */}
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          ⚠️ {error}
        </div>
      )}

      {/* 输入不是 SVG */}
      {trimmed && !looksLikeSvg && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          ⚠️ This does not look like SVG — no <code>&lt;svg&gt;</code> element found. Check for a
          truncated paste.
        </div>
      )}

      {/* 开关管线 */}
      <div
        className="grid grid-cols-1 gap-3 rounded-lg p-4 sm:grid-cols-2"
        style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}
      >
        {TOGGLES.map((t) => (
          <label
            key={t.key}
            className="flex cursor-pointer items-start gap-2 text-sm"
            style={{ color: 'rgb(var(--text))' }}
          >
            <input
              type="checkbox"
              checked={opts[t.key]}
              onChange={() => toggle(t.key)}
              className="mt-0.5 h-4 w-4 accent-blue-600"
            />
            <span>
              <span className="font-medium">{t.label}</span>
              <span className="block text-[11px]" style={{ color: 'rgb(var(--text-faint))' }}>
                {t.hint}
              </span>
            </span>
          </label>
        ))}
        {/* 数值精度 */}
        {opts.roundNumbers && (
          <label className="flex items-center gap-2 text-sm" style={{ color: 'rgb(var(--text))' }}>
            <span style={{ color: 'rgb(var(--text-muted))' }}>Decimals</span>
            <input
              type="number"
              min={0}
              max={6}
              value={opts.decimals}
              onChange={(e) =>
                setOpts((prev) => ({
                  ...prev,
                  decimals: Math.min(6, Math.max(0, parseInt(e.target.value, 10) || 0)),
                }))
              }
              aria-label="Decimal places for number rounding"
              className="w-16 rounded-lg border p-1.5 text-sm shadow-sm outline-none transition focus:ring-2"
              style={{
                borderColor: 'rgb(var(--border-strong))',
                backgroundColor: 'rgb(var(--bg-card))',
                color: 'rgb(var(--text))',
              }}
            />
          </label>
        )}
      </div>

      {/* 结果区 */}
      {output && (
        <div className="space-y-5">
          {/* 体积对比 */}
          <div
            className="grid grid-cols-3 gap-4 rounded-lg border p-4 text-center"
            style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }}
          >
            <div>
              <div className="text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
                Before
              </div>
              <div className="mt-1 font-mono text-sm font-semibold" style={{ color: 'rgb(var(--text))' }}>
                {formatBytes(beforeBytes)}
              </div>
            </div>
            <div>
              <div className="text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
                After
              </div>
              <div className="mt-1 font-mono text-sm font-semibold" style={{ color: 'rgb(var(--text))' }}>
                {formatBytes(afterBytes)}
              </div>
            </div>
            <div>
              <div className="text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
                Savings
              </div>
              <div
                className="mt-1 font-mono text-sm font-semibold"
                style={{ color: savings >= 0 ? 'rgb(22 163 74)' : 'rgb(220 38 38)' }}
              >
                {savings >= 0 ? `−${savings}%` : `+${Math.abs(savings)}%`}
              </div>
            </div>
          </div>

          {/* 输出 + 预览 */}
          <div>
            <label
              htmlFor="svg-output"
              className="mb-1.5 block text-sm font-medium"
              style={{ color: 'rgb(var(--text-muted))' }}
            >
              Minified SVG
            </label>
            <textarea
              id="svg-output"
              value={output}
              readOnly
              rows={6}
              spellCheck={false}
              className="w-full rounded-lg border p-4 font-mono text-sm shadow-sm outline-none transition focus:ring-2"
              style={{
                borderColor: 'rgb(var(--border-strong))',
                backgroundColor: 'rgb(var(--bg-card))',
                color: 'rgb(var(--text))',
              }}
            />
          </div>

          {/* 安全预览 */}
          <div>
            <div className="mb-1.5 text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
              Preview (rendered from the minified output)
            </div>
            <div
              className="flex min-h-24 items-center justify-center rounded-lg border p-4"
              style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={previewSrc} alt="Minified SVG preview" className="max-h-40 max-w-full" />
            </div>
          </div>

          {/* 操作行 */}
          <div className="flex flex-wrap items-center gap-3">
            <CopyButton value={output} label="Copy SVG" />
            <button type="button" onClick={download} className="btn btn-secondary">
              Download minified.svg
            </button>
          </div>
        </div>
      )}

      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        🔒 100% client-side — minification is plain string processing in your browser. The preview
        renders via a data-URI <code>&lt;img&gt;</code>, never <code>dangerouslySetInnerHTML</code>,
        so scripts inside SVG cannot execute.
      </p>
    </div>
  )
}
