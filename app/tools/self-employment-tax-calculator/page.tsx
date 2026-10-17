import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { SelfEmploymentTaxCalculatorClient } from '@/components/calculators/batch23Calculators'
import { SelfEmploymentTaxCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('self-employment-tax-calculator')

export default function SelfEmploymentTaxCalculatorPage() {
  const tool = getTool('self-employment-tax-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('self-employment-tax-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('self-employment-tax-calculator')}>
        <SelfEmploymentTaxCalculatorClient />
        <SelfEmploymentTaxCalculatorContent />
      </ToolLayout>
    </>
  )
}
