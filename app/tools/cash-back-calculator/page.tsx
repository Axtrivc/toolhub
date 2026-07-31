import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { CashBackCalculatorClient } from '@/components/calculators/batch8Calculators'
import { CashBackCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('cash-back-calculator')

export default function Page() {
  const tool = getTool('cash-back-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('cash-back-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <CashBackCalculatorClient />
        <CashBackCalculatorContent />
      </ToolLayout>
    </>
  )
}
