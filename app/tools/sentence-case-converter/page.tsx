import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { SentenceCaseConverterClient } from '@/components/texttools/batchTextTools'
import { SentenceCaseConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('sentence-case-converter')

export default function Page() {
  const tool = getTool('sentence-case-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('sentence-case-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <SentenceCaseConverterClient />
        <SentenceCaseConverterContent />
      </ToolLayout>
    </>
  )
}
