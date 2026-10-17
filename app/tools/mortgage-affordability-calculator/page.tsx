import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { HouseAffordabilityCalculatorClient } from '@/components/calculators/batch21Calculators'
import { HouseAffordabilityCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('mortgage-affordability-calculator')

export default function HouseAffordabilityCalculatorPage() {
  const tool = getTool('mortgage-affordability-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('mortgage-affordability-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('mortgage-affordability-calculator')}>
        <HouseAffordabilityCalculatorClient />
        <HouseAffordabilityCalculatorContent />
      </ToolLayout>
    </>
  )
}
