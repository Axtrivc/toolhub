import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { LotteryOddsCalculatorClient } from '@/components/calculators/batch22Calculators'
import { LotteryOddsCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('lottery-odds-calculator')

export default function LotteryOddsCalculatorPage() {
  const tool = getTool('lottery-odds-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('lottery-odds-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('lottery-odds-calculator')}>
        <LotteryOddsCalculatorClient />
        <LotteryOddsCalculatorContent />
      </ToolLayout>
    </>
  )
}
