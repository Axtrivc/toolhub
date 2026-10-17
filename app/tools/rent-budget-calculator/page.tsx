import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { RentBudgetCalculatorClient } from '@/components/calculators/batch24Calculators'
import { RentBudgetCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('rent-budget-calculator')

export default function RentBudgetCalculatorPage() {
  const tool = getTool('rent-budget-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('rent-budget-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('rent-budget-calculator')}>
        <RentBudgetCalculatorClient />
        <RentBudgetCalculatorContent />
      </ToolLayout>
    </>
  )
}
