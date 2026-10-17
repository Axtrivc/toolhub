import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { PregnancyWeightGainCalculatorClient } from '@/components/calculators/batch27Calculators'
import { PregnancyWeightGainCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('pregnancy-weight-gain-calculator')

export default function PregnancyWeightGainCalculatorPage() {
  const tool = getTool('pregnancy-weight-gain-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('pregnancy-weight-gain-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('pregnancy-weight-gain-calculator')}>
        <PregnancyWeightGainCalculatorClient />
        <PregnancyWeightGainCalculatorContent />
      </ToolLayout>
    </>
  )
}
