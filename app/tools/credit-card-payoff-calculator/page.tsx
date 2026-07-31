import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { CreditCardPayoffCalculatorClient } from '@/components/calculators/batch3Calculators'
import { CreditCardPayoffCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('credit-card-payoff-calculator')

export default function Page() {
  const tool = getTool('credit-card-payoff-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('credit-card-payoff-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <CreditCardPayoffCalculatorClient />
        <CreditCardPayoffCalculatorContent />
      </ToolLayout>
    </>
  )
}
