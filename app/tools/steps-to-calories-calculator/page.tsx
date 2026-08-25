import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { StepsToCaloriesCalculatorClient } from '@/components/calculators/batch11Calculators'
import { StepsToCaloriesCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('steps-to-calories-calculator')

export default function StepsToCaloriesCalculatorPage() {
  const tool = getTool('steps-to-calories-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('steps-to-calories-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <StepsToCaloriesCalculatorClient />
        <StepsToCaloriesCalculatorContent />
      </ToolLayout>
    </>
  )
}
