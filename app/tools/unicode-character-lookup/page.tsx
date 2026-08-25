import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { UnicodeLookupClient } from '@/components/tools/batch13Tools'
import { UnicodeCharacterLookupContent } from './content'

export const metadata: Metadata = buildToolMetadata('unicode-character-lookup')

export default function UnicodeCharacterLookupPage() {
  const tool = getTool('unicode-character-lookup')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('unicode-character-lookup')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <UnicodeLookupClient />
        <UnicodeCharacterLookupContent />
      </ToolLayout>
    </>
  )
}
