import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { WeekNumberCalculatorClient } from '@/components/calculators/batch30Calculators'
import { WeekNumberCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('week-number-calculator')

export default function WeekNumberCalculatorPage() {
  const tool = getTool('week-number-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('week-number-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('week-number-calculator')}>
        <WeekNumberCalculatorClient />
        <WeekNumberCalculatorContent />
      </ToolLayout>
    </>
  )
}
