import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { ProteinIntakeCalculatorClient } from '@/components/calculators/batch9Calculators'
import { ProteinIntakeCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('protein-intake-calculator')

export default function ProteinIntakeCalculatorPage() {
  const tool = getTool('protein-intake-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('protein-intake-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <ProteinIntakeCalculatorClient />
        <ProteinIntakeCalculatorContent />
      </ToolLayout>
    </>
  )
}
