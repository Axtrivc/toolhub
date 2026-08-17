'use client'

import { useState, useMemo, useCallback, type ReactNode } from 'react'
import { CopyButton } from '@/components/CopyButton'
import { LoadSampleButton } from '@/components/LoadSampleButton'
import { useApp } from '@/components/providers/AppProviders'
import { tui } from '@/lib/i18n/tool-l10n'

/**
 * Open Graph & Meta Tag Generator —— 输入标题/描述/图片,实时预览社交分享卡 + 生成 meta 标签
 *
 * 生成:标准 meta(title/description)、Open Graph(og:)、Twitter Card(twitter:)。
 * 预览:模拟 Facebook/LinkedIn 大图卡 + Twitter summary_large_image。
 * 100% 本地,不抓取任何站点。
 */

interface OgInput {
  title: string
  description: string
  url: string
  image: string
  imageAlt: string
  siteName: string
  twitterCard: 'summary_large_image' | 'summary'
}

const SAMPLE: OgInput = {
  title: 'Free Online Tools That Just Work',
  description: '169 fast, privacy-friendly utilities for developers, students, and everyday tasks. No signup, no upload.',
  url: 'https://example.com/blog/free-tools',
  image: 'https://example.com/images/share-card.png',
  imageAlt: 'A preview of the ToolHub homepage with its tool grid',
  siteName: 'Example',
  twitterCard: 'summary_large_image',
}

const inputCls =
  'w-full rounded-lg border p-3 text-sm shadow-sm outline-none transition focus:ring-2'

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

/** 从 URL 提取 host(预览里显示的"站点名"兜底) */
function hostOf(url: string): string {
  try {
    return new URL(url).host.replace(/^www\./, '')
  } catch {
    return url
  }
}

/**
 * 预览图:加载失败时在 React state 里记账并渲染占位元素(而非改 style.display,
 * 那样子 URL 修正后永远不会恢复)。父组件用 key={src} 换图即重置失败态,
 * 逐字符输入 URL 时一旦合法就能恢复显示。
 */
function OgPreviewImage({ src, alt, placeholder }: { src: string; alt: string; placeholder: ReactNode }) {
  const [failed, setFailed] = useState(false)
  if (failed) return <>{placeholder}</>
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className="h-full w-full object-cover" onError={() => setFailed(true)} />
  )
}

