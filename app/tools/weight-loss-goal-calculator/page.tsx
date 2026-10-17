import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { WeightLossGoalCalculatorClient } from '@/components/calculators/batch26Calculators'
import { WeightLossGoalCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('weight-loss-goal-calculator')

export default function WeightLossGoalCalculatorPage() {
  const tool = getTool('weight-loss-goal-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('weight-loss-goal-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('weight-loss-goal-calculator')}>
        <WeightLossGoalCalculatorClient />
        <WeightLossGoalCalculatorContent />
      </ToolLayout>
    </>
  )
}
