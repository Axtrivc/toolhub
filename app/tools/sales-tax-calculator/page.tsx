import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { SalesTaxCalculatorClient } from '@/components/calculators/generatedClients'
import { SalesTaxCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('sales-tax-calculator')

export default function SalesTaxCalculatorPage() {
  const tool = getTool('sales-tax-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('sales-tax-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <SalesTaxCalculatorClient />
        <SalesTaxCalculatorContent />
      </ToolLayout>
    </>
  )
}
