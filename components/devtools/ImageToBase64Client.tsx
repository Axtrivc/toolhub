'use client'

import { useState, useCallback } from 'react'
import { CopyButton } from '@/components/CopyButton'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * Image to Base64 Converter
 *
 * 上传/拖拽图片 → FileReader.readAsDataURL → Base64 data URI。
 * 输出:原始 data URI / <img src> / CSS background-image 三种复制格式。
 * 100% 本地,不上传。
 */

interface LoadedImage {
  name: string
  type: string
  size: number
  dataUrl: string
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

/** 从 dataUrl 提取 MIME(image/png 等) */
function mimeFromDataUrl(dataUrl: string): string {
  const m = dataUrl.match(/^data:([^;]+);/)
  return m ? m[1] : 'image/png'
}

export function ImageToBase64Client() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('image-to-base64', locale, key, fb)
  const [img, setImg] = useState<LoadedImage | null>(null)
  const [error, setError] = useState('')
  const [dragging, setDragging] = useState(false)

  // 文件大小上限:readAsDataURL 会把整文件 base64 化(膨胀 ~33%)常驻内存,
  // 超大文件会冻结标签页甚至触发浏览器 OOM。20MB 覆盖绝大多数正常图片。
  const MAX_BYTES = 20 * 1024 * 1024

  const handleFile = useCallback((file: File) => {
    setError('')
    if (!file.type.startsWith('image/')) {
      setError(L('errUploadImage', 'Please upload an image file (PNG, JPG, GIF, WebP, or SVG).'))
      return
    }
    if (file.size > MAX_BYTES) {
      setError(L('errTooLarge', 'File is too large ({size}). Maximum size is 20 MB.').replace('{size}', formatBytes(file.size)))
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      setImg({
        name: file.name,
        type: file.type,
        size: file.size,
        dataUrl: reader.result as string,
      })
    }
    reader.onerror = () => setError(L('errReadFile', 'Could not read the file.'))
    reader.readAsDataURL(file)
  }, [locale])

  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (file) handleFile(file)
    },
    [handleFile],
  )

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setDragging(false)
      const file = e.dataTransfer.files?.[0]
      if (file) handleFile(file)
    },
    [handleFile],
  )

  const mime = img ? mimeFromDataUrl(img.dataUrl) : 'image/png'
  const imgTag = img ? `<img src="${img.dataUrl}" alt="${img.name}" />` : ''
  const cssBg = img ? `background-image: url("${img.dataUrl}");` : ''

  return (
    <div className="space-y-5">
      {/* 上传区 */}
      {!img && (
        <label
          htmlFor="img-upload"
          onDragOver={(e) => {
            e.preventDefault()
            setDragging(true)
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={onDrop}
          className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-12 text-center transition ${
            dragging ? 'border-blue-400 bg-blue-50/50 dark:bg-blue-950/20' : ''
          }`}
          style={{ borderColor: dragging ? undefined : 'rgb(var(--border-strong))' }}
        >
          <span className="text-4xl" aria-hidden="true">🖼️</span>
          <span className="mt-3 text-sm font-medium" style={{ color: 'rgb(var(--text))' }}>
            {L('uploadPrompt', 'Click to upload or drag & drop')}
          </span>
          <span className="mt-1 text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
            {L('uploadHint', 'PNG, JPG, GIF, WebP, SVG — up to a few MB recommended')}
          </span>
          <input id="img-upload" type="file" accept="image/*" onChange={onInputChange} className="hidden" />
        </label>
      )}

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">⚠️ {error}</div>
      )}

      {/* 已上传 */}
      {img && (
        <div className="space-y-5">
          {/* 文件信息 */}
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.dataUrl}
              alt={img.name}
              width={80}
              height={80}
              className="h-20 w-20 rounded-lg border object-cover"
              style={{ borderColor: 'rgb(var(--border))' }}
            />
            <div className="flex-1">
              <div className="text-sm font-medium" style={{ color: 'rgb(var(--text))' }}>
                {img.name}
              </div>
              <div className="text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
                {mime} · {formatBytes(img.size)} · Base64 size ≈ {formatBytes(Math.ceil((img.dataUrl.length * 3) / 4))}
              </div>
            </div>
            <label htmlFor="img-reupload" className="btn btn-secondary cursor-pointer text-xs">
              {L('change', 'Change')}
              <input id="img-reupload" type="file" accept="image/*" onChange={onInputChange} className="hidden" />
            </label>
          </div>

          {/* 三种输出格式 */}
          <div className="space-y-4">
            {/* Data URI */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{L('base64DataUri', 'Base64 Data URI')}</span>
                <CopyButton value={img.dataUrl} label={L('copy', 'Copy')} />
              </div>
              <pre
                className="overflow-x-auto rounded-lg border bg-slate-50 p-3 text-xs"
                style={{ borderColor: 'rgb(var(--border))' }}
              >
                <code className="break-all">{img.dataUrl.slice(0, 200)}{img.dataUrl.length > 200 ? '…' : ''}</code>
              </pre>
            </div>

            {/* <img> tag */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>&lt;img&gt; {L('imgTag', 'tag')}</span>
                <CopyButton value={imgTag} label={L('copy', 'Copy')} />
              </div>
              <pre
                className="overflow-x-auto rounded-lg border bg-slate-50 p-3 text-xs"
                style={{ borderColor: 'rgb(var(--border))' }}
              >
                <code className="break-all">{imgTag.slice(0, 200)}{imgTag.length > 200 ? '…' : ''}</code>
              </pre>
            </div>

            {/* CSS background */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{L('cssBg', 'CSS background-image')}</span>
                <CopyButton value={cssBg} label={L('copy', 'Copy')} />
              </div>
              <pre
                className="overflow-x-auto rounded-lg border bg-slate-50 p-3 text-xs"
                style={{ borderColor: 'rgb(var(--border))' }}
              >
                <code className="break-all">{cssBg.slice(0, 200)}{cssBg.length > 200 ? '…' : ''}</code>
              </pre>
            </div>
          </div>
        </div>
      )}

      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        {L('notePrefix', '🔒 100% client-side — read via ')}<code>FileReader.readAsDataURL</code>{L('noteSuffix', '. Your image never leaves your device.')}
      </p>
    </div>
  )
}
