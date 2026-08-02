import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { TdeeCalculatorClient } from '@/components/calculators/TdeeCalculatorClient'
import { TdeeCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('tdee-calculator')

export default function Page() {
  const tool = getTool('tdee-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('tdee-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <TdeeCalculatorClient />
        <TdeeCalculatorContent />
      </ToolLayout>
    </>
  )
}
