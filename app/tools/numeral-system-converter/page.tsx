import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { NumeralSystemConverterClient } from '@/components/converters/batchConverters'
import { NumeralSystemConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('numeral-system-converter')

export default function Page() {
  const tool = getTool('numeral-system-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('numeral-system-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <NumeralSystemConverterClient />
        <NumeralSystemConverterContent />
      </ToolLayout>
    </>
  )
}
