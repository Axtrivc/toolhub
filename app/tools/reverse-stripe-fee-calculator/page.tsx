import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { ReverseStripeFeeCalculatorClient } from '@/components/calculators/ReverseStripeFeeCalculatorClient'
import { ReverseStripeFeeCalculatorClientContent } from './content'

export const metadata: Metadata = buildToolMetadata('reverse-stripe-fee-calculator')

export default function Page() {
  const tool = getTool('reverse-stripe-fee-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('reverse-stripe-fee-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <ReverseStripeFeeCalculatorClient />
        <ReverseStripeFeeCalculatorClientContent />
      </ToolLayout>
    </>
  )
}
