import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { RemoveDuplicatesClient } from '@/components/texttools/batchTextTools'
import { RemoveDuplicateLinesContent } from './content'

export const metadata: Metadata = buildToolMetadata('remove-duplicate-lines')

export default function Page() {
  const tool = getTool('remove-duplicate-lines')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('remove-duplicate-lines')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <RemoveDuplicatesClient />
        <RemoveDuplicateLinesContent />
      </ToolLayout>
    </>
  )
}
