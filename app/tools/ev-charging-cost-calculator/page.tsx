import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { EvChargingCostCalculatorClient } from '@/components/calculators/batch24Calculators'
import { EvChargingCostCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('ev-charging-cost-calculator')

export default function EvChargingCostCalculatorPage() {
  const tool = getTool('ev-charging-cost-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('ev-charging-cost-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('ev-charging-cost-calculator')}>
        <EvChargingCostCalculatorClient />
        <EvChargingCostCalculatorContent />
      </ToolLayout>
    </>
  )
}
