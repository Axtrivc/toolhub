import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { RentVsBuyCalculatorClient } from '@/components/calculators/batch6Calculators'
import { RentVsBuyCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('rent-vs-buy-calculator')

export default function Page() {
  const tool = getTool('rent-vs-buy-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('rent-vs-buy-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <RentVsBuyCalculatorClient />
        <RentVsBuyCalculatorContent />
      </ToolLayout>
    </>
  )
}
