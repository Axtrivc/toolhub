import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { OvertimeCalculatorClient } from '@/components/calculators/batch11Calculators'
import { OvertimeCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('overtime-calculator')

export default function OvertimeCalculatorPage() {
  const tool = getTool('overtime-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('overtime-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('overtime-calculator')}>
        <OvertimeCalculatorClient />
        <OvertimeCalculatorContent />
      </ToolLayout>
    </>
  )
}
