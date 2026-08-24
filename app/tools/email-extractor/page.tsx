import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { EmailExtractorClient } from '@/components/texttools/batch4TextTools'
import { EmailExtractorContent } from './content'

export const metadata: Metadata = buildToolMetadata('email-extractor')

export default function Page() {
  const tool = getTool('email-extractor')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('email-extractor')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <EmailExtractorClient />
        <EmailExtractorContent />
      </ToolLayout>
    </>
  )
}
