import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { EpochConverterClient } from '@/components/tools/batch10Tools'
import { EpochConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('epoch-converter')

export default function EpochConverterPage() {
  const tool = getTool('epoch-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('epoch-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <EpochConverterClient />
        <EpochConverterContent />
      </ToolLayout>
    </>
  )
}
