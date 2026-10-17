import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { SquareFeeCalculatorClient } from '@/components/calculators/batch25Calculators'
import { SquareFeeCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('square-fee-calculator')

export default function SquareFeeCalculatorPage() {
  const tool = getTool('square-fee-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('square-fee-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('square-fee-calculator')}>
        <SquareFeeCalculatorClient />
        <SquareFeeCalculatorContent />
      </ToolLayout>
    </>
  )
}
