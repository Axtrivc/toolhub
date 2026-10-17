import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { AmazonSellerFeeCalculatorClient } from '@/components/calculators/batch25Calculators'
import { AmazonSellerFeeCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('amazon-seller-fee-calculator')

export default function AmazonSellerFeeCalculatorPage() {
  const tool = getTool('amazon-seller-fee-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('amazon-seller-fee-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('amazon-seller-fee-calculator')}>
        <AmazonSellerFeeCalculatorClient />
        <AmazonSellerFeeCalculatorContent />
      </ToolLayout>
    </>
  )
}
