import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { VolumeConverterClient } from '@/components/calculators/batch2Clients'
import { VolumeConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('volume-converter')

export default function VolumeConverterPage() {
  const tool = getTool('volume-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('volume-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <VolumeConverterClient />
        <VolumeConverterContent />
      </ToolLayout>
    </>
  )
}
