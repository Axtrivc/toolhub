import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { TreasuryBillCalculatorClient } from '@/components/calculators/batch22Calculators'
import { TreasuryBillCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('treasury-bill-calculator')

export default function TreasuryBillCalculatorPage() {
  const tool = getTool('treasury-bill-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('treasury-bill-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('treasury-bill-calculator')}>
        <TreasuryBillCalculatorClient />
        <TreasuryBillCalculatorContent />
      </ToolLayout>
    </>
  )
}
