import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { JSONtoCSVClient } from '@/components/texttools/batch3TextTools'
import { JSONtoCSVContent } from './content'

export const metadata: Metadata = buildToolMetadata('json-to-csv')

export default function Page() {
  const tool = getTool('json-to-csv')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('json-to-csv')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <JSONtoCSVClient />
        <JSONtoCSVContent />
      </ToolLayout>
    </>
  )
}
