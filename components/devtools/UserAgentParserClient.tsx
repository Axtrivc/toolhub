'use client'

import { useState, useEffect, useMemo } from 'react'
import { CopyButton } from '@/components/CopyButton'
import { ResultCard } from '@/components/calculator/CalculatorField'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * User-Agent Parser —— 纯正则 UA 解析(浏览器/引擎/OS/设备/Bot)
 *
 * navigator.userAgent 只在 useEffect / 按钮事件里读取,保证 SSG 预渲染安全
 * (初始 text 为空串,预渲染输出与客户端首帧一致)。
 * 解析顺序敏感:Edge/Opera/Samsung 的 UA 都含 "Chrome",必须先于 Chrome 匹配;
 * Android/iOS UA 含 "Linux"/"Mac OS X" 字样,必须先于桌面 OS 匹配。
 */

interface UaResult {
  browser: string
  browserVersion: string
  engine: string
  os: string
  osVersion: string
  deviceType: 'desktop' | 'mobile' | 'tablet'
  isBot: boolean
  botName: string | null
  userAgent: string
}

function parseUserAgent(ua: string): UaResult {
  let m: RegExpMatchArray | null

  // 常见爬虫
  const botMatch = ua.match(
    /(Googlebot|Bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|Applebot|facebookexternalhit|Twitterbot|LinkedInBot|GPTBot|ClaudeBot|AhrefsBot|SemrushBot|MJ12bot|DotBot)/i,
  )

  // 浏览器:Edge / Opera / Samsung 必须先于 Chrome / Safari
  let browser = 'Unknown'
  let browserVersion = ''
  if ((m = ua.match(/Edg(?:e|A|iOS)?\/([\d.]+)/))) {
    browser = 'Microsoft Edge'
    browserVersion = m[1]
  } else if ((m = ua.match(/OPR\/([\d.]+)/)) || (m = ua.match(/Opera\/([\d.]+)/))) {
    browser = 'Opera'
    browserVersion = m[1]
  } else if ((m = ua.match(/SamsungBrowser\/([\d.]+)/))) {
    browser = 'Samsung Internet'
    browserVersion = m[1]
  } else if ((m = ua.match(/Firefox\/([\d.]+)/))) {
    browser = 'Mozilla Firefox'
    browserVersion = m[1]
  } else if ((m = ua.match(/Chrome\/([\d.]+)/))) {
    browser = 'Google Chrome'
    browserVersion = m[1]
  } else if ((m = ua.match(/Version\/([\d.]+)[^)]*Safari/))) {
    browser = 'Safari'
    browserVersion = m[1]
  } else if ((m = ua.match(/MSIE ([\d.]+)/))) {
    browser = 'Internet Explorer'
    browserVersion = m[1]
  } else if (ua.includes('Trident') && (m = ua.match(/rv:([\d.]+)/))) {
    browser = 'Internet Explorer'
    browserVersion = m[1]
  }

  // 渲染引擎
  let engine = 'Unknown'
  if (ua.includes('Trident')) engine = 'Trident'
  else if (/Edge\//.test(ua)) engine = 'EdgeHTML'
  else if (/Gecko\/\d/.test(ua) && !/like Gecko/.test(ua) && !ua.includes('AppleWebKit')) engine = 'Gecko'
  else if (ua.includes('AppleWebKit')) {
    engine = /Chrome\/|Edg|OPR\/|SamsungBrowser/.test(ua) ? 'Blink' : 'WebKit'
  }

  // 操作系统:移动平台先于桌面关键字
  let os = 'Unknown'
  let osVersion = ''
  if ((m = ua.match(/Windows NT ([\d.]+)/))) {
    os = 'Windows'
    const map: Record<string, string> = { '10.0': '10/11', '6.3': '8.1', '6.2': '8', '6.1': '7', '6.0': 'Vista', '5.1': 'XP' }
    osVersion = map[m[1]] ?? m[1]
  } else if ((m = ua.match(/CrOS \S+ ([\d.]+)/))) {
    os = 'ChromeOS'
    osVersion = m[1]
  } else if ((m = ua.match(/(?:iPhone|iPad|iPod)[^)]*?OS ([\d_]+)/))) {
    os = 'iOS'
    osVersion = m[1].replace(/_/g, '.')
  } else if ((m = ua.match(/Android[\s/]([\d.]+)/))) {
    os = 'Android'
    osVersion = m[1]
  } else if ((m = ua.match(/Mac OS X ([\d_]+)/))) {
    os = 'macOS'
    osVersion = m[1].replace(/_/g, '.')
  } else if (/Linux/.test(ua)) {
    os = 'Linux'
  }

  // 设备类型
  let deviceType: UaResult['deviceType'] = 'desktop'
  if (/iPad|Tablet/i.test(ua) || (/Android/.test(ua) && !/Mobile/.test(ua))) deviceType = 'tablet'
  else if (/Mobi|iPhone|iPod|Android|IEMobile|Windows Phone/i.test(ua)) deviceType = 'mobile'

  return {
    browser,
    browserVersion,
    engine,
    os,
    osVersion,
    deviceType,
    isBot: botMatch !== null,
    botName: botMatch?.[1] ?? null,
    userAgent: ua,
  }
}

