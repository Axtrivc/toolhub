import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { RunwayCalculatorClient } from '@/components/calculators/batch20Calculators'
import { RunwayCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('runway-calculator')

export default function Page() {
  const tool = getTool('runway-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('runway-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <RunwayCalculatorClient />
        <RunwayCalculatorContent />
      </ToolLayout>
    </>
  )
}
