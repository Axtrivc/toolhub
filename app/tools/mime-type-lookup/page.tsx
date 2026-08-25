import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { MimeTypeLookupClient } from '@/components/tools/batch12Tools'
import { MimeTypeLookupContent } from './content'

export const metadata: Metadata = buildToolMetadata('mime-type-lookup')

export default function MimeTypeLookupPage() {
  const tool = getTool('mime-type-lookup')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('mime-type-lookup')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <MimeTypeLookupClient />
        <MimeTypeLookupContent />
      </ToolLayout>
    </>
  )
}
