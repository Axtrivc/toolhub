import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { PowerConverterClient } from '@/components/converters/batch2Converters'
import { PowerConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('power-converter')

export default function Page() {
  const tool = getTool('power-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('power-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <PowerConverterClient />
        <PowerConverterContent />
      </ToolLayout>
    </>
  )
}
