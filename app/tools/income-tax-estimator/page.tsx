import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { IncomeTaxEstimatorClient } from '@/components/calculators/batch3Calculators'
import { IncomeTaxEstimatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('income-tax-estimator')

export default function Page() {
  const tool = getTool('income-tax-estimator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('income-tax-estimator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <IncomeTaxEstimatorClient />
        <IncomeTaxEstimatorContent />
      </ToolLayout>
    </>
  )
}
