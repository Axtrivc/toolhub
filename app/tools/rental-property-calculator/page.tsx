import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { RentalPropertyCalculatorClient } from '@/components/calculators/batch21Calculators'
import { RentalPropertyCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('rental-property-calculator')

export default function RentalPropertyCalculatorPage() {
  const tool = getTool('rental-property-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('rental-property-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('rental-property-calculator')}>
        <RentalPropertyCalculatorClient />
        <RentalPropertyCalculatorContent />
      </ToolLayout>
    </>
  )
}
