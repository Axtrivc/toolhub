import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { IdealWeightCalculatorClient } from '@/components/calculators/batch3Calculators'
import { IdealWeightCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('ideal-weight-calculator')

export default function Page() {
  const tool = getTool('ideal-weight-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('ideal-weight-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('ideal-weight-calculator')}>
        <IdealWeightCalculatorClient />
        <IdealWeightCalculatorContent />
      </ToolLayout>
    </>
  )
}
