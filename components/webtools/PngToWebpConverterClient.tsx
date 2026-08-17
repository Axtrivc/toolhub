'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * PNG / JPG to WebP Converter —— 纯前端 canvas 转码为 WebP
 *
 * 上传 PNG/JPG → 画进 canvas → toBlob('image/webp', quality) 导出。
 * 展示原始 vs WebP 体积 + 压缩率进度条;检测老 Safari 不支持 WebP 编码的情况。
 */

interface SourceMeta {
  width: number
  height: number
  size: number
  format: string
}

interface OutputMeta {
  url: string
  size: number
}

/** 字节数格式化 */
function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

export function PngToWebpConverterClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('png-to-webp-converter', locale, key, fb)

  const [imgSrc, setImgSrc] = useState<string>('')
  const [imgName, setImgName] = useState<string>('image')
  const [source, setSource] = useState<SourceMeta | null>(null)
  const [error, setError] = useState<string>('')
  const [dragging, setDragging] = useState(false)
  const [quality, setQuality] = useState(0.8)
  const [output, setOutput] = useState<OutputMeta | null>(null)
  const [unsupported, setUnsupported] = useState(false)
  const imgRef = useRef<HTMLImageElement | null>(null)
  const outUrlRef = useRef<string>('')

  // 处理文件上传(PNG / JPG)
  const handleFile = useCallback((file: File) => {
    setError('')
    setUnsupported(false)
    if (file.type !== 'image/png' && file.type !== 'image/jpeg') {
      setError(L('errUploadPngJpg', 'Please upload a PNG or JPG image file.'))
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      setImgSrc(reader.result as string)
      setImgName(file.name.replace(/\.[^.]+$/, '') || 'image')
      setSource({
        width: 0,
        height: 0,
        size: file.size,
        format: file.type === 'image/png' ? 'PNG' : 'JPG',
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

  // 实时转换:质量滑杆或图片变化时重新编码
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
    ctx.drawImage(img, 0, 0)
    canvas.toBlob(
      (blob) => {
        if (cancelled) return
        if (!blob) {
          setError(L('errConversionFailed', 'Conversion failed in canvas.'))
          return
        }
        // 老 Safari 的 toBlob 不认识 image/webp,会静默回退为 PNG
        if (blob.type !== 'image/webp') {
          setUnsupported(true)
          setOutput(null)
          return
        }
        if (outUrlRef.current) URL.revokeObjectURL(outUrlRef.current)
        const url = URL.createObjectURL(blob)
        outUrlRef.current = url
        setOutput({ url, size: blob.size })
      },
      'image/webp',
      quality,
    )
    return () => {
      cancelled = true
    }
  }, [imgSrc, source, quality, locale])

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
    a.download = `${imgName}.webp`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }, [output, imgName])

  const savings = source && output ? Math.round((1 - output.size / source.size) * 100) : 0
  const savingsWidth = Math.min(100, Math.max(0, savings))

  return (
    <div className="space-y-5">
      {/* 上传区 */}
      {!imgSrc && (
        <label
          htmlFor="png-webp-upload"
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
            {L('uploadHint', 'PNG or JPG images')}
          </span>
          <input id="png-webp-upload" type="file" accept=".png,.jpg,.jpeg,image/png,image/jpeg" onChange={onInputChange} className="hidden" />
        </label>
      )}

      {/* 错误提示 */}
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          ⚠️ {error}
        </div>
      )}

      {/* 浏览器不支持 WebP 编码 */}
      {unsupported && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          ⚠️ {L('errUnsupportedWebp', 'Your browser cannot encode WebP (canvas.toBlob fell back to PNG). This affects older versions of Safari — please use a current Chrome, Edge, Firefox, or Safari 14+ to convert.')}
        </div>
      )}

      {imgSrc && source && (
        <div className="space-y-5">
          {/* 源图信息 + 重选 */}
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imgSrc}
              alt={L('uploadedSourceAlt', 'Uploaded source')}
              className="h-20 w-20 rounded-lg border object-contain"
              style={{ borderColor: 'rgb(var(--border))' }}
            />
            <div className="flex-1">
              <div className="text-sm font-medium" style={{ color: 'rgb(var(--text))' }}>
                {imgName}
              </div>
              <div className="text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
                {source.width > 0 ? `${source.width} × ${source.height} px` : L('reading', 'Reading…')} ·{' '}
                {formatBytes(source.size)} · {source.format}
              </div>
            </div>
            <label htmlFor="png-webp-reupload" className="btn btn-secondary cursor-pointer text-xs">
              {L('change', 'Change')}
              <input id="png-webp-reupload" type="file" accept=".png,.jpg,.jpeg,image/png,image/jpeg" onChange={onInputChange} className="hidden" />
            </label>
          </div>

          {/* 质量滑杆 */}
          <div className="rounded-lg p-4" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
            <label
              htmlFor="webp-quality"
              className="mb-1.5 block text-sm font-medium"
              style={{ color: 'rgb(var(--text-muted))' }}
            >
              {L('webpQualityLabel', 'WebP quality —')} {Math.round(quality * 100)}%
            </label>
            <input
              id="webp-quality"
              type="range"
              min={0.05}
              max={1}
              step={0.01}
              value={quality}
              onChange={(e) => setQuality(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
            <div className="mt-1 flex justify-between text-[11px]" style={{ color: 'rgb(var(--text-faint))' }}>
              <span>{L('smallestFile', 'Smallest file')}</span>
              <span>{L('bestQuality', 'Best quality')}</span>
            </div>
          </div>

          {/* 体积对比 + 压缩率条 */}
          {output && (
            <div
              className="space-y-4 rounded-lg border p-4"
              style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }}
            >
              {/* 输出预览:棋盘格底衬出 WebP 的 alpha 透明 */}
              <div
                className="flex items-center justify-center rounded-lg border p-4"
                style={{
                  borderColor: 'rgb(var(--border))',
                  backgroundColor: 'rgb(var(--bg-subtle))',
                  backgroundImage:
                    'linear-gradient(45deg, rgb(var(--border) / 0.5) 25%, transparent 25%, transparent 75%, rgb(var(--border) / 0.5) 75%), linear-gradient(45deg, rgb(var(--border) / 0.5) 25%, transparent 25%, transparent 75%, rgb(var(--border) / 0.5) 75%)',
                  backgroundSize: '16px 16px',
                  backgroundPosition: '0 0, 8px 8px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={output.url}
                  alt={L('webpPreviewAlt', 'WebP output preview')}
                  className="max-h-48 max-w-full object-contain"
                />
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
                    {L('originalLabel', 'Original')} ({source.format})
                  </div>
                  <div className="mt-1 font-mono text-sm font-semibold" style={{ color: 'rgb(var(--text))' }}>
                    {formatBytes(source.size)}
                  </div>
                </div>
                <div>
                  <div className="text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
                    {L('webpLabel', 'WebP')}
                  </div>
                  <div className="mt-1 font-mono text-sm font-semibold" style={{ color: 'rgb(var(--text))' }}>
                    {formatBytes(output.size)}
                  </div>
                </div>
                <div>
                  <div className="text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
                    {L('savings', 'Savings')}
                  </div>
                  <div
                    className="mt-1 font-mono text-sm font-semibold"
                    style={{ color: savings >= 0 ? 'rgb(22 163 74)' : 'rgb(220 38 38)' }}
                  >
                    {savings >= 0 ? `−${savings}%` : `+${Math.abs(savings)}%`}
                  </div>
                </div>
              </div>

              {/* 压缩率指示条(meter:表示当前节省比例,而非可操作进度) */}
              <div
                className="h-2 w-full overflow-hidden rounded-full"
                style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}
                role="meter"
                aria-label={L('savings', 'Savings')}
                aria-valuenow={savingsWidth}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${savingsWidth}%`,
                    backgroundColor: savings >= 0 ? 'rgb(34 197 94)' : 'rgb(248 113 113)',
                  }}
                />
              </div>
              {savings < 0 && (
                <p className="text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
                  {L('alreadyCompressedPrefix', 'This image is already well compressed — WebP at')} {Math.round(quality * 100)}% {L('alreadyCompressedSuffix', 'quality is larger than the source. Try lowering the quality slider.')}
                </p>
              )}

              <div className="flex justify-end">
                <button type="button" onClick={download} className="btn btn-primary text-sm">
                  {L('downloadWebp', 'Download WebP')}
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        {L('noteText', '🔒 100% client-side — encoding happens locally in an in-browser canvas via')} <code>canvas.toBlob</code>{L('noteTextSuffix', '. Your image never leaves your device.')}
      </p>
    </div>
  )
}
