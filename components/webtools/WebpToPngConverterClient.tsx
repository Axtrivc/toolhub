'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * WebP to PNG / JPEG Converter —— 纯前端 canvas 转码
 *
 * 上传 WebP → 画进 canvas → toBlob 导出 PNG(无损)或 JPEG(可调质量 + 背景色填充透明)。
 * 100% 本地,图片不离开浏览器。
 */

type OutFormat = 'png' | 'jpeg'

interface SourceMeta {
  width: number
  height: number
  size: number
}

interface OutputMeta {
  url: string
  size: number
  mime: string
}

/** 字节数格式化 */
function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

export function WebpToPngConverterClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('webp-to-png-converter', locale, key, fb)

  const [imgSrc, setImgSrc] = useState<string>('')
  const [imgName, setImgName] = useState<string>('image')
  const [source, setSource] = useState<SourceMeta | null>(null)
  const [error, setError] = useState<string>('')
  const [dragging, setDragging] = useState(false)
  const [format, setFormat] = useState<OutFormat>('png')
  const [quality, setQuality] = useState(0.92)
  const [bgColor, setBgColor] = useState('#ffffff')
  const [output, setOutput] = useState<OutputMeta | null>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)
  const outUrlRef = useRef<string>('')

  // 处理文件上传(仅接受 WebP)
  const handleFile = useCallback((file: File) => {
    setError('')
    if (file.type !== 'image/webp') {
      setError(L('errUploadWebp', 'Please upload a WebP image file (.webp).'))
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      setImgSrc(reader.result as string)
      setImgName(file.name.replace(/\.[^.]+$/, '') || 'image')
      setSource({ width: 0, height: 0, size: file.size })
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

  // 图片解码完成后写入 ref + 记录原始尺寸(cancelled 防快速换图时旧图 onload 回写)
  useEffect(() => {
    if (!imgSrc) {
      imgRef.current = null
      return
    }
    let cancelled = false
    const img = new Image()
    img.onload = () => {
      if (cancelled) return
      imgRef.current = img
      setSource((prev) =>
        prev ? { ...prev, width: img.naturalWidth, height: img.naturalHeight } : null,
      )
    }
    img.onerror = () => {
      if (!cancelled) setError(L('errDecodeImage', 'Could not decode the image file.'))
    }
    img.src = imgSrc
    return () => {
      cancelled = true
    }
  }, [imgSrc, locale])

  // 实时转换:图片或选项变化时重新渲染 canvas 并生成输出 blob
  // (cancelled 防旧 toBlob 乱序覆盖:拖动质量滑杆会并发多次编码,只认最新一次)
  useEffect(() => {
    const img = imgRef.current
    if (!img || !source || source.width === 0) return
    let cancelled = false
    const canvas = document.createElement('canvas')
    canvas.width = img.naturalWidth
    canvas.height = img.naturalHeight
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    // JPEG 不支持透明:先用背景色铺底再绘制
    if (format === 'jpeg') {
      ctx.fillStyle = bgColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }
    ctx.drawImage(img, 0, 0)
    const mime = format === 'png' ? 'image/png' : 'image/jpeg'
    canvas.toBlob(
      (blob) => {
        if (cancelled) return
        if (!blob) {
          setError(L('errConversionFailed', 'Conversion failed in canvas.'))
          return
        }
        if (outUrlRef.current) URL.revokeObjectURL(outUrlRef.current)
        const url = URL.createObjectURL(blob)
        outUrlRef.current = url
        setOutput({ url, size: blob.size, mime })
      },
      mime,
      format === 'jpeg' ? quality : undefined,
    )
    return () => {
      cancelled = true
    }
  }, [imgSrc, source, format, quality, bgColor, locale])

  // 卸载时回收 objectURL
  useEffect(
    () => () => {
      if (outUrlRef.current) URL.revokeObjectURL(outUrlRef.current)
    },
    [],
  )

  const download = useCallback(() => {
    if (!output) return
    const a = document.createElement('a')
    a.href = output.url
    a.download = `${imgName}.${format === 'png' ? 'png' : 'jpg'}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }, [output, imgName, format])

  const selectClass =
    'w-full rounded-lg border p-2.5 text-sm shadow-sm outline-none transition focus:ring-2'
  const selectStyle = {
    borderColor: 'rgb(var(--border-strong))',
    backgroundColor: 'rgb(var(--bg-card))',
    color: 'rgb(var(--text))',
  }

  return (
    <div className="space-y-5">
      {/* 上传区 */}
      {!imgSrc && (
        <label
          htmlFor="webp-upload"
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
            {L('uploadHint', 'WebP images only (.webp)')}
          </span>
          <input id="webp-upload" type="file" accept=".webp,image/webp" onChange={onInputChange} className="hidden" />
        </label>
      )}

      {/* 错误提示 */}
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          ⚠️ {error}
        </div>
      )}

      {imgSrc && source && (
        <div className="space-y-5">
          {/* 源图信息 + 重选 */}
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imgSrc}
              alt={L('uploadedWebpSourceAlt', 'Uploaded WebP source')}
              className="h-20 w-20 rounded-lg border object-contain"
              style={{ borderColor: 'rgb(var(--border))' }}
            />
            <div className="flex-1">
              <div className="text-sm font-medium" style={{ color: 'rgb(var(--text))' }}>
                {imgName}.webp
              </div>
              <div className="text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
                {source.width > 0 ? `${source.width} × ${source.height} px` : L('reading', 'Reading…')} ·{' '}
                {formatBytes(source.size)} · {L('webpLabel', 'WebP')}
              </div>
            </div>
            <label htmlFor="webp-reupload" className="btn btn-secondary cursor-pointer text-xs">
              {L('change', 'Change')}
              <input id="webp-reupload" type="file" accept=".webp,image/webp" onChange={onInputChange} className="hidden" />
            </label>
          </div>

          {/* 输出选项 */}
          <div
            className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2"
            style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}
          >
            <div>
              <label
                htmlFor="webp-out-format"
                className="mb-1.5 block text-sm font-medium"
                style={{ color: 'rgb(var(--text-muted))' }}
              >
                {L('outputFormat', 'Output format')}
              </label>
              <select
                id="webp-out-format"
                value={format}
                onChange={(e) => setFormat(e.target.value as OutFormat)}
                className={selectClass}
                style={selectStyle}
              >
                <option value="png">{L('pngLossless', 'PNG (lossless)')}</option>
                <option value="jpeg">{L('jpegSmallerLossy', 'JPEG (smaller, lossy)')}</option>
              </select>
            </div>
            {format === 'jpeg' && (
              <>
                <div>
                  <label
                    htmlFor="webp-quality"
                    className="mb-1.5 block text-sm font-medium"
                    style={{ color: 'rgb(var(--text-muted))' }}
                  >
                    {L('jpegQualityLabel', 'JPEG quality —')} {Math.round(quality * 100)}%
                  </label>
                  <input
                    id="webp-quality"
                    type="range"
                    min={0.5}
                    max={1}
                    step={0.01}
                    value={quality}
                    onChange={(e) => setQuality(Number(e.target.value))}
                    className="w-full accent-blue-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="webp-bg"
                    className="mb-1.5 block text-sm font-medium"
                    style={{ color: 'rgb(var(--text-muted))' }}
                  >
                    {L('bgColorLabel', 'Background color (flattens transparency)')}
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      id="webp-bg"
                      type="color"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      className="h-10 w-14 cursor-pointer rounded-lg border p-1"
                      style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))' }}
                    />
                    <span className="font-mono text-sm" style={{ color: 'rgb(var(--text-subtle))' }}>
                      {bgColor}
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* 输出结果 */}
          {output && (
            <div
              className="flex flex-wrap items-center justify-between gap-4 rounded-lg border p-4"
              style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }}
            >
              <div className="text-sm" style={{ color: 'rgb(var(--text))' }}>
                <span className="font-semibold">{format === 'png' ? L('png', 'PNG') : L('jpeg', 'JPEG')} {L('outputSuffix', 'output')}</span>
                <span className="ml-2 font-mono text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
                  {formatBytes(output.size)} · {source.width} × {source.height} px
                </span>
                {format === 'jpeg' && output.size > source.size && (
                  <span className="ml-2 text-xs" style={{ color: 'rgb(var(--text-faint))' }}>
                    {L('largerThanOriginal', '(larger than the original — try lowering quality)')}
                  </span>
                )}
              </div>
              <button type="button" onClick={download} className="btn btn-primary text-sm">
                {L('download', 'Download')} {format === 'png' ? L('png', 'PNG') : L('jpg', 'JPG')}
              </button>
            </div>
          )}
        </div>
      )}

      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        {L('noteText', '🔒 100% client-side — conversion happens locally in an in-browser canvas via')} <code>canvas.toBlob</code>{L('noteTextSuffix', '. Your image never leaves your device.')}
      </p>
    </div>
  )
}
