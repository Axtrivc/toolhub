import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { EbayFeeCalculatorClient } from '@/components/calculators/EbayFeeCalculatorClient'
import { EbayFeeCalculatorClientContent } from './content'

export const metadata: Metadata = buildToolMetadata('ebay-fee-calculator')

export default function Page() {
  const tool = getTool('ebay-fee-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('ebay-fee-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('ebay-fee-calculator')}>
        <EbayFeeCalculatorClient />
        <EbayFeeCalculatorClientContent />
      </ToolLayout>
    </>
  )
}
