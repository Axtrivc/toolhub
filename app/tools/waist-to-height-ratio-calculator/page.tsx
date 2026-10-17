import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { WaistToHeightRatioCalculatorClient } from '@/components/calculators/batch26Calculators'
import { WaistToHeightRatioCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('waist-to-height-ratio-calculator')

export default function WaistToHeightRatioCalculatorPage() {
  const tool = getTool('waist-to-height-ratio-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('waist-to-height-ratio-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('waist-to-height-ratio-calculator')}>
        <WaistToHeightRatioCalculatorClient />
        <WaistToHeightRatioCalculatorContent />
      </ToolLayout>
    </>
  )
}
