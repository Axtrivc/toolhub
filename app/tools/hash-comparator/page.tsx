import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { HashComparatorClient } from '@/components/tools/batch13Tools'
import { HashComparatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('hash-comparator')

export default function HashComparatorPage() {
  const tool = getTool('hash-comparator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('hash-comparator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <HashComparatorClient />
        <HashComparatorContent />
      </ToolLayout>
    </>
  )
}
