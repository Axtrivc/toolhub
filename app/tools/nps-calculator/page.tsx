import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { NpsCalculatorClient } from '@/components/calculators/batch25Calculators'
import { NpsCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('nps-calculator')

export default function NpsCalculatorPage() {
  const tool = getTool('nps-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('nps-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('nps-calculator')}>
        <NpsCalculatorClient />
        <NpsCalculatorContent />
      </ToolLayout>
    </>
  )
}
