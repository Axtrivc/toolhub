import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { UnitPriceCalculatorClient } from '@/components/generators/batchGenerators'
import { UnitPriceCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('unit-price-calculator')

export default function Page() {
  const tool = getTool('unit-price-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('unit-price-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <UnitPriceCalculatorClient />
        <UnitPriceCalculatorContent />
      </ToolLayout>
    </>
  )
}
