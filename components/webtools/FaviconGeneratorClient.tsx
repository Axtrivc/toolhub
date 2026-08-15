'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * Favicon Generator —— 纯前端 Canvas 剪裁 + 多尺寸导出
 *
 * 用户上传图片 → 居中正方形裁剪 → 用 canvas 缩放到 16/32/180 等尺寸 → toBlob 导出 PNG。
 * 100% 本地,图片不离开浏览器。
 */

interface SizedIcon {
  size: number
  label: string
  desc: string
}

const SIZES: SizedIcon[] = [
  { size: 16, label: '16×16', desc: 'Browser tab (classic)' },
  { size: 32, label: '32×32', desc: 'Retina tab & taskbar' },
  { size: 48, label: '48×48', desc: 'Windows shortcut icon' },
  { size: 180, label: '180×180', desc: 'Apple Touch Icon (iOS)' },
  { size: 192, label: '192×192', desc: 'Android home screen (PWA)' },
  { size: 512, label: '512×512', desc: 'Splash screen & app stores (PWA)' },
]

/** 把图片画成正方形居中裁剪后的 canvas(源图 → cover 到 target×target) */
function drawSquare(canvas: HTMLCanvasElement, img: HTMLImageElement, target: number) {
  canvas.width = target
  canvas.height = target
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  ctx.clearRect(0, 0, target, target)
  ctx.imageSmoothingEnabled = true
  ctx.imageSmoothingQuality = 'high'

  // cover:以较短边为基准裁剪出正方形源区域
  const srcW = img.naturalWidth
  const srcH = img.naturalHeight
  const side = Math.min(srcW, srcH)
  const sx = (srcW - side) / 2
  const sy = (srcH - side) / 2
  ctx.drawImage(img, sx, sy, side, side, 0, 0, target, target)
}

