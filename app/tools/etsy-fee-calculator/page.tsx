import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { EtsyFeeCalculatorClient } from '@/components/calculators/batch25Calculators'
import { EtsyFeeCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('etsy-fee-calculator')

export default function EtsyFeeCalculatorPage() {
  const tool = getTool('etsy-fee-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('etsy-fee-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('etsy-fee-calculator')}>
        <EtsyFeeCalculatorClient />
        <EtsyFeeCalculatorContent />
      </ToolLayout>
    </>
  )
}
