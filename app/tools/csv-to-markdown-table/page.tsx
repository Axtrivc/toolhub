import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { CsvToMarkdownTableClient } from '@/components/texttools/CsvToMarkdownTableClient'
import { CsvToMarkdownTableContent } from './content'

export const metadata: Metadata = buildToolMetadata('csv-to-markdown-table')

export default function Page() {
  const tool = getTool('csv-to-markdown-table')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('csv-to-markdown-table')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <CsvToMarkdownTableClient />
        <CsvToMarkdownTableContent />
      </ToolLayout>
    </>
  )
}
