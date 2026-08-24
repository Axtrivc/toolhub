import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { CalorieCalculatorClient } from '@/components/calculators/batch3Calculators'
import { CalorieCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('calorie-calculator')

export default function Page() {
  const tool = getTool('calorie-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('calorie-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <CalorieCalculatorClient />
        <CalorieCalculatorContent />
      </ToolLayout>
    </>
  )
}
