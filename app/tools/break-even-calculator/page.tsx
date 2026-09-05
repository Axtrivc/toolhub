import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { BreakEvenCalculatorClient } from '@/components/calculators/batch18Calculators'
import { BreakEvenCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('break-even-calculator')

export default function Page() {
  const tool = getTool('break-even-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('break-even-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <BreakEvenCalculatorClient />
        <BreakEvenCalculatorContent />
      </ToolLayout>
    </>
  )
}
