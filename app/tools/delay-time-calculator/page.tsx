import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { DelayTimeCalculatorClient } from '@/components/calculators/batch33Calculators'
import { DelayTimeCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('delay-time-calculator')

export default function DelayTimeCalculatorPage() {
  const tool = getTool('delay-time-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('delay-time-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('delay-time-calculator')}>
        <DelayTimeCalculatorClient />
        <DelayTimeCalculatorContent />
      </ToolLayout>
    </>
  )
}
