import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { RoofingCalculatorClient } from '@/components/calculators/batch28Calculators'
import { RoofingCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('roofing-calculator')

export default function RoofingCalculatorPage() {
  const tool = getTool('roofing-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('roofing-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('roofing-calculator')}>
        <RoofingCalculatorClient />
        <RoofingCalculatorContent />
      </ToolLayout>
    </>
  )
}
