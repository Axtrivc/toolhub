import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { VoltageDividerCalculatorClient } from '@/components/calculators/batch33Calculators'
import { VoltageDividerCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('voltage-divider-calculator')

export default function VoltageDividerCalculatorPage() {
  const tool = getTool('voltage-divider-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('voltage-divider-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('voltage-divider-calculator')}>
        <VoltageDividerCalculatorClient />
        <VoltageDividerCalculatorContent />
      </ToolLayout>
    </>
  )
}
