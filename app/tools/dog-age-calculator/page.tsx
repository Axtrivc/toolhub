import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { DogAgeCalculatorClient } from '@/components/calculators/batch11Calculators'
import { DogAgeCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('dog-age-calculator')

export default function DogAgeCalculatorPage() {
  const tool = getTool('dog-age-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('dog-age-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <DogAgeCalculatorClient />
        <DogAgeCalculatorContent />
      </ToolLayout>
    </>
  )
}
