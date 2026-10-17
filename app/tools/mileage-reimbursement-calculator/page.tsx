import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { MileageReimbursementCalculatorClient } from '@/components/calculators/batch23Calculators'
import { MileageReimbursementCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('mileage-reimbursement-calculator')

export default function MileageReimbursementCalculatorPage() {
  const tool = getTool('mileage-reimbursement-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('mileage-reimbursement-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('mileage-reimbursement-calculator')}>
        <MileageReimbursementCalculatorClient />
        <MileageReimbursementCalculatorContent />
      </ToolLayout>
    </>
  )
}
