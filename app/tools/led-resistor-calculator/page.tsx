import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { LedResistorCalculatorClient } from '@/components/calculators/batch33Calculators'
import { LedResistorCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('led-resistor-calculator')

export default function LedResistorCalculatorPage() {
  const tool = getTool('led-resistor-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('led-resistor-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('led-resistor-calculator')}>
        <LedResistorCalculatorClient />
        <LedResistorCalculatorContent />
      </ToolLayout>
    </>
  )
}
