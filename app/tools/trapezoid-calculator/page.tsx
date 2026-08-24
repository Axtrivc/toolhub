import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { TrapezoidCalculatorClient } from '@/components/calculators/batch8Calculators'
import { TrapezoidCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('trapezoid-calculator')

export default function Page() {
  const tool = getTool('trapezoid-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('trapezoid-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <TrapezoidCalculatorClient />
        <TrapezoidCalculatorContent />
      </ToolLayout>
    </>
  )
}
