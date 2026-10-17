import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { StockAverageCalculatorClient } from '@/components/calculators/batch22Calculators'
import { StockAverageCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('stock-average-calculator')

export default function StockAverageCalculatorPage() {
  const tool = getTool('stock-average-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('stock-average-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('stock-average-calculator')}>
        <StockAverageCalculatorClient />
        <StockAverageCalculatorContent />
      </ToolLayout>
    </>
  )
}
