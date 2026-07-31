import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { CommissionCalculatorClient } from '@/components/calculators/batch8Calculators'
import { CommissionCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('commission-calculator')

export default function Page() {
  const tool = getTool('commission-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('commission-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <CommissionCalculatorClient />
        <CommissionCalculatorContent />
      </ToolLayout>
    </>
  )
}
