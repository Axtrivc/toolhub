import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { XmlFormatterClient } from '@/components/tools/batch12Tools'
import { XmlFormatterContent } from './content'

export const metadata: Metadata = buildToolMetadata('xml-formatter')

export default function XmlFormatterPage() {
  const tool = getTool('xml-formatter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('xml-formatter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <XmlFormatterClient />
        <XmlFormatterContent />
      </ToolLayout>
    </>
  )
}
