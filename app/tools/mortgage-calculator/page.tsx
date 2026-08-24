import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { MortgageCalculatorClient } from '@/components/calculators/batch3Calculators'
import { MortgageCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('mortgage-calculator')

export default function Page() {
  const tool = getTool('mortgage-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('mortgage-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <MortgageCalculatorClient />
        <MortgageCalculatorContent />
      </ToolLayout>
    </>
  )
}
