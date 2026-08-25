import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { EmbeddingPriceClient } from '@/components/tools/batch17AITools'
import { EmbeddingPriceCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('embedding-price-calculator')

export default function EmbeddingPriceCalculatorPage() {
  const tool = getTool('embedding-price-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('embedding-price-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <EmbeddingPriceClient />
        <EmbeddingPriceCalculatorContent />
      </ToolLayout>
    </>
  )
}
