import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { BillSplitCalculatorClient } from '@/components/calculators/batch8Calculators'
import { BillSplitCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('bill-split-calculator')

export default function Page() {
  const tool = getTool('bill-split-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('bill-split-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <BillSplitCalculatorClient />
        <BillSplitCalculatorContent />
      </ToolLayout>
    </>
  )
}
