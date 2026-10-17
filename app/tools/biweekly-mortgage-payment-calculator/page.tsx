import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { BiweeklyMortgagePaymentCalculatorClient } from '@/components/calculators/batch21Calculators'
import { BiweeklyMortgagePaymentCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('biweekly-mortgage-payment-calculator')

export default function BiweeklyMortgagePaymentCalculatorPage() {
  const tool = getTool('biweekly-mortgage-payment-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('biweekly-mortgage-payment-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('biweekly-mortgage-payment-calculator')}>
        <BiweeklyMortgagePaymentCalculatorClient />
        <BiweeklyMortgagePaymentCalculatorContent />
      </ToolLayout>
    </>
  )
}
