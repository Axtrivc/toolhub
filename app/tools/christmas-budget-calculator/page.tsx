import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { ChristmasBudgetCalculatorClient } from '@/components/calculators/batch24Calculators'
import { ChristmasBudgetCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('christmas-budget-calculator')

export default function ChristmasBudgetCalculatorPage() {
  const tool = getTool('christmas-budget-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('christmas-budget-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('christmas-budget-calculator')}>
        <ChristmasBudgetCalculatorClient />
        <ChristmasBudgetCalculatorContent />
      </ToolLayout>
    </>
  )
}
