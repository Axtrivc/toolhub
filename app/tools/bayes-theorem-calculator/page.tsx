import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { BayesTheoremCalculatorClient } from '@/components/calculators/batch31Calculators'
import { BayesTheoremCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('bayes-theorem-calculator')

export default function BayesTheoremCalculatorPage() {
  const tool = getTool('bayes-theorem-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('bayes-theorem-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('bayes-theorem-calculator')}>
        <BayesTheoremCalculatorClient />
        <BayesTheoremCalculatorContent />
      </ToolLayout>
    </>
  )
}
