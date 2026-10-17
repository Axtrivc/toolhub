import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { BoardFootCalculatorClient } from '@/components/calculators/batch29Calculators'
import { BoardFootCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('board-foot-calculator')

export default function BoardFootCalculatorPage() {
  const tool = getTool('board-foot-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('board-foot-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('board-foot-calculator')}>
        <BoardFootCalculatorClient />
        <BoardFootCalculatorContent />
      </ToolLayout>
    </>
  )
}