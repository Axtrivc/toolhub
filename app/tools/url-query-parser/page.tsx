import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { URLQueryParserClient } from '@/components/texttools/batch4TextTools'
import { URLQueryParserContent } from './content'

export const metadata: Metadata = buildToolMetadata('url-query-parser')

export default function Page() {
  const tool = getTool('url-query-parser')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('url-query-parser')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <URLQueryParserClient />
        <URLQueryParserContent />
      </ToolLayout>
    </>
  )
}
