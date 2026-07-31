import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { RatioCalculatorClient } from '@/components/calculators/batch3Calculators'
import { RatioCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('ratio-calculator')

export default function Page() {
  const tool = getTool('ratio-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('ratio-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <RatioCalculatorClient />
        <RatioCalculatorContent />
      </ToolLayout>
    </>
  )
}
