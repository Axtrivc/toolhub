import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { AmortizationTableGeneratorClient } from '@/components/calculators/batch11Calculators'
import { AmortizationTableGeneratorContent } from './content'

export const metadata: Metadata = buildToolMetadata('amortization-table-generator')

export default function AmortizationTableGeneratorPage() {
  const tool = getTool('amortization-table-generator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('amortization-table-generator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <AmortizationTableGeneratorClient />
        <AmortizationTableGeneratorContent />
      </ToolLayout>
    </>
  )
}
