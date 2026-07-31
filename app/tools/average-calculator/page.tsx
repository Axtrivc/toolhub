import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { AverageCalculatorClient } from '@/components/calculators/batch2Clients'
import { AverageCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('average-calculator')

export default function AverageCalculatorPage() {
  const tool = getTool('average-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('average-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <AverageCalculatorClient />
        <AverageCalculatorContent />
      </ToolLayout>
    </>
  )
}
