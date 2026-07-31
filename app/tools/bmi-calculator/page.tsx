import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { BMICalculatorClient } from '@/components/calculators/BMICalculatorClient'
import { BMICalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('bmi-calculator')

export default function BMICalculatorPage() {
  const tool = getTool('bmi-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('bmi-calculator')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ToolLayout tool={tool}>
        <BMICalculatorClient />
        <BMICalculatorContent />
      </ToolLayout>
    </>
  )
}
