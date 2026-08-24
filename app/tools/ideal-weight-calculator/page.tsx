import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { IdealWeightCalculatorClient } from '@/components/calculators/batch3Calculators'
import { IdealWeightCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('ideal-weight-calculator')

export default function Page() {
  const tool = getTool('ideal-weight-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('ideal-weight-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <IdealWeightCalculatorClient />
        <IdealWeightCalculatorContent />
      </ToolLayout>
    </>
  )
}
