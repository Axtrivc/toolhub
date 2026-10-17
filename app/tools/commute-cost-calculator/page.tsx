import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { CommuteCostCalculatorClient } from '@/components/calculators/batch23Calculators'
import { CommuteCostCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('commute-cost-calculator')

export default function CommuteCostCalculatorPage() {
  const tool = getTool('commute-cost-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('commute-cost-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('commute-cost-calculator')}>
        <CommuteCostCalculatorClient />
        <CommuteCostCalculatorContent />
      </ToolLayout>
    </>
  )
}
