import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { RaceTimePredictorClient } from '@/components/calculators/batch26Calculators'
import { RaceTimePredictorContent } from './content'

export const metadata: Metadata = buildToolMetadata('race-time-predictor')

export default function RaceTimePredictorPage() {
  const tool = getTool('race-time-predictor')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('race-time-predictor')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('race-time-predictor')}>
        <RaceTimePredictorClient />
        <RaceTimePredictorContent />
      </ToolLayout>
    </>
  )
}