export function OpenGraphGeneratorClient() {
  const { locale } = useApp()
  const L = (key: string, fb: string) => tui('open-graph-generator', locale, key, fb)

  const [v, setV] = useState<OgInput>({
    title: '',
    description: '',
    url: '',
    image: '',
    imageAlt: '',
    siteName: '',
    twitterCard: 'summary_large_image',
  })

  const set = useCallback((key: keyof OgInput, val: string) => {
    setV((prev) => ({ ...prev, [key]: val }))
  }, [])

  const handleLoadSample = useCallback(() => setV(SAMPLE), [])

  // 生成 meta 标签
  const metaTags = useMemo(() => {
    const lines: string[] = []
    if (v.title) lines.push(`<title>${escapeHtml(v.title)}</title>`)
    if (v.description) lines.push(`<meta name="description" content="${escapeHtml(v.description)}">`)

    // Open Graph
    if (v.title) lines.push(`<meta property="og:title" content="${escapeHtml(v.title)}">`)
    if (v.description) lines.push(`<meta property="og:description" content="${escapeHtml(v.description)}">`)
    if (v.url) lines.push(`<meta property="og:url" content="${escapeHtml(v.url)}">`)
    if (v.image) {
      lines.push(`<meta property="og:image" content="${escapeHtml(v.image)}">`)
      if (v.imageAlt) lines.push(`<meta property="og:image:alt" content="${escapeHtml(v.imageAlt)}">`)
    }
    if (v.siteName) lines.push(`<meta property="og:site_name" content="${escapeHtml(v.siteName)}">`)
    lines.push(`<meta property="og:type" content="website">`)

    // Twitter Card
    lines.push(`<meta name="twitter:card" content="${v.twitterCard}">`)
    if (v.title) lines.push(`<meta name="twitter:title" content="${escapeHtml(v.title)}">`)
    if (v.description) lines.push(`<meta name="twitter:description" content="${escapeHtml(v.description)}">`)
    if (v.image) {
      lines.push(`<meta name="twitter:image" content="${escapeHtml(v.image)}">`)
      if (v.imageAlt) lines.push(`<meta name="twitter:image:alt" content="${escapeHtml(v.imageAlt)}">`)
    }

    return lines.join('\n')
  }, [v])

  const hasAny = Boolean(v.title || v.description || v.image)
  const host = v.siteName || hostOf(v.url)

  return (
    <div className="space-y-5">
      {/* 输入区 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="og-title" className="mb-1 block text-sm font-medium text-slate-700">
            {L('titleLabel', 'Title')}
          </label>
          <input
            id="og-title"
            type="text"
            value={v.title}
            onChange={(e) => set('title', e.target.value)}
            placeholder={L('titlePlaceholder', 'Your page title')}
            className={inputCls}
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          />
          {/* 实时字符计数:≤60 绿(推荐区间),超出红 */}
          <div
            className="mt-1 text-right font-mono text-[11px]"
            aria-label={L('titleCountAria', 'Title character count (recommended 60 or fewer)')}
            style={{ color: v.title.length <= 60 ? 'rgb(22 163 74)' : 'rgb(220 38 38)' }}
          >
            {v.title.length}/60
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="og-desc" className="mb-1 block text-sm font-medium text-slate-700">
            {L('descriptionLabel', 'Description')}
          </label>
          <textarea
            id="og-desc"
            value={v.description}
            onChange={(e) => set('description', e.target.value)}
            placeholder={L('descPlaceholder', 'A short summary shown under the title')}
            rows={2}
            className={inputCls}
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          />
          {/* 实时字符计数:≤200 绿(推荐上限),超出红 */}
          <div
            className="mt-1 text-right font-mono text-[11px]"
            aria-label={L('descCountAria', 'Description character count (recommended 200 or fewer)')}
            style={{ color: v.description.length <= 200 ? 'rgb(22 163 74)' : 'rgb(220 38 38)' }}
          >
            {v.description.length}/200
          </div>
        </div>
        <div>
          <label htmlFor="og-url" className="mb-1 block text-sm font-medium text-slate-700">
            {L('pageUrlLabel', 'Page URL')}
          </label>
          <input
            id="og-url"
            type="text"
            value={v.url}
            onChange={(e) => set('url', e.target.value)}
            placeholder={L('urlPlaceholder', 'https://example.com/page')}
            className={inputCls}
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          />
        </div>
        <div>
          <label htmlFor="og-site" className="mb-1 block text-sm font-medium text-slate-700">
            {L('siteNameLabel', 'Site Name (optional)')}
          </label>
          <input
            id="og-site"
            type="text"
            value={v.siteName}
            onChange={(e) => set('siteName', e.target.value)}
            placeholder={L('siteNamePlaceholder', 'My Site')}
            className={inputCls}
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="og-image" className="mb-1 block text-sm font-medium text-slate-700">
            {L('imageUrlLabel', 'Image URL')}
          </label>
          <input
            id="og-image"
            type="text"
            value={v.image}
            onChange={(e) => set('image', e.target.value)}
            placeholder={L('imagePlaceholder', 'https://example.com/image.png  (recommended 1200×630)')}
            className={inputCls}
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="og-image-alt" className="mb-1 block text-sm font-medium text-slate-700">
            {L('imageAltLabel', 'Image alt text (optional)')}
          </label>
          <input
            id="og-image-alt"
            type="text"
            value={v.imageAlt}
            onChange={(e) => set('imageAlt', e.target.value)}
            placeholder={L('imageAltPlaceholder', 'Describe the image for screen readers')}
            className={inputCls}
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="og-card" className="mb-1 block text-sm font-medium text-slate-700">
            {L('twitterCardTypeLabel', 'Twitter Card Type')}
          </label>
          <select
            id="og-card"
            value={v.twitterCard}
            onChange={(e) => set('twitterCard', e.target.value)}
            className={inputCls}
            style={{ borderColor: 'rgb(var(--border-strong))', backgroundColor: 'rgb(var(--bg-card))', color: 'rgb(var(--text))' }}
          >
            <option value="summary_large_image">{L('cardLargeOption', 'summary_large_image (large card)')}</option>
            <option value="summary">{L('cardSmallOption', 'summary (small card)')}</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end">
        <LoadSampleButton onLoad={handleLoadSample} variant="compact" />
      </div>

      {/* 实时预览 */}
      {hasAny && (
        <div>
          <h3 className="mb-3 text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{L('livePreview', 'Live Preview')}</h3>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {/* 大图卡(Facebook / LinkedIn / 通用 OG) */}
            {v.twitterCard === 'summary_large_image' && (
              <div className="overflow-hidden rounded-xl border bg-white shadow-sm dark:bg-slate-800" style={{ borderColor: 'rgb(var(--border))' }}>
                <div className="flex aspect-[1.91/1] items-center justify-center bg-slate-100 dark:bg-slate-700">
                  {v.image ? (
                    <OgPreviewImage
                      key={v.image}
                      src={v.image}
                      alt={L('ogPreviewAlt', 'OG preview')}
                      placeholder={<span className="text-xs text-slate-400">{L('noImage', 'No image')}</span>}
                    />
                  ) : (
                    <span className="text-xs text-slate-400">{L('noImage', 'No image')}</span>
                  )}
                </div>
                <div className="px-3 py-2.5">
                  <div className="text-[11px] uppercase text-slate-400">{host}</div>
                  <div className="mt-0.5 line-clamp-2 text-sm font-semibold text-slate-800 dark:text-slate-100">
                    {v.title || L('titlePreviewDefault', 'Your title appears here')}
                  </div>
                  <div className="mt-1 line-clamp-2 text-xs text-slate-500 dark:text-slate-400">
                    {v.description || L('descPreviewDefault', 'Your description appears here')}
                  </div>
                </div>
              </div>
            )}

            {/* Twitter summary 卡(小图) */}
            {v.twitterCard === 'summary' && (
              <div className="flex gap-3 rounded-xl border bg-white p-3 shadow-sm dark:bg-slate-800" style={{ borderColor: 'rgb(var(--border))' }}>
                <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-700">
                  {v.image ? (
                    <OgPreviewImage
                      key={v.image}
                      src={v.image}
                      alt={L('twitterPreviewAlt', 'Twitter preview')}
                      placeholder={<span className="text-[10px] text-slate-400">{L('noImg', 'No img')}</span>}
                    />
                  ) : (
                    <span className="text-[10px] text-slate-400">{L('noImg', 'No img')}</span>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[11px] text-slate-400">{host}</div>
                  <div className="mt-0.5 line-clamp-2 text-sm font-semibold text-slate-800 dark:text-slate-100">
                    {v.title || L('titleDefault', 'Your title')}
                  </div>
                  <div className="mt-0.5 line-clamp-1 text-xs text-slate-500 dark:text-slate-400">
                    {v.description || L('descDefault', 'Your description')}
                  </div>
                </div>
              </div>
            )}

            {/* 第二格:Twitter summary_large_image 卡 */}
            <div className="overflow-hidden rounded-xl border bg-white shadow-sm dark:bg-slate-800" style={{ borderColor: 'rgb(var(--border))' }}>
              <div className="flex aspect-[1.91/1] items-center justify-center bg-slate-100 dark:bg-slate-700">
                {v.image ? (
                  <OgPreviewImage
                    key={v.image}
                    src={v.image}
                    alt={L('twitterLargePreviewAlt', 'Twitter large preview')}
                    placeholder={<span className="text-xs text-slate-400">{L('noImage', 'No image')}</span>}
                  />
                ) : (
                  <span className="text-xs text-slate-400">{L('noImage', 'No image')}</span>
                )}
              </div>
              <div className="px-3 py-2.5">
                <div className="text-[11px] uppercase text-slate-400">{host}</div>
                <div className="mt-0.5 line-clamp-1 text-sm font-semibold text-slate-800 dark:text-slate-100">
                  {v.title || L('titleDefault', 'Your title')}
                </div>
                <div className="mt-0.5 line-clamp-2 text-xs text-slate-500 dark:text-slate-400">
                  {v.description || L('descDefault', 'Your description')}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 生成的 meta 标签 */}
      {hasAny && (
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-semibold" style={{ color: 'rgb(var(--text-muted))' }}>{L('generatedMetaTags', 'Generated Meta Tags')}</span>
            <CopyButton value={metaTags} label={L('copy', 'Copy')} />
          </div>
          <pre
            className="overflow-x-auto rounded-lg border bg-slate-50 p-4 text-xs"
            style={{ borderColor: 'rgb(var(--border))' }}
          >
            <code>{metaTags}</code>
          </pre>
        </div>
      )}

      <p className="rounded-md p-3 text-xs" style={{ backgroundColor: 'rgb(var(--bg-subtle))', color: 'rgb(var(--text-subtle))' }}>
        {L('noteText', '🔒 100% client-side — previews are mocked locally. Paste the generated tags into your page\'s')} <code>&lt;head&gt;</code>.
      </p>
    </div>
  )
}
