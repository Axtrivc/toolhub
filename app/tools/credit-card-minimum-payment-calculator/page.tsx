import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { CreditCardMinimumCalculatorClient } from '@/components/calculators/batch8Calculators'
import { CreditCardMinimumPaymentCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('credit-card-minimum-payment-calculator')

export default function Page() {
  const tool = getTool('credit-card-minimum-payment-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('credit-card-minimum-payment-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <CreditCardMinimumCalculatorClient />
        <CreditCardMinimumPaymentCalculatorContent />
      </ToolLayout>
    </>
  )
}