export function UserAgentParserClient() {
  const { locale } = useApp()
  // 取本地化 UI 串;缺失回退英文(SSR 恒英文)。
  const L = (key: string, fb: string) => tui('user-agent-parser', locale, key, fb)

  const [text, setText] = useState('')

  // 挂载后自动填入当前浏览器 UA(仅 useEffect,避免 hydration 不一致)
  useEffect(() => {
    setText((t) => (t.trim() === '' ? navigator.userAgent : t))
  }, [])

  const parsed = useMemo(() => (text.trim() ? parseUserAgent(text.trim()) : null), [text])
  const json = useMemo(() => (parsed ? JSON.stringify(parsed, null, 2) : ''), [parsed])

  return (
    <div className="space-y-5">
      {/* 输入区 */}
      <div>
        <label htmlFor="ua-input" className="mb-1.5 block text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
          {L('inputLabel', 'User-Agent string')}
        </label>
        <textarea
          id="ua-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          spellCheck={false}
          placeholder="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
          className="w-full rounded-lg border p-4 font-mono text-sm shadow-sm outline-none transition focus:ring-2"
          style={{
            borderColor: 'rgb(var(--border-strong))',
            backgroundColor: 'rgb(var(--bg-card))',
            color: 'rgb(var(--text))',
          }}
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button type="button" onClick={() => setText(navigator.userAgent)} className="btn btn-secondary">
          {L('loadMyUa', 'Load my UA')}
        </button>
      </div>

      {parsed === null ? (
        <p className="rounded-md p-3 text-sm" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
          {L('emptyHint', 'Paste any User-Agent string above, or click')} <strong>{L('loadMyUa', 'Load my UA')}</strong> {L('emptyHintSuffix', 'to parse your current browser.')}
        </p>
      ) : (
        <>
          {/* 概览卡片 */}
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            <ResultCard label={L('browserLabel', 'Browser')} value={parsed.browser} sublabel={parsed.browserVersion ? `v${parsed.browserVersion}` : L('versionUnknown', 'version unknown')} highlight />
            <ResultCard label={L('osLabel', 'Operating System')} value={parsed.os} sublabel={parsed.osVersion || L('versionUnknown', 'version unknown')} />
            <ResultCard
              label={L('deviceTypeLabel', 'Device Type')}
              value={parsed.deviceType[0].toUpperCase() + parsed.deviceType.slice(1)}
              sublabel={parsed.isBot ? `${L('botPrefix', 'Bot:')} ${parsed.botName}` : L('notABot', 'not a known bot')}
            />
            <ResultCard label={L('engineLabel', 'Engine')} value={parsed.engine} />
          </div>

          {/* 爬虫提示 */}
          {parsed.isBot && (
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
              ⚠️ {L('botLooksLike', 'This looks like an automated crawler (')}<strong>{parsed.botName}</strong>{L('botNotHuman', '), not a human visitor.')} {L('botFieldsUnreliable', 'Browser/OS fields in bot UAs often imitate real browsers and may be unreliable.')}
            </div>
          )}

          {/* 完整 JSON */}
          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-sm font-medium" style={{ color: 'rgb(var(--text-muted))' }}>
                {L('parsedResultLabel', 'Parsed result (JSON)')}
              </span>
            </div>
            <pre
              className="w-full overflow-x-auto rounded-lg border p-4 font-mono text-sm shadow-sm"
              style={{
                borderColor: 'rgb(var(--border-strong))',
                backgroundColor: 'rgb(var(--bg-card))',
                color: 'rgb(var(--text))',
              }}
            >
              {json}
            </pre>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <CopyButton value={json} label={L('copyJson', 'Copy JSON')} />
          </div>
        </>
      )}

      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        {L('noteMain', '🔒 Parsing is 100% local — the string never leaves your browser. UA sniffing is heuristic by nature: clients can lie about any field, and Windows 10 vs 11 is intentionally indistinguishable (both report')}{' '}
        <code>Windows NT 10.0</code>{L('noteSuffix', ').')}
      </p>
    </div>
  )
}
