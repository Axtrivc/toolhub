import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { FreelanceRateCalculatorClient } from '@/components/calculators/batch20Calculators'
import { FreelanceRateCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('freelance-rate-calculator')

export default function Page() {
  const tool = getTool('freelance-rate-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('freelance-rate-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('freelance-rate-calculator')}>
        <FreelanceRateCalculatorClient />
        <FreelanceRateCalculatorContent />
      </ToolLayout>
    </>
  )
}
