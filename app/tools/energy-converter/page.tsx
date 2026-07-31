import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { EnergyConverterClient } from '@/components/converters/batchConverters'
import { EnergyConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('energy-converter')

export default function Page() {
  const tool = getTool('energy-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('energy-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <EnergyConverterClient />
        <EnergyConverterContent />
      </ToolLayout>
    </>
  )
}
