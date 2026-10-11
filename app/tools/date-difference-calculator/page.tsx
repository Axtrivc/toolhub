import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { DateDifferenceClient } from '@/components/calculators/batch2Clients'
import { DateDifferenceCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('date-difference-calculator')

export default function DateDifferenceCalculatorPage() {
  const tool = getTool('date-difference-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('date-difference-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('date-difference-calculator')}>
        <DateDifferenceClient />
        <DateDifferenceCalculatorContent />
      </ToolLayout>
    </>
  )
}
