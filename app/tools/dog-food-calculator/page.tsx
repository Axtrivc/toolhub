import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { DogFoodCalculatorClient } from '@/components/calculators/batch19Calculators'
import { DogFoodCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('dog-food-calculator')

export default function Page() {
  const tool = getTool('dog-food-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('dog-food-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <DogFoodCalculatorClient />
        <DogFoodCalculatorContent />
      </ToolLayout>
    </>
  )
}
