import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { InflationCalculatorClient } from '@/components/generators/batchGenerators'
import { InflationCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('inflation-calculator')

export default function Page() {
  const tool = getTool('inflation-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('inflation-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <InflationCalculatorClient />
        <InflationCalculatorContent />
      </ToolLayout>
    </>
  )
}
