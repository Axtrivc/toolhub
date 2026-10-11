import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { LlmCostCalculatorClient } from '@/components/tools/batch15Tools'
import { LlmCostCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('llm-cost-calculator')

export default function LlmCostCalculatorPage() {
  const tool = getTool('llm-cost-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('llm-cost-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('llm-cost-calculator')}>
        <LlmCostCalculatorClient />
        <LlmCostCalculatorContent />
      </ToolLayout>
    </>
  )
}
