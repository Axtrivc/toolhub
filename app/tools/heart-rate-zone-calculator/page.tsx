import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { HeartRateZoneCalculatorClient } from '@/components/calculators/batch11Calculators'
import { HeartRateZoneCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('heart-rate-zone-calculator')

export default function HeartRateZoneCalculatorPage() {
  const tool = getTool('heart-rate-zone-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('heart-rate-zone-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <HeartRateZoneCalculatorClient />
        <HeartRateZoneCalculatorContent />
      </ToolLayout>
    </>
  )
}
