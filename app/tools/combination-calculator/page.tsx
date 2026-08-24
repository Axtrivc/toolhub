import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { CombinationCalculatorClient } from '@/components/calculators/batch7Calculators'
import { CombinationCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('combination-calculator')

export default function Page() {
  const tool = getTool('combination-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('combination-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <CombinationCalculatorClient />
        <CombinationCalculatorContent />
      </ToolLayout>
    </>
  )
}
