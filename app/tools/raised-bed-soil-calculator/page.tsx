import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { RaisedBedSoilCalculatorClient } from '@/components/calculators/batch29Calculators'
import { RaisedBedSoilCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('raised-bed-soil-calculator')

export default function RaisedBedSoilCalculatorPage() {
  const tool = getTool('raised-bed-soil-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('raised-bed-soil-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('raised-bed-soil-calculator')}>
        <RaisedBedSoilCalculatorClient />
        <RaisedBedSoilCalculatorContent />
      </ToolLayout>
    </>
  )
}