import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { ProfitMarginCalculatorClient } from '@/components/calculators/batch18Calculators'
import { ProfitMarginCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('profit-margin-calculator')

export default function Page() {
  const tool = getTool('profit-margin-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('profit-margin-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <ProfitMarginCalculatorClient />
        <ProfitMarginCalculatorContent />
      </ToolLayout>
    </>
  )
}
