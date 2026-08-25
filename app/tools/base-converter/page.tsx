import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { BaseConverterClient } from '@/components/tools/batch13Tools'
import { BaseConverterContent } from './content'

export const metadata: Metadata = buildToolMetadata('base-converter')

export default function BaseConverterPage() {
  const tool = getTool('base-converter')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('base-converter')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <BaseConverterClient />
        <BaseConverterContent />
      </ToolLayout>
    </>
  )
}
