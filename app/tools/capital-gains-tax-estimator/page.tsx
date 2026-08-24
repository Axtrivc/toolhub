import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { CapitalGainsTaxEstimatorClient } from '@/components/calculators/batch6Calculators'
import { CapitalGainsTaxEstimatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('capital-gains-tax-estimator')

export default function Page() {
  const tool = getTool('capital-gains-tax-estimator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('capital-gains-tax-estimator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <CapitalGainsTaxEstimatorClient />
        <CapitalGainsTaxEstimatorContent />
      </ToolLayout>
    </>
  )
}
