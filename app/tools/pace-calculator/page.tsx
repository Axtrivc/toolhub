import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { PaceCalculatorClient } from '@/components/calculators/batch9Calculators'
import { PaceCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('pace-calculator')

export default function PaceCalculatorPage() {
  const tool = getTool('pace-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('pace-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('pace-calculator')}>
        <PaceCalculatorClient />
        <PaceCalculatorContent />
      </ToolLayout>
    </>
  )
}
