import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { TemperatureConverterClient } from '@/components/calculators/batch2Clients'
import { TemperatureConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('temperature-converter')

export default function TemperatureConverterPage() {
  const tool = getTool('temperature-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('temperature-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <TemperatureConverterClient />
        <TemperatureConverterContent />
      </ToolLayout>
    </>
  )
}
