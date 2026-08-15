'use client'

import { useState, useEffect, useRef } from 'react'
import QRCode from 'qrcode'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

type QRMode = 'text' | 'url' | 'wifi'

interface WifiCreds {
  ssid: string
  password: string
  encryption: 'WPA' | 'WEP' | 'nopass'
}

const PRESET_URLS = ['https://example.com', 'mailto:hello@example.com', 'tel:+1234567890']

export function QRCodeGeneratorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('qr-code-generator', locale, key, fb)

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
    // 开放网络(T:nopass)按规范整体省略 P: 段,不能输出空的 P:;
    if (!wifi.ssid) return ''
    const passSeg = wifi.encryption === 'nopass' ? '' : `P:${escapeWifi(wifi.password)};`
    return `WIFI:T:${wifi.encryption};S:${escapeWifi(wifi.ssid)};${passSeg};`
  })()

  // 内容或样式变化时重新生成(合并 dataURL + canvas 为一个 effect,避免两个异步
  // promise reject 时对 error 字段的竞争覆盖;同时对内容长度设上限,避免超长文本
  // 触发 QR 矩阵构建长时间阻塞主线程)
  useEffect(() => {
    if (!content) {
      setDataUrl('')
      setError('')
      return
    }
    // M 级纠错下 QR 码容量约 2000-2900 字节;超长内容提前拒绝,避免卡顿
    if (content.length > 2000) {
      setDataUrl('')
      setError(L('errorTooLong', 'Content is too long for a QR code (max ~2000 characters). Try URL or text mode with shorter input.'))
      return
    }
    let cancelled = false
    const opts = {
      width: size,
      margin: 2,
      color: { dark: fgColor, light: bgColor },
      errorCorrectionLevel: 'M' as const,
    }
    QRCode.toDataURL(content, opts)
      .then((url) => {
        if (!cancelled) {
          setDataUrl(url)
          setError('')
        }
      })
      .catch(() => {
        // 不透传库的原始异常文本,统一映射为可读的本地化提示
        if (!cancelled) setError(L('errGenerate', 'Could not generate the QR code. Please check your input and try again.'))
      })
    // canvas 用更高分辨率(用于 PNG 下载)
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, content, { ...opts, width: Math.max(size, 512) }).catch(
        () => {
          if (!cancelled) setError(L('errGenerate', 'Could not generate the QR code. Please check your input and try again.'))
        },
      )
    }
    return () => {
      cancelled = true
    }
  }, [content, size, fgColor, bgColor, locale])

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
            {m === 'url' ? L('modeUrl', 'URL / Link') : m === 'wifi' ? L('modeWifi', 'WiFi') : L('modeText', 'Text')}
          </button>
        ))}
      </div>

      {/* 输入区(根据模式) */}
      {mode === 'url' && (
        <div>
          <label htmlFor="url-input" className="mb-2 block text-sm font-medium text-slate-700">
            {L('websiteUrl', 'Website URL')}
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
            <span className="text-xs text-slate-400">{L('quick', 'Quick:')}</span>
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
            {L('textToEncode', 'Text to encode')}
          </label>
          <textarea
            id="text-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={L('anyTextPlaceholder', 'Any text...')}
            rows={3}
            className="w-full rounded-lg border border-slate-300 p-3 shadow-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
          />
        </div>
      )}

      {mode === 'wifi' && (
        <div className="space-y-3">
          <div>
            <label htmlFor="ssid" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
              {L('networkName', 'Network name (SSID)')}
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
              <label htmlFor="wifi-pass" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
                {L('password', 'Password')}
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
              <label htmlFor="enc" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
                {L('encryption', 'Encryption')}
              </label>
              <select
                id="enc"
                value={wifi.encryption}
                onChange={(e) => setWifi({ ...wifi, encryption: e.target.value as WifiCreds['encryption'] })}
                className="w-full rounded-lg border border-slate-300 bg-white p-3 shadow-sm outline-none focus:border-brand-500"
              >
                <option value="WPA">{L('encWpa', 'WPA / WPA2')}</option>
                <option value="WEP">{L('encWep', 'WEP')}</option>
                <option value="nopass">{L('encNoPass', 'No password')}</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* 样式选项 */}
      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-3" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <div>
          <label htmlFor="size" className="mb-1.5 block text-xs font-medium text-slate-600">
            {L('previewSize', 'Preview size')}
          </label>
          <select
            id="size"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-brand-500 sm:px-2 sm:py-1.5"
          >
            <option value={192}>{L('sizeSmall', 'Small (192px)')}</option>
            <option value={256}>{L('sizeMedium', 'Medium (256px)')}</option>
            <option value={384}>{L('sizeLarge', 'Large (384px)')}</option>
          </select>
        </div>
        <div>
          <label htmlFor="fg" className="mb-1.5 block text-xs font-medium text-slate-600">
            {L('foreground', 'Foreground')}
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
            {L('background', 'Background')}
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
              alt={L('generatedQrAlt', 'Generated QR code')}
              width={size}
              height={size}
              className="rounded-lg"
            />
            <button type="button" onClick={handleDownload} className="btn btn-primary">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {L('downloadPng', 'Download PNG')}
            </button>
          </>
        ) : (
          <p className="text-sm text-slate-400">
            {mode === 'wifi' ? L('emptyWifi', 'Enter a network name to generate the code') : L('emptyContent', 'Enter content to generate a QR code')}
          </p>
        )}
      </div>

      {/* 隐藏的高分辨率 canvas,用于下载 */}
      <canvas ref={canvasRef} className="hidden" />

      <p className="rounded-md bg-slate-50 p-3 text-xs text-slate-500">
        {L('privacyNote', '🔒 QR codes are generated locally in your browser. Your data is never uploaded to any server.')}
      </p>
    </div>
  )
}

/** 转义 WiFi 字段里的特殊字符(按 QR 码 WiFi 格式规范) */
function escapeWifi(s: string): string {
  return s.replace(/([\\;,:"])/g, '\\$1')
}
