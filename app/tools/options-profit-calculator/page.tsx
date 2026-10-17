import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { OptionsProfitCalculatorClient } from '@/components/calculators/batch22Calculators'
import { OptionsProfitCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('options-profit-calculator')

export default function OptionsProfitCalculatorPage() {
  const tool = getTool('options-profit-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('options-profit-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('options-profit-calculator')}>
        <OptionsProfitCalculatorClient />
        <OptionsProfitCalculatorContent />
      </ToolLayout>
    </>
  )
}
