import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { ContractorVsEmployeeCalculatorClient } from '@/components/calculators/batch23Calculators'
import { ContractorVsEmployeeCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('contractor-vs-employee-calculator')

export default function ContractorVsEmployeeCalculatorPage() {
  const tool = getTool('contractor-vs-employee-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('contractor-vs-employee-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('contractor-vs-employee-calculator')}>
        <ContractorVsEmployeeCalculatorClient />
        <ContractorVsEmployeeCalculatorContent />
      </ToolLayout>
    </>
  )
}
