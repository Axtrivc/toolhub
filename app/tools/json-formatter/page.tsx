import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { JSONFormatterClient } from '@/components/texttools/batch3TextTools'
import { JSONFormatterContent } from './content'

export const metadata: Metadata = buildToolMetadata('json-formatter')

export default function Page() {
  const tool = getTool('json-formatter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('json-formatter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <JSONFormatterClient />
        <JSONFormatterContent />
      </ToolLayout>
    </>
  )
}
