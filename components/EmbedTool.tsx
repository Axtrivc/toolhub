'use client'

import { useState } from 'react'
import { CopyButton } from './CopyButton'
import { SITE_URL } from '@/lib/constants'
import type { ToolMeta } from '@/lib/tool-types'
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
    <section className="tool-embed mt-12 sm:mt-20 rounded-xl bg-surface-dark text-on-dark">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 rounded-xl p-6 text-left sm:p-10"
        aria-expanded={open}
      >
        <span>
          <strong className="block font-serif text-2xl font-normal">{t(locale, 'embedTitle')}</strong>
          <span className="mt-2 block text-sm text-on-dark-soft">
            {t(locale, 'embedSubtitle')}
          </span>
        </span>
        <span aria-hidden="true" className="text-on-dark-soft">
          {open ? '−' : '+'}
        </span>
      </button>

      {open && (
        <div
          className="px-6 pb-6 sm:px-10 sm:pb-10"
        >
          <p className="mb-3 text-sm text-on-dark-soft">
            {t(locale, 'embedBody', { name })}
          </p>
          <pre
            className="overflow-x-auto whitespace-pre-wrap break-all rounded-lg bg-dark-soft p-4 font-mono text-sm text-accent-amber"
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
