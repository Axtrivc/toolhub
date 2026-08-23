'use client'

import { useState } from 'react'
import { CopyButton } from './CopyButton'
import { SITE_URL } from '@/lib/constants'
import type { ToolMeta } from '@/lib/tools'
import { useApp } from './providers/AppProviders'
import { t, getToolName } from '@/lib/i18n'

/**
 * 「嵌入此工具」区块 —— 让博主/站长复制 iframe 代码嵌入自己的文章,
 * 为本站带来自然的站外反向链接(backlinks),提升域名权重(DA)。
 *
 * iframe 指向工具自身页面,所有工具自动可用;嵌入者可自行调整 width/height。
 * 仅在工具页(非嵌入态)显示;默认折叠,点击展开代码框,避免干扰主体验。
 *
 * 本地化:可见文案走 dict;iframe 代码片段内的 title 保留英文工具名
 * (代码产物,跨站点语义稳定)。en 回退英文(SSR 恒英文)。
 */
export function EmbedTool({ tool }: { tool: ToolMeta }) {
  const [open, setOpen] = useState(false)
  const { locale } = useApp()

  const embedUrl = `${SITE_URL}/tools/${tool.slug}/`
  // snippet 是代码产物:title 用英文 tool.name,保证嵌入语义跨语言稳定。
  // name 经 HTML 属性转义后拼入,防止工具名含双引号时产出畸形 HTML 片段。
  const escapeAttr = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  const snippet = `<iframe src="${escapeAttr(embedUrl)}" title="${escapeAttr(tool.name)}" width="100%" height="600" style="border:0;border-radius:8px;max-width:760px" loading="lazy"></iframe>`
  const name = getToolName(locale, tool.slug, tool.name)

  return (
    <section className="mt-10 max-w-3xl">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-lg border px-4 py-3 text-left text-sm transition hover:opacity-80"
        style={{
          borderColor: 'rgb(var(--border))',
          backgroundColor: 'rgb(var(--bg-card))',
          color: 'rgb(var(--text))',
        }}
        aria-expanded={open}
      >
        <span>
          <strong>{t(locale, 'embedTitle')}</strong>
          <span className="ml-2" style={{ color: 'rgb(var(--text-subtle))' }}>
            {t(locale, 'embedSubtitle')}
          </span>
        </span>
        <span aria-hidden="true" style={{ color: 'rgb(var(--text-subtle))' }}>
          {open ? '−' : '+'}
        </span>
      </button>

      {open && (
        <div
          className="mt-2 rounded-lg border p-4"
          style={{ borderColor: 'rgb(var(--border))', backgroundColor: 'rgb(var(--bg-card))' }}
        >
          <p className="mb-3 text-sm" style={{ color: 'rgb(var(--text-muted))' }}>
            {t(locale, 'embedBody', { name })}
          </p>
          <pre
            className="overflow-x-auto rounded-md p-3 text-xs"
            style={{
              backgroundColor: 'rgb(var(--bg))',
              color: 'rgb(var(--text))',
              border: '1px solid rgb(var(--border))',
            }}
          >
            <code>{snippet}</code>
          </pre>
          <div className="mt-3">
            <CopyButton value={snippet} label={t(locale, 'embedCopyLabel')} />
          </div>
        </div>
      )}
    </section>
  )
}
