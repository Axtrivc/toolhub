import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { SubscriptionCostCalculatorClient } from '@/components/calculators/batch11Calculators'
import { SubscriptionCostCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('subscription-cost-calculator')

export default function SubscriptionCostCalculatorPage() {
  const tool = getTool('subscription-cost-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('subscription-cost-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <SubscriptionCostCalculatorClient />
        <SubscriptionCostCalculatorContent />
      </ToolLayout>
    </>
  )
}
