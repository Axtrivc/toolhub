import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { DensityConverterClient } from '@/components/converters/batch2Converters'
import { DensityConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('density-converter')

export default function Page() {
  const tool = getTool('density-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('density-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <DensityConverterClient />
        <DensityConverterContent />
      </ToolLayout>
    </>
  )
}
