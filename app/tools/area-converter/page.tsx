import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { AreaConverterClient } from '@/components/calculators/batch2Clients'
import { AreaConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('area-converter')

export default function AreaConverterPage() {
  const tool = getTool('area-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('area-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <AreaConverterClient />
        <AreaConverterContent />
      </ToolLayout>
    </>
  )
}
