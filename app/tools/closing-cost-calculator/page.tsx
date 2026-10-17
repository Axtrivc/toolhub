import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { ClosingCostCalculatorClient } from '@/components/calculators/batch21Calculators'
import { ClosingCostCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('closing-cost-calculator')

export default function ClosingCostCalculatorPage() {
  const tool = getTool('closing-cost-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('closing-cost-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('closing-cost-calculator')}>
        <ClosingCostCalculatorClient />
        <ClosingCostCalculatorContent />
      </ToolLayout>
    </>
  )
}
