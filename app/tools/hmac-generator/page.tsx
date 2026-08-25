import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { HmacGeneratorClient } from '@/components/tools/batch12bTools'
import { HmacGeneratorContent } from './content'

export const metadata: Metadata = buildToolMetadata('hmac-generator')

export default function HmacGeneratorPage() {
  const tool = getTool('hmac-generator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('hmac-generator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <HmacGeneratorClient />
        <HmacGeneratorContent />
      </ToolLayout>
    </>
  )
}
