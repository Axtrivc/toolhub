import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { PropertyTaxCalculatorClient } from '@/components/calculators/batch21Calculators'
import { PropertyTaxCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('property-tax-calculator')

export default function PropertyTaxCalculatorPage() {
  const tool = getTool('property-tax-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('property-tax-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('property-tax-calculator')}>
        <PropertyTaxCalculatorClient />
        <PropertyTaxCalculatorContent />
      </ToolLayout>
    </>
  )
}
