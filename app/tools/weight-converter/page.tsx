import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { WeightConverterClient } from '@/components/calculators/batch2Clients'
import { WeightConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('weight-converter')

export default function WeightConverterPage() {
  const tool = getTool('weight-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('weight-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <WeightConverterClient />
        <WeightConverterContent />
      </ToolLayout>
    </>
  )
}
