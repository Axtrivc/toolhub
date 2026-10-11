import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { LoanCalculatorClient } from '@/components/calculators/LoanCalculatorClient'
import { LoanCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('loan-calculator')

export default function LoanCalculatorPage() {
  const tool = getTool('loan-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('loan-calculator')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }}
      />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('loan-calculator')}>
        <LoanCalculatorClient />
        <LoanCalculatorContent />
      </ToolLayout>
    </>
  )
}
