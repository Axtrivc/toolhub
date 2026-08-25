import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { CaffeineCalculatorClient } from '@/components/calculators/batch11Calculators'
import { CaffeineCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('caffeine-calculator')

export default function CaffeineCalculatorPage() {
  const tool = getTool('caffeine-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('caffeine-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool}>
        <CaffeineCalculatorClient />
        <CaffeineCalculatorContent />
      </ToolLayout>
    </>
  )
}
