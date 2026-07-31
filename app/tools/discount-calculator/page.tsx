import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { DiscountCalculatorClient } from '@/components/calculators/generatedClients'
import { DiscountCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('discount-calculator')

export default function DiscountCalculatorPage() {
  const tool = getTool('discount-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('discount-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <DiscountCalculatorClient />
        <DiscountCalculatorContent />
      </ToolLayout>
    </>
  )
}
