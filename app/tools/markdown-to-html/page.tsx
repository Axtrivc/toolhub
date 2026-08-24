import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { MarkdownToHtmlClient } from '@/components/devtools/MarkdownToHtmlClient'
import { MarkdownToHtmlContent } from './content'

export const metadata: Metadata = buildToolMetadata('markdown-to-html')

export default function Page() {
  const tool = getTool('markdown-to-html')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('markdown-to-html')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <MarkdownToHtmlClient />
        <MarkdownToHtmlContent />
      </ToolLayout>
    </>
  )
}
