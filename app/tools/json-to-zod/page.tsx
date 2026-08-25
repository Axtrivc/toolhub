import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { JsonToZodClient } from '@/components/tools/batch15Tools'
import { JsonToZodContent } from './content'

export const metadata: Metadata = buildToolMetadata('json-to-zod')

export default function JsonToZodPage() {
  const tool = getTool('json-to-zod')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('json-to-zod')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <JsonToZodClient />
        <JsonToZodContent />
      </ToolLayout>
    </>
  )
}
