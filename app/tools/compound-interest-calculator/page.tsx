import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { CompoundInterestCalculatorClient } from '@/components/calculators/generatedClients'
import { CompoundInterestCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('compound-interest-calculator')

export default function CompoundInterestCalculatorPage() {
  const tool = getTool('compound-interest-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('compound-interest-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('compound-interest-calculator')}>
        <CompoundInterestCalculatorClient />
        <CompoundInterestCalculatorContent />
      </ToolLayout>
    </>
  )
}
