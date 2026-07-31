import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { BMRCalculatorClient } from '@/components/calculators/batch3Calculators'
import { BMRCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('bmr-calculator')

export default function Page() {
  const tool = getTool('bmr-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('bmr-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <BMRCalculatorClient />
        <BMRCalculatorContent />
      </ToolLayout>
    </>
  )
}
