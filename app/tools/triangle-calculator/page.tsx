import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { TriangleCalculatorClient } from '@/components/generators/batchGenerators'
import { TriangleCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('triangle-calculator')

export default function Page() {
  const tool = getTool('triangle-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('triangle-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <TriangleCalculatorClient />
        <TriangleCalculatorContent />
      </ToolLayout>
    </>
  )
}
