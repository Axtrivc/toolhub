import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { DaysCountdownCalculatorClient } from '@/components/calculators/DaysCountdownCalculatorClient'
import { DaysCountdownCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('days-countdown-calculator')

export default function Page() {
  const tool = getTool('days-countdown-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('days-countdown-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <DaysCountdownCalculatorClient />
        <DaysCountdownCalculatorContent />
      </ToolLayout>
    </>
  )
}
