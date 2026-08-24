import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { FrequencyConverterClient } from '@/components/converters/batchConverters'
import { FrequencyConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('frequency-converter')

export default function Page() {
  const tool = getTool('frequency-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('frequency-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <FrequencyConverterClient />
        <FrequencyConverterContent />
      </ToolLayout>
    </>
  )
}
