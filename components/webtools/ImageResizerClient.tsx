'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * Image Resizer —— 纯前端 canvas 缩放
 *
 * 上传图片 → 设定目标宽高(可锁纵横比 / 快捷缩放 25–100%)→ 离屏 canvas 高质量重采样
 * → toBlob 实时估算输出体积并生成缩略图预览 → 下载 name-WxH.ext。
 */

type OutFormat = 'original' | 'png' | 'jpeg' | 'webp'

interface ResultMeta {
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

/** canvas 可导出的格式;original 时保留源格式,无法保留的(gif 等)回退 PNG */
function resolveMime(format: OutFormat, fileType: string): string {
  if (format === 'png') return 'image/png'
  if (format === 'jpeg') return 'image/jpeg'
  if (format === 'webp') return 'image/webp'
  return ['image/png', 'image/jpeg', 'image/webp'].includes(fileType) ? fileType : 'image/png'
}

function extOf(mime: string): string {
  if (mime === 'image/jpeg') return 'jpg'
  if (mime === 'image/webp') return 'webp'
  return 'png'
}

const SCALE_PRESETS = [25, 50, 75, 100]

/**
 * 画布安全上限:单边 ≤ 8192px 且总像素 ≤ 40MP。
 * 超限时部分浏览器会把 canvas 静默渲染成空白图 / toBlob 返回 null,
 * 必须在渲染前拦截并明确报错。
 */
const MAX_SIDE = 8192
const MAX_PIXELS = 40 * 1000 * 1000

export function ImageResizerClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('image-resizer', locale, key, fb)

  const [imgSrc, setImgSrc] = useState<string>('')
  const [imgName, setImgName] = useState<string>('image')
  const [fileType, setFileType] = useState<string>('image/png')
  const [origSize, setOrigSize] = useState(0)
  const [natural, setNatural] = useState<{ w: number; h: number } | null>(null)
  const [widthStr, setWidthStr] = useState('')
  const [heightStr, setHeightStr] = useState('')
  const [lockRatio, setLockRatio] = useState(true)
  const [format, setFormat] = useState<OutFormat>('original')
  const [quality, setQuality] = useState(0.85)
  const [result, setResult] = useState<ResultMeta | null>(null)
  const [error, setError] = useState('')
  const [dragging, setDragging] = useState(false)
  const imgRef = useRef<HTMLImageElement | null>(null)
  const outUrlRef = useRef<string>('')

  // 处理文件上传
  const handleFile = useCallback((file: File) => {
    setError('')
    if (!file.type.startsWith('image/')) {
      setError(L('errUploadImage', 'Please upload an image file (PNG, JPG, GIF, or WebP).'))
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      setImgSrc(reader.result as string)
      setImgName(file.name.replace(/\.[^.]+$/, '') || 'image')
      setFileType(file.type)
      setOrigSize(file.size)
      setNatural(null)
      setResult(null)
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

  // 解码图片,记录自然尺寸并初始化目标宽高(cancelled 防快速换图时旧图 onload 回写)
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
      setNatural({ w: img.naturalWidth, h: img.naturalHeight })
      setWidthStr(String(img.naturalWidth))
      setHeightStr(String(img.naturalHeight))
    }
    img.onerror = () => {
      if (!cancelled) setError(L('errDecodeImage', 'Could not decode the image file.'))
    }
    img.src = imgSrc
    return () => {
      cancelled = true
    }
  }, [imgSrc, locale])

  // 宽高联动(锁定时按原始纵横比推算另一边)
  const onWidthChange = useCallback(
    (v: string) => {
      setWidthStr(v)
      if (lockRatio && natural) {
        const w = parseInt(v, 10)
        if (w > 0) setHeightStr(String(Math.max(1, Math.round((w * natural.h) / natural.w))))
      }
    },
    [lockRatio, natural],
  )

  const onHeightChange = useCallback(
    (v: string) => {
      setHeightStr(v)
      if (lockRatio && natural) {
        const h = parseInt(v, 10)
        if (h > 0) setWidthStr(String(Math.max(1, Math.round((h * natural.w) / natural.h))))
      }
    },
    [lockRatio, natural],
  )

  // 快捷缩放百分比
  const applyScale = useCallback(
    (pct: number) => {
      if (!natural) return
      setWidthStr(String(Math.max(1, Math.round((natural.w * pct) / 100))))
      setHeightStr(String(Math.max(1, Math.round((natural.h * pct) / 100))))
    },
    [natural],
  )

  const targetW = parseInt(widthStr, 10)
  const targetH = parseInt(heightStr, 10)
  const dimsValid = Number.isFinite(targetW) && Number.isFinite(targetH) && targetW >= 1 && targetH >= 1

