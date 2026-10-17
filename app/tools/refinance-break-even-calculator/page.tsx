import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { RefinanceBreakEvenCalculatorClient } from '@/components/calculators/batch21Calculators'
import { RefinanceBreakEvenCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('refinance-break-even-calculator')

export default function RefinanceBreakEvenCalculatorPage() {
  const tool = getTool('refinance-break-even-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('refinance-break-even-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('refinance-break-even-calculator')}>
        <RefinanceBreakEvenCalculatorClient />
        <RefinanceBreakEvenCalculatorContent />
      </ToolLayout>
    </>
  )
}
