import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { HeatIndexCalculatorClient } from '@/components/calculators/batch31Calculators'
import { HeatIndexCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('heat-index-calculator')

export default function HeatIndexCalculatorPage() {
  const tool = getTool('heat-index-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('heat-index-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('heat-index-calculator')}>
        <HeatIndexCalculatorClient />
        <HeatIndexCalculatorContent />
      </ToolLayout>
    </>
  )
}
