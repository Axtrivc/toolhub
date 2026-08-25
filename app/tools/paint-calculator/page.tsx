import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { PaintCalculatorClient } from '@/components/calculators/batch11Calculators'
import { PaintCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('paint-calculator')

export default function PaintCalculatorPage() {
  const tool = getTool('paint-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('paint-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <PaintCalculatorClient />
        <PaintCalculatorContent />
      </ToolLayout>
    </>
  )
}
