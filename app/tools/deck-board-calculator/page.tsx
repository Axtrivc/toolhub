import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { DeckBoardCalculatorClient } from '@/components/calculators/batch28Calculators'
import { DeckBoardCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('deck-board-calculator')

export default function DeckBoardCalculatorPage() {
  const tool = getTool('deck-board-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('deck-board-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('deck-board-calculator')}>
        <DeckBoardCalculatorClient />
        <DeckBoardCalculatorContent />
      </ToolLayout>
    </>
  )
}
