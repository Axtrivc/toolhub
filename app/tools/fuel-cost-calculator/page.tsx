import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { FuelCostCalculatorClient } from '@/components/calculators/batch11Calculators'
import { FuelCostCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('fuel-cost-calculator')

export default function FuelCostCalculatorPage() {
  const tool = getTool('fuel-cost-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('fuel-cost-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('fuel-cost-calculator')}>
        <FuelCostCalculatorClient />
        <FuelCostCalculatorContent />
      </ToolLayout>
    </>
  )
}
