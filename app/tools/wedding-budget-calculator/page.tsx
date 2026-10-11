import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { WeddingBudgetCalculatorClient } from '@/components/calculators/batch11Calculators'
import { WeddingBudgetCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('wedding-budget-calculator')

export default function WeddingBudgetCalculatorPage() {
  const tool = getTool('wedding-budget-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('wedding-budget-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('wedding-budget-calculator')}>
        <WeddingBudgetCalculatorClient />
        <WeddingBudgetCalculatorContent />
      </ToolLayout>
    </>
  )
}
