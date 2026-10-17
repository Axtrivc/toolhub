import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { StudentLoanCalculatorClient } from '@/components/calculators/batch24Calculators'
import { StudentLoanCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('student-loan-payment-calculator')

export default function StudentLoanCalculatorPage() {
  const tool = getTool('student-loan-payment-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('student-loan-payment-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('student-loan-payment-calculator')}>
        <StudentLoanCalculatorClient />
        <StudentLoanCalculatorContent />
      </ToolLayout>
    </>
  )
}
