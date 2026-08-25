import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { FenceExtractorClient } from '@/components/tools/batch16AITools'
import { MarkdownFenceExtractorContent } from './content'

export const metadata: Metadata = buildToolMetadata('markdown-fence-extractor')

export default function MarkdownFenceExtractorPage() {
  const tool = getTool('markdown-fence-extractor')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('markdown-fence-extractor')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <FenceExtractorClient />
        <MarkdownFenceExtractorContent />
      </ToolLayout>
    </>
  )
}
