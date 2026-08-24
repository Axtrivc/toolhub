import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { SortLinesClient } from '@/components/texttools/batchTextTools'
import { SortLinesContent } from './content'

export const metadata: Metadata = buildToolMetadata('sort-lines')

export default function Page() {
  const tool = getTool('sort-lines')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('sort-lines')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <SortLinesClient />
        <SortLinesContent />
      </ToolLayout>
    </>
  )
}
