import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { DaysCountdownCalculatorClient } from '@/components/calculators/DaysCountdownCalculatorClient'
import { DaysCountdownCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('days-countdown-calculator')

export default function Page() {
  const tool = getTool('days-countdown-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('days-countdown-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('days-countdown-calculator')}>
        <DaysCountdownCalculatorClient />
        <DaysCountdownCalculatorContent />
      </ToolLayout>
    </>
  )
}
