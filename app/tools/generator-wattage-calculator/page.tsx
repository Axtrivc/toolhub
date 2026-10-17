import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { GeneratorWattageCalculatorClient } from '@/components/tools/batch29Tools'
import { GeneratorWattageCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('generator-wattage-calculator')

export default function GeneratorWattageCalculatorPage() {
  const tool = getTool('generator-wattage-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('generator-wattage-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('generator-wattage-calculator')}>
        <GeneratorWattageCalculatorClient />
        <GeneratorWattageCalculatorContent />
      </ToolLayout>
    </>
  )
}