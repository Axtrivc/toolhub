import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { MassConverterClient } from '@/components/converters/batch2Converters'
import { MassConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('mass-converter')

export default function Page() {
  const tool = getTool('mass-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('mass-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <MassConverterClient />
        <MassConverterContent />
      </ToolLayout>
    </>
  )
}
