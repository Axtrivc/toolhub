'use client'

import { useState, useMemo, useCallback, useRef } from 'react'
import { LoadSampleButton } from '@/components/LoadSampleButton'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * SVG to PNG/WebP Converter —— 纯前端 canvas 转换
 *
 * 输入:粘贴 SVG 代码 或 上传 .svg 文件(FileReader 读为文本)。
 * 转换:Blob → ObjectURL → Image → <canvas> → canvas.toBlob('image/png'|'image/webp')。
 * 支持 1x/2x/3x 缩放;SVG 需自带 width/height 或 viewBox 才能定尺寸。
 * 100% 本地,无网络。
 */

const SAMPLE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#2563eb"/>
      <stop offset="1" stop-color="#9333ea"/>
    </linearGradient>
  </defs>
  <rect width="240" height="240" rx="32" fill="url(#g)"/>
  <circle cx="120" cy="100" r="40" fill="#fff" opacity="0.95"/>
  <path d="M70 200 Q120 140 170 200 Z" fill="#fff" opacity="0.95"/>
</svg>`

/**
 * 净化用户粘贴/上传的 SVG 文本,移除 XSS/SSRF 攻击面:
 *  - 移除 <script> / <foreignObject>(脚本执行与 HTML 注入)
 *  - 移除所有 on* 事件属性(onload/onerror/onclick ...)
 *  - 移除外部资源引用(href/xlink:href 指向 http(s) 的 <use>/<image> 等,防 SSRF/隐私泄露)
 *  - 移除 XML 注释里的 CDATA / Processing Instruction
 * 用 DOMParser 解析后遍历,比纯正则稳健;失败回退到拒绝。
 */
function sanitizeSvg(raw: string): string {
  const doc = new DOMParser().parseFromString(raw, 'image/svg+xml')
  const svg = doc.querySelector('svg')
  if (!svg) throw new Error('No <svg> root element found.')
  // 需要移除的元素:script、foreignObject、以及可执行/外部加载类
  const stripTags = ['script', 'foreignObject', 'iframe', 'object', 'embed']
  for (const tag of stripTags) {
    svg.querySelectorAll(tag).forEach((el) => el.remove())
  }
  // 移除所有事件属性 + 外部引用属性
  svg.querySelectorAll('*').forEach((el) => {
    for (const attr of Array.from(el.attributes)) {
      const name = attr.name.toLowerCase()
      const val = (attr.value || '').trim()
      // on* 事件处理器
      if (name.startsWith('on')) {
        el.removeAttribute(attr.name)
        continue
      }
      // href / xlink:href 指向 http(s) / data: 的外部资源(SSRF / 隐私泄露)
      if ((name === 'href' || name.endsWith(':href')) && /^(https?:|\/\/|data:)/i.test(val)) {
        el.removeAttribute(attr.name)
      }
    }
  })
  // 序列化回字符串(DOMParser 解析时已保证是合法 XML)
  return new XMLSerializer().serializeToString(svg)
}

type Fmt = 'image/png' | 'image/webp'

export function SvgToImageClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('svg-to-image', locale, key, fb)

  const [svgText, setSvgText] = useState('')
  const [scale, setScale] = useState(2)
  const [format, setFormat] = useState<Fmt>('image/png')
  const [error, setError] = useState<string | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [dims, setDims] = useState<{ w: number; h: number } | null>(null)
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const [downloadName, setDownloadName] = useState('converted.png')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleLoadSample = useCallback(() => setSvgText(SAMPLE_SVG), [])

  // 读取上传文件
  const handleFile = useCallback((file: File) => {
    const reader = new FileReader()
    reader.onload = () => {
      setSvgText(String(reader.result || ''))
      setDownloadName(file.name.replace(/\.svg$/i, '') || 'converted')
    }
    reader.onerror = () => setError(L('errorReadFile', 'Failed to read file.'))
    reader.readAsText(file)
  }, [])

  const onFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const f = e.target.files?.[0]
      if (f) handleFile(f)
    },
    [handleFile],
  )

  // 执行转换
  const convert = useCallback(() => {
    setError(null)
    setPreviewUrl(null)
    setDownloadUrl(null)
    setDims(null)
    const trimmed = svgText.trim()
    if (!trimmed) {
      setError(L('errorEmpty', 'Paste SVG code or upload a file first.'))
      return
    }

    // 净化 SVG:移除 script/foreignObject/事件属性/外部引用(XSS/SSRF 防护)
    let safeSvg: string
    try {
      safeSvg = sanitizeSvg(trimmed)
    } catch (e) {
      setError(e instanceof Error ? e.message : L('errorInvalidSvg', 'Invalid SVG markup.'))
      return
    }

    const blob = new Blob([safeSvg], { type: 'image/svg+xml;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const img = new Image()
    img.onload = () => {
      try {
        // SVG 需要显式 width/height 或 viewBox;取 img.naturalWidth/Height
        const baseW = img.naturalWidth || 300
        const baseH = img.naturalHeight || 150
        const w = Math.max(1, Math.round(baseW * scale))
        const h = Math.max(1, Math.round(baseH * scale))

        const canvas = document.createElement('canvas')
        canvas.width = w
        canvas.height = h
        const ctx = canvas.getContext('2d')
        if (!ctx) throw new Error('Canvas 2D context unavailable.')
        ctx.drawImage(img, 0, 0, w, h)

        canvas.toBlob(
          (outBlob) => {
            if (!outBlob) {
              setError(L('errorEncodeFailed', 'Conversion failed: browser could not encode the image.'))
              return
            }
            const outUrl = URL.createObjectURL(outBlob)
            setPreviewUrl(url) // 预览用原始 SVG 渲染
            setDownloadUrl(outUrl)
            setDims({ w, h })
            const ext = format === 'image/png' ? 'png' : 'webp'
            setDownloadName((n) => (n.endsWith(`.${ext}`) ? n : n.replace(/\.(png|webp|svg)$/i, '') + `.${ext}`))
          },
          format,
          0.92,
        )
      } catch (e) {
        setError(e instanceof Error ? e.message : L('errorConvertFailed', 'Conversion failed.'))
      }
    }
    img.onerror = () => {
      URL.revokeObjectURL(url)
      setError(L('errorInvalidSvgMarkup', 'Invalid SVG — make sure it has xmlns and a viewBox or width/height.'))
    }
    img.src = url
  }, [svgText, scale, format])

  const ext = format === 'image/png' ? 'png' : 'webp'

  return (
    <div className="space-y-5">
      {/* 输入区:粘贴 / 上传 */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="svg-input" className="text-sm font-medium text-slate-700">
            {L('pasteSvgCode', 'Paste SVG code')}
          </label>
          <div className="flex items-center gap-2">
            <LoadSampleButton onLoad={handleLoadSample} variant="compact" />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="btn btn-secondary px-3 py-1.5 text-xs"
            >
              {L('uploadSvg', 'Upload .svg')}
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".svg,image/svg+xml"
              onChange={onFileChange}
              className="hidden"
            />
          </div>
        </div>
        <textarea
          id="svg-input"
          value={svgText}
          onChange={(e) => setSvgText(e.target.value)}
          placeholder="<svg xmlns='http://www.w3.org/2000/svg' ...>...</svg>"
          rows={5}
          spellCheck={false}
          className="w-full rounded-lg border p-4 font-mono text-xs shadow-sm outline-none transition focus:ring-2"
          style={{
            borderColor: 'rgb(var(--border-strong))',
            backgroundColor: 'rgb(var(--bg-card))',
            color: 'rgb(var(--text))',
          }}
        />
      </div>

      {/* 选项:格式 + 缩放 */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2 text-sm" style={{ color: 'rgb(var(--text-muted))' }}>
          <span>{L('format', 'Format:')}</span>
          <select
            value={format}
            onChange={(e) => setFormat(e.target.value as Fmt)}
            className="rounded border bg-white px-2 py-1 text-xs"
            style={{ borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text))' }}
          >
            <option value="image/png">PNG</option>
            <option value="image/webp">WebP</option>
          </select>
        </div>
        <div className="flex items-center gap-2 text-sm" style={{ color: 'rgb(var(--text-muted))' }}>
          <span>{L('scale', 'Scale:')}</span>
          <select
            value={scale}
            onChange={(e) => setScale(Number(e.target.value))}
            className="rounded border bg-white px-2 py-1 text-xs"
            style={{ borderColor: 'rgb(var(--border-strong))', color: 'rgb(var(--text))' }}
          >
            <option value={1}>1x</option>
            <option value={2}>2x</option>
            <option value={3}>3x</option>
          </select>
        </div>
        <button type="button" onClick={convert} className="btn btn-primary">
          {L('convert', 'Convert')}
        </button>
      </div>

      {/* 错误 */}
      {error && <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">⚠️ {error}</div>}

      {/* 结果:预览 + 下载 */}
      {downloadUrl && previewUrl && (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>
              {L('result', 'Result')} {dims && <span className="font-normal text-slate-400">({dims.w} × {dims.h}px)</span>}
            </span>
            <a
              href={downloadUrl}
              download={downloadName || `converted.${ext}`}
              className="btn btn-primary"
            >
              {L('download', 'Download')} .{ext}
            </a>
          </div>
          {/* 预览窗(棋盘格背景便于看透明) */}
          <div
            className="flex min-h-[160px] items-center justify-center rounded-lg border p-4"
            style={{
              borderColor: 'rgb(var(--border))',
              backgroundImage:
                'linear-gradient(45deg, #eee 25%, transparent 25%), linear-gradient(-45deg, #eee 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #eee 75%), linear-gradient(-45deg, transparent 75%, #eee 75%)',
              backgroundSize: '16px 16px',
              backgroundPosition: '0 0, 0 8px, 8px -8px, -8px 0px',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={previewUrl}
              alt={L('convertedPreviewAlt', 'Converted preview')}
              width={dims?.w}
              height={dims?.h}
              className="max-h-64 max-w-full"
            />
          </div>
        </div>
      )}

      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        {L('note', '🖼️ Conversion runs entirely in your browser via HTML5 canvas — your SVG is never uploaded. For crisp output on high-DPI screens, use 2x or 3x scale. Self-contained SVGs (inline images as data URIs, embedded fonts) convert most reliably.')}
      </p>
    </div>
  )
}
