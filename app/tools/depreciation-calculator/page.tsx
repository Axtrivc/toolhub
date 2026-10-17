import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { DepreciationCalculatorClient } from '@/components/calculators/batch23Calculators'
import { DepreciationCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('depreciation-calculator')

export default function DepreciationCalculatorPage() {
  const tool = getTool('depreciation-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('depreciation-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('depreciation-calculator')}>
        <DepreciationCalculatorClient />
        <DepreciationCalculatorContent />
      </ToolLayout>
    </>
  )
}
