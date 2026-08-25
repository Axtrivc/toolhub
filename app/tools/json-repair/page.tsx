import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { JsonRepairClient } from '@/components/tools/batch16AITools'
import { JsonRepairContent } from './content'

export const metadata: Metadata = buildToolMetadata('json-repair')

export default function JsonRepairPage() {
  const tool = getTool('json-repair')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('json-repair')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <JsonRepairClient />
        <JsonRepairContent />
      </ToolLayout>
    </>
  )
}
