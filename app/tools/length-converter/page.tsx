import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { LengthConverterClient } from '@/components/calculators/generatedClients'
import { LengthConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('length-converter')

export default function LengthConverterPage() {
  const tool = getTool('length-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('length-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <LengthConverterClient />
        <LengthConverterContent />
      </ToolLayout>
    </>
  )
}
