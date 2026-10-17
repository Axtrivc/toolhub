import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { ConversionRateCalculatorClient } from '@/components/calculators/batch25Calculators'
import { ConversionRateCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('conversion-rate-calculator')

export default function ConversionRateCalculatorPage() {
  const tool = getTool('conversion-rate-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('conversion-rate-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('conversion-rate-calculator')}>
        <ConversionRateCalculatorClient />
        <ConversionRateCalculatorContent />
      </ToolLayout>
    </>
  )
}
