import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { StepsToMilesCalculatorClient } from '@/components/calculators/batch26Calculators'
import { StepsToMilesCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('steps-to-miles-calculator')

export default function StepsToMilesCalculatorPage() {
  const tool = getTool('steps-to-miles-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('steps-to-miles-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('steps-to-miles-calculator')}>
        <StepsToMilesCalculatorClient />
        <StepsToMilesCalculatorContent />
      </ToolLayout>
    </>
  )
}
