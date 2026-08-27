'use client'

import { useState, useEffect, useRef } from 'react'
import QRCode from 'qrcode'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

type QRMode = 'text' | 'url' | 'wifi'
type EclLevel = 'L' | 'M' | 'Q' | 'H'

interface WifiCreds {
  ssid: string
  password: string
  encryption: 'WPA' | 'WEP' | 'nopass'
  hidden: boolean
}

const PRESET_URLS = ['https://example.com', 'mailto:hello@example.com', 'tel:+1234567890']

// 各容错等级的字节模式容量上限(QR version 40 / byte mode):
// L≈2953、M≈2331、Q≈1663、H≈1273 字节,容量按 UTF-8 字节数计(汉字每字 3 字节)
const ECL_BYTE_CAPACITY: Record<EclLevel, number> = { L: 2953, M: 2331, Q: 1663, H: 1273 }

// 主题感知的控件配色(与全站 var 体系一致,避免亮色 slate 配对漂移)
const inputStyle = {
  borderColor: 'rgb(var(--border-strong))',
  backgroundColor: 'rgb(var(--bg-card))',
  color: 'rgb(var(--text))',
}

export function QRCodeGeneratorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('qr-code-generator', locale, key, fb)

  const [mode, setMode] = useState<QRMode>('url')
  const [text, setText] = useState('https://example.com')
  const [urlInput, setUrlInput] = useState('https://example.com')
  const [wifi, setWifi] = useState<WifiCreds>({ ssid: '', password: '', encryption: 'WPA', hidden: false })
  const [size, setSize] = useState(256)
  const [ecl, setEcl] = useState<EclLevel>('M')
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
    // 隐藏网络仅在勾选时写入 H:true; 段
    if (!wifi.ssid) return ''
    const passSeg = wifi.encryption === 'nopass' ? '' : `P:${escapeWifi(wifi.password)};`
    const hiddenSeg = wifi.hidden ? 'H:true;' : ''
    return `WIFI:T:${wifi.encryption};S:${escapeWifi(wifi.ssid)};${passSeg}${hiddenSeg};`
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
    // 前景 = 背景时会生成一张纯色图(肉眼空白、扫描器不可读):提前拦截并提示
    if (fgColor.toLowerCase() === bgColor.toLowerCase()) {
      setDataUrl('')
      setError(L('errSameColor', 'Foreground and background colors cannot be the same.'))
      return
    }
    // 容量按 UTF-8 字节数判定(TextEncoder 编码后计数):M 级 byte 模式约 2331 字节,
    // CJK 每字 3 字节,按字符数判断会漏放行超限内容;超长提前拒绝,避免卡顿
    const byteLen = new TextEncoder().encode(content).length
    const maxBytes = ECL_BYTE_CAPACITY[ecl]
    if (byteLen > maxBytes) {
      setDataUrl('')
      setError(
        `${L('errorTooLong', 'Content is too long for a QR code at this error-correction level. Try shorter input or a lower level.')} (${byteLen}/${maxBytes} bytes)`,
      )
      return
    }
    let cancelled = false
    const opts = {
      width: size,
      margin: 2,
      color: { dark: fgColor, light: bgColor },
      errorCorrectionLevel: ecl,
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
  }, [content, size, ecl, fgColor, bgColor, locale])

  const handleDownload = () => {
    if (!canvasRef.current) return
    const link = document.createElement('a')
    link.download = 'qrcode.png'
    link.href = canvasRef.current.toDataURL('image/png')
    link.click()
  }

  // SVG 下载:QRCode.toString(type:'svg') 输出矢量,与 PNG 下载并列
  const handleDownloadSvg = () => {
    if (!content) return
    QRCode.toString(content, {
      type: 'svg',
      margin: 2,
      width: Math.max(size, 512),
      color: { dark: fgColor, light: bgColor },
      errorCorrectionLevel: ecl,
    })
      .then((svg) => {
        const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' })
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.download = 'qrcode.svg'
        link.href = url
        link.click()
        setTimeout(() => URL.revokeObjectURL(url), 1000)
      })
      .catch(() => {
        setError(L('errGenerate', 'Could not generate the QR code. Please check your input and try again.'))
      })
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
            className={`btn text-sm capitalize ${mode === m ? 'btn-primary' : 'btn-secondary'}`}
          >
            {m === 'url' ? L('modeUrl', 'URL / Link') : m === 'wifi' ? L('modeWifi', 'WiFi') : L('modeText', 'Text')}
          </button>
        ))}
      </div>

      {/* 输入区(根据模式) */}
      {mode === 'url' && (
        <div>
          <label htmlFor="url-input" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
            {L('websiteUrl', 'Website URL')}
          </label>
          <input
            id="url-input"
            type="text"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            placeholder="https://your-website.com"
            className="w-full rounded-lg border p-3 shadow-sm outline-none"
            style={inputStyle}
          />
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="text-xs text-slate-400 dark:text-slate-500">{L('quick', 'Quick:')}</span>
            {PRESET_URLS.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setUrlInput(p)}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-600 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-brand-600 dark:hover:bg-slate-950/40 dark:hover:text-brand-300 sm:text-sm"
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      )}

      {mode === 'text' && (
        <div>
          <label htmlFor="text-input" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
            {L('textToEncode', 'Text to encode')}
          </label>
          <textarea
            id="text-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={L('anyTextPlaceholder', 'Any text...')}
            rows={3}
            className="w-full rounded-lg border p-3 shadow-sm outline-none"
            style={inputStyle}
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
              className="w-full rounded-lg border p-3 shadow-sm outline-none"
              style={inputStyle}
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
                className="w-full rounded-lg border p-3 shadow-sm outline-none"
                style={inputStyle}
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
                className="w-full rounded-lg border p-3 shadow-sm outline-none"
                style={inputStyle}
              >
                <option value="WPA">{L('encWpa', 'WPA / WPA2')}</option>
                <option value="WEP">{L('encWep', 'WEP')}</option>
                <option value="nopass">{L('encNoPass', 'No password')}</option>
              </select>
            </div>
          </div>
          {/* Hidden network:仅勾选时在 WiFi 串里写入 H:true; */}
          <label className="flex cursor-pointer items-center gap-2 text-sm" style={{ color: 'rgb(var(--text-muted))' }}>
            <input
              type="checkbox"
              checked={wifi.hidden}
              onChange={(e) => setWifi({ ...wifi, hidden: e.target.checked })}
              className="h-4 w-4 cursor-pointer shrink-0 rounded"
              style={{ accentColor: 'rgb(var(--primary))' }}
            />
            {L('hiddenNetwork', 'Hidden network')}
          </label>
        </div>
      )}

      {/* 样式选项 */}
      <div className="grid grid-cols-1 gap-4 rounded-lg p-4 sm:grid-cols-4" style={{ backgroundColor: 'rgb(var(--bg-subtle))' }}>
        <div>
          <label htmlFor="ecl" className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-400">
            {L('errorCorrection', 'Error correction')}
          </label>
          <select
            id="ecl"
            value={ecl}
            onChange={(e) => setEcl(e.target.value as EclLevel)}
            className="w-full rounded-lg border px-3 py-2 text-sm shadow-sm outline-none"
            style={inputStyle}
          >
            <option value="L">{L('eclL', 'L — low (~7%)')}</option>
            <option value="M">{L('eclM', 'M — medium (~15%)')}</option>
            <option value="Q">{L('eclQ', 'Q — quartile (~25%)')}</option>
            <option value="H">{L('eclH', 'H — high (~30%)')}</option>
          </select>
        </div>
        <div>
          <label htmlFor="size" className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-400">
            {L('previewSize', 'Preview size')}
          </label>
          <select
            id="size"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            className="w-full rounded-lg border px-3 py-2 text-sm shadow-sm outline-none"
            style={inputStyle}
          >
            <option value={192}>{L('sizeSmall', 'Small (192px)')}</option>
            <option value={256}>{L('sizeMedium', 'Medium (256px)')}</option>
            <option value={384}>{L('sizeLarge', 'Large (384px)')}</option>
          </select>
        </div>
        <div>
          <label htmlFor="fg" className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-400">
            {L('foreground', 'Foreground')}
          </label>
          <input
            id="fg"
            type="color"
            value={fgColor}
            onChange={(e) => setFgColor(e.target.value)}
            className="h-10 w-full cursor-pointer rounded-lg border p-1"
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="bg" className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-400">
            {L('background', 'Background')}
          </label>
          <input
            id="bg"
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            className="h-10 w-full cursor-pointer rounded-lg border p-1"
            style={inputStyle}
          />
        </div>
      </div>

      {/* 预览 + 下载 */}
      <div className="flex min-h-40 flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-slate-200 p-6 dark:border-slate-700">
        {error ? (
          <p role="status" className="text-sm text-red-500 dark:text-red-400">{error}</p>
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
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button type="button" onClick={handleDownload} className="btn btn-primary">
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {L('downloadPng', 'Download PNG')}
              </button>
              <button type="button" onClick={handleDownloadSvg} className="btn btn-secondary">
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {L('downloadSvg', 'Download SVG')}
              </button>
            </div>
          </>
        ) : (
          <p className="text-sm text-slate-400 dark:text-slate-500">
            {mode === 'wifi' ? L('emptyWifi', 'Enter a network name to generate the code') : L('emptyContent', 'Enter content to generate a QR code')}
          </p>
        )}
      </div>

      {/* 隐藏的高分辨率 canvas,用于下载 */}
      <canvas ref={canvasRef} className="hidden" />

      <p
        className="rounded-md p-3 text-xs"
        style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}
      >
        {L('privacyNote', '🔒 QR codes are generated locally in your browser. Your data is never uploaded to any server.')}
      </p>
    </div>
  )
}

/** 转义 WiFi 字段里的特殊字符(按 QR 码 WiFi 格式规范) */
function escapeWifi(s: string): string {
  return s.replace(/([\\;,:"])/g, '\\$1')
}
