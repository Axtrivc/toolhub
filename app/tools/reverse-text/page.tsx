import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { ReverseTextClient } from '@/components/texttools/batchTextTools'
import { ReverseTextContent } from './content'

export const metadata: Metadata = buildToolMetadata('reverse-text')

export default function Page() {
  const tool = getTool('reverse-text')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('reverse-text')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <ReverseTextClient />
        <ReverseTextContent />
      </ToolLayout>
    </>
  )
}
