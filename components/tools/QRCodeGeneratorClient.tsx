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

// 扫码可靠度阈值(WCAG 相对亮度比值):低于该对比度多数解码器难以稳定二值化
const MIN_SCAN_CONTRAST_RATIO = 3

// 高对比安全配色快捷板:全部为「深色码 / 浅色底」的常见稳妥组合(纯颜色值,无需本地化)
const COLOR_PRESETS: Array<{ fg: string; bg: string }> = [
  { fg: '#000000', bg: '#ffffff' },
  { fg: '#1e3a8a', bg: '#ffffff' },
  { fg: '#14532d', bg: '#ffffff' },
  { fg: '#701a37', bg: '#ffffff' },
  { fg: '#334155', bg: '#f1f5f9' },
]

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
  // WiFi 串反向解析的一次性提示:kind==='ok' 成功填充 / 'err' 有 WIFI: 前缀但结构坏
  const [wifiStatus, setWifiStatus] = useState<{ kind: 'ok' | 'err'; text: string } | null>(null)
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

  // ── 扫码可靠性评估(WCAG 相对亮度)──
  // 多数解码器二值化时默认「深色模块在浅色背景上」:
  //   (a) 前景相对亮度高于背景(反色码)→ 视为不可靠;
  //   (b) fg/bg 对比度比值 < MIN_SCAN_CONTRAST_RATIO → 难以稳定二值化。
  // fg==bg 已由生成步骤硬拦截,此处只做非阻断的 amber 软提示,避免重复报警。
  const scanUnreliable = (() => {
    if (fgColor.toLowerCase() === bgColor.toLowerCase()) return false
    const lf = relLuminance(fgColor)
    const lb = relLuminance(bgColor)
    const ratio = (Math.max(lf, lb) + 0.05) / (Math.min(lf, lb) + 0.05)
    return lf > lb || ratio < MIN_SCAN_CONTRAST_RATIO
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

  // WiFi 表单项的手动更新通道:任何手动改动都撤销「粘贴解析成功」的一次性提示
  const updateWifi = (patch: Partial<WifiCreds>) => {
    setWifi((prev) => ({ ...prev, ...patch }))
    setWifiStatus(null)
  }

  // 切换输入模式时同样清掉一次性解析提示
  const handleModeSwitch = (m: QRMode) => {
    setMode(m)
    setWifiStatus(null)
  }

  return (
    <div className="space-y-6">
      {/* 模式切换 */}
      <div className="flex flex-wrap gap-2">
        {(['url', 'text', 'wifi'] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => handleModeSwitch(m)}
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
              onChange={(e) => {
                const v = e.target.value
                // 粘贴了整串 WIFI: 标准配置串 → 反向解析回填四个表单项。
                // 需至少含一个 ';' 才尝试解析,避免手工逐字输入 "WIFI:" 时过早误报格式错误;
                // 前缀大小写容错(规范为大写,但常见导出小写亦接受)。
                if (/^wifi:/i.test(v) && v.includes(';')) {
                  const parsed = parseWifiQrString(v)
                  if (parsed) {
                    setWifi(parsed)
                    setWifiStatus({ kind: 'ok', text: L('wifiParsed', 'Recognized WiFi configuration and filled it in.') })
                  } else {
                    setWifiStatus({ kind: 'err', text: L('wifiBadFormat', 'That looks like a WiFi QR string, but it could not be parsed. Please check its format.') })
                  }
                  return
                }
                updateWifi({ ssid: v })
              }}
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
                onChange={(e) => updateWifi({ password: e.target.value })}
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
                onChange={(e) => updateWifi({ encryption: e.target.value as WifiCreds['encryption'] })}
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
              onChange={(e) => updateWifi({ hidden: e.target.checked })}
              className="h-4 w-4 cursor-pointer shrink-0 rounded"
              style={{ accentColor: 'rgb(var(--primary))' }}
            />
            {L('hiddenNetwork', 'Hidden network')}
          </label>
          {/* 粘贴 WiFi 串解析的一次性提示(role="status" 隐含 aria-live=polite,显式声明以兜底) */}
          {wifiStatus && (
            <p
              role="status"
              aria-live="polite"
              className={`rounded-md px-3 py-2 text-xs font-medium ${
                wifiStatus.kind === 'ok'
                  ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300'
                  : 'bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-300'
              }`}
            >
              {wifiStatus.text}
            </p>
          )}
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
          <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
            {L('sizeHint', 'Downloads are always rendered in high resolution (at least 512 px); this option only scales the on-screen preview.')}
          </p>
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
        {/* 高对比安全配色快捷板:一键同时设置 fg/bg;颜色值即通用 aria-label */}
        <div className="sm:col-span-4">
          <p id="qr-preset-label" className="mb-1.5 text-xs font-medium text-slate-600 dark:text-slate-400">
            {L('presetSwatches', 'Quick palettes')}
          </p>
          <div className="flex flex-wrap gap-2" role="group" aria-labelledby="qr-preset-label">
            {COLOR_PRESETS.map((p) => (
              <button
                key={`${p.fg}-${p.bg}`}
                type="button"
                onClick={() => {
                  setFgColor(p.fg)
                  setBgColor(p.bg)
                }}
                title={`${p.fg} / ${p.bg}`}
                aria-label={`${p.fg} / ${p.bg}`}
                className="rounded-full border border-slate-200 p-1.5 transition hover:scale-110 hover:border-slate-400 dark:border-slate-700 dark:hover:border-slate-500"
              >
                <span
                  className="block h-5 w-5 rounded-full ring-1 ring-black/10"
                  style={{ backgroundImage: `linear-gradient(135deg, ${p.fg} 50%, ${p.bg} 50%)` }}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 扫码可靠性软提示:非阻断,反色或低对比时给出可扫配色建议,并提供一键反转。
          role="status" 让读屏器礼貌播报新增提示。 */}
      {scanUnreliable && (
        <div
          role="status"
          className="flex flex-wrap items-center justify-between gap-3 rounded-lg border p-3 text-sm text-amber-800 dark:text-amber-300"
          style={{ backgroundColor: 'rgba(245, 158, 11, 0.08)', borderColor: 'rgba(245, 158, 11, 0.35)' }}
        >
          <span className="flex items-center gap-2">
            <svg aria-hidden="true" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M10.29 3.86l-8.03 13.92A1.99 1.99 0 003.96 21h16.08a1.99 1.99 0 001.7-3.22L13.71 3.86a2 2 0 00-3.42 0z" />
            </svg>
            {L('contrastWarn', 'Scanners generally rely on a dark code on a light background — this color combination may not scan reliably.')}
          </span>
          <button type="button" onClick={() => { setFgColor(bgColor); setBgColor(fgColor) }} className="btn btn-secondary shrink-0 px-3 py-1.5 text-xs">
            <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
            {L('invertColors', 'Invert colors')}
          </button>
        </div>
      )}

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

/** 还原 WiFi 字段里的转义对(规范:\; \: \, \" \\;其余 \x 序列原样保留以容忍不规范生成器) */
function unescapeWifi(s: string): string {
  return s.replace(/\\([\\;,:"])/g, '$1')
}

/**
 * 解析标准 WiFi QR 配置串(WIFI: 格式),成功返回完整凭据、结构坏返回 null。
 * 规范要点:
 * - 字段以「未转义的 ;」分隔;'\' 起始的两字符转义对是原子,切分时不可拆开;
 * - 取值统一做转义还原,S/P 值可含未转义的普通字符;
 * - T 缺省按 nopass 处理,但带了 P 时以实际为准呈现为 WPA;
 * - 结构校验失败一律拒绝填充:缺 S、未知 T 值、加密网络无 P 段、同键重复(歧义)。
 */
function parseWifiQrString(raw: string): WifiCreds | null {
  const s = raw.trim()
  if (!/^wifi:/i.test(s)) return null // 非 WIFI 串不触发解析
  const body = s.slice('wifi:'.length)

  // 第一遍:按未转义 ';' 切字段('\' 后一字符连同反斜杠整体保留)
  const fields: string[] = []
  let buf = ''
  for (let i = 0; i < body.length; i++) {
    const ch = body[i]
    if (ch === '\\' && i + 1 < body.length) {
      buf += ch + body[i + 1]
      i++
    } else if (ch === ';') {
      fields.push(buf)
      buf = ''
    } else {
      buf += ch
    }
  }
  fields.push(buf) // 规范尾 ";;" 会留空段,下面跳过

  let ssid: string | null = null
  let password: string | null = null
  let tRaw: string | null = null
  let hidden = false
  const seen = new Set<string>()
  for (const f of fields) {
    if (!f) continue
    const ci = f.indexOf(':')
    if (ci <= 0) continue // 无键或空键的字段:忽略,不当致命错误
    const key = f.slice(0, ci).toUpperCase()
    if (key.length !== 1) continue // 忽略未知的扩展字段
    if (seen.has(key)) return null // 同键重复 → 歧义,拒绝填充
    seen.add(key)
    const val = f.slice(ci + 1)
    switch (key) {
      case 'S':
        ssid = unescapeWifi(val)
        break
      case 'P':
        password = unescapeWifi(val)
        break
      case 'T':
        tRaw = val.trim().toLowerCase()
        break
      case 'H':
        hidden = val.trim().toLowerCase() === 'true'
        break
      default:
        break // 其余单字母键照旧忽略
    }
  }

  if (!ssid) return null // 无 SSID 段,结构性不完整

  // T 缺省为 nopass;但显式带密码说明并非开放网络,按最常见的 WPA 呈现供用户校正
  let encryption: WifiCreds['encryption']
  if (tRaw === null || tRaw === '') {
    encryption = password ? 'WPA' : 'nopass'
  } else if (tRaw === 'wpa' || tRaw === 'wep' || tRaw === 'nopass') {
    encryption = tRaw === 'wpa' ? 'WPA' : tRaw === 'wep' ? 'WEP' : 'nopass'
  } else {
    return null // 未知的加密类型值
  }
  if (encryption !== 'nopass' && password === null) return null // 加密网络缺 P 段

  return {
    ssid,
    password: encryption === 'nopass' ? '' : password ?? '',
    encryption,
    hidden,
  }
}

/**
 * WCAG 相对亮度:sRGB 各通道线性化后按感知权重加权。
 * 返回值域 [0,1],白≈1 黑=0;用于估算「深码浅底」的可扫描性。
 */
function relLuminance(hex: string): number {
  const m = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(hex.trim())
  if (!m) return 0
  const h = m[1]
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h
  const int = parseInt(full, 16)
  const channels = [(int >> 16) & 255, (int >> 8) & 255, int & 255]
  const [r, g, b] = channels.map((c) => {
    const v = c / 255
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}
