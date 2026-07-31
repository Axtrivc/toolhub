import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { DTICalculatorClient } from '@/components/calculators/batch8Calculators'
import { DTICalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('dti-calculator')

export default function Page() {
  const tool = getTool('dti-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('dti-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <DTICalculatorClient />
        <DTICalculatorContent />
      </ToolLayout>
    </>
  )
}
