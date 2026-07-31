import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { AngleConverterClient } from '@/components/converters/batchConverters'
import { AngleConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('angle-converter')

export default function Page() {
  const tool = getTool('angle-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('angle-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <AngleConverterClient />
        <AngleConverterContent />
      </ToolLayout>
    </>
  )
}
