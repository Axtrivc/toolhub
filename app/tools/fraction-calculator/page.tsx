import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { FractionCalculatorClient } from '@/components/calculators/batch3Calculators'
import { FractionCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('fraction-calculator')

export default function Page() {
  const tool = getTool('fraction-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('fraction-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <FractionCalculatorClient />
        <FractionCalculatorContent />
      </ToolLayout>
    </>
  )
}
