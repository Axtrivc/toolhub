import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { SpeedConverterClient } from '@/components/calculators/batch2Clients'
import { SpeedConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('speed-converter')

export default function SpeedConverterPage() {
  const tool = getTool('speed-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('speed-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <SpeedConverterClient />
        <SpeedConverterContent />
      </ToolLayout>
    </>
  )
}
