import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { LlmApiCostClient } from '@/components/calculators/batch18Calculators'
import { LlmApiCostContent } from './content'

export const metadata: Metadata = buildToolMetadata('llm-api-cost-calculator')

export default function Page() {
  const tool = getTool('llm-api-cost-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('llm-api-cost-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('llm-api-cost-calculator')}>
        <LlmApiCostClient />
        <LlmApiCostContent />
      </ToolLayout>
    </>
  )
}
