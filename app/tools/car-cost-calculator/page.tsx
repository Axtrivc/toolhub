import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { CarCostCalculatorClient } from '@/components/calculators/batch9Calculators'
import { CarCostCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('car-cost-calculator')

export default function CarCostCalculatorPage() {
  const tool = getTool('car-cost-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('car-cost-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <CarCostCalculatorClient />
        <CarCostCalculatorContent />
      </ToolLayout>
    </>
  )
}
