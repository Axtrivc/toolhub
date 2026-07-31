import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { BodyFatCalculatorClient } from '@/components/calculators/batch6Calculators'
import { BodyFatCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('body-fat-calculator')

export default function Page() {
  const tool = getTool('body-fat-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('body-fat-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <BodyFatCalculatorClient />
        <BodyFatCalculatorContent />
      </ToolLayout>
    </>
  )
}
