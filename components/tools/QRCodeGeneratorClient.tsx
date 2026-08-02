'use client'

import { useState, useEffect, useRef } from 'react'
import QRCode from 'qrcode'

type QRMode = 'text' | 'url' | 'wifi'

interface WifiCreds {
  ssid: string
  password: string
  encryption: 'WPA' | 'WEP' | 'nopass'
}

const PRESET_URLS = ['https://example.com', 'mailto:hello@example.com', 'tel:+1234567890']

export function QRCodeGeneratorClient() {
  const [mode, setMode] = useState<QRMode>('url')
  const [text, setText] = useState('https://example.com')
  const [urlInput, setUrlInput] = useState('https://example.com')
  const [wifi, setWifi] = useState<WifiCreds>({ ssid: '', password: '', encryption: 'WPA' })
  const [size, setSize] = useState(256)
  const [fgColor, setFgColor] = useState('#000000')
  const [bgColor, setBgColor] = useState('#ffffff')
  const [dataUrl, setDataUrl] = useState('')
  const [error, setError] = useState('')
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // 根据当前模式计算要编码的内容
  const content = (() => {
    if (mode === 'text') return text
    if (mode === 'url') return urlInput
    // wifi 模式:WIFI:T:WPA;S:mynetwork;P:mypass;;
    if (!wifi.ssid) return ''
    return `WIFI:T:${wifi.encryption};S:${escapeWifi(wifi.ssid)};P:${escapeWifi(wifi.password)};;`
  })()

  // 内容或样式变化时重新生成
  useEffect(() => {
    if (!content) {
      setDataUrl('')
      setError('')
      return
    }
    const opts = {
      width: size,
      margin: 2,
      color: { dark: fgColor, light: bgColor },
      errorCorrectionLevel: 'M' as const,
    }
    QRCode.toDataURL(content, opts)
      .then((url) => {
        setDataUrl(url)
        setError('')
      })
      .catch((e) => setError(String(e)))
  }, [content, size, fgColor, bgColor])

  // 同时也绘制到 canvas(用于高质量 PNG 下载)
  useEffect(() => {
    if (!content || !canvasRef.current) return
    const opts = {
      width: Math.max(size, 512), // 下载用高分辨率
      margin: 2,
      color: { dark: fgColor, light: bgColor },
      errorCorrectionLevel: 'M' as const,
    }
    QRCode.toCanvas(canvasRef.current, content, opts).catch((e) => setError(String(e)))
  }, [content, fgColor, bgColor, size])

  const handleDownload = () => {
    if (!canvasRef.current) return
    const link = document.createElement('a')
    link.download = 'qrcode.png'
    link.href = canvasRef.current.toDataURL('image/png')
    link.click()
  }

  return (
    <div className="space-y-6">
      {/* 模式切换 */}
      <div className="flex flex-wrap gap-2">
        {(['url', 'text', 'wifi'] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={`rounded-lg px-4 py-2 text-sm font-medium capitalize transition ${
              mode === m
                ? 'bg-brand-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {m === 'url' ? 'URL / Link' : m === 'wifi' ? 'WiFi' : 'Text'}
          </button>
        ))}
      </div>

      {/* 输入区(根据模式) */}
      {mode === 'url' && (
        <div>
          <label htmlFor="url-input" className="mb-2 block text-sm font-medium text-slate-700">
            Website URL
          </label>
          <input
            id="url-input"
            type="text"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            placeholder="https://your-website.com"
            className="w-full rounded-lg border border-slate-300 p-3 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          />
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="text-xs text-slate-400">Quick:</span>
            {PRESET_URLS.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setUrlInput(p)}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-600 hover:border-brand-300 hover:bg-brand-50 sm:text-sm"
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      )}

      {mode === 'text' && (
        <div>
          <label htmlFor="text-input" className="mb-2 block text-sm font-medium text-slate-700">
            Text to encode
          </label>
          <textarea
            id="text-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Any text..."
            rows={3}
            className="w-full rounded-lg border border-slate-300 p-3 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          />
        </div>
      )}

      {mode === 'wifi' && (
        <div className="space-y-3">
          <div>
            <label htmlFor="ssid" className="mb-1.5 block text-sm font-medium text-slate-700">
              Network name (SSID)
            </label>
            <input
              id="ssid"
              type="text"
              value={wifi.ssid}
              onChange={(e) => setWifi({ ...wifi, ssid: e.target.value })}
              placeholder="MyWiFi"
              className="w-full rounded-lg border border-slate-300 p-3 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
            />
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label htmlFor="wifi-pass" className="mb-1.5 block text-sm font-medium text-slate-700">
                Password
              </label>
              <input
                id="wifi-pass"
                type="text"
                value={wifi.password}
                onChange={(e) => setWifi({ ...wifi, password: e.target.value })}
                placeholder="••••••••"
                className="w-full rounded-lg border border-slate-300 p-3 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
              />
            </div>
            <div>
              <label htmlFor="enc" className="mb-1.5 block text-sm font-medium text-slate-700">
                Encryption
              </label>
              <select
                id="enc"
                value={wifi.encryption}
                onChange={(e) => setWifi({ ...wifi, encryption: e.target.value as WifiCreds['encryption'] })}
                className="w-full rounded-lg border border-slate-300 bg-white p-3 shadow-sm outline-none focus:border-brand-500"
              >
                <option value="WPA">WPA / WPA2</option>
                <option value="WEP">WEP</option>
                <option value="nopass">No password</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* 样式选项 */}
      <div className="grid grid-cols-1 gap-4 rounded-lg bg-slate-50 p-4 sm:grid-cols-3">
        <div>
          <label htmlFor="size" className="mb-1.5 block text-xs font-medium text-slate-600">
            Preview size
          </label>
          <select
            id="size"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-brand-500 sm:px-2 sm:py-1.5"
          >
            <option value={192}>Small (192px)</option>
            <option value={256}>Medium (256px)</option>
            <option value={384}>Large (384px)</option>
          </select>
        </div>
        <div>
          <label htmlFor="fg" className="mb-1.5 block text-xs font-medium text-slate-600">
            Foreground
          </label>
          <input
            id="fg"
            type="color"
            value={fgColor}
            onChange={(e) => setFgColor(e.target.value)}
            className="h-9 w-full cursor-pointer rounded-md border border-slate-300"
          />
        </div>
        <div>
          <label htmlFor="bg" className="mb-1.5 block text-xs font-medium text-slate-600">
            Background
          </label>
          <input
            id="bg"
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            className="h-9 w-full cursor-pointer rounded-md border border-slate-300"
          />
        </div>
      </div>

      {/* 预览 + 下载 */}
      <div className="flex flex-col items-center gap-4 rounded-lg border-2 border-dashed border-slate-200 p-6">
        {error ? (
          <p className="text-sm text-red-500">{error}</p>
        ) : dataUrl ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={dataUrl}
              alt="Generated QR code"
              width={size}
              height={size}
              className="rounded-lg"
            />
            <button type="button" onClick={handleDownload} className="btn btn-primary">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PNG
            </button>
          </>
        ) : (
          <p className="text-sm text-slate-400">
            {mode === 'wifi' ? 'Enter a network name to generate the code' : 'Enter content to generate a QR code'}
          </p>
        )}
      </div>

      {/* 隐藏的高分辨率 canvas,用于下载 */}
      <canvas ref={canvasRef} className="hidden" />

      <p className="rounded-md bg-slate-50 p-3 text-xs text-slate-500">
        🔒 QR codes are generated locally in your browser. Your data is never uploaded to any server.
      </p>
    </div>
  )
}

/** 转义 WiFi 字段里的特殊字符(按 QR 码 WiFi 格式规范) */
function escapeWifi(s: string): string {
  return s.replace(/([\\;,:"])/g, '\\$1')
}
