import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { PercentageCalculatorClient } from '@/components/calculators/PercentageCalculatorClient'
import { PercentageCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('percentage-calculator')

export default function PercentageCalculatorPage() {
  const tool = getTool('percentage-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('percentage-calculator')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ToolLayout tool={tool}>
        <PercentageCalculatorClient />
        <PercentageCalculatorContent />
      </ToolLayout>
    </>
  )
}
