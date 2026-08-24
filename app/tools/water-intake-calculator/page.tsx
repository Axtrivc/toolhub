import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { WaterIntakeCalculatorClient } from '@/components/calculators/batch3Calculators'
import { WaterIntakeCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('water-intake-calculator')

export default function Page() {
  const tool = getTool('water-intake-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('water-intake-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <WaterIntakeCalculatorClient />
        <WaterIntakeCalculatorContent />
      </ToolLayout>
    </>
  )
}
