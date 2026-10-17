import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { OvulationCalculatorClient } from '@/components/calculators/batch27Calculators'
import { OvulationCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('ovulation-calculator')

export default function OvulationCalculatorPage() {
  const tool = getTool('ovulation-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('ovulation-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('ovulation-calculator')}>
        <OvulationCalculatorClient />
        <OvulationCalculatorContent />
      </ToolLayout>
    </>
  )
}
