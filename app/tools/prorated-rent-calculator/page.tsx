import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { ProratedRentCalculatorClient } from '@/components/calculators/batch21Calculators'
import { ProratedRentCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('prorated-rent-calculator')

export default function ProratedRentCalculatorPage() {
  const tool = getTool('prorated-rent-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('prorated-rent-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('prorated-rent-calculator')}>
        <ProratedRentCalculatorClient />
        <ProratedRentCalculatorContent />
      </ToolLayout>
    </>
  )
}