  const outMime = resolveMime(format, fileType)
  const isLossy = outMime === 'image/jpeg' || outMime === 'image/webp'

  // 防抖实时渲染:离屏 canvas 重采样 + toBlob 测真实体积 + 生成预览
  // (cancelled 防旧 toBlob 回调乱序覆盖:拖动质量滑杆会并发多次编码,只认最新一次)
  useEffect(() => {
    if (!imgRef.current || !dimsValid) {
      setResult(null)
      return
    }
    // 渲染前的画布尺寸上限校验:超限直接报错,避免静默产出空白图
    if (targetW > MAX_SIDE || targetH > MAX_SIDE || targetW * targetH > MAX_PIXELS) {
      setResult(null)
      setError(
        L(
          'errTooLarge',
          'Target size is too large — keep each side at 8192 px or below and the total under 40 megapixels.',
        ),
      )
      return
    }
    let cancelled = false
    const timer = setTimeout(() => {
      const img = imgRef.current
      if (!img) return
      const canvas = document.createElement('canvas')
      canvas.width = targetW
      canvas.height = targetH
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = 'high'
      // JPEG 无透明通道:透明像素会被编码成黑色 → 先铺白底再绘制(镜像 WebP→PNG 转换器的做法)
      if (outMime === 'image/jpeg') {
        ctx.fillStyle = '#ffffff'
        ctx.fillRect(0, 0, targetW, targetH)
      } else {
        ctx.clearRect(0, 0, targetW, targetH)
      }
      ctx.drawImage(img, 0, 0, targetW, targetH)
      canvas.toBlob(
        (blob) => {
          if (cancelled) return
          if (!blob) {
            setError(
              L('errEncodeFailed', 'Encoding failed — the browser could not generate the image. Try a smaller target size.'),
            )
            return
          }
          // 老 Safari 的 toBlob 不认识 image/webp,会静默回退为 PNG → 显式报错而非伪装成功
          if (outMime === 'image/webp' && blob.type !== 'image/webp') {
            setError(
              L(
                'errWebpUnsupported',
                'Your browser cannot encode WebP (canvas.toBlob fell back to PNG). Use a current Chrome, Edge, Firefox, or Safari 14+, or choose PNG output.',
              ),
            )
            setResult(null)
            return
          }
          setError('')
          if (outUrlRef.current) URL.revokeObjectURL(outUrlRef.current)
          const url = URL.createObjectURL(blob)
          outUrlRef.current = url
          setResult({ url, size: blob.size, mime: blob.type })
        },
        outMime,
        isLossy ? quality : undefined,
      )
    }, 300)
    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [imgSrc, natural, targetW, targetH, dimsValid, outMime, isLossy, quality, locale])

  // 卸载时回收 objectURL
  useEffect(
    () => () => {
      if (outUrlRef.current) URL.revokeObjectURL(outUrlRef.current)
    },
    [],
  )

  const download = useCallback(() => {
    if (!result || !dimsValid) return
    const a = document.createElement('a')
    a.href = result.url
    a.download = `${imgName}-${targetW}x${targetH}.${extOf(result.mime)}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }, [result, dimsValid, imgName, targetW, targetH])

  const inputClass =
    'w-full rounded-lg border p-2.5 text-sm shadow-sm outline-none transition focus:ring-2'
  const inputStyle = {
    borderColor: 'rgb(var(--border-strong))',
    backgroundColor: 'rgb(var(--bg-card))',
    color: 'rgb(var(--text))',
  }

  return (
    <div className="space-y-5">
      {/* 上传区 */}
      {!imgSrc && (
        <label
          htmlFor="resizer-upload"
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
            {L('uploadHint', 'PNG, JPG, GIF, or WebP')}
          </span>
          <input id="resizer-upload" type="file" accept="image/*" onChange={onInputChange} className="hidden" />
        </label>
      )}

      {/* 错误提示 */}
      {error && (
        <div className="rounded-lg border border-red-200 dark:border-red-800/60 bg-red-50 dark:bg-red-950/30 p-4 text-sm text-red-700">
          ⚠️ {error}
        </div>
      )}

      {imgSrc && natural && (
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
                {L('originalInfo', 'Original:')} {natural.w} × {natural.h} px · {formatBytes(origSize)}
              </div>
            </div>
            <label htmlFor="resizer-reupload" className="btn btn-secondary cursor-pointer text-xs">
              {L('change', 'Change')}
              <input id="resizer-reupload" type="file" accept="image/*" onChange={onInputChange} className="hidden" />
            </label>
          </div>

          {/* 尺寸 + 格式控制 */}
          <div
            className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-2"
            style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}
          >
            <div>
              <label
                htmlFor="resizer-width"
                className="mb-1.5 block text-sm font-medium"
                style={{ color: 'rgb(var(--text-muted))' }}
              >
                {L('targetWidth', 'Target width (px)')}
              </label>
              <input
                id="resizer-width"
                type="number"
                min={1}
                value={widthStr}
                onChange={(e) => onWidthChange(e.target.value)}
                className={inputClass}
                style={inputStyle}
              />
            </div>
            <div>
              <label
                htmlFor="resizer-height"
                className="mb-1.5 block text-sm font-medium"
                style={{ color: 'rgb(var(--text-muted))' }}
              >
                {L('targetHeight', 'Target height (px)')}
              </label>
              <input
                id="resizer-height"
                type="number"
                min={1}
                value={heightStr}
                onChange={(e) => onHeightChange(e.target.value)}
                className={inputClass}
                style={inputStyle}
              />
            </div>

            {/* 纵横比锁 + 快捷缩放 */}
            <div className="sm:col-span-2">
              <div className="flex flex-wrap items-center gap-3">
                <label
                  className="flex cursor-pointer items-center gap-2 text-sm"
                  style={{ color: 'rgb(var(--text))' }}
                >
                  <input
                    type="checkbox"
                    checked={lockRatio}
                    onChange={(e) => setLockRatio(e.target.checked)}
                    className="h-4 w-4 accent-blue-600"
                  />
                  {L('lockAspectRatio', 'Lock aspect ratio')}
                </label>
                <div className="flex flex-wrap gap-2">
                  {SCALE_PRESETS.map((pct) => (
                    <button
                      key={pct}
                      type="button"
                      onClick={() => applyScale(pct)}
                      className="btn btn-secondary text-xs"
                    >
                      {pct}%
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="resizer-format"
                className="mb-1.5 block text-sm font-medium"
                style={{ color: 'rgb(var(--text-muted))' }}
              >
                {L('outputFormat', 'Output format')}
              </label>
              <select
                id="resizer-format"
                value={format}
                onChange={(e) => setFormat(e.target.value as OutFormat)}
                className={inputClass}
                style={inputStyle}
              >
                <option value="original">{L('keepOriginalFormat', 'Keep original format')}</option>
                <option value="png">{L('formatPng', 'PNG')}</option>
                <option value="jpeg">{L('formatJpeg', 'JPEG')}</option>
                <option value="webp">{L('formatWebp', 'WebP')}</option>
              </select>
            </div>
            {isLossy && (
              <div>
                <label
                  htmlFor="resizer-quality"
                  className="mb-1.5 block text-sm font-medium"
                  style={{ color: 'rgb(var(--text-muted))' }}
                >
                  {L('qualityLabel', 'Quality —')} {Math.round(quality * 100)}%
                </label>
                <input
                  id="resizer-quality"
                  type="range"
                  min={0.05}
                  max={1}
                  step={0.01}
                  value={quality}
                  onChange={(e) => setQuality(Number(e.target.value))}
                  className="w-full accent-blue-600"
                />
              </div>
            )}
          </div>

          {/* 尺寸校验 */}
          {!dimsValid && (
            <div className="rounded-lg border border-red-200 dark:border-red-800/60 bg-red-50 dark:bg-red-950/30 p-4 text-sm text-red-700">
              ⚠️ {L('errDimsValid', 'Width and height must be whole numbers of at least 1 px.')}
            </div>
          )}

          {/* 结果:预览 + 对比 + 下载 */}
          {dimsValid && result && (
            <div
              className="flex flex-wrap items-center gap-4 rounded-lg border p-4"
              style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={result.url}
                alt={`${L('resizedPreviewAlt', 'Resized preview')} ${targetW} ${L('byWord', 'by')} ${targetH}`}
                className="max-h-24 max-w-32 rounded-lg border object-contain"
                style={{ borderColor: 'rgb(var(--border))' }}
              />
              <div className="flex-1 text-sm" style={{ color: 'rgb(var(--text))' }}>
                <div className="font-semibold">
                  {natural.w} × {natural.h} → {targetW} × {targetH} px
                </div>
                <div className="mt-1 font-mono text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
                  {formatBytes(origSize)} → {formatBytes(result.size)} ·{' '}
                  {extOf(result.mime).toUpperCase()}
                  {result.size < origSize
                    ? ` · ${Math.round((1 - result.size / origSize) * 100)}% ${L('smaller', 'smaller')}`
                    : ''}
                </div>
              </div>
              <button type="button" onClick={download} className="btn btn-primary text-sm">
                {L('download', 'Download')} {targetW}×{targetH}
              </button>
            </div>
          )}
        </div>
      )}

      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        {L('noteText', '🔒 100% client-side — resizing happens locally in an in-browser canvas with high-quality smoothing. The size shown is the real encoded output, measured with')} <code>canvas.toBlob</code>.
      </p>
    </div>
  )
}