export function FaviconGeneratorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('favicon-generator', locale, key, fb)

  const [imgSrc, setImgSrc] = useState<string>('')
  const [imgName, setImgName] = useState<string>('favicon')
  const [error, setError] = useState<string>('')
  const imgRef = useRef<HTMLImageElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  // 各尺寸预览 dataURL(图片加载完成后生成,见下方 effect)
  const [previews, setPreviews] = useState<{ size: number; dataUrl: string }[]>([])

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
      setImgName(file.name.replace(/\.[^.]+$/, '') || 'favicon')
    }
    reader.onerror = () => setError(L('errCouldNotRead', 'Could not read the file.'))
    reader.readAsDataURL(file)
  }, [locale])

  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (file) handleFile(file)
    },
    [handleFile],
  )

  // 拖拽上传
  const [dragging, setDragging] = useState(false)
  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setDragging(false)
      const file = e.dataTransfer.files?.[0]
      if (file) handleFile(file)
    },
    [handleFile],
  )

  // 图片加载完成后存到 ref,并生成各尺寸预览
  // (预览必须在这里生成:onload 是异步的,若在 render 期读 imgRef 会拿到旧图/空图;
  //  cancelled 防快速换图时旧图 onload 回写;解码失败或尺寸为 0 时必须报错,
  //  否则 drawSquare 的 side=0 会静默导出一张空白 PNG)
  useEffect(() => {
    if (!imgSrc) {
      imgRef.current = null
      setPreviews([])
      return
    }
    let cancelled = false
    const img = new Image()
    const fail = (msg: string) => {
      if (cancelled) return
      imgRef.current = null
      setPreviews([])
      setError(msg)
    }
    img.onload = () => {
      if (cancelled) return
      if (img.naturalWidth < 1 || img.naturalHeight < 1) {
        fail(L('errImageEmpty', 'The image has no usable dimensions (empty or broken file).'))
        return
      }
      imgRef.current = img
      const tmp = document.createElement('canvas')
      setPreviews(
        SIZES.map((s) => {
          drawSquare(tmp, img, s.size)
          return { size: s.size, dataUrl: tmp.toDataURL('image/png') }
        }),
      )
    }
    img.onerror = () => fail(L('errDecodeImage', 'Could not decode the image file.'))
    img.src = imgSrc
    return () => {
      cancelled = true
    }
  }, [imgSrc, locale])

  // 导出指定尺寸的 PNG
  const exportSize = useCallback(
    (size: number) => {
      const img = imgRef.current
      const canvas = canvasRef.current
      if (!img || !canvas) return
      drawSquare(canvas, img, size)
      canvas.toBlob((blob) => {
        if (!blob) return
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${imgName}-${size}x${size}.png`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
      }, 'image/png')
    },
    [imgName],
  )

  // 一键导出全部尺寸
  const exportAll = useCallback(() => {
    SIZES.forEach((s, i) => {
      // 错开执行,避免多个 a[download] 在同一 tick 被浏览器拦截
      setTimeout(() => exportSize(s.size), i * 250)
    })
  }, [exportSize])

  return (
    <div className="space-y-5">
      {/* 隐藏 canvas,导出时复用 */}
      <canvas ref={canvasRef} className="hidden" />

      {/* 上传区 */}
      {!imgSrc && (
        <label
          htmlFor="favicon-upload"
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
            {L('uploadHint', 'PNG, JPG, GIF, or WebP — recommended ≥ 256×256')}
          </span>
          <input
            id="favicon-upload"
            type="file"
            accept="image/*"
            onChange={onInputChange}
            className="hidden"
          />
        </label>
      )}

      {/* 错误提示 */}
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          ⚠️ {error}
        </div>
      )}

      {/* 已上传:预览 + 导出 */}
      {imgSrc && (
        <div className="space-y-5">
          {/* 源图 + 重选 */}
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imgSrc}
              alt={L('uploadedSourceAlt', 'Uploaded source')}
              width={80}
              height={80}
              className="h-20 w-20 rounded-lg border object-cover"
              style={{ borderColor: 'rgb(var(--border))' }}
            />
            <div className="flex-1">
              <div className="text-sm font-medium" style={{ color: 'rgb(var(--text))' }}>
                {imgName}
              </div>
              <div className="text-xs" style={{ color: 'rgb(var(--text-subtle))' }}>
                {L('croppedNote', 'Image cropped to a centered square, then scaled to each size.')}
              </div>
            </div>
            <label
              htmlFor="favicon-reupload"
              className="btn btn-secondary cursor-pointer text-xs"
            >
              {L('change', 'Change')}
              <input
                id="favicon-reupload"
                type="file"
                accept="image/*"
                onChange={onInputChange}
                className="hidden"
              />
            </label>
          </div>

          {/* 各尺寸预览卡 */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {SIZES.map((s) => {
              const preview = previews.find((p) => p.size === s.size)
              return (
                <div
                  key={s.size}
                  className="flex flex-col items-center rounded-lg border p-4 text-center"
                  style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }}
                >
                  <div className="flex h-24 w-full items-center justify-center">
                    {preview ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={preview.dataUrl}
                        alt={`${s.label}${L('previewWord', ' preview')}`}
                        width={Math.min(s.size, 64)}
                        height={Math.min(s.size, 64)}
                        style={{ width: Math.min(s.size, 64), height: Math.min(s.size, 64) }}
                        className="image-render-pixel"
                      />
                    ) : (
                      <span className="text-xs text-slate-400">…</span>
                    )}
                  </div>
                  <div className="mt-2 text-sm font-semibold" style={{ color: 'rgb(var(--text))' }}>
                    {s.label}
                  </div>
                  <div className="text-[11px]" style={{ color: 'rgb(var(--text-subtle))' }}>
                    {L(`sizeDesc.${s.size}`, s.desc)}
                  </div>
                  <button
                    type="button"
                    onClick={() => exportSize(s.size)}
                    className="btn btn-secondary mt-3 w-full text-xs"
                  >
                    {L('downloadPng', 'Download PNG')}
                  </button>
                </div>
              )
            })}
          </div>

          {/* 一键导出全部 */}
          <div className="flex justify-center">
            <button type="button" onClick={exportAll} className="btn btn-primary text-sm">
              {L('downloadAllSizes', 'Download All Sizes')}
            </button>
          </div>
        </div>
      )}

      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        {L('noteIntro', '🔒 100% client-side — your image is loaded into an in-browser canvas and exported via ')}
        <code>canvas.toBlob</code>
        {L('noteOutro', '. It never leaves your device.')}
      </p>
    </div>
  )
}
