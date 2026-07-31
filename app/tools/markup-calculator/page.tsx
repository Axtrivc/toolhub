import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { MarkupCalculatorClient } from '@/components/calculators/batch3Calculators'
import { MarkupCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('markup-calculator')

export default function Page() {
  const tool = getTool('markup-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('markup-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <MarkupCalculatorClient />
        <MarkupCalculatorContent />
      </ToolLayout>
    </>
  )
}
