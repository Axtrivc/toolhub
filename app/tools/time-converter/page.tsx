import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { TimeConverterClient } from '@/components/converters/batchConverters'
import { TimeConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('time-converter')

export default function Page() {
  const tool = getTool('time-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('time-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <TimeConverterClient />
        <TimeConverterContent />
      </ToolLayout>
    </>
  )
}
