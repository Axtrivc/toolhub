import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
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
      <ToolLayout tool={tool}>
        <EbayFeeCalculatorClient />
        <EbayFeeCalculatorClientContent />
      </ToolLayout>
    </>
  )
}
