import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { PermutationCalculatorClient } from '@/components/calculators/batch7Calculators'
import { PermutationCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('permutation-calculator')

export default function Page() {
  const tool = getTool('permutation-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('permutation-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <PermutationCalculatorClient />
        <PermutationCalculatorContent />
      </ToolLayout>
    </>
  )
}
