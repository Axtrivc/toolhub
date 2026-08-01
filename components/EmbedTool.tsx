'use client'

import { useState } from 'react'
import { CopyButton } from './CopyButton'
import { SITE_URL } from '../next.config'
import type { ToolMeta } from '@/lib/tools'

/**
 * 「嵌入此工具」区块 —— 让博主/站长复制 iframe 代码嵌入自己的文章,
 * 为本站带来自然的站外反向链接(backlinks),提升域名权重(DA)。
 *
 * 策略(Gemini 阶段三):iframe 指向工具自身页面,所有 120 个工具自动可用,
 * 无需为每个工具单独建无 chrome 嵌入路由。嵌入者可自行调整 width/height。
 *
 * 仅在工具页(非嵌入态)显示;默认折叠,点击展开代码框,避免干扰主体验。
 */
export function EmbedTool({ tool }: { tool: ToolMeta }) {
  const [open, setOpen] = useState(false)

  const embedUrl = `${SITE_URL}/tools/${tool.slug}/`
  const snippet = `<iframe src="${embedUrl}" title="${tool.name}" width="100%" height="600" style="border:0;border-radius:8px;max-width:760px" loading="lazy"></iframe>`

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
          <strong>Embed this free tool on your blog</strong>
          <span className="ml-2" style={{ color: 'rgb(var(--text-subtle))' }}>
            copy &amp; paste, no attribution required
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
            Paste this HTML anywhere on your site to embed the {tool.name}. Adjust the{' '}
            <code>height</code> and <code>max-width</code> to fit your layout.
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
            <CopyButton value={snippet} label="Copy embed code" />
          </div>
        </div>
      )}
    </section>
  )
}
