import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { ElectricityCostCalculatorClient } from '@/components/calculators/batch9Calculators'
import { ElectricityCostCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('electricity-cost-calculator')

export default function ElectricityCostCalculatorPage() {
  const tool = getTool('electricity-cost-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('electricity-cost-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <ElectricityCostCalculatorClient />
        <ElectricityCostCalculatorContent />
      </ToolLayout>
    </>
  )
}
