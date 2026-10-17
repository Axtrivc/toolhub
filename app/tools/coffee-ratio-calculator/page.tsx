import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { CoffeeRatioCalculatorClient } from '@/components/calculators/batch29Calculators'
import { CoffeeRatioCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('coffee-ratio-calculator')

export default function CoffeeRatioCalculatorPage() {
  const tool = getTool('coffee-ratio-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('coffee-ratio-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('coffee-ratio-calculator')}>
        <CoffeeRatioCalculatorClient />
        <CoffeeRatioCalculatorContent />
      </ToolLayout>
    </>
  )
}