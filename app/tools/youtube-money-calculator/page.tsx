import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { YouTubeMoneyCalculatorClient } from '@/components/calculators/batch25Calculators'
import { YouTubeMoneyCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('youtube-money-calculator')

export default function YouTubeMoneyCalculatorPage() {
  const tool = getTool('youtube-money-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('youtube-money-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('youtube-money-calculator')}>
        <YouTubeMoneyCalculatorClient />
        <YouTubeMoneyCalculatorContent />
      </ToolLayout>
    </>
  )
}
