import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { URLExtractorClient } from '@/components/texttools/batch4TextTools'
import { URLExtractorContent } from './content'

export const metadata: Metadata = buildToolMetadata('url-extractor')

export default function Page() {
  const tool = getTool('url-extractor')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('url-extractor')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <URLExtractorClient />
        <URLExtractorContent />
      </ToolLayout>
    </>
  )
}
