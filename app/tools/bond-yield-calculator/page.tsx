import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTool } from '@/lib/tools'
import { buildToolMetadata, buildToolJsonLd, jsonLdStringify } from '@/lib/seo'
import { ToolLayout } from '@/components/ToolLayout'
import { getToolL10nRecord } from '@/lib/i18n/tool-l10n'
import { BondYieldCalculatorClient } from '@/components/calculators/batch22Calculators'
import { BondYieldCalculatorContent } from './content'

export const metadata: Metadata = buildToolMetadata('bond-yield-calculator')

export default function BondYieldCalculatorPage() {
  const tool = getTool('bond-yield-calculator')
  if (!tool) notFound()
  const jsonLd = buildToolJsonLd('bond-yield-calculator')
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdStringify(jsonLd) }} />
      <ToolLayout tool={tool} l10n={getToolL10nRecord('bond-yield-calculator')}>
        <BondYieldCalculatorClient />
        <BondYieldCalculatorContent />
      </ToolLayout>
    </>
  )
}
