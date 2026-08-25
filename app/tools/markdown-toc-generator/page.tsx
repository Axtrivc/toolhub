import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { MarkdownTocGeneratorClient } from '@/components/tools/batch12Tools'
import { MarkdownTocGeneratorContent } from './content'

export const metadata: Metadata = buildToolMetadata('markdown-toc-generator')

export default function MarkdownTocGeneratorPage() {
  const tool = getTool('markdown-toc-generator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('markdown-toc-generator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <MarkdownTocGeneratorClient />
        <MarkdownTocGeneratorContent />
      </ToolLayout>
    </>
  )
}
